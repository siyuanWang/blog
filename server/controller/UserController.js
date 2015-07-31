var express = require('express');
var userDao = require('../dao/user/UserDao');
var router = express.Router();

router.get('/page/add', function(req, res) {
  res.render('views/user/add');
});

router.get('/page/list', function(req, res) {
  res.render('views/user/list');
});

router.post('/', function(req, res) {
  var data = req.body;
  delete data.confirmPassword;
  userDao.saveUser(data, function(data) {
    res.send(data.msg);
  });
});

module.exports = router;
