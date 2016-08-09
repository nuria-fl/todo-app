$('.js-delete').click(function(e){
	e.preventDefault();
	var url = $(this).attr('href');
	console.log(url);
	$.ajax({
		url: url,
		type: 'delete'	
	})
	.done(function(){
		window.location = '/tasks';
	});
});

$('.js-complete').click(function(e){
	e.preventDefault();
	var url = $(this).attr('href');
	console.log(url);
	$.ajax({
		url: url,
		type: 'put'	
	})
	.done(function(){
		window.location = '/tasks';
	});
});