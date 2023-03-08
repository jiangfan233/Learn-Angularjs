import { Errors } from "@/constants/index";

const Filters = "filters";

angular.module(Filters, [])
    .filter("error", [Errors, function(Errors) {
        return function(name) {
            return Errors[name] || name;
        }
    }])

export default Filters;