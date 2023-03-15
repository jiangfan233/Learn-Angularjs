import angular from "angular";

const CheckIndeterminate = "checkIndeterminate"; 

angular.module(CheckIndeterminate, [])
    .directive(CheckIndeterminate, [ function() {
        return {
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {
                scope.$watch(() => scope.$eval(attrs.checkIndeterminate), function(value) {
                    // 如果在指令中使用了element参数，并且在回调函数中访问了element参数，
                    // 此时$element参数指向的是指令所在的DOM元素的父级元素，而不是当前被点击的DOM元素。

                    // 这是因为在事件触发时，AngularJS会先执行回调函数，
                    // 然后再更新scope中的数据模型，并重新编译DOM。因此，在回调函数中访问element参数时，
                    // DOM元素还没有被更新，element参数指向的是指令所在的DOM元素的父级元素。
                    console.log("value", ngModel, element)
                    angular.forEach(element, function(dom) {
                        dom.indeterminate = value;
                    })
                })
            }
        }
    } ])

export default CheckIndeterminate;