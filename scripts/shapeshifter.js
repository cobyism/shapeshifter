$(document).on('click', '.controls a', false);

$(document).on('click', '.set-desktop, .set-mobile', function(event){
  $('.controls a').removeClass('selected');
  $(this).addClass('selected');
});

$(document).on('click', '.set-desktop', function(event) {
  $('.frame-wrapper')
    .removeClass('mobile')
    .removeClass('iphone-4')
    .removeClass('iphone-5')
    .removeClass('ipad')
    .addClass('desktop');
  $('.orientation-toggle').addClass('disabled')
});

$(document).on('click', '.set-mobile', function(event) {
  $('.frame-wrapper')
    .removeClass('desktop')
    .addClass('mobile');
  $('.orientation-toggle').removeClass('disabled')
});

$(document).on('click', '.set-iphone-4', function(event) {
  $('.frame-wrapper')
    .removeClass('iphone-5')
    .removeClass('ipad')
    .addClass('iphone-4');
});

$(document).on('click', '.set-iphone-5', function(event) {
  $('.frame-wrapper')
    .removeClass('iphone-4')
    .removeClass('ipad')
    .addClass('iphone-5');
});

$(document).on('click', '.set-ipad', function(event) {
  $('.frame-wrapper')
    .removeClass('iphone-4')
    .removeClass('iphone-5')
    .addClass('ipad');
});

$(document).on('click', '.orientation-toggle', function(event) {
  if (!$('.orientation-toggle').hasClass('disabled')){
    if ($('.frame-wrapper').hasClass('landscape')){
      $('.frame-wrapper').removeClass('landscape');
      $('.controls').removeClass('landscape');
    } else {
      $('.frame-wrapper').addClass('landscape');
      $('.controls').addClass('landscape');
    }
  }
});

$(document).ready(function(){
  if (window.location.origin != 'http://cobyism.com'){
    $('.frame').attr('src', '../');
  }
});

/* Keyboard shortcuts */

$(document).bind('keydown', 'alt+shift+u', function(){$('.set-desktop').click()});
$(document).bind('keydown', 'alt+shift+i', function(){$('.set-iphone-4').click()});
$(document).bind('keydown', 'alt+shift+o', function(){$('.set-iphone-5').click()});
$(document).bind('keydown', 'alt+shift+p', function(){$('.set-ipad').click()});
$(document).bind('keydown', 'alt+shift+l', function(){$('.orientation-toggle').click()});