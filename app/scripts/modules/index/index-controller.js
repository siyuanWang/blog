'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window',
        function($scope, articleService, $window) {
            articleService.getArticles().then(function(data) {
                $scope.articles = data.data;
            });
            $scope.labels = ['javaScript','HTML','Css','Java','AngularJs','bootstrap','AMD','响应式','Unit Test','前端'];

            $window.changyan.api.config({
                appid: 'cyrXKIcmH',
                conf: 'prod_ff4be030258e259cd974b71f4546c833'
            });
        }];
    return controller;
});
