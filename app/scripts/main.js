/* global jQuery */
jQuery(document).ready(function (e) {
  jQuery('#background-slider').slick({
    arrows: false,
    draggable: false,
    swipeToSlide: false
  })
  jQuery('#content-slider').slick({
    asNavFor: '#background-slider',
    fade: true,
    prevArrow: '<button type="button" class="btn btn-primary slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="btn btn-primary slick-next"><i class="fa fa-angle-right"></i></button>'
  })
})
