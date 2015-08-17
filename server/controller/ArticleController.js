var express = require('express');
var articleDao = require('../dao/article/ArticleDao');
var router = express.Router();

router.get('/', function(req, res) {
  articleDao.query(function(result) {
    res.send(result);
  });

});

router.get('/page/list', function(req, res) {
  res.render('views/article/list');
});

router.get('/page/add', function(req, res) {
  res.render('views/article/add');
});

router.post('/', function(req, res) {
  var data = req.body;
  articleDao.save(data, function(data){
    res.send(data.msg);
  })
});

module.exports = router;
