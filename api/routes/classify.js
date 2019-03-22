var express = require('express');
var router = express.Router();
var classify = require('./classFY/index.js')
console.log(classify);
/* 获取icon图标 */
router.get('/api/iconList', classify.findicon);
/* 添加分类 */
router.post('/api/addiconClassify',classify.addiconClassify)
/* 获取所有分类 */
router.get('/api/geticonClassify',classify.geticonClassify)
module.exports = router;
