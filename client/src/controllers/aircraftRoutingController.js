define(function (require) {
    'use strict';
    
    var AircraftRoutingController = function ($scope, flightLeg) {
        var scope = $scope;
        $scope.templates = {
            dashboard: 'src/views/dashboard/dashboard.tpl.html',
            acrouting: 'src/views/dashboard/acrouting.tpl.html',
            discrepancies: 'src/views/dashboard/discrepanices.tpl.html',
            discrepancyDetail: 'src/views/dashboard/discrepancydetail.tpl.html',
            discrepancyhistory: 'src/views/dashboard/discrepancyHistory.tpl.html',
            logpagedetail: 'src/views/dashboard/logpagedetail.tpl.html'
        };

        $scope.templates.activeView = $scope.templates.dashboard;
        $scope.templates.discrepancyView = $scope.templates.discrepancies;
        $scope.templates.acroutingView = $scope.templates.acrouting;

        $scope.$on('aircraft:search:result', function (sender, args) {
            flightLeg.query({ noseNumber: args.TailNumber }).$promise.then(function (result) {
                scope.flights = result;
            });
        });

        $scope.$on('aircraft:logpage:detail', function(sender, args) {
            scope.templates.discrepancyView = $scope.templates.discrepancyDetail;
        });

        $scope.goback = function() {
           scope.templates.discrepancyView = $scope.templates.discrepancies; 
        }
    };
    
    return ['$scope', 'flightLeg', AircraftRoutingController];
});