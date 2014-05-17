define(function (require) {
    'use strict';
    
    var AircraftLogBookController = function ($scope, logBook) {
        var scope = $scope;
        
        $scope.$on('aircraft:search:result', function (sender, args) {
            scope.aircraft = args;
            scope.logPages = LogBook.get({ noseNumber: args.TailNumber });
        });
    };
    
    return ['$scope' 'logBook', AircraftLogBookController];
});