import angular from "angular";


const CurrentTime = "currentTime";

angular
    .module(CurrentTime, [])
    .controller(CurrentTime, [
        "$scope",
        function($scope) {
            $scope.formatView = "yyyy-MM-dd HH:mm:ss a";
        }
    ])
    .directive(CurrentTime, [
        "$interval",
        "dateFilter",
        function($interval, dateFilter) {
            return {
                
                link: function(scope, element, attrs){
                    let format :string;
                    let timerId :number | undefined;

                    function updateTimeView() {
                        element.text(dateFilter(new Date(), format))
                    }

                    scope.$watch<string>(attrs.currentTime, function(value) {
                        format = value;
                        updateTimeView();
                    })

                    timerId = $interval(() => {
                        updateTimeView();
                    }, 1000)

                    element.on("destory", () => $interval.cancel(timerId));
                }
            }
        }
    ])

export default CurrentTime;