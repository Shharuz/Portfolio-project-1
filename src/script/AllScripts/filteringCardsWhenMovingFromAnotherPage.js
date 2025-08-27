const category = document.querySelectorAll('.forCategoryAllPages p'); //all categories
const allCards = document.querySelectorAll(".allPageCard");
const inputManufacturerWeight = document.querySelectorAll('.filter__form input[type="checkbox"]'); //takes all inputs in the filter block on the left


import { choiceHowToSort, createSliderNavElemAndMove, createCollectionFilteredCards } from './FilterCategorys.js';

changeCheckedRadioCatalogCategoriesAndFilter();
function changeCheckedRadioCatalogCategoriesAndFilter() { //main filtering /transition to a specific category from the index.html catalogMainPage.html and filtering cards

    for (let item of category) { //will go through all categories and assign a "checked" to the one with which the link address matches

        if (item.getAttribute('id') == window.location.href.split("?")[1]) {
            item.classList.add('highlighted');
        };

        let count = 0;
        for (let itemCard of allCards) { //each category has a counter, the calculation is based on the principle: did the card's data-filter match the category id
            if (item.getAttribute('id') == itemCard.getAttribute('data-filter')) {
                count++
            };
        };

        item.childNodes[1].innerHTML = count; //the number of cards counted is located to the right of the category name
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

            if (itemInput.getAttribute('id') == itemCard.getAttribute('data-manufacturer-filter') || itemInput.getAttribute('id') == itemCard.querySelector('.weightInGrams').innerHTML.slice(0, -2)) {//itemCard.querySelector('.price') itemCard.childNodes[5].childNodes[1]//
                
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



    choiceHowToSort();//on line 659

    createSliderNavElemAndMove(createCollectionFilteredCards()); //on line 341 / createCollectionFilteredCards() on line 185


};