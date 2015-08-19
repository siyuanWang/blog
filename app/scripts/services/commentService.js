'use strict';
define(['app'], function(app) {
    app.factory('commentService', ['$scope', '$http', '$q', function($scope, $http, $q) {

        var add = function(comment) {
            var defer = $q.defer();
            $http.post('/comment', comment)
                .success(function(data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function(response, status, headers, config) {
                    defer.reject(response);
                });

            return defer.promise;
        };

        var getComments = function() {
            var defer = $q.defer();
            $http.get('/comment')
                .success(function(data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function(response, status, headers, config) {
                    defer.reject(response);
                });

            return defer.promise;
        };

        var getCommentsByArticleId = function(articelId) {
            var defer = $q.defer();
            $http.get('/comment/'+articleId)
                .success(function(data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function(response, status, headers, config) {
                    defer.reject(response);
                });

            return defer.promise;
        };

        return {
            add: add,
            getComments: getComments,
            getCommentsByArticleId: getCommentsByArticleId
        }
    }]);
});
