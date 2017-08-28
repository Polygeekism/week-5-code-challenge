var express = require('express');
var router = express.Router();
var messages = require('../models/messages.schema.js');


router.get('/', function(req, res){

})

router.post('/', function(req, res){
    console.log('made it to the post route');
    res.send(200);


})

module.exports = router;