//for account.html and card.html

const blockThatHasCounter = document.querySelectorAll('.block-that-has-counter');
let allGoodsBasket;
let total;
let totalPrice;
let additionalInfoCounter;


//for account.html
if (document.querySelector('.account__basket')) {
    allGoodsBasket = document.querySelectorAll('.account__basket .price-relative-input');//the price is taken relative to the input
    total = document.querySelector('.account__total'); //a block is taken in which there is an element with a total price
    totalPrice = document.querySelector('.account__total .price');//the total price is taken
}



blockThatHasCounter.forEach((item) => {
    let incrementBtn = item.querySelector('.increment-btn');
    let decrementBtn = item.querySelector('.decrement-btn');
    let inputCount = item.querySelector('.counter-value');

    let price = item.querySelector('.price-relative-input'); //takes a string with a price that depends on the input
    let priceInitialValue = price.innerHTML.slice(0, -2);    //takes the initial price before any actions with the counter

    //for card.html
    let discount;
    let priceInitDiscount;
    if (item.querySelector('sup')) { //check if element with sup tag exists
        discount = item.querySelector('sup');//takes an element with the sup tag
        priceInitDiscount = discount.innerHTML.slice(0, -2);//takes the initial value of the old price before any actions with the counter
    }

    //for account.html
    let discAfterCount;
    let priceInitDiscAfterCount;
    if (item.querySelector('.disc span')) { //checks if there is an element with class disc that has span
        discAfterCount = item.querySelector('.disc span');//takes an element with the span tag
        priceInitDiscAfterCount = discAfterCount.innerHTML.slice(0, -2);//takes the initial discount value before any actions are performed on the counter
    }

    //for account.html
    let tax;
    let priceInitTax;
    if (item.querySelector('.tax span')) {   //checks if there is an element with class tax that has span
        tax = item.querySelector('.tax span');//takes an element with the span tag
        priceInitTax = tax.innerHTML.slice(0, -2);//takes the initial tax value before any actions are performed on the counter
    }


    incrementBtn.addEventListener('click', () => {

        let inputValue = Number(inputCount.value);//takes the string value of the input and converts it to a number
        let increaseInputValue = ++inputValue;//the variable will be needed to work with discount and price
        inputCount.value = increaseInputValue;

        changePrice(increaseInputValue); //transition to 109

        //for account.html
        growInput(increaseInputValue);//transition to 129

        //for account.html
        if (item.nextElementSibling.classList.contains('additional-info-counter')) {
            additionalInfoCounter = item.nextElementSibling;
            countTheBoxes(increaseInputValue);//transition to 142

        };
        if (document.querySelector('.account__basket')){
            countAllPrice();//transition to 150
        }
        


    });
    decrementBtn.addEventListener('click', () => {
        //everything is exactly the same as in incrementBtn.addEventListener('click'...
        let inputValue = Number(inputCount.value);
        let decreaseInputValue = --inputValue;
        if (decreaseInputValue >= 1) { //prevents the counter from going negative
            inputCount.value = decreaseInputValue;

            changePrice(decreaseInputValue); //transition to 109

            growInput(decreaseInputValue);   //transition to 129

            if (item.nextElementSibling.classList.contains('additional-info-counter')) {
                additionalInfoCounter = item.nextElementSibling;
                countTheBoxes(decreaseInputValue);//transition to 142
            }

        }
        if (document.querySelector('.account__basket')){
            countAllPrice();//transition to 150
        }

    });

    inputCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");//You can only enter numbers
        //everything is exactly the same as in incrementBtn.addEventListener('click'...
        changePrice(e.target.value);//transition to 109
        growInput(Number(e.target.value));//transition to 129

        if (item.nextElementSibling.classList.contains('additional-info-counter')) {
            additionalInfoCounter = item.nextElementSibling;
            countTheBoxes(e.target.value);//transition to 142
        };
        if (document.querySelector('.account__basket')){
            countAllPrice();//transition to 150
        }
    });

    function changePrice(par) {
        price.innerHTML = (priceInitialValue * par) + ' ₽';//the initial price value is multiplied by the counter value

        //for card.html
        if (item.querySelector('sup')) {
            discount.innerHTML = (priceInitDiscount * par) + ' ₽';//the principle is the same as with price.innerHTML (see above)
        }

        //for account.html
        if (item.querySelector('.disc span')) {
            discAfterCount.innerHTML = (priceInitDiscAfterCount * par) + ' ₽';//the principle is the same as with price.innerHTML (see above)
        }

        //for account.html
        if (item.querySelector('.tax span')) {
            tax.innerHTML = (priceInitTax * par) + ' ₽';//the principle is the same as with price.innerHTML (see above)
        }

    }

    function growInput(par) {//It is necessary that the input box increases or decreases relative to the number of digits
        if (par >= 10 && par < 100) {//if input value is >= 10 and < 100, will give the corresponding class to the element to extend the input
            inputCount.classList.remove('counter-value100')
            inputCount.classList.add('counter-value10')
        } else if (par >= 100 && par <= 1000) {

            inputCount.classList.add('counter-value100')
        } else {
            inputCount.classList.remove('counter-value10')//will decrease the width of the input if the value of the input decreases
            inputCount.classList.remove('counter-value100')
        }
    }
    //for account.html
    function countTheBoxes(par) {
        if (Math.floor(par / 10) > 0) {//increaseInputValue divide by 10 and round down
            additionalInfoCounter.innerHTML = Math.floor(par / 10) + ' кор.'
        } else {
            additionalInfoCounter.innerHTML = '';//
        };
    }
    //for account.html
    function countAllPrice() {
        let sumPrice = 0;
        for (let itemallGoodsBasket of allGoodsBasket) {//each item takes a string with a price, cuts it, converts it to a number, 
            sumPrice += Number(itemallGoodsBasket.innerHTML.slice(0, -2)); //and adds this number to the value of the sumPrice variable  
        }
        
        totalPrice.innerHTML = sumPrice + " ₽"
    }
});





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