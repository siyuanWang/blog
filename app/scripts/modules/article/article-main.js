'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'angular': 'bower_components/angular/angular.min',
        'articleService': 'scripts/services/articleService',
        'articleController': 'scripts/modules/article/article-controller',
        'directive': 'scripts/directive/directive',
        'labelService': 'scripts/services/labelService'
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
