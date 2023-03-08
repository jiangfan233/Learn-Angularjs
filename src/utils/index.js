import Reader from "./Reader";
import FieldError from "./FieldError";

const UtilsModule = "utils"


export const Utils = angular.module(UtilsModule, [
    Reader,
    FieldError,
])
    

export default UtilsModule;