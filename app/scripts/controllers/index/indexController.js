'use strict';
define(['app'], function(app) {
    var controller = function($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.slides = [
            {img: '/images/banner_1.jpg', text:''},
            {img: '/images/banner_2.jpg', text:''},
            {img: '/images/banner_3.jpg', text:''}
        ]

        $scope.articles = [
            {
                title:'Video: Building a Single-Page App with Angular, TypeScript, Azure Active Directory and Office 365 APIs',
                content:'In a previous post I introduced how ES6 can be transpiled to ES5 using Traceur or Babel. By using transpilers you can write“modern” code and leverage features found in ES6 today while still allowing the code to run in older browsers. In this post I’m going to dive into classes which is one of the shiny new features found in ES6.',
                date: '2015-09-28'
            },
            {
                title:'The Role of Interfaces in TypeScript',
                content:'In a previous post I introduced how ES6 can be transpiled to ES5 using Traceur or Babel. By using transpilers you can write“modern” code and leverage features found in ES6 today while still allowing the code to run in older browsers. In this post I’m going to dive into classes which is one of the shiny new features found in ES6.',
                date: '2015-09-28'
            },
            {
                title:'The Role of Interfaces in TypeScript',
                content:'In a previous post I introduced how ES6 can be transpiled to ES5 using Traceur or Babel. By using transpilers you can write“modern” code and leverage features found in ES6 today while still allowing the code to run in older browsers. In this post I’m going to dive into classes which is one of the shiny new features found in ES6.',
                date: '2015-09-28'
            }
        ];

        $scope.labels = ['javaScript','HTML','Css','Java','AngularJs','bootstrap','AMD','响应式','Unit Test','前端']
    }

    app.register.controller('indexController', controller);
});
