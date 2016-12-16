
var mongoose    = require('mongoose');
var Trait		= require('./database/models/personnality.js');
var fs 			= require("fs");

// Get content from file
var contents = fs.readFileSync("./database/data/traits.json");

// Define to JSON type
var traits = JSON.parse(contents);
 
contents = fs.readFileSync("./database/data/apparence.json");
var apparence = JSON.parse(contents);


contents = fs.readFileSync("./database/data/attributType.json");
var types = JSON.parse(contents);


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

traits.forEach(function (trait) {

	var model = mongoose.model('Personnality');
	var resource = new model(trait);

	delete resource._id;

	resource.save(function(err, savedresource) {
		if (err) {
			console.log("Couldn't save " + JSON.stringify(trait));
		} 
	});
});


apparence.forEach(function (trait) {

	var model = mongoose.model('Attribut');
	var resource = new model(trait);

	delete resource._id;

	resource.save(function(err, savedresource) {
		if (err) {
			console.log("Couldn't save " + JSON.stringify(trait));
		} 
	});
});


types.forEach(function (t) {

	var model = mongoose.model('AttributType');
	var resource = new model(t);

	delete resource._id;

	resource.save(function(err, savedresource) {
		if (err) {
			console.log("Couldn't save " + JSON.stringify(t));
		} 
	});
});
