define(function (require) {
    'use strict';
    
    var ng = require('angular'),
        LogBookFactory = function ($resource) {
            var logBook = $resource('./api/aircraft/:noseNumber/logBook', {
                noseNumber: '@id'
            }, {
                'query': { method: 'GET', isArray: true }
            });
            
            return logBook;
        };
    
    return ['$resource', LogBookFactory];
});