package com.dragon.flow.vo.flowable.runtime;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.io.Serializable;
import java.util.Map;

/**
 * @Description: 启动流程参数Vo
 * @Author: Bruce.liu
 * @Since:18:12 2021/04/20
 */
@Data
public class StartProcessInstanceVo implements Serializable {
    /**
     * 流程定义key 必填
     */
    @Schema(description = "流程定义key", required = true)
    private String processDefinitionKey;
    /**
     * 业务系统id 必填
     */
    @Schema(description = "业务表单唯一标识", required = true)
    private String businessKey;
    /**
     * 启动流程变量 选填
     */
    @Schema(description = "启动流程变量")
    private Map<String, Object> variables;
    /**
     * 申请人工号 必填
     */
    @Schema(description = "申请人工号")
    private String currentUserCode;
    /**
     * 系统标识 必填
     */
    @Schema(description = "系统标识", required = true)
    private String appSn;
    /**
     * 表单显示名称 必填
     */
    @Schema(description = "表单显示名称", required = true)
    private String formName;
    /**
     * 流程提交人工号 必填
     */
    @Schema(description = "流程提交人工号 通常和申请人工号一致即可", required = true)
    private String creator;
    /**
     * 老的流程实例id
     */
    @Schema(description = "老的流程实例id")
    private String oldProcessInstanceId;

    /**
     *
     * 是否走底表数据
     */
    @Schema(description = "是否走底表数据")
    private boolean flowLevelFlag = true;
    /**
     *  要走流程部门ID
     */
    @Schema(description = "要走流程部门ID")
    private String deptId;
}
