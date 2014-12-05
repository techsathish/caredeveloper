define(['app', 'singupCreateUserService'], function (app) {
    app.controller('caredeveloper.signup', ['$scope', 'signupService', '$filter', function ($scope, signupService, $filter) {

        $scope.gender = "male";
        $scope.formSubmitted = false;
        $scope.formSubmittedToServer = false;

        //temp 
        //$scope.password = 'photon@123';
        //$scope.retypePassword = 'photon@123';
        //temp ends

        $scope.btnSignupClick = function () {
            $scope.formSubmitted = true;
            if ($scope.userRegistration.$valid) {
                debugger
                //call the service to create a user
                signupService.createUser({
                    FullName: $scope.fullName,
                    EmailId: $scope.email,
                    Password: $scope.password,
                    RetypePassword: $scope.retypePassword,
                    gender: $scope.gender,
                    SignUpFrom: 'careDeveloper'
                }).then(function (response) {
                    $scope.formSubmittedToServer = true;

                    //success
                    if ($filter('ajaxResponseStatus')(response.Status)) {
                        $scope.isRegistrationSuccess = true;
                    }
                    //failure
                    else {
                        $scope.isRegistrationSuccess = false;
                        $scope.message = "Registration failed. " + response.Message;
                    }
                });
            }
        };

        //end of the controller function
    }]);

    //end of define function
});