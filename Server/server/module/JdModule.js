const mysql = require('mysql') ;
const dbutils = require('../utils/dbutils.js') ;

exports.selectAllJds = function (first,max,func) {
    var sql = 'select jd_id,jd_name,jd_addr,imgs,param1,param2,param3 from jd order by jd_id desc limit ?,?' ;
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
