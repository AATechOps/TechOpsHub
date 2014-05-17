'use strict';

var soap = require('soap'),
    url = 'http://airopscommonws/AircraftInfo.asmx?wsdl',
    ws = {};

soap.createClient(url, function (err, client) {
    ws = client;
});

module.exports.getAllActiveAircraft = function (callback) {
    ws.GetAllActiveAircrafts({}, function (err, result) {
        callback(result.GetAllActiveAircraftsResult.Aircraft);
    });
};

module.exports.getAircraftByNoseNumber = function (noseNumber, callback) {
    ws.GetAircraftByTailNumber({ tailNumber: noseNumber }, function (err, result) {
        callback(result.GetAircraftByTailNumberResult);
    });
};