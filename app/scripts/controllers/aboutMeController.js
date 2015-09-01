'use strict';
define(['app'], function(app) {
    var aboutMeController = function($scope, $timeout, articleService) {

    };
    aboutMeController.inject = ['$scope', '$timeout','articleService'];
    app.register.controller('aboutMeController', aboutMeController);
});
