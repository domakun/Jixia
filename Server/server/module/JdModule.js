const mysql = require('mysql') ;
const dbutils = require('../utils/dbutils.js') ;

exports.selectAllJds = function (first,max,func) {
    var sql = 'select jd_info,jd_id,jd_name,jd_addr,imgs,param1,param2,param3 from jd order by jd_id desc limit ?,?' ;
    var param = [first,max] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}


//查询总页数
exports.getCount = function (func) {
    var sql = 'select count(*)  from jd  ' ;
    var param = [] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}

// 增加景点
exports.addJd = addJd ;
function addJd (jd_name,jd_info,jd_addr,imgs,func) {
    var sql = 'insert into jd(jd_name,jd_info,jd_addr,imgs) values (?,?,?,?)' ; 
    var param = [jd_name,jd_info,jd_addr,imgs] ;
    dbutils.select(sql,param,function(result){
        func(result) ;
    }) ;
}

// 查找是否已经存在此景点
exports.checkName = checkName ; 
function checkName(jd_name,func){
    var sql = 'select jd_info,jd_id,jd_name,jd_addr,imgs,param1,param2,param3 from jd where jd_name=?' ; 
    dbutils.select(sql,[jd_name],function(result){
        func(result) ;
    }) ; 
}
