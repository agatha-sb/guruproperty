

// ************************************************* //
// * +++++++++++++ 02. Header sticky & navbar ++++++++++++++ * //
// ************************************************* //

$(window).on('scroll', function() {
  if($(this).scrollTop() > 800 ) {
    $(".asb19__header").addClass("fixed__header");
    $(".header-top").slideUp();
  } else {
    $(".asb19__header").removeClass("fixed__header");
    $(".header-top").slideDown();
  }
});

Fancybox.bind('[data-fancybox="asb19__listing--gallery"]', {});

$(document).ready(function(){
  if ($(window).width() > 991) {
    $(".asb19__header .nav-link.dropdown-toggle").removeAttr("data-bs-toggle");
  }
})

$(document).ready(function() {
  $('.asb19__listing--view-grid').click(function() {
    $('.asb19__listing--archive')
      .removeClass('asb19__listing--archive-list')
      .addClass('asb19__listing--archive-grid');
  });

  $('.asb19__listing--view-list').click(function() {
    $('.asb19__listing--archive')
      .removeClass('asb19__listing--archive-grid')
      .addClass('asb19__listing--archive-list');

  });
});

var agentsSwiper = new Swiper(".asb19__agents--swiper", {
  autoPlay: false,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-agentsSW",
    prevEl: ".swiper-button-prev-agentsSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});
var propertySwiper = new Swiper(".asb19__property--swiper", {
  autoPlay: false,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-agentsSW",
    prevEl: ".swiper-button-prev-agentsSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    }
  }
});
var testimonialSwiper = new Swiper(".asb19__testimonial--swiper", {
  autoPlay: false,
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-agentsSW",
    prevEl: ".swiper-button-prev-agentsSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    }
  }
});
var propertyThumbSwiper = new Swiper(".asb19__listDetails--thumb-swiper", {
  loop: true,
  spaceBetween: 15,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var propertyMainSwiper = new Swiper(".asb19__listDetails--main-swiper", {
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: propertyThumbSwiper,
  },
});

$('.popup-youtube').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: function (url) {
          var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
          if (!m || !m[1]) return null;
          return m[1];
        },
        src: '//www.youtube.com/embed/%id%?autoplay=1'
      },
      vimeo: {
        index: 'vimeo.com/',
        id: function (url) {
          var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
          if (!m || !m[5]) return null;
          return m[5];
        },
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
    }
  }
});
