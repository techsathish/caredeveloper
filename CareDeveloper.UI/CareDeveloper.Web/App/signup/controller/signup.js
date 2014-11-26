define(['app', 'singupCreateUserService'], function (app) {
    app.controller('caredeveloper.signup', ['$scope', 'signupService', '$filter', function ($scope, signupService, $filter) {

        $scope.gender = "male";
        $scope.formSubmitted = false;

        //temp 
        $scope.password = 'photon@123';
        $scope.retypePassword = 'photon@123';

        $scope.btnSignupClick = function () {
            debugger;
            signupService.createUser({
                FullName: $scope.fullName,
                EmailId: $scope.email,
                Password: $scope.password,
                RetypePassword: $scope.retypePassword,
                gender: $scope.gender,
                SignUpFrom: 'careDeveloper'
            }).then(function (response) {
                $scope.formSubmitted = true;
                
                //success
                if ($filter('ajaxResponseStatus')(response.Status)) {
                    $scope.isRegistrationSuccess = true;
                    $scope.message = "Successfully registered. please click here to <a ui-sref='signin'>sign in</a>";
                }
                //failure
                else {
                    $scope.isRegistrationSuccess = false;
                    $scope.message = "Registration failed. " + response.Message;
                }
            });
        };
    }]);
});