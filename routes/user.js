
var jwt = require('jsonwebtoken');


/**
 * req.body needs to have :<br>
 * password & email
 */
exports.login = function(req, res) {
	
	var login = req.body.login;
	var password = req.body.password;
	if (login.length > 3 && password == process.env.PASS) {
		var userToken = jwt.sign(login, process.env.JWT_SECRET,{});
		res.json({
			success: true,
			token : userToken
		});
	} else {
		res.json({
			success: false,
			token : null
		});
	}
};