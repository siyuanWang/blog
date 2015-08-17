'use strict';
define(['app'], function(app) {
    var controller = function($scope, $http, articleService) {
        $scope.article = {
            title: "",
            introduction: "",
            labels: "",
            content: ""
        };

        function show() {
            articleService.setArticle($scope.article);
        }

        $scope.submit = function() {
            $http.post('/article', $scope.article)
                .success(function(data, status, headers, config) {
                    alert(data);
                })
                .error(function(data, status, headers, config) {
                    alert(data);
                });
        }
    };

    controller.inject = ['$scope', '$http', 'articleService'];
    app.register.controller("articleaddController", controller);
});