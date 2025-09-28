"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["counter-goods"],{

/***/ "./src/script/allScripts/counter-goods.js":
/*!************************************************!*\
  !*** ./src/script/allScripts/counter-goods.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decrementCounter: () => (/* binding */ decrementCounter),
/* harmony export */   incrementCounter: () => (/* binding */ incrementCounter),
/* harmony export */   inputCounter: () => (/* binding */ inputCounter),
/* harmony export */   total: () => (/* binding */ total),
/* harmony export */   totalPrice: () => (/* binding */ totalPrice)
/* harmony export */ });
//for account.html and card.html

//const blockThatHasCounter = document.querySelectorAll('.block-that-has-counter');
let allGoodsBasket;
let total;
let totalPrice;
let additionalInfoCounter;


//for account.html
if (document.querySelector('.account__basket')) {
    allGoodsBasket = document.querySelectorAll('.account__basket .price-relative-input'); //the price is taken relative to the input
    total = document.querySelector('.account__total'); //a block is taken in which there is an element with a total price
    totalPrice = document.querySelector('.account__total .price'); //the total price is taken
}

/*blockThatHasCounter.forEach(item => {
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
    incrementBtn.addEventListener('click', () => incrementCounter(inputCount, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax));
    decrementBtn.addEventListener('click', () => decrementCounter(inputCount, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax));
    inputCount.addEventListener('input', (e) => inputCounter(e, inputCount, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax));

})*/

function incrementCounter(inputCount, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax) {

    let inputValue = Number(inputCount.value); //takes the string value of the input and converts it to a number
    let increaseInputValue = ++inputValue; //the variable will be needed to work with discount and price
    inputCount.value = increaseInputValue;

    changePrice(increaseInputValue, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax); //transition to 109

    //for account.html
    growInput(increaseInputValue, inputCount); //transition to 129

    //for account.html
    if (item.nextElementSibling.classList.contains('additional-info-counter')) {
        additionalInfoCounter = item.nextElementSibling;
        countTheBoxes(increaseInputValue); //transition to 142

    };
    if (document.querySelector('.account__basket')) {
        countAllPrice(); //transition to 150
    }
}

function decrementCounter(inputCount, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax) {
    //everything is exactly the same as in incrementBtn.addEventListener('click'...
    let inputValue = Number(inputCount.value);
    let decreaseInputValue = --inputValue;
    if (decreaseInputValue >= 1) { //prevents the counter from going negative
        inputCount.value = decreaseInputValue;

        changePrice(decreaseInputValue, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax); //transition to 109

        growInput(decreaseInputValue, inputCount); //transition to 129

        if (item.nextElementSibling.classList.contains('additional-info-counter')) {
            additionalInfoCounter = item.nextElementSibling;
            countTheBoxes(decreaseInputValue); //transition to 142
        }

    }
    if (document.querySelector('.account__basket')) {
        countAllPrice(); //transition to 150
    }
}

function inputCounter(e, inputCount, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax) {
    
    e.target.value = e.target.value.replace(/\D/g, ""); //You can only enter numbers
    //everything is exactly the same as in incrementBtn.addEventListener('click'...
    changePrice(e.target.value, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax); //transition to 109
    growInput(Number(e.target.value), inputCount); //transition to 129

    if (item.nextElementSibling.classList.contains('additional-info-counter')) {
        additionalInfoCounter = item.nextElementSibling;
        countTheBoxes(e.target.value); //transition to 142
    };
    if (document.querySelector('.account__basket')) {
        countAllPrice(); //transition to 150
    }
}

function changePrice(increaseInputValue, item, price, priceInitialValue, discount, priceInitDiscount, discAfterCount, priceInitDiscAfterCount, tax, priceInitTax) {
    price.innerHTML = (priceInitialValue * increaseInputValue) + ' ₽'; //the initial price value is multiplied by the counter value

    //for card.html
    if (item.querySelector('sup')) {
        discount.innerHTML = (priceInitDiscount * increaseInputValue) + ' ₽'; //the principle is the same as with price.innerHTML (see above)
    }

    //for account.html
    if (item.querySelector('.disc span')) {
        discAfterCount.innerHTML = (priceInitDiscAfterCount * increaseInputValue) + ' ₽'; //the principle is the same as with price.innerHTML (see above)
    }

    //for account.html
    if (item.querySelector('.tax span')) {
        tax.innerHTML = (priceInitTax * increaseInputValue) + ' ₽'; //the principle is the same as with price.innerHTML (see above)
    }

}

function growInput(par, inputCount) { //It is necessary that the input box increases or decreases relative to the number of digits
    if (par >= 10 && par < 100) { //if input value is >= 10 and < 100, will give the corresponding class to the element to extend the input
        inputCount.classList.remove('counter-value100')
        inputCount.classList.add('counter-value10')
    } else if (par >= 100 && par <= 1000) {

        inputCount.classList.add('counter-value100')
    } else {
        inputCount.classList.remove('counter-value10') //will decrease the width of the input if the value of the input decreases
        inputCount.classList.remove('counter-value100')
    }
}
//for account.html
function countTheBoxes(par) {
    if (Math.floor(par / 10) > 0) { //increaseInputValue divide by 10 and round down
        additionalInfoCounter.innerHTML = Math.floor(par / 10) + ' кор.'
    } else {
        additionalInfoCounter.innerHTML = ''; //
    };
}
//for account.html
function countAllPrice() {
    let sumPrice = 0;
    for (let itemallGoodsBasket of allGoodsBasket) { //each item takes a string with a price, cuts it, converts it to a number, 
        sumPrice += Number(itemallGoodsBasket.innerHTML.slice(0, -2)); //and adds this number to the value of the sumPrice variable  
    }

    totalPrice.innerHTML = sumPrice + " ₽"
}


/*const incrementBtn = document.querySelectorAll('.increment-btn');
const decrementBtn = document.querySelectorAll('.decrement-btn');
const allInputCount = document.querySelectorAll('.counter-value');


incrementBtn.forEach((item) => {

    let priceInitialValue = createPriceInitialValue(item);

    let priceDiscInitialValue;
    if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
        priceDiscInitialValue = createPriceDiscInitialValue(item)
    };

    let priceDiscAfterCountInitialValue;
    if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
        priceDiscAfterCountInitialValue = createPriceDiscAfterCountInitialValue(item);
    }
    console.log(item.parentElement.parentElement.childNodes[9])

    let taxInitialValue;
    if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
        taxInitialValue = createTaxInitialValue(item)
    }


    item.addEventListener('click', () => {

        let inputValue = Number(item.previousElementSibling.value);
        let increaseInputValue = ++inputValue;
        item.previousElementSibling.value = increaseInputValue;
        item.parentElement.parentElement.childNodes[3].innerHTML = (priceInitialValue * increaseInputValue) + ' ₽';

        if (item.parentElement.parentElement.nextElementSibling != null) {
            if (item.parentElement.parentElement.nextElementSibling.classList.contains('additionalCounterInfo')) {
                if (Math.floor(increaseInputValue / 10) > 0) {
                    item.parentElement.parentElement.nextElementSibling.innerHTML = Math.floor(increaseInputValue / 10) + ' кор.'
                } else {
                    item.parentElement.parentElement.nextElementSibling.innerHTML = '';
                }
            }

        }

        if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
            item.parentElement.parentElement.childNodes[5].innerHTML = (priceDiscInitialValue * increaseInputValue) + ' ₽';
        }

        if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
            item.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML = (priceDiscAfterCountInitialValue * increaseInputValue) + ' ₽';
        }

        if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
            item.parentElement.parentElement.childNodes[11].childNodes[1].innerHTML = (taxInitialValue * increaseInputValue) + ' ₽';
        }


    });
});

decrementBtn.forEach((item) => {

    let priceInitialValue = createPriceInitialValue(item);

    let priceDiscInitialValue;
    if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
        priceDiscInitialValue = createPriceDiscInitialValue(item)
    };

    let priceDiscAfterCountInitialValue;
    if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
        priceDiscAfterCountInitialValue = createPriceDiscAfterCountInitialValue(item);
    }

    let taxInitialValue;
    if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
        taxInitialValue = createTaxInitialValue(item)
    }


    item.addEventListener('click', () => {
        let inputValue = Number(item.nextElementSibling.value);
        let decreaseInputValue = --inputValue
        if (decreaseInputValue >= 1) {
            item.nextElementSibling.value = decreaseInputValue;
            item.parentElement.parentElement.childNodes[3].innerHTML = (priceInitialValue * decreaseInputValue) + ' ₽';


            if (item.parentElement.parentElement.nextElementSibling != null) {
                if (item.parentElement.parentElement.nextElementSibling.classList.contains('additionalCounterInfo')) {
                    if (Math.floor(decreaseInputValue / 10) > 0) {
                        item.parentElement.parentElement.nextElementSibling.innerHTML = Math.floor(decreaseInputValue / 10) + ' кор.'
                    } else {
                        item.parentElement.parentElement.nextElementSibling.innerHTML = '';
                    }
                }

            }


            if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
                item.parentElement.parentElement.childNodes[5].innerHTML = (priceDiscInitialValue * decreaseInputValue) + ' ₽';
            }

            if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
                item.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML = (priceDiscAfterCountInitialValue * decreaseInputValue) + ' ₽';
            }

            if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
                item.parentElement.parentElement.childNodes[11].childNodes[1].innerHTML = (taxInitialValue * decreaseInputValue) + ' ₽';
            }
        }

    });
});



allInputCount.forEach((item) => {

    let priceInitialValue = createPriceInitialValue(item);

    let priceDiscInitialValue;
    if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
        priceDiscInitialValue = createPriceDiscInitialValue(item)
    };

    let priceDiscAfterCountInitialValue;
    if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
        priceDiscAfterCountInitialValue = createPriceDiscAfterCountInitialValue(item);
    }

    let taxInitialValue;
    if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
        taxInitialValue = createTaxInitialValue(item)
    }


    item.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/\D/g, "");
        if (!isNaN(e.target.value)) {
            
            item.parentElement.parentElement.childNodes[3].innerHTML = priceInitialValue * e.target.value + ' ₽';

            if (item.parentElement.parentElement.nextElementSibling != null) {
                if (item.parentElement.parentElement.nextElementSibling.classList.contains('additionalCounterInfo')) {
                    if (Math.floor(e.target.value / 10) > 0) {
                        item.parentElement.parentElement.nextElementSibling.innerHTML = Math.floor(e.target.value / 10) + ' кор.'
                    } else {
                        item.parentElement.parentElement.nextElementSibling.innerHTML = '';
                    }
                }

            }

            if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
                item.parentElement.parentElement.childNodes[5].innerHTML = priceDiscInitialValue * e.target.value + ' ₽';
            }

            if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
                item.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML = priceDiscAfterCountInitialValue * e.target.value + ' ₽';
            }

            if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
                item.parentElement.parentElement.childNodes[11].childNodes[1].innerHTML = taxInitialValue * e.target.value + ' ₽';
            }
            if (Number(e.target.value) >= 10 && Number(e.target.value) < 100) {
                item.classList.remove('counter-value100')
                item.classList.add('counter-value10')
            } else if (Number(e.target.value) >= 100 && Number(e.target.value) <= 1000) {

                item.classList.add('counter-value100')
            } else {
                item.classList.remove('counter-value10')
                item.classList.remove('counter-value100')
            }
        }






    });
});




function createPriceInitialValue(par) {

    let initialValue = Number(par.parentElement.parentElement.childNodes[3].innerHTML.slice(0, -2));

    return initialValue;

};

function createPriceDiscInitialValue(par) {

    let pricinitialValue = Number(par.parentElement.parentElement.childNodes[5].innerHTML.slice(0, -2));

    return pricinitialValue;

};


function createPriceDiscAfterCountInitialValue(par) {

    let initialValue = par.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML.slice(0, -2);

    return initialValue;

};


function createTaxInitialValue(par) {

    let initialValue = par.parentElement.parentElement.childNodes[11].childNodes[1].innerHTML.slice(0, -2);

    return initialValue;

};*/

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2NvdW50ZXItZ29vZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9mb3IgYWNjb3VudC5odG1sIGFuZCBjYXJkLmh0bWxcclxuXHJcbi8vY29uc3QgYmxvY2tUaGF0SGFzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9jay10aGF0LWhhcy1jb3VudGVyJyk7XHJcbmxldCBhbGxHb29kc0Jhc2tldDtcclxuZXhwb3J0IGxldCB0b3RhbDtcclxuZXhwb3J0IGxldCB0b3RhbFByaWNlO1xyXG5sZXQgYWRkaXRpb25hbEluZm9Db3VudGVyO1xyXG5cclxuXHJcbi8vZm9yIGFjY291bnQuaHRtbFxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2Jhc2tldCcpKSB7XHJcbiAgICBhbGxHb29kc0Jhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50X19iYXNrZXQgLnByaWNlLXJlbGF0aXZlLWlucHV0Jyk7IC8vdGhlIHByaWNlIGlzIHRha2VuIHJlbGF0aXZlIHRvIHRoZSBpbnB1dFxyXG4gICAgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fdG90YWwnKTsgLy9hIGJsb2NrIGlzIHRha2VuIGluIHdoaWNoIHRoZXJlIGlzIGFuIGVsZW1lbnQgd2l0aCBhIHRvdGFsIHByaWNlXHJcbiAgICB0b3RhbFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX3RvdGFsIC5wcmljZScpOyAvL3RoZSB0b3RhbCBwcmljZSBpcyB0YWtlblxyXG59XHJcblxyXG4vKmJsb2NrVGhhdEhhc0NvdW50ZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGxldCBpbmNyZW1lbnRCdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmNyZW1lbnQtYnRuJyk7XHJcbiAgICBsZXQgZGVjcmVtZW50QnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZGVjcmVtZW50LWJ0bicpO1xyXG4gICAgbGV0IGlucHV0Q291bnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyLXZhbHVlJyk7XHJcblxyXG4gICAgbGV0IHByaWNlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJpY2UtcmVsYXRpdmUtaW5wdXQnKTsgLy90YWtlcyBhIHN0cmluZyB3aXRoIGEgcHJpY2UgdGhhdCBkZXBlbmRzIG9uIHRoZSBpbnB1dFxyXG4gICAgbGV0IHByaWNlSW5pdGlhbFZhbHVlID0gcHJpY2UuaW5uZXJIVE1MLnNsaWNlKDAsIC0yKTsgLy90YWtlcyB0aGUgaW5pdGlhbCBwcmljZSBiZWZvcmUgYW55IGFjdGlvbnMgd2l0aCB0aGUgY291bnRlclxyXG5cclxuICAgIC8vZm9yIGNhcmQuaHRtbFxyXG4gICAgbGV0IGRpc2NvdW50O1xyXG4gICAgbGV0IHByaWNlSW5pdERpc2NvdW50O1xyXG4gICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3Rvcignc3VwJykpIHsgLy9jaGVjayBpZiBlbGVtZW50IHdpdGggc3VwIHRhZyBleGlzdHNcclxuICAgICAgICBkaXNjb3VudCA9IGl0ZW0ucXVlcnlTZWxlY3Rvcignc3VwJyk7IC8vdGFrZXMgYW4gZWxlbWVudCB3aXRoIHRoZSBzdXAgdGFnXHJcbiAgICAgICAgcHJpY2VJbml0RGlzY291bnQgPSBkaXNjb3VudC5pbm5lckhUTUwuc2xpY2UoMCwgLTIpOyAvL3Rha2VzIHRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBvbGQgcHJpY2UgYmVmb3JlIGFueSBhY3Rpb25zIHdpdGggdGhlIGNvdW50ZXJcclxuICAgIH1cclxuXHJcbiAgICAvL2ZvciBhY2NvdW50Lmh0bWxcclxuICAgIGxldCBkaXNjQWZ0ZXJDb3VudDtcclxuICAgIGxldCBwcmljZUluaXREaXNjQWZ0ZXJDb3VudDtcclxuICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kaXNjIHNwYW4nKSkgeyAvL2NoZWNrcyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IHdpdGggY2xhc3MgZGlzYyB0aGF0IGhhcyBzcGFuXHJcbiAgICAgICAgZGlzY0FmdGVyQ291bnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kaXNjIHNwYW4nKTsgLy90YWtlcyBhbiBlbGVtZW50IHdpdGggdGhlIHNwYW4gdGFnXHJcbiAgICAgICAgcHJpY2VJbml0RGlzY0FmdGVyQ291bnQgPSBkaXNjQWZ0ZXJDb3VudC5pbm5lckhUTUwuc2xpY2UoMCwgLTIpOyAvL3Rha2VzIHRoZSBpbml0aWFsIGRpc2NvdW50IHZhbHVlIGJlZm9yZSBhbnkgYWN0aW9ucyBhcmUgcGVyZm9ybWVkIG9uIHRoZSBjb3VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgLy9mb3IgYWNjb3VudC5odG1sXHJcbiAgICBsZXQgdGF4O1xyXG4gICAgbGV0IHByaWNlSW5pdFRheDtcclxuICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy50YXggc3BhbicpKSB7IC8vY2hlY2tzIGlmIHRoZXJlIGlzIGFuIGVsZW1lbnQgd2l0aCBjbGFzcyB0YXggdGhhdCBoYXMgc3BhblxyXG4gICAgICAgIHRheCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnRheCBzcGFuJyk7IC8vdGFrZXMgYW4gZWxlbWVudCB3aXRoIHRoZSBzcGFuIHRhZ1xyXG4gICAgICAgIHByaWNlSW5pdFRheCA9IHRheC5pbm5lckhUTUwuc2xpY2UoMCwgLTIpOyAvL3Rha2VzIHRoZSBpbml0aWFsIHRheCB2YWx1ZSBiZWZvcmUgYW55IGFjdGlvbnMgYXJlIHBlcmZvcm1lZCBvbiB0aGUgY291bnRlclxyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhpbmNyZW1lbnRCdG4pXHJcbiAgICBpbmNyZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBpbmNyZW1lbnRDb3VudGVyKGlucHV0Q291bnQsIGl0ZW0sIHByaWNlLCBwcmljZUluaXRpYWxWYWx1ZSwgZGlzY291bnQsIHByaWNlSW5pdERpc2NvdW50LCBkaXNjQWZ0ZXJDb3VudCwgcHJpY2VJbml0RGlzY0FmdGVyQ291bnQsIHRheCwgcHJpY2VJbml0VGF4KSk7XHJcbiAgICBkZWNyZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkZWNyZW1lbnRDb3VudGVyKGlucHV0Q291bnQsIGl0ZW0sIHByaWNlLCBwcmljZUluaXRpYWxWYWx1ZSwgZGlzY291bnQsIHByaWNlSW5pdERpc2NvdW50LCBkaXNjQWZ0ZXJDb3VudCwgcHJpY2VJbml0RGlzY0FmdGVyQ291bnQsIHRheCwgcHJpY2VJbml0VGF4KSk7XHJcbiAgICBpbnB1dENvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IGlucHV0Q291bnRlcihlLCBpbnB1dENvdW50LCBpdGVtLCBwcmljZSwgcHJpY2VJbml0aWFsVmFsdWUsIGRpc2NvdW50LCBwcmljZUluaXREaXNjb3VudCwgZGlzY0FmdGVyQ291bnQsIHByaWNlSW5pdERpc2NBZnRlckNvdW50LCB0YXgsIHByaWNlSW5pdFRheCkpO1xyXG5cclxufSkqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoaW5wdXRDb3VudCwgaXRlbSwgcHJpY2UsIHByaWNlSW5pdGlhbFZhbHVlLCBkaXNjb3VudCwgcHJpY2VJbml0RGlzY291bnQsIGRpc2NBZnRlckNvdW50LCBwcmljZUluaXREaXNjQWZ0ZXJDb3VudCwgdGF4LCBwcmljZUluaXRUYXgpIHtcclxuXHJcbiAgICBsZXQgaW5wdXRWYWx1ZSA9IE51bWJlcihpbnB1dENvdW50LnZhbHVlKTsgLy90YWtlcyB0aGUgc3RyaW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBhbmQgY29udmVydHMgaXQgdG8gYSBudW1iZXJcclxuICAgIGxldCBpbmNyZWFzZUlucHV0VmFsdWUgPSArK2lucHV0VmFsdWU7IC8vdGhlIHZhcmlhYmxlIHdpbGwgYmUgbmVlZGVkIHRvIHdvcmsgd2l0aCBkaXNjb3VudCBhbmQgcHJpY2VcclxuICAgIGlucHV0Q291bnQudmFsdWUgPSBpbmNyZWFzZUlucHV0VmFsdWU7XHJcblxyXG4gICAgY2hhbmdlUHJpY2UoaW5jcmVhc2VJbnB1dFZhbHVlLCBpdGVtLCBwcmljZSwgcHJpY2VJbml0aWFsVmFsdWUsIGRpc2NvdW50LCBwcmljZUluaXREaXNjb3VudCwgZGlzY0FmdGVyQ291bnQsIHByaWNlSW5pdERpc2NBZnRlckNvdW50LCB0YXgsIHByaWNlSW5pdFRheCk7IC8vdHJhbnNpdGlvbiB0byAxMDlcclxuXHJcbiAgICAvL2ZvciBhY2NvdW50Lmh0bWxcclxuICAgIGdyb3dJbnB1dChpbmNyZWFzZUlucHV0VmFsdWUsIGlucHV0Q291bnQpOyAvL3RyYW5zaXRpb24gdG8gMTI5XHJcblxyXG4gICAgLy9mb3IgYWNjb3VudC5odG1sXHJcbiAgICBpZiAoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRpdGlvbmFsLWluZm8tY291bnRlcicpKSB7XHJcbiAgICAgICAgYWRkaXRpb25hbEluZm9Db3VudGVyID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgY291bnRUaGVCb3hlcyhpbmNyZWFzZUlucHV0VmFsdWUpOyAvL3RyYW5zaXRpb24gdG8gMTQyXHJcblxyXG4gICAgfTtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYmFza2V0JykpIHtcclxuICAgICAgICBjb3VudEFsbFByaWNlKCk7IC8vdHJhbnNpdGlvbiB0byAxNTBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoaW5wdXRDb3VudCwgaXRlbSwgcHJpY2UsIHByaWNlSW5pdGlhbFZhbHVlLCBkaXNjb3VudCwgcHJpY2VJbml0RGlzY291bnQsIGRpc2NBZnRlckNvdW50LCBwcmljZUluaXREaXNjQWZ0ZXJDb3VudCwgdGF4LCBwcmljZUluaXRUYXgpIHtcclxuICAgIC8vZXZlcnl0aGluZyBpcyBleGFjdGx5IHRoZSBzYW1lIGFzIGluIGluY3JlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycuLi5cclxuICAgIGxldCBpbnB1dFZhbHVlID0gTnVtYmVyKGlucHV0Q291bnQudmFsdWUpO1xyXG4gICAgbGV0IGRlY3JlYXNlSW5wdXRWYWx1ZSA9IC0taW5wdXRWYWx1ZTtcclxuICAgIGlmIChkZWNyZWFzZUlucHV0VmFsdWUgPj0gMSkgeyAvL3ByZXZlbnRzIHRoZSBjb3VudGVyIGZyb20gZ29pbmcgbmVnYXRpdmVcclxuICAgICAgICBpbnB1dENvdW50LnZhbHVlID0gZGVjcmVhc2VJbnB1dFZhbHVlO1xyXG5cclxuICAgICAgICBjaGFuZ2VQcmljZShkZWNyZWFzZUlucHV0VmFsdWUsIGl0ZW0sIHByaWNlLCBwcmljZUluaXRpYWxWYWx1ZSwgZGlzY291bnQsIHByaWNlSW5pdERpc2NvdW50LCBkaXNjQWZ0ZXJDb3VudCwgcHJpY2VJbml0RGlzY0FmdGVyQ291bnQsIHRheCwgcHJpY2VJbml0VGF4KTsgLy90cmFuc2l0aW9uIHRvIDEwOVxyXG5cclxuICAgICAgICBncm93SW5wdXQoZGVjcmVhc2VJbnB1dFZhbHVlLCBpbnB1dENvdW50KTsgLy90cmFuc2l0aW9uIHRvIDEyOVxyXG5cclxuICAgICAgICBpZiAoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRpdGlvbmFsLWluZm8tY291bnRlcicpKSB7XHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxJbmZvQ291bnRlciA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBjb3VudFRoZUJveGVzKGRlY3JlYXNlSW5wdXRWYWx1ZSk7IC8vdHJhbnNpdGlvbiB0byAxNDJcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19iYXNrZXQnKSkge1xyXG4gICAgICAgIGNvdW50QWxsUHJpY2UoKTsgLy90cmFuc2l0aW9uIHRvIDE1MFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5wdXRDb3VudGVyKGUsIGlucHV0Q291bnQsIGl0ZW0sIHByaWNlLCBwcmljZUluaXRpYWxWYWx1ZSwgZGlzY291bnQsIHByaWNlSW5pdERpc2NvdW50LCBkaXNjQWZ0ZXJDb3VudCwgcHJpY2VJbml0RGlzY0FmdGVyQ291bnQsIHRheCwgcHJpY2VJbml0VGF4KSB7XHJcbiAgICBcclxuICAgIGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpOyAvL1lvdSBjYW4gb25seSBlbnRlciBudW1iZXJzXHJcbiAgICAvL2V2ZXJ5dGhpbmcgaXMgZXhhY3RseSB0aGUgc2FtZSBhcyBpbiBpbmNyZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLi4uXHJcbiAgICBjaGFuZ2VQcmljZShlLnRhcmdldC52YWx1ZSwgaXRlbSwgcHJpY2UsIHByaWNlSW5pdGlhbFZhbHVlLCBkaXNjb3VudCwgcHJpY2VJbml0RGlzY291bnQsIGRpc2NBZnRlckNvdW50LCBwcmljZUluaXREaXNjQWZ0ZXJDb3VudCwgdGF4LCBwcmljZUluaXRUYXgpOyAvL3RyYW5zaXRpb24gdG8gMTA5XHJcbiAgICBncm93SW5wdXQoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSwgaW5wdXRDb3VudCk7IC8vdHJhbnNpdGlvbiB0byAxMjlcclxuXHJcbiAgICBpZiAoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRpdGlvbmFsLWluZm8tY291bnRlcicpKSB7XHJcbiAgICAgICAgYWRkaXRpb25hbEluZm9Db3VudGVyID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgY291bnRUaGVCb3hlcyhlLnRhcmdldC52YWx1ZSk7IC8vdHJhbnNpdGlvbiB0byAxNDJcclxuICAgIH07XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2Jhc2tldCcpKSB7XHJcbiAgICAgICAgY291bnRBbGxQcmljZSgpOyAvL3RyYW5zaXRpb24gdG8gMTUwXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVByaWNlKGluY3JlYXNlSW5wdXRWYWx1ZSwgaXRlbSwgcHJpY2UsIHByaWNlSW5pdGlhbFZhbHVlLCBkaXNjb3VudCwgcHJpY2VJbml0RGlzY291bnQsIGRpc2NBZnRlckNvdW50LCBwcmljZUluaXREaXNjQWZ0ZXJDb3VudCwgdGF4LCBwcmljZUluaXRUYXgpIHtcclxuICAgIHByaWNlLmlubmVySFRNTCA9IChwcmljZUluaXRpYWxWYWx1ZSAqIGluY3JlYXNlSW5wdXRWYWx1ZSkgKyAnIOKCvSc7IC8vdGhlIGluaXRpYWwgcHJpY2UgdmFsdWUgaXMgbXVsdGlwbGllZCBieSB0aGUgY291bnRlciB2YWx1ZVxyXG5cclxuICAgIC8vZm9yIGNhcmQuaHRtbFxyXG4gICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3Rvcignc3VwJykpIHtcclxuICAgICAgICBkaXNjb3VudC5pbm5lckhUTUwgPSAocHJpY2VJbml0RGlzY291bnQgKiBpbmNyZWFzZUlucHV0VmFsdWUpICsgJyDigr0nOyAvL3RoZSBwcmluY2lwbGUgaXMgdGhlIHNhbWUgYXMgd2l0aCBwcmljZS5pbm5lckhUTUwgKHNlZSBhYm92ZSlcclxuICAgIH1cclxuXHJcbiAgICAvL2ZvciBhY2NvdW50Lmh0bWxcclxuICAgIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kaXNjIHNwYW4nKSkge1xyXG4gICAgICAgIGRpc2NBZnRlckNvdW50LmlubmVySFRNTCA9IChwcmljZUluaXREaXNjQWZ0ZXJDb3VudCAqIGluY3JlYXNlSW5wdXRWYWx1ZSkgKyAnIOKCvSc7IC8vdGhlIHByaW5jaXBsZSBpcyB0aGUgc2FtZSBhcyB3aXRoIHByaWNlLmlubmVySFRNTCAoc2VlIGFib3ZlKVxyXG4gICAgfVxyXG5cclxuICAgIC8vZm9yIGFjY291bnQuaHRtbFxyXG4gICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3RvcignLnRheCBzcGFuJykpIHtcclxuICAgICAgICB0YXguaW5uZXJIVE1MID0gKHByaWNlSW5pdFRheCAqIGluY3JlYXNlSW5wdXRWYWx1ZSkgKyAnIOKCvSc7IC8vdGhlIHByaW5jaXBsZSBpcyB0aGUgc2FtZSBhcyB3aXRoIHByaWNlLmlubmVySFRNTCAoc2VlIGFib3ZlKVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ3Jvd0lucHV0KHBhciwgaW5wdXRDb3VudCkgeyAvL0l0IGlzIG5lY2Vzc2FyeSB0aGF0IHRoZSBpbnB1dCBib3ggaW5jcmVhc2VzIG9yIGRlY3JlYXNlcyByZWxhdGl2ZSB0byB0aGUgbnVtYmVyIG9mIGRpZ2l0c1xyXG4gICAgaWYgKHBhciA+PSAxMCAmJiBwYXIgPCAxMDApIHsgLy9pZiBpbnB1dCB2YWx1ZSBpcyA+PSAxMCBhbmQgPCAxMDAsIHdpbGwgZ2l2ZSB0aGUgY29ycmVzcG9uZGluZyBjbGFzcyB0byB0aGUgZWxlbWVudCB0byBleHRlbmQgdGhlIGlucHV0XHJcbiAgICAgICAgaW5wdXRDb3VudC5jbGFzc0xpc3QucmVtb3ZlKCdjb3VudGVyLXZhbHVlMTAwJylcclxuICAgICAgICBpbnB1dENvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXItdmFsdWUxMCcpXHJcbiAgICB9IGVsc2UgaWYgKHBhciA+PSAxMDAgJiYgcGFyIDw9IDEwMDApIHtcclxuXHJcbiAgICAgICAgaW5wdXRDb3VudC5jbGFzc0xpc3QuYWRkKCdjb3VudGVyLXZhbHVlMTAwJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXRDb3VudC5jbGFzc0xpc3QucmVtb3ZlKCdjb3VudGVyLXZhbHVlMTAnKSAvL3dpbGwgZGVjcmVhc2UgdGhlIHdpZHRoIG9mIHRoZSBpbnB1dCBpZiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGRlY3JlYXNlc1xyXG4gICAgICAgIGlucHV0Q291bnQuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRlci12YWx1ZTEwMCcpXHJcbiAgICB9XHJcbn1cclxuLy9mb3IgYWNjb3VudC5odG1sXHJcbmZ1bmN0aW9uIGNvdW50VGhlQm94ZXMocGFyKSB7XHJcbiAgICBpZiAoTWF0aC5mbG9vcihwYXIgLyAxMCkgPiAwKSB7IC8vaW5jcmVhc2VJbnB1dFZhbHVlIGRpdmlkZSBieSAxMCBhbmQgcm91bmQgZG93blxyXG4gICAgICAgIGFkZGl0aW9uYWxJbmZvQ291bnRlci5pbm5lckhUTUwgPSBNYXRoLmZsb29yKHBhciAvIDEwKSArICcg0LrQvtGALidcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWRkaXRpb25hbEluZm9Db3VudGVyLmlubmVySFRNTCA9ICcnOyAvL1xyXG4gICAgfTtcclxufVxyXG4vL2ZvciBhY2NvdW50Lmh0bWxcclxuZnVuY3Rpb24gY291bnRBbGxQcmljZSgpIHtcclxuICAgIGxldCBzdW1QcmljZSA9IDA7XHJcbiAgICBmb3IgKGxldCBpdGVtYWxsR29vZHNCYXNrZXQgb2YgYWxsR29vZHNCYXNrZXQpIHsgLy9lYWNoIGl0ZW0gdGFrZXMgYSBzdHJpbmcgd2l0aCBhIHByaWNlLCBjdXRzIGl0LCBjb252ZXJ0cyBpdCB0byBhIG51bWJlciwgXHJcbiAgICAgICAgc3VtUHJpY2UgKz0gTnVtYmVyKGl0ZW1hbGxHb29kc0Jhc2tldC5pbm5lckhUTUwuc2xpY2UoMCwgLTIpKTsgLy9hbmQgYWRkcyB0aGlzIG51bWJlciB0byB0aGUgdmFsdWUgb2YgdGhlIHN1bVByaWNlIHZhcmlhYmxlICBcclxuICAgIH1cclxuXHJcbiAgICB0b3RhbFByaWNlLmlubmVySFRNTCA9IHN1bVByaWNlICsgXCIg4oK9XCJcclxufVxyXG5cclxuXHJcbi8qY29uc3QgaW5jcmVtZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluY3JlbWVudC1idG4nKTtcclxuY29uc3QgZGVjcmVtZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlY3JlbWVudC1idG4nKTtcclxuY29uc3QgYWxsSW5wdXRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3VudGVyLXZhbHVlJyk7XHJcblxyXG5cclxuaW5jcmVtZW50QnRuLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHJcbiAgICBsZXQgcHJpY2VJbml0aWFsVmFsdWUgPSBjcmVhdGVQcmljZUluaXRpYWxWYWx1ZShpdGVtKTtcclxuXHJcbiAgICBsZXQgcHJpY2VEaXNjSW5pdGlhbFZhbHVlO1xyXG4gICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbNV0udGFnTmFtZSA9PSAnU1VQJykge1xyXG4gICAgICAgIHByaWNlRGlzY0luaXRpYWxWYWx1ZSA9IGNyZWF0ZVByaWNlRGlzY0luaXRpYWxWYWx1ZShpdGVtKVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcHJpY2VEaXNjQWZ0ZXJDb3VudEluaXRpYWxWYWx1ZTtcclxuICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzldLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWluZm8tcHJpY2UnKSkge1xyXG4gICAgICAgIHByaWNlRGlzY0FmdGVyQ291bnRJbml0aWFsVmFsdWUgPSBjcmVhdGVQcmljZURpc2NBZnRlckNvdW50SW5pdGlhbFZhbHVlKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s5XSlcclxuXHJcbiAgICBsZXQgdGF4SW5pdGlhbFZhbHVlO1xyXG4gICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMTFdLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWluZm8tcHJpY2UnKSkge1xyXG4gICAgICAgIHRheEluaXRpYWxWYWx1ZSA9IGNyZWF0ZVRheEluaXRpYWxWYWx1ZShpdGVtKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IE51bWJlcihpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWUpO1xyXG4gICAgICAgIGxldCBpbmNyZWFzZUlucHV0VmFsdWUgPSArK2lucHV0VmFsdWU7XHJcbiAgICAgICAgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlID0gaW5jcmVhc2VJbnB1dFZhbHVlO1xyXG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbM10uaW5uZXJIVE1MID0gKHByaWNlSW5pdGlhbFZhbHVlICogaW5jcmVhc2VJbnB1dFZhbHVlKSArICcg4oK9JztcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRpdGlvbmFsQ291bnRlckluZm8nKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoaW5jcmVhc2VJbnB1dFZhbHVlIC8gMTApID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBNYXRoLmZsb29yKGluY3JlYXNlSW5wdXRWYWx1ZSAvIDEwKSArICcg0LrQvtGALidcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbNV0udGFnTmFtZSA9PSAnU1VQJykge1xyXG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzVdLmlubmVySFRNTCA9IChwcmljZURpc2NJbml0aWFsVmFsdWUgKiBpbmNyZWFzZUlucHV0VmFsdWUpICsgJyDigr0nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbOV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtaW5mby1wcmljZScpKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbOV0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSAocHJpY2VEaXNjQWZ0ZXJDb3VudEluaXRpYWxWYWx1ZSAqIGluY3JlYXNlSW5wdXRWYWx1ZSkgKyAnIOKCvSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtaW5mby1wcmljZScpKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMTFdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gKHRheEluaXRpYWxWYWx1ZSAqIGluY3JlYXNlSW5wdXRWYWx1ZSkgKyAnIOKCvSc7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5kZWNyZW1lbnRCdG4uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cclxuICAgIGxldCBwcmljZUluaXRpYWxWYWx1ZSA9IGNyZWF0ZVByaWNlSW5pdGlhbFZhbHVlKGl0ZW0pO1xyXG5cclxuICAgIGxldCBwcmljZURpc2NJbml0aWFsVmFsdWU7XHJcbiAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s1XS50YWdOYW1lID09ICdTVVAnKSB7XHJcbiAgICAgICAgcHJpY2VEaXNjSW5pdGlhbFZhbHVlID0gY3JlYXRlUHJpY2VEaXNjSW5pdGlhbFZhbHVlKGl0ZW0pXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBwcmljZURpc2NBZnRlckNvdW50SW5pdGlhbFZhbHVlO1xyXG4gICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbOV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtaW5mby1wcmljZScpKSB7XHJcbiAgICAgICAgcHJpY2VEaXNjQWZ0ZXJDb3VudEluaXRpYWxWYWx1ZSA9IGNyZWF0ZVByaWNlRGlzY0FmdGVyQ291bnRJbml0aWFsVmFsdWUoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRheEluaXRpYWxWYWx1ZTtcclxuICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzExXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1pbmZvLXByaWNlJykpIHtcclxuICAgICAgICB0YXhJbml0aWFsVmFsdWUgPSBjcmVhdGVUYXhJbml0aWFsVmFsdWUoaXRlbSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IE51bWJlcihpdGVtLm5leHRFbGVtZW50U2libGluZy52YWx1ZSk7XHJcbiAgICAgICAgbGV0IGRlY3JlYXNlSW5wdXRWYWx1ZSA9IC0taW5wdXRWYWx1ZVxyXG4gICAgICAgIGlmIChkZWNyZWFzZUlucHV0VmFsdWUgPj0gMSkge1xyXG4gICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy52YWx1ZSA9IGRlY3JlYXNlSW5wdXRWYWx1ZTtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1szXS5pbm5lckhUTUwgPSAocHJpY2VJbml0aWFsVmFsdWUgKiBkZWNyZWFzZUlucHV0VmFsdWUpICsgJyDigr0nO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZGl0aW9uYWxDb3VudGVySW5mbycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoZGVjcmVhc2VJbnB1dFZhbHVlIC8gMTApID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gTWF0aC5mbG9vcihkZWNyZWFzZUlucHV0VmFsdWUgLyAxMCkgKyAnINC60L7RgC4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s1XS50YWdOYW1lID09ICdTVVAnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzVdLmlubmVySFRNTCA9IChwcmljZURpc2NJbml0aWFsVmFsdWUgKiBkZWNyZWFzZUlucHV0VmFsdWUpICsgJyDigr0nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s5XS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1pbmZvLXByaWNlJykpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbOV0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSAocHJpY2VEaXNjQWZ0ZXJDb3VudEluaXRpYWxWYWx1ZSAqIGRlY3JlYXNlSW5wdXRWYWx1ZSkgKyAnIOKCvSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzExXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1pbmZvLXByaWNlJykpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMTFdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gKHRheEluaXRpYWxWYWx1ZSAqIGRlY3JlYXNlSW5wdXRWYWx1ZSkgKyAnIOKCvSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5hbGxJbnB1dENvdW50LmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHJcbiAgICBsZXQgcHJpY2VJbml0aWFsVmFsdWUgPSBjcmVhdGVQcmljZUluaXRpYWxWYWx1ZShpdGVtKTtcclxuXHJcbiAgICBsZXQgcHJpY2VEaXNjSW5pdGlhbFZhbHVlO1xyXG4gICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbNV0udGFnTmFtZSA9PSAnU1VQJykge1xyXG4gICAgICAgIHByaWNlRGlzY0luaXRpYWxWYWx1ZSA9IGNyZWF0ZVByaWNlRGlzY0luaXRpYWxWYWx1ZShpdGVtKVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcHJpY2VEaXNjQWZ0ZXJDb3VudEluaXRpYWxWYWx1ZTtcclxuICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzldLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWluZm8tcHJpY2UnKSkge1xyXG4gICAgICAgIHByaWNlRGlzY0FmdGVyQ291bnRJbml0aWFsVmFsdWUgPSBjcmVhdGVQcmljZURpc2NBZnRlckNvdW50SW5pdGlhbFZhbHVlKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0YXhJbml0aWFsVmFsdWU7XHJcbiAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtaW5mby1wcmljZScpKSB7XHJcbiAgICAgICAgdGF4SW5pdGlhbFZhbHVlID0gY3JlYXRlVGF4SW5pdGlhbFZhbHVlKGl0ZW0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuICAgICAgICBpZiAoIWlzTmFOKGUudGFyZ2V0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1szXS5pbm5lckhUTUwgPSBwcmljZUluaXRpYWxWYWx1ZSAqIGUudGFyZ2V0LnZhbHVlICsgJyDigr0nO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnYWRkaXRpb25hbENvdW50ZXJJbmZvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihlLnRhcmdldC52YWx1ZSAvIDEwKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IE1hdGguZmxvb3IoZS50YXJnZXQudmFsdWUgLyAxMCkgKyAnINC60L7RgC4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzVdLnRhZ05hbWUgPT0gJ1NVUCcpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbNV0uaW5uZXJIVE1MID0gcHJpY2VEaXNjSW5pdGlhbFZhbHVlICogZS50YXJnZXQudmFsdWUgKyAnIOKCvSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzldLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWluZm8tcHJpY2UnKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s5XS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IHByaWNlRGlzY0FmdGVyQ291bnRJbml0aWFsVmFsdWUgKiBlLnRhcmdldC52YWx1ZSArICcg4oK9JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMTFdLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWluZm8tcHJpY2UnKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxMV0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSB0YXhJbml0aWFsVmFsdWUgKiBlLnRhcmdldC52YWx1ZSArICcg4oK9JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA+PSAxMCAmJiBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZXItdmFsdWUxMDAnKVxyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdjb3VudGVyLXZhbHVlMTAnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE51bWJlcihlLnRhcmdldC52YWx1ZSkgPj0gMTAwICYmIE51bWJlcihlLnRhcmdldC52YWx1ZSkgPD0gMTAwMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY291bnRlci12YWx1ZTEwMCcpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZXItdmFsdWUxMCcpXHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZXItdmFsdWUxMDAnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJpY2VJbml0aWFsVmFsdWUocGFyKSB7XHJcblxyXG4gICAgbGV0IGluaXRpYWxWYWx1ZSA9IE51bWJlcihwYXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbM10uaW5uZXJIVE1MLnNsaWNlKDAsIC0yKSk7XHJcblxyXG4gICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcmljZURpc2NJbml0aWFsVmFsdWUocGFyKSB7XHJcblxyXG4gICAgbGV0IHByaWNpbml0aWFsVmFsdWUgPSBOdW1iZXIocGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzVdLmlubmVySFRNTC5zbGljZSgwLCAtMikpO1xyXG5cclxuICAgIHJldHVybiBwcmljaW5pdGlhbFZhbHVlO1xyXG5cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcmljZURpc2NBZnRlckNvdW50SW5pdGlhbFZhbHVlKHBhcikge1xyXG5cclxuICAgIGxldCBpbml0aWFsVmFsdWUgPSBwYXIucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbOV0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwuc2xpY2UoMCwgLTIpO1xyXG5cclxuICAgIHJldHVybiBpbml0aWFsVmFsdWU7XHJcblxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRheEluaXRpYWxWYWx1ZShwYXIpIHtcclxuXHJcbiAgICBsZXQgaW5pdGlhbFZhbHVlID0gcGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzExXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTC5zbGljZSgwLCAtMik7XHJcblxyXG4gICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuXHJcbn07Ki8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=