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

