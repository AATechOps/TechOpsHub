define(function (require) {
    'use strict';
    
    // Require dependecies
    var appName = 'aaTechOpsHub',
        ng = require('angular'),
        
        // Controllers
        aircraftSearchController = require('./controllers/aircraftSearchController'),
        aircraftAttributesController = require('./controllers/aircraftAttributesController'),
        aircraftLogBookController = require('./controllers/aircraftLogBookController'),
        aircraftRoutingController = require('./controllers/aircraftRoutingController'),
        aircraftLogPageDetailController = require('./controllers/aircraftLogPageDetailController'),

        // Factories
        aircraftFactory = require('./models/aircraft'),
        logBookFactory = require('./models/logBook'),
        flightLegFactory = require('./models/flightLeg');
    
    // Configure main application module
    ng.module(appName, ['ngRoute', 'ngResource', 'mgcrea.ngStrap'])
    
      // Register Controllers
      .controller('AircraftSearchController', aircraftSearchController)
      .controller('AircraftAttributesController', aircraftAttributesController)
      .controller('AircraftLogBookController', aircraftLogBookController)
      .controller('AircraftRoutingController', aircraftRoutingController)
      .controller('AircraftLogPageDetailController', aircraftLogPageDetailController)
    
      // Register Factories
      .factory('aircraft', aircraftFactory)
      .factory('logBook', logBookFactory)
      .factory('flightLeg', flightLegFactory);
    
    // Bootstrap application
    ng.bootstrap(document, [appName]);
    
    if (window.console) {
        window.console.log('Application started...');
    }
});