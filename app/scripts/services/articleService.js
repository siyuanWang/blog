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

        var getArticles = function(callback) {
            var deferred = $q.defer();
            deferred.notify('即将问候');
            $http.get('/article')
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                    callback(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data);
                    alert(data);
                });

            return deferred.promise;
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