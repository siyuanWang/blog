'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window',
        function($scope, articleService, $window) {

            $scope.articleId = $window._articleData;
            articleService.getArticleById($scope.articleId).then(function(data) {
                $scope.article = data.data;
            });
        }];
    return controller;
});
