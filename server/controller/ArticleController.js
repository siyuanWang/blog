'use strict';
var express = require('express');
var articleDao = require('../dao/ArticleDao');
var articleService = require('../service/ArticleService');
var httpResUtil = require('../util/HttpResUtil');
var router = express.Router();
/**
 * 获得文章列表
 */
router.get('/', function(req, res) {
  var pagination = req.query;
  var promise = articleService.queryList(pagination);
  promise.then(function(result) {
    res.send(httpResUtil.successWithResult(result));
  }, function(error) {
    res.send(httpResUtil.error('系统错误'));
  })
});
/**
 * 根据_id获得对应的文章
 */
router.get('/:id', function(req, res) {
  articleDao.queryById(req.params.id, function(result) {
    res.send(result);
  });
  var articleId = req.params.id;
  var promise = articleService.queryByArticleId(articleId);
  promise.then(function(result) {
    res.send(httpResUtil.successWithResult(result));
  }, function(error) {
    res.send(httpResUtil.error('系统错误'));
  });
});


module.exports = router;
