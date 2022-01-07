-- ----------------------------
-- Table structure for tbl_flow_model_info
-- ----------------------------
DROP TABLE IF EXISTS `tbl_flow_model_info`;
CREATE TABLE `tbl_flow_model_info`
(
    `id`                   varchar(32) NOT NULL COMMENT '主键',
    `model_id`             varchar(64)  DEFAULT NULL COMMENT '模型id',
    `name`                 varchar(200) DEFAULT NULL,
    `model_key`            varchar(150) DEFAULT NULL COMMENT '模型key',
    `model_type`           int(2) DEFAULT '0' COMMENT '模型key',
    `model_icon`           longblob,
    `form_type`            int(11) DEFAULT NULL COMMENT '模型类型: 0 自定义流程 1是业务流程',
    `app_sn`               varchar(200) DEFAULT NULL COMMENT '系统标识',
    `category_code`        varchar(32)  DEFAULT NULL COMMENT '分类id',
    `status`               int(11) DEFAULT NULL COMMENT '流程图Model状态',
    `own_dept_id`          varchar(32)  DEFAULT NULL COMMENT '所属部们id',
    `own_dept_name`        varchar(120) DEFAULT NULL COMMENT '所属部门名称',
    `flow_owner_no`        varchar(64)  DEFAULT NULL COMMENT '流程拥有者ID',
    `flow_owner_name`      varchar(64)  DEFAULT NULL COMMENT '流程拥有者名称',
    `process_docking_no`   varchar(64)  DEFAULT NULL COMMENT '流程对接人工号',
    `process_docking_name` varchar(64)  DEFAULT NULL COMMENT '流程对接人名称',
    `apply_companies`      json         DEFAULT NULL COMMENT '适用公司(多个公司，以逗号隔开)',
    `superuser`            json         DEFAULT NULL COMMENT '授权管理人员',
    `show_status`          int(11) DEFAULT NULL COMMENT '流程中心是否显示 1 是 0 否',
    `auth_point_list`      json         DEFAULT NULL COMMENT '授权功能',
    `applied_range`        int(11) DEFAULT NULL COMMENT ' 适用范围 @see ModelAppliedRangeEnum',
    `business_url`         varchar(255) DEFAULT NULL COMMENT '业务表单的URL',
    `function_range`       varchar(400) DEFAULT NULL COMMENT '功能范围(1 允许转办 2允许加签 3允许转阅 4允许打印 5相近节点同一人员自动跳过 可以多选 )',
    `skip_set`             int(4) DEFAULT NULL COMMENT '跳过设置',
    `extend_status`        int(4) DEFAULT NULL COMMENT '拓展信息 状态',
    `order_no`             int(4) DEFAULT NULL COMMENT '排序',
    `create_time`          datetime     DEFAULT NULL COMMENT '创建时间',
    `creator`              varchar(60)  DEFAULT NULL COMMENT '创建人',
    `update_time`          datetime     DEFAULT NULL COMMENT '更新时间',
    `updator`              varchar(60)  DEFAULT NULL COMMENT '更新人',
    `del_flag`             int(11) DEFAULT NULL COMMENT '删除标识',
    PRIMARY KEY (`id`),
    KEY                    `model_id_index` (`model_id`) USING BTREE,
    KEY                    `model_key_index` (`model_key`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tbl_flow_model_info
-- ----------------------------
INSERT INTO `tbl_flow_model_info`
VALUES ('e4f3ff64f53d1f7580faec85fc82252f', '7a76271c200d11ecbaee00e04d680167', '请假', 'leave', '0', null, null, 'flow',
        '222', '3', null, null, null, null, null, null, null, null, null, null, null, null, null, null, '3', null,
        '2021-09-28 11:38:00', '10101', '2021-09-28 11:44:23', '10101', '1');

-- ----------------------------
-- Table structure for tbl_flow_model_info
-- ----------------------------
DROP TABLE IF EXISTS `tbl_flow_model_info`;
CREATE TABLE `tbl_flow_model_info`
(
    `id`                   varchar(32) NOT NULL COMMENT '主键',
    `model_id`             varchar(64)  DEFAULT NULL COMMENT '模型id',
    `name`                 varchar(200) DEFAULT NULL,
    `model_key`            varchar(150) DEFAULT NULL COMMENT '模型key',
    `model_type`           int(2) DEFAULT '0' COMMENT '模型key',
    `model_icon`           longblob,
    `form_type`            int(11) DEFAULT NULL COMMENT '模型类型: 0 自定义流程 1是业务流程',
    `app_sn`               varchar(200) DEFAULT NULL COMMENT '系统标识',
    `category_code`        varchar(32)  DEFAULT NULL COMMENT '分类id',
    `status`               int(11) DEFAULT NULL COMMENT '流程图Model状态',
    `own_dept_id`          varchar(32)  DEFAULT NULL COMMENT '所属部们id',
    `own_dept_name`        varchar(120) DEFAULT NULL COMMENT '所属部门名称',
    `flow_owner_no`        varchar(64)  DEFAULT NULL COMMENT '流程拥有者ID',
    `flow_owner_name`      varchar(64)  DEFAULT NULL COMMENT '流程拥有者名称',
    `process_docking_no`   varchar(64)  DEFAULT NULL COMMENT '流程对接人工号',
    `process_docking_name` varchar(64)  DEFAULT NULL COMMENT '流程对接人名称',
    `apply_companies`      json         DEFAULT NULL COMMENT '适用公司(多个公司，以逗号隔开)',
    `superuser`            json         DEFAULT NULL COMMENT '授权管理人员',
    `show_status`          int(11) DEFAULT NULL COMMENT '流程中心是否显示 1 是 0 否',
    `auth_point_list`      json         DEFAULT NULL COMMENT '授权功能',
    `applied_range`        int(11) DEFAULT NULL COMMENT ' 适用范围 @see ModelAppliedRangeEnum',
    `business_url`         varchar(255) DEFAULT NULL COMMENT '业务表单的URL',
    `function_range`       varchar(400) DEFAULT NULL COMMENT '功能范围(1 允许转办 2允许加签 3允许转阅 4允许打印 5相近节点同一人员自动跳过 可以多选 )',
    `skip_set`             int(4) DEFAULT NULL COMMENT '跳过设置',
    `extend_status`        int(4) DEFAULT NULL COMMENT '拓展信息 状态',
    `order_no`             int(4) DEFAULT NULL COMMENT '排序',
    `create_time`          datetime     DEFAULT NULL COMMENT '创建时间',
    `creator`              varchar(60)  DEFAULT NULL COMMENT '创建人',
    `update_time`          datetime     DEFAULT NULL COMMENT '更新时间',
    `updator`              varchar(60)  DEFAULT NULL COMMENT '更新人',
    `del_flag`             int(11) DEFAULT NULL COMMENT '删除标识',
    PRIMARY KEY (`id`),
    KEY                    `model_id_index` (`model_id`) USING BTREE,
    KEY                    `model_key_index` (`model_key`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tbl_flow_model_info
-- ----------------------------
INSERT INTO `tbl_flow_model_info`
VALUES ('e4f3ff64f53d1f7580faec85fc82252f', '7a76271c200d11ecbaee00e04d680167', '请假', 'leave', '0', null, null, 'flow',
        '222', '3', null, null, null, null, null, null, null, null, null, null, null, null, null, null, '3', null,
        '2021-09-28 11:38:00', '10101', '2021-09-28 11:44:23', '10101', '1');



-- ----------------------------
-- Table structure for tbl_base_category
-- ----------------------------
DROP TABLE IF EXISTS `tbl_base_category`;
CREATE TABLE `tbl_base_category`
(
    `id`          varchar(32) NOT NULL,
    `pid`         varchar(32)  DEFAULT NULL,
    `name`        varchar(200) DEFAULT NULL,
    `code`        varchar(30)  DEFAULT NULL,
    `short_name`  varchar(200) DEFAULT NULL,
    `note`        varchar(400) DEFAULT NULL,
    `order_no`    int(4) DEFAULT NULL,
    `company_id`  varchar(32)  DEFAULT NULL,
    `front_show`  int(11) DEFAULT NULL COMMENT '前台显示（1：显示，0：不显示）',
    `del_flag`    int(1) DEFAULT NULL,
    `create_time` datetime     DEFAULT NULL,
    `creator`     varchar(32)  DEFAULT NULL,
    `update_time` datetime     DEFAULT NULL,
    `updator`     varchar(32)  DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `code_index` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of tbl_base_category
-- ----------------------------
INSERT INTO `tbl_base_category`
VALUES ('40288af472b78daf0172b78dafd10000', '8a8a94aa5e758e5d015e75927af40005', '财务管理', '100001', 'yykj', null, '1',
        'ding328e73cb3574de1c35c2f4657eb6', '0', '1', '2020-06-15 18:36:56', 'admin', '2021-05-17 20:17:11', '0000001');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa5e145290015e145290220000', '8a948c78589a8f4101589a92c5b10001', 'IT服务', '107', 'IT', null, '7',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2017-08-24 20:58:28', 'admin', '2020-06-19 17:12:40', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa5e758e5d015e75927af40005', '', '中石化集团', '222', 'MGJ', 'aaaaaaaaaaaaa', '333',
        'a8dc5e4887bc226e359b0350b16251bb', '1', '1', '2017-09-12 18:11:27', 'admin', '2021-05-17 20:16:49', '0000001');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa5e758e5d015e7593c2360007', '8a8a94aa5e758e5d015e75927af40005', '人事管理', '88', 'HR', null, '2',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2017-09-12 18:12:51', 'admin', '2020-06-19 17:15:12', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa5e758e5d015e759426310008', '8a8a94aa5e758e5d015e75927af40005', '合同管理', '66', 'HT', null, '3',
        'ding328e73cb3574de1c35c2f4657eb6', '1', '1', '2017-09-12 18:13:16', 'admin', '2021-04-14 21:10:08', '0000001');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa5e9e0894015ea1fce8260008', '8a948c78589a8f4101589a92c5b10001', '审计管理', '130', 'SJGL', null, '8',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2017-09-21 09:10:59', 'admin', '2020-06-19 17:12:45', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa5f7067f5015f714ecbad0003', '8a948c78589a8f4101589a92c5b10001', 'PMS流程', '111', 'PMS', null, '9',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2017-10-31 15:21:50', 'admin', '2020-06-19 17:12:51', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa5fec0ffb016000ec21c6003d', '8a948c78589a8f4101589a92c5b10001', 'SRM流程', '112', 'SRM', null, '10',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2017-11-28 12:39:23', 'admin', '2020-06-19 17:12:57', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa5fec0ffb0160242d3ef601d3', '', '盖章流程', '10201', 'GZLC', null, '21', '0001K310000000008TK6', null, '0',
        '2017-12-05 08:57:13', 'admin', '2017-12-05 08:58:10', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa6033dbab016043fcf4e40012', '8a948c78589a8f4101589a9322790002', '盖章审批', '1021', 'GZSP', null, '21',
        '0001K310000000008TK6', null, '0', '2017-12-11 13:12:19', 'admin', '2017-12-11 13:14:23', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa6077a97d01607859e3a00002', '8a948c78589a8f4101589a92c5b10001', '工管流程', '113', 'GG', null, '13',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2017-12-21 17:14:05', 'admin', '2020-06-19 17:13:02', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa60c0561b0160d3e3b9b10028', '8a948c78589a8f4101589a92c5b10001', '发文管理', '115', 'FWGL', null, '14',
        'ding328e73cb3574de1c35c2f4657eb6', '1', '1', '2018-01-08 11:50:04', 'admin', '2020-11-03 18:53:46', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa60c0561b0160d987c87200a7', '8a948c78589a8f4101589a92c5b10001', '工地流程', 'CSHR', 'GDKQ', null, '15',
        '0001K310000000008TK6', null, '1', '2018-01-09 14:07:22', 'admin', '2018-01-09 14:07:22', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94aa61749142016182abdf860017', '', '资产管理', '555', 'ZCGL', null, '555', '0001K31000000000B9RH', null, '0',
        '2018-02-11 10:22:37', 'admin', '2018-02-11 10:23:32', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94ab67eddb240167ee13a9b70003', '8a948c78589a8f4101589a92c5b10001', '法务管理', '8321', 'FaWuGL', null, null,
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2018-12-27 13:12:05', 'admin', '2020-06-19 17:16:14', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94ab68127434016812897b3c0015', '8a948c78589a8f4101589a92c5b10001', '管理改进', '8567', 'GLGJ', null, null,
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2019-01-03 15:07:06', 'admin', '2020-06-19 17:11:59', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a8a94ab6878c5d4016878c64ebf0001', '8a948c78589a8f4101589a92c5b10001', '合同管理', '321', 'htgl', null, null,
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2019-01-23 11:34:49', '00009179', '2020-06-19 17:12:05',
        'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a948c78589a8f4101589a92c5b10001', '', '通用类型', '101', 'TY', null, '1', '7401a5e908536545298a7701dbd5c769', '1',
        '1', '2016-11-25 16:21:00', 'admin', '2021-04-24 01:07:44', '0000001');
INSERT INTO `tbl_base_category`
VALUES ('8a948c78589a8f4101589a9322790002', '8a948c78589a8f4101589a92c5b10001', '行政审批', '102', 'XZ', null, '2',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2016-11-25 16:21:24', 'admin', '2020-06-19 17:12:10', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a948c78589a8f4101589a93659f0003', '8a948c78589a8f4101589a92c5b10001', '工作管理', '103', 'GZ', null, '3',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2016-11-25 16:21:41', 'admin', '2020-06-19 17:12:17', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a948c78589a8f4101589a93b9b50004', '8a948c78589a8f4101589a92c5b10001', '行政管理', '104', 'XZGL', null, '4',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2016-11-25 16:22:02', 'admin', '2020-06-19 17:12:25', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a948c78589a8f4101589a945d5d0005', '8a948c78589a8f4101589a92c5b10001', '人事审批', '105', 'RS', null, '5',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2016-11-25 16:22:44', 'admin', '2020-06-19 17:12:31', 'admin');
INSERT INTO `tbl_base_category`
VALUES ('8a948c78589a8f4101589a949a130006', '8a948c78589a8f4101589a92c5b10001', '财务审批', '106', 'CW', null, '6',
        'ding328e73cb3574de1c35c2f4657eb6', null, '1', '2016-11-25 16:23:00', 'admin', '2020-06-19 17:12:36', 'admin');


-- ----------------------------
-- Table structure for tbl_base_app
-- ----------------------------
DROP TABLE IF EXISTS `tbl_base_app`;
CREATE TABLE `tbl_base_app`
(
    `id`          varchar(40) COLLATE utf8_bin NOT NULL,
    `name`        varchar(32) COLLATE utf8_bin  DEFAULT NULL COMMENT '名称',
    `db_id`       varchar(32) COLLATE utf8_bin  DEFAULT NULL COMMENT '数据库id',
    `group_id`    varchar(32) COLLATE utf8_bin  DEFAULT NULL COMMENT '项目脚手架组织ID 如:com.example  com已经默认添加',
    `status`      int(1) DEFAULT NULL,
    `sn`          varchar(40) COLLATE utf8_bin  DEFAULT NULL COMMENT '系统标示',
    `secret_key`  varchar(255) COLLATE utf8_bin DEFAULT NULL,
    `url`         varchar(60) COLLATE utf8_bin  DEFAULT NULL COMMENT '系统url前缀',
    `index_url`   varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT '系统首页URL',
    `image`       blob COMMENT '系统的图标',
    `note`        varchar(500) COLLATE utf8_bin DEFAULT NULL COMMENT '系统备注',
    `create_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
    `creator`     varchar(32) COLLATE utf8_bin  DEFAULT NULL COMMENT '创建人',
    `update_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
    `updator`     varchar(32) COLLATE utf8_bin  DEFAULT NULL COMMENT '更新人',
    `del_flag`    int(11) DEFAULT '1' COMMENT '删除标识0：删除1：存在',
    `order_no`    int(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `sn_unique_index` (`sn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of tbl_base_app
-- ----------------------------
INSERT INTO `tbl_base_app`
VALUES ('1376919254872035330', '门户', null, null, '1', 'portal',
        'K9909Jszc%YcleRr50c9aRO88q5QdxK#~0XeJz8FU89092MA5ytwyE%bFTL0MUwF', 'http://localhost:8000', '/index',
        0x616E742D64657369676E3A6163636F756E742D626F6F6B2D66696C6C6564, null, '2021-05-19 15:04:55', null, null, null,
        '1', '1');
INSERT INTO `tbl_base_app`
VALUES ('1376919486070460417', '流程中心', null, null, '1', 'flow',
        'Fu9E9N9m19b52@H9A6YWa0t8T2&$1Y~lt0d2nO9du1SP9m71X7bk@0551hVGG!K7', 'http://localhost:8989', '/index.html',
        null, null, '2021-05-19 15:05:02', null, null, null, '1', '1');
INSERT INTO `tbl_base_app`
VALUES ('1376919513455071234', 'MDM', null, null, '1', 'mdm',
        'g71U1Q7$cxxmv1R3PcC^99ypS0@9ne37ol1U1U30a719Ql@33m2cG1V950h8w0Nu', 'http://localhost:8889', '/index.html',
        null, null, '2021-05-19 15:05:10', null, null, null, '1', '11');
INSERT INTO `tbl_base_app`
VALUES ('1376919546057396226', '权限系统', null, null, '1', 'privilege',
        'a5q27p0E12ZjJm8Vg9J*1gs21f9lt0kP7L09v49s~Kk7ufcG4oOr#959lbfhj78c', 'http://localhost:9988', '/index.html',
        null, null, '2021-05-19 15:05:13', null, null, null, '1', '33');



-- ----------------------------
-- Table structure for tbl_org_department
-- ----------------------------
DROP TABLE IF EXISTS `tbl_org_department`;
CREATE TABLE `tbl_org_department` (
                                      `id` varchar(32) COLLATE utf8_bin NOT NULL,
                                      `company_id` varchar(32) COLLATE utf8_bin DEFAULT NULL COMMENT '公司id',
                                      `name` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '名称',
                                      `code` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '编号',
                                      `note` varchar(256) COLLATE utf8_bin DEFAULT NULL COMMENT '备注',
                                      `pid` varchar(32) COLLATE utf8_bin DEFAULT NULL COMMENT '父id',
                                      `leader_code` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '部门领导工号',
                                      `order_no` int(11) DEFAULT NULL COMMENT '排序号',
                                      `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
                                      `creator` varchar(32) COLLATE utf8_bin DEFAULT NULL COMMENT '创建人',
                                      `update_time` timestamp NULL DEFAULT NULL COMMENT '更新时间',
                                      `updator` varchar(32) COLLATE utf8_bin DEFAULT NULL COMMENT '更新人',
                                      `del_flag` int(11) DEFAULT '1' COMMENT '删除标识0表示删除1表示存在',
                                      `leader` int(11) DEFAULT '0' COMMENT '是否是leader1:是 0：不是',
                                      PRIMARY KEY (`id`) USING BTREE,
                                      UNIQUE KEY `code_index` (`code`),
                                      KEY `company_id_index` (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of tbl_org_department
-- ----------------------------
INSERT INTO `tbl_org_department` VALUES ('20', '1', '人资部', '100001', null, null, null, '1', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('21', '1', '技术部', '100002', null, null, null, '2', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('22', '1', '产品部', '100003', null, null, null, '3', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('23', '1', '销售部', '100004', null, null, null, '4', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('24', '1', '财务部', '100005', null, null, null, '5', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('25', '1', '运营部', '100006', null, null, null, '6', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('26', '1', '市场部', '100007', null, null, null, '7', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('27', '1', '领导班子', '100008', null, null, null, '8', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('28', '2', '人资部', '10000101', null, null, null, '1', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('29', '2', '技术部', '10000102', null, null, null, '2', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('30', '2', '产品部', '10000103', null, null, null, '3', '2021-05-24 22:55:20', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('31', '2', '销售部', '10000104', null, null, null, '4', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('32', '2', '财务部', '10000105', null, null, null, '5', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('33', '2', '运营部', '10000106', null, null, null, '6', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('34', '2', '市场部', '10000107', null, null, null, '7', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('35', '2', '领导班子', '10000108', null, null, null, '8', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('36', '3', '人资部', '10000201', null, null, null, '1', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('37', '3', '技术部', '10000202', null, null, null, '2', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('38', '3', '产品部', '10000203', null, null, null, '3', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('39', '3', '销售部', '10000204', null, null, null, '4', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('40', '3', '财务部', '10000205', null, null, null, '5', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('41', '3', '运营部', '10000206', null, null, null, '6', '2021-05-24 22:55:21', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('42', '3', '市场部', '10000207', null, null, null, '7', '2021-05-24 22:55:22', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('43', '3', '领导班子', '10000208', null, null, null, '8', '2021-05-24 22:55:22', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('44', '4', '人资部', '10000301', null, null, null, '1', '2021-05-24 22:55:22', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('45', '4', '技术部', '10000302', null, null, null, '2', '2021-05-24 22:55:22', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('46', '4', '产品部', '10000303', null, null, null, '3', '2021-05-24 22:55:22', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('47', '4', '销售部', '10000304', null, null, null, '4', '2021-05-24 22:55:22', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('48', '4', '财务部', '10000305', null, null, null, '5', '2021-05-24 22:55:22', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('49', '4', '运营部', '10000306', null, null, null, '6', '2021-05-24 22:55:22', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('50', '4', '市场部', '10000307', null, null, null, '7', '2021-05-24 22:55:22', null, null, null, '1', '0');
INSERT INTO `tbl_org_department` VALUES ('51', '4', '领导班子', '10000308', null, null, null, '8', '2021-05-24 22:55:22', null, null, null, '1', '0');


