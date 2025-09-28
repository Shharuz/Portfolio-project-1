"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["filteringCardsWhenMovingFromAnotherPage"],{

/***/ "./src/script/allScripts/filteringCardsWhenMovingFromAnotherPage.js":
/*!**************************************************************************!*\
  !*** ./src/script/allScripts/filteringCardsWhenMovingFromAnotherPage.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterCategorys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterCategorys.js */ "./src/script/allScripts/FilterCategorys.js");
const category = document.querySelectorAll('.forCategoryAllPages p'); //all categories
const allCards = document.querySelectorAll(".allPageCard");
const inputManufacturerWeight = document.querySelectorAll('.filter__form input[type="checkbox"]'); //takes all inputs in the filter block on the left




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



    (0,_FilterCategorys_js__WEBPACK_IMPORTED_MODULE_0__.choiceHowToSort)();//on line 659

    (0,_FilterCategorys_js__WEBPACK_IMPORTED_MODULE_0__.createSliderNavElemAndMove)((0,_FilterCategorys_js__WEBPACK_IMPORTED_MODULE_0__.createCollectionFilteredCards)()); //on line 341 / createCollectionFilteredCards() on line 185


};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyaW5nQ2FyZHNXaGVuTW92aW5nRnJvbUFub3RoZXJQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0VBQXNFO0FBQ3RFO0FBQ0EsbUdBQW1HO0FBQ25HO0FBQ0E7QUFDa0g7QUFDbEg7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVNQUF1TTtBQUN2TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBd0Q7QUFDOUQscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1EQUFtRDtBQUNqRTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQWUsR0FBRztBQUN0QjtBQUNBLElBQUksK0VBQTBCLENBQUMsa0ZBQTZCLEtBQUs7QUFDakU7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvZmlsdGVyaW5nQ2FyZHNXaGVuTW92aW5nRnJvbUFub3RoZXJQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvckNhdGVnb3J5QWxsUGFnZXMgcCcpOyAvL2FsbCBjYXRlZ29yaWVzXHJcbmNvbnN0IGFsbENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbGxQYWdlQ2FyZFwiKTtcclxuY29uc3QgaW5wdXRNYW51ZmFjdHVyZXJXZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19mb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpOyAvL3Rha2VzIGFsbCBpbnB1dHMgaW4gdGhlIGZpbHRlciBibG9jayBvbiB0aGUgbGVmdFxyXG5cclxuXHJcbmltcG9ydCB7IGNob2ljZUhvd1RvU29ydCwgY3JlYXRlU2xpZGVyTmF2RWxlbUFuZE1vdmUsIGNyZWF0ZUNvbGxlY3Rpb25GaWx0ZXJlZENhcmRzIH0gZnJvbSAnLi9GaWx0ZXJDYXRlZ29yeXMuanMnO1xyXG5cclxuY2hhbmdlQ2hlY2tlZFJhZGlvQ2F0YWxvZ0NhdGVnb3JpZXNBbmRGaWx0ZXIoKTtcclxuZnVuY3Rpb24gY2hhbmdlQ2hlY2tlZFJhZGlvQ2F0YWxvZ0NhdGVnb3JpZXNBbmRGaWx0ZXIoKSB7IC8vbWFpbiBmaWx0ZXJpbmcgL3RyYW5zaXRpb24gdG8gYSBzcGVjaWZpYyBjYXRlZ29yeSBmcm9tIHRoZSBpbmRleC5odG1sIGNhdGFsb2dNYWluUGFnZS5odG1sIGFuZCBmaWx0ZXJpbmcgY2FyZHNcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGNhdGVnb3J5KSB7IC8vd2lsbCBnbyB0aHJvdWdoIGFsbCBjYXRlZ29yaWVzIGFuZCBhc3NpZ24gYSBcImNoZWNrZWRcIiB0byB0aGUgb25lIHdpdGggd2hpY2ggdGhlIGxpbmsgYWRkcmVzcyBtYXRjaGVzXHJcblxyXG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnaWQnKSA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMV0pIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbUNhcmQgb2YgYWxsQ2FyZHMpIHsgLy9lYWNoIGNhdGVnb3J5IGhhcyBhIGNvdW50ZXIsIHRoZSBjYWxjdWxhdGlvbiBpcyBiYXNlZCBvbiB0aGUgcHJpbmNpcGxlOiBkaWQgdGhlIGNhcmQncyBkYXRhLWZpbHRlciBtYXRjaCB0aGUgY2F0ZWdvcnkgaWRcclxuICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdpZCcpID09IGl0ZW1DYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1maWx0ZXInKSkge1xyXG4gICAgICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGl0ZW0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBjb3VudDsgLy90aGUgbnVtYmVyIG9mIGNhcmRzIGNvdW50ZWQgaXMgbG9jYXRlZCB0byB0aGUgcmlnaHQgb2YgdGhlIGNhdGVnb3J5IG5hbWVcclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vY291bnRzIGNhcmRzIGJ5IG1hbnVmYWN0dXJlciBhbmQgd2VpZ2h0XHJcbiAgICBmb3IgKGxldCBpdGVtSW5wdXQgb2YgaW5wdXRNYW51ZmFjdHVyZXJXZWlnaHQpIHsgLy8xIGVsZW1lbnQgZnJvbSB0aGUgbGlzdCBpcyB0aGUgbWFudWZhY3R1cmVyLCB0aGVuIHRoZSBjYXJkcyBhcmUgZmlsdGVyaW5nIFxyXG4gICAgICAgIC8vYW5kIHRoZSBJRCBvZiB0aGlzIGVsZW1lbnQgaXMgY29tcGFyZWQgd2l0aCB0aGUgYXR0cmlidXRlIGRhdGEtbWFudWZhY3R1cmVyLWZpbHRlciBvZiB0aGlzIGNhcmQsIHdoaWNoIHdpbGwgbWF0Y2ggKDFzdCBjb25kaXRpb24pLCBcclxuICAgICAgICAvL2J1dCB0aGUgSUQgb2YgdGhpcyBlbGVtZW50IHdpbGwgbm90IG1hdGNoIHRoZSBzZWNvbmQgY29uZGl0aW9uLCB0aHVzIG9ubHkgbWFudWZhY3R1cmVycyB3aWxsIGJlIGNvdW50ZWQsIFxyXG4gICAgICAgIC8vYW5kIHdoZW4gdGhlIGVsZW1lbnQgZnJvbSB0aGUgbGlzdCBpcyBhYm91dCB3ZWlnaHQsIHRoZSBJRCBvZiB0aGlzIGVsZW1lbnQgd2lsbCBub3QgbWF0Y2ggdGhlIGF0dHJpYnV0ZSBkYXRhLW1hbnVmYWN0dXJlci1maWx0ZXIsIFxyXG4gICAgICAgIC8vYnV0IHdpbGwgbWF0Y2ggd2l0aCBpdGVtQ2FyZC5jaGlsZE5vZGVzWzVdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MLnNsaWNlKDAsIC0yKSAodGhlIHNwYW4gZWxlbWVudCByZXNwb25zaWJsZSBmb3Igd2VpZ2h0KSwgXHJcbiAgICAgICAgLy90aHVzIG9ubHkgdGhlIHdlaWdodCB3aWxsIGJlIGNvdW50ZWQsIGFuZCB0aGUgbWFudWZhY3R1cmVyIHdpbGwgYmUgaWdub3JlZCAgXHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGl0ZW1DYXJkIG9mIGFsbENhcmRzKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbUlucHV0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PSBpdGVtQ2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFudWZhY3R1cmVyLWZpbHRlcicpIHx8IGl0ZW1JbnB1dC5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gaXRlbUNhcmQucXVlcnlTZWxlY3RvcignLndlaWdodEluR3JhbXMnKS5pbm5lckhUTUwuc2xpY2UoMCwgLTIpKSB7Ly9pdGVtQ2FyZC5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKSBpdGVtQ2FyZC5jaGlsZE5vZGVzWzVdLmNoaWxkTm9kZXNbMV0vL1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW1DYXJkLmNoaWxkTm9kZXNbNV0uY2hpbGROb2Rlc1sxXSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpdGVtSW5wdXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBjb3VudDsgLy90aGUgbnVtYmVyIG9mIGNhcmRzIGNvdW50ZWQgaXMgbG9jYXRlZCB0byB0aGUgcmlnaHQgb2YgdGhlIGxpc3QgaXRlbXNcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCJodG1sXCIpWzFdID09ICcnKSB7IC8vb24gdGhlIHBhZ2VzIGNhdGFsb2dNYWluUGFnZS5odG1sLCB0aGVyZSBpcyBhIGNhdGVnb3J5ICdhbGwgcHJvZHVjdHMnIChpdCBsaW5rcyB0byBjYXRhbG9nQ2F0ZWdvcmllcy5odG1sLCBhbmQgdGhlIGFkZHJlc3Mgb2YgdGhpcyBsaW5rIGlzIHdpdGhvdXQgdGhlID8gc2lnbikgYW5kIHdoZW4gJ3NwbGl0JyBvY2N1cnMsIFxyXG4gICAgICAgIC8vdGhlcmUgd2lsbCBiZSBhbiBlbXB0eSBsaW5lLCB0aGUgY29uZGl0aW9uIHdpbGwgYmUgdHJ1ZSwgdGhlIGNhdGVnb3J5IHdpbGwgbm90IGJlIHNlbGVjdGVkIGFuZCBhbGwgY2FyZHMgd2lsbCBiZSBkaXNwbGF5ZWRcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFsbENhcmRzKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKS5sZW5ndGggPT0gMikgeyAvL29uIHRoZSBwYWdlcyBpbmRleC5odG1sIGFuZCBjYXRhbG9nTWFpblBhZ2UuaHRtbCB0aGVyZSBhcmUgY2F0ZWdvcmllcyAoYWthIGxpbmtzKSB0byBzcGVjaWZpYyBjYXRlZ29yaWVzIG9uIHRoZSBwYWdlIGNhdGFsb2dDYXRlZ29yaWVzLmh0bWxcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFsbENhcmRzKSB7IC8vYnV0IHRoZXJlIGlzIGFsc28gYSBkcm9wLWRvd24gbGlzdCBpbiB0aGUgaGVhZGVyKGFsbCBwYWdlcykuIFRoZSBpdGVtcyBvZiB3aGljaCBhbHNvIGxlYWQgdG8gc3BlY2lmaWMgY2F0ZWdvcmllcyBvbiB0aGUgY2F0YWxvZ0NhdGVnb3JpZXMuaHRtbCBwYWdlLCBcclxuICAgICAgICAgICAgLy8gYnV0IHdpdGggYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXJzLiBleGFtcGxlOiAxLmhyZWY9XCJodHRwczovL2xpdmViYWN0ZXJpYS5sb2NhbC9jYXRhbG9nQ2F0ZWdvcmllcy5odG1sP2JhY3RlcmlhLWZvci1zZXB0aWNcIiAyLmhyZWY9XCJodHRwczovL2xpdmViYWN0ZXJpYS5sb2NhbC9jYXRhbG9nQ2F0ZWdvcmllcy5odG1sP0Zvci1zb2lsLWFuZC1wbGFudHM/ZnJvbS1wZXN0c1wiKGZyb20tcGVzdHMgLSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMpXHJcbiAgICAgICAgICAgIC8vIHRoZSBjb25kaXRpb24gXCJ3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIikubGVuZ3RoID09IDJcIiBhbGxvd3MgdG8gc2VwYXJhdGUgdGhlbVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJykgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzFdKSB7IC8vY2hlY2tzIHRoZSBsaW5rIGFkZHJlc3MgYW5kIGRpc3BsYXlzIHRoZSBjYXJkcyBvZiB0aGUgY29ycmVzcG9uZGluZyBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGFsbENhcmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1tYW51ZmFjdHVyZXItZmlsdGVyJykpIHsgLy9pZiB0aGUgY2FyZCBoYXMgdGhlIGRhdGEtbWFudWZhY3R1cmVyLWZpbHRlciBhdHRyaWJ1dGUsIHRoZW4gaXQgd2lsbCBkaXNwbGF5IGNhcmRzIGFjY29yZGluZyB0byB0d28gY29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZpbHRlcicpID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVsxXSAmJiBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1tYW51ZmFjdHVyZXItZmlsdGVyJykgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXN0cy1maWx0ZXInKSkgeyAvL2lmIHRoZSBjYXJkIGhhcyB0aGUgZGF0YS1wZXN0cy1maWx0ZXIgYXR0cmlidXRlLCB0aGVuIGl0IHdpbGwgZGlzcGxheSBjYXJkcyBhY2NvcmRpbmcgdG8gdHdvIGNvbmRpdGlvbnNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsdGVyJykgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzFdICYmIGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXBlc3RzLWZpbHRlcicpID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVsyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgY2hvaWNlSG93VG9Tb3J0KCk7Ly9vbiBsaW5lIDY1OVxyXG5cclxuICAgIGNyZWF0ZVNsaWRlck5hdkVsZW1BbmRNb3ZlKGNyZWF0ZUNvbGxlY3Rpb25GaWx0ZXJlZENhcmRzKCkpOyAvL29uIGxpbmUgMzQxIC8gY3JlYXRlQ29sbGVjdGlvbkZpbHRlcmVkQ2FyZHMoKSBvbiBsaW5lIDE4NVxyXG5cclxuXHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9