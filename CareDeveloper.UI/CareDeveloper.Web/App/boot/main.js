require.config({
    baseUrl: "App",
    paths: {
        'angular': '../Scripts/angular.min',
        'angular-route': '../Scripts/AngularUI/ui-router.min',
        'angularAMD': '../Scripts/angularAMD/angularAMD.min',
        'app': 'boot/app',
        'loadash': ''
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'] },
    deps: ['app']
});