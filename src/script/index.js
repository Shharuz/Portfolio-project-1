import '../style/normalize.css';
import '../style/swiper-bundle.min.css';
import '../style/main.scss';
import '../style/index.scss';
import './allScripts/animateHeaderSecondaryNav.js';//animation of the first visible elements/////////////////////////////////////////////////
const indexOfferSwiper = document.querySelector('.index-offer__swiper');
const indexOfferSwiperitems = indexOfferSwiper.querySelectorAll('p, h3');
const indexOfferSwiperitemsBlockBuyA = indexOfferSwiper.querySelectorAll('.swiper-slide__items__block-buy a');
const indexOfferOnlineStore = document.querySelector('.index-offer__online-store');
const indexOfferOnlineStoreContent = indexOfferOnlineStore.querySelector('.index-offer__online-store__wrapper');
const onlineStoreLinks = document.querySelector('.links-online-store');
window.addEventListener('load', appearindexOffer)

function appearindexOffer() {
    indexOfferSwiper.classList.add('appearIndex-offer__swiper');
    indexOfferSwiperitems.forEach(item => {
        item.classList.add('appearIndexOfferSwiperitems');
    })
    indexOfferSwiperitemsBlockBuyA.forEach(item => {
        item.classList.add('appearIndexOfferSwiperItemsBlock-buyA');
    })
    indexOfferOnlineStoreContent.classList.add('appearIndex-offer__online-storeContent');
    onlineStoreLinks.classList.add('appearlinks-online-store');
};
////////////////////////////////////////////////////////////////////////////////////////////
import './allScripts/indexAnimationWithoutLib.js';
import './allScripts/SWIPERindex.js';
import './allScripts/buttonFormConsentCheck.js';
import './lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js';