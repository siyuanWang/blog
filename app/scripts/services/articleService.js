'use strict';
define(['app'], function(app) {
    app.factory('articleService', function() {
        var article = {
            title: "",
            introduction: "",
            labels: "",
            content: ""
        };

        var setArticle = function(obj) {
            article = obj;
        };

        var getArticle = function() {
            return article;
        };

        return {
            setArticle: setArticle,
            getArticle: getArticle
        }
    })
});