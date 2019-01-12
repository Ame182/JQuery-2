$(function(){
	$('.myform').on('submit' , function(event){
		var text= $(".texto").val();
		event.preventDefault();
		 
		$('input').click(function(e) {
		
		var $newTweet = $('.demotweet').clone();
	    $newTweet.find('.contenido-tweet').html('<p>' + text + '</p>').val();
	    $('.derecha').prepend($newTweet);
	    e.preventDefault();

		});
});

	  $('body').on('click', '.like', function(){
	    var likes = parseInt($(this).parent().find('.contador-likes').html());
	    likes++;
	    $(this).parent().find('.contador-likes').html(likes);
	
	    if (likes == 1) {
	
	      $(this).parent().find('.like').addClass('like--rojo');
	    };
	});

  $('body').on('click', '.eliminar', function (e) {
	    e.preventDefault();
	    $(this).parent().parent().fadeOut();
	
	  });
});