const masterCheckbox = document.querySelectorAll('[data-for-change-content="master-checkbox"]');
const addSelected = document.querySelector('[data-for-change-content="add-selected-to-shopping-cart"]');
const deleteSelected = document.querySelectorAll('[data-for-change-content="delete-selected"]');
const clearFav = document.querySelectorAll('[data-for-change-content="clear-favorites"]');
const clearBas = document.querySelectorAll('[data-for-change-content="clear-basket"]');
const inputsUnderMasterCheckbox = document.querySelectorAll('.account__content__product input[type=checkbox]');
const inputsUnderMasterCheckboxFavor = document.querySelectorAll('.account__favorites .account__content__product input[type=checkbox]');
const inputsUnderMasterCheckboxBasket = document.querySelectorAll('.account__basket .account__content__product input[type=checkbox]');
const basket = document.querySelector('#basket');





masterCheckbox.forEach((item) => {
    item.addEventListener('change', (e) => {
        if (e.target.checked) {
            for (let item of inputsUnderMasterCheckbox) {
                item.checked = true;
            }
        } else {
            for (let item of inputsUnderMasterCheckbox) {
                item.checked = false;
            }
        }

    });
});

deleteSelected.forEach((item) => {
    item.addEventListener('click', (e) => {
        for (let item of inputsUnderMasterCheckbox) {
            if (item.checked) {
                item.parentElement.parentElement.remove()
            };
        };
        countAllPrice();

    });
});

clearFav.forEach((item) => {
    item.addEventListener('click', (e) => {
        for (let item of inputsUnderMasterCheckboxFavor) {
            item.parentElement.parentElement.remove()
        };

        
    });
});

clearBas.forEach((item) => {
    item.addEventListener('click', (e) => {
        for (let item of inputsUnderMasterCheckboxBasket) {
            item.parentElement.parentElement.remove()
        };

        total.classList.add('hide')
    });
});


basket.addEventListener('click', () => {
    countAllPrice();
});

function countAllPrice() {
    let allGoodsBasket = document.querySelectorAll('.account__basket .price-relative-input');
    
    if (allGoodsBasket.length == 0) {
        total.classList.add('hide')
    } else {
        let sumPrice = 0;
        for (let itemallGoodsBasket of allGoodsBasket) {
            sumPrice += Number(itemallGoodsBasket.innerHTML.slice(0, -2));
        }
        totalPrice.innerHTML = sumPrice + " ₽"
    }


}