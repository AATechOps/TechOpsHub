'use strict';

var express = require('express'),
    aircraftService = require('../services/aircraft'),
    router = express.Router();

router.get('/aircraft', function (req, res) {
    aircraftService.getAllActiveAircraft(res.json.bind(res));
});

module.exports = router;