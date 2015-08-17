'use strict';
define(['app'], function(app) {
    var controller = function($scope, $http, $routeParams) {
        $http.get('/article/'+$routeParams.id)
            .success(function(data, status, headers, config) {
                console.log(data)
            })
            .error(function(data, status, headers, config) {
                alert(data);
            });
    };
    controller.inject = ['$scope', '$http', '$routeParams'];
    app.register.controller("articleController", controller);
});