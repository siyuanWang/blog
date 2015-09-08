'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window',
        function($scope, articleService, $window) {
            articleService.getArticles().then(function(data) {
                $scope.articles = data.data;
            });
        }];
    return controller;
});
