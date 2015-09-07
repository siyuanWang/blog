'use strict';

requirejs.config({
    baseUrl: '/',
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'bootstrap-js':'bower_components/bootstrap/dist/js/bootstrap.min',
        'library': 'bower_components',
        'changyan': 'http://changyan.sohu.com/upload/changyan.js',
        'articleService': 'scripts/services/articleService'
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'angular-route': {
            deps:['angular'],
            exports:'angular-route'
        }
    }
});