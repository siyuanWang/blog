'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','labelService','$window',
        function($scope, articleService, labelService, $window) {
            $scope.noMoreArticle = false;
            $scope.page = 1;
            $scope.rows = 0;
            $scope.count = 15;
            var labelId = window._labelId;
            $scope.label_name = window._labelName;
            if(!labelId) {
                throw new Error("error: labelObject not exist.")
            }

            labelService.queryArticlesByLabelId(labelId, {page: $scope.page, rows:$scope.rows, count: $scope.count}).then(function(data) {
                $scope.articles = data.result.list;
            });
            $scope.moreArticle = function() {
                $scope.page++;
                labelService.queryArticlesByLabelId(labelId, {page: $scope.page, rows:$scope.rows, count: $scope.count}).then(function(data) {
                    if(data.result.length > 0) {//查询有数据
                        $scope.articles.concat(data.result.list);
                    } else {//没有更多的文章
                        $scope.page--;
                        $scope.noMoreArticle = true;
                    }

                });
            };
            labelService.getLabels({page: 1, rows:0, count: 100}).then(function(result) {
                if(result.status == 1) {
                    $scope.labels = result.result.list;
                } else {
                    alert("后台错误");
                }
            }, function(msg) {
                alert(msg);
            })
        }];
    return controller;
});
