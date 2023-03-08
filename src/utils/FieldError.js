
import angular from "angular";


const FieldError = "fieldError";

angular.module(FieldError, [])
    .directive(FieldError, ["$compile", function($compile) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attr, ngModel) {
                // true: 独立作用域，不会从父作用域自动继承属性
                const subScope = scope.$new(true);

                subScope.hasErrors = function() {
                    return ngModel.$invalid && ngModel.$dirty;
                }

                subScope.errors = function() {
                    return ngModel.$error;
                }

                // live Dom
                const hint = $compile("<ul ng-if='hasErrors()'><li ng-repeat='(name, wrong) in errors()' ng-if='wrong'>{{name | error }}</li></ul>")(subScope);
                element.after(hint);
            }
        }
    }])


export default FieldError;