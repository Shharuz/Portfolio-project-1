import '../style/normalize.css';
//import '../style/swiper-bundle.min.css';
import '../style/main.scss';
import '../style/aboutUs.scss';
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
import './allScripts/animAboutUsSock.js';
//import './allScripts/sliderCertificates320.js';
///////////////////////////////////sliderCertificates320.js/////////////////////////////
export const slider = document.querySelector('.aboutUs-certificates__block');
slider.addEventListener("mousedown", e => import( /* webpackChunkName: "sliderCertificates320" */ './allScripts/sliderCertificates320.js').then(module => {
    const dragStart = module.dragStart;
    dragStart(e);
}))
////////////////////////////////////////////////////////////////////////////////////////
import './allScripts/buttonFormConsentCheck.js';
import './lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js';