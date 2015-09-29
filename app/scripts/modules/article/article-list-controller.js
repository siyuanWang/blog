'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window','labelService',
        function($scope, articleService, $window, labelService) {
            $scope.noMoreArticle = false;
            $scope.page = 1;
            $scope.rows = 0;
            $scope.count = 15;

            articleService.getArticles({page: $scope.page, rows:$scope.rows, count: $scope.count}).then(function(data) {
                $scope.articles = data.result;
            });

            $scope.moreArticle = function() {
                $scope.page++;
                articleService.getArticles({page: $scope.page, rows:$scope.rows, count: $scope.count}).then(function(data) {
                    if(data.result.length > 0) {//查询有数据
                        $scope.articles.concat(data.result);
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
