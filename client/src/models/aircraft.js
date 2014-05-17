define(function (require) {
    'use strict';
    
    var ng = require('angular'),
        AircraftFactory = function ($resource) {
            var aircraft = $resource('./api/aircraft/:noseNumber', { noseNumber: '@id' });
            
            return aircraft;
        };
    
    return ['$resource', AircraftFactory];
});