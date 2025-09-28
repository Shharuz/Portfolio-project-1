"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["FilterCategorys"],{

/***/ "./src/script/allScripts/FilterCategorys.js":
/*!**************************************************!*\
  !*** ./src/script/allScripts/FilterCategorys.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   choiceHowToSort: () => (/* binding */ choiceHowToSort),
/* harmony export */   createCollectionFilteredCards: () => (/* binding */ createCollectionFilteredCards),
/* harmony export */   createSliderNavElemAndMove: () => (/* binding */ createSliderNavElemAndMove),
/* harmony export */   filterCard: () => (/* binding */ filterCard)
/* harmony export */ });
//for catalogCategories.html
const body = document.querySelector('body'); 
const categorys = document.querySelectorAll('.forCategoryAllPages p'); //all categories
let blockCardsGoods = document.querySelector('.catalogCategories__cards-goods'); //block in which there is counter, sorting, wrapperForCards, pageNavigation
const wrapperForCards = document.querySelector(".catalogCategories__cards-goods__wrapperForCards");
const allCards = document.querySelectorAll(".allPageCard");
const navCardsGoods = document.querySelector('.catalogCategories__cards-goods__pageNavigation'); //navigation buttons with numbers appear below the Cards
const inputManufacturerWeight = document.querySelectorAll('.filter__form input[type="checkbox"]'); //takes all inputs in the filter block on the left
let countCard = document.querySelector('#amount-card'); //card counting element
let sortList = document.querySelector('#sortingList'); //card sorting element

//document.addEventListener("DOMContentLoaded", changeCheckedRadioCatalogCategoriesAndFilter);


//there is a main filtering (by category) and there is an additional one (by manufacturer, weight and price), additional filtering is based on the main one

//console.log(blockCardsGoods.offsetWidth);
//console.log(parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10));

//adaptive if you are not on the first slide
let originalWidth = blockCardsGoods.offsetWidth;
let currentWidth = originalWidth;
let step = 408;//step in pixels by which the slide is shifted according to the translateX()
window.addEventListener('resize', adjustingSlideLayout);//each time the browser window is changed, the function is launched

function adjustingSlideLayout() {
    if (currentWidth != blockCardsGoods.offsetWidth && currentWidth > blockCardsGoods.offsetWidth) {//will only work when the width of blockCardsGoods changes 
        currentWidth = blockCardsGoods.offsetWidth;
        if(currentWidth == 740){//will change the step value when changing the browser window size
            step = 100;
        }else if( currentWidth == 540 ){
            step = 200;
        }else if( currentWidth == 260 ){
            step = 280 
        }
        //console.log(currentWidth);
        //console.log(step);
        let pageNumber = Number(navCardsGoods.querySelector('.active').innerHTML);//find out which slide is selected
        //console.log(pageNumber);
        let currentTranslateX = parseInt(wrapperForCards.style.transform.slice(11, -3), 10);//get current values of translateX()
        wrapperForCards.style.transform = `translateX(${(currentTranslateX + (step * (pageNumber - 1) ))  + 'px'})`; //adjust the slide position according to the selected page and browser window size
    }else if ( currentWidth != blockCardsGoods.offsetWidth && currentWidth < blockCardsGoods.offsetWidth ){//everything is exactly the same as described above, but the browser window size increases
        currentWidth = blockCardsGoods.offsetWidth;
        if(currentWidth == 740){
            step = 200;
        }else if(currentWidth == 840){
            step = 100;
        }else if(currentWidth == 1248){
            step = 408;
        }
        //console.log(currentWidth);
        //console.log(step);
        let pageNumber = Number(navCardsGoods.querySelector('.active').innerHTML);
        //console.log(pageNumber);
        let currentTranslateX = parseInt(wrapperForCards.style.transform.slice(11, -3), 10);
        wrapperForCards.style.transform = `translateX(${(currentTranslateX - (step * (pageNumber - 1) ))  + 'px'})`; 
    }

};

function filterCard(e) { //main filtering
    removeWrapperFor6Cards();//on line 821 
    for ( let itemCategory of categorys ){
        if( itemCategory.classList.contains('highlighted') ){
            itemCategory.classList.remove('highlighted')
        }
        
    }
        
    

    e.target.classList.add('highlighted');

    for (let item of allCards) {
        if (item.getAttribute('data-filter') == e.target.getAttribute("id")) { //filter relative data-filter
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');

        }

    };



    wrapperForCards.style.transform = 'translateX(0)';     //resets wrapperForCards position and removes nav elements
    let elementNav = navCardsGoods.querySelectorAll('span');
    elementNav.forEach((item) => {
        item.remove();
    });



    choiceHowToSort();//on line 659

    createSliderNavElemAndMove(createCollectionFilteredCards()); //on line 341 / createCollectionFilteredCards() on line 185

};

let collectionOfFilteredCardForAll = [];// for all function

function createCollectionFilteredCards() {
    collectionOfFilteredCardForAll = [];
    for (let itemallCards of allCards) {
        if (!itemallCards.classList.contains('hide')) {
            collectionOfFilteredCardForAll.push(itemallCards)
        }
    }
    return collectionOfFilteredCardForAll;
};


const btnApplyFilter = document.querySelector('#apply-filter'); //btn filterByManufacturerWeightPrice

const priceRangeInput = document.querySelectorAll('.filter__form__price-range input[type="number"]') //block price range


function filterByManufacturerWeightPrice() {//additional filtering
    removeWrapperFor6Cards();//on line 821
    let minPrice = priceRangeInput[0].value; // get initial price value
    let maxPrice = priceRangeInput[1].value;

    for (let itemCard of collectionOfFilteredCardForAll) {//collection of cards as a result of the main filtering
        if (itemCard.classList.contains('hide')) { //list items Manufacturer and Price, not selected
            itemCard.classList.remove('hide')
        }
    };

    let manufacturerAll = document.querySelectorAll('#manufacturer input[type=checkbox]');
    let weightInGramsAll = document.querySelectorAll('#weightInGrams input[type=checkbox]');

    let checkInputCheckedInManufacturerAllAndweightInGramsAll = function() { //checks if 1(or more) item is selected in each list(first condition), 
        let countManufact = 0;                                                //or 1(or more) in only one list(second condition)
        let countWeight = 0;
        for (let itemManufact of manufacturerAll) {//Counts the selected items
            if (itemManufact.checked) {
                countManufact++
            }
        };

        for (let itemWeight of weightInGramsAll) {//Counts the selected items
            if (itemWeight.checked) {
                countWeight++
            }
        };
        if (countManufact >= 1 && countWeight >= 1) {
            return 1
        } else if (countManufact >= 1 || countWeight >= 1) {
            return 2
        };

    };


    if (checkInputCheckedInManufacturerAllAndweightInGramsAll() == 1) {//(first condition)
        for (let itemCard of collectionOfFilteredCardForAll) {
            itemCard.classList.add('hide');
        };

        for (let itemManufact of manufacturerAll) {//an element from the manufacturer list is selected, then its ID is compared with the data-manufacturer-filter attribute of the card
            if (itemManufact.checked) {            
                for (let itemCard of collectionOfFilteredCardForAll) {
                    if (itemManufact.id == itemCard.getAttribute('data-manufacturer-filter')) {
                        itemCard.classList.remove('hide');
                    }
                    for (let itemWeight of weightInGramsAll) {//and here it will hide cards for which itemCard.querySelector('.weightInGrams').innerHTML.slice(0, -2) matches the ID of UNSELECTED elements from the list
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

        let collectOfFilteredCardOfManufactAndWeight = [];  //creates a new collection for correct filtering by price
        for (let itemCard of allCards) {
            if (!itemCard.classList.contains('hide')) {
                collectOfFilteredCardOfManufactAndWeight.push(itemCard)
            };
        };

        filterPrice(collectOfFilteredCardOfManufactAndWeight);


    } else if (checkInputCheckedInManufacturerAllAndweightInGramsAll() == 2) {//(second condition)
        for (let itemCard of collectionOfFilteredCardForAll) {
            itemCard.classList.add('hide');
        };

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

        let collectOfFilteredCardOfManufactAndWeight = [];//creates a new collection for correct filtering by price
        for (let itemCard of allCards) {
            if (!itemCard.classList.contains('hide')) {
                collectOfFilteredCardOfManufactAndWeight.push(itemCard)
            };
        };

        filterPrice(collectOfFilteredCardOfManufactAndWeight);
    } else {
        filterPrice(collectionOfFilteredCardForAll);//when nothing is selected
    }

    function filterPrice(par) {
        for (let itemCard of par) {

            if (parseInt(itemCard.querySelector('.price').innerHTML) > minPrice && parseInt(itemCard.querySelector('.price').innerHTML) < maxPrice) { //the comparison is with the price indicated on the card /minPrice maxPrice on line 203, 204
                itemCard.classList.remove('hide');
            } else {
                itemCard.classList.add('hide');
            }
        }

    }

    let collectAllFiltering = [];       //collection of cards that passed through all filters(category,manufacturer,weight,price)
    for (let itemCard of allCards) {
        if (!itemCard.classList.contains('hide')) {
            collectAllFiltering.push(itemCard)
        };
    };

    wrapperForCards.style.transform = 'translateX(0)'; //resets wrapperForCards position and removes nav elements
    let elementNav = navCardsGoods.querySelectorAll('span');
    elementNav.forEach((item) => {
        item.remove();
    });


    choiceHowToSort();//on line 659
    createSliderNavElemAndMove(collectAllFiltering);//on line 342

};


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
                catalogCategories__next.before(navElem); //in the fifth element add requiredNumber(on line 345), and in the browser it will look like nav element of the last page
                let navElemLast = document.createElement('span');
                navElemLast.append(`${requiredNumber}`);
                catalogCategories__next.before(navElemLast);
            } else {
                break;
            }
        }
    }


    let collectionNavElementsSortCard = navCardsGoods.querySelectorAll('span'); //takes all navigation elements
    getNavElements(collectionNavElementsSortCard); //on line 506


    callbackAmountBlock(requiredNumber);// on line 410

    moveSlideOnClickNavElem(collectionNavElementsSortCard);//on line 415
}

//1920 ->catalogCategories__cards-goods 1248 widthBlock = 1272 // 1800 ->catalogCategories__cards-goods 840 widthBlock = 864 
// 1100 ->catalogCategories__cards-goods 740 widthBlock = 764  // 790 ->catalogCategories__cards-goods 540 widthBlock = 564 
// 590 ->catalogCategories__cards-goods 260 widthBlock = 284
let widthBlock; //let widthBlock = 1272;

let countBlock = 1;
let position = 0;
let countChangeAmountBlock; //--------------- equals requiredNumber()
//                                          |  - This is necessary for moveSlideOnClickNavElem(), catalogCategories__prev.onclick() and catalogCategories__next.onclick() to work.
//                                          |
function callbackAmountBlock(par) { //-------

    countChangeAmountBlock = par;
};

function moveSlideOnClickNavElem(par) { //par == collection of created navigation elements(span span span...)


    par.forEach((item) => { //for each navigation element
        if (countChangeAmountBlock <= 5) {
            item.onclick = function(e) {
                widthBlock = forAdaptive(); // for adaptive decrease or increase the distance the block will be moved
                /*Why did I write this... it is unclear
                if ((blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10)) != widthBlock) {
                    widthBlock = blockCardsGoods.offsetWidth + parseInt(window.getComputedStyle(wrapperForCards).getPropertyValue("column-gap"), 10);
                    wrapperForCards.style.transform = `translateX(0px)`;
                    navCardsGoods.querySelector('.active').classList.remove('active');
                    navCardsGoods.childNodes[3].classList.add('active');
                }*/

                //example: 3 nav elements, 1st block is displayed, 1st nav element with class 'active', translateX(0). Click on 3rd element
                item.parentElement.querySelector('.active').classList.remove('active');
                wrapperForCards.style.transform = `translateX(${(-widthBlock * (e.target.innerHTML - 1) ) + 'px'})`; //widthBlock
                //translateX( -1272 * ( (e.target.innerHTML == 3) - 1) == -1272 * 2 == -2544px will shift to the left)
                e.target.classList.add('active');
            }

        }

        if (countChangeAmountBlock > 5) {
            item.onclick = function(e) { //item == span from collection of created navigation elements(span span span...)
                widthBlock = forAdaptive(); // for adaptive decrease or increase the distance the block will be moved
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

                if (!(e.target.innerHTML == '...')) { 
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
                    wrapperForCards.style.transform = `translateX(${(-widthBlock * (par[2].innerHTML - 1)) + 'px'})`; 
                    item.parentElement.querySelector('.active').classList.remove('active');
                    par[2].classList.add('active');

                } else if (e.target === par[1] && e.target.innerHTML == '...') { //there is an ellipsis in element 2
                    --par[2].innerHTML; //3 element --
                    wrapperForCards.style.transform = `translateX(${(-widthBlock * (par[2].innerHTML - 1)) + 'px'})`; 
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
//                                  | - This is necessary for catalogCategories__prev.onclick() and catalogCategories__next.onclick() to work.
function getNavElements(par) { //----
    allNavElements = par;

}


//move pages by clicking on arrows
catalogCategories__prev.onclick = function() {
    widthBlock = forAdaptive(); // for adaptive decrease or increase the distance the block will be moved
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
        for (let item of allNavElements) {//same as on line 536
            if (item.classList.contains('active')) { 
                navElemActive = item;
            }
        };

        if (!(navElemActive.previousElementSibling == catalogCategories__prev) && !(navElemActive.innerHTML < (countChangeAmountBlock - 1) && navElemActive.innerHTML > 3)) { 

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
    widthBlock = forAdaptive(); // for adaptive decrease or increase the distance the block will be moved

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
            if (item.classList.contains('active')) { //same as on line 603
                navElemActive = item;
            }
        };


        if (!(navElemActive.nextElementSibling == catalogCategories__next) && !(navElemActive.innerHTML > 2 && navElemActive.innerHTML < (countChangeAmountBlock - 2))) { 
            navElemActive.nextElementSibling.classList.add('active'); //active element > 2 and active element < value (last element - 2)
            navElemActive.classList.remove('active');

        };

        if (position < -widthBlock * 2 && position > -widthBlock * (countChangeAmountBlock - 2)) { // 
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

function forAdaptive() {//changes the step by which the slide moves on different browser window sizes
    if (blockCardsGoods.offsetWidth == 1248) {
        return blockCardsGoods.offsetWidth + 24;
    } else if (blockCardsGoods.offsetWidth == 840) {
        return blockCardsGoods.offsetWidth + 24;
    } else if (blockCardsGoods.offsetWidth == 740) {
        return blockCardsGoods.offsetWidth + 24;
    } else if (blockCardsGoods.offsetWidth == 540) {
        return blockCardsGoods.offsetWidth + 24;
    } else if (blockCardsGoods.offsetWidth == 260) {
        return blockCardsGoods.offsetWidth + 24;
    }

}

function choiceHowToSort() {

    let collectionCardsForSorting = [];//collection of cards that passed through all filters
    for (let itemallCards of allCards) {
        if (!itemallCards.classList.contains('hide')) {
            collectionCardsForSorting.push(itemallCards)
        };
    };

    let selected = sortList.options[sortList.selectedIndex].value; //<select name="sortingList" id="sortingList">  -> <option value="popularity">    
    if (selected == 'popularity') {
        sortPopularity(collectionCardsForSorting)
    } else if (selected == 'title') {
        sortByName(collectionCardsForSorting)
    } else if (selected == 'byPriceAscending') {
        sortByPriceIncrease(collectionCardsForSorting)
    } else if (selected == 'byPriceDescending') {
        sortByPriceDecrease(collectionCardsForSorting)
    } else {
        sortByDateReceived(collectionCardsForSorting);
    }

};

sortList.addEventListener('change', choiceHowToSort); 

function sortPopularity(par) {
    removeWrapperFor6Cards(); //on line 822

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

    applySorting(par); //on line 803

};

function sortByName(par) {
    removeWrapperFor6Cards(); //on line 822


    par.sort(function(a, b) {

        if (a.querySelector('h4').innerHTML.slice(0, a.querySelector('h4').innerHTML.indexOf('<span')) < b.querySelector('h4').innerHTML.slice(0, b.querySelector('h4').innerHTML.indexOf('<span'))) {
            return -1;
        }
        if (a.querySelector('h4').innerHTML.slice(0, a.querySelector('h4').innerHTML.indexOf('<span')) > b.querySelector('h4').innerHTML.slice(0, b.querySelector('h4').innerHTML.indexOf('<span'))) {
            return 1;
        }
        return 0;
    });



    applySorting(par); //on line 803
};

function sortByPriceIncrease(par) {
    removeWrapperFor6Cards(); //on line 822

    par.sort(function(a, b) {

        if (+a.querySelector('.price').innerHTML.slice(0, -2) > +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return 1;
        }
        if (+a.querySelector('.price').innerHTML.slice(0, -2) < +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return -1;
        }
        return 0;
    });

    applySorting(par); //on line 803

}

function sortByPriceDecrease(par) {
    removeWrapperFor6Cards(); //on line 822
    par.sort(function(a, b) {

        if (+a.querySelector('.price').innerHTML.slice(0, -2) > +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return -1;
        }
        if (+a.querySelector('.price').innerHTML.slice(0, -2) < +b.querySelector('.price').innerHTML.slice(0, -2)) {
            return 1;
        }
        return 0;
    });

    applySorting(par); //on line 803

}

function sortByDateReceived(par) {
    removeWrapperFor6Cards(); //on line 822


    par.sort(function(a, b) {

        if (new Date(a.getAttribute('data-date-of-receipt')) > new Date(b.getAttribute('data-date-of-receipt'))) {
            return -1;
        }
        if (new Date(a.getAttribute('data-date-of-receipt')) < new Date(b.getAttribute('data-date-of-receipt'))) {
            return 1;
        }
        return 0;
    });
    applySorting(par); //on line 803

}

function applySorting(par) {
    if (par.length > 0) {

        let amountAdditionalWrappers = Math.ceil(par.length / 6); // calculates the amount of wrappers
        //console.log(amountAdditionalWrappers);
        let additionalWrapper;
        for (let i = 0; i < par.length; ++i) {//iterates over the cards 

            if (i % 6 == 0) {                 //and after every 6 cards
                additionalWrapper = document.createElement('div');//creates a div
                additionalWrapper.className = "wrapperFor6Cards";//with the class wrapperFor6Cards
                wrapperForCards.append(additionalWrapper);       //This div adds to wrapperForCards (on line 4)
            }
            additionalWrapper.append(par[i]);//Inside the div, it adds a card
        }
    }

}

function removeWrapperFor6Cards() { 
    if (wrapperForCards.querySelectorAll(".wrapperFor6Cards").length > 0) { //extract product cards from WrapperFor6Cards and delete WrapperFor6Cards

        let collectM = wrapperForCards.querySelectorAll(".wrapperFor6Cards");


        collectM.forEach((item) => {
            let count = item.childNodes.length;
            for (let i = 0; i < count; ++i) {
                wrapperForCards.append(item.childNodes[0]);
            }
            item.remove();
        });
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNXO0FBQ0c7QUFDbkI7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxnQkFBZ0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGdCQUFnQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL0ZpbHRlckNhdGVnb3J5cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ZvciBjYXRhbG9nQ2F0ZWdvcmllcy5odG1sXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7IFxyXG5jb25zdCBjYXRlZ29yeXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yQ2F0ZWdvcnlBbGxQYWdlcyBwJyk7IC8vYWxsIGNhdGVnb3JpZXNcclxubGV0IGJsb2NrQ2FyZHNHb29kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nQ2F0ZWdvcmllc19fY2FyZHMtZ29vZHMnKTsgLy9ibG9jayBpbiB3aGljaCB0aGVyZSBpcyBjb3VudGVyLCBzb3J0aW5nLCB3cmFwcGVyRm9yQ2FyZHMsIHBhZ2VOYXZpZ2F0aW9uXHJcbmNvbnN0IHdyYXBwZXJGb3JDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0YWxvZ0NhdGVnb3JpZXNfX2NhcmRzLWdvb2RzX193cmFwcGVyRm9yQ2FyZHNcIik7XHJcbmNvbnN0IGFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGxQYWdlQ2FyZFwiKTtcclxuY29uc3QgbmF2Q2FyZHNHb29kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nQ2F0ZWdvcmllc19fY2FyZHMtZ29vZHNfX3BhZ2VOYXZpZ2F0aW9uJyk7IC8vbmF2aWdhdGlvbiBidXR0b25zIHdpdGggbnVtYmVycyBhcHBlYXIgYmVsb3cgdGhlIENhcmRzXHJcbmNvbnN0IGlucHV0TWFudWZhY3R1cmVyV2VpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fZm9ybSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTsgLy90YWtlcyBhbGwgaW5wdXRzIGluIHRoZSBmaWx0ZXIgYmxvY2sgb24gdGhlIGxlZnRcclxubGV0IGNvdW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbW91bnQtY2FyZCcpOyAvL2NhcmQgY291bnRpbmcgZWxlbWVudFxyXG5sZXQgc29ydExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydGluZ0xpc3QnKTsgLy9jYXJkIHNvcnRpbmcgZWxlbWVudFxyXG5cclxuLy9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGFuZ2VDaGVja2VkUmFkaW9DYXRhbG9nQ2F0ZWdvcmllc0FuZEZpbHRlcik7XHJcblxyXG5cclxuLy90aGVyZSBpcyBhIG1haW4gZmlsdGVyaW5nIChieSBjYXRlZ29yeSkgYW5kIHRoZXJlIGlzIGFuIGFkZGl0aW9uYWwgb25lIChieSBtYW51ZmFjdHVyZXIsIHdlaWdodCBhbmQgcHJpY2UpLCBhZGRpdGlvbmFsIGZpbHRlcmluZyBpcyBiYXNlZCBvbiB0aGUgbWFpbiBvbmVcclxuXHJcbi8vY29uc29sZS5sb2coYmxvY2tDYXJkc0dvb2RzLm9mZnNldFdpZHRoKTtcclxuLy9jb25zb2xlLmxvZyhwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh3cmFwcGVyRm9yQ2FyZHMpLmdldFByb3BlcnR5VmFsdWUoXCJjb2x1bW4tZ2FwXCIpLCAxMCkpO1xyXG5cclxuLy9hZGFwdGl2ZSBpZiB5b3UgYXJlIG5vdCBvbiB0aGUgZmlyc3Qgc2xpZGVcclxubGV0IG9yaWdpbmFsV2lkdGggPSBibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGg7XHJcbmxldCBjdXJyZW50V2lkdGggPSBvcmlnaW5hbFdpZHRoO1xyXG5sZXQgc3RlcCA9IDQwODsvL3N0ZXAgaW4gcGl4ZWxzIGJ5IHdoaWNoIHRoZSBzbGlkZSBpcyBzaGlmdGVkIGFjY29yZGluZyB0byB0aGUgdHJhbnNsYXRlWCgpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhZGp1c3RpbmdTbGlkZUxheW91dCk7Ly9lYWNoIHRpbWUgdGhlIGJyb3dzZXIgd2luZG93IGlzIGNoYW5nZWQsIHRoZSBmdW5jdGlvbiBpcyBsYXVuY2hlZFxyXG5cclxuZnVuY3Rpb24gYWRqdXN0aW5nU2xpZGVMYXlvdXQoKSB7XHJcbiAgICBpZiAoY3VycmVudFdpZHRoICE9IGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCAmJiBjdXJyZW50V2lkdGggPiBibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGgpIHsvL3dpbGwgb25seSB3b3JrIHdoZW4gdGhlIHdpZHRoIG9mIGJsb2NrQ2FyZHNHb29kcyBjaGFuZ2VzIFxyXG4gICAgICAgIGN1cnJlbnRXaWR0aCA9IGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aDtcclxuICAgICAgICBpZihjdXJyZW50V2lkdGggPT0gNzQwKXsvL3dpbGwgY2hhbmdlIHRoZSBzdGVwIHZhbHVlIHdoZW4gY2hhbmdpbmcgdGhlIGJyb3dzZXIgd2luZG93IHNpemVcclxuICAgICAgICAgICAgc3RlcCA9IDEwMDtcclxuICAgICAgICB9ZWxzZSBpZiggY3VycmVudFdpZHRoID09IDU0MCApe1xyXG4gICAgICAgICAgICBzdGVwID0gMjAwO1xyXG4gICAgICAgIH1lbHNlIGlmKCBjdXJyZW50V2lkdGggPT0gMjYwICl7XHJcbiAgICAgICAgICAgIHN0ZXAgPSAyODAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coY3VycmVudFdpZHRoKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHN0ZXApO1xyXG4gICAgICAgIGxldCBwYWdlTnVtYmVyID0gTnVtYmVyKG5hdkNhcmRzR29vZHMucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmlubmVySFRNTCk7Ly9maW5kIG91dCB3aGljaCBzbGlkZSBpcyBzZWxlY3RlZFxyXG4gICAgICAgIC8vY29uc29sZS5sb2cocGFnZU51bWJlcik7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUcmFuc2xhdGVYID0gcGFyc2VJbnQod3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybS5zbGljZSgxMSwgLTMpLCAxMCk7Ly9nZXQgY3VycmVudCB2YWx1ZXMgb2YgdHJhbnNsYXRlWCgpXHJcbiAgICAgICAgd3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KGN1cnJlbnRUcmFuc2xhdGVYICsgKHN0ZXAgKiAocGFnZU51bWJlciAtIDEpICkpICArICdweCd9KWA7IC8vYWRqdXN0IHRoZSBzbGlkZSBwb3NpdGlvbiBhY2NvcmRpbmcgdG8gdGhlIHNlbGVjdGVkIHBhZ2UgYW5kIGJyb3dzZXIgd2luZG93IHNpemVcclxuICAgIH1lbHNlIGlmICggY3VycmVudFdpZHRoICE9IGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCAmJiBjdXJyZW50V2lkdGggPCBibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGggKXsvL2V2ZXJ5dGhpbmcgaXMgZXhhY3RseSB0aGUgc2FtZSBhcyBkZXNjcmliZWQgYWJvdmUsIGJ1dCB0aGUgYnJvd3NlciB3aW5kb3cgc2l6ZSBpbmNyZWFzZXNcclxuICAgICAgICBjdXJyZW50V2lkdGggPSBibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgaWYoY3VycmVudFdpZHRoID09IDc0MCl7XHJcbiAgICAgICAgICAgIHN0ZXAgPSAyMDA7XHJcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFdpZHRoID09IDg0MCl7XHJcbiAgICAgICAgICAgIHN0ZXAgPSAxMDA7XHJcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudFdpZHRoID09IDEyNDgpe1xyXG4gICAgICAgICAgICBzdGVwID0gNDA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnRXaWR0aCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzdGVwKTtcclxuICAgICAgICBsZXQgcGFnZU51bWJlciA9IE51bWJlcihuYXZDYXJkc0dvb2RzLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5pbm5lckhUTUwpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocGFnZU51bWJlcik7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUcmFuc2xhdGVYID0gcGFyc2VJbnQod3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybS5zbGljZSgxMSwgLTMpLCAxMCk7XHJcbiAgICAgICAgd3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KGN1cnJlbnRUcmFuc2xhdGVYIC0gKHN0ZXAgKiAocGFnZU51bWJlciAtIDEpICkpICArICdweCd9KWA7IFxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckNhcmQoZSkgeyAvL21haW4gZmlsdGVyaW5nXHJcbiAgICByZW1vdmVXcmFwcGVyRm9yNkNhcmRzKCk7Ly9vbiBsaW5lIDgyMSBcclxuICAgIGZvciAoIGxldCBpdGVtQ2F0ZWdvcnkgb2YgY2F0ZWdvcnlzICl7XHJcbiAgICAgICAgaWYoIGl0ZW1DYXRlZ29yeS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodGVkJykgKXtcclxuICAgICAgICAgICAgaXRlbUNhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuXHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpO1xyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgYWxsQ2FyZHMpIHtcclxuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJykgPT0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikpIHsgLy9maWx0ZXIgcmVsYXRpdmUgZGF0YS1maWx0ZXJcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgd3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJzsgICAgIC8vcmVzZXRzIHdyYXBwZXJGb3JDYXJkcyBwb3NpdGlvbiBhbmQgcmVtb3ZlcyBuYXYgZWxlbWVudHNcclxuICAgIGxldCBlbGVtZW50TmF2ID0gbmF2Q2FyZHNHb29kcy5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XHJcbiAgICBlbGVtZW50TmF2LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICBjaG9pY2VIb3dUb1NvcnQoKTsvL29uIGxpbmUgNjU5XHJcblxyXG4gICAgY3JlYXRlU2xpZGVyTmF2RWxlbUFuZE1vdmUoY3JlYXRlQ29sbGVjdGlvbkZpbHRlcmVkQ2FyZHMoKSk7IC8vb24gbGluZSAzNDEgLyBjcmVhdGVDb2xsZWN0aW9uRmlsdGVyZWRDYXJkcygpIG9uIGxpbmUgMTg1XHJcblxyXG59O1xyXG5cclxubGV0IGNvbGxlY3Rpb25PZkZpbHRlcmVkQ2FyZEZvckFsbCA9IFtdOy8vIGZvciBhbGwgZnVuY3Rpb25cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbGxlY3Rpb25GaWx0ZXJlZENhcmRzKCkge1xyXG4gICAgY29sbGVjdGlvbk9mRmlsdGVyZWRDYXJkRm9yQWxsID0gW107XHJcbiAgICBmb3IgKGxldCBpdGVtYWxsQ2FyZHMgb2YgYWxsQ2FyZHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1hbGxDYXJkcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uT2ZGaWx0ZXJlZENhcmRGb3JBbGwucHVzaChpdGVtYWxsQ2FyZHMpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25PZkZpbHRlcmVkQ2FyZEZvckFsbDtcclxufTtcclxuXHJcblxyXG5jb25zdCBidG5BcHBseUZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBseS1maWx0ZXInKTsgLy9idG4gZmlsdGVyQnlNYW51ZmFjdHVyZXJXZWlnaHRQcmljZVxyXG5cclxuY29uc3QgcHJpY2VSYW5nZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fZm9ybV9fcHJpY2UtcmFuZ2UgaW5wdXRbdHlwZT1cIm51bWJlclwiXScpIC8vYmxvY2sgcHJpY2UgcmFuZ2VcclxuXHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJCeU1hbnVmYWN0dXJlcldlaWdodFByaWNlKCkgey8vYWRkaXRpb25hbCBmaWx0ZXJpbmdcclxuICAgIHJlbW92ZVdyYXBwZXJGb3I2Q2FyZHMoKTsvL29uIGxpbmUgODIxXHJcbiAgICBsZXQgbWluUHJpY2UgPSBwcmljZVJhbmdlSW5wdXRbMF0udmFsdWU7IC8vIGdldCBpbml0aWFsIHByaWNlIHZhbHVlXHJcbiAgICBsZXQgbWF4UHJpY2UgPSBwcmljZVJhbmdlSW5wdXRbMV0udmFsdWU7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbUNhcmQgb2YgY29sbGVjdGlvbk9mRmlsdGVyZWRDYXJkRm9yQWxsKSB7Ly9jb2xsZWN0aW9uIG9mIGNhcmRzIGFzIGEgcmVzdWx0IG9mIHRoZSBtYWluIGZpbHRlcmluZ1xyXG4gICAgICAgIGlmIChpdGVtQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkgeyAvL2xpc3QgaXRlbXMgTWFudWZhY3R1cmVyIGFuZCBQcmljZSwgbm90IHNlbGVjdGVkXHJcbiAgICAgICAgICAgIGl0ZW1DYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbGV0IG1hbnVmYWN0dXJlckFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtYW51ZmFjdHVyZXIgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuICAgIGxldCB3ZWlnaHRJbkdyYW1zQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3dlaWdodEluR3JhbXMgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuXHJcbiAgICBsZXQgY2hlY2tJbnB1dENoZWNrZWRJbk1hbnVmYWN0dXJlckFsbEFuZHdlaWdodEluR3JhbXNBbGwgPSBmdW5jdGlvbigpIHsgLy9jaGVja3MgaWYgMShvciBtb3JlKSBpdGVtIGlzIHNlbGVjdGVkIGluIGVhY2ggbGlzdChmaXJzdCBjb25kaXRpb24pLCBcclxuICAgICAgICBsZXQgY291bnRNYW51ZmFjdCA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vciAxKG9yIG1vcmUpIGluIG9ubHkgb25lIGxpc3Qoc2Vjb25kIGNvbmRpdGlvbilcclxuICAgICAgICBsZXQgY291bnRXZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW1NYW51ZmFjdCBvZiBtYW51ZmFjdHVyZXJBbGwpIHsvL0NvdW50cyB0aGUgc2VsZWN0ZWQgaXRlbXNcclxuICAgICAgICAgICAgaWYgKGl0ZW1NYW51ZmFjdC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudE1hbnVmYWN0KytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGl0ZW1XZWlnaHQgb2Ygd2VpZ2h0SW5HcmFtc0FsbCkgey8vQ291bnRzIHRoZSBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgICAgICBpZiAoaXRlbVdlaWdodC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudFdlaWdodCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChjb3VudE1hbnVmYWN0ID49IDEgJiYgY291bnRXZWlnaHQgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY291bnRNYW51ZmFjdCA+PSAxIHx8IGNvdW50V2VpZ2h0ID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgICAgICB9O1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIGlmIChjaGVja0lucHV0Q2hlY2tlZEluTWFudWZhY3R1cmVyQWxsQW5kd2VpZ2h0SW5HcmFtc0FsbCgpID09IDEpIHsvLyhmaXJzdCBjb25kaXRpb24pXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbUNhcmQgb2YgY29sbGVjdGlvbk9mRmlsdGVyZWRDYXJkRm9yQWxsKSB7XHJcbiAgICAgICAgICAgIGl0ZW1DYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpdGVtTWFudWZhY3Qgb2YgbWFudWZhY3R1cmVyQWxsKSB7Ly9hbiBlbGVtZW50IGZyb20gdGhlIG1hbnVmYWN0dXJlciBsaXN0IGlzIHNlbGVjdGVkLCB0aGVuIGl0cyBJRCBpcyBjb21wYXJlZCB3aXRoIHRoZSBkYXRhLW1hbnVmYWN0dXJlci1maWx0ZXIgYXR0cmlidXRlIG9mIHRoZSBjYXJkXHJcbiAgICAgICAgICAgIGlmIChpdGVtTWFudWZhY3QuY2hlY2tlZCkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbUNhcmQgb2YgY29sbGVjdGlvbk9mRmlsdGVyZWRDYXJkRm9yQWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1NYW51ZmFjdC5pZCA9PSBpdGVtQ2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFudWZhY3R1cmVyLWZpbHRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbVdlaWdodCBvZiB3ZWlnaHRJbkdyYW1zQWxsKSB7Ly9hbmQgaGVyZSBpdCB3aWxsIGhpZGUgY2FyZHMgZm9yIHdoaWNoIGl0ZW1DYXJkLnF1ZXJ5U2VsZWN0b3IoJy53ZWlnaHRJbkdyYW1zJykuaW5uZXJIVE1MLnNsaWNlKDAsIC0yKSBtYXRjaGVzIHRoZSBJRCBvZiBVTlNFTEVDVEVEIGVsZW1lbnRzIGZyb20gdGhlIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtV2VpZ2h0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW1DYXJkIG9mIGNvbGxlY3Rpb25PZkZpbHRlcmVkQ2FyZEZvckFsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtV2VpZ2h0LmlkID09IGl0ZW1DYXJkLnF1ZXJ5U2VsZWN0b3IoJy53ZWlnaHRJbkdyYW1zJykuaW5uZXJIVE1MLnNsaWNlKDAsIC0yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBjb2xsZWN0T2ZGaWx0ZXJlZENhcmRPZk1hbnVmYWN0QW5kV2VpZ2h0ID0gW107ICAvL2NyZWF0ZXMgYSBuZXcgY29sbGVjdGlvbiBmb3IgY29ycmVjdCBmaWx0ZXJpbmcgYnkgcHJpY2VcclxuICAgICAgICBmb3IgKGxldCBpdGVtQ2FyZCBvZiBhbGxDYXJkcykge1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW1DYXJkLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0T2ZGaWx0ZXJlZENhcmRPZk1hbnVmYWN0QW5kV2VpZ2h0LnB1c2goaXRlbUNhcmQpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmlsdGVyUHJpY2UoY29sbGVjdE9mRmlsdGVyZWRDYXJkT2ZNYW51ZmFjdEFuZFdlaWdodCk7XHJcblxyXG5cclxuICAgIH0gZWxzZSBpZiAoY2hlY2tJbnB1dENoZWNrZWRJbk1hbnVmYWN0dXJlckFsbEFuZHdlaWdodEluR3JhbXNBbGwoKSA9PSAyKSB7Ly8oc2Vjb25kIGNvbmRpdGlvbilcclxuICAgICAgICBmb3IgKGxldCBpdGVtQ2FyZCBvZiBjb2xsZWN0aW9uT2ZGaWx0ZXJlZENhcmRGb3JBbGwpIHtcclxuICAgICAgICAgICAgaXRlbUNhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGl0ZW1NYW51ZmFjdCBvZiBtYW51ZmFjdHVyZXJBbGwpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1NYW51ZmFjdC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtQ2FyZCBvZiBjb2xsZWN0aW9uT2ZGaWx0ZXJlZENhcmRGb3JBbGwpIHsgLy9pZiBhbnkgZWxlbWVudCBmcm9tIG1hbnVmYWN0dXJlciBpcyBjaGVja2VkLCBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbU1hbnVmYWN0LmlkID09IGl0ZW1DYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1tYW51ZmFjdHVyZXItZmlsdGVyJykpIHsgLy90aGVuIHRoZSBJRCBvZiB0aGlzIGVsZW1lbnQgaXMgY29tcGFyZWQgd2l0aCB0aGUgZGF0YS1tYW51ZmFjdHVyZXItZmlsdGVyIGNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpdGVtV2VpZ2h0IG9mIHdlaWdodEluR3JhbXNBbGwpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1XZWlnaHQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbUNhcmQgb2YgY29sbGVjdGlvbk9mRmlsdGVyZWRDYXJkRm9yQWxsKSB7IC8vaWYgYW55IGVsZW1lbnQgZnJvbSB3ZWlnaHRJbkdyYW1zIGlzIGNoZWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1XZWlnaHQuaWQgPT0gaXRlbUNhcmQucXVlcnlTZWxlY3RvcignLndlaWdodEluR3JhbXMnKS5pbm5lckhUTUwuc2xpY2UoMCwgLTIpKSB7IC8vdGhlbiB0aGUgSUQgb2YgdGhpcyBlbGVtZW50IGlzIGNvbXBhcmVkIHdpdGggdGhlIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3Mgd2VpZ2h0SW5HcmFtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29sbGVjdE9mRmlsdGVyZWRDYXJkT2ZNYW51ZmFjdEFuZFdlaWdodCA9IFtdOy8vY3JlYXRlcyBhIG5ldyBjb2xsZWN0aW9uIGZvciBjb3JyZWN0IGZpbHRlcmluZyBieSBwcmljZVxyXG4gICAgICAgIGZvciAobGV0IGl0ZW1DYXJkIG9mIGFsbENhcmRzKSB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbUNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RPZkZpbHRlcmVkQ2FyZE9mTWFudWZhY3RBbmRXZWlnaHQucHVzaChpdGVtQ2FyZClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmaWx0ZXJQcmljZShjb2xsZWN0T2ZGaWx0ZXJlZENhcmRPZk1hbnVmYWN0QW5kV2VpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsdGVyUHJpY2UoY29sbGVjdGlvbk9mRmlsdGVyZWRDYXJkRm9yQWxsKTsvL3doZW4gbm90aGluZyBpcyBzZWxlY3RlZFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRlclByaWNlKHBhcikge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW1DYXJkIG9mIHBhcikge1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGl0ZW1DYXJkLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpLmlubmVySFRNTCkgPiBtaW5QcmljZSAmJiBwYXJzZUludChpdGVtQ2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKS5pbm5lckhUTUwpIDwgbWF4UHJpY2UpIHsgLy90aGUgY29tcGFyaXNvbiBpcyB3aXRoIHRoZSBwcmljZSBpbmRpY2F0ZWQgb24gdGhlIGNhcmQgL21pblByaWNlIG1heFByaWNlIG9uIGxpbmUgMjAzLCAyMDRcclxuICAgICAgICAgICAgICAgIGl0ZW1DYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1DYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvbGxlY3RBbGxGaWx0ZXJpbmcgPSBbXTsgICAgICAgLy9jb2xsZWN0aW9uIG9mIGNhcmRzIHRoYXQgcGFzc2VkIHRocm91Z2ggYWxsIGZpbHRlcnMoY2F0ZWdvcnksbWFudWZhY3R1cmVyLHdlaWdodCxwcmljZSlcclxuICAgIGZvciAobGV0IGl0ZW1DYXJkIG9mIGFsbENhcmRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xyXG4gICAgICAgICAgICBjb2xsZWN0QWxsRmlsdGVyaW5nLnB1c2goaXRlbUNhcmQpXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgd3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDApJzsgLy9yZXNldHMgd3JhcHBlckZvckNhcmRzIHBvc2l0aW9uIGFuZCByZW1vdmVzIG5hdiBlbGVtZW50c1xyXG4gICAgbGV0IGVsZW1lbnROYXYgPSBuYXZDYXJkc0dvb2RzLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcclxuICAgIGVsZW1lbnROYXYuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY2hvaWNlSG93VG9Tb3J0KCk7Ly9vbiBsaW5lIDY1OVxyXG4gICAgY3JlYXRlU2xpZGVyTmF2RWxlbUFuZE1vdmUoY29sbGVjdEFsbEZpbHRlcmluZyk7Ly9vbiBsaW5lIDM0MlxyXG5cclxufTtcclxuXHJcblxyXG4vL21vdmUgcGFnZXMgYnkgY2xpY2tpbmcgb24gbmF2IGVsZW1lbnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlck5hdkVsZW1BbmRNb3ZlKHBhcikge1xyXG5cclxuICAgIGNvdW50Q2FyZC5pbm5lckhUTUwgPSBwYXIubGVuZ3RoICsgJyAnOyAvL3RoZSBjYXJkIGNvdW50ZXIgaXMgbG9jYXRlZCBhYm92ZSB0aGUgY2FyZHMgKGlkPVwiYW1vdW50LWNhcmRcIilcclxuXHJcbiAgICBsZXQgcmVxdWlyZWROdW1iZXIgPSBNYXRoLmNlaWwocGFyLmxlbmd0aCAvIDYpOyAvLzYgY2FyZHMgYXJlIGRpc3BsYXllZCBvbiB0aGUgcGFnZSwgY2FsY3VsYXRlcyB0aGUgYW1vdW50IG9mIHBhZ2VzIGZvciBuYXZpZ2F0aW9uIGVsZW1lbnRzIChjbGFzcz1cImNhdGFsb2dDYXRlZ29yaWVzX19jYXJkcy1nb29kc19fcGFnZU5hdmlnYXRpb25cIilcclxuICAgIC8vY29uc29sZS5sb2cocmVxdWlyZWROdW1iZXIpO1xyXG5cclxuXHJcblxyXG4gICAgLy9jcmVhdGVTbGlkZXJOYXZFbGVtXHJcbiAgICBpZiAocmVxdWlyZWROdW1iZXIgPD0gNSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHJlcXVpcmVkTnVtYmVyOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMSkgeyAvL2NyZWF0ZXMgYW5kIGFkZHMgYSBuYXYgZWxlbWVudCBhbmQgYnkgYXNzaWduaW5nIGEgY2xhc3MgbWFrZXMgaXQgZ3JlZW5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgbmF2RWxlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG5hdkVsZW0uYXBwZW5kKGAke2l9YCk7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nQ2F0ZWdvcmllc19fbmV4dC5iZWZvcmUobmF2RWxlbSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7IC8vY3JlYXRlcyBhbmQgYWRkcyBvdGhlciBuYXYgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgbmF2RWxlbS5hcHBlbmQoYCR7aX1gKTtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2dDYXRlZ29yaWVzX19uZXh0LmJlZm9yZShuYXZFbGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcmVxdWlyZWROdW1iZXI7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTsgLy9jcmVhdGVzIGFuZCBhZGRzIGEgbmF2IGVsZW1lbnQgYW5kIGJ5IGFzc2lnbmluZyBhIGNsYXNzIG1ha2VzIGl0IGdyZWVuXHJcbiAgICAgICAgICAgICAgICBuYXZFbGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgbmF2RWxlbS5hcHBlbmQoYCR7aX1gKTtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2dDYXRlZ29yaWVzX19uZXh0LmJlZm9yZShuYXZFbGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMSAmJiBpIDwgNCkgeyAvL2NyZWF0ZXMgYW5kIGFkZHMgdGhlIHNlY29uZCBhbmQgdGhpcmQgbmF2IGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgIG5hdkVsZW0uYXBwZW5kKGAke2l9YCk7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nQ2F0ZWdvcmllc19fbmV4dC5iZWZvcmUobmF2RWxlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSA0KSB7IC8vYWRkIGVsbGlwc2lzIHRvIHRoZSBmb3VydGggZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICBuYXZFbGVtLmFwcGVuZCgnLi4uJyk7XHJcbiAgICAgICAgICAgICAgICBjYXRhbG9nQ2F0ZWdvcmllc19fbmV4dC5iZWZvcmUobmF2RWxlbSk7IC8vaW4gdGhlIGZpZnRoIGVsZW1lbnQgYWRkIHJlcXVpcmVkTnVtYmVyKG9uIGxpbmUgMzQ1KSwgYW5kIGluIHRoZSBicm93c2VyIGl0IHdpbGwgbG9vayBsaWtlIG5hdiBlbGVtZW50IG9mIHRoZSBsYXN0IHBhZ2VcclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtTGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgIG5hdkVsZW1MYXN0LmFwcGVuZChgJHtyZXF1aXJlZE51bWJlcn1gKTtcclxuICAgICAgICAgICAgICAgIGNhdGFsb2dDYXRlZ29yaWVzX19uZXh0LmJlZm9yZShuYXZFbGVtTGFzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IGNvbGxlY3Rpb25OYXZFbGVtZW50c1NvcnRDYXJkID0gbmF2Q2FyZHNHb29kcy5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7IC8vdGFrZXMgYWxsIG5hdmlnYXRpb24gZWxlbWVudHNcclxuICAgIGdldE5hdkVsZW1lbnRzKGNvbGxlY3Rpb25OYXZFbGVtZW50c1NvcnRDYXJkKTsgLy9vbiBsaW5lIDUwNlxyXG5cclxuXHJcbiAgICBjYWxsYmFja0Ftb3VudEJsb2NrKHJlcXVpcmVkTnVtYmVyKTsvLyBvbiBsaW5lIDQxMFxyXG5cclxuICAgIG1vdmVTbGlkZU9uQ2xpY2tOYXZFbGVtKGNvbGxlY3Rpb25OYXZFbGVtZW50c1NvcnRDYXJkKTsvL29uIGxpbmUgNDE1XHJcbn1cclxuXHJcbi8vMTkyMCAtPmNhdGFsb2dDYXRlZ29yaWVzX19jYXJkcy1nb29kcyAxMjQ4IHdpZHRoQmxvY2sgPSAxMjcyIC8vIDE4MDAgLT5jYXRhbG9nQ2F0ZWdvcmllc19fY2FyZHMtZ29vZHMgODQwIHdpZHRoQmxvY2sgPSA4NjQgXHJcbi8vIDExMDAgLT5jYXRhbG9nQ2F0ZWdvcmllc19fY2FyZHMtZ29vZHMgNzQwIHdpZHRoQmxvY2sgPSA3NjQgIC8vIDc5MCAtPmNhdGFsb2dDYXRlZ29yaWVzX19jYXJkcy1nb29kcyA1NDAgd2lkdGhCbG9jayA9IDU2NCBcclxuLy8gNTkwIC0+Y2F0YWxvZ0NhdGVnb3JpZXNfX2NhcmRzLWdvb2RzIDI2MCB3aWR0aEJsb2NrID0gMjg0XHJcbmxldCB3aWR0aEJsb2NrOyAvL2xldCB3aWR0aEJsb2NrID0gMTI3MjtcclxuXHJcbmxldCBjb3VudEJsb2NrID0gMTtcclxubGV0IHBvc2l0aW9uID0gMDtcclxubGV0IGNvdW50Q2hhbmdlQW1vdW50QmxvY2s7IC8vLS0tLS0tLS0tLS0tLS0tIGVxdWFscyByZXF1aXJlZE51bWJlcigpXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgLSBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgbW92ZVNsaWRlT25DbGlja05hdkVsZW0oKSwgY2F0YWxvZ0NhdGVnb3JpZXNfX3ByZXYub25jbGljaygpIGFuZCBjYXRhbG9nQ2F0ZWdvcmllc19fbmV4dC5vbmNsaWNrKCkgdG8gd29yay5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbmZ1bmN0aW9uIGNhbGxiYWNrQW1vdW50QmxvY2socGFyKSB7IC8vLS0tLS0tLVxyXG5cclxuICAgIGNvdW50Q2hhbmdlQW1vdW50QmxvY2sgPSBwYXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtb3ZlU2xpZGVPbkNsaWNrTmF2RWxlbShwYXIpIHsgLy9wYXIgPT0gY29sbGVjdGlvbiBvZiBjcmVhdGVkIG5hdmlnYXRpb24gZWxlbWVudHMoc3BhbiBzcGFuIHNwYW4uLi4pXHJcblxyXG5cclxuICAgIHBhci5mb3JFYWNoKChpdGVtKSA9PiB7IC8vZm9yIGVhY2ggbmF2aWdhdGlvbiBlbGVtZW50XHJcbiAgICAgICAgaWYgKGNvdW50Q2hhbmdlQW1vdW50QmxvY2sgPD0gNSkge1xyXG4gICAgICAgICAgICBpdGVtLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aEJsb2NrID0gZm9yQWRhcHRpdmUoKTsgLy8gZm9yIGFkYXB0aXZlIGRlY3JlYXNlIG9yIGluY3JlYXNlIHRoZSBkaXN0YW5jZSB0aGUgYmxvY2sgd2lsbCBiZSBtb3ZlZFxyXG4gICAgICAgICAgICAgICAgLypXaHkgZGlkIEkgd3JpdGUgdGhpcy4uLiBpdCBpcyB1bmNsZWFyXHJcbiAgICAgICAgICAgICAgICBpZiAoKGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHdyYXBwZXJGb3JDYXJkcykuZ2V0UHJvcGVydHlWYWx1ZShcImNvbHVtbi1nYXBcIiksIDEwKSkgIT0gd2lkdGhCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoQmxvY2sgPSBibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGggKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh3cmFwcGVyRm9yQ2FyZHMpLmdldFByb3BlcnR5VmFsdWUoXCJjb2x1bW4tZ2FwXCIpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKDBweClgO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkNhcmRzR29vZHMucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkNhcmRzR29vZHMuY2hpbGROb2Rlc1szXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZXhhbXBsZTogMyBuYXYgZWxlbWVudHMsIDFzdCBibG9jayBpcyBkaXNwbGF5ZWQsIDFzdCBuYXYgZWxlbWVudCB3aXRoIGNsYXNzICdhY3RpdmUnLCB0cmFuc2xhdGVYKDApLiBDbGljayBvbiAzcmQgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXJGb3JDYXJkcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeygtd2lkdGhCbG9jayAqIChlLnRhcmdldC5pbm5lckhUTUwgLSAxKSApICsgJ3B4J30pYDsgLy93aWR0aEJsb2NrXHJcbiAgICAgICAgICAgICAgICAvL3RyYW5zbGF0ZVgoIC0xMjcyICogKCAoZS50YXJnZXQuaW5uZXJIVE1MID09IDMpIC0gMSkgPT0gLTEyNzIgKiAyID09IC0yNTQ0cHggd2lsbCBzaGlmdCB0byB0aGUgbGVmdClcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvdW50Q2hhbmdlQW1vdW50QmxvY2sgPiA1KSB7XHJcbiAgICAgICAgICAgIGl0ZW0ub25jbGljayA9IGZ1bmN0aW9uKGUpIHsgLy9pdGVtID09IHNwYW4gZnJvbSBjb2xsZWN0aW9uIG9mIGNyZWF0ZWQgbmF2aWdhdGlvbiBlbGVtZW50cyhzcGFuIHNwYW4gc3Bhbi4uLilcclxuICAgICAgICAgICAgICAgIHdpZHRoQmxvY2sgPSBmb3JBZGFwdGl2ZSgpOyAvLyBmb3IgYWRhcHRpdmUgZGVjcmVhc2Ugb3IgaW5jcmVhc2UgdGhlIGRpc3RhbmNlIHRoZSBibG9jayB3aWxsIGJlIG1vdmVkXHJcbiAgICAgICAgICAgICAgICAvKldoeSBkaWQgSSB3cml0ZSB0aGlzLi4uIGl0IGlzIHVuY2xlYXJcclxuICAgICAgICAgICAgICAgIGlmICgoYmxvY2tDYXJkc0dvb2RzLm9mZnNldFdpZHRoICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUod3JhcHBlckZvckNhcmRzKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29sdW1uLWdhcFwiKSwgMTApKSAhPSB3aWR0aEJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGhCbG9jayA9IGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHdyYXBwZXJGb3JDYXJkcykuZ2V0UHJvcGVydHlWYWx1ZShcImNvbHVtbi1nYXBcIiksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyRm9yQ2FyZHMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoMHB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Q2FyZHNHb29kcy5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Q2FyZHNHb29kcy5jaGlsZE5vZGVzWzNdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdkNhcmRzR29vZHMuY2hpbGROb2Rlc1s0XS5pbm5lckhUTUwgPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgICAgICBuYXZDYXJkc0dvb2RzLmNoaWxkTm9kZXNbNV0uaW5uZXJIVE1MID0gXCIzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Q2FyZHNHb29kcy5jaGlsZE5vZGVzWzZdLmlubmVySFRNTCA9IFwiLi4uXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghKGUudGFyZ2V0LmlubmVySFRNTCA9PSAnLi4uJykpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyRm9yQ2FyZHMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsoLXdpZHRoQmxvY2sgKiAoZS50YXJnZXQuaW5uZXJIVE1MIC0gMSkpICsgJ3B4J30pYDtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaW5uZXJIVE1MID09IGNvdW50Q2hhbmdlQW1vdW50QmxvY2spIHsgLy9pZiB0cnVlLCB0aGVuIGUudGFyZ2V0ID09IGxhc3QgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2V4YW1wbGU6IGUudGFyZ2V0ID09IDE4IGFuZCBjb3VudENoYW5nZUFtb3VudEJsb2NrID09IDE4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlcmUgYXJlIDUgZWxlbWVudHMgaW4gdG90YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLmlubmVySFRNTCA9IChjb3VudENoYW5nZUFtb3VudEJsb2NrIC0gMSk7IC8vNCBlbGVtZW50ID09IDE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhclsyXS5pbm5lckhUTUwgPSAoY291bnRDaGFuZ2VBbW91bnRCbG9jayAtIDIpOyAvLzMgZWxlbWVudCA9PSAxNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJbMV0uaW5uZXJIVE1MID0gJy4uLic7IC8vMiBlbGVtZW50ID09ICcuLi4nIGFuZCAxIGVsZW1lbnQgbm8gY2hhbmdlc1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVySFRNTCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRTaWJsaW5nLmlubmVySFRNTCA9IDI7IC8vMiBlbGVtZW50ID09IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyWzJdLmlubmVySFRNTCA9IDM7IC8vMyBlbGVtZW50ID09IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyWzNdLmlubmVySFRNTCA9ICcuLi4nOyAvLzQgZWxlbWVudCA9PSAnLi4uJyBhbmQgNSBlbGVtZW50IG5vIGNoYW5nZXNcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gcGFyWzNdICYmIGUudGFyZ2V0LmlubmVySFRNTCA9PSAnLi4uJykgeyAvL3RoZXJlIGlzIGFuIGVsbGlwc2lzIGluIGVsZW1lbnQgNFxyXG4gICAgICAgICAgICAgICAgICAgICsrcGFyWzJdLmlubmVySFRNTDsgLy8zIGVsZW1lbnQgKytcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyRm9yQ2FyZHMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsoLXdpZHRoQmxvY2sgKiAocGFyWzJdLmlubmVySFRNTCAtIDEpKSArICdweCd9KWA7IFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyWzJdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IHBhclsxXSAmJiBlLnRhcmdldC5pbm5lckhUTUwgPT0gJy4uLicpIHsgLy90aGVyZSBpcyBhbiBlbGxpcHNpcyBpbiBlbGVtZW50IDJcclxuICAgICAgICAgICAgICAgICAgICAtLXBhclsyXS5pbm5lckhUTUw7IC8vMyBlbGVtZW50IC0tXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KC13aWR0aEJsb2NrICogKHBhclsyXS5pbm5lckhUTUwgLSAxKSkgKyAncHgnfSlgOyBcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhclsyXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhclsyXS5pbm5lckhUTUwgPT0gKGNvdW50Q2hhbmdlQW1vdW50QmxvY2sgLSAyKSkgeyAvLzMgZWxlbWVudCA9PSAxNiAvL25lZWRlZCBpZiB5b3UgbW92ZSBpbiBvcmRlciBmcm9tIDE4IHRvIDFcclxuICAgICAgICAgICAgICAgICAgICBwYXJbM10uaW5uZXJIVE1MID0gKGNvdW50Q2hhbmdlQW1vdW50QmxvY2sgLSAxKSAvLzQgZWxlbWVudCA9PSAxN1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJbMl0uaW5uZXJIVE1MID09IChjb3VudENoYW5nZUFtb3VudEJsb2NrIC0gMykpIHsgLy8zIGVsZW1lbnQgPT0gMTVcclxuICAgICAgICAgICAgICAgICAgICBwYXJbM10uaW5uZXJIVE1MID0gJy4uLicgLy80IGVsZW1lbnQgPT0gJy4uLidcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyWzJdLmlubmVySFRNTCA9PSAzKSB7IC8vMyBlbGVtZW50ID09IDMgLy9uZWVkZWQgaWYgeW91IG1vdmUgaW4gb3JkZXIgZnJvbSAxOCB0byAxXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyWzFdLmlubmVySFRNTCA9IDIgLy8yIGVsZW1lbnQgPT0gMlxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJbMl0uaW5uZXJIVE1MID09IDQpIHsgLy8zIGVsZW1lbnQgPT0gNCAvL25lZWRlZCBpZiB5b3UgbW92ZSBpbiBvcmRlciBmcm9tIDEgdG8gMThcclxuICAgICAgICAgICAgICAgICAgICBwYXJbMV0uaW5uZXJIVE1MID0gJy4uLicgLy8yIGVsZW1lbnQgPT0gJy4uLidcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufTtcclxuXHJcbmxldCBhbGxOYXZFbGVtZW50czsgLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAtIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBjYXRhbG9nQ2F0ZWdvcmllc19fcHJldi5vbmNsaWNrKCkgYW5kIGNhdGFsb2dDYXRlZ29yaWVzX19uZXh0Lm9uY2xpY2soKSB0byB3b3JrLlxyXG5mdW5jdGlvbiBnZXROYXZFbGVtZW50cyhwYXIpIHsgLy8tLS0tXHJcbiAgICBhbGxOYXZFbGVtZW50cyA9IHBhcjtcclxuXHJcbn1cclxuXHJcblxyXG4vL21vdmUgcGFnZXMgYnkgY2xpY2tpbmcgb24gYXJyb3dzXHJcbmNhdGFsb2dDYXRlZ29yaWVzX19wcmV2Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIHdpZHRoQmxvY2sgPSBmb3JBZGFwdGl2ZSgpOyAvLyBmb3IgYWRhcHRpdmUgZGVjcmVhc2Ugb3IgaW5jcmVhc2UgdGhlIGRpc3RhbmNlIHRoZSBibG9jayB3aWxsIGJlIG1vdmVkXHJcbiAgICAvKldoeSBkaWQgSSB3cml0ZSB0aGlzLi4uIGl0IGlzIHVuY2xlYXJcclxuICAgICBpZiAoKGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHdyYXBwZXJGb3JDYXJkcykuZ2V0UHJvcGVydHlWYWx1ZShcImNvbHVtbi1nYXBcIiksIDEwKSkgIT0gd2lkdGhCbG9jaykge1xyXG4gICAgICAgICB3aWR0aEJsb2NrID0gYmxvY2tDYXJkc0dvb2RzLm9mZnNldFdpZHRoICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUod3JhcHBlckZvckNhcmRzKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29sdW1uLWdhcFwiKSwgMTApO1xyXG4gICAgICAgICB3cmFwcGVyRm9yQ2FyZHMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoMHB4KWA7XHJcbiAgICAgICAgIG5hdkNhcmRzR29vZHMucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICBuYXZDYXJkc0dvb2RzLmNoaWxkTm9kZXNbM10uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgIGlmIChjb3VudENoYW5nZUFtb3VudEJsb2NrID4gNSkge1xyXG4gICAgICAgICAgICAgbmF2Q2FyZHNHb29kcy5jaGlsZE5vZGVzWzRdLmlubmVySFRNTCA9IFwiMlwiO1xyXG4gICAgICAgICAgICAgbmF2Q2FyZHNHb29kcy5jaGlsZE5vZGVzWzVdLmlubmVySFRNTCA9IFwiM1wiO1xyXG4gICAgICAgICAgICAgbmF2Q2FyZHNHb29kcy5jaGlsZE5vZGVzWzZdLmlubmVySFRNTCA9IFwiLi4uXCI7XHJcbiAgICAgICAgIH1cclxuICAgICB9IGVsc2UgeyovXHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybVZhbHVlID0gd3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybS5zbGljZSgxMSwgLTMpOyAvL2dldCBkYXRhIGFib3V0IHRoZSBsb2NhdGlvbiBvZiB0aGUgYmxvY2sgd2l0aCBjYXJkcyB0aGF0IGlzIG1vdmluZ1xyXG4gICAgcG9zaXRpb24gPSBNYXRoLm1pbihOdW1iZXIodHJhbnNmb3JtVmFsdWUpLCAtd2lkdGhCbG9jayk7IC8vZG9lcyBub3QgYWxsb3cgd3JhcHBlckZvckNhcmRzIHRvIG1vdmUgbW9yZSB0aGFuIG5lY2Vzc2FyeSAodG8gdGhlIGxlZnQpXHJcblxyXG4gICAgd3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7KHBvc2l0aW9uICsgd2lkdGhCbG9jaykgICsgJ3B4J30pYDtcclxuXHJcbiAgICBpZiAoY291bnRDaGFuZ2VBbW91bnRCbG9jayA8PSA1KSB7XHJcbiAgICAgICAgbGV0IG5hdkVsZW1BY3RpdmU7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBhbGxOYXZFbGVtZW50cykge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7IC8vc2VhcmNoZXMgZm9yIGEgbmF2IGVsZW1lbnQgd2l0aCBjbGFzcyAnYWN0aXZlJyBhbmQgcHV0cyBpdCBpbnRvIHRoZSB2YXJpYWJsZSBuYXZFbGVtQWN0aXZlXHJcbiAgICAgICAgICAgICAgICBuYXZFbGVtQWN0aXZlID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCEobmF2RWxlbUFjdGl2ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nID09IGNhdGFsb2dDYXRlZ29yaWVzX19wcmV2KSkgeyAvL2dpdmVzIHRoZSBuZWlnaGJvcmluZyh0byB0aGUgbGVmdCBvZiB0aGUgY3VycmVudCBlbGVtZW50KSBlbGVtZW50IHRoZSBhY3RpdmUgY2xhc3MsIGFuZCByZW1vdmVzIHRoZSBhY3RpdmUgY2xhc3MgZnJvbSB0aGUgY3VycmVudCBlbGVtZW50XHJcbiAgICAgICAgICAgIG5hdkVsZW1BY3RpdmUucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbmF2RWxlbUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChjb3VudENoYW5nZUFtb3VudEJsb2NrID4gNSkge1xyXG4gICAgICAgIGxldCBuYXZFbGVtQWN0aXZlO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgYWxsTmF2RWxlbWVudHMpIHsvL3NhbWUgYXMgb24gbGluZSA1MzZcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgeyBcclxuICAgICAgICAgICAgICAgIG5hdkVsZW1BY3RpdmUgPSBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCEobmF2RWxlbUFjdGl2ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nID09IGNhdGFsb2dDYXRlZ29yaWVzX19wcmV2KSAmJiAhKG5hdkVsZW1BY3RpdmUuaW5uZXJIVE1MIDwgKGNvdW50Q2hhbmdlQW1vdW50QmxvY2sgLSAxKSAmJiBuYXZFbGVtQWN0aXZlLmlubmVySFRNTCA+IDMpKSB7IFxyXG5cclxuICAgICAgICAgICAgbmF2RWxlbUFjdGl2ZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyAvL2FjdGl2ZSBlbGVtZW50IDwgdmFsdWUgKGxhc3QgZWxlbWVudCAtIDEpICBhbmQgYWN0aXZlIGVsZW1lbnQgPiAzXHJcbiAgICAgICAgICAgIG5hdkVsZW1BY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgKC13aWR0aEJsb2NrICogMikgJiYgcG9zaXRpb24gPiAtd2lkdGhCbG9jayAqIChjb3VudENoYW5nZUFtb3VudEJsb2NrIC0gMikpIHtcclxuICAgICAgICAgICAgLS1hbGxOYXZFbGVtZW50c1syXS5pbm5lckhUTUw7IC8vZG8gLS0gaW4gcmFuZ2UgZnJvbSAtMzgxNnB4IHRvIC0xOTA4MHB4KHdyYXBwZXJGb3JDYXJkczogdHJhbnNmb3JtIHRyYW5zbGF0ZVgoKSkgLyBpbiBicm93c2VyIDwtIDEgLi4uIDQtMTUocmFuZ2UpIC4uLiAxOCAtPlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChhbGxOYXZFbGVtZW50c1syXS5pbm5lckhUTUwgPT0gMykgeyAvL3RvIHJlbW92ZSBcIi4uLlwiLCBpbiB0aGUgc2l0dWF0aW9uOiA8LSAxIC4uLiA0IC4uLiAxOCAtPiAgL2NsaWNrLyA8LSAxIDIgMyAuLi4gMTggLT5cclxuICAgICAgICAgICAgYWxsTmF2RWxlbWVudHNbMV0uaW5uZXJIVE1MID0gMjtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGFsbE5hdkVsZW1lbnRzWzJdLmlubmVySFRNTCA9PSBjb3VudENoYW5nZUFtb3VudEJsb2NrIC0gMykgeyAvL3RvIGFkZCBcIi4uLlwiLCBpbiB0aGUgc2l0dWF0aW9uOiA8LSAxIC4uLiAxNiAxNyAxOCAtPiAgL2NsaWNrLyA8LSAxIC4uLiAxNSAuLi4gMTggLT5cclxuICAgICAgICAgICAgYWxsTmF2RWxlbWVudHNbM10uaW5uZXJIVE1MID0gJy4uLic7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLy99XHJcbn07XHJcblxyXG5jYXRhbG9nQ2F0ZWdvcmllc19fbmV4dC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICB3aWR0aEJsb2NrID0gZm9yQWRhcHRpdmUoKTsgLy8gZm9yIGFkYXB0aXZlIGRlY3JlYXNlIG9yIGluY3JlYXNlIHRoZSBkaXN0YW5jZSB0aGUgYmxvY2sgd2lsbCBiZSBtb3ZlZFxyXG5cclxuICAgIC8qV2h5IGRpZCBJIHdyaXRlIHRoaXMuLi4gaXQgaXMgdW5jbGVhclxyXG4gICAgaWYgKChibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGggKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh3cmFwcGVyRm9yQ2FyZHMpLmdldFByb3BlcnR5VmFsdWUoXCJjb2x1bW4tZ2FwXCIpLCAxMCkpICE9IHdpZHRoQmxvY2spIHtcclxuICAgICAgICB3aWR0aEJsb2NrID0gYmxvY2tDYXJkc0dvb2RzLm9mZnNldFdpZHRoICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUod3JhcHBlckZvckNhcmRzKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29sdW1uLWdhcFwiKSwgMTApO1xyXG4gICAgICAgIHdyYXBwZXJGb3JDYXJkcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgwcHgpYDtcclxuICAgICAgICBuYXZDYXJkc0dvb2RzLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBuYXZDYXJkc0dvb2RzLmNoaWxkTm9kZXNbM10uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGNvdW50Q2hhbmdlQW1vdW50QmxvY2sgPiA1KSB7XHJcbiAgICAgICAgICAgIG5hdkNhcmRzR29vZHMuY2hpbGROb2Rlc1s0XS5pbm5lckhUTUwgPSBcIjJcIjtcclxuICAgICAgICAgICAgbmF2Q2FyZHNHb29kcy5jaGlsZE5vZGVzWzVdLmlubmVySFRNTCA9IFwiM1wiO1xyXG4gICAgICAgICAgICBuYXZDYXJkc0dvb2RzLmNoaWxkTm9kZXNbNl0uaW5uZXJIVE1MID0gXCIuLi5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHsqL1xyXG4gICAgbGV0IHRyYW5zZm9ybVZhbHVlID0gd3JhcHBlckZvckNhcmRzLnN0eWxlLnRyYW5zZm9ybS5zbGljZSgxMSwgLTMpOyAvL2dldCBkYXRhIGFib3V0IHRoZSBsb2NhdGlvbiBvZiB0aGUgYmxvY2sod3JhcHBlckZvckNhcmRzKSB3aXRoIGNhcmRzIHRoYXQgaXMgbW92aW5nXHJcbiAgICAvL2NvbnNvbGUubG9nKHRyYW5zZm9ybVZhbHVlKTtcclxuICAgIHBvc2l0aW9uID0gTWF0aC5tYXgoKE51bWJlcih0cmFuc2Zvcm1WYWx1ZSkgLSB3aWR0aEJsb2NrKSwgLXdpZHRoQmxvY2sgKiAoY291bnRDaGFuZ2VBbW91bnRCbG9jayAtIGNvdW50QmxvY2spKTsgLy9kb2VzIG5vdCBhbGxvdyB3cmFwcGVyRm9yQ2FyZHMgdG8gbW92ZSBtb3JlIHRoYW4gbmVjZXNzYXJ5ICh0byB0aGUgcmlnaHQpXHJcbiAgICB3cmFwcGVyRm9yQ2FyZHMuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtwb3NpdGlvbiArICdweCd9KWA7XHJcblxyXG5cclxuICAgIGlmIChjb3VudENoYW5nZUFtb3VudEJsb2NrIDw9IDUpIHtcclxuICAgICAgICBsZXQgbmF2RWxlbUFjdGl2ZTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFsbE5hdkVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHsgLy9zZWFyY2hlcyBmb3IgYSBuYXYgZWxlbWVudCB3aXRoIGNsYXNzICdhY3RpdmUnIGFuZCBwdXRzIGl0IGludG8gdGhlIHZhcmlhYmxlIG5hdkVsZW1BY3RpdmVcclxuICAgICAgICAgICAgICAgIG5hdkVsZW1BY3RpdmUgPSBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoIShuYXZFbGVtQWN0aXZlLm5leHRFbGVtZW50U2libGluZyA9PSBjYXRhbG9nQ2F0ZWdvcmllc19fbmV4dCkpIHsgLy9naXZlcyB0aGUgbmVpZ2hib3JpbmcodG8gdGhlIHJpZ2h0IG9mIHRoZSBjdXJyZW50IGVsZW1lbnQpIGVsZW1lbnQgdGhlIGFjdGl2ZSBjbGFzcywgXHJcbiAgICAgICAgICAgIG5hdkVsZW1BY3RpdmUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyAvL2FuZCByZW1vdmVzIHRoZSBhY3RpdmUgY2xhc3MgZnJvbSB0aGUgY3VycmVudCBlbGVtZW50LCBidXQgaWYgdGhlIGVsZW1lbnQgb24gdGhlIHJpZ2h0IGlzIG5vdCBhbiBhcnJvd1xyXG4gICAgICAgICAgICBuYXZFbGVtQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBpZiAoY291bnRDaGFuZ2VBbW91bnRCbG9jayA+IDUpIHtcclxuICAgICAgICBsZXQgbmF2RWxlbUFjdGl2ZTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFsbE5hdkVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHsgLy9zYW1lIGFzIG9uIGxpbmUgNjAzXHJcbiAgICAgICAgICAgICAgICBuYXZFbGVtQWN0aXZlID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBpZiAoIShuYXZFbGVtQWN0aXZlLm5leHRFbGVtZW50U2libGluZyA9PSBjYXRhbG9nQ2F0ZWdvcmllc19fbmV4dCkgJiYgIShuYXZFbGVtQWN0aXZlLmlubmVySFRNTCA+IDIgJiYgbmF2RWxlbUFjdGl2ZS5pbm5lckhUTUwgPCAoY291bnRDaGFuZ2VBbW91bnRCbG9jayAtIDIpKSkgeyBcclxuICAgICAgICAgICAgbmF2RWxlbUFjdGl2ZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7IC8vYWN0aXZlIGVsZW1lbnQgPiAyIGFuZCBhY3RpdmUgZWxlbWVudCA8IHZhbHVlIChsYXN0IGVsZW1lbnQgLSAyKVxyXG4gICAgICAgICAgICBuYXZFbGVtQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAocG9zaXRpb24gPCAtd2lkdGhCbG9jayAqIDIgJiYgcG9zaXRpb24gPiAtd2lkdGhCbG9jayAqIChjb3VudENoYW5nZUFtb3VudEJsb2NrIC0gMikpIHsgLy8gXHJcbiAgICAgICAgICAgICsrYWxsTmF2RWxlbWVudHNbMl0uaW5uZXJIVE1MIC8vZG8gKysgaW4gcmFuZ2UgZnJvbSAtMzgxNnB4IHRvIC0xOTA4MHB4KHdyYXBwZXJGb3JDYXJkczogdHJhbnNmb3JtIHRyYW5zbGF0ZVgoKSkgLyBpbiBicm93c2VyIDwtIDEgLi4uIDQtMTUocmFuZ2UpIC4uLiAxOCAtPlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWxsTmF2RWxlbWVudHNbMl0uaW5uZXJIVE1MID09IGNvdW50Q2hhbmdlQW1vdW50QmxvY2sgLSAyKSB7XHJcbiAgICAgICAgICAgIGFsbE5hdkVsZW1lbnRzWzNdLmlubmVySFRNTCA9IGNvdW50Q2hhbmdlQW1vdW50QmxvY2sgLSAxOyAvL3RvIHJlbW92ZSBcIi4uLlwiLCBpbiB0aGUgc2l0dWF0aW9uOiA8LSAxIC4uLiAxNSAuLi4gMTggLT4gIC9jbGljay8gPC0gMSAuLi4gMTYgMTcgMTggLT5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoYWxsTmF2RWxlbWVudHNbMl0uaW5uZXJIVE1MID09IDQpIHtcclxuICAgICAgICAgICAgYWxsTmF2RWxlbWVudHNbMV0uaW5uZXJIVE1MID0gJy4uLic7IC8vdG8gYWRkIFwiLi4uXCIgaW4gdGhlIHNpdHVhdGlvbjogPC0gMSAyIDMgLi4uIDE4IC0+ICAvY2xpY2svIDwtIDEgLi4uIDQgLi4uIDE4IC0+XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBmb3JBZGFwdGl2ZSgpIHsvL2NoYW5nZXMgdGhlIHN0ZXAgYnkgd2hpY2ggdGhlIHNsaWRlIG1vdmVzIG9uIGRpZmZlcmVudCBicm93c2VyIHdpbmRvdyBzaXplc1xyXG4gICAgaWYgKGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCA9PSAxMjQ4KSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCArIDI0O1xyXG4gICAgfSBlbHNlIGlmIChibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGggPT0gODQwKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCArIDI0O1xyXG4gICAgfSBlbHNlIGlmIChibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGggPT0gNzQwKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCArIDI0O1xyXG4gICAgfSBlbHNlIGlmIChibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGggPT0gNTQwKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCArIDI0O1xyXG4gICAgfSBlbHNlIGlmIChibG9ja0NhcmRzR29vZHMub2Zmc2V0V2lkdGggPT0gMjYwKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2NrQ2FyZHNHb29kcy5vZmZzZXRXaWR0aCArIDI0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY2hvaWNlSG93VG9Tb3J0KCkge1xyXG5cclxuICAgIGxldCBjb2xsZWN0aW9uQ2FyZHNGb3JTb3J0aW5nID0gW107Ly9jb2xsZWN0aW9uIG9mIGNhcmRzIHRoYXQgcGFzc2VkIHRocm91Z2ggYWxsIGZpbHRlcnNcclxuICAgIGZvciAobGV0IGl0ZW1hbGxDYXJkcyBvZiBhbGxDYXJkcykge1xyXG4gICAgICAgIGlmICghaXRlbWFsbENhcmRzLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb25DYXJkc0ZvclNvcnRpbmcucHVzaChpdGVtYWxsQ2FyZHMpXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNlbGVjdGVkID0gc29ydExpc3Qub3B0aW9uc1tzb3J0TGlzdC5zZWxlY3RlZEluZGV4XS52YWx1ZTsgLy88c2VsZWN0IG5hbWU9XCJzb3J0aW5nTGlzdFwiIGlkPVwic29ydGluZ0xpc3RcIj4gIC0+IDxvcHRpb24gdmFsdWU9XCJwb3B1bGFyaXR5XCI+ICAgIFxyXG4gICAgaWYgKHNlbGVjdGVkID09ICdwb3B1bGFyaXR5Jykge1xyXG4gICAgICAgIHNvcnRQb3B1bGFyaXR5KGNvbGxlY3Rpb25DYXJkc0ZvclNvcnRpbmcpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09ICd0aXRsZScpIHtcclxuICAgICAgICBzb3J0QnlOYW1lKGNvbGxlY3Rpb25DYXJkc0ZvclNvcnRpbmcpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkID09ICdieVByaWNlQXNjZW5kaW5nJykge1xyXG4gICAgICAgIHNvcnRCeVByaWNlSW5jcmVhc2UoY29sbGVjdGlvbkNhcmRzRm9yU29ydGluZylcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQgPT0gJ2J5UHJpY2VEZXNjZW5kaW5nJykge1xyXG4gICAgICAgIHNvcnRCeVByaWNlRGVjcmVhc2UoY29sbGVjdGlvbkNhcmRzRm9yU29ydGluZylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc29ydEJ5RGF0ZVJlY2VpdmVkKGNvbGxlY3Rpb25DYXJkc0ZvclNvcnRpbmcpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbnNvcnRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNob2ljZUhvd1RvU29ydCk7IFxyXG5cclxuZnVuY3Rpb24gc29ydFBvcHVsYXJpdHkocGFyKSB7XHJcbiAgICByZW1vdmVXcmFwcGVyRm9yNkNhcmRzKCk7IC8vb24gbGluZSA4MjJcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtUGFyIG9mIHBhcikge1xyXG4gICAgICAgIGxldCBmaWxsID0gMDtcclxuICAgICAgICBsZXQgaGFsZiA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHN0YXIgb2YgaXRlbVBhci5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcnMgLnN0YXInKSkgeyAvL2NhbGN1bGF0ZXMgcmF0aW5ncyByZWxhdGl2ZSB0byBjbGFzcyBuYW1lcyAoZGlzcGxheWVkIGFzIGZ1bGwgb3IgaGFsZiBzdGFycyBpbiBicm93c2VyKVxyXG4gICAgICAgICAgICBpZiAoc3Rhci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbGwnKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsbCsrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3Rhci5jbGFzc0xpc3QuY29udGFpbnMoJ2hhbGYnKSkge1xyXG4gICAgICAgICAgICAgICAgaGFsZiArPSAwLjVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCByYWl0aW5nID0gZmlsbCArIGhhbGY7XHJcblxyXG4gICAgICAgIGl0ZW1QYXIucXVlcnlTZWxlY3RvcignLmFsbFBhZ2VDYXJkX19yYWl0aW5nJykuc2V0QXR0cmlidXRlKCdkYXRhLXJhaXRpbmcnLCBgJHtyYWl0aW5nfWApOyAvL3NldHMgdGhlIGRhdGEtcmFpdGluZyBhdHRyaWJ1dGUgb24gd2hpY2ggc29ydGluZyB3aWxsIGJlIHBlcmZvcm1lZFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBsZXQgayA9IGk7XHJcbiAgICAgICAgLy93aGlsZSBrID4gMCBhbmQgdGhlIHJhdGluZyBvZiB0aGUgZmlyc3QgY2FyZCA8IHRoZSByYXRpbmcgb2YgdGhlIHNlY29uZCBjYXJkXHJcbiAgICAgICAgd2hpbGUgKGsgPiAwICYmIE51bWJlcihwYXJbayAtIDFdLnF1ZXJ5U2VsZWN0b3IoJy5hbGxQYWdlQ2FyZF9fcmFpdGluZycpLmdldEF0dHJpYnV0ZSgnZGF0YS1yYWl0aW5nJykpIDwgTnVtYmVyKHBhcltrXS5xdWVyeVNlbGVjdG9yKCcuYWxsUGFnZUNhcmRfX3JhaXRpbmcnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmFpdGluZycpKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0bXAgPSBwYXJbayAtIDFdOyAvL3B1dCBhIGZpcnN0IGNhcmQgaW50byBhIHRlbXBvcmFyeSB2YXJpYWJsZVxyXG5cclxuXHJcbiAgICAgICAgICAgIHBhcltrIC0gMV0gPSBwYXJba107IC8vcmVwbGFjZSBmaXJzdCBjYXJkIHdpdGggc2Vjb25kIGNhcmRcclxuXHJcblxyXG4gICAgICAgICAgICBwYXJba10gPSB0bXA7IC8vcmVwbGFjZSB0aGUgZmlyc3QgY2FyZCB3aXRoIGEgc2Vjb25kIG9uZVxyXG5cclxuICAgICAgICAgICAgayAtPSAxO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy90aHVzLCB0aGUgY2FyZHMgYXJlIHJlYXJyYW5nZWQgaWYgdGhlIHJhdGluZyBvZiB0aGUgc2Vjb25kIGNhcmQgaXMgZ3JlYXRlciB0aGFuIHRoZSByYXRpbmcgb2YgdGhlIGZpcnN0IGNhcmQsIGV0Yy5cclxuICAgIH07XHJcblxyXG4gICAgYXBwbHlTb3J0aW5nKHBhcik7IC8vb24gbGluZSA4MDNcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzb3J0QnlOYW1lKHBhcikge1xyXG4gICAgcmVtb3ZlV3JhcHBlckZvcjZDYXJkcygpOyAvL29uIGxpbmUgODIyXHJcblxyXG5cclxuICAgIHBhci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuXHJcbiAgICAgICAgaWYgKGEucXVlcnlTZWxlY3RvcignaDQnKS5pbm5lckhUTUwuc2xpY2UoMCwgYS5xdWVyeVNlbGVjdG9yKCdoNCcpLmlubmVySFRNTC5pbmRleE9mKCc8c3BhbicpKSA8IGIucXVlcnlTZWxlY3RvcignaDQnKS5pbm5lckhUTUwuc2xpY2UoMCwgYi5xdWVyeVNlbGVjdG9yKCdoNCcpLmlubmVySFRNTC5pbmRleE9mKCc8c3BhbicpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhLnF1ZXJ5U2VsZWN0b3IoJ2g0JykuaW5uZXJIVE1MLnNsaWNlKDAsIGEucXVlcnlTZWxlY3RvcignaDQnKS5pbm5lckhUTUwuaW5kZXhPZignPHNwYW4nKSkgPiBiLnF1ZXJ5U2VsZWN0b3IoJ2g0JykuaW5uZXJIVE1MLnNsaWNlKDAsIGIucXVlcnlTZWxlY3RvcignaDQnKS5pbm5lckhUTUwuaW5kZXhPZignPHNwYW4nKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICBhcHBseVNvcnRpbmcocGFyKTsgLy9vbiBsaW5lIDgwM1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc29ydEJ5UHJpY2VJbmNyZWFzZShwYXIpIHtcclxuICAgIHJlbW92ZVdyYXBwZXJGb3I2Q2FyZHMoKTsgLy9vbiBsaW5lIDgyMlxyXG5cclxuICAgIHBhci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuXHJcbiAgICAgICAgaWYgKCthLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpLmlubmVySFRNTC5zbGljZSgwLCAtMikgPiArYi5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKS5pbm5lckhUTUwuc2xpY2UoMCwgLTIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoK2EucXVlcnlTZWxlY3RvcignLnByaWNlJykuaW5uZXJIVE1MLnNsaWNlKDAsIC0yKSA8ICtiLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpLmlubmVySFRNTC5zbGljZSgwLCAtMikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG5cclxuICAgIGFwcGx5U29ydGluZyhwYXIpOyAvL29uIGxpbmUgODAzXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0QnlQcmljZURlY3JlYXNlKHBhcikge1xyXG4gICAgcmVtb3ZlV3JhcHBlckZvcjZDYXJkcygpOyAvL29uIGxpbmUgODIyXHJcbiAgICBwYXIuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcblxyXG4gICAgICAgIGlmICgrYS5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKS5pbm5lckhUTUwuc2xpY2UoMCwgLTIpID4gK2IucXVlcnlTZWxlY3RvcignLnByaWNlJykuaW5uZXJIVE1MLnNsaWNlKDAsIC0yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgrYS5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKS5pbm5lckhUTUwuc2xpY2UoMCwgLTIpIDwgK2IucXVlcnlTZWxlY3RvcignLnByaWNlJykuaW5uZXJIVE1MLnNsaWNlKDAsIC0yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhcHBseVNvcnRpbmcocGFyKTsgLy9vbiBsaW5lIDgwM1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc29ydEJ5RGF0ZVJlY2VpdmVkKHBhcikge1xyXG4gICAgcmVtb3ZlV3JhcHBlckZvcjZDYXJkcygpOyAvL29uIGxpbmUgODIyXHJcblxyXG5cclxuICAgIHBhci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuXHJcbiAgICAgICAgaWYgKG5ldyBEYXRlKGEuZ2V0QXR0cmlidXRlKCdkYXRhLWRhdGUtb2YtcmVjZWlwdCcpKSA+IG5ldyBEYXRlKGIuZ2V0QXR0cmlidXRlKCdkYXRhLWRhdGUtb2YtcmVjZWlwdCcpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXcgRGF0ZShhLmdldEF0dHJpYnV0ZSgnZGF0YS1kYXRlLW9mLXJlY2VpcHQnKSkgPCBuZXcgRGF0ZShiLmdldEF0dHJpYnV0ZSgnZGF0YS1kYXRlLW9mLXJlY2VpcHQnKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcbiAgICBhcHBseVNvcnRpbmcocGFyKTsgLy9vbiBsaW5lIDgwM1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTb3J0aW5nKHBhcikge1xyXG4gICAgaWYgKHBhci5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgIGxldCBhbW91bnRBZGRpdGlvbmFsV3JhcHBlcnMgPSBNYXRoLmNlaWwocGFyLmxlbmd0aCAvIDYpOyAvLyBjYWxjdWxhdGVzIHRoZSBhbW91bnQgb2Ygd3JhcHBlcnNcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGFtb3VudEFkZGl0aW9uYWxXcmFwcGVycyk7XHJcbiAgICAgICAgbGV0IGFkZGl0aW9uYWxXcmFwcGVyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyLmxlbmd0aDsgKytpKSB7Ly9pdGVyYXRlcyBvdmVyIHRoZSBjYXJkcyBcclxuXHJcbiAgICAgICAgICAgIGlmIChpICUgNiA9PSAwKSB7ICAgICAgICAgICAgICAgICAvL2FuZCBhZnRlciBldmVyeSA2IGNhcmRzXHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOy8vY3JlYXRlcyBhIGRpdlxyXG4gICAgICAgICAgICAgICAgYWRkaXRpb25hbFdyYXBwZXIuY2xhc3NOYW1lID0gXCJ3cmFwcGVyRm9yNkNhcmRzXCI7Ly93aXRoIHRoZSBjbGFzcyB3cmFwcGVyRm9yNkNhcmRzXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyRm9yQ2FyZHMuYXBwZW5kKGFkZGl0aW9uYWxXcmFwcGVyKTsgICAgICAgLy9UaGlzIGRpdiBhZGRzIHRvIHdyYXBwZXJGb3JDYXJkcyAob24gbGluZSA0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxXcmFwcGVyLmFwcGVuZChwYXJbaV0pOy8vSW5zaWRlIHRoZSBkaXYsIGl0IGFkZHMgYSBjYXJkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlV3JhcHBlckZvcjZDYXJkcygpIHsgXHJcbiAgICBpZiAod3JhcHBlckZvckNhcmRzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcHBlckZvcjZDYXJkc1wiKS5sZW5ndGggPiAwKSB7IC8vZXh0cmFjdCBwcm9kdWN0IGNhcmRzIGZyb20gV3JhcHBlckZvcjZDYXJkcyBhbmQgZGVsZXRlIFdyYXBwZXJGb3I2Q2FyZHNcclxuXHJcbiAgICAgICAgbGV0IGNvbGxlY3RNID0gd3JhcHBlckZvckNhcmRzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcHBlckZvcjZDYXJkc1wiKTtcclxuXHJcblxyXG4gICAgICAgIGNvbGxlY3RNLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gaXRlbS5jaGlsZE5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyRm9yQ2FyZHMuYXBwZW5kKGl0ZW0uY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmJ0bkFwcGx5RmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7IGZpbHRlckJ5TWFudWZhY3R1cmVyV2VpZ2h0UHJpY2UoKSB9KTsgXHJcblxyXG5leHBvcnQgeyBjaG9pY2VIb3dUb1NvcnQgfTtcclxuZXhwb3J0IHsgY3JlYXRlU2xpZGVyTmF2RWxlbUFuZE1vdmUgfTtcclxuZXhwb3J0IHsgY3JlYXRlQ29sbGVjdGlvbkZpbHRlcmVkQ2FyZHMgfTtcclxuZXhwb3J0IHsgZmlsdGVyQ2FyZCB9O1xyXG5cclxuXHJcblxyXG4vKnJlbGF0aXZlIGNhcmQocylcclxubGV0IHdpZHRoQ2FyZCA9IDQxNjtcclxubGV0IGNvdW50Q2FyZCA9IDM7XHJcbmxldCBjb3VudENoYW5nZUFtb3VudENhcmQgPSAwO1xyXG5sZXQgcG9zaXRpb24gPSAwO1xyXG50cmFuc2l0aW9uVG9Bbm90aGVyU2xpZGVcclxuZnVuY3Rpb24gY2FsbGJhY2tBbW91bnRCbG9ja09mU29ydENhcmQocGFyKSB7XHJcbiAgICBjb3VudENoYW5nZUFtb3VudENhcmQgPSAwO1xyXG4gICAgY291bnRDaGFuZ2VBbW91bnRDYXJkID0gcGFyO1xyXG4gICAgY29uc29sZS5sb2coY291bnRDaGFuZ2VBbW91bnRDYXJkKTtcclxufTtcclxuZnVuY3Rpb24gY2FsbGJhY2tBbW91bnRCbG9ja09mRmlsdGVyVXJsKHBhcikge1xyXG4gICAgY291bnRDaGFuZ2VBbW91bnRDYXJkID0gMDtcclxuICAgIGNvdW50Q2hhbmdlQW1vdW50Q2FyZCA9IHBhcjtcclxuICAgIGNvbnNvbGUubG9nKGNvdW50Q2hhbmdlQW1vdW50Q2FyZCk7XHJcbn07XHJcblxyXG5jYXRhbG9nQ2F0ZWdvcmllc19fcHJldi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBwb3NpdGlvbiArPSB3aWR0aENhcmQgKiBjb3VudENhcmQ7XHJcbiAgICBwb3NpdGlvbiA9IE1hdGgubWluKHBvc2l0aW9uLCAwKTtcclxuICAgIHdyYXBwZXJGb3JDYXJkcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9uICsgJ3B4J30pYDtcclxuICAgIFxyXG4gIH07XHJcblxyXG5jYXRhbG9nQ2F0ZWdvcmllc19fbmV4dC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBwb3NpdGlvbiAtPSB3aWR0aENhcmQgKiBjb3VudENhcmQ7XHJcbiAgICBwb3NpdGlvbiA9IE1hdGgubWF4KHBvc2l0aW9uLCAtd2lkdGhDYXJkICogKGNvdW50Q2hhbmdlQW1vdW50Q2FyZCAvIDEuNzQgLSBjb3VudENhcmQpKTtcclxuICAgIHdyYXBwZXJGb3JDYXJkcy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Bvc2l0aW9uICsgJ3B4J30pYDtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gaWYgKHdyYXBwZXJGb3JDYXJkcy5xdWVyeVNlbGVjdG9yQWxsKFwiLndyYXBwZXJcIikubGVuZ3RoID4gMCkgeyAvL2V4dHJhY3QgcHJvZHVjdCBjYXJkcyBmcm9tIGNyZWF0ZWQgYmxvY2tzIGFuZCBkZWxldGUgYmxvY2tzXHJcblxyXG4gICAgICAgIGNvbGxlY3RNID0gd3JhcHBlckZvckNhcmRzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcHBlclwiKTtcclxuXHJcblxyXG4gICAgICAgIGNvbGxlY3RNLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gaXRlbS5jaGlsZE5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyRm9yQ2FyZHMuYXBwZW5kKGl0ZW0uY2hpbGROb2Rlc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07Ki8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=