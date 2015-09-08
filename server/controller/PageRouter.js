'use strict';
var express = require('express');
var articleDao = require('../dao/ArticleDao');
var router = express.Router();
/**
 * 文档列表
 */
router.get('/blog', function(req, res) {
    console.log('render blog list page.')
    res.render('./views/article/articlelist',{title: 'blogList'});
});
/**
 * 文档详细
 */
router.get('/blog/:id', function(req, res) {
    res.render('./views/article/article',{articleId: req.params.id});
});

module.exports = router;