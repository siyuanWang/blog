'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'angular': '/app/bower_components/angular/angular.min',
        'articleService': '/app/scripts/services/articleService',
        'labelService': '/app/scripts/services/labelService',
        'labelController': '/app/scripts/modules/label/label-controller',
        'directive': '/app/scripts/directive/directive'
    },
    shim:{
        'angular':{
            exports:'angular'
        }
    }
});

require(
    [
        'angular',
        'articleService',
        'labelService',
        'labelController',
        'directive'
    ],
    function() {
        var angular = arguments[0],articleService = arguments[1],labelService = arguments[2],
            labelController = arguments[3],directive = arguments[4];
        var module = angular.module('labelModule',[]);
        //注册service
        module.config(['$provide','$controllerProvider', function($provide,$controllerProvider) {
            $provide.factory('articleService', articleService);
            $provide.factory('labelService', labelService);
            $controllerProvider.register('labelController', labelController);
        }]);
        module.directive('blogLabel', directive.blogLabelDirective);
    }
);
