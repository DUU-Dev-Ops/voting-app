var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    scheme: {
        type: String,
        enum: ['majority', 'STV'],
        trim: true
    },
    candidates: [String]
});

module.exports = mongoose.model('Poll', PollSchema);
