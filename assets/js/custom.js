$(function() {

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
    infinite: true,
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
    infinite: true,
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
  $(".press-item").hide()
  $(".press-item").slice(0, 10).show()
  if($(".press-item").length <= 10) {
    $(".load-more-button").css("display", "none")
  }
  $(".load-more-button").on("click", function(e){
    e.preventDefault()
    $(".press-item:hidden").slice(0, 9).slideDown()
    if($(".press-item:hidden").length == 0) {
      $(".load-more-button").css("display", "none")
    }
  })
  if ($('.funded_section').hasClass('primary') === true || $('.funded_section').hasClass('secondary') === true ) {    
    $('.funded_section').removeClass('uk-padding-remove-top');
  }
  if ($('.development_goals_section').hasClass('primary') === true || $('.development_goals_section').hasClass('secondary') === true ) {    
    $('.award_section').removeClass('uk-padding-remove-top');
  }
  else {
    $('.award_section').addClass('uk-padding-remove-top');
  }
  if ($('.award_section').hasClass('primary') === true || $('.award_section').hasClass('secondary') === true ) {    
    $('.award_section').removeClass('uk-padding-remove-top');
    $('.funded_section').removeClass('uk-padding-remove-top');
  }
});