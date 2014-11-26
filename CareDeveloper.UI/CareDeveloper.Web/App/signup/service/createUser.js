define(['app'], function (app) {
    app.factory('signupService', ['Restangular', function (Restangular) {
        return {
            createUser: function (userObj) {
                return Restangular.all('auth').customPOST(userObj, 'register');
            }
        };
    }]);
});