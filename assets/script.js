$(document).ready(function(){
  var logo = function(){
    var winHeight = $(window).height();
    $('.logo-box').css('min-height', winHeight);
  }
  logo();
  $(window).resize(function(){
    logo();
  });
})
