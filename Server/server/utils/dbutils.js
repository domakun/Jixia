const mysql = require('mysql') ;



// 连接池对象
const pool = mysql.createPool({
    host:'localhost',
    // host:'192.168.2.101',
	user:'admin',
	password:'123',
	database:'jixia',

// 	host: 'localhost',
//     user:'user',
//     password:'123',
//     database:'jixia',
	
    port:3306 ,
}) ;
exports.pool = pool ;


// 封装查询select方法
// sql是查询字符串，param是查询用到的参数
exports.select = select ;
function select(sql,param,func){
    pool.getConnection(function(err,conn){
        if(err){
            console.log(err) ;
        }else{
            // console.log(sql,param);
            conn.query(sql,param,function(error,result){
                conn.release() ;      //没有关闭连接，将连接对象返回连接池
                // console.log(sql) ;
                // console.log(result,'--->dbutil的result') ;
                func(result) ;     //回调函数
            })
        }
    })
}
