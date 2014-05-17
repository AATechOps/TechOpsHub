define(function (require) {
    'use strict';
    
    var findAircraft = function (dispatcher, model) {
        var aircraft = model.get({ noseNumber: this.noseNumber });
        
        if (aircraft) {
            dispatcher.$broadcast('aircraft:search:result', aircraft);
            this.noseNumber = '';
        }
    };
    
    var AircraftSearchController = function ($scope, $rootScope, Aircraft) {
        $scope.noseNumber = '';
        $scope.findAircraft = findAircraft.bind($scope, $rootScope, Aircraft);
    };
    
    return ['$scope', '$rootScope', 'Aircraft', AircraftSearchController];
});