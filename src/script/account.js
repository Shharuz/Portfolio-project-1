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
/////////////////////categoriesRadio.js/////////////////////
const itemsCategories = document.querySelectorAll('.forCategoryAllPages p'); //in the element with the class radio-category, all inputs of the radio type are taken
itemsCategories.forEach(item => {
    item.addEventListener('click', e => import( /* webpackChunkName: "categoriesRadio" */ './allScripts/categoriesRadio.js').then(module => {
        let eTarget = e.target;
        const highlightedElement = module.highlightedElement;
        highlightedElement(eTarget, itemsCategories);
    }))
});
///////////////////////////////////////counter-goods.js////////////////////////////////////////////
const blockThatHasCounter = document.querySelectorAll('.block-that-has-counter');
blockThatHasCounter.forEach(item => {
    let incrementBtn = item.querySelector('.increment-btn');
    let decrementBtn = item.querySelector('.decrement-btn');
    let inputCount = item.querySelector('.counter-value');

    let price = item.querySelector('.price-relative-input'); //takes a string with a price that depends on the input
    let priceInitialValue = price.innerHTML.slice(0, -2); //takes the initial price before any actions with the counter

    //for card.html
    let discount;
    let priceInitDiscount;
    if (item.querySelector('sup')) { //check if element with sup tag exists
        discount = item.querySelector('sup'); //takes an element with the sup tag
        priceInitDiscount = discount.innerHTML.slice(0, -2); //takes the initial value of the old price before any actions with the counter
    }

    //for account.html
    let discAfterCount;
    let priceInitDiscAfterCount;
    if (item.querySelector('.disc span')) { //checks if there is an element with class disc that has span
        discAfterCount = item.querySelector('.disc span'); //takes an element with the span tag
        priceInitDiscAfterCount = discAfterCount.innerHTML.slice(0, -2); //takes the initial discount value before any actions are performed on the counter
    }

    //for account.html
    let tax;
    let priceInitTax;
    if (item.querySelector('.tax span')) { //checks if there is an element with class tax that has span
        tax = item.querySelector('.tax span'); //takes an element with the span tag
        priceInitTax = tax.innerHTML.slice(0, -2); //takes the initial tax value before any actions are performed on the counter
    }
    //console.log(incrementBtn)
    incrementBtn.addEventListener('click', e => import( /* webpackChunkName: "counter-goods" */ './allScripts/counter-goods.js').then(module => {
        const incrementCounter = module.incrementCounter;
        incrementCounter(inputCount, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax)
    }))
    decrementBtn.addEventListener('click', e => import( /* webpackChunkName: "counter-goods" */ './allScripts/counter-goods.js').then(module => {
        const decrementCounter = module.decrementCounter;
        decrementCounter(inputCount, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax)
    }))
    inputCount.addEventListener('input', e => import( /* webpackChunkName: "counter-goods" */ './allScripts/counter-goods.js').then(module => {
        const inputCounter = module.inputCounter;
        inputCounter(e, inputCount, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax)
    }))

})
///////////////////////////////////////////////////////////////////////////////////
//import './allScripts/workingWithFavoritesContent.js';
/////////////////////workingWithFavoritesContent.js/////////////////////

itemsCategories.forEach(item => {
    item.addEventListener('click', e => import( /* webpackChunkName: "workingWithFavoritesContent" */ './allScripts/workingWithFavoritesContent.js').then(module => {
        
    }))
});
///////////////////////////////////////counter-goods.js////////////////////////////////////////////
import './allScripts/buttonFormConsentCheck.js';
import './lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js';
