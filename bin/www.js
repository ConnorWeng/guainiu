#!/usr/bin/env node
var debug = require('debug')('guainiu');
var app = require('../app');

app.set('port', 18080);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
