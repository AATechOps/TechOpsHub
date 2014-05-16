'use strict';

var express = require('express'),
    logPageService = require('../services/logPageService'),
    router = express.Router();

router.get('/aircraft/:noseNumber/logPages', function (req, res) {
    logPageService.getOpenLogItems(req.params.noseNumber, res.json.bind(res));
});

module.exports = router;