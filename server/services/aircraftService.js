'use strict';

var soap = require('soap'),
    acUrl = 'http://airopscommonws/AircraftInfo.asmx?wsdl',
    fsUrl = '',
    acClient = {},
    fsClient = {};

soap.createClient(acUrl, function (err, client) {
    acClient = client;
});

soap.createClient(fsUrl, function (err, client) {
    fsClient = client;
});

module.exports.getAllActiveAircraft = function (callback) {
    acClient.GetAllActiveAircrafts({}, function (err, result) {
        callback(result.GetAllActiveAircraftsResult.Aircraft);
    });
};

module.exports.getAircraftByNoseNumber = function (noseNumber, callback) {
    acClient.GetAircraftByTailNumber({ tailNumber: noseNumber }, function (err, result) {
        callback(result.GetAircraftByTailNumberResult);
    });
};

module.exports.getAircraftRoutingByNoseNumber = function (noseNumber, callback) {
    
};