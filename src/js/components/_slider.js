// Слайдер Swiper
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
  slidesPerView: 2, //'auto',
  spaceBetween: 20,
  //direction: 'vertical',
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    520: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

console.log('On slider');
