'use strict';
define(['app'], function(app) {
    app.factory('articleService', ['$http','$q', function($http, $q) {
        var article = {
            title: "",
            introduction: "",
            labels: "",
            content: ""
        };

        var setArticle = function(obj) {
            article = obj;
        };

        var getArticles = function() {
            var defer = $q.defer();
            $http.get('/article')
                .success(function(data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function(response, status, headers, config) {
                    defer.reject(response);
                });
            return defer.promise;
        };

        var getArticleById = function(callback) {
            $http.get('/article/'+$routeParams.id)
                .success(function(data, status, headers, config) {
                    console.log(data)
                    callback(data);
                })
                .error(function(data, status, headers, config) {
                    alert(data);
                });
        };

        return {
            setArticle: setArticle,
            getArticles: getArticles,
            getArticleById: getArticleById
        }
    }]);
});