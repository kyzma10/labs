$(document).ready(function () {
  $('.slider > ul > li:gt(0)').hide();

  $('.slider__arrow-right > i').on('click', function() {
    
    $('.slider > ul > li:first')
    .fadeOut(500)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slider > ul');
  })
});
