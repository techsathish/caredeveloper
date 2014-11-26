require.config({
    baseUrl: "App",
    paths: {
        'angular': '../Scripts/angular.min',
        'angularRoute': '../Scripts/AngularUI/ui-router.min',
        'angularAMD': '../Scripts/angularAMD/angularAMD.min',
        'angularAnimate': '../Scripts/angular-animate.min',
        'app': 'boot/app',
        'lodash': '../Scripts/lodash.min',
        'restangularjs': '../Scripts/restangular.min',
        'toaster': '../Scripts/toaster',
        'angularSanitize': '../Scripts/angular-sanitize.min',
        'angularBootstrap': '../Scripts/AngularBootstrap/ui-bootstrap.min',
        'appFilter': 'boot/filters',
        'singupCreateUserService' : 'signup/service/createUser'
    },
    shim: {
        'angular': ['lodash'], 'angularAMD': ['angular'], 'angularRoute': ['angular'], 'restangularjs': ['angular'],
        'toaster': ['angular'], 'angularSanitize': ['angular'], 'angularBootstrap': ['angular'], 'angularAnimate': ['angular'],
        'appFilter' : ['angular']
    },
    deps: ['app']
});