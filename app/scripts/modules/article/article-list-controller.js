'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window',
        function($scope, articleService, $window) {
            $scope.limit = 10;
            $scope.skip = 0;

            articleService.getArticles($scope.limit, $scope.skip).then(function(data) {
                $scope.articles = data.data;
            });
        }];
    return controller;
});
