import angular from "angular";
import ngRoute from "angular-route";
import ngResource from "angular-resource"
import UtilsModule from "@/utils/index";
import Constants from "@/constants/index";
import Filters from "@/filters/index";

const AppModule =  "com.ngnice.app";

const App = angular
    .module(AppModule, [
        ngRoute,
        ngResource,
        UtilsModule,
        Constants,
        Filters,
    ])
    .controller(AppModule, [
        "$scope",
        function($scope: any) {
            $scope.name = "app";
        }
    ])
    .directive(AppModule, function() {
        return {
            restrict: "E",
            template: require("./app.template.html").default
        }
    })


export default App;