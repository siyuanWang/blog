var express = require('express');
var router = express.Router();
var userDao = require('../dao/user/UserDao');
router.get('/', function(req, res, next) {
  userDao.saveUser({
    username        : 'xxx',
    password        : '123456',
    sex             : 1,
    create_time     : Date.now(),
    update_time     : Date.now(),
    phone           : '13899999999',
    age             : 22
  })
  res.send('respond with a resource');
});

module.exports = router;
