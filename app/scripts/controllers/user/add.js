var app = angular.module('addArticleApp', []);
app.controller('addArticleFormController', function($scope, $http) {

    $scope.submit = function() {
        if($scope.userForm.$valid) {
            $http.post('/user', $scope.fields)
                .success(function(data, status, headers, config) {
                    alert(data);
                })
                .error(function(data, status, headers, config) {
                    alert(data);
                });
        } else {

        }
    };

    $scope.master = {};
    $scope.validateBeforSubmit = function(fields) {
        $scope.master = angular.copy(fields);
    };
    $scope.reset = function(form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
        $scope.fields = angular.copy($scope.master);
    };

    $scope.reset();
});

app.directive('equals', function() {
    return {
        restrict: 'A', // only activate on element attribute
        require: 'ngModel', // get a hold of NgModelController
        link: function(scope, elem, attrs, ngModel) {
            if(!ngModel) return; // do nothing if no ng-model
            // watch own value and re-validate on change
            scope.$watch(attrs.ngModel, function() {
                validate();
            });

            // observe the other value and re-validate on change
            attrs.$observe('equals', function (val) {
                validate();
            });

            var validate = function() {
                // values
                var val1 = ngModel.$viewValue;
                var val2 = attrs.equals;

                // set validity
                ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
            };
        }
    }
});

app.directive('password', function() {
    var regExp = /^[0-9a-zA-Z]{6,16}$/;
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModel) {
            ngModel.$validators.password = function(modelValue, viewValue) {
                if (ngModel.$isEmpty(modelValue))
                    return true;

                if (regExp.test(viewValue))
                    return true;

                return false;
            };
        }
    }
});

app.directive('checkUserName', ['$http', function($http) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.bind('blur', function(e) {
                var username = e.target.value;
                $http.get('/user/checkusername', {params: {username: username}})
                    .success(function(data, status, headers, config) {
                        console.log(data)
                        if(data.username == username) {
                            console.log('username exist!')
                        } else {
                            console.log('username can use.')
                        }
                    })
                    .error(function(data, status, headers, config) {
                        console.log(data);
                    });
            });
        }
    }
}]);