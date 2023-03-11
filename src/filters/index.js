import { Errors } from "@/constants/index";

const Filters = "filters";

export const fieldErrorMsg = "fieldErrorMsg";


angular.module(Filters, [])
    .filter(fieldErrorMsg, [Errors, function(Errors) {
        return function(name, customMsg={}) {
            const error = angular.extend({}, Errors, customMsg);
            return error[name] || name;
        }
    }])

export default Filters;