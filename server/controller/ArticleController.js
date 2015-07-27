var express = require('express');
var articleDao = require('../dao/article/ArticleDao');
var router = express.Router();

router.get('/', function(req, res, next) {
  articleDao.query(function(result) {
    res.send(result);
  });

});

router.post('/', function(req, res) {
  articleDao.save({
    content:'<div>article content</div>',
    title:'未命名标题',
    lables:['a','b'],
    share_num:0,
    sex:1,
    create_time:Date.now(),
    update_time:Date.now(),
    comment         : [
      {
        commentId: 1,
        time:Date.now(),
        content:'<div>comment1</div>',
        parentId: 0,
        order:0
      },
      {
        commentId: 2,
        time:Date.now(),
        content:'<div>comment2</div>',
        parentId: 0,
        order:1
      }
    ]
  }, function(data){
    res.send(data.msg);
  })
});

module.exports = router;
