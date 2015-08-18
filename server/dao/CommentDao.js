'use strict';
var db = require("util/dbUtil");
var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    content         : {type : String, default : '<div></div>'},
    parentId        : {type : String, default: ''},
    order           : {type : Number, default: 1},
    create_time     : {type : Date, default: Date.now()}
});

var save = function(document, callback) {
    var commentModel = db.model('blog_comment', commentSchema);
    var commentEntity = new commentModel(document);
    commentEntity.save(function(error) {
        if(error) {
            console.log(error);
            callback({
                operate: false,
                msg: error
            })
        } else {
            console.log('saved OK!');
            callback({
                operate: true,
                msg: "操作成功"
            })
        }
    });
};
/**
 * 查询
 * @param callback {operate: boolean, msg: String, data: Object} operate当操作成功时返回true,否则为false。msg：当operate == false时，有值。data: 查出的数据
 * @param conditions {查询条件} {key: value} 键值对，键为字段，值是字段的内容
 * @param fields {查询字段} {String} example: 'UserName Email UserType' 要查询空格分隔的三个字段
 */
var query = function(callback, conditions, fields) {
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

    query.exec(function(error, result) {
        if(error) {
            callback({
                operate: false,
                msg: error
            })
        } else {
            callback({
                operate: true,
                data: result
            });
        }
    })
};

var queryById = function(id, callback) {
    var articleModel = db.model('blog_article', articleSchema);
    if(id) {
        articleModel.findById(id, function(error, result) {
            if(error) {
                callback({
                    operate: false,
                    msg: error
                })
            } else {
                callback({
                    operate: true,
                    data: result
                });
            }
        })
    }
};

module.exports.save = save;
module.exports.query = query;
module.exports.queryById = queryById;
