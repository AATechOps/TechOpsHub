define(function (require) {
    'use strict';
    
    var ng = require('angular'),
        LogBookFactory = function ($resource) {
            var LogBook = $resource('./api/aircraft/:noseNumber/logBook', { noseNumber: '@id' });
            
            return LogBook;
        };
    
    return ['$resource', LogBookFactory];
});