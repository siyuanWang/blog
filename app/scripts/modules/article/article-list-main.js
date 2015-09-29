'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'jquery': '/app/bower_components/jquery/dist/jquery.min',
        'bootstrap-treeview': '/app/bower_components/bootstrap-treeview/dist/bootstrap-treeview.min',
        'angular': '/app/bower_components/angular/angular.min',
        'articleService': '/app/scripts/services/articleService',
        'articleListController': '/app/scripts/modules/article/article-list-controller',
        'labelService': '/app/scripts/services/labelService',
        'directive': '/app/scripts/directive/directive'
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'bootstrap-treeview': {
            deps:['jquery']
        }
    }
});

require(
    [
        'angular',
        'articleService',
        'articleListController',
        'bootstrap-treeview',
        'directive',
        'labelService'
    ],
    function() {
        var tree = [
            {
                text: "前端",
                state: {
                    checked: true,
                    expanded: true
                },
                nodes: [
                    {text: "AngularJS", state: {selected: true}},
                    {text: "Bootstrap"},
                    {text: "Css"}
                ]
            },
            {
                text: "服务端",
                state: {
                    expanded: false
                },
                nodes: [
                    {text: "Java"},
                    {text: "Node"},
                    {text: "Python"}
                ]
            },
            {
                text: "数据库",
                state: {
                    expanded: false
                },
                nodes:[
                    {text: "NoSQL"},
                    {text: "传统数据库"}
                ]
            }
        ];
        $('#tree').treeview({
            data: tree,         // data is not optional
            levels: 99
        });
        var angular = arguments[0],articleService = arguments[1],articleListController = arguments[2],
            directive = arguments[4], labelService = arguments[5];
        var module = angular.module('articleListModule',[]);
        //注册service
        module.config(['$provide','$controllerProvider', function($provide,$controllerProvider) {
            $provide.factory('articleService', articleService);
            $provide.factory('labelService', labelService);
            $controllerProvider.register('articleListController', articleListController);
        }]);

        module.directive('blogLabel', directive.blogLabelDirective);
    }
);
