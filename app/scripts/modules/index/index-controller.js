'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window',
        function($scope, articleService, $window) {
            $scope.limit = 10;
            $scope.skip = 0;
            $scope.noMoreArticle = false;
            articleService.getArticles($scope.limit, $scope.skip).then(function(data) {
                $scope.articles = data.data;
            });
            $scope.moreArticle = function() {
                $scope.skip += 5;
                articleService.getArticles($scope.limit, $scope.skip).then(function(data) {
                    console.log(data.data)
                    if(data.data.length > 0) {//查询有数据
                        $scope.articles.concat(data.data);
                    } else {//没有更多的文章
                        $scope.skip -= 5;
                        $scope.noMoreArticle = true;
                    }

                });
            };
            $scope.labels = ['javaScript','HTML','Css','Java','AngularJs','bootstrap','AMD','响应式','Unit Test','前端'];
        }];
    return controller;
});
