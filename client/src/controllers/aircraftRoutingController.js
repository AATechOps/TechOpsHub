define(function (require) {
    'use strict';
    
    var AircraftRoutingController = function ($scope) {
        var scope = $scope;
        
        $scope.$on('aircraft:search:result', function (sender, args) {
            scope.aircraft = args;
        });
    };
    
    return ['$scope', AircraftRoutingController];
});