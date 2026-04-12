import Swiper from 'swiper';
import { Pagination, FreeMode, Thumbs, EffectFade } from 'swiper/modules';

const swiper = new Swiper('.card-product-description__wrapper-for-swiper__swiperNav', {
    modules: [Pagination, FreeMode],
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    breakpoints: {
        1: {
            direction: 'horizontal',
            spaceBetween: 4,
            slidesPerView: 3.5,
        },
        581: {
            direction: 'vertical',
            slidesPerView: 3.2,
            spaceBetween: 15,
        },

        735: {
            slidesPerView: 3.2,
        },


        1650: {
            slidesPerView: 3.5,
        },

        1800: {
            slidesPerView: 4,
        },
    },

});
const swiper1 = new Swiper('.card-product-description__wrapper-for-swiper__swiperImg', {
    modules: [EffectFade, Thumbs],
    spaceBetween: 10,
    effect: 'fade',
    thumbs: {
        swiper: swiper,
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
            slidesPerView: 1.8,
            spaceBetween: 8
        },
        // when window width is >= 480px
        580: {
            slidesPerView: 1.96,
            spaceBetween: 9
        },

        // when window width is >= 640px
        735: {
            slidesPerView: 2.6,
            spaceBetween: 17
        },

        1100: {
            slidesPerView: 2.8,
            spaceBetween: 20
        },
        1500: {
            slidesPerView: 4.04,
            spaceBetween: 20
        },

    },


});

const swiper3 = new Swiper('.allPageCard__swiperImg', {
    modules: [Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    pagination: {
        el: '.swiper-card__swiperImg-pagination',
        clickable: true
    },
});