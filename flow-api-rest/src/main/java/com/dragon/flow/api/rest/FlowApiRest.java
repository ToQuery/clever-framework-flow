package com.dragon.flow.api.rest;

import com.baomidou.kisso.SSOConfig;
import com.baomidou.kisso.SSOHelper;
import com.baomidou.kisso.annotation.Action;
import com.baomidou.kisso.annotation.Login;
import com.baomidou.kisso.common.RsaKeyHelper;
import com.baomidou.kisso.enums.TokenOrigin;
import com.baomidou.kisso.security.token.SSOToken;
import com.dragon.flow.api.IFlowApi;
import com.dragon.flow.api.impl.AbstractFlowApiImpl;
import com.dragon.flow.constant.FlowConstant;
import com.dragon.flow.exception.FlowException;
import com.dragon.flow.model.base.App;
import com.dragon.flow.model.flowable.CommentInfo;
import com.dragon.flow.service.base.IAppService;
import com.dragon.flow.service.flowable.*;
import com.dragon.flow.vo.flowable.model.HighLightedNodeVo;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.flow.vo.flowable.processinstance.InstanceQueryParamsVo;
import com.dragon.flow.vo.flowable.processinstance.ProcessInstanceVo;
import com.dragon.flow.vo.flowable.processinstance.EndVo;
import com.dragon.flow.vo.flowable.runtime.StartProcessInstanceVo;
import com.dragon.flow.vo.flowable.task.*;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.vo.token.AuthTokenVo;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.flowable.engine.runtime.ProcessInstance;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Key;
import java.util.*;

/**
 * @program: flow
 * @description: 接口实现
 * @author: Bruce.Liu
 * @create: 2021-05-08 14:36
 **/
@Tag(name = "流程中心相关接口")
@RestController
@RequestMapping("/api/flow")
public class FlowApiRest extends AbstractFlowApiImpl {
    protected Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private IAppService appService;

    /**
     * 通过对接的应用的标识和秘钥获取token
     *
     * @param params 对接的应用的标识和秘钥
     * @return
     */
    @Login(action = Action.Skip)
    @Operation(summary = "通过用户名密码获取token", description = "通过用户名密码获取token")
    @Parameter(name = "AuthTokenVo",required = true , description = "对接的应用的认证信息", example = "params")
    @PostMapping("/getJwtToken")
    public ReturnVo<String> getJwtToken(HttpServletRequest request, HttpServletResponse response, @RequestBody AuthTokenVo params) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        String jwtToken = null;
        App app = appService.getAppBySecretKeyAndSn(params.getAppSn(), params.getAppSecretKey());
        if (app != null){
            JwtBuilder jwtBuilder = this.createJwtBuilder(app);
            SSOToken ssoToken = SSOToken.create().setId(app.getId()).setIssuer(app.getName())
                    .setOrigin(TokenOrigin.HTML5).setJwtBuilder(jwtBuilder);
            jwtToken = ssoToken.getToken();
            // Cookie 模式设置
            SSOHelper.setCookie(request, response, ssoToken);
            response.setHeader("accessToken", jwtToken);
            response.setHeader(FlowConstant.FRONT_OR_BACK, FlowConstant.FLOW_FRONT);
        } else {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, "错误的认证信息");
        }
        returnVo.setData(jwtToken);
        return returnVo;
    }

    private JwtBuilder createJwtBuilder(App app) {
        JwtBuilder jwtBuilder = null;
        try {
            SSOConfig ssoConfig = SSOConfig.getInstance();
            Key key = RsaKeyHelper.getRsaKey(new ClassPathResource(ssoConfig.getRsaJksStore()).getInputStream(),
                    ssoConfig.getRsaAlias(), ssoConfig.getRsaKeypass(), ssoConfig.getRsaStorepass());
            Map<String, Object> claims = new HashMap<>();
            claims.put("id", app.getId());
            claims.put("name", app.getName());
            Calendar expires = Calendar.getInstance();
            expires.add(Calendar.HOUR, 2);
            // 加密
            jwtBuilder = Jwts.builder()
                    .setClaims(claims)
                    .setSubject("flow rsa jwt")
                    .setIssuedAt(new Date())
                    .setExpiration(expires.getTime())
                    .signWith(key, SignatureAlgorithm.RS512);
        } catch (Exception e) {
            logger.error("加密失败", e);
        }
        return jwtBuilder;
    }

    @Override
    @Operation(summary = "通过modelKey获取模型对象", description = "通过modelKey获取模型对象")
    @Parameter(name = "modelKey",required = true , description = "模型Key", example = "test_leave")
    @PostMapping(value = "/loadBpmnXmlByModelKey", produces = "application/json")
    public ReturnVo<ModelInfoVo> loadBpmnXmlByModelKey(String modelKey) {
        return super.loadBpmnXmlByModelKey(modelKey);
    }

    @Override
    @Operation(summary = "查询节点信息", description = "查询节点信息")
    @Parameters({
            @Parameter(name = "processInstanceId",required = true , description = "流程实例id", example = "018273249827498324"),
            @Parameter(name = "activityId",required = true, description = "节点id", example = "12143334")
    })
    @PostMapping(value = "/getOneActivityVoByProcessInstanceIdAndActivityId", produces = "application/json")
    public ReturnVo<ActivityVo> getOneActivityVoByProcessInstanceIdAndActivityId(String processInstanceId, String activityId) {
        return super.getOneActivityVoByProcessInstanceIdAndActivityId(processInstanceId,activityId);
    }

    @Override
    @Operation(summary = "查询我发起的流程", description = "查询我发起的流程列表")
    @Parameter(name = "processInstanceVoParamVo", description = "分页查询参数", required = true)
    @PostMapping(value = "/findMyProcessinstancesPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> findMyProcessinstancesPagerModel(@RequestBody ParamVo<InstanceQueryParamsVo> processInstanceVoParamVo) {
        return super.findMyProcessinstancesPagerModel(processInstanceVoParamVo);
    }

    @Override
    @Operation(summary = "查询我的待办任务总数", description = "查询我的待办任务总数")
    @Parameter(name = "getAppingTaskCont", description = "查询参数", required = true)
    @PostMapping(value = "/getAppingTaskCont", produces = "application/json")
    public ReturnVo<Long> getAppingTaskCont(@RequestBody TaskQueryParamsVo params) {
        return super.getAppingTaskCont(params);
    }

    @Override
    @Operation(summary = "查询我的待办任务", description = "查询我的待办任务列表")
    @Parameter(name = "getAppingTasksPagerModel", description = "分页查询参数", required = true)
    @PostMapping(value = "/getAppingTasksPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getAppingTasksPagerModel(@RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        return super.getAppingTasksPagerModel(taskQueryParamsVoParamVo);
    }

    @Override
    @Operation(summary = "查询我的已办任务", description = "查询我的已办任务列表")
    @Parameter(name = "getApplyedTasksPagerModel", description = "分页查询参数", required = true)
    @PostMapping(value = "/getApplyedTasksPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getApplyedTasksPagerModel(@RequestBody ParamVo<TaskQueryParamsVo> taskQueryParamsVoParamVo) {
        return super.getApplyedTasksPagerModel(taskQueryParamsVoParamVo);
    }

    @Override
    @Operation(summary = "查询当前流程的审批记录", description = "查询当前流程的审批记录列表")
    @Parameter(name = "getCommentInfosByProcessInstanceId", description = "流程实例id")
    @PostMapping(value = "/getCommentInfosByProcessInstanceId", produces = "application/json")
    public ReturnVo<List> getCommentInfosByProcessInstanceId(String processInstanceId) {
        return super.getCommentInfosByProcessInstanceId(processInstanceId);
    }

    @Override
    @Operation(summary = "启动流程", description = "启动流程")
    @Parameter(name = "startProcessInstanceByKey", description = "启动流程", required = true)
    @PostMapping(value = "/startProcessInstanceByKey", produces = "application/json")
    public ReturnVo<String> startProcessInstanceByKey(@RequestBody StartProcessInstanceVo params) {
        return super.startProcessInstanceByKey(params);
    }

    @Override
    @Operation(summary = "审批", description = "审批")
    @Parameter(name = "complete", description = "审批", required = true)
    @PostMapping(value = "/complete", produces = "application/json")
    public ReturnVo<String> complete(@RequestBody CompleteTaskVo completeTaskVo) throws FlowException {
        return super.complete(completeTaskVo);
    }

    @Override
    @Operation(summary = "拒绝", description = "拒绝")
    @Parameter(name = "stopProcess", description = "拒绝", required = true)
    @PostMapping(value = "/stopProcess", produces = "application/json")
    public ReturnVo<String> stopProcess(@RequestBody EndVo endVo) {
        return super.stopProcess(endVo);
    }

    @Override
    @Operation(summary = "获取高亮线和节点", description = "获取高亮线和节点")
    @Parameter(name = "getHighLightedNodeVoByProcessInstanceId", description = "getHighLightedNodeVoByProcessInstanceId", required = true)
    @PostMapping(value = "/getHighLightedNodeVoByProcessInstanceId", produces = "application/json")
    public ReturnVo<HighLightedNodeVo> getHighLightedNodeVoByProcessInstanceId(String processInstanceId) {
        return super.getHighLightedNodeVoByProcessInstanceId(processInstanceId);
    }

    @Override
    @Operation(summary = "获取所有系统", description = "获取所有系统")
    @Parameter(name = "getApps", description = "getApps")
    @PostMapping(value = "/getApps", produces = "application/json")
    public ReturnVo<List> getApps() {
        return super.getApps();
    }
}
