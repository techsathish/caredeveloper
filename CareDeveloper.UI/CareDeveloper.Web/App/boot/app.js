define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("caredeveloper", ['ui-router']);

    app.config(
            ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/page-not-found");

                $stateProvider
                .state('home', angularAMD.route({
                    url: '/',
                    controller: 'caredeveloper.home',
                    controllerUrl: '/App/home/controller/home.js',
                    templateUrl: '/App/home/view/home.html',
                }))
                ;
            }]
        );

    return angularAMD.bootstrap(app);
});