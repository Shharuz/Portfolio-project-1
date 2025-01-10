const btnListDropDown = document.querySelector('.header__nav__burger-wrapper-for-line');
const navMainList = document.querySelector('.header__nav__main-list');
btnListDropDown.addEventListener('click', (e) => {
    if (document.documentElement.clientWidth <= 1083) {
        if (!e.target.classList.contains('cross')) {
            e.target.classList.add('cross');
            
            navMainList.classList.add('drop-down__header__nav__main-list');
            
        } else {
            e.target.classList.remove('cross')
            
            navMainList.classList.remove('drop-down__header__nav__main-list');
        }
    }
    console.log(document.documentElement.clientWidth);
});









/*
const btncatalogDropDown = document.querySelector('.header__nav__burger__go-to-catalog');
const catalogDropDownList = document.querySelector('.header__nav__burger_main-list');
const navMainListDropDownList = document.querySelector('.header__nav__main-list');
const arrowForGoToCatalogDropDown = document.querySelector('.for-go-to-catalog');


btnListDropDown.addEventListener('click', (e) => {
    if (document.documentElement.clientWidth <= 1103) {
        if (!e.target.classList.contains('cross')) {
            e.target.classList.add('cross');
            btncatalogDropDown.classList.add('drop-down-burger-go-to-catalog');
            navMainListDropDownList.classList.add('drop-down-nav__main-list');
            arrowForGoToCatalogDropDown.classList.add('drop-down-for-go-to-catalog');
        } else {
            e.target.classList.remove('cross')
             btncatalogDropDown.classList.remove('drop-down-burger-go-to-catalog');
            navMainListDropDownList.classList.remove('drop-down-nav__main-list');
            arrowForGoToCatalogDropDown.classList.remove('drop-down-for-go-to-catalog');
        }
    }
    console.log(document.documentElement.clientWidth);
});

mainFuncForOpenCloseList(btncatalogDropDown);
mainFuncForOpenCloseList(catalogDropDownList);

function mainFuncForOpenCloseList(par) {
    par.addEventListener('mouseover', () => {
        openCatalogDropDownList();

    });
    par.addEventListener('mouseleave', () => {
        closeCatalogDropDownList();

    });
}

function openCatalogDropDownList() {
    if (document.documentElement.clientWidth <= 1103 && document.documentElement.clientWidth >= 719) {
        catalogDropDownList.classList.add('display-burger_main-list')
    }
}

function closeCatalogDropDownList() {
    if (document.documentElement.clientWidth <= 1103 && document.documentElement.clientWidth >= 719) {
        catalogDropDownList.classList.remove('display-burger_main-list')
    }
}*/

