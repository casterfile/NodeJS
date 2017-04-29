var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.send('<h1>Hello</h1> express');
});

app.get('/me', function(req, res){
	res.send('facebook/AnthonyACastor');
});

app.get('/who/:name?', function(req, res){
	var name = req.params.name; //http://localhost:3000/who/tony
	res.send(name + ' was here!');
});

app.get('/who/:name?/:title?', function(req, res){
	var name = req.params.name; //http://localhost:3000/who/tony
	var title = req.params.title;// http://localhost:3000/who/tony/boss
	res.send('<p>name: '+ name + '<br>title: '+ title + '</p>');
});


app.get('*', function(req, res){
	res.send('Bad Route');
});


var server = app.listen(3000, function(){
	console.log('listening on port 3000 running in http://localhost:3000/');
});
