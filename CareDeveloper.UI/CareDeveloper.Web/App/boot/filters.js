//application custom filters

angular.module('appFilters', []).filter('ajaxResponseStatus', function () {
    return function (status) {
        return (status == 0);
    };
});
