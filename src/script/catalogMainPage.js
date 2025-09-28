import '../style/normalize.css';
import '../style/swiper-bundle.min.css';
import '../style/main.scss';
import '../style/catalogMainPage.scss';
import './allScripts/animateHeaderSecondaryNav.js';
//animation of the first visible elements/////////////////////////////////////////////////
const catalogMainPage = document.querySelector('.catalogMainPage');
const catalogCategories = catalogMainPage.querySelectorAll('.catalog-categories a');
window.addEventListener('load', appearcatalogMainPage)
function appearcatalogMainPage() {
    catalogMainPage.classList.add('appearcatalogMainPage')
    catalogCategories.forEach(item => {
     item.classList.add('appearcatalogCategories')
    })
};
////////////////////////////////////////////////////////////////////////////////////////////////////
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

import './allScripts/buttonFormConsentCheck.js';
import './lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js';