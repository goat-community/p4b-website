
  $('.brandslider').slick({
    infinite: true,
slidesToShow: 5,
slidesToScroll: 1,

autoplay: true,
autoplaySpeed: 3000,
responsive: [
{
breakpoint: 1024,
settings: {
 slidesToShow: 4,
 slidesToScroll: 1,
}
},
{
breakpoint: 600,
settings: {
 slidesToShow: 2,
 slidesToScroll:1
}
}
]
});

$('.discover-slider').slick({
centerMode: true,
centerPadding: '220px',
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
responsive: [
{
breakpoint: 1200,
settings: {
 centerPadding: '100px',
 slidesToShow: 1
}
},
{
breakpoint: 700,
settings: {
 centerMode: false,
 centerPadding: '0',
 slidesToShow: 1
}
}
]
});			
$('.goat-quote-slide').slick({
  centerMode: true,
  centerPadding: '220px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        
        centerPadding: '140px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

$('.goatabuitem-cont').click(function(){
  ///$('.goatabu-cont-prt').removeClass('goatabu-open');
      $(this).parents('.goatabu-item').siblings().find('.goatabu-cont-txt').slideUp();
      //$(this).parents('.goatabu-item').siblings().find('.goatabu-cont-inner').removeClass('goatabu-open');
  $(this).find('.goatabu-cont-txt').slideToggle()
      $(this).toggleClass('goatabu-open');
});