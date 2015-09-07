'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'angular': 'bower_components/angular/angular',
        'bootstrap':'bower_components/bootstrap/dist/js/bootstrap.min',
        'changyan': 'http://changyan.sohu.com/upload/changyan',
        'articleService': 'scripts/services/articleService',
        'indexController': 'scripts/modules/index/index-controller'
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        "bootstrap": {
            deps: ['jquery']
        }
    }
});

require(
    [
        'angular',
        'articleService',
        'indexController',
        'changyan'
    ],
    function() {
        //jquery需要在angular之后加载，否则报错
        //require(['bootstrap'], function() {
        //    alert('loaded bootstrap');
        //})
        var angular = arguments[0],articleService = arguments[1],indexController = arguments[2];
        var module = angular.module('indexModule',[]);
        //注册service
        module.config(['$provide','$controllerProvider', function($provide,$controllerProvider) {
            $provide.factory('articleService', articleService);
            $controllerProvider.register('indexController', indexController);
        }]);
    }
);
