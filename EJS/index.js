var express = require('express');
var app = express();

app.set('view engine', 'ejs');//this will access the view folder
// app.set('views', __dirname+'/newviews');//how to change the views

app.get('/', function(req, res){
	res.render('default', {
	title: 'Home',
	users: ['Ray', 'Kevin','Tony']
	});//getting the view default.ejs
});

// app.get('/me', function(req, res){
// 	res.send('facebook/AnthonyACastor');
// });

// app.get('/who/:name?', function(req, res){
// 	var name = req.params.name; //http://localhost:3000/who/tony
// 	res.send(name + ' was here!');
// });

// app.get('/who/:name?/:title?', function(req, res){
// 	var name = req.params.name; //http://localhost:3000/who/tony
// 	var title = req.params.title;// http://local host:3000/who/tony/boss
// 	res.send('<p>name: '+ name + '<br>title: '+ title + '</p>');
// });


// app.get('*', function(req, res){
// 	res.send('Bad Route');
// });


var server = app.listen(3000, function(){
	console.log('listening on port 3000 running in http://localhost:3000/');
});
