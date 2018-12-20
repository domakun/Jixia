const JdModule = require('../module/JdModule.js') ;
const publicdata = require('../utils/publicdata.js') ;

// 查询页面数据和总页数
exports.queryByCutPage = queryByCutPage ;
function queryByCutPage(pageNow,func){
    var first = (pageNow-1)*publicdata.max ;
    var result = {} ;
    JdModule.selectAllJds(first,publicdata.max,function(r){
        // 回调查询总页数
        result.jdData = r ;
        JdModule.getCount(function(res){
            res = res[0]['count(*)'] ;
            res = res/publicdata.max ;
            res = Math.ceil(res) ;
            result.totalPages = res ;
            // console.log('>>>>>',result)
            func(result) ;
        }) ;

    }) ;
}