var mongoose = require('mongoose');

// Entry schema
var Schema = mongoose.Schema;

var Personnality = new Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    opposing: {type:[String], required: false}
});


//Define Models
var personnalityModel = mongoose.model('Personnality', Personnality);

// Export Models
exports.personnality = personnalityModel;