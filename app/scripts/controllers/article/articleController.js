'use strict';
define(['app'], function(app) {
    var articleController = function($scope, $timeout, articleService) {
        articleService.getArticles().then(function(data) {
            $scope.articles = data.data;
        });
    };

    articleController.inject = ['$scope', '$timeout','articleService'];
    app.register.controller('articleController', articleController);
});
