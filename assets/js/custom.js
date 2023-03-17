$(function () {
  $(".brandslider").slick({
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".discover-slider").slick({
    centerMode: true,
    infinite: true,
    centerPadding: "220px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".goat-quote-slide").slick({
    centerMode: true,
    centerPadding: "220px",
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "140px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          centerPadding: "0",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".goatabuitem-cont").click(function () {
    ///$('.goatabu-cont-prt').removeClass('goatabu-open');
    $(this)
      .parents(".goatabu-item")
      .siblings()
      .find(".goatabu-cont-txt")
      .slideUp();
    //$(this).parents('.goatabu-item').siblings().find('.goatabu-cont-inner').removeClass('goatabu-open');
    $(this).find(".goatabu-cont-txt").slideToggle();
    $(this).toggleClass("goatabu-open");
  });
  $(".press-item").hide();
  $(".press-item").slice(0, 10).show();
  if ($(".press-item").length <= 10) {
    $(".load-more-button").css("display", "none");
  }
  $(".load-more-button").on("click", function (e) {
    e.preventDefault();
    $(".press-item:hidden").slice(0, 9).slideDown();
    if ($(".press-item:hidden").length == 0) {
      $(".load-more-button").css("display", "none");
    }
  });
  // if ($('.funded_section').hasClass('primary') === true || $('.funded_section').hasClass('secondary') === true ) {
  //   $('.funded_section').removeClass('uk-padding-remove-top');
  // }
  // if ($('.development_goals_section').hasClass('primary') === true || $('.development_goals_section').hasClass('secondary') === true ) {
  //   $('.award_section').removeClass('uk-padding-remove-top');
  // }
  // else {
  //   $('.award_section').addClass('uk-padding-remove-top');
  // }
  // if ($('.award_section').hasClass('primary') === true || $('.award_section').hasClass('secondary') === true ) {
  //   $('.award_section').removeClass('uk-padding-remove-top');
  //   $('.funded_section').removeClass('uk-padding-remove-top');
  // }
  let currentYear = new Date().getFullYear();
  $("#year").text(currentYear);
});

$(".slideshow").slick({
  autoplay: true,
  autoplaySpeed: 7000,
  infinite: true,
  speed: 600,
  cssEase: "linear",
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: true,
  swipeToSlide: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
});

$(".slideshow").on(
  "beforeChange",
  function (_, slick, currentSlide, nextSlide) {
    var CurrentSlideDom = $(slick.$slides.get(currentSlide));
    var NextSlideDom = $(slick.$slides.get(nextSlide));
    var top_of_element = $(".slideshow").offset().top;
    var bottom_of_element =
      $(".slideshow").offset().top + $(".slideshow").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    $(".carousel").slick("slickNext");

    if (
      bottom_of_screen > top_of_element &&
      top_of_screen < bottom_of_element
    ) {
      // Slider is visible
      // Pause the current slide
      let currSlideSrc = CurrentSlideDom.children("div").children("iframe");
      if (currSlideSrc.attr("src")) {
        currSlideSrc.attr(
          "src",
          currSlideSrc.attr("src").replaceAll("&autoplay=1", "")
        );
      }
      // Autoplay next slide
      let nextSlideSrc = NextSlideDom.children("div").children("iframe");
      if (nextSlideSrc.attr("src")) {
        nextSlideSrc.attr("src", nextSlideSrc.attr("src") + "&autoplay=1");
      }
    }
  }
);



$(".rf-slider-mobile").slick({
  autoplay: false,
  cssEase: "linear",
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: true,
  swipeToSlide: true,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
});
