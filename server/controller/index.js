var express = require('express');
var router = express.Router();
var UserDao = require("../dao/user/UserDao");

router.get('/', function(req, res, next) {
  res.render('views/user/list', { title: 'Express' });
});

module.exports = router;