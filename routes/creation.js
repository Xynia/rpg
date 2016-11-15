
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