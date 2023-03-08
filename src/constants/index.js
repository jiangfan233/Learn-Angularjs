const Constants = "constants";

export const Errors = "Errors";

angular.module(Constants, [])
    .constant(Errors, {
        email: "不是有效格式的邮件地址",
        required: "此项不能为空",
    })

export default Constants;