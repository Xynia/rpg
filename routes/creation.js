
var ctrl = require('../controllers/creationCtrl');

exports.traits = function(req, res) {
	ctrl.traits(function(success, traits){
		if(success){
			res.json({
				success: true,
				traits : traits
			});
		}else{
			res.json({
				success: false,
				traits : null,
				error  : traits
			});			
		}
	});
};

exports.attributs = function(req, res) {
	ctrl.attributs(function(success, attributs){
		if(success){
			res.json({
				success: true,
				attributs : attributs
			});
		}else{
			res.json({
				success: false,
				attributs : null,
				error  : attributs
			});			
		}
	});
};


exports.attributTypes = function(req, res) {
	ctrl.attributs(function(success, types){
		if(success){
			res.json({
				success: true,
				types : types
			});
		}else{
			res.json({
				success: false,
				types : null,
				error  : types
			});			
		}
	});
};