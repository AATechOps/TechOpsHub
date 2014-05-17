'use strict';

var soap = require('soap'),
    url = 'http://phx-vm-toweb01u/US.MechanicsGateway.Services/1.0/DWH/AircraftMaintenanceDataService.svc?wsdl',
    ws = {},
    padding = '0000';

soap.createClient(url, function (err, client) {
    ws = client;
});

module.exports.getOpenLogItems = function (noseNumber, callback) {
    noseNumber = [padding, noseNumber].join('').slice(-padding.length);
    
    ws.GetOpenLogItems({ aircraftID: noseNumber }, function (err, result) {
        callback(result.GetOpenLogItemsResult.OpenLogItemDataList.OpenLogItemData);
    });
};