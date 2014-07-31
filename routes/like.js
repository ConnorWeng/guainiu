var express = require('express');
var router = express.Router();
var redis = require('redis');
var client = redis.createClient(80, 'redis.duapp.com');

client.on('error', function (err) {
    console.log('Error:' + err);
});

client.auth('dOWdHb6VXq210YcFLwx5OLBU-Vl6eZEtSa1e9eGq1VOZDv17HQzU7yRB1-mwXJaYohdbMIWwJSAcHa');

router.post('/inc', function(req, res) {
    client.incr('like:count', function (err, reply) {
        res.send('ok');
    });
});

router.get('/', function(req, res) {
    client.get('like:count', function (err, reply) {
        res.send('count:' + reply.toString());
    });
});

module.exports = router;
