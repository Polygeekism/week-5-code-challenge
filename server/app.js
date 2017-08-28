var express = require('express')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//middleware
app.use(express.static('public'));

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('listening on port:', port);
})