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
            mdtFeedback : '=?',
            mdtStrengthLevels : '='
        },
        link: function(scope, elem, attrs, ngModel) {


            /** Assign strength levels */
            var classifier = scope.mdtStrengthLevels ? scope.mdtStrengthLevels : {
                weak    : [6,1,1,0,0],//length, uppercase, lowercase, digits, special chars
                medium  : [8,2,2,1,0],
                strong  : [9,2,2,2,1]
            };


            scope.$watch('ngModel', function(newValue){

                if(newValue) {
                    scope.mdtFeedback = validate(newValue);
                    ngModel.$setValidity('strength',  scope.mdtFeedback);
                }

            });


            /** Test accross all pedeified security levels and return the highes reached */
            function validate(val) {

                if(!val) return;

                var reachedLevel = false; //default value if none of lavels is riched

               // console.log('%c '+val+' ','background: #222; color: #bada55');

                for(level in classifier) {

                    for (index in classifier[level])

                        if (!microTest(val, classifier[level][index], index)) return reachedLevel;

                    reachedLevel = level;
                }

                return reachedLevel;

            }

            /** The test meets all requirements within given security level */
            function microTest(val,strength,index){

                if(!strength || strength<1) return true; // Ignote zero strengths

                /** Matching rules for eery block */
                var matchers = [
                    /./g,                              // length
                    /[A-Z]/g,                          // upper case
                    /[a-z]/g,                          // lower case
                    /[0-9]/g,                          // digits
                    /[_+-.,!@#$%^&*();\/|<>"']/g];     // special chars

                var reg = matchers[index],
                    match = val.match(reg);

                return (match && match.length >= strength);

            }


        }
    };
})

;