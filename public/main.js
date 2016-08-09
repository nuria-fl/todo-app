$('.js-delete').click(function(e){
	e.preventDefault();
	var url = $(this).attr('href');
	var parent = $(this).closest('li');
	console.log(url);
	$.ajax({
		url: url,
		type: 'delete'	
	})
	.done(function(){
		$('.alert-danger').fadeIn();
		$(parent).remove();
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

$('#alldone').click(function(e){
	e.preventDefault();
	var url = $(this).attr('href');
	$.ajax({
		url: url,
		type: 'put'	
	})
	.done(function(){
		window.location = '/tasks';
	});
});