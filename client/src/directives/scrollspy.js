define(function (require) {
    'use strict';
    
    var ScrollSpy = function ($window) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
            }
        }
    };
    
    return ['$window', ScrollSpy];
});