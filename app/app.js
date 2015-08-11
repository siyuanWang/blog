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
                console.log(route.resolve('carousel', 'carousel', 'vm', false));
                $routeProvider.when('/user', route.resolve('useradd', 'user', 'vm', false))
                    .when('/index',route.resolve('carousel', 'carousel', 'vm', false));
            }]
    );
    app.controller('rootController', function($scope, $element, $attrs, $transclude){
        console.log(arguments);
    });

    return app;
});