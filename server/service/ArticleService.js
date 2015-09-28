'use strict';
var Q = require('q');
var log4js = require('../util/Log4jsUtil');
var logger = log4js.getLogger('system-log');
var articleDao = require('../dao/ArticleDao');
logger.setLevel('INFO');
/**
 * 获得文章列表
 */
function queryList(pagination) {
    var defer = Q.defer();
    var page = parseInt(pagination.page, 10), rows = parseInt(pagination.rows,10), count = parseInt(pagination.count, 10);
    var skip = (page-1)*count;
    var limit = count;
    var condition = {draft: 2};
    logger.info("queryList: condition:%s,pagination: %s", JSON.stringify(condition), JSON.stringify(pagination));
    var promise = articleDao.query(condition, undefined, {limit: limit, skip: skip});
    promise.then(function(result) {
        defer.resolve(result);
    }, function(error) {
        logger.error("queryList is error:{}", error);
        defer.reject(error);
    });

    return defer.promise;
}
/**
 * 根据articleId获得文章对象
 * @param articleId
 */
function queryByArticleId(articleId) {
    if(!articleId) {
        throw new Error('articleId is ');
    }
    var defer = Q.defer();
    var promise = articleDao.queryById(articleId);
    promise.then(function(result) {
        defer.resolve(result);
    }, function(error) {
        defer.reject(error);
    });
    return defer.promise;
}

module.exports.queryList = queryList;
module.exports.queryByArticleId = queryByArticleId;
