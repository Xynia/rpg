var jwt 		= require('jsonwebtoken');

process.env.JWT_SECRET = "64DXqaYyC6zFpsUFPBgPCELFRF8ka9gZHE6f2kp79xMp3ASK";
process.env.PASS = "fifitz";


/**
 * Extract the token from the headers.
 */
var getToken = function(headers) {
	var header = headers["x-access-token"];
	if (typeof header !== 'undefined') {
		return header;
	} else {
		header = headers["authorization"];
		if (typeof header !== 'undefined') {
			var token = header.split(" ");
			return token[1];
		} else {
			return null;
		}
	}
};

/**
 * Middleware for express. Check the token and basic authorization.
 */
exports.ensureAuthorized = function(req, res, next) {
	var token = getToken(req.headers);
	if (token == null) {
		console.log("CheckToken error: typeof header === 'undefined'");
		return res.sendStatus(403);
	} else {
		var dec = jwt.decode(token);
		//console.log("dec : " + JSON.stringify(dec));
		jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
			if (err) {
				console.log("CheckToken error: " + err);
				return res.sendStatus(403);
			} else {
				req.user = decoded;
				next();
			}
		});
	}
};

/**
 * Return the user id;
 */
exports.userId = function(req, res){
	if(req.user){
		return req.user.id;
	}
	else
		return 'err';	
}