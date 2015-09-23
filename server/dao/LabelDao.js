'use strict';
var db = require("./util/dbUtil");
var mongoose = require('mongoose');
var Q = require('q');

var labelSchema = new mongoose.Schema({
    label_name      : {type : String}, //label名
    article_num     : {type : Number, default: 0},//标签下文章的数量
    articles        : {type : [String], default: []}//标签下的文章_id集合
});
/**
 * 查询
 * @param conditions 查询条件 键值对，键为字段，值是字段的内容
 * @param fields 查询字段 String example: 'UserName Email UserType' 要查询空格分隔的三个字段
 * @param pagination skip,limit
 */
var query = function(conditions, fields, pagination) {
    var defered = Q.defer();
    var labelModel = db.model('blog_label', labelSchema);
    var query;
    //如果有查询条件
    if(conditions) {
        query = labelModel.find(conditions);
    } else {
        query = labelModel.find({});
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
            defered.reject(error);
        } else {
            defered.resolve(result);
        }
    });

    return defered.promise;
};
/**
 * 获得记录总数
 * @returns {*}
 */
function getCount() {
    var defered = Q.defer();
    var labelModel = db.model('blog_label', labelSchema);
    var query = labelModel.find({}).count();
    query.exec(function(error, result) {
        if(error) {
            defered.reject(error);
        } else {
            defered.resolve(result);
        }
    });

    return defered.promise;
}

module.exports.query = query;
module.exports.getCount = getCount;
