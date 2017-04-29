var express = require('express');
var app = express();

app.set('view engine', 'ejs');//this will access the view folder
// app.set('views', __dirname+'/newviews');//how to change the views

app.get('/', function(req, res){
	res.render('default', {
	title: 'Home',
	classname: 'home',
	users: ['Ray', 'Kevin','Tony']
	});//getting the view default.ejs
});

app.get('/about', function(req, res){
	res.render('default', {
	title: 'About Me',
	classname: 'about',
	users: ['Ray', 'Kevin','Tony']
	});//getting the view default.ejs
});


app.get('*', function(req, res){
	res.send('Bad Route');
});


var server = app.listen(3000, function(){
	console.log('listening on port 3000 running in http://localhost:3000/');
});
