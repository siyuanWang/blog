'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window',
        function($scope, articleService, $window) {
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
        }];
    return controller;
});
