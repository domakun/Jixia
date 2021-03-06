const mysql = require('mysql');
const dbutils = require('../utils/dbutils.js');

//分页查询所有攻略
function selectAllStrategy(first,max,cb) {
    var sql = 'select glb_id,title,glb_info,user_name,date from glb inner join user on author_id=user_id order by date desc limit ?,?';
    var param = [first,max];
    dbutils.select(sql,param,function(result) {
        console.log('module分页查询result--->',result);
        cb(result);
    });
}

exports.selectAllStrategy = selectAllStrategy;

// 查询总条数
function getAllPage(cb) {
    var sql = 'select count(*) as totalResult from glb inner join user on author_id=user_id';
    dbutils.select(sql,[],function(allStrategyArray) {
        console.log('module总条数allStrategyArray---->',allStrategyArray);
        cb(allStrategyArray);
    });
}

exports.getAllPage = getAllPage;

// 查询攻略

function searchGl(first,max,jd_addr,content,jd_name,date,author_id,cb) {
    var sql = 'select glb_id,title,glb_info,user_name,date,jd_addr,jd_name,content from glb inner join user on author_id=user_id inner join jd on gladdr_id=jd_id ' +
        'and jd_addr like ? and jd_name like ? and content like ? and date like ? and user_name like ? order by glb_id desc  limit ?,? ';
    var param = [jd_addr,jd_name,content,date,author_id,first,max];
    dbutils.select(sql,param,function(result) {
        console.log('param--->',param);
        cb(result);
    })
}

exports.searchGl = searchGl;

// 删除攻略

function delStrategy(glb_id,cb) {
    var sql = 'delete from glb where glb_id=?';
    dbutils.select(sql,[glb_id],function(result) {
        console.log('module删除result--->',result);
        cb(result);
    })
}

exports.delStrategy = delStrategy;
