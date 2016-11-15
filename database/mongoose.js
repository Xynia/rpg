
var mongoose    = require('mongoose');
var fs 			= require("fs");

var mongodbURL = 'mongodb://localhost:27017/rpg';
var mongodbOptions = { };

mongoose.connect(mongodbURL, mongodbOptions, function (err, res) {
    if (err) { 
    	console.log('Connection refused to ' + mongodbURL);
    	console.log(err);
    } else {
        console.log('Express server listening to mongoDb on port 27017');
    }
});

var models_path = __dirname + '\\models';
//console.log(models_path);
var models = fs.readdirSync(models_path);

models.forEach(function (file) {
if (~file.indexOf('.js')) {
  require(models_path + '/' + file);
}
});

exports.mongoose = mongoose;