define(function (require) {
    'use strict';
    
    var ng = require('angular'),
        FlightLegFactory = function ($resource) {
            var flightLeg = $resource('./api/aircraft/:noseNumber/routing', {
                noseNumber: '@id'
            }, {
                'query': { method: 'GET', isArray: true }
            });
            
            return flightLeg;
        };
    
    return ['$resource', FlightLegFactory];
});