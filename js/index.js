$('.btnNext').click(function () {
  $('.nav-pills > .active').next('li').find('a').trigger('click');
});

$('.btnPrevious').click(function () {
  $('.nav-pills > .active').prev('li').find('a').trigger('click');
});


$(document).ready(function () {
  $('.owl-carousel-basic').owlCarousel({
    margin: 0,
    loop: true,
    // autoplay: true,
    item: 4,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2,
        nav: false,
        margin: 50
      },
      1000: {
        items: 3
      }
    }
  });
});