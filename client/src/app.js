define(function (require) {
    'use strict';
    
    // Require dependecies
    var appName = 'aaTechOpsHub',
        ng = require('angular');
    
    // Configure main application module
    ng.module(appName, ['ngRoute', 'ngResource']);
    
    // Bootstrap application
    ng.bootstrap(document, [appName]);
    
    if (window.console) {
        window.console.log('Application started...');
    }
});