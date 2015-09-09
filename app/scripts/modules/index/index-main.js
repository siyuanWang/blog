'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'angular': 'bower_components/angular/angular',
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
        'indexController'
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
