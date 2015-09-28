'use strict';
var db = require("./util/dbUtil");
var mongoose = require('mongoose');
var Q = require('q');

var articleSchema = new mongoose.Schema({
    content         : {type : String, default : '<div></div>'},
    title           : {type : String, default: '未命名标题'},
    labels          : {type : [String], default: []},
    introduction    : {type :  String, default: '<div></div>'},
    type            : {type : Number, default: 1},
    share_num       : {type : Number, default: 0},
    create_time     : {type : Date, default: Date.now()},
    update_time     : {type : Date, default: Date.now()},
    draft           : {type : Number, default: 1}           //默认是 1草稿,发布是2
});

/**
 * 查询
 * @param conditions 查询条件 key: value 键值对，键为字段，值是字段的内容
 * @param fields String example: 'UserName Email UserType' 要查询空格分隔的三个字段
 * @param pageObject limit,skip
 */
var query = function(conditions, fields, pagination) {
    var defer = Q.defer();
    var articleModel = db.model('blog_article', articleSchema);
    var query;
    //如果有查询条件
    if(conditions) {
        query = articleModel.find(conditions);
    } else {
        query = articleModel.find({});
    }
    //如果规定查询字段
    if(fields) {
        query.select(fields);
    }
    if(pagination && pagination.skip) {
        query.skip(pagination.skip);
    }
    if(pagination && pagination.limit) {
        query.limit(pagination.limit)
    }

    query.exec(function(error, result) {
        if(error) {
            defer.reject(error);
        } else {
            defer.resolve(result);
        }
    });

    return defer.promise;
};
/**
 * 按articleID查询文章对象
 * @param articleId
 * @returns {*}
 */
var queryById = function(articleId) {
    if(!articleId) {
        throw new Error('articleId is error.');
    }
    var defer = Q.defer();
    var articleModel = db.model('blog_article', articleSchema);
    articleModel.findById(articleId, function(error, result) {
        if(error) {
            defer.reject(error);
        } else {
            defer.resolve(result);
        }
    });
    return defer.promise;
};

module.exports.query = query;
module.exports.queryById = queryById;
