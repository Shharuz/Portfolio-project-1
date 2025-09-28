import '../style/normalize.css';
import '../style/swiper-bundle.min.css';
import '../style/main.scss';
import '../style/catalogCategories.scss';
import './allScripts/animateHeaderSecondaryNav.js';
//animation of the first visible elements/////////////////////////////////////////////////
const catalogCategories = document.querySelectorAll('.forCategoryAllPages p');
const formfilter = document.querySelector('.filter__form');
const counterCardfilterTwo = document.querySelectorAll('.counter-card, .filterTwo');
window.addEventListener('load', appearcatalogCategories)

function appearcatalogCategories() {
    catalogCategories.forEach(item => {
        item.classList.add('appearCatagory')
    });
    formfilter.classList.add('appearfilterForm');
    counterCardfilterTwo.forEach(item => {
        item.classList.add('appearcounter-cardfilterTwo')
    });

};
//////////////////////////////////////////////////////////////////////////////////////////////////
import './allScripts/animation.js';
//////////////////////////secondaryNavArrowLinks580.js//////////////////////////
if (window.innerWidth <= 580) {
    document.addEventListener("DOMContentLoaded", e => import( /* webpackChunkName: "secondaryNavArrowLinks580" */ './allScripts/secondaryNavArrowLinks580.js').then(module => {
        const goToPreviousPage = module.goToPreviousPage;
        goToPreviousPage();
    }))

}
window.addEventListener("resize", e => import( /* webpackChunkName: "secondaryNavArrowLinks580" */ './allScripts/secondaryNavArrowLinks580.js').then(module => {
        const goToPreviousPage = module.goToPreviousPage;
        goToPreviousPage();
    }))
//////////////////////////////////////////////////////////////////////////////
///////////filtering when moving from the previous page////////////////////
window.addEventListener("load", e => import( /* webpackChunkName: "filteringCardsWhenMovingFromAnotherPage" */ './allScripts/filteringCardsWhenMovingFromAnotherPage.js').then(module => {
        
    }))
///////////////////lazy filter and sort/////////////////
const categorys = document.querySelectorAll('.forCategoryAllPages p'); //all categories
categorys.forEach(category => {
    category.addEventListener('click', e => import( /* webpackChunkName: "FilterCategorys" */ './allScripts/FilterCategorys.js').then(module => {
        
        const filterCard = module.filterCard;
        filterCard(e)
    }))
});
///////////dropDownManufactWeightPrice////////////////////////
const wrapperArrowSvgManufactWeight = document.querySelectorAll('form .wrapperForSvgFilter');

wrapperArrowSvgManufactWeight.forEach( (wrapperSvg) =>{//starts hideFilter() on click svg
    
    wrapperSvg.addEventListener('click', e => import( /* webpackChunkName: "dropDownManufactWeightPrice" */ './allScripts/dropDownManufactWeightPrice.js').then(module => {
       const hideFilter = module.hideFilter;
        hideFilter(e)
    }))
    ///////////price-range////////////////////////
    wrapperSvg.addEventListener('click', e => import( /* webpackChunkName: "price-range" */ './allScripts/price-range.js').then(module => {
      
    }))
} );
//less than 1400 / modalFilter.js
const openFilter = document.querySelector(".bth-filter");
 openFilter.addEventListener('click', e => import( /* webpackChunkName: "modalFilter" */ './allScripts/modalFilter.js').then(module => {
       const openFilterModal = module.openFilterModal;
        openFilterModal()
    }))

import './allScripts/SWIPERcatalogCategories.js';
import './allScripts/buttonFormConsentCheck.js';
import './lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js';