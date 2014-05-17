define(function (require) {
    'use strict';
    
    // Require dependecies
    var appName = 'aaTechOpsHub',
        ng = require('angular'),
        
        // Controllers
        aircraftSearchController = require('./controllers/aircraftSearchController'),
        aircraftAttributesController = require('./controllers/aircraftAttributesController'),
        
        // Factories
        aircraftFactory = require('./models/aircraft');
    
    // Configure main application module
    ng.module(appName, ['ngRoute', 'ngResource'])
    
      // Register Controllers
      .controller('AircraftSearchController', aircraftSearchController)
      .controller('AircraftAttributesController', aircraftAttributesController)
    
      // Register Factories
      .factory('Aircraft', aircraftFactory);
    
    // Bootstrap application
    ng.bootstrap(document, [appName]);
    
    if (window.console) {
        window.console.log('Application started...');
    }
});