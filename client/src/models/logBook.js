define(function (require) {
    'use strict';
    
    var ng = require('angular'),
        LogBookFactory = function ($resource) {
            var logBook = $resource('./api/aircraft/:noseNumber/logBook', { noseNumber: '@id' });
            
            return logBook;
        };
    
    return ['$resource', LogBookFactory];
});