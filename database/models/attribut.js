var mongoose = require('mongoose');

// Entry schema
var Schema = mongoose.Schema;

var AttributType = new Schema({
	name: { type: String, required: true },
	subTypes: [{
		name : { type: String, required: false }, 
		categories : [{ type: String, required: false }]
		}]
});

var Attribut = new Schema({
	type: { type: String, required: true },
	subType: { type: String, required: true },
	category: { type: String, required: true },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    combinaisons:[{type: String, subType: String, category:String, name:String, value: Number}]
});


//Define Models
var attributTypeModel = mongoose.model('AttributType', AttributType);
var attributModel = mongoose.model('Attribut', Attribut);

// Export Models
exports.attributType = attributTypeModel;
exports.attribut = attributModel;