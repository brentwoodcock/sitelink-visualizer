var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
// var sitelinkService = require('sitelinkservice/dist/SitelinkService');

// Temporary location of sitelinkService for Heroku
var sitelinkService = require('../sitelinkservice/dist/SitelinkService');

var app = express();
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd,api+json' }));

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/dist'));

app.get('/', function(req, res) {
	res.send('./dist/index.html');
});

app.get('/api/units/:locCode', function(req, res) {
	sitelinkService.getUnitInformation(req.params.locCode).then(function (result) {
		res.json(result.UnitsInformation_v2Result.diffgram.NewDataSet.Table);
	});
});

app.get('/api/types/:locCode', function(req, res) {
	sitelinkService.getTypeInformation(req.params.locCode).then(function (result) {
		res.json(result.UnitTypePriceList_v2Result.diffgram.NewDataSet.Table);
	});
});

app.listen(PORT, function() {
	console.log('API running on port ' + PORT);
});