

const GenCaptcha = "genCaptcha";


const URL = "https://raw.githubusercontent.com/twbs/icons/main/icons/1-square-fill.svg";

angular.module(GenCaptcha, [])
    .directive(GenCaptcha, [function() {
        return {
            link: function(scope, element, attr) {
                function changeSrc() {
                    element.attr("src", URL + "?random=" + new Date().getTime());
                }

                changeSrc();

                element.on("click", changeSrc);
            }
        }
    }])

export default GenCaptcha;