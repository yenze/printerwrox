
// Slick Script initialize
$(document).ready(function(){
  $('.slickcarousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    accessiblity: true,
    fade: true,
    dots: true,
    pauseOnHover: false,
    appendArrows: $('.slickcarousel'),
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 1,
    infinite: true,
  });
  $('.reseller').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  });
});
