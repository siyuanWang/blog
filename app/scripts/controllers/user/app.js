var User = angular.module("user", ["ngRoute"]);
User.controller("UserController", function($scope, $http) {
    $http.get('/article').
        success(function(data, status, headers, config) {
            $scope.users = data;
            console.log(data)
            angular.bootstrap();

        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
});
User.controller("test", function($scope) {
    $scope.customer = {
        name: "lily",
        address: "china"
    }
})
User.directive("myCustomer", function() {
    return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
});

User.directive("changeTable", function() {
    function link(scope, element, attrs) {
        console.log(element);
        $(element).dataTable({
            "scrollX": true
        });
    }

    return {
        link: link
    }
});

User.directive("myCustomer1", function() {
    return {
        templateUrl: 'scripts/controllers/user/my-custom.html'
    };
});

User.directive("myCustomer2", function() {
    return {
        templateUrl: function(element, attr) {
            return 'scripts/controllers/user/custom-'+attr.type+'.html';
        }
    };
});
/**
 * The restrict option is typically set to:

 'A' - only matches attribute name
 'E' - only matches element name
 'C' - only matches class name
 */
User.directive('myCustomer3', function() {
    return {
        restrict: 'E',
        templateUrl: 'scripts/controllers/user/my-custom.html'
    };
});
