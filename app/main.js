'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'bootstrap-js':'bower_components/bootstrap/dist/js/bootstrap.min',
        'library': 'bower_components'
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'angular-route': {
            deps:['angular'],
            exports:'angular-route'
        }
        //request deps 是怎么管理依赖的
        //app: {
        //    deps:['angular', 'angular-route', 'jquery', 'bootstrap-js']
        //}
    }
});

require(
    [
        'app',
        'scripts/directives/registerDirectives',
        'scripts/services/routeResolver',
        'scripts/services/articleService',
        'scripts/services/commentService'
    ],
    function(app) {
        angular.bootstrap(document, ['myApp']);
    });