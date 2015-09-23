'use strict';
define(function() {
   var service = ['$http','$q', function($http, $q) {

        //获得文章列表
        var getLabels = function(pagination) {
            var defer = $q.defer();
            $http.get('/label',{params: pagination})
                .success(function(data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function(response, status, headers, config) {
                    defer.reject(response);
                });
            return defer.promise;
        };

        return {
            getLabels: getLabels
        }
    }];

    return service;
});