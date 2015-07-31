var app = angular.module('addArticleApp', []);
app.controller('addArticleFormController', function($scope, $http) {

    $scope.submit = function() {
        if($scope.userForm.$valid) {
            alert("submit successfull.");
            $http.post('', $scope.fields)
                .success(function(data, status, headers, config) {
                    alert('save success.')
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
        require: '?ngModel', // get a hold of NgModelController
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