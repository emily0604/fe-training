$(document).ready(function() {
  // Try ES6
  $('.element-menu').hide();
  $('.main a').click(function(){
  	$('.main li').addClass('active-sidebar');
  	$('.element-menu li').removeClass('active-sidebar');
  	$('.element-menu').toggle();
  })

});
