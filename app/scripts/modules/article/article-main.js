'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'angular': '/app/bower_components/angular/angular.min',
        'articleService': '/app/scripts/services/articleService',
        'articleController': '/app/scripts/modules/article/article-controller',
        'directive': '/app/scripts/directive/directive',
        'labelService': '/app/scripts/services/labelService'
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
        'articleController',
        'directive',
        'labelService'
    ],
    function() {
        var angular = arguments[0],articleService = arguments[1],articleController = arguments[2],
            directive = arguments[3],labelService = arguments[4];
        var module = angular.module('articleModule',[]);
        //注册service
        module.config(['$provide','$controllerProvider', function($provide,$controllerProvider) {
            $provide.factory('articleService', articleService);
            $provide.factory('labelService', labelService);
            $controllerProvider.register('articleController', articleController);
        }]);

        module.filter('sanitize',['$sce', function($sce) {
            return function(htmlCode){
                return $sce.trustAsHtml(htmlCode);
            }
        }]);
        module.directive('blogLabel', directive.blogLabelDirective);
    }
);
