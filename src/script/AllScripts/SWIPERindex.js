import Swiper from 'swiper';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

const swiper = new Swiper('.index-offer__swiper', {
    // Optional parameters
    modules: [Pagination, EffectFade, Autoplay],
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: "fade",
    noSwipingSelector: 'a',
    pagination: {
        el: '.index-offer__swiper__pagination',
        clickable: true,
    },
});

const swiper2 = new Swiper('.swiper-card', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4.04,
    spaceBetween: 20,
    watchSlidesProgress: true,
    noSwipingSelector: '.bg-accent_col-title-light',

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.2,
            spaceBetween: 5
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 1.96,
            spaceBetween: 9
        },

        // when window width is >= 640px
        800: {
            slidesPerView: 2.59,
            spaceBetween: 17
        },
        850: {
            slidesPerView: 2.822,
            spaceBetween: 17
        },
        1400: {
            slidesPerView: 2.822,
            spaceBetween: 17
        },
        1500: {
            slidesPerView: 4.04,
            spaceBetween: 20
        },

    },


});

const swiper3 = new Swiper('.swiper-card__swiperImg', {
    // Optional parameters
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    pagination: {
        el: '.swiper-card__swiperImg-pagination',
        clickable: true
    },
});

const swiper4 = new Swiper('.index-aboutUs__wrapper-forswiper__swiper-reviews', {
    // Optional parameters
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    //centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 35,
    watchSlidesProgress: true,
    noSwipingSelector: 'a',
    pagination: {
        el: '.index-aboutUs__wrapper-forswiper__swiper-reviews__pagination',
        clickable: true
    },

    breakpoints: {


        320: {
            slidesPerView: 0.77,
            spaceBetween: 10,
        },
        580: {
            slidesPerView: 0.89,
            spaceBetween: 10,
        },

        735: {
            slidesPerView: 0.91,
            spaceBetween: 35,
        },

        1100: {
            slidesPerView: 1,
            spaceBetween: 35,
        },
    },
});