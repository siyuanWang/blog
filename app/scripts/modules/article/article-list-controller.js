'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window',
        function($scope, articleService, $window) {
            $scope.limit = 10;
            $scope.skip = 0;

            articleService.getArticles({page: 1, rows:0, count: 15}).then(function(data) {
                $scope.articles = data.data;
            });
        }];
    return controller;
});
