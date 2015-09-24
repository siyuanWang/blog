'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'angular': 'bower_components/angular/angular',
        'articleService': 'scripts/services/articleService',
        'labelService': 'scripts/services/labelService',
        'indexController': 'scripts/modules/index/index-controller',
        'directive': 'scripts/directive/directive'
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
        'indexController',
        'directive'
    ],
    function() {
        var angular = arguments[0],articleService = arguments[1],labelService = arguments[2],
            indexController = arguments[3],directive = arguments[4];
        var module = angular.module('indexModule',[]);
        //注册service
        module.config(['$provide','$controllerProvider', function($provide,$controllerProvider) {
            $provide.factory('articleService', articleService);
            $provide.factory('labelService', labelService);
            $controllerProvider.register('indexController', indexController);
        }]);
        module.directive('blogLabel', directive.blogLabelDirective);
    }
);
