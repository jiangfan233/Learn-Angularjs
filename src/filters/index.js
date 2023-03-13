import { Errors } from "@/constants/index";
import { Tree } from "@/services/index";

const Filters = "filters";

export const fieldErrorMsg = "fieldErrorMsg";
export const Paginate = "paginate";
export const ArrayToTree = "arrayToTree";

angular.module(Filters, [])
    .filter(fieldErrorMsg, [Errors, function (Errors) {
        return function (name, customMsg = {}) {
            const error = angular.extend({}, Errors, customMsg);
            return error[name] || name;
        }
    }])
    .filter(Paginate, [function () {
        return function (items, pageNumber, pageSize) {
            if (pageNumber <= 0 || pageSize <= 0) {
                return [];
            }
            if (items && !items.length) return [];
            return items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
        }
    }])
    .filter(ArrayToTree, [Tree, function (tree) {
        return function (items, childrenName="items") {
            return tree.enhance(items, childrenName);
        }
    }])

export default Filters;