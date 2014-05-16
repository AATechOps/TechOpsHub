'use strict';

var soap = require('soap'),
    url = 'http://phx-vm-toweb01u/US.MechanicsGateway.Services/1.0/DWH/AircraftMaintenanceDataService.svc?wsdl',
    ws = {};

soap.createClient(url, function (err, client) {
    ws = client;
});

module.exports.getOpenLogItems = function (noseNumber, callback) {
    ws.GetOpenLogItems({ aircraftID: noseNumber }, function (err, result) {
        callback(result.GetOpenLogItemsResult.OpenLogItemDataList.OpenLogItemData);
    });
};