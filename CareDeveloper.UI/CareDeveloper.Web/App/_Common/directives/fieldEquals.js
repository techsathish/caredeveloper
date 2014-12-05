'use strict';

define(['angularAMD'], function (angularAMD) {

    angularAMD.directive('appFieldEquals', function () {
        return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel', // get a hold of NgModelController
            link: function (scope, elem, attrs, ngModel) {
               
                if(!ngModel) return; // do nothing if no ng-model

                // watch own value and re-validate on change
                scope.$watch(attrs.ngModel, function() {
                    validate();
                });

                // observe the other value and re-validate on change
                attrs.$observe('app-field-equals', function (val) {
                    validate();
                    
                });

                var validate = function () {
                    // values
                    var val1 = ngModel.$viewValue;
                    var val2 = attrs.appFieldEquals;

                    // set validity
                    ngModel.$setValidity('appFieldEquals', !val1 || !val2 || val1 === val2);
                };
            }
        }
        //end of directive function
    });

    //end of define function
});