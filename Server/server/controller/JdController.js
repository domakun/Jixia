const JdService = require('../service/JdService.js') ;
const express = require('express') ;
const app = express() ;
const cookieParser = require('cookie-parser') ;
app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));

exports.showJdS = showJdS  ;
function showJdS(req,res){
  console.log('+++++++',req.query) ;
    var pageNow = req.query.pageNow ;
    JdService.queryByCutPage(pageNow,function(result){
        // console.log(result,">>>result") ;
        res.json(result) ;
    }) ;
}

// 添加
exports.insert = insert  ;
function insert(req,res){
  console.log(req.body)
  jd_name,jd_info,jd_addr,imgs
  var jd_name = req.body.jd_name ; 
  var jd_info = req.body.jd_info ; 
  var jd_addr = req.body.jd_addr ; 
  var imgs = req.body.imgs ; 
  JdService.insert(jd_name,jd_info,jd_addr,imgs,function(result){
    res.json(result) ;
  }) ;
}