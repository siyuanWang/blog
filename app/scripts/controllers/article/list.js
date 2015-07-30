var articleModule = angular.module('article',['ngRoute']);
articleModule.controller("ArticleController", function($scope, $http) {
    $http.get('/article').
        success(function(data, status, headers, config) {
            $scope.articles = data;
            console.log(data)
            angular.bootstrap();

        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
}).filter(
    'to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    }]
);
