
/**
 * Dependencies.
 */

var db 			= require('./database/mongoose.js');

var creation   = require('./routes/creation')
  , user	   = require('./routes/user')
  , auth       = require('./routes/AuthManager');


var express    = require('express')
  , http 	   = require('http')
  , bodyParser = require('body-parser')
  , favicon    = require('serve-favicon')
  , morgan     = require('morgan')
  , path 	   = require('path')
  , methodOverride  = require('method-override');

var app = express();

// all environments
app.set('port', process.env.PORT || 3003);

app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//main folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(__dirname + '/public/img/favicon.ico'));


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'PUT','DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, x-access-token, Authorization');
    next();
});

//----------------------------------------------------------------------------
//------------------------------- Route --------------------------------------
//----------------------------------------------------------------------------

//partials
app.get('views/partials/:view', function(req, res){
	var view = req.params.view;
	res.render('partials/' + view);
});

//index
app.get("/", function(req, res) {
	res.render('index');
});
app.get("/mainView", function(req, res) {
	res.render('mainView');
});

app.post('/login', user.login);
app.get('/traits', auth.ensureAuthorized, creation.traits);

//app.post('/requestAccess', auth.ensureAuthorized, auth.requestAccess);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
