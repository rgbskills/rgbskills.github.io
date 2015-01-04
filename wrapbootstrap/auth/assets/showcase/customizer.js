$(document).ready(function() {
  
  /*Color scheme*/
	function changeColor(color, variable){
		less.modifyVars({
			'@auth-color-main': color,
		});
		$('.selected-color-scheme').html(color);
	}
	$('.change-color').click(function(e) {
		e.preventDefault();
		var color = $(this).attr('data-color');
		changeColor(color);
	});

	// Custom color
	$('.custom-color').minicolors({
		changeDelay: 200,
		letterCase: 'uppercase',
		theme: 'bootstrap'
	});

	$('.change-custom-color').click(function(e) {
		e.preventDefault();
		var color = $('.custom-color').val();
		if(color == ''){
			var error = "Please paste or select color code in the field bellow.";
			$('.custom-color-validation').fadeIn().html(error);
			setTimeout(function(){ 
				$('.custom-color-validation').fadeOut(); 
			}, 3000);
			return false;
		}
		changeColor(color);
	});
	

	$('.change-color').each(function(i, obj) {
		var color = $(this).attr('data-color');
		$(this).find('span').css('background-color', color);
	});

  // Animations
    function testAnimation(x) {
      $('#auth-animate').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
      });
    };

    $(document).ready(function(){
      $('.animate').click(function(e){
        e.preventDefault();
        var selectedAnimation = $('.animations').val();
        testAnimation(selectedAnimation);
      });

      $('.animations').change(function(){
        var selectedAnimation = $(this).val();
        testAnimation(selectedAnimation);
      });
    });

});