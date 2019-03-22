/*
 *用户相关业务逻辑
 */
var Mongo = require('Mongodb-curd');
var batabaseName = 'lemon';
var collcationName = 'user';
module.exports = function (req,res,next) {
	Mongo.find(batabaseName,collcationName,function(result){
		console.log(result);
	    if(!result){
	       res.send({
	           code:0,
	           mes:"error"
	        })
	    }else{
	        res.send({
	           code:1,
	           mes:"success",
	           data:result
	        })
	    }
	},{
	    skip:0,
	    limit:0
	})
}
