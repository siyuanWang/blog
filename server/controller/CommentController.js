'use strict';
var express = require('express');
var commentDao = require('../dao/CommentDao');
var router = express.Router();
/**
 * 新增一个评论
 */
router.post('/', function(req, res) {
    var data = req.body;
    commentDao.queryCountByArticleId(req.param.id, function(count) {
        data.order = ++count;
        commentDao.save(data, function(data){
            res.send(data.msg);
        })
    });
});

/**
 * 根据articelId获得对应文章的评论
 */
router.get('/:articleId', function(req, res) {
    commentDao.queryCountByArticleId(req.params.articleId, function(result) {
        res.send(result);
    });
});
/**
 * 新增一个文章
 */
router.post('/', function(req, res) {
    var data = req.body;
    commentDao.save(data, function(data){
        res.send(data.msg);
    })
});

module.exports = router;