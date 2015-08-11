'use strict';
define([], function() {
    var app = angular.module('myApp',['ngRoute', 'routeResolverServices','ngAnimate','ui.router','ui.bootstrap']);
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

                $routeProvider.when('/user', route.resolve('useradd', 'user', 'vm', false))
                    .when('/index',route.resolve('index', 'index', 'vm', false))
                    .otherwise(route.resolve('carousel', 'carousel', 'vm', false));
            }]
    );

    return app;
});