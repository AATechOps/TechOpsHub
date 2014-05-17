define(function (require) {
    'use strict';
    
    var findAircraft = function (dispatcher) {
        var aircraft = {
            noseNumber: this.noseNumber,
            registration: ['N', this.noseNumber, 'SW'].join('')
        }
        
        dispatcher.$broadcast('aircraft:search:result', aircraft);
        this.noseNumber = '';
    };
    
    var AircraftSearchController = function ($scope, $rootScope) {
        $scope.noseNumber = '';
        $scope.findAircraft = findAircraft.bind($scope, $rootScope);
    };
    
    return ['$scope', '$rootScope', AircraftSearchController];
});