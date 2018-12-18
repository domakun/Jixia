const MongoClient  = require('mongodb').MongoClient  ;

const url = 'mongodb://localhost:27017/' ;
// MongoClient .connect(url,{useNewUrlParser:true},function(error, db){
// 	if(error){
// 		console.log(error) ; 
// 	}else{
// 		console.log('yeah~');
// 		var test1 = db.db('test1');
// 		// test1.collection('test1').updateOne({"3":333},{$set:{"33":"猫咪老师"}},function(error,res){
// 		// 	if(error){
// 		// 		console.log(error);
// 		// 	}else{
// 		// 		console.log("yeah~");
// 		// 	}
// 		// });

// 		// 打印
// 		test1.collection('test1').find().sort().skip(1).limit(2).toArray(function(error,res){
// 			if(error){
// 				console.log(error);
// 			}else{
// 				console.log(res);
// 			}
			
// 		});
// 		db.close()  ;
// 	}
// })

select('admin',function(result){
	console.log(result) ;
}) ;
exports.select = select ; 
// 封装一个select方法
function select(username,func){
	var result = [] ; 
	 MongoClient.connect(url,{useNewUrlParser:true},function(error, db){
	 	if(error){
	 		console.log(error);
	 	}else{
	 		var exercise = db.db('exercise') ;
	 		exercise.collection('user').find({name:username}).toArray(function(error,res){
	 			if(error){
	 				console.log(error) ;
	 			}else{
	 				result = res ; 
	 				// console.log(res) ;
	 				func(result) ;
	 			}
	 		})
	 		db.close() ;
	 	}
	 });
}