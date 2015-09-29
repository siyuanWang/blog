'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'jquery': '/app/bower_components/jquery/dist/jquery.min',
        'bootstrap-treeview': '/app/bower_components/bootstrap-treeview/dist/bootstrap-treeview.min',
        'angular': '/app/bower_components/angular/angular.min',
        'articleService': '/app/scripts/services/articleService',
        'articleListController': '/app/scripts/modules/article/article-list-controller'
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
        'bootstrap-treeview'
    ],
    function() {
        var tree = [
            {
                text: "Parent 1",
                nodes: [
                    {
                        text: "Child 1",
                        nodes: [
                            {
                                text: "Grandchild1"
                            },
                            {
                                text: "Grandchild2"
                            }
                        ]
                    },
                    {
                        text: "Child 2"
                    }
                ]
            },
            {
                text: "Parent 2"
            },
            {
                text: "Parent 3"
            },
            {
                text: "Parent 4"
            },
            {
                text: "Parent 5"
            }
        ];
        $('#tree').treeview({
            data: tree,         // data is not optional
            levels: 5
        });
        var angular = arguments[0],articleService = arguments[1],articleListController = arguments[2];
        var module = angular.module('articleListModule',[]);
        //注册service
        module.config(['$provide','$controllerProvider', function($provide,$controllerProvider) {
            $provide.factory('articleService', articleService);
            $controllerProvider.register('articleListController', articleListController);
        }]);
    }
);
