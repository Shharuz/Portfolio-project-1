const blockThatHasCounter = document.querySelectorAll('.block-that-has-counter');
let allGoodsBasket;
let total;
let totalPrice;


if (document.querySelectorAll('.account__basket')) {
    allGoodsBasket = document.querySelectorAll('.account__basket .price-relative-input');
    total = document.querySelector('.account__content__total');
    totalPrice = document.querySelector('.account__content__total .price');
}



blockThatHasCounter.forEach((item) => {
    let incrementBtn = item.querySelector('.increment-btn');
    let decrementBtn = item.querySelector('.decrement-btn');
    let inputCount = item.querySelector('.counter-value');

    let price = item.querySelector('.price-relative-input');
    let priceInitialValue = price.innerHTML.slice(0, -2);


    let discount;
    let priceInitDiscount;
    if (item.querySelector('sup')) {
        discount = item.querySelector('sup');
        priceInitDiscount = discount.innerHTML.slice(0, -2);
    }


    let discAfterCount;
    let priceInitDiscAfterCount;
    if (item.querySelector('.disc span')) {
        discAfterCount = item.querySelector('.disc span');
        priceInitDiscAfterCount = discAfterCount.innerHTML.slice(0, -2);
    }


    let tax;
    let priceInitTax;
    if (item.querySelector('.tax span')) {
        tax = item.querySelector('.tax span');
        priceInitTax = tax.innerHTML.slice(0, -2);
    }



    let additionalInfoCounter;
    if (item.querySelector('.additional-info-counter')) {
        additionalInfoCounter = item.querySelector('.additional-info-counter');
    }


    incrementBtn.addEventListener('click', () => {

        let inputValue = Number(inputCount.value);
        let increaseInputValue = ++inputValue;
        inputCount.value = increaseInputValue;

        changePrice(increaseInputValue);

        growInput(increaseInputValue);


        if (item.querySelector('.additional-info-counter')) {

            countTheBoxes(increaseInputValue);

        };
        countAllPrice();


    });
    decrementBtn.addEventListener('click', () => {
        let inputValue = Number(inputCount.value);;
        let decreaseInputValue = --inputValue
        if (decreaseInputValue >= 1) {
            inputCount.value = decreaseInputValue;

            changePrice(decreaseInputValue);

            growInput(decreaseInputValue);

            if (item.querySelector('.additional-info-counter')) {
                countTheBoxes(decreaseInputValue);
            }

        }
        countAllPrice();

    });
    inputCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");

        changePrice(e.target.value);
        growInput(Number(e.target.value));

        if (item.querySelector('.additional-info-counter')) {
            countTheBoxes(e.target.value);
        };
        countAllPrice();
    });

    function changePrice(par) {
        price.innerHTML = (priceInitialValue * par) + ' ₽';


        if (item.querySelector('sup')) {
            discount.innerHTML = (priceInitDiscount * par) + ' ₽';
        }


        if (item.querySelector('.disc span')) {
            discAfterCount.innerHTML = (priceInitDiscAfterCount * par) + ' ₽';
        }


        if (item.querySelector('.tax span')) {
            tax.innerHTML = (priceInitTax * par) + ' ₽';
        }

    }

    function growInput(par) {
        if (par >= 10 && par < 100) {
            inputCount.classList.remove('counter-value100')
            inputCount.classList.add('counter-value10')
        } else if (par >= 100 && par <= 1000) {

            inputCount.classList.add('counter-value100')
        } else {
            inputCount.classList.remove('counter-value10')
            inputCount.classList.remove('counter-value100')
        }
    }

    function countTheBoxes(par) {
        if (Math.floor(par / 10) > 0) {
            additionalInfoCounter.innerHTML = Math.floor(par / 10) + ' кор.'
        } else {
            additionalInfoCounter.innerHTML = '';
        };
    }

    function countAllPrice() {
        let sumPrice = 0;
        for (let itemallGoodsBasket of allGoodsBasket) {
            sumPrice += Number(itemallGoodsBasket.innerHTML.slice(0, -2));
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