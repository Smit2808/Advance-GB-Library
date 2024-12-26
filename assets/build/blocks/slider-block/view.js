/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/blocks/slider-block/view.js ***!
  \*****************************************/
(function ($) {
  'use strict';

  const cardSliderWrp = [];
  $(document).ready(function () {
    // functions calls
    cardSlider();

    // resize functions calls
    $(window).on('resize', function () {
      cardSlider();
    });
  });
  function cardSlider() {
    $('.slider-section__slider-main').each(function (index) {
      const sliderMain = $(this);
      const autoplay = sliderMain.attr('data-slide-autoplay') || false;
      const arrows = sliderMain.attr('data-slide-arrows') || false;
      const dots = sliderMain.attr('data-slide-dots') || false;
      const loop = sliderMain.attr('data-slide-loop') || false;
      const sliderConfig = {
        autoplay: 'true' === autoplay ? true : false,
        autoplaySpeed: 5000,
        pauseOnHover: 'true' === autoplay ? true : false,
        dots: 'true' === dots ? true : false,
        infinite: 'true' === loop ? true : false,
        arrows: 'true' === arrows ? true : false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchMove: false,
        draggable: false,
        responsive: [{
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }]
      };
      if (cardSliderWrp[index]) {
        cardSliderWrp[index].slick('refresh');
      } else {
        cardSliderWrp[index] = sliderMain.slick(sliderConfig);
      }
    });
  }
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map