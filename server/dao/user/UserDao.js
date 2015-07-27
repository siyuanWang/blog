/**
 * Created by Administrator on 2015/7/22.
 */
var db = require("../util/dbUtil");
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username        : {type : String, default : '用户名'},
    password        : {type : String},
    sex             : {type : Number},
    create_time     : {type : Date, default: Date.now()},
    update_time     : {type : Date, default: Date.now()},
    phone           : {type : String},
    age             : {type : Number}
});

var saveUser = function(document) {
    var userModel = db.model('blog_user', userSchema);
    var userEntity = new userModel(document);
    userEntity.save(function(error) {
        if(error) {
            console.log(error);
        } else {
            console.log('saved OK!');
        }
    });
};

var query = function(callback) {
    var userModel = db.model('blog_user', userSchema);
    userModel.find({}, {}, function(error, result) {
        if(error) {
            console.log(error);
        } else {
            callback(result);
        }
    })
};

module.exports.saveUser = saveUser;
module.exports.query = query;
