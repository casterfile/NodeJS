var express = require('express');
var app = express();
var routes = require('./routes');//Incude Routes Folder

app.set('view engine', 'ejs');//this will access the view folder
// app.set('views', __dirname+'/newviews');//how to change the views

app.locals.pagetitle = "Awesome Website ";

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res){
	res.send('Bad Route');
});


var server = app.listen(3000, function(){
	console.log('listening on port 3000 running in http://localhost:3000/');
});
