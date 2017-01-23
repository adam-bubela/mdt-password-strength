angular.module('mdtPasswordStrength',[])
.controller('MainCtrl', function($scope) {
    $scope.name = 'World';
})
.directive('mdtPasswordStrength', function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, elem, attrs, ngModel) {

            var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
            scope.passwordErrorHint = 'At least 1 upper case, 8 characters and 1 digit';

            // do nothing if no ng-model
            if (!ngModel) {
                return;
            }

            // watch own value and re-validate on change

            scope.$watch(attrs.ngModel, function() {
                validate(scope);
            });

            var validate = function($scope) {


                var value = ngModel.$viewValue;


                if(strongRegex.test(value)) {
                    console.log('green');
                    ngModel.$setValidity('strength',true);
                    //$scope.passwordStrength["background-color"] = "green";
                } else if(mediumRegex.test(value)) {
                    console.log('orange');
                    ngModel.$setValidity('strength',true);
                    //$scope.passwordStrength["background-color"] = "orange";
                } else {
                    console.log('red');
                    ngModel.$setValidity('strength',false);
                    //$scope.passwordStrength["background-color"] = "red";
                }
            };
        }
    };
})

;