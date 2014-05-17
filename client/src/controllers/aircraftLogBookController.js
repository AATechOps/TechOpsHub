define(function (require) {
    'use strict';
    
    var AircraftLogBookController = function ($scope, logBook) {
        var scope = $scope;
        
        $scope.$on('aircraft:search:result', function (sender, args) {
            scope.aircraft = args;
            
            logBook.query({ noseNumber: args.TailNumber }).$promise.then(function (result) {
                scope.logPages = result;
            });
        });
    };
    
    return ['$scope', 'logBook', AircraftLogBookController];
});