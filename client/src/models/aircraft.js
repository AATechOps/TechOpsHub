define(function (require) {
    'use strict';
    
    var ng = require('angular'),
        AircraftFactory = function ($resource) {
            var Aircraft = $resource('./api/aircraft/:noseNumber', { noseNumber: '@id' });
            
            return Aircraft;
        };
    
    return ['$resource', AircraftFactory];
});