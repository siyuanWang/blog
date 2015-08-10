'use strict';
define([], function() {
    var app = angular.module('myApp',['ngRoute', 'routeResolverServices','ui.router','ui.bootstrap']);
    app.config(['$routeProvider', 'routeResolverProvider','$controllerProvider','$compileProvider',
            '$provide','$filterProvider',

            function($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider,
                     $provide, $filterProvider) {
                console.log('app config.')
                app.register = {
                    controller: $controllerProvider.register,
                    directive: $compileProvider.directive,
                    filter: $filterProvider.register,
                    factory: $provide.factory,
                    service: $provide.service
                };
                var route = routeResolverProvider.route;
                $routeProvider.when('/user', route.resolve('add', 'user', 'vm', false))
                    .otherwise({ templateUrl: '/views/head.html' });
            }]
    );
    app.controller('rootController', function($scope, $element, $attrs, $transclude){
        console.log(arguments);
    });

    return app;
});