/**
 * Created by Administrator on 2015/7/22.
 */
var db = require("../util/dbUtil");
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username        : {type : String, default : '用户名'},
    password        : {type : String},
    email           : {type : String},
    sex             : {type : Number},
    create_time     : {type : Date, default: Date.now()},
    update_time     : {type : Date, default: Date.now()},
    phone           : {type : String},
    age             : {type : Number}
},{ versionKey: false });

var saveUser = function(document, callback) {
    var userModel = db.model('blog_user', userSchema);
    var userEntity = new userModel(document);
    userEntity.save(function(error) {
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

var query = function(params, columns, callback) {
    var userModel = db.model('blog_user', userSchema);
    var query = userModel.find(params).select(columns);
    query.exec(function(error, result) {
        if(error) {
            console.log(error);
            callback({
                operate: false,
                msg: error
            })
        } else {
            console.log(result)
            callback({
                operate: true,
                data: result
            });
        }
    });
};

module.exports.saveUser = saveUser;
module.exports.query = query;
