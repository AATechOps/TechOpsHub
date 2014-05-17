define(function (require) {
    'use strict';
    
    // Require dependecies
    var appName = 'aaTechOpsHub',
        ng = require('angular'),
        
        // Controllers
        aircraftSearchController = require('./controllers/aircraftSearchController'),
        aircraftAttributesController = require('./controllers/aircraftAttributesController'),
        aircraftLogBookController = require('./controllers/aircraftLogBookController'),
        
        // Factories
        aircraftFactory = require('./models/aircraft'),
        logBookFactory = require('./models/logBook');
    
    // Configure main application module
    ng.module(appName, ['ngRoute', 'ngResource'])
    
      // Register Controllers
      .controller('AircraftSearchController', aircraftSearchController)
      .controller('AircraftAttributesController', aircraftAttributesController)
      .controller('AircraftLogBookController', aircraftLogBookController)
    
      // Register Factories
      .factory('Aircraft', aircraftFactory)
      .factory('LogBook', logBookFactory);
    
    // Bootstrap application
    ng.bootstrap(document, [appName]);
    
    if (window.console) {
        window.console.log('Application started...');
    }
});