var express = require('express');
var router = express.Router();
var path = require('path');
var messages = require('../models/messages.schema.js');


router.get('/', function (req, res) {
    messages.find({},function (err, data) {
        if (err) {
            console.log('error', err);
            res.sendStatus(500);
        } else {
            console.log('found data: ', data)
            res.send(data);
        }
    })

})

router.post('/', function (req, res) {
    console.log('made it to the post route:', req.body);
    var newMessage = new messages(req.body);
    newMessage.save(function (err, data) {
        if (err) {
            console.log('error', err);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    })
})

module.exports = router;