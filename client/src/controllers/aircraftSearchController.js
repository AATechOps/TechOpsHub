define(function (require) {
    'use strict';
    
    var findAircraft = function (dispatcher, model) {
        var $this = this;
        
        model.get({ noseNumber: this.noseNumber }).$promise.then(function (result) {
            if (result) {
                dispatcher.$broadcast('aircraft:search:result', result);
            }
        }).finally(function () {
                $this.noseNumber = '';
        });;
    };
    
    var AircraftSearchController = function ($scope, $rootScope, aircraft) {
        $scope.noseNumber = '';
        $scope.findAircraft = findAircraft.bind($scope, $rootScope, aircraft);
    };
    
    return ['$scope', '$rootScope', 'aircraft', AircraftSearchController];
});