const JdModule = require('../module/JdModule.js') ;
const publicdata = require('../utils/publicData.js') ;

// 查询页面数据和总页数
exports.queryByCutPage = queryByCutPage ;
function queryByCutPage(pageNow,func){
    var first = (pageNow-1)*publicdata.max ;
    var result = {} ;
    console.log(first);
    JdModule.selectAllJds(first,publicdata.max,function(r){
        // 回调查询总页数
        result.jdData = r ;
        JdModule.getCount(function(res){
            res = res[0]['count(*)'] ;
            res = res/publicdata.max ;
            res = Math.ceil(res) ;
            result.totalPages = res ;
            console.log('>>>>>',result)
            func(result) ;
        }) ;

    }) ;
}

// 添加景点
exports.insert = insert ; 
function insert(jd_name,jd_info,jd_addr,imgs,func){
    // 先检查名字是否重复
    JdModule.checkName(jd_name,function(res){
        if(res.length != 0){
            // 存在此名称，返回相应数据
            func('exits');
        }else{
            // 不存在此名字,执行更改
            JdModule.addJd(jd_name,jd_info,jd_addr,imgs,function(result){
                if(result.affectedRows == 0){
                    func('error');
                }else{
                    func('success') ;
                }
            }) ; 
        }
    }) ;
}

// insert('jd_name','jd_info','jd_addr','imgs',function(){})