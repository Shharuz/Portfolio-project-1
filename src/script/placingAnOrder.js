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
//import './allScripts/radioPerson.js';
/////////////////////////////////radioPerson.js///////////////////////////////////////////
const radioPerson = document.querySelectorAll('.fieldset__item input[type="radio"]');
radioPerson.forEach( item => {
    item.addEventListener('change', e => import( /* webpackChunkName: "radioPerson" */ './allScripts/radioPerson.js').then(module => {
        const switching = module.switching;
        switching(item);
    }))
})
///////////////////////////////////////////////////////////////////////////////////////////////////
import './allScripts/buttonFormConsentCheck.js';
import './lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js';