angular.module('mdtPasswordStrength',[])
.controller('mdtPasswordStrengthCtrl', function($scope) {


    $scope.ngModel.$setValidity('strength',false);

})
.directive('mdtPasswordStrength', function() {
    return {
        restrict: 'A',
        require: '?ngModel',
        scope:{
            ngModel:'=',
            mdtFeedback : '=',
            mdtStrengthLevels : '='
        },
        link: function(scope, elem, attrs, ngModel) {


            /** Assign strength levels */
            var classifier = scope.mdtStrengthLevels ? scope.mdtStrengthLevels : {
                weak    : [6,1,1,0,0],//length, uppercase, lowercase, digits, special chars
                medium  : [8,2,2,1,0],
                strong  : [9,2,2,2,1]
            };

           /** Matching rules for eery block */
            var matchers = [
                    /./g,                               // length
                    /[A-Z]/g,                           // upper case
                    /[a-z]/g,                           // lower case
                    /[0-9]/g,                           // digits
                    /[_+-.,!@#$%^&*();\/|<>"']/g];     // special chars



            scope.$watch('ngModel', function(newValue){

                if(newValue) {
                    scope.mdtFeedback = validate(newValue);
                    ngModel.$setValidity('strength',  scope.mdtFeedback);
                }

            });



            /** Test accross all pedeified security levels and return the highes reached */
            function validate(val) {

               // var val = ngModel.$viewValue,
                    var reachedLevel = false;

                if(!val) return;
               // console.log('%c '+val+' ','background: #222; color: #bada55');

                for(level in classifier) {

                    for (index in classifier[level]) {

                        if (!microTest(val, classifier[level][index], index)) {
                            return reachedLevel;
                        }else{
                            reachedLevel = level;
                        }

                    }

                }

                return reachedLevel;

            }

            /** Test is the test meets all requirements within given security level */
            function microTest(val,strength,index){

                if(!strength || strength<1) return true; // Ignote zero strengths

                var reg = matchers[index],
                    matches = val.match(reg);

                return (!matches || matches.length < strength) ? false : true;

            }



        }
    };
})

;