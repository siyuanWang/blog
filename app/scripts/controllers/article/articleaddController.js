'use strict';
define(['app'], function(app) {
    var controller = function($scope, articleService) {
        console.log(articleService)
        $scope.article = {
            title: "",
            introduction: "",
            labels: "",
            content: ""
        };

        function show() {
            articleService.setArticle($scope.article);
        }
    };

    controller.inject = ['$scope', 'articleService'];
    app.register.controller("articleaddController", controller);
});