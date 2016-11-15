var mongoose = require('mongoose');
var Trait = mongoose.model('Personnality');

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
