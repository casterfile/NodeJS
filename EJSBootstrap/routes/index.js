exports.index = function(req, res){
	res.render('default', {
	title: 'Home',
	classname: 'home',
	users: ['Ray', 'Kevin','Tony']
	});//getting the view default.ejs
}

 exports.about = function(req, res){
	res.render('default', {
	title: 'About Me',
	classname: 'about'
	});//getting the view default.ejs
}