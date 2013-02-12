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
  if (Modernizr.localstorage){
    localStorage.setItem('shapeshifter-device', 'desktop');
  }
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
  if (Modernizr.localstorage){
    localStorage.setItem('shapeshifter-device', 'iphone-4');
  }
});

$(document).on('click', '.set-iphone-5', function(event) {
  $('.frame-wrapper')
    .removeClass('iphone-4')
    .removeClass('ipad')
    .addClass('iphone-5');
  if (Modernizr.localstorage){
    localStorage.setItem('shapeshifter-device', 'iphone-5');
  }
});

$(document).on('click', '.set-ipad', function(event) {
  $('.frame-wrapper')
    .removeClass('iphone-4')
    .removeClass('iphone-5')
    .addClass('ipad');
  if (Modernizr.localstorage){
    localStorage.setItem('shapeshifter-device', 'ipad');
  }
});

$(document).on('click', '.orientation-toggle', function(event) {
  if (!$('.orientation-toggle').hasClass('disabled')){
    if ($('.frame-wrapper').hasClass('landscape')){
      $('.frame-wrapper').removeClass('landscape');
      $('.controls').removeClass('landscape');
      if (Modernizr.localstorage){
        localStorage.setItem('shapeshifter-orientation', 'portrait');
      }
    } else {
      $('.frame-wrapper').addClass('landscape');
      $('.controls').addClass('landscape');
      if (Modernizr.localstorage){
        localStorage.setItem('shapeshifter-orientation', 'landscape');
      }
    }
  }
});

$(document).on('click', '.set-location', function(event) {
  var url;
  url = prompt("Enter a new URL to browse to:");
  if (url.length > 0){
    $('.frame').attr('src', url);
  }
});

$(document).ready(function(){
  if (window.location.origin != 'http://cobyism.com'){
    $('.frame').attr('src', '../');
  }
  if (Modernizr.localstorage){
    device = localStorage.getItem('shapeshifter-device');
    orientation = localStorage.getItem('shapeshifter-orientation');
    $("body").removeClass('transitions');
    $(".set-" + device).click();
    if (orientation == "landscape"){
      $(".orientation-toggle").click();
    }
    $("body").addClass('transitions');
  }
});

/* Keyboard shortcuts */

$(document).bind('keydown', 'alt+shift+u', function(){$('.set-desktop').click()});
$(document).bind('keydown', 'alt+shift+i', function(){$('.set-iphone-4').click()});
$(document).bind('keydown', 'alt+shift+o', function(){$('.set-iphone-5').click()});
$(document).bind('keydown', 'alt+shift+p', function(){$('.set-ipad').click()});
$(document).bind('keydown', 'alt+shift+l', function(){$('.orientation-toggle').click()});
$(document).bind('keydown', 'alt+shift+g', function(){$('.set-location').click()});
