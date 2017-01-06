var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = new Schema({
    caster: {
        type: String,
        required: true
    },
    poll: {
        type: Schema.Types.ObjectId,
        required: true
    },
    rankings: [{
        type: String,
    }],

});

module.exports = mongoose.model('Vote', VoteSchema);
