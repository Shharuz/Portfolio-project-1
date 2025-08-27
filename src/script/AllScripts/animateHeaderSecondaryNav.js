const header = document.querySelector('header');
const secondNav = document.querySelector('.secondary-nav');

const indexOffer = document.querySelector('.index-offer');
const catalogMainPage = document.querySelector('.catalogMainPage');
const catalogCategories = document.querySelector('.catalogCategories');

if(indexOffer != null || catalogMainPage != null || catalogCategories != null){
     window.addEventListener('load', appearHeaderSecondNav)
}else{
     window.addEventListener('DOMContentLoaded', appearHeaderSecondNav)
}


function appearHeaderSecondNav() {
    header.classList.add('appearHeader');
    if(secondNav != null){
        secondNav.classList.add('appearSecondary-nav'); 
    }
};
