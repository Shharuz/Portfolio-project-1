import '../style/normalize.css';
import '../style/swiper-bundle.min.css';
import '../style/main.scss';
import '../style/howToBuy.scss';
import './allScripts/animateHeaderSecondaryNav.js';
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
import './allScripts/animation.js';
/////////////////////categoriesRadio.js/////////////////////
const itemsCategories = document.querySelectorAll('.forCategoryAllPages p'); //in the element with the class radio-category, all inputs of the radio type are taken
itemsCategories.forEach(item => {
    item.addEventListener('click', e => import( /* webpackChunkName: "categoriesRadio" */ './allScripts/categoriesRadio.js').then(module => {
        let eTarget = e.target;
        const highlightedElement = module.highlightedElement;
        highlightedElement(eTarget, itemsCategories);
    }))
});
///////////////////////////////////////////////////////////////
import './allScripts/buttonFormConsentCheck.js';
import './lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js';


