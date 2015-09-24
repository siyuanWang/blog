'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','labelService','$window',
        function($scope, articleService, labelService, $window) {
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
