'use strict';
var express = require('express');
var labelService = require('../service/LabelService');
var router = express.Router();
var log4js = require('../util/Log4jsUtil');
var logger = log4js.getLogger('system-log');
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

/**
 * 文档详细
 */
router.get('/tag/:tagName', function(req, res) {
    var tagName = req.params.tagName;
    logger.debug("tagName is '%d'", tagName);
    var promise = labelService.queryByLabelName(tagName);
    promise.then(function(result) {
        logger.info(result);
        res.render('./views/label/label-article-list',{labelObject: result});
    }, function(error) {
        res.render('./views/label/label-article-list',{labelObject: {}});
    })
});

module.exports = router;