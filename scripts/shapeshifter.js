$(document).on('click', '.set-width', function(event) {
  $('.frame-inner').css('width', $(this).attr('data-width')).css('height', $(this).attr('data-height'));
  $('.frame-wrapper').css('width', $(this).attr('data-width')).css('height', $(this).attr('data-height'));
  $('.selected').removeClass('selected');
  $(this).addClass('selected');
  if ($('.frame-wrapper').hasClass('landscape')){
    invertDimentions()
  }
  return false;
});

$(document).on('click', '.set-desktop', function(event) {
  $('.frame-wrapper').removeClass('mobile').removeClass('tablet').addClass('desktop');
  return false;
});

$(document).on('click', '.set-mobile', function(event) {
  $('.frame-wrapper').removeClass('desktop').removeClass('tablet').addClass('mobile');
  return false;
});

$(document).on('click', '.set-tablet', function(event) {
  $('.frame-wrapper').removeClass('desktop').removeClass('mobile').addClass('tablet');
  return false;
});

$(document).on('click', '.orientation-portrait', function(event) {
  $('.frame-wrapper').removeClass('landscape');
  $('.orientation-toggle')
    .addClass('orientation-landscape')
    .removeClass('orientation-portrait')
  invertDimentions()
  return false;
});

$(document).on('click', '.orientation-landscape', function(event) {
  $('.frame-wrapper').addClass('landscape');
  $('.orientation-toggle')
    .addClass('orientation-portrait')
    .removeClass('orientation-landscape')
  invertDimentions()
  return false;
});

$(document).ready(function(){
  if (window.location.pathname == '/'){
    $('.frame').attr('src', 'docs.html')
  }
});

invertDimentions = function(){
  $([$('.frame-inner'), $('.frame-wrapper')]).each(function(){
    width = $(this).css('width')
    height = $(this).css('height')
    $(this).css('width', height)
    $(this).css('height', width)
  });
}