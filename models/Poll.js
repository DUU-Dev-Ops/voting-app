var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    candidates: [{ name: String, link: String }],
    expiry: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Poll', PollSchema);
