var express = require('express');
var router = express.Router();
var UserDao = require("../dao/user/UserDao");

router.get('/', function(req, res, next) {
  res.render('views/user/list', { title: 'Express' });
});

router.get('/article', function (req, res) {
  UserDao.query(function(result) {
    res.send(result);
  });
});

router.post('/article', function (req, res) {
  var userDocument = {
    username        : "wangsiyuan",
    password        : "123456",
    sex             : 1,
    create_time     : Date.now(),
    update_time     : Date.now(),
    phone           : "18688888888",
    age             : 26
  };
  UserDao.saveUser(userDocument);
  res.send("save success");
});

module.exports = router;