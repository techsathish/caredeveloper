define(['app'], function (app) {
    app.factory('signInUserService', ['Restangular', function (Restangular) {
        var user = Restangular.all('auth');

        return {
            createUser: function (userObj) {
                return user.post(userObj);
            }
        };
    }]);
});