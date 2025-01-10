const itemCategoriesRadio = document.querySelectorAll('.radio-category input[type=radio]');
const collectionOfElementsForhideShow = document.querySelectorAll('[data-anchor]')

function resetCheked() {
    itemCategoriesRadio[0].checked = true;
    for (let i = 1; i < itemCategoriesRadio.length; i++) {
        itemCategoriesRadio[i].checked = false;
    }
}



itemCategoriesRadio.forEach((item) => {

    item.addEventListener('change', () => {
        for (let itemCollect of collectionOfElementsForhideShow) {
            itemCollect.classList.add('hide');
            if (item.id == 'all-blog') {
                itemCollect.classList.remove('hide');
            } else if (item.id == itemCollect.getAttribute('data-anchor')) {
                itemCollect.classList.remove('hide');
            }

        }
    });
});

if (itemCategoriesRadio[0].nextElementSibling.childNodes[2].tagName == 'SPAN') {

    let count = 0;
    for (let itemCollect of collectionOfElementsForhideShow) {
        count += (itemCollect.childNodes.length - 1) / 2
    }
    itemCategoriesRadio[0].nextElementSibling.childNodes[2].innerHTML = count;

    itemCategoriesRadio.forEach((item) => {
        for (let itemCollect of collectionOfElementsForhideShow) {
            if (item.id == itemCollect.getAttribute('data-anchor')) {
                item.nextElementSibling.childNodes[2].innerHTML = (itemCollect.childNodes.length - 1) / 2;
            };
        }
    });
};

function changeCheckedRadioBlog() {
    for (let item of itemCategoriesRadio) {
        if (item.id == window.location.href.split("?")[1]) {
            item.setAttribute('checked', 'checked');
            for (let itemCollect of collectionOfElementsForhideShow) {
                itemCollect.classList.add('hide');
                if (itemCollect.getAttribute('data-anchor') == window.location.href.split("?")[1]) {
                    itemCollect.classList.remove('hide');
                }
            }
        }

    }

};