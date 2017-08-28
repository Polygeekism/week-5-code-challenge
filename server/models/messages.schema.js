var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    name: {type: String, require: true},
    message: {type: String, require: true}
},
{
    collection: 'messages'
})

module.exports = mongoose.model('messages', messageSchema)