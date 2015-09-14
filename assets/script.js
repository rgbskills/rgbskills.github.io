$('#index a').click(function(e){
  e.preventDefault();
});

$('.resources').click(function(){
  $('#resources').fadeIn();
});
$('.skills').click(function(){
  $('#skills').fadeIn();
});
$('.about').click(function(){
  $('#about').fadeIn();
});

$('.close-modal').click(function(){
   $(this).parent().fadeOut();
});

function modal(){
  var windowHeight = $(window).height();
  $('.modal').css('min-height', windowHeight);
}
modal();

$(window).resize(function(){
  modal();
});
