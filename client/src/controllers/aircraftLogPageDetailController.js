define(function(require) {
   'use strict';

    var AircraftLogPageDetailController = function($scope, logBook) {
        var scope = $scope;

        $scope.on('aircraft:logpage:detail', function(sender, args) {
            console.log(sender);
            console.log(args);
        });
    };

   return ['$scope', 'logBook', AircraftLogPageDetailController];
});