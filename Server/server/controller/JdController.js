const JdService = require('../service/JdService.js') ;
const express = require('express') ;
const app = express() ;
const cookieParser = require('cookie-parser') ;
app.use(cookieParser('lifeissimpebutyoumadeitcomplicated'));

exports.showJdS = showJdS  ;
function showJdS(req,res){
    var pageNow = req.query.pageNow ;
    JdService.queryByCutPage(pageNow,function(result){
        // console.log(result,">>>result") ;
        res.json(result) ;
    }) ;
}