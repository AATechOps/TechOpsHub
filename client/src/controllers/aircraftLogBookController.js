define(function (require) {
    'use strict';
    
    var Underscore = require('underscore');

    var AircraftLogBookController = function ($scope, $rootScope, logBook) {
        var scope = $scope;
        $scope.discrepancyFilter = {
            DeferralCode: ''
        };

        $scope.showLPDetail = function(lp) {
            scope.activeView = scope.templates.logpagedetail;
            $rootScope.$broadcast('aircraft:logpage:detail', Underscore.findWhere(scope.logPages, {LogNumber: lp}));
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

                // reset discrepancy filter
                scope.discrepancyFilter = {
                    DeferralCode: ''
                };
            });
        });
    };
    
    return ['$scope', '$rootScope', 'logBook', AircraftLogBookController];
});