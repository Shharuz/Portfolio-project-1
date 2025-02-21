//drop down header__nav__main-list__item__sub-list and header__nav__main-list__item__sub-list__item__last-list 
const arrowOpenList = document.querySelectorAll('.arrow-rigth-wrapper');
arrowOpenList.forEach((item) => {//when you click on the arrow a list drop down
    item.addEventListener('click', () => {

        if (!item.nextElementSibling.classList.contains('open-list')) {//it will be either header__nav__main-list__item__sub-list or a header__nav__main-list__item__sub-list__item__last-list
            item.nextElementSibling.classList.add('open-list')
        } else {
            item.nextElementSibling.classList.remove('open-list')
        };
        if (!item.classList.contains('arrow-rigth-wrapper-rotate')) {//spins by adding a class
            item.classList.add('arrow-rigth-wrapper-rotate')
        } else {
            item.classList.remove('arrow-rigth-wrapper-rotate')
        };
    });
});

/*const arrowOpenList = document.querySelectorAll('.arrow-rigth-wrapper');
const headerNavMainList = document.querySelector('.header__nav__main-list');
console.log(arrowOpenList);


arrowOpenList.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('for-go-to-catalog')) {
            if (!headerNavMainList.classList.contains('move-down-nav__main-list')) {
                headerNavMainList.classList.add('move-down-nav__main-list')
            } else {
                headerNavMainList.classList.remove('move-down-nav__main-list')
            };
            console.log(headerNavMainList);
        }

        if (!item.nextElementSibling.classList.contains('open-sub-list')) {
            item.nextElementSibling.classList.add('open-sub-list')
        } else {
            item.nextElementSibling.classList.remove('open-sub-list')
        };
        if (!item.classList.contains('arrow-rigth-wrapper-rotate')) {
            item.classList.add('arrow-rigth-wrapper-rotate')
        } else {
            item.classList.remove('arrow-rigth-wrapper-rotate')
        };
    });
});*/