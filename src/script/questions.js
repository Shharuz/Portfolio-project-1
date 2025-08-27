import './allScripts/animateHeaderSecondaryNav.js';
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
import './allScripts/categoriesRadioCount.js';
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
/////////////////////categoriesRadioCount.js/////////////////////
document.addEventListener("DOMContentLoaded", e => import( /* webpackChunkName: "categoriesRadioCount" */ './allScripts/categoriesRadioCount.js').then(module => {
        const countCategories = module.countCategories;
        countCategories(itemsCategories);
    }))
///////////////////////////////////////////////////////////////
/////////////////////questionsDropDown.js/////////////////////
const svgDropDown = document.querySelectorAll('.questions__question-and-answer__item svg');
svgDropDown.forEach(item => {
    item.addEventListener('click', e => import( /* webpackChunkName: "questionsDropDown" */ './allScripts/questionsDropDown.js').then(module => {
        const questionsDropDown = module.questionsDropDown;
        questionsDropDown(item);
    }))
});
///////////////////////////////////////////////////////////////
import './allScripts/buttonFormConsentCheck.js';
import './lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js';