define(['app'], function (app) {
    app.factory('createUserService', ['Restangular', function (Restangular) {
        var user = Restangular.all('auth');

        return {
            createUser: function (userObj) {
                return user.post(userObj);
            }
        };
    }]);
});