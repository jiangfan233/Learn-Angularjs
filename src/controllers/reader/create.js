import App from "@/app/app.module";


export const ReaderCreateCtrl = "ReaderCreateCtrl";


App.controller(
    ReaderCreateCtrl,
    ["$scope", "Reader", function ReaderCreateCtrl($scope, Reader) {
        $scope.retypedPassword = "";
        $scope.vm = {
            form: {},
        
            submit: function(form) {
                // Reader.save({...form, id: 1})
                // Reader.get({ id: 1 }, ).$promise.then(function(res) {
                //     console.log(res)
                // })

                console.log($scope)
            }
        };

    }]
)