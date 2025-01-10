const category = document.querySelectorAll('input[type="radio"]');
const allCards = document.querySelectorAll(".allPageCard");
const wrapperForCards = document.querySelector(".catalogCategories__cards-goods__wrapperForCards");
const navCardsGoods = document.querySelector('.catalogCategories__cards-goods__pageNavigation');
const inputManufacturerWeight = document.querySelectorAll('.filter__form input[type="checkbox"]');
let countCard = document.querySelector('#amount-card');
let sortList = document.querySelector('#filterList');
let blockCardsGoods = document.querySelector('.catalogCategories__cards-goods');
let blockCardsGoodsWrapper = document.querySelector('.catalogCategories__cards-goods__wrapperForCards');

console.log(blockCardsGoods.offsetWidth);
console.log(parseInt(window.getComputedStyle(blockCardsGoodsWrapper).getPropertyValue("column-gap"), 10));


//move from page catalogMainPage.html to page catalogCategories.html
function changeCheckedRadioCatalogCategories() {
    // add 'checked' to the desired element relative url
    for (let item of category) {
        if (item.getAttribute('id') == window.location.href.split("?")[1]) {
            item.setAttribute('checked', 'checked');
        };



        let count = 0;

        for (let itemCard of allCards) {

            if (item.getAttribute('id') == itemCard.getAttribute('data-filter')) {

                count++

            };

        };

        item.nextElementSibling.childNodes[2].innerHTML = count;
    };

    // count

    for (let itemInput of inputManufacturerWeight) {
        //console.log(itemInput.nextElementSibling.nextElementSibling)
        let count = 0;

        for (let itemCard of allCards) {

            if (itemInput.getAttribute('id') == itemCard.getAttribute('data-manufacturer-filter') || itemInput.getAttribute('id') == itemCard.childNodes[5].childNodes[1].innerHTML.slice(0, -2)) {

                count++

            };


        };

        itemInput.nextElementSibling.nextElementSibling.innerHTML = count;
    };



    if (window.location.href.split("html")[1] == '') {
        for (let item of allCards) {
            item.classList.remove('hide');
        }

    } else if (window.location.href.split("?").length == 2) {
        for (let item of allCards) {
            if (item.getAttribute('data-filter') == window.location.href.split("?")[1]) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        };

    } else {
        for (let item of allCards) {
            if (item.getAttribute('data-manufacturer-filter')) {
                if (item.getAttribute('data-filter') == window.location.href.split("?")[1] && item.getAttribute('data-manufacturer-filter') == window.location.href.split("?")[2]) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }

            } else if (item.getAttribute('data-pests-filter')) {

                if (item.getAttribute('data-filter') == window.location.href.split("?")[1] && item.getAttribute('data-pests-filter') == window.location.href.split("?")[2]) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            }
        };
    };







    let collectionOfFilteredCard = [];
    addFilteredCardsToCollection(collectionOfFilteredCard);

    getСollectionOfFilteredCard(collectionOfFilteredCard);

    sortPopularity(collectionOfFilteredCard);


    createSliderNavElemAndMove(collectionOfFilteredCard);



};

// filter-category 

function sortCard(e) {
    // filtered card relative change(click)

    for (let item of allCards) {
        if (item.getAttribute('data-filter') == e.target.getAttribute("id")) { //sort relative data-filter and add cards in container
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');

        }

    };



    wrapperForCards.style.transform = 'translateX(0)';
    let elementNav = navCardsGoods.querySelectorAll('span');
    elementNav.forEach((item) => {
        item.remove();
    });
    //relative Block(s)(look at line 120)
    let collectionOfFilteredCard = [];
    addFilteredCardsToCollection(collectionOfFilteredCard);

    getСollectionOfFilteredCard(collectionOfFilteredCard);

    sortPopularity(collectionOfFilteredCard);

    createSliderNavElemAndMove(collectionOfFilteredCard);

};

category.forEach((item) => {
    item.addEventListener('click', sortCard);
});

let collectionOfFilteredCardForAll = [];

function getСollectionOfFilteredCard(par) {
    collectionOfFilteredCardForAll = par;
};

function filterByManufacturerWeightPrice() {


    let minPrice = priceRangeInput[0].value;
    let maxPrice = priceRangeInput[1].value;
    //hide/////////////////
    for (let itemCard of collectionOfFilteredCardForAll) {
        itemCard.classList.add('hide');
    };
    let manufacturerAll = document.querySelectorAll('#manufacturer input[type=checkbox]');
    let weightInGramsAll = document.querySelectorAll('#weightInGrams input[type=checkbox]');



    let checkInputCheckedInManufacturerAllAndweightInGramsAll = function() {
        let countManufact = 0;
        let countWeight = 0;
        for (let itemManufact of manufacturerAll) {
            if (itemManufact.checked) {
                countManufact++
            }
        };

        for (let itemWeight of weightInGramsAll) {
            if (itemWeight.checked) {
                countWeight++
            }
        };
        if (countManufact >= 1 && countWeight >= 1) {
            return true
        } else if (countManufact == 0 && countWeight == 0) {
            return false
        };
    };



    if (checkInputCheckedInManufacturerAllAndweightInGramsAll()) {

        for (let itemManufact of manufacturerAll) {
            if (itemManufact.checked) {
                for (let itemCard of collectionOfFilteredCardForAll) {
                    if (itemManufact.id == itemCard.getAttribute('data-manufacturer-filter')) {
                        itemCard.classList.remove('hide');
                    }
                    for (let itemWeight of weightInGramsAll) {
                        if (!itemWeight.checked) {
                            for (let itemCard of collectionOfFilteredCardForAll) {
                                if (itemWeight.id == itemCard.querySelector('.weightInGrams').innerHTML.slice(0, -2)) {
                                    itemCard.classList.add('hide');
                                };
                            };
                        };
                    };

                };
            };
        };
        let collectOfFilteredCardOfManufactAndWeight = [];
        for (let itemCard of allCards) {
            if (!itemCard.classList.contains('hide')) {
                collectOfFilteredCardOfManufactAndWeight.push(itemCard)
            };
        };

        filterPrice(collectOfFilteredCardOfManufactAndWeight);

    } else if (checkInputCheckedInManufacturerAllAndweightInGramsAll() == false) {


        filterPrice(collectionOfFilteredCardForAll);
    } else {
        for (let itemManufact of manufacturerAll) {
            if (itemManufact.checked) {
                for (let itemCard of collectionOfFilteredCardForAll) {
                    if (itemManufact.id == itemCard.getAttribute('data-manufacturer-filter')) {
                        itemCard.classList.remove('hide');
                    }
                }
            }
        }
        for (let itemWeight of weightInGramsAll) {
            if (itemWeight.checked) {
                for (let itemCard of collectionOfFilteredCardForAll) {
                    if (itemWeight.id == itemCard.querySelector('.weightInGrams').innerHTML.slice(0, -2)) {
                        itemCard.classList.remove('hide');
                    }
                }
            }
        }
        let collectOfFilteredCardOfManufactAndWeight = [];
        for (let itemCard of allCards) {
            if (!itemCard.classList.contains('hide')) {
                collectOfFilteredCardOfManufactAndWeight.push(itemCard)
            };
        };

        filterPrice(collectOfFilteredCardOfManufactAndWeight);
    };


    /*itemCard.getAttribute('data-manufacturer-filter');
    itemCard.querySelector('.weightInGrams').innerHTML.slice(0, -2);*/


    //prise///////////////////////
    function filterPrice(par) {
        for (let itemCard of par) {

            if (parseInt(itemCard.querySelector('.price').innerHTML) > minPrice && parseInt(itemCard.querySelector('.price').innerHTML) < maxPrice) {
                itemCard.classList.remove('hide');
            } else {
                itemCard.classList.add('hide');
            }
        }
    }

    wrapperForCards.style.transform = 'translateX(0)';
    let elementNav = navCardsGoods.querySelectorAll('span');
    elementNav.forEach((item) => {
        item.remove();
    });

    let collectionOfFilteredCard = [];
    addFilteredCardsToCollection(collectionOfFilteredCard);


    createSliderNavElemAndMove(collectionOfFilteredCard);

};

function addFilteredCardsToCollection(par) {
    for (let item of allCards) {

        if (!(item.classList.contains('hide'))) {
            par.push(item)
        }
    };
}

function createSliderNavElemAndMove(par) {
    countCard.innerHTML = par.length + ' ';

    let requiredNumber = Math.ceil(par.length / 6); // Number for movie slider and amount navigation element

    createSliderNavElem(requiredNumber);
    let collectionNavElementsSortCard = navCardsGoods.querySelectorAll('span');
    getNavElements(collectionNavElementsSortCard);


    callbackAmountBlock(requiredNumber);

    moveSlideOnClickNavElem(collectionNavElementsSortCard);
}

function createSliderNavElem(par) {

    if (par <= 5) {
        for (let i = 1; i <= par; ++i) {
            if (i == 1) {
                let navElem = document.createElement('span');
                navElem.classList.add('active');
                navElem.append(`${i}`);
                catalogCategories__next.before(navElem);

            } else {
                let navElem = document.createElement('span');
                navElem.append(`${i}`);
                catalogCategories__next.before(navElem);
            }
        }
    } else {
        for (let i = 1; i <= par; ++i) {
            if (i == 1) {
                let navElem = document.createElement('span');
                navElem.classList.add('active');
                navElem.append(`${i}`);
                catalogCategories__next.before(navElem);
            } else if (i > 1 && i < 4) {
                let navElem = document.createElement('span');
                navElem.append(`${i}`);
                catalogCategories__next.before(navElem);
            } else if (i == 4) {
                let navElem = document.createElement('span');
                navElem.append('...');
                catalogCategories__next.before(navElem);
                let navElemLast = document.createElement('span');
                navElemLast.append(`${par}`);
                catalogCategories__next.before(navElemLast);
            } else {
                break;
            }
        }
    }

};



//relative Block(s)
let widthBlock = 1272;
//let columnGap = 24;
let countBlock = 1;
let countChangeAmountBlock = 0;
let position = 0;

function callbackAmountBlock(par) {
    countChangeAmountBlock = 0;
    countChangeAmountBlock = par;
};

function moveSlideOnClickNavElem(par) {


    par.forEach((item) => {
        if (countChangeAmountBlock <= 5) {
            item.onclick = function(e) {

                if ((blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(blockCardsGoodsWrapper).getPropertyValue("column-gap"), 10)) != widthBlock) {

                    widthBlock = blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(blockCardsGoodsWrapper).getPropertyValue("column-gap"), 10);
                    wrapperForCards.style.transform = `translateX(0px)`;
                    navCardsGoods.querySelector('.active').classList.remove('active');
                    navCardsGoods.childNodes[3].classList.add('active');
                }


                item.parentElement.querySelector('.active').classList.remove('active');
                wrapperForCards.style.transform = `translateX(${(-widthBlock * (e.target.innerHTML - 1) ) + 'px'})`;
                e.target.classList.add('active');
            }

        }

        if (countChangeAmountBlock > 5) {
            item.onclick = function(e) {
                //console.log(item);
                if ((blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(blockCardsGoodsWrapper).getPropertyValue("column-gap"), 10)) != widthBlock) {
                    widthBlock = blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(blockCardsGoodsWrapper).getPropertyValue("column-gap"), 10);
                    wrapperForCards.style.transform = `translateX(0px)`;
                    navCardsGoods.querySelector('.active').classList.remove('active');
                    navCardsGoods.childNodes[3].classList.add('active');
                    navCardsGoods.childNodes[4].innerHTML = "2";
                    navCardsGoods.childNodes[5].innerHTML = "3";
                    navCardsGoods.childNodes[6].innerHTML = "...";

                } else {


                    if (!(e.target.innerHTML == '...')) {
                        item.parentElement.querySelector('.active').classList.remove('active');
                        wrapperForCards.style.transform = `translateX(${(-widthBlock * (e.target.innerHTML - 1)) + 'px'})`;
                        e.target.classList.add('active');
                        if (e.target.innerHTML == countChangeAmountBlock) {
                            e.target.previousSibling.innerHTML = (countChangeAmountBlock - 1);
                            par[2].innerHTML = (countChangeAmountBlock - 2);
                            par[1].innerHTML = '...';
                        };
                        if (e.target.innerHTML == 1) {
                            e.target.nextSibling.innerHTML = 2;
                            par[2].innerHTML = 3;
                            par[3].innerHTML = '...';
                        };
                    };
                    if (e.target === par[3] && e.target.innerHTML == '...') {
                        ++par[2].innerHTML;
                        wrapperForCards.style.transform = `translateX(${(-widthBlock * (par[2].innerHTML - 1)) + 'px'})`;
                        item.parentElement.querySelector('.active').classList.remove('active');
                        par[2].classList.add('active');

                    } else if (e.target === par[1] && e.target.innerHTML == '...') {
                        --par[2].innerHTML;
                        wrapperForCards.style.transform = `translateX(${(-widthBlock * (par[2].innerHTML - 1)) + 'px'})`;
                        item.parentElement.querySelector('.active').classList.remove('active');
                        par[2].classList.add('active');
                    };

                    if (par[2].innerHTML == (countChangeAmountBlock - 2)) {
                        par[3].innerHTML = (countChangeAmountBlock - 1)
                    } else if (par[2].innerHTML == (countChangeAmountBlock - 3)) {
                        par[3].innerHTML = '...'
                    }

                    if (par[2].innerHTML == 3) {
                        par[1].innerHTML = 2
                    } else if (par[2].innerHTML == 4) {
                        par[1].innerHTML = '...'
                    }

                }
            }
        }

    });

};

let allNavElements;

function getNavElements(par) {
    allNavElements = par;

}



catalogCategories__prev.onclick = function() {
    /*position += widthBlock * countBlock;
    position = Math.min(position, 0);
    wrapperForCards.style.transform = `translateX(${position + 'px'})`;*/
    if ((blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(blockCardsGoodsWrapper).getPropertyValue("column-gap"), 10)) != widthBlock) {
        widthBlock = blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(blockCardsGoodsWrapper).getPropertyValue("column-gap"), 10);
        wrapperForCards.style.transform = `translateX(0px)`;
        navCardsGoods.querySelector('.active').classList.remove('active');
        navCardsGoods.childNodes[3].classList.add('active');
        if (countChangeAmountBlock > 5) {
            navCardsGoods.childNodes[4].innerHTML = "2";
            navCardsGoods.childNodes[5].innerHTML = "3";
            navCardsGoods.childNodes[6].innerHTML = "...";
        }
    } else {

        let transformValue = wrapperForCards.style.transform.slice(11, -3);
        position = Math.min(Number(transformValue), -widthBlock)
        wrapperForCards.style.transform = `translateX(${(position + widthBlock)  + 'px'})`;

        if (countChangeAmountBlock <= 5) {
            let navElemActive;
            for (let item of allNavElements) {
                if (item.classList.contains('active')) {
                    navElemActive = item;
                }
            };
            if (!(navElemActive.previousElementSibling == catalogCategories__prev)) {
                navElemActive.previousElementSibling.classList.add('active');
                navElemActive.classList.remove('active');
            }
        }


        if (countChangeAmountBlock > 5) {
            let navElemActive;
            for (let item of allNavElements) {
                if (item.classList.contains('active')) {
                    navElemActive = item;
                }
            };

            if (!(navElemActive.previousElementSibling == catalogCategories__prev) && !(navElemActive.innerHTML < (countChangeAmountBlock - 1) && navElemActive.innerHTML > 3)) {
                navElemActive.previousElementSibling.classList.add('active');
                navElemActive.classList.remove('active');
            };

            if (position < (-widthBlock * 2) && position > -widthBlock * (countChangeAmountBlock - 2)) {
                --allNavElements[2].innerHTML;
            };

            if (allNavElements[2].innerHTML == 3) {
                allNavElements[1].innerHTML = 2;
            };


            if (allNavElements[2].innerHTML == countChangeAmountBlock - 3) {
                allNavElements[3].innerHTML = '...';
            };
        };

    }
};

catalogCategories__next.onclick = function() {
    /*position -= widthBlock * countBlock;
    position = Math.max(position, -widthBlock * (countChangeAmountBlock - countBlock));
    wrapperForCards.style.transform = `translateX(${position + 'px'})`;*/


    if ((blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(blockCardsGoodsWrapper).getPropertyValue("column-gap"), 10)) != widthBlock) {
        widthBlock = blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(blockCardsGoodsWrapper).getPropertyValue("column-gap"), 10);
        wrapperForCards.style.transform = `translateX(0px)`;
        navCardsGoods.querySelector('.active').classList.remove('active');
        navCardsGoods.childNodes[3].classList.add('active');
        if (countChangeAmountBlock > 5) {
            navCardsGoods.childNodes[4].innerHTML = "2";
            navCardsGoods.childNodes[5].innerHTML = "3";
            navCardsGoods.childNodes[6].innerHTML = "...";
        }

    } else {
        let transformValue = wrapperForCards.style.transform.slice(11, -3);
        position = Math.max((Number(transformValue) - widthBlock), -widthBlock * (countChangeAmountBlock - countBlock))
        wrapperForCards.style.transform = `translateX(${position + 'px'})`;


        if (countChangeAmountBlock <= 5) {
            let navElemActive;
            for (let item of allNavElements) {
                if (item.classList.contains('active')) {
                    navElemActive = item;
                }
            };
            if (!(navElemActive.nextElementSibling == catalogCategories__next)) {
                navElemActive.nextElementSibling.classList.add('active');
                navElemActive.classList.remove('active');
            };
        }



        if (countChangeAmountBlock > 5) {
            let navElemActive;
            for (let item of allNavElements) {
                if (item.classList.contains('active')) {
                    navElemActive = item;
                }
            };


            if (!(navElemActive.nextElementSibling == catalogCategories__next) && !(navElemActive.innerHTML > 2 && navElemActive.innerHTML < (countChangeAmountBlock - 2))) {
                navElemActive.nextElementSibling.classList.add('active');
                navElemActive.classList.remove('active');

            };

            if (position < -widthBlock * 2 && position > -widthBlock * (countChangeAmountBlock - 2)) {
                ++allNavElements[2].innerHTML
            }
            if (allNavElements[2].innerHTML == countChangeAmountBlock - 2) {
                allNavElements[3].innerHTML = countChangeAmountBlock - 1;
            };

            if (allNavElements[2].innerHTML == 4) {
                allNavElements[1].innerHTML = '...';
            }
        };

    }
};


//filter by manufacturer weight price

const btnApplyFilter = document.querySelector('#apply-filter');

const priceRangeInput = document.querySelectorAll('.filter__form__price-range input[type="number"]')

function choiceHowToSort() {
    let selected = sortList.options[sortList.selectedIndex].value;
    if (selected == 'popularity') {
        sortPopularity(collectionOfFilteredCardForAll)
    } else if (selected == 'title') {
        sortByName(collectionOfFilteredCardForAll)
    } else if (selected == 'byPriceAscending') {
        sortByPriceIncrease(collectionOfFilteredCardForAll)
    } else if (selected == 'byPriceDescending') {
        sortByPriceDecrease(collectionOfFilteredCardForAll)
    } else {
        sortByDateReceived(collectionOfFilteredCardForAll);
    }

};

sortList.addEventListener('change', choiceHowToSort);

function sortPopularity(par) {

    for (let itemPar of par) {
        let fill = 0;
        let half = 0;

        for (let star of itemPar.querySelectorAll('.stars .star')) {
            if (star.classList.contains('fill')) {
                fill++
            } else if (star.classList.contains('half')) {
                half += 0.5
            }

        };
        let raiting = fill + half;

        itemPar.querySelector('.allPageCard__raiting').setAttribute('data-raiting', `${raiting}`);
    };




    //console.log( Number(par[k - 1].querySelector('.allPageCard__raiting').getAttribute('data-raiting')) );
    for (let i = 1; i < par.length; ++i) {
        let k = i;

        while (k > 0 && Number(par[k - 1].querySelector('.allPageCard__raiting').getAttribute('data-raiting')) < Number(par[k].querySelector('.allPageCard__raiting').getAttribute('data-raiting'))) {


            let tmp = par[k - 1];


            par[k - 1] = par[k];


            par[k] = tmp;

            k -= 1;
        };

    };



    for (let itemPar of par) {
        wrapperForCards.append(itemPar);
    };
};

function sortByName(par) {



    //let x = par[0].querySelector('h4').innerHTML.slice(0, par[0].querySelector('h4').innerHTML.indexOf('<span'));
    //console.log(x);
    par.sort(function(a, b) {

        if (a.querySelector('h4').innerHTML.slice(0, a.querySelector('h4').innerHTML.indexOf('<span')) < b.querySelector('h4').innerHTML.slice(0, b.querySelector('h4').innerHTML.indexOf('<span'))) {
            return -1;
        }
        if (a.querySelector('h4').innerHTML.slice(0, a.querySelector('h4').innerHTML.indexOf('<span')) > b.querySelector('h4').innerHTML.slice(0, b.querySelector('h4').innerHTML.indexOf('<span'))) {
            return 1;
        }
        return 0;
    });



    for (let itemPar of par) {
        wrapperForCards.append(itemPar);
    };
};

function sortByPriceIncrease(par) {

    //let t = 0.1 + 0.2;
    //console.log( t );
    //console.log( t.toFixed(2) );

    par.sort(function(a, b) {

        if (+a.querySelector('.price').innerHTML.slice(0, -2) > +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return 1;
        }
        if (+a.querySelector('.price').innerHTML.slice(0, -2) < +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return -1;
        }
        return 0;
    });

    for (let itemPar of par) {
        wrapperForCards.append(itemPar);
    };

}

function sortByPriceDecrease(par) {
    par.sort(function(a, b) {

        if (+a.querySelector('.price').innerHTML.slice(0, -2) > +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return -1;
        }
        if (+a.querySelector('.price').innerHTML.slice(0, -2) < +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return 1;
        }
        return 0;
    });

    for (let itemPar of par) {
        wrapperForCards.append(itemPar);
    };

}

function sortByDateReceived(par) {
    //console.log( par[0].getAttribute('data-date-of-receipt') );
    //let x = new Date(par[0].getAttribute('data-date-of-receipt'));
    //console.log(x);


    par.sort(function(a, b) {

        if (new Date(a.getAttribute('data-date-of-receipt')) > new Date(b.getAttribute('data-date-of-receipt'))) {
            return -1;
        }
        if (new Date(a.getAttribute('data-date-of-receipt')) < new Date(b.getAttribute('data-date-of-receipt'))) {
            return 1;
        }
        return 0;
    });
    for (let itemPar of par) {
        wrapperForCards.append(itemPar);
    };

}

btnApplyFilter.addEventListener('click', function() { filterByManufacturerWeightPrice() });














/*relative card(s)
let widthCard = 416;
let countCard = 3;
let countChangeAmountCard = 0;
let position = 0;
transitionToAnotherSlide
function callbackAmountBlockOfSortCard(par) {
    countChangeAmountCard = 0;
    countChangeAmountCard = par;
    console.log(countChangeAmountCard);
};
function callbackAmountBlockOfFilterUrl(par) {
    countChangeAmountCard = 0;
    countChangeAmountCard = par;
    console.log(countChangeAmountCard);
};

catalogCategories__prev.onclick = function() {
    position += widthCard * countCard;
    position = Math.min(position, 0);
    wrapperForCards.style.transform = `translateX(${position + 'px'})`;
    
  };

catalogCategories__next.onclick = function() {
    position -= widthCard * countCard;
    position = Math.max(position, -widthCard * (countChangeAmountCard / 1.74 - countCard));
    wrapperForCards.style.transform = `translateX(${position + 'px'})`;
  };



 if (wrapperForCards.querySelectorAll(".wrapper").length > 0) { //extract product cards from created blocks and delete blocks

        collectM = wrapperForCards.querySelectorAll(".wrapper");


        collectM.forEach((item) => {
            let count = item.childNodes.length;
            for (let i = 0; i < count; ++i) {
                wrapperForCards.append(item.childNodes[0]);
            }
            item.remove();
        });
    };*/