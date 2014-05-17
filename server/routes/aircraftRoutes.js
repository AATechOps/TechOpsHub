'use strict';

var express = require('express'),
    aircraftService = require('../services/aircraftService'),
    router = express.Router();

router.get('/aircraft', function (req, res) {
    aircraftService.getAllActiveAircraft(res.json.bind(res));
});

router.get('/aircraft/:noseNumber', function (req, res) {
    aircraftService.getAircraftByNoseNumber(req.params.noseNumber, res.json.bind(res));
});

router.get('/aircraft/:noseNumber/routing', function (req, res) {
    aircraftService.getAircraftRoutingByNoseNumber(req.params.noseNumber, res.json.bind(res));
});

module.exports = router;