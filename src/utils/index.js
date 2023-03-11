import Reader from "./Reader";
import FieldError from "./FieldError";
import CheckNumber from "./CheckNumber";
import SameAs from "./SameAs";

const UtilsModule = "utils"


export const Utils = angular.module(UtilsModule, [
    Reader,
    FieldError,
    CheckNumber,
    SameAs,
])
    

export default UtilsModule;