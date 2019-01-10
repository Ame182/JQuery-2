$(function(){
	$('.crear').click(function(){
		var tweet = $('.texto').val();
		event.preventDefault();
		console.log(tweet);

	$('.derecha').append('<div class="rellena">'+ tweet + '</div>')
		$('.tweet').val('');
		$('.tweet').focus();
		$('.eltweet').html('<p>' + tweet + '</p>');
	});
		
});

		
	
