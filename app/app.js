'use strict';
define([], function() {
    var app = angular.module('myApp',['ngRoute', 'routeResolverServices','ngAnimate','ui.router','ui.bootstrap','textAngular']);
    app.config(['$routeProvider', 'routeResolverProvider','$controllerProvider','$compileProvider',
            '$provide','$filterProvider',

            function($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider,
                     $provide, $filterProvider, $filter) {
                console.log('app config.')
                app.register = {
                    controller: $controllerProvider.register,
                    directive: $compileProvider.directive,
                    filter: $filterProvider.register,
                    factory: $provide.factory,
                    service: $provide.service
                };
                var route = routeResolverProvider.route;

                $routeProvider.when('/user', route.resolve('userAddController','userAdd','user','vm', false))
                    .when('/index',route.resolve('indexController','index','index', 'vm', false))
                    .when('/article/query/:id',route.resolve('articleShowController', 'show', 'article', 'vm', false))
                    .when('/article/add',route.resolve('articleAddController','add','article', 'vm', false))
                    .otherwise(route.resolve('carouselController','carousel','carousel', 'vm', false));
            }]
    );
    app.filter('sanitize',['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
    }]);

    return app;
});