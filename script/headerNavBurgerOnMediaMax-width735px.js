const arrowOpenList = document.querySelectorAll('.arrow-rigth-wrapper');
arrowOpenList.forEach((item) => {
    item.addEventListener('click', () => {

        if (!item.nextElementSibling.classList.contains('open-list')) {
            item.nextElementSibling.classList.add('open-list')
        } else {
            item.nextElementSibling.classList.remove('open-list')
        };
        if (!item.classList.contains('arrow-rigth-wrapper-rotate')) {
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