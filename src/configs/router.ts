import App from "@/app/app.module";
import { route } from "angular";
import { ReaderCreateCtrl } from "@/controllers/reader/create";
import { ThreadListCtrl } from "@/controllers/thread/ThreadListCtrl";


App
    .config(['$routeProvider',
        function config($routeProvider: route.IRouteProvider) {
            
            $routeProvider.
                when('/', {
                    template: require("/src/controllers/home/index.html").default,
                    controller: "HomeIndexCtrl",
                    controllerAs: "vm"
                }).
                when('/home', {
                    template: require("@/controllers/home/index.html").default,
                    controller: "HomeIndexCtrl",
                    controllerAs: "vm"
                }).
                when('/reader', {
                    template: "<div ug-view></div>",
                    redirectTo: "/notFound"
                }).
                when('/reader/create', {
                    template: require("@/controllers/reader/create.html").default,
                    controller: ReaderCreateCtrl,
                    // controllerAs: "vm"
                }).
                when('/thread', {
                    template: "<div ui-view></div>",
                }).
                when('/thread/list', {
                    template: require("@/controllers/thread/ThreadListCtrl.html").default,
                    controller: ThreadListCtrl,
                    controllerAs: "vm"
                }).
                when('/notFound', {
                    template: require("@/controllers/home/notFound.html").default,
                    controller: "HomeNotFoundCtrl",
                    controllerAs: "vm",
                }).
                otherwise('/notFound');
        }
    ]);