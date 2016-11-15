var mongoose = require('mongoose');

// Entry schema
var Schema = mongoose.Schema;

var Attribut = new Schema({
	type: { type: String, required: true },
	subType: { type: String, required: false },
	category: { type: String, required: false },
    names: [String],
    values: [Number],
    combinaisons:[{type: String, subType: String, names:[String], values: [Number]}]
});


//Define Models
var attributModel = mongoose.model('Attribut', Attribut);

// Export Models
exports.attribut = attributModel;