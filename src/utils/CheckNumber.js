
import angular from "angular";


const CheckNumber = "checkNumber";

angular.module(CheckNumber, [])
    .directive(CheckNumber, ["$compile", function ($compile) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attr, ngModel) {
                // true: 独立作用域，不会从父作用域自动继承属性
                const subScope = scope.$new(true);

                subScope.hasErrors = function() {
                    return ngModel.$dirty && ngModel.$invalid;
                }

                subScope.errors = function() {
                    return ngModel.$error;
                }

                ngModel.$validators.isInteger = function (modelValue, viewValue) {
                    // 如果未输入，应该通过验证
                    if(!ngModel.$dirty) return true;
                    // if (modelValue === undefined) {
                    //     return true;
                    // }

                    if (/^\d+$/.test(viewValue)) {
                        return true;
                    }

                    return false;
                }

                // live Dom
                const hint = $compile("<ul ng-if='hasErrors()'><li ng-repeat='(name, wrong) in errors()' ng-if='wrong'>{{name }}</li></ul>")(subScope);
                element.after(hint);

            }
        }
    }])


export default CheckNumber;