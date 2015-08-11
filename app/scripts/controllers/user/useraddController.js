define(['app'], function(app) {
    var injectParams = ['$scope', '$http'];
    var addUserController = function($scope, $http) {
        $scope.sexItems = [
            {name: '男', value: '0'},
            {name: '女', value: '1'}
        ];
        $scope.submit = function() {
            if($scope.userForm.$valid) {
                $scope.fields.sex = $scope.fields.sex.value;
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
        //$scope.clearInput = function(name) {
        //    $element[0].querySelector('#'+name).focus();
        //    $scope.fields[name] = '';
        //}
        $scope.reset();
    };
    addUserController.$inject = injectParams;
    app.register.controller('useraddController', addUserController);

    //app.directive('equals', function() {
    //    return {
    //        restrict: 'A',
    //        require: 'ngModel',
    //        link: function(scope, elem, attrs, ngModel) {
    //            if(!ngModel) return;
    //            scope.$watch(attrs.ngModel, function() {
    //                validate();
    //            });
    //            attrs.$observe('equals', function (val) {
    //                validate();
    //            });
    //
    //            var validate = function() {
    //                var val1 = ngModel.$viewValue;
    //                var val2 = attrs.equals;
    //
    //                ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
    //            };
    //        }
    //    }
    //});
    //
    //app.directive('password', function() {
    //    var regExp = /^[0-9a-zA-Z]{6,16}$/;
    //    return {
    //        restrict: 'A',
    //        require: 'ngModel',
    //        link: function(scope, elem, attrs, ngModel) {
    //            ngModel.$validators.password = function(modelValue, viewValue) {
    //                if (ngModel.$isEmpty(modelValue))
    //                    return true;
    //
    //                if (regExp.test(viewValue))
    //                    return true;
    //
    //                return false;
    //            };
    //        }
    //    }
    //});
    //
    //app.directive('checkUserName', ['$http', function($http) {
    //    return {
    //        restrict: 'A',
    //        require: 'ngModel',
    //        link: function(scope, elem, attrs, ngModel) {
    //            ngModel.$validators.checkUserName = function(modelValue, username) {
    //                if(ngModel.$isEmpty(modelValue))return true;
    //                $http.get('/user/checkusername', {params: {username: username}})
    //                    .success(function(data, status, headers, config, statusText) {
    //                        if(data && data.username == username) {
    //                            ngModel.$setValidity('checkUserName', false);
    //                        } else {
    //                            ngModel.$setValidity('checkUserName', true);
    //                        }
    //
    //                    })
    //                    .error(function(data, status, headers, config) {
    //                        ngModel.$setValidity('checkUserName', false);
    //                    });
    //                scope.fields.username = username;
    //            };
    //        }
    //    }
    //}]);
    //
    //app.directive('checkPhoneNumber', function() {
    //    var regExp = /^(86)?\d{11}$/;
    //    return {
    //        restrict: 'A',
    //        require: 'ngModel',
    //        link: function(scope, elem, attrs, ngModel) {
    //            ngModel.$validators.checkPhoneNumber = function(modelValue, viewValue) {
    //                if(ngModel.$isEmpty(modelValue))return true;
    //                if(regExp.test(viewValue)) {
    //                    return true;
    //                } else {
    //                    return false;
    //                }
    //            };
    //        }
    //    }
    //});
});