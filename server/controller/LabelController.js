'use strict';
var express = require('express');
var labelService = require('../service/LabelService');
var httpResUtil = require('../util/HttpResUtil');
var router = express.Router();
/**
 * 获得label列表
 */
router.get('/', function(req, res) {
  var pagination = req.query;
  var promise = labelService.queryList(pagination);
  promise.then(function(result) {
    res.send(httpResUtil.successWithResult(result));
  }, function(error) {
    res.send(httpResUtil.error('后台错误'));

  });

});
module.exports = router;
