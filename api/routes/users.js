var express = require('express');
var router = express.Router();
var user = require('./usersApi/getUsers.js');

/* GET users listing. */
router.get('/api/getUser',user);

module.exports = router;