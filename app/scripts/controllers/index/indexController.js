'use strict';
define(['app'], function(app) {
    var controller = function($scope, articleService) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.slides = [
            {img: '/images/banner_1.jpg', text:''},
            {img: '/images/banner_2.jpg', text:''},
            {img: '/images/banner_3.jpg', text:''}
        ];
        var promise = articleService.getArticles(function(data) {
            console.log(data)
            $scope.articles = data;

        });
        promise.then(function(greeting) {
            alert('成功: ' + greeting);
        }, function(reason) {
            alert('失败鸟: ' + reason);
        }, function(update) {
            alert('收到通知: ' + update);
        });

        $scope.labels = ['javaScript','HTML','Css','Java','AngularJs','bootstrap','AMD','响应式','Unit Test','前端']
    }
    controller.inject = ['$scope', 'articleService'];
    app.register.controller('indexController', controller);
});
