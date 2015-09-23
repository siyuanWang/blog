'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'angular': 'bower_components/angular/angular',
        'articleService': 'scripts/services/articleService',
        'labelService': 'scripts/services/labelService',
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
        'labelService',
        'indexController'
    ],
    function() {
        var angular = arguments[0],articleService = arguments[1],labelService = arguments[2],
            indexController = arguments[3];
        var module = angular.module('indexModule',[]);
        //注册service
        module.config(['$provide','$controllerProvider', function($provide,$controllerProvider) {
            $provide.factory('articleService', articleService);
            $provide.factory('labelService', labelService);
            $controllerProvider.register('indexController', indexController);
        }]);
    }
);
