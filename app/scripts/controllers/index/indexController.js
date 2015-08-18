'use strict';
define(['app'], function(app) {
    var controller = function($scope, $timeout, articleService) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.slides = [
            {img: '/images/banner_1.jpg', text:''},
            {img: '/images/banner_2.jpg', text:''},
            {img: '/images/banner_3.jpg', text:''}
        ];
        articleService.getArticles().then(function(data) {
            $scope.articles = data.data;
            console.log($scope.articles);
        });
        console.log($scope.articles);
        $scope.labels = ['javaScript','HTML','Css','Java','AngularJs','bootstrap','AMD','响应式','Unit Test','前端']
    };
    controller.inject = ['$scope', '$timeout','articleService'];
    app.register.controller('indexController', controller);
});
