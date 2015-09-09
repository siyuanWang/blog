'use strict';
define([], function() {
    var controller = ['$scope', 'articleService','$window',
        function($scope, articleService, $window) {

            $scope.articleId = $window._articleData;
            articleService.getArticleById($scope.articleId).then(function(data) {
                $scope.article = data.data;
                if(typeof $window.changyan.api.config != 'function') {
                    console.log('资源加载失败')
                    require(['changyan'], function() {
                        console.log($window.changyan.api.config)
                        $window.changyan.api.config({
                            appid: 'cyrXKIcmH',
                            conf: 'prod_ff4be030258e259cd974b71f4546c833'
                        });
                    })

                } else {
                    $window.changyan.api.config({
                        appid: 'cyrXKIcmH',
                        conf: 'prod_ff4be030258e259cd974b71f4546c833'
                    });
                }
            });
        }];
    return controller;
});
