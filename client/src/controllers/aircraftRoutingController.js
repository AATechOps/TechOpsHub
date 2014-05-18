define(function (require) {
    'use strict';
    
    var AircraftRoutingController = function ($scope, flightLeg) {
        var scope = $scope;
        
        $scope.$on('aircraft:search:result', function (sender, args) {
            flightLeg.query({ noseNumber: args.TailNumber }).$promise.then(function (result) {
                scope.flights = result;
            });
        });
    };
    
    return ['$scope', 'flightLeg', AircraftRoutingController];
});