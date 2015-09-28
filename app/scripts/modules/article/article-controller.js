'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window','labelService',
        function($scope, articleService, $window, labelService) {

            $scope.articleId = $window._articleData;
            articleService.getArticleById($scope.articleId).then(function(data) {
                $scope.article = data.result;
            });

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
