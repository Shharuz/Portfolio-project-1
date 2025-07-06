//for account.html
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
    item.addEventListener('change', (e) => {//when item from collection masterCheckbox is checked, all other checkboxes are checked too
        if (e.target.checked) {
            if (e.target.id == 'master-checkbox-favirites') {//so that item from collection masterCheckbox checks only its inputs
                for (let item of inputsUnderMasterCheckboxFavor) {
                    item.checked = true;
                }
            } else {
                for (let item of inputsUnderMasterCheckboxBasket) {
                    item.checked = true;
                }

            }

        } else {
            if (e.target.id == 'master-checkbox-favirites') {
                for (let item of inputsUnderMasterCheckboxFavor) {
                    item.checked = false;
                }
            } else {
                for (let item of inputsUnderMasterCheckboxBasket) {
                    item.checked = false;
                }

            }

        }

    });

});

deleteSelected.forEach((item) => {
    item.addEventListener('click', (e) => {
        for (let item of inputsUnderMasterCheckbox) {//iterates over all inputs from the inputsUnderMasterCheckbox collection
            if (item.checked) {                      //checks for checked and if true removes the input's parent
                item.parentElement.parentElement.remove()
            };
        };
        countAllPrice();//on line 85

    });
});

clearFav.forEach((item) => {
    item.addEventListener('click', (e) => {//will simply remove all goods from favorites
        for (let item of inputsUnderMasterCheckboxFavor) {
            item.parentElement.parentElement.remove()
        };


    });
});

clearBas.forEach((item) => {
    item.addEventListener('click', (e) => {//will simply remove all goods from basket
        for (let item of inputsUnderMasterCheckboxBasket) {
            item.parentElement.parentElement.remove()
        };

        total.classList.add('hide')//counter-goods.js line 13
    });
});


basket.addEventListener('click', () => {//First on the account.html page, form - your-details is displayed, when clicking input (id = basket) it will start calculating the price
    countAllPrice();
});

function countAllPrice() {
    let allGoodsBasket = document.querySelectorAll('.account__basket .price-relative-input');

    if (allGoodsBasket.length == 0) { //if the products are deleted, then the block with the final price is also deleted
        total.classList.add('hide')//counter-goods.js line 13
    } else {
        let sumPrice = 0;
        for (let itemallGoodsBasket of allGoodsBasket) {//only the price of the product is taken (string), 
            sumPrice += Number(itemallGoodsBasket.innerHTML.slice(0, -2));//is converted to a number and added to sumPrice
        }
        totalPrice.innerHTML = sumPrice + " ₽"         //the sumPrice value is inserted into the block with the total amount of goods
        //counter-goods.js line 14
    }


}