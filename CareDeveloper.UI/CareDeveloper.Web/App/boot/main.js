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
        //Application custom service references

        'singupCreateUserService': 'signup/service/createUser',
        'signInUserService': 'signin/service/signin',

        //common directives
        'fieldEqualsDirective': '_Common/directives/fieldEquals'
    },
    shim: {
        'angular': ['lodash'], 'angularAMD': ['angular'], 'angularRoute': ['angular'], 'restangularjs': ['angular'],
        'toaster': ['angular'], 'angularSanitize': ['angular'], 'angularBootstrap': ['angular'], 'angularAnimate': ['angular'],
        'appFilter': ['angular'], 'fieldEqualsDirective': ['angular', 'angularAMD']
    },
    deps: ['app']
});