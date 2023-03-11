
import angular from "angular";


const SameAs = "sameAs";

angular.module(SameAs, [])
    .directive(SameAs, [function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attr, ngModel) {

                function isSame() {
                  const prev = scope.$eval(attr.sameAs);
                  return prev === ngModel.$viewValue;
                }

                scope.$watch(() => ngModel.$viewValue, function(value) {
                    ngModel.$setValidity("same", isSame());
                })
            }
        }
    }])


export default SameAs;