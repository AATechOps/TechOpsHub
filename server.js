'use strict';

var path = require('path'),
    express = require('express'),
    app = express(),
    port = 8088;

app.use(express.static(path.resolve(__dirname, 'client')));
app.use('/api', require('./server/routes/aircraft'));

app.listen(port, function () {
    console.log('Server listening on port %s', port);
});