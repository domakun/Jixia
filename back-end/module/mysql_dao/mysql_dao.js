
const mysql = require('mysql') ;

exports.select = select ; 
function select(username , func){
	const connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'123',
		database:'1809H5'
	}) ;
	// 连接
	connection.connect() ;
	// 查询
	var sql = 'select id,username,password from user where username = ?' ;
	connection.query(sql,[username],function(error,result){
		if(error){
			console.log('error-'+error.message);
			return ; 
		}
		// 关闭连接
		connection.end() ;
		console.log(result);
		func(result) ;
	}) ;

}

exports.regist = regist ; 
function regist(username , password , func){
	const connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'123',
		database:'1809H5'
	}) ;
	var userExists = false ; 
	// 连接
	connection.connect() ;
	// 查
	connection.query('select id,username,password from user where username = ?',[username],function(error,res){
		if(res.length != 0) {
			userExists = true ; 
		}else{
			connection.query('insert into user(username,password) values (?,?)',[username,password],function(error,result){
				if(error){
					console.log('error-'+error.message);
					return ; 
				}
			}) ;
		}
		// 关闭连接,传递用户名是否已经存在参数
		connection.end() ;
		func(userExists) ;
	}) ;
}