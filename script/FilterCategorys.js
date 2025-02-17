//for catalogCategories.html
const category = document.querySelectorAll('input[type="radio"]'); //all categories
let blockCardsGoods = document.querySelector('.catalogCategories__cards-goods'); //block in which there is counter, sorting, wrapperForCards, pageNavigation
const wrapperForCards = document.querySelector(".catalogCategories__cards-goods__wrapperForCards");
const allCards = document.querySelectorAll(".allPageCard");
const navCardsGoods = document.querySelector('.catalogCategories__cards-goods__pageNavigation'); //navigation buttons with numbers appear below the Cards
const inputManufacturerWeight = document.querySelectorAll('.filter__form input[type="checkbox"]'); //takes all inputs in the filter block on the left
let countCard = document.querySelector('#amount-card'); //card counting element
let sortList = document.querySelector('#sortingList'); //card sorting element


//console.log(blockCardsGoods.offsetWidth);
//console.log(parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10));



function changeCheckedRadioCatalogCategoriesAndFilter() { //transition to a specific category from the index.html catalogMainPage.html and filtering cards

    for (let item of category) { //will go through all categories and assign a "checked" to the one with which the link address matches

        if (item.getAttribute('id') == window.location.href.split("?")[1]) {
            item.setAttribute('checked', 'checked');
        };

        let count = 0;
        for (let itemCard of allCards) { //each category has a counter, the calculation is based on the principle: did the card's data-filter match the category id
            if (item.getAttribute('id') == itemCard.getAttribute('data-filter')) {
                count++
            };
        };

        item.nextElementSibling.childNodes[2].innerHTML = count; //the number of cards counted is located to the right of the category name
    };


    //counts cards by manufacturer and weight
    for (let itemInput of inputManufacturerWeight) { //1 element from the list is the manufacturer, then the cards are filtering 
        //and the ID of this element is compared with the attribute data-manufacturer-filter of this card, which will match (1st condition), 
        //but the ID of this element will not match the second condition, thus only manufacturers will be counted, 
        //and when the element from the list is about weight, the ID of this element will not match the attribute data-manufacturer-filter, 
        //but will match with itemCard.childNodes[5].childNodes[1].innerHTML.slice(0, -2) (the span element responsible for weight), 
        //thus only the weight will be counted, and the manufacturer will be ignored

        let count = 0;

        for (let itemCard of allCards) {

            if (itemInput.getAttribute('id') == itemCard.getAttribute('data-manufacturer-filter') || itemInput.getAttribute('id') == itemCard.childNodes[5].childNodes[1].innerHTML.slice(0, -2)) {

                count++

            };

            //console.log(itemCard.childNodes[5].childNodes[1])
        };

        itemInput.nextElementSibling.nextElementSibling.innerHTML = count; //the number of cards counted is located to the right of the list items
    };



    if (window.location.href.split("html")[1] == '') { //on the pages catalogMainPage.html, there is a category 'all products' (it links to catalogCategories.html, and the address of this link is without the ? sign) and when 'split' occurs, 
        //there will be an empty line, the condition will be true, the category will not be selected and all cards will be displayed
        for (let item of allCards) {
            item.classList.remove('hide');
        }

    } else if (window.location.href.split("?").length == 2) { //on the pages index.html and catalogMainPage.html there are categories (aka links) to specific categories on the page catalogCategories.html
        for (let item of allCards) { //but there is also a drop-down list in the header(all pages). The items of which also lead to specific categories on the catalogCategories.html page, 
            // but with an additional parameters. example: 1.href="https://livebacteria.local/catalogCategories.html?bacteria-for-septic" 2.href="https://livebacteria.local/catalogCategories.html?For-soil-and-plants?from-pests"(from-pests - additional parameters)
            // the condition "window.location.href.split("?").length == 2" allows to separate them
            if (item.getAttribute('data-filter') == window.location.href.split("?")[1]) { //checks the link address and displays the cards of the corresponding category
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        };

    } else {
        for (let item of allCards) {
            if (item.getAttribute('data-manufacturer-filter')) { //if the card has the data-manufacturer-filter attribute, then it will display cards according to two conditions
                if (item.getAttribute('data-filter') == window.location.href.split("?")[1] && item.getAttribute('data-manufacturer-filter') == window.location.href.split("?")[2]) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }

            } else if (item.getAttribute('data-pests-filter')) { //if the card has the data-pests-filter attribute, then it will display cards according to two conditions

                if (item.getAttribute('data-filter') == window.location.href.split("?")[1] && item.getAttribute('data-pests-filter') == window.location.href.split("?")[2]) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            }
        };
    };







    let collectionOfFilteredCard = [];
    addFilteredCardsToCollection(collectionOfFilteredCard); //on line 292

    getСollectionOfFilteredCard(collectionOfFilteredCard); //on line 159

    choiceHowToSort();


    createSliderNavElemAndMove(collectionOfFilteredCard); //on line 301



};



function filterCard(e) {
    removeWrapperFor6Cards(); //on line 755

    for (let item of allCards) {
        if (item.getAttribute('data-filter') == e.target.getAttribute("id")) { //filter relative data-filter
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

    let collectionOfFilteredCard = [];
    addFilteredCardsToCollection(collectionOfFilteredCard); //on line 292

    getСollectionOfFilteredCard(collectionOfFilteredCard); //on line 159
    //console.log(collectionOfFilteredCard);
    choiceHowToSort();

    createSliderNavElemAndMove(collectionOfFilteredCard); //on line 301

};

category.forEach((item) => {
    item.addEventListener('click', filterCard); //on line 121
});


function filterByManufacturerWeightPrice() {
    removeWrapperFor6Cards(); //on line 755

    let minPrice = priceRangeInput[0].value;
    let maxPrice = priceRangeInput[1].value;

    for (let itemCard of collectionOfFilteredCardForAll) {
        itemCard.classList.add('hide');
    };
    let manufacturerAll = document.querySelectorAll('#manufacturer input[type=checkbox]');
    let weightInGramsAll = document.querySelectorAll('#weightInGrams input[type=checkbox]');



    let checkInputCheckedInManufacturerAllAndweightInGramsAll = function() { //check that at least 1 element is selected in both manufacturer and weightInGrams
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

        console.log(countManufact);
        console.log(countWeight);

    };



    if (checkInputCheckedInManufacturerAllAndweightInGramsAll()) {

        for (let itemManufact of manufacturerAll) {
            if (itemManufact.checked) {
                for (let itemCard of collectionOfFilteredCardForAll) {
                    if (itemManufact.id == itemCard.getAttribute('data-manufacturer-filter')) { //if the ID of the checked manufacturer matches the data-manufacturer-filter of the card
                        itemCard.classList.remove('hide'); //then it will remove the hide class of the card
                    } //but since the hide class has been removed in certain cards, in order to additionally filter by weightInGrams, 
                    for (let itemWeight of weightInGramsAll) { //you need to add the hide class here
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

        filterPrice(collectOfFilteredCardOfManufactAndWeight); //on line 267

    } else if (checkInputCheckedInManufacturerAllAndweightInGramsAll() == false) {


        filterPrice(collectionOfFilteredCardForAll);
    } else {
        for (let itemManufact of manufacturerAll) {
            if (itemManufact.checked) {
                for (let itemCard of collectionOfFilteredCardForAll) { //if any element from manufacturer is checked, 
                    if (itemManufact.id == itemCard.getAttribute('data-manufacturer-filter')) { //then the ID of this element is compared with the data-manufacturer-filter card
                        itemCard.classList.remove('hide');
                    }
                }
            }
        }
        for (let itemWeight of weightInGramsAll) {
            if (itemWeight.checked) {
                for (let itemCard of collectionOfFilteredCardForAll) { //if any element from weightInGrams is checked,
                    if (itemWeight.id == itemCard.querySelector('.weightInGrams').innerHTML.slice(0, -2)) { //then the ID of this element is compared with the element with the class weightInGrams
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

        filterPrice(collectOfFilteredCardOfManufactAndWeight); //on line 267
    };





    function filterPrice(par) {
        for (let itemCard of par) {

            if (parseInt(itemCard.querySelector('.price').innerHTML) > minPrice && parseInt(itemCard.querySelector('.price').innerHTML) < maxPrice) { //the comparison is with the price indicated on the card /minPrice maxPrice on line 166, 167
                itemCard.classList.remove('hide');
            } else {
                itemCard.classList.add('hide');
            }
        }
    }

    wrapperForCards.style.transform = 'translateX(0)'; //resets wrapperForCards position and removes nav elements, creates new ones on line 288
    let elementNav = navCardsGoods.querySelectorAll('span');
    elementNav.forEach((item) => {
        item.remove();
    });

    let collectionOfFilteredCard = [];
    addFilteredCardsToCollection(collectionOfFilteredCard); //on line 292

    getСollectionOfFilteredCard(collectionOfFilteredCard); //on line 159

    choiceHowToSort();

    createSliderNavElemAndMove(collectionOfFilteredCard); //on line 301

    

};

let collectionOfFilteredCardForAll = [];

function getСollectionOfFilteredCard(par) {
    collectionOfFilteredCardForAll = par;
};

function addFilteredCardsToCollection(par) {
    for (let item of allCards) {

        if (!(item.classList.contains('hide'))) {
            par.push(item)
        }
    };
}
//move pages by clicking on nav elements
function createSliderNavElemAndMove(par) {
    countCard.innerHTML = par.length + ' '; //the card counter is located above the cards (id="amount-card")

    let requiredNumber = Math.ceil(par.length / 6); //6 cards are displayed on the page, calculates the amount of pages for navigation elements (class="catalogCategories__cards-goods__pageNavigation")
    //console.log(requiredNumber);



    //createSliderNavElem
    if (requiredNumber <= 5) {
        for (let i = 1; i <= requiredNumber; ++i) {
            if (i == 1) { //creates and adds a nav element and by assigning a class makes it green
                let navElem = document.createElement('span');
                navElem.classList.add('active');
                navElem.append(`${i}`);
                catalogCategories__next.before(navElem);

            } else {
                let navElem = document.createElement('span'); //creates and adds other nav element
                navElem.append(`${i}`);
                catalogCategories__next.before(navElem);
            }
        }
    } else {
        for (let i = 1; i <= requiredNumber; ++i) {
            if (i == 1) {
                let navElem = document.createElement('span'); //creates and adds a nav element and by assigning a class makes it green
                navElem.classList.add('active');
                navElem.append(`${i}`);
                catalogCategories__next.before(navElem);
            } else if (i > 1 && i < 4) { //creates and adds the second and third nav elements
                let navElem = document.createElement('span');
                navElem.append(`${i}`);
                catalogCategories__next.before(navElem);
            } else if (i == 4) { //add ellipsis to the fourth element
                let navElem = document.createElement('span');
                navElem.append('...');
                catalogCategories__next.before(navElem); //in the fifth element add requiredNumber(on line 304), and in the browser it will look like nav element of the last page
                let navElemLast = document.createElement('span');
                navElemLast.append(`${requiredNumber}`);
                catalogCategories__next.before(navElemLast);
            } else {
                break;
            }
        }
    }


    let collectionNavElementsSortCard = navCardsGoods.querySelectorAll('span'); //takes all navigation elements
    getNavElements(collectionNavElementsSortCard); //on line 460

    callbackAmountBlock(requiredNumber); //on line 367

    moveSlideOnClickNavElem(collectionNavElementsSortCard);
}


let widthBlock = 1272;

let countBlock = 1;
let position = 0;
let countChangeAmountBlock; //--------------- equals requiredNumber(on line 304)
//                                          |  - This is necessary for moveSlideOnClickNavElem(on line 372), catalogCategories__prev.onclick(on line 467) and catalogCategories__next.onclick(on line 529) to work.
//                                          |
function callbackAmountBlock(par) { //-------

    countChangeAmountBlock = par;
};

function moveSlideOnClickNavElem(par) { //par == collection of created navigation elements(span span span...)


    par.forEach((item) => { //for each navigation element
        if (countChangeAmountBlock <= 5) {
            item.onclick = function(e) {

                /*Why did I write this... it is unclear
                if ((blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10)) != widthBlock) {
                    widthBlock = blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10);
                    wrapperForCards.style.transform = `translateX(0px)`;
                    navCardsGoods.querySelector('.active').classList.remove('active');
                    navCardsGoods.childNodes[3].classList.add('active');
                }*/

                //example: 3 nav elements, 1st block is displayed, 1st nav element with class 'active', translateX(0). Click on 3rd element
                item.parentElement.querySelector('.active').classList.remove('active');
                wrapperForCards.style.transform = `translateX(${(-widthBlock * (e.target.innerHTML - 1) ) + 'px'})`; //widthBlock(on line 360)
                //translateX( -1272 * ( (e.target.innerHTML == 3) - 1) == -1272 * 2 == -2544px will shift to the left)
                e.target.classList.add('active');
            }

        }

        if (countChangeAmountBlock > 5) {
            item.onclick = function(e) { //item == span from collection of created navigation elements(span span span...)
                /*Why did I write this... it is unclear
                if ((blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10)) != widthBlock) {
                    widthBlock = blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10);
                    wrapperForCards.style.transform = `translateX(0px)`;
                    navCardsGoods.querySelector('.active').classList.remove('active');
                    navCardsGoods.childNodes[3].classList.add('active');
                    navCardsGoods.childNodes[4].innerHTML = "2";
                    navCardsGoods.childNodes[5].innerHTML = "3";
                    navCardsGoods.childNodes[6].innerHTML = "...";

                } */

                if (!(e.target.innerHTML == '...')) { //same as on line 387
                    item.parentElement.querySelector('.active').classList.remove('active');
                    wrapperForCards.style.transform = `translateX(${(-widthBlock * (e.target.innerHTML - 1)) + 'px'})`;
                    e.target.classList.add('active');
                    if (e.target.innerHTML == countChangeAmountBlock) { //if true, then e.target == last element
                        //example: e.target == 18 and countChangeAmountBlock == 18
                        //there are 5 elements in total
                        e.target.previousSibling.innerHTML = (countChangeAmountBlock - 1); //4 element == 17
                        par[2].innerHTML = (countChangeAmountBlock - 2); //3 element == 16
                        par[1].innerHTML = '...'; //2 element == '...' and 1 element no changes
                    };
                    if (e.target.innerHTML == 1) {
                        e.target.nextSibling.innerHTML = 2; //2 element == 2
                        par[2].innerHTML = 3; //3 element == 3
                        par[3].innerHTML = '...'; //4 element == '...' and 5 element no changes
                    };
                };
                if (e.target === par[3] && e.target.innerHTML == '...') { //there is an ellipsis in element 4
                    ++par[2].innerHTML; //3 element ++
                    wrapperForCards.style.transform = `translateX(${(-widthBlock * (par[2].innerHTML - 1)) + 'px'})`; //same as on line 387
                    item.parentElement.querySelector('.active').classList.remove('active');
                    par[2].classList.add('active');

                } else if (e.target === par[1] && e.target.innerHTML == '...') { //there is an ellipsis in element 2
                    --par[2].innerHTML; //3 element --
                    wrapperForCards.style.transform = `translateX(${(-widthBlock * (par[2].innerHTML - 1)) + 'px'})`; //same as on line 387
                    item.parentElement.querySelector('.active').classList.remove('active');
                    par[2].classList.add('active');
                };

                if (par[2].innerHTML == (countChangeAmountBlock - 2)) { //3 element == 16 //needed if you move in order from 18 to 1
                    par[3].innerHTML = (countChangeAmountBlock - 1) //4 element == 17
                } else if (par[2].innerHTML == (countChangeAmountBlock - 3)) { //3 element == 15
                    par[3].innerHTML = '...' //4 element == '...'
                }

                if (par[2].innerHTML == 3) { //3 element == 3 //needed if you move in order from 18 to 1
                    par[1].innerHTML = 2 //2 element == 2
                } else if (par[2].innerHTML == 4) { //3 element == 4 //needed if you move in order from 1 to 18
                    par[1].innerHTML = '...' //2 element == '...'
                }


            }
        }

    });

};

let allNavElements; //---------------
//                                  | - This is necessary for catalogCategories__prev.onclick(on line 467) and catalogCategories__next.onclick(on line 529) to work.
function getNavElements(par) { //----
    allNavElements = par;

}


//move pages by clicking on arrows
catalogCategories__prev.onclick = function() {
    /*Why did I write this... it is unclear
     if ((blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10)) != widthBlock) {
         widthBlock = blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10);
         wrapperForCards.style.transform = `translateX(0px)`;
         navCardsGoods.querySelector('.active').classList.remove('active');
         navCardsGoods.childNodes[3].classList.add('active');
         if (countChangeAmountBlock > 5) {
             navCardsGoods.childNodes[4].innerHTML = "2";
             navCardsGoods.childNodes[5].innerHTML = "3";
             navCardsGoods.childNodes[6].innerHTML = "...";
         }
     } else {*/

    let transformValue = wrapperForCards.style.transform.slice(11, -3); //get data about the location of the block with cards that is moving
    position = Math.min(Number(transformValue), -widthBlock); //does not allow wrapperForCards to move more than necessary (to the left)

    wrapperForCards.style.transform = `translateX(${(position + widthBlock)  + 'px'})`;

    if (countChangeAmountBlock <= 5) {
        let navElemActive;
        for (let item of allNavElements) {
            if (item.classList.contains('active')) { //searches for a nav element with class 'active' and puts it into the variable navElemActive
                navElemActive = item;
            }
        };
        if (!(navElemActive.previousElementSibling == catalogCategories__prev)) { //gives the neighboring(to the left of the current element) element the active class, and removes the active class from the current element
            navElemActive.previousElementSibling.classList.add('active');
            navElemActive.classList.remove('active');
        }
    }


    if (countChangeAmountBlock > 5) {
        let navElemActive;
        for (let item of allNavElements) {
            if (item.classList.contains('active')) { //same as on line 557
                navElemActive = item;
            }
        };

        if (!(navElemActive.previousElementSibling == catalogCategories__prev) && !(navElemActive.innerHTML < (countChangeAmountBlock - 1) && navElemActive.innerHTML > 3)) { //same as on line 561, 562

            navElemActive.previousElementSibling.classList.add('active'); //active element < value (last element - 1)  and active element > 3
            navElemActive.classList.remove('active');
        };

        if (position < (-widthBlock * 2) && position > -widthBlock * (countChangeAmountBlock - 2)) {
            --allNavElements[2].innerHTML; //do -- in range from -3816px to -19080px(wrapperForCards: transform translateX()) / in browser <- 1 ... 4-15(range) ... 18 ->
        };

        if (allNavElements[2].innerHTML == 3) { //to remove "...", in the situation: <- 1 ... 4 ... 18 ->  /click/ <- 1 2 3 ... 18 ->
            allNavElements[1].innerHTML = 2;
        };


        if (allNavElements[2].innerHTML == countChangeAmountBlock - 3) { //to add "...", in the situation: <- 1 ... 16 17 18 ->  /click/ <- 1 ... 15 ... 18 ->
            allNavElements[3].innerHTML = '...';
        };
    };

    //}
};

catalogCategories__next.onclick = function() {


    /*Why did I write this... it is unclear
    if ((blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10)) != widthBlock) {
        widthBlock = blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10);
        wrapperForCards.style.transform = `translateX(0px)`;
        navCardsGoods.querySelector('.active').classList.remove('active');
        navCardsGoods.childNodes[3].classList.add('active');
        if (countChangeAmountBlock > 5) {
            navCardsGoods.childNodes[4].innerHTML = "2";
            navCardsGoods.childNodes[5].innerHTML = "3";
            navCardsGoods.childNodes[6].innerHTML = "...";
        }

    } else {*/
    let transformValue = wrapperForCards.style.transform.slice(11, -3); //get data about the location of the block(wrapperForCards) with cards that is moving
    //console.log(transformValue);
    position = Math.max((Number(transformValue) - widthBlock), -widthBlock * (countChangeAmountBlock - countBlock)); //does not allow wrapperForCards to move more than necessary (to the right)
    wrapperForCards.style.transform = `translateX(${position + 'px'})`;


    if (countChangeAmountBlock <= 5) {
        let navElemActive;
        for (let item of allNavElements) {
            if (item.classList.contains('active')) { //searches for a nav element with class 'active' and puts it into the variable navElemActive
                navElemActive = item;
            }
        };
        if (!(navElemActive.nextElementSibling == catalogCategories__next)) { //gives the neighboring(to the right of the current element) element the active class, 
            navElemActive.nextElementSibling.classList.add('active'); //and removes the active class from the current element, but if the element on the right is not an arrow
            navElemActive.classList.remove('active');
        };
    }



    if (countChangeAmountBlock > 5) {
        let navElemActive;
        for (let item of allNavElements) {
            if (item.classList.contains('active')) { //same as on line 557
                navElemActive = item;
            }
        };


        if (!(navElemActive.nextElementSibling == catalogCategories__next) && !(navElemActive.innerHTML > 2 && navElemActive.innerHTML < (countChangeAmountBlock - 2))) { //same as on line 561, 562
            navElemActive.nextElementSibling.classList.add('active'); //active element > 2 and active element < value (last element - 2)
            navElemActive.classList.remove('active');

        };

        if (position < -widthBlock * 2 && position > -widthBlock * (countChangeAmountBlock - 2)) { // value position on line 550
            ++allNavElements[2].innerHTML //do ++ in range from -3816px to -19080px(wrapperForCards: transform translateX()) / in browser <- 1 ... 4-15(range) ... 18 ->
        }
        if (allNavElements[2].innerHTML == countChangeAmountBlock - 2) {
            allNavElements[3].innerHTML = countChangeAmountBlock - 1; //to remove "...", in the situation: <- 1 ... 15 ... 18 ->  /click/ <- 1 ... 16 17 18 ->
        };

        if (allNavElements[2].innerHTML == 4) {
            allNavElements[1].innerHTML = '...'; //to add "..." in the situation: <- 1 2 3 ... 18 ->  /click/ <- 1 ... 4 ... 18 ->
        }
    };

    // }
};




const btnApplyFilter = document.querySelector('#apply-filter'); //btn filterByManufacturerWeightPrice

const priceRangeInput = document.querySelectorAll('.filter__form__price-range input[type="number"]') //block price range

function choiceHowToSort() {
    let selected = sortList.options[sortList.selectedIndex].value; //<select name="sortingList" id="sortingList">  -> <option value="popularity">    
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

sortList.addEventListener('change', choiceHowToSort); //on line 605

function sortPopularity(par) {
    removeWrapperFor6Cards(); //on line 755

    for (let itemPar of par) {
        let fill = 0;
        let half = 0;

        for (let star of itemPar.querySelectorAll('.stars .star')) { //calculates ratings relative to class names (displayed as full or half stars in browser)
            if (star.classList.contains('fill')) {
                fill++
            } else if (star.classList.contains('half')) {
                half += 0.5
            }

        };
        let raiting = fill + half;

        itemPar.querySelector('.allPageCard__raiting').setAttribute('data-raiting', `${raiting}`); //sets the data-raiting attribute on which sorting will be performed
    };


    for (let i = 1; i < par.length; ++i) {
        let k = i;
        //while k > 0 and the rating of the first card < the rating of the second card
        while (k > 0 && Number(par[k - 1].querySelector('.allPageCard__raiting').getAttribute('data-raiting')) < Number(par[k].querySelector('.allPageCard__raiting').getAttribute('data-raiting'))) {


            let tmp = par[k - 1]; //put a first card into a temporary variable


            par[k - 1] = par[k]; //replace first card with second card


            par[k] = tmp; //replace the first card with a second one

            k -= 1;
        };
        //thus, the cards are rearranged if the rating of the second card is greater than the rating of the first card, etc.
    };

    applySorting(par); //on line 739

};

function sortByName(par) {
    removeWrapperFor6Cards(); //on line 755



    par.sort(function(a, b) {

        if (a.querySelector('h4').innerHTML.slice(0, a.querySelector('h4').innerHTML.indexOf('<span')) < b.querySelector('h4').innerHTML.slice(0, b.querySelector('h4').innerHTML.indexOf('<span'))) {
            return -1;
        }
        if (a.querySelector('h4').innerHTML.slice(0, a.querySelector('h4').innerHTML.indexOf('<span')) > b.querySelector('h4').innerHTML.slice(0, b.querySelector('h4').innerHTML.indexOf('<span'))) {
            return 1;
        }
        return 0;
    });



    applySorting(par); //on line 739
};

function sortByPriceIncrease(par) {
    removeWrapperFor6Cards(); //on line 755

    par.sort(function(a, b) {

        if (+a.querySelector('.price').innerHTML.slice(0, -2) > +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return 1;
        }
        if (+a.querySelector('.price').innerHTML.slice(0, -2) < +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return -1;
        }
        return 0;
    });

    applySorting(par); //on line 739

}

function sortByPriceDecrease(par) {
    removeWrapperFor6Cards(); //on line 755
    par.sort(function(a, b) {

        if (+a.querySelector('.price').innerHTML.slice(0, -2) > +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return -1;
        }
        if (+a.querySelector('.price').innerHTML.slice(0, -2) < +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return 1;
        }
        return 0;
    });

    applySorting(par); //on line 739

}

function sortByDateReceived(par) {
    removeWrapperFor6Cards(); //on line 755


    par.sort(function(a, b) {

        if (new Date(a.getAttribute('data-date-of-receipt')) > new Date(b.getAttribute('data-date-of-receipt'))) {
            return -1;
        }
        if (new Date(a.getAttribute('data-date-of-receipt')) < new Date(b.getAttribute('data-date-of-receipt'))) {
            return 1;
        }
        return 0;
    });
    applySorting(par); //on line 739

}

function applySorting(par) {
    if (par.length > 0) {
        
        let amountAdditionalWrappers = Math.ceil(par.length / 6);
        console.log(amountAdditionalWrappers);
        let additionalWrapper;
        for (let i = 0; i < par.length; ++i) {

            if (i % 6 == 0) {
                additionalWrapper = document.createElement('div');
                additionalWrapper.className = "wrapperFor6Cards";
                wrapperForCards.append(additionalWrapper);
            }
            additionalWrapper.append(par[i]);
        }
    }

}

function removeWrapperFor6Cards() { // WrapperFor6Cards == line 747
    if (wrapperForCards.querySelectorAll(".wrapperFor6Cards").length > 0) { //extract product cards from WrapperFor6Cards and delete WrapperFor6Cards

        collectM = wrapperForCards.querySelectorAll(".wrapperFor6Cards");


        collectM.forEach((item) => {
            let count = item.childNodes.length;
            for (let i = 0; i < count; ++i) {
                wrapperForCards.append(item.childNodes[0]);
            }
            item.remove();
        });
    };
}

btnApplyFilter.addEventListener('click', function() { filterByManufacturerWeightPrice() }); //on line 163





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