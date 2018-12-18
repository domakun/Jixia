/*
MySQL Data Transfer
Source Host: localhost
Source Database: educational
Target Host: localhost
Target Database: educational
Date: 2018/11/19 13:38:37
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) DEFAULT NULL,
  `f_id` int(11) DEFAULT '0',
  `remark` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(10) NOT NULL,
  `no` char(10) NOT NULL,
  `email` char(30) DEFAULT NULL,
  `pwd` char(6) NOT NULL,
  `gender` char(1) NOT NULL DEFAULT '男',
  `remark` varchar(100) NOT NULL,
  `departmentid` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `no` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `department` VALUES ('1', '校长办公室', '0', '最高管理员的部门');
INSERT INTO `department` VALUES ('6', '教学部', '1', null);
INSERT INTO `department` VALUES ('7', '教务部', '1', null);
INSERT INTO `employee` VALUES ('1', '张玉苹', '1', 'zyp@163.com', '000000', '女', '校长密书', '1');
