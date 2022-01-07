package com.dragon.flow.vo.flowable.task;

import com.dragon.tools.pager.ORDERBY;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * QueryParamsVo
 *
 * @author bruce.liu
 * @date 2021/04/22 15:03
 */
@Data
@Schema( description = "查询任务实例的参数")
public class TaskQueryParamsVo implements Serializable {
    //用户的工号
    @Schema(description= "用户的工号",
            example = "00004737"
    )
    private String userCode;
    //系统标识
    @Schema(
            description = "系统标识",
            example = "flow"
    )
    private String appSn;
    //系统标识
    @Schema(
            description = "系统标识列表",
            example = "flow itp"
    )
    private List<String> appSns;
    //表单名称
    @Schema(
            description = "表单名称",
            example = "费用报销"
    )
    private String formName;
    //开始时间
    @Schema(
            description = "开始时间",
            example = "2020-08-05 08:12:41"
    )
    private String startTime;
    //结束时间
    @Schema(
            description = "结束时间",
            example = "2020-08-05 08:12:41"
    )
    private String endTime;
    //业务系统的id
    @Schema(
            description = "业务主键",
            example = "1234656"
    )
    private String businessKey;
    //待办人
    @Schema(
            description = "待办人",
            example = "00004737"
    )
    private String assignee;
    //排序字段 1 升序  0 降序
    @Schema(
            description = "排序字段 1 升序  0 降序",
            example = "0"
    )
    private Integer orderFlag = 0;
    //流程实例ID
    @Schema(
            description = "流程实例ID",
            example = "sfsafsfasfasfhkshdfwiey"
    )
    private String processInstanceId;
    //模型key
    @Schema(
            description = "流程模型key",
            example = "modelKey"
    )
    private String modelKey;
    //流程状态 1 审批中，2结束
    @Schema(
            description = "流程状态 1 审批中，2结束",
            example = "1"
    )
    private Integer flowStatus;
    @Schema(
            description = "查询关键字",
            example = "财务"
    )
    private String keyword;
    @Schema(
            description = "节点名称",
            example = "部门经理"
    )
    //节点名称
    private String taskName;
    /**
     * 排序 key：字段 description 是规则
     */
    @Schema(
            description = "排序 key：字段 description 是规则"
    )
    private Map<String, ORDERBY> orderbyMap;
}
