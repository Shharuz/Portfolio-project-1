import '../style/normalize.css';
import '../style/swiper-bundle.min.css';
import '../style/main.scss';
import '../style/index.scss';
import './allScripts/animateHeaderSecondaryNav.js'; //animation of the first visible elements/////////////////////////////////////////////////
const indexOfferSwiper = document.querySelector('.index-offer__swiper');
const indexOfferSwiperitems = indexOfferSwiper.querySelectorAll('p, h3');
const indexOfferSwiperitemsBlockBuyA = indexOfferSwiper.querySelectorAll('.swiper-slide__items__block-buy a');
const indexOfferOnlineStore = document.querySelector('.index-offer__online-store');
const indexOfferOnlineStoreContent = indexOfferOnlineStore.querySelector('.index-offer__online-store__wrapper');
const onlineStoreLinks = document.querySelectorAll('.links-online-store a');
window.addEventListener('load', appearindexOffer)
window.addEventListener('resize', appearindexOffer)

function appearindexOffer() {
    indexOfferSwiper.classList.add('appearIndex-offer__swiper');
    indexOfferSwiperitems.forEach(item => {
        item.classList.add('appearIndexOfferSwiperitems');
    })
    indexOfferSwiperitemsBlockBuyA.forEach(item => {
        item.classList.add('appearIndexOfferSwiperItemsBlock-buyA');
    })
    indexOfferOnlineStore.classList.add('appearIndex-offer__online-store');
    indexOfferOnlineStoreContent.classList.add('appearIndex-offer__online-storeContent');
    onlineStoreLinks.forEach(item => {
        //console.log(item.offsetTop, indexOfferOnlineStore.offsetTop, window.innerHeight)
        //console.log(item.offsetTop - ( (window.innerHeight * 80) / 100 ) + indexOfferOnlineStore.offsetTop)
        // The appearlinks-online-store class is added/removed to avoid conflicts with indexAnimationWithoutLib.js
        if( window.innerWidth > 1400 ){
            item.classList.add('appearlinks-online-store');
        }else if(item.offsetTop - ( (window.innerHeight * 80) / 100 ) + indexOfferOnlineStore.offsetTop < window.innerHeight) {
            item.classList.remove('appearlinks-online-store');
        } else {
             item.classList.add('appearlinks-online-store');
        }             
    })
};
////////////////////////////////////////////////////////////////////////////////////////////
import './allScripts/indexAnimationWithoutLib.js';
import './allScripts/SWIPERindex.js';
import './allScripts/buttonFormConsentCheck.js';
import './lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js';