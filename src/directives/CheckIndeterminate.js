import angular from "angular";

const CheckIndeterminate = "checkIndeterminate"; 

angular.module(CheckIndeterminate, [])
    .directive(CheckIndeterminate, [ function() {
        return {
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {
                // scope.$watch(() => scope.$eval(attrs.checkIndeterminate), function(value) {
                //     angular.forEach(element, function(dom) {
                //         dom.indeterminate = value;
                //     })
                // })

                scope.$watch(() => ngModel.$viewValue, function(value) {
                    angular.forEach(element, function(dom) {
                        dom.indeterminate = scope.$eval(attrs.checkIndeterminate);
                    })
                })
            }
        }
    } ])

export default CheckIndeterminate;