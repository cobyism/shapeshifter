$(document).on 'click', '.set-width', (event) ->
  $('.device-inner')
    .css('width', $(this).attr('data-width'))
    .css('height', $(this).attr('data-height'))
  $('.frame-wrapper')
    .css('width', $(this).attr('data-width'))
    .css('height', $(this).attr('data-height'))
  $('.selected').removeClass('selected')
  $(this).addClass('selected')
  false

$(document).on 'click', '.set-desktop', (event) ->
  $('.frame-wrapper')
    .removeClass('mobile')
    .removeClass('tablet')
    .addClass('desktop')
  false

$(document).on 'click', '.set-mobile', (event) ->
  $('.frame-wrapper')
    .removeClass('desktop')
    .removeClass('tablet')
    .addClass('mobile')
  false

$(document).on 'click', '.set-tablet', (event) ->
  $('.frame-wrapper')
    .removeClass('desktop')
    .removeClass('mobile')
    .addClass('tablet')
  false

$(document).on 'click', '.set-portrait', (event) ->
  $('.frame-wrapper').removeClass('landscape')
  false

$(document).on 'click', '.set-landscape', (event) ->
  $('.frame-wrapper').addClass('landscape')
  false