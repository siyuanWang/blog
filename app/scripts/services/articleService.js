'use strict';
define(function() {
   var service = ['$http','$q', function($http, $q) {
        var article = {
            title: "",
            introduction: "",
            labels: "",
            content: ""
        };

        var setArticle = function(obj) {
            article = obj;
        };
        //获得文章列表
        var getArticles = function(limit, skip) {
            var defer = $q.defer();
            if(!limit && !skip) throw new Error('query articles no limit or skip param.');
            var pageObject = {skip: skip, limit: limit};
            console.log(pageObject)
            $http.get('/article',{params: pageObject})
                .success(function(data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function(response, status, headers, config) {
                    defer.reject(response);
                });
            return defer.promise;
        };
        //根据ArticleId获得文章的详细资料
        var getArticleById = function(id) {
            var defer = $q.defer();
            $http.get('/article/'+id)
                .success(function(data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function(response, status, headers, config) {
                    defer.reject(response);
                });
            return defer.promise;
        };

        return {
            setArticle: setArticle,
            getArticles: getArticles,
            getArticleById: getArticleById
        }
    }];

    return service;
});