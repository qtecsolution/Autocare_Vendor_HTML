var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".shopPageSlider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".happyClientsSlider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".recentlyDiscountedSlider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



// ----------------------------
var galleryThumbs = new Swiper(".gallery-thumbs", {
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 3,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: "vertical",
});

var galleryMain = new Swiper(".gallery-main", {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

galleryMain.on("slideChangeTransitionStart", function () {
  galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on("transitionStart", function () {
  galleryMain.slideTo(galleryThumbs.activeIndex);
});
