define(function (require) {
    'use strict';
    
    var AircraftLogBookController = function ($scope, logBook) {
        var scope = $scope;
        $scope.discrepancyFilter = {
            DeferralCode: ''
        };

        $scope.$on('aircraft:search:result', function (sender, args) {
            scope.aircraft = args;
            
            logBook.query({ noseNumber: args.TailNumber }).$promise.then(function (result) {
                var index = {};
                
                result.map(function (c) {
                    return c.DeferralCode;
                }).forEach(function (c) {
                    index[c] ? index[c] = ++index[c] : index[c] = 1;
                });
                
                scope.logPages = result;
                scope.lopPageIndex = index;
            });
        });
    };
    
    return ['$scope', 'logBook', AircraftLogBookController];
});