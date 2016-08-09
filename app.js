var express = require('express');
var bodyParser = require('body-parser');
var jade = require('jade');
var app = express();
var counter = 0;
var tasks = [];

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/tasks', function(req, res){
	res.render('index', {
		title: 'Todo',
		tasks: tasks
	});
});
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/tasks', function(req, res){
	var newTask = {
		id: ++counter,
		name: req.body.name,
		createdDate: new Date(),
		completed: false
	};
	tasks.push(newTask);
	res.redirect('/tasks');
});

app.listen('3000');