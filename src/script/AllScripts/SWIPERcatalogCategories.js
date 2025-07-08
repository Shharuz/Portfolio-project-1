import Swiper from 'swiper';
import { Pagination} from 'swiper/modules';

const swiper3 = new Swiper('.allPageCard__swiperImg', {
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