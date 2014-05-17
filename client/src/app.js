define(function (require) {
    'use strict';
    
    // Require dependecies
    var appName = 'aaTechOpsHub',
        ng = require('angular'),
        
        // Controllers
        aircraftSearchController = require('./controllers/aircraftSearchController'),
        aircraftAttributesController = require('./controllers/aircraftAttributesController');;
    
    // Configure main application module
    ng.module(appName, ['ngRoute', 'ngResource'])
      .controller('AircraftSearchController', aircraftSearchController)
      .controller('AircraftAttributesController', aircraftAttributesController);
    
    // Bootstrap application
    ng.bootstrap(document, [appName]);
    
    if (window.console) {
        window.console.log('Application started...');
    }
});