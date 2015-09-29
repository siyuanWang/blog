'use strict';
var express = require('express');
var labelService = require('../service/LabelService');
var httpResUtil = require('../util/HttpResUtil');
var router = express.Router();
var log4js = require('../util/Log4jsUtil');
var logger = log4js.getLogger('system-log');
logger.setLevel('INFO');
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

router.get('/:labelId', function(req, res) {
  var pagination = req.query;
  var labelId = req.params.labelId;
  logger.debug("labelId is %d", labelId);
  var promise = labelService.queryArticleByLabelId(labelId, pagination);
  promise.then(function(result) {
    res.send(httpResUtil.successWithResult(result));
  }, function(error) {
    res.send(httpResUtil.error('后台错误'));
  });
});

module.exports = router;
