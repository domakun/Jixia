const express = require('express') ; 
const ejs = require('ejs') ; 
const app = express() ; 
const bodyParser = require('body-parser') ;
const url = require('url') ;  
const cookieParser = require('cookie-parser') ; 
app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));
const employeecon = require('./server/controller/employeecon.js') ; 
const departmentcon = require('./server/controller/departmentcon.js') ;
const clazzcon = require('./server/controller/clazzcon.js') ;
const stucon = require('./server/controller/stucon.js') ;
// 设置资源后缀名和默认地址
app.set('view engine' , 'html') ;
app.engine('.html',require('ejs').__express) ;
app.set('views',__dirname+'/view') ;
app.use(express.static(__dirname+'/public')) ;
app.use(bodyParser.urlencoded({extended:false})) ;

// 判断路由，把路由分发给子控制器
app.get('/*',function(req,res){
    // 获取url
    var pathname = url.parse(req.url).pathname ; 
    res.render('index');
});

app.post('/*',function(req,res){
    var pathname = url.parse(req.url).pathname ; 
    
});

app.listen(9999,function (argument) {
	console.log('waiting...') ;
});