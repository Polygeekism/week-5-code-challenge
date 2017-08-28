var express = require('express')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var messages = require('./routes/messages.js')


//middleware
app.use(express.static('public'));

app.use('/messages', messages);


var databaseUrl = 'mongodb://localhost:27017/mongodbPractice';
mongoose.connect(databaseUrl,
    {
        useMongoClient: true
    });
mongoose.connection.on('connected', function () {
    console.log('mongoose connected to : ', databaseUrl);
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('listening on port:', port);
})