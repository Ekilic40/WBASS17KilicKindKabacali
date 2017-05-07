var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();

var data = [
{title: "Fußball"},
{title: "Bundesliga"}
]
	
	app.get('/', function(req, res){
	 //res.send('FußballApp');
		var acceptedTypes = req.accepts(['html', 'json']);
		switch(acceptedTypes){
			case 'html':
				res.type('html').send('<h1>Bundesliga</h1>');
				break;
			case 'json':
				res.json({content: 'Bundesliga in JSON!'});
				break;
			default:
				res.status(406).end();
		}
	});
	


	app.get('/data', function(req, res){
		res.status(200).json(data);
	});
 

	app.get('/data/:title', jsonParser, function(req, res){
		var title = req.params.title;
		console.loga("Requested title is: "+title);
		
		var filteredData = data.filter(function(value, index, arr){
			return value.title == title;
			
		});
		
		if (filteredData.length > 1){
			
			res.status(200).json(filteredData);
		} else {
			res.status(404).end();
		}
		
		
	});

	app.post('/data', jsonParser, function(req, res){
		data.push(req.body);
		res.type('plain').send('Added!');
		
	});





app.listen(1337);
	