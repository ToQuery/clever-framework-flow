package com.dragon.flow.vo.flowable.processinstance;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.io.Serializable;

/**
 * QueryParamsVo
 *
 * @author bruce.liu
 * @date 2017/4/11 15:03
 * @Copyright:Copyright (c) 杭州蘑菇加电子商务有限公司 2016 ~ 2020 版权所有
 */
@Data
@Schema(description = "查询流程实例的参数")
public class InstanceQueryParamsVo implements Serializable {
    /**
     * 用户的工号
     */
    @Schema(description = "用户的工号")
    private String userCode;
    /**
     * 应用标识
     */
    @Schema(description = "应用标识")
    private String appSn;
    /**
     * 开始时间
     */
    @Schema(description = "开始时间")
    private String startTime;
    /**
     * 结束时间
     */
    @Schema(description = "结束时间")
    private String endTime;
    /**
     * 业务系统的id
     */
    @Schema(description = "业务系统的id")
    private String businessKey;
    /**
     * 排序字段 1 升序  0 降序
     */
    @Schema(description = "排序字段 1 升序  0 降序")
    private Integer orderFlag = 0;
    /**
     * 流程实例ID
     */
    @Schema(description = "流程实例ID")
    private String processInstanceId;

    /**
     * 发起人工号集合
     */
    @Schema(description = "发起人工号集合")
    private String startedUserIds;
    /**
     * 流程定义KEY
     */
    @Schema(description = "流程定义KEY")
    private String processDefinitionKey;
    /**
     * 流程状态
     */
    @Schema(description = "流程状态")
    private String processType;

    /**
     * 发起人所在部门ID
     * @return
     */
    @Schema(description = "发起人所在部门ID")
    private String deptId;
    /**
     * 发起人所在公司ID
     * @return
     */
    @Schema(description = "发起人所在公司ID")
    private String companyId;
    @Schema(description = "查询关键字")
    private String keyword;
}
