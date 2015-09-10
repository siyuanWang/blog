'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window',
        function($scope, articleService, $window) {

            $scope.articleId = $window._articleData;
            articleService.getArticleById($scope.articleId).then(function(data) {
                $scope.article = data.data;
                console.log($window.changyan)
                //$window.changyan.api.config({
                //    appid: 'cyrXKIcmH',
                //    conf: 'prod_ff4be030258e259cd974b71f4546c833'
                //});
            });
        }];
    return controller;
});
