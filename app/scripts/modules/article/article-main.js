'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'angular': 'bower_components/angular/angular',
        'changyan': 'http://changyan.sohu.com/upload/changyan',
        'articleService': 'scripts/services/articleService',
        'articleController': 'scripts/modules/article/article-controller'
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
        'articleController',
        'changyan'
    ],
    function() {
        var angular = arguments[0],articleService = arguments[1],articleController = arguments[2];
        var module = angular.module('articleModule',[]);
        //注册service
        module.config(['$provide','$controllerProvider', function($provide,$controllerProvider) {
            $provide.factory('articleService', articleService);
            $controllerProvider.register('articleController', articleController);
        }]);

        module.filter('sanitize',['$sce', function($sce) {
            return function(htmlCode){
                return $sce.trustAsHtml(htmlCode);
            }
        }]);
    }
);
