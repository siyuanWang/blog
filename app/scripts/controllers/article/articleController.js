'use strict';
define(['app'], function(app) {
    var controller = function($scope, $http, $routeParams, articleService) {
        $scope.article = {};
        articleService.getArticleById($routeParams.id).then(function(data) {
            $scope.article = data.data;
        })
    };
    controller.inject = ['$scope', '$http', '$routeParams', 'articleService'];
    app.register.controller("articleController", controller);
});