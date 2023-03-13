import CheckNumber from "./CheckNumber";
import FieldError from "./FieldError";
import SameAs from "./SameAs";
import GenCaptcha from "./GenCaptcha";
import CheckIndeterminate from "./CheckIndeterminate";

const Directives = "directives";

angular.module(Directives, [
    CheckNumber,
    FieldError,
    SameAs,
    GenCaptcha,
    CheckIndeterminate,
])


export default Directives;