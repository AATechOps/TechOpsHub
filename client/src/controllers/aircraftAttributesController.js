define(function (require) {
    'use strict';
    
    var AircraftAttributesController = function ($scope) {
        var scope = $scope;

        $scope.$on('aircraft:search:result', function (sender, args) {
            scope.aircraft = args;
        });
    };
    
    return ['$scope', AircraftAttributesController];
});