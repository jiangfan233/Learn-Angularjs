
import angular from "angular";
import { fieldErrorMsg } from "@/filters/index";

const FieldError = "fieldError";

angular.module(FieldError, [])
    .directive(FieldError, ["$compile", function($compile) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attr, ngModel) {
                // true: 独立作用域，不会从父作用域自动继承属性
                const subScope = scope.$new(true);

                // 执行 attr.fieldError 表达式并获取结果, 轻易不要用
                subScope.customMsg = scope.$eval(attr.fieldError);

                subScope.hasErrors = function() {
                    return ngModel.$invalid && ngModel.$dirty;
                }

                subScope.errors = function() {
                    return ngModel.$error;
                }
               
                // live Dom
                const liveDom = `<ul ng-if='hasErrors()'><li ng-repeat='(name, wrong) in errors()' ng-if='wrong'>{{name | ${fieldErrorMsg}:customMsg }}</li></ul>`;
                const hint = $compile(liveDom)(subScope);
                element.after(hint);
            }
        }
    }])


export default FieldError;