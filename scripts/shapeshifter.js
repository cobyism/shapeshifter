$(document).on('click', '.set-width', function(event) {
  $('.device-inner').css('width', $(this).attr('data-width')).css('height', $(this).attr('data-height'));
  $('.frame-wrapper').css('width', $(this).attr('data-width')).css('height', $(this).attr('data-height'));
  $('.selected').removeClass('selected');
  $(this).addClass('selected');
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

$(document).on('click', '.set-portrait', function(event) {
  $('.frame-wrapper').removeClass('landscape');
  return false;
});

$(document).on('click', '.set-landscape', function(event) {
  $('.frame-wrapper').addClass('landscape');
  return false;
});