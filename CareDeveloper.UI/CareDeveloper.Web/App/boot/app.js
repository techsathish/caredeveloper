﻿define(['angularAMD', 'angularRoute', 'restangularjs', 'toaster', 'angularSanitize', 'angularBootstrap', 'angularAnimate', 'appFilter', 'fieldEqualsDirective'], function (angularAMD) {
    var app = angular.module("caredeveloper", ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'toaster', 'restangular', 'appFilters']);

    //configure url structure
    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }]);

    //configure router
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/page-not-found");

                $stateProvider
                .state('home', angularAMD.route({
                    url: '/',
                    controller: 'caredeveloper.home',
                    controllerUrl: '/App/home/controller/home.js',
                    templateUrl: '/App/home/view/home.html',
                }))
                .state('signup', angularAMD.route({
                    url: '/signup',
                    controller: 'caredeveloper.signup',
                    controllerUrl: '/App/signup/controller/signup.js',
                    templateUrl: '/App/signup/view/signup.html'
                }))
                .state('signin', angularAMD.route({
                    url: '/signin',
                    controller: 'caredeveloper.signin',
                    controllerUrl: '/App/signin/controller/singinLanding.js',
                    templateUrl: '/App/signin/view/singinLanding.html'
                }));
            }]);


    //configure restangular starts
    app.config(['RestangularProvider', function (RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:3000/api');
    }]);


    //configure restangular ends
    return angularAMD.bootstrap(app);
});