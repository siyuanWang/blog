'use strict';
var express = require('express');
var commentDao = require('../dao/CommentDao');
var router = express.Router();
/**
 * 获得文章列表
 */
router.get('/', function(req, res) {
    console.log("#################get#############");
    commentDao.query(function(result) {
        res.send(result);
    });

});
/**
 * 根据_id获得对应的文章
 */
router.get('/:id', function(req, res) {
    commentDao.queryById(req.params.id, function(result) {
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