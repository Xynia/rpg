var mongoose = require('mongoose');
var Trait = mongoose.model('Personnality');
var Attribut = mongoose.model('Attribut');
var Type = mongoose.model('AttributType');

exports.traits = function(next) {
	var result = [];
	
	Trait.find({}, function(rhErr, traits) {
		if (rhErr) {
			return next(false, rhErr);
		}
		if (traits != null) {
			next(true, traits);
		}
	});
};

exports.attributs = function(next) {
	var result = [];
	
	Attribut.find({}, function(rhErr, att) {
		if (rhErr) {
			return next(false, rhErr);
		}
		if (att != null) {
			next(true, att);
		}
	});
};


exports.attributTypes = function(next) {
	var result = [];
	
	Type.find({}, function(rhErr, t) {
		if (rhErr) {
			return next(false, rhErr);
		}
		if (t != null) {
			next(true, t);
		}
	});
};
