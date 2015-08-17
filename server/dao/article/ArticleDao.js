var db = require("../util/dbUtil");
var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    content         : {type : String, default : '<div></div>'},
    title           : {type : String, default: '未命名标题'},
    labels          : {type : [String], default: []},
    introduce       : {type:  String, default: '<div></div>'},
    share_num       : {type : Number, default: 0},
    create_time     : {type : Date, default: Date.now()},
    update_time     : {type : Date, default: Date.now()}
});

var save = function(document, callback) {
    var articleModel = db.model('blog_article', articleSchema);
    var articleEntity = new articleModel(document);
    articleEntity.save(function(error) {
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

var query = function(callback) {
    var articleModel = db.model('blog_article', articleSchema);

    articleModel.find({}, {}, function(error, result) {
        if(error) {
            console.log(error);
        } else {
            callback(result);
        }
    })
};

module.exports.save = save;
module.exports.query = query;
