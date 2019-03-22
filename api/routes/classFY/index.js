/*
 *分类图标相关业务逻辑
 */
var Mongo = require('Mongodb-curd');
var batabaseName = 'lemon';
var collcationName = 'iconList';

function findicon(req, res, next) {
	Mongo.find(batabaseName, collcationName, function(result) {
		if (result) {
			res.send({
				code: 1,
				msg: '查找成功',
				data: result
			})
		} else {
			res.send({
				code: 0,
				msg: 'error',
			})
		}
	})
}

function addiconClassify(req, res, next) {
	var {
		iconName,
		type,
		userID,
		title
	} = req.body;
	if (!iconName || !type || !title || !userID) {
		res.send({
			code: 3,
			msg: '参数不完整'
		})
	} else {
		Mongo.insert(batabaseName, 'iconClassify', req.body, function(result) {
			if (!result) {
				res.send({
					code: 0,
					mes: "error"
				})
			} else {
				res.send({
					code: 1,
					mes: "success",
					data: result
				})
			}
		})
	}
}
function geticonClassify(req, res, next) {
	var {userID,type} = req.query;
	console.log(userID);
	Mongo.find(batabaseName,'iconClassify',{
		userID : {$in : ['*',userID]},
		type : type
	},function(result) {
		// console.log(result);
		if (!result) {
			res.send({
				code: 0,
				mes: "error"
			})
		} else {
			res.send({
				code: 1,
				mes: "success",
				data: result
			})
		}
	})
}


module.exports = {
	findicon: findicon,
	addiconClassify: addiconClassify,
	geticonClassify: geticonClassify
}
