import angular from "angular";
import DragModule from "@/dragModule/drag.module"
import CurrentTime from "@/currentTime/currentTime"
import Vanilla from "../vanillas/simple-mvc";

const App =  "app";

angular
    .module(App, [
        DragModule,
        CurrentTime,
    ])
    .controller(App, [
        "$scope",
        function($scope) {
            $scope.name = "app";
        }
    ])
    .directive(App, function() {
        return {
            restrict: "E",
            template: require("./app.template.html").default
        }
    })

console.log(Vanilla);

export default App;