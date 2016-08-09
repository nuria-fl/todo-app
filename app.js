var express = require('express');
var bodyParser = require('body-parser');
var jade = require('jade');
var app = express();
var counter = 0;
var tasks = [];
// var justDeleted = false;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))

app.get('/tasks', function(req, res){
	setTimeout(function(){
		justDeleted = false;
	}, 100);
	res.render('index', {
		title: 'Todo',
		tasks: tasks
	});
});
app.get('/completed', function(req, res){
	res.render('completed', {
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
app.post('/done', function(req, res){
	var taskId = req.body.task;
	
	tasks.forEach(function(elem){
		if(elem.id == taskId){
			elem.completed = true;
			elem.completedDate = new Date();
		}
	})
	res.redirect('/tasks');
});
app.post('/alldone', function(req, res){
	tasks.forEach(function(elem){
		elem.completed = true;
		elem.completedDate = new Date();
	})
	res.redirect('/tasks');
});
app.post('/delete', function(req, res){
	var taskId = req.body.task;
	var itemToDelete = null;
	tasks.forEach(function(elem, i){
		if(elem.id == taskId){
			itemToDelete = i;
		}
	});
	tasks.splice(itemToDelete, 1);
	justDeleted = true;
	res.redirect('/tasks');
});

app.listen('3000');