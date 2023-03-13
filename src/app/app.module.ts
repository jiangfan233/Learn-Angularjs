import angular from "angular";
import ngRoute from "angular-route";
import ngResource from "angular-resource"
import UtilsModule from "@/factories/index";
import Constants from "@/constants/index";
import Filters from "@/filters/index";
import Directives from "@/directives/index";
import Services from "@/services/index";

const AppModule =  "com.ngnice.app";

const App = angular
    .module(AppModule, [
        ngRoute,
        ngResource,
        UtilsModule,
        Constants,
        Services,
        Filters,
        Directives,
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