$(document).ready(function () {
  // init carousal in 'events gallery' section in event page
  $(".events_gallery").owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    margin:20,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // init carousal in 'our VOLUNTEER' section in about page
  $(".team-carousal").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // init carousal in 'our blogs' section in home page
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // action - scroll to top button
  $(".scroll-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // show / hide - scroll to top button
  var scr = $(".scroll-to-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      scr.fadeIn();
    } else {
      scr.fadeOut();
    }
  });
});
