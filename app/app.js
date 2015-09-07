'use strict';
define([], function() {
    var app = angular.module('myApp',['ngRoute', 'routeResolverServices']);
    app.config(['$routeProvider', 'routeResolverProvider','$controllerProvider','$compileProvider',
            '$provide','$filterProvider',

            function($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider,
                     $provide, $filterProvider, $filter) {
                console.log('app config.');

                app.register = {
                    controller: $controllerProvider.register,
                    directive: $compileProvider.directive,
                    filter: $filterProvider.register,
                    factory: $provide.factory,
                    service: $provide.service
                };
                var route = routeResolverProvider.route;

                $routeProvider
                    .when('/index',route.resolve('indexController','index','index', 'vm', false))
                    .when('/about',route.resolve('aboutMeController', 'aboutme', '', 'vm', false))
                    .when('/article',route.resolve('articleController', 'articlelist', 'article', 'vm', false))
                    .when('/article/query/:id',route.resolve('articleShowController', 'show', 'article', 'vm', false))
                    .otherwise(route.resolve('indexController','index','index', 'vm', false));
            }]
    );
    app.filter('sanitize',['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        }
    }]);

    app.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
        $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
            console.log('Current route name: ' + $location.path());
            var path = $location.path();//获得当前路由地址

        })
    }]);

    return app;
});