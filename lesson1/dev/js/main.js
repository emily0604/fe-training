$(document).ready(function(){
  $('.menu-button').click(function(e){
    $(this).siblings('ul').slideToggle();
    $('.login').hide();
    e.stopPropagation();
  });

  $('.submenu-button').click(function(e){
    $(this).siblings('.login').slideToggle();
    $('.menu-button ~ ul').hide();
    e.stopPropagation();
  });

  $('.client').height($('.client .slide-wrapper').outerHeight());

  $(window).resize(function(){
     $('.client').height($('.client .slide-wrapper').outerHeight());
  });

  $('html, body').click(function(){
    $('.menu-button ~ ul').hide();
    $('.login').hide();
  });

  function showNext(next){
    if (next > 2) next = 0;
    if (next < 0) next = 2;
    var left = -next * 100 + "%";
    $('.slider').css('left', left);
    $('#banner li.active').removeClass('active');
    $('#banner li[data-slider="'+next+'"').addClass('active');
    current = next;
  }

  function setSlider(){
    interval = setInterval(function(){
      showNext(current+1);
    }, 2000);
  }

  function clearSlider(){
    clearInterval(interval);
  }

  var interval;
  var current = 0;

  setSlider();
  $('#banner').mouseover(clearSlider).mouseout(setSlider);

  $('#banner li').click(function(){
    var next = $(this).data('slider');
    showNext(next);
  });

  function slideNext(next){
    if (next > 2) next = 0;
    if (next < 0) next = 2;
    var left = -next * 100 + "%";
    $('.slide-wrapper').css('left', left);
    $('.client li.active').removeClass('active');
    $('.client li[data-slider="'+next+'"').addClass('active');
    current1 = next;        
  }

  function setSlider1(){
    interval1 = setInterval(function(){
      slideNext(current1+1);
    }, 3000);
  }

  function clearSlider1(){
    clearInterval(interval1);
  }

  var current1 = 0;
  var interval1;
  setSlider1();
  $(".client li").click(function(){
    var next = $(this).data('slider');
    slideNext(next);
  });
});
