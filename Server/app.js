const express = require('express') ;
const ejs = require('ejs') ;
const app = express() ;
const bodyParser = require('body-parser') ;
const url = require('url') ;
const cookieParser = require('cookie-parser') ;

const JdController = require('./server/controller/JdController.js') ;
const GlController = require('./server/controller/GlController.js') ;


app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));
// 设置资源后缀名和默认地址
app.set('view engine' , 'html') ;
app.engine('.html',require('ejs').__express) ;
app.set('views',__dirname+'/view') ;
app.use(express.static(__dirname+'/public')) ;
app.use(bodyParser.urlencoded({extended:false})) ;

//跨域问题
app.all('*', function(req, res, next) {
    console.log(req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
	res.header('Access-Control-Allow-Headers', 'X-Test-Cors');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age',1728000);//预请求缓存20天
    next();
});

// 判断路由，把路由分发给子控制器
app.get('/*',function(req,res){
    var pathname = url.parse(req.url).pathname ;
    // res.render('index')
    console.log(pathname);
    if(pathname == '/getAllJd'){
        JdController.showJdS(req,res)
    }else if(pathname == '/getSomeJds'){
        JdController.showSomeJdS(req,res)
    }else if(pathname == '/deleteJd'){
        JdController.deleteJd(req,res)
    }else if(pathname == '/getAllGl'){
        GlController.showGl(req,res)
    }else if(pathname == '/getSomeGl'){//查看攻略接口，，管理界面暂时用不了，不要删
        GlController.showSomeGl(req,res)
    }else if(pathname == '/deleteGl'){
        GlController.deleteGl(req,res)
    }else if(pathname == '/searchGl'){
		// console.log('xxxxxxxxxx');
		// console.log(req.query)
        GlController.searchGl(req,res)
    }
});

app.post('/*',function(req,res){
    var pathname = url.parse(req.url).pathname ;
    if(pathname == '/addJd'){
        JdController.insert(req,res)
    }else if(pathname == '/updateJd'){
         JdController.updateJd(req,res)
    }
});

app.listen(9999,function (argument) {
    console.log('waiting...') ;
});