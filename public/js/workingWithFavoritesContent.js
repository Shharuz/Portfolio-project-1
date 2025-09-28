"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["workingWithFavoritesContent"],{

/***/ "./src/script/allScripts/workingWithFavoritesContent.js":
/*!**************************************************************!*\
  !*** ./src/script/allScripts/workingWithFavoritesContent.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _counter_goods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter-goods.js */ "./src/script/allScripts/counter-goods.js");
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

        _counter_goods_js__WEBPACK_IMPORTED_MODULE_0__.total.classList.add('hide')//counter-goods.js line 13
    });
});


basket.addEventListener('click', () => {//First on the account.html page, form - your-details is displayed, when clicking input (id = basket) it will start calculating the price
    countAllPrice();
});

function countAllPrice() {
    let allGoodsBasket = document.querySelectorAll('.account__basket .price-relative-input');

    if (allGoodsBasket.length == 0) { //if the products are deleted, then the block with the final price is also deleted
        _counter_goods_js__WEBPACK_IMPORTED_MODULE_0__.total.classList.add('hide')//counter-goods.js line 13
    } else {
        let sumPrice = 0;
        for (let itemallGoodsBasket of allGoodsBasket) {//only the price of the product is taken (string), 
            sumPrice += Number(itemallGoodsBasket.innerHTML.slice(0, -2));//is converted to a number and added to sumPrice
        }
        _counter_goods_js__WEBPACK_IMPORTED_MODULE_0__.totalPrice.innerHTML = sumPrice + " ₽"         //the sumPrice value is inserted into the block with the total amount of goods
        //counter-goods.js line 14
    }


}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2luZ1dpdGhGYXZvcml0ZXNDb250ZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxRQUFRLG9EQUFjO0FBQ3RCLE1BQU07QUFDTjtBQUNBLHdEQUF3RDtBQUN4RCwwRUFBMEU7QUFDMUU7QUFDQSxRQUFRLHlEQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvd29ya2luZ1dpdGhGYXZvcml0ZXNDb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vZm9yIGFjY291bnQuaHRtbFxyXG5pbXBvcnQgKiBhcyB0b3RhbEFsbCBmcm9tICcuL2NvdW50ZXItZ29vZHMuanMnXHJcblxyXG5jb25zdCBtYXN0ZXJDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZvci1jaGFuZ2UtY29udGVudD1cIm1hc3Rlci1jaGVja2JveFwiXScpO1xyXG5jb25zdCBhZGRTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvci1jaGFuZ2UtY29udGVudD1cImFkZC1zZWxlY3RlZC10by1zaG9wcGluZy1jYXJ0XCJdJyk7XHJcbmNvbnN0IGRlbGV0ZVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9yLWNoYW5nZS1jb250ZW50PVwiZGVsZXRlLXNlbGVjdGVkXCJdJyk7XHJcbmNvbnN0IGNsZWFyRmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9yLWNoYW5nZS1jb250ZW50PVwiY2xlYXItZmF2b3JpdGVzXCJdJyk7XHJcbmNvbnN0IGNsZWFyQmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9yLWNoYW5nZS1jb250ZW50PVwiY2xlYXItYmFza2V0XCJdJyk7XHJcbmNvbnN0IGlucHV0c1VuZGVyTWFzdGVyQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudF9fY29udGVudF9fcHJvZHVjdCBpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG5jb25zdCBpbnB1dHNVbmRlck1hc3RlckNoZWNrYm94RmF2b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudF9fZmF2b3JpdGVzIC5hY2NvdW50X19jb250ZW50X19wcm9kdWN0IGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbmNvbnN0IGlucHV0c1VuZGVyTWFzdGVyQ2hlY2tib3hCYXNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudF9fYmFza2V0IC5hY2NvdW50X19jb250ZW50X19wcm9kdWN0IGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbmNvbnN0IGJhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXNrZXQnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5tYXN0ZXJDaGVja2JveC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7Ly93aGVuIGl0ZW0gZnJvbSBjb2xsZWN0aW9uIG1hc3RlckNoZWNrYm94IGlzIGNoZWNrZWQsIGFsbCBvdGhlciBjaGVja2JveGVzIGFyZSBjaGVja2VkIHRvb1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PSAnbWFzdGVyLWNoZWNrYm94LWZhdmlyaXRlcycpIHsvL3NvIHRoYXQgaXRlbSBmcm9tIGNvbGxlY3Rpb24gbWFzdGVyQ2hlY2tib3ggY2hlY2tzIG9ubHkgaXRzIGlucHV0c1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpbnB1dHNVbmRlck1hc3RlckNoZWNrYm94RmF2b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpbnB1dHNVbmRlck1hc3RlckNoZWNrYm94QmFza2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICdtYXN0ZXItY2hlY2tib3gtZmF2aXJpdGVzJykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpbnB1dHNVbmRlck1hc3RlckNoZWNrYm94RmF2b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaW5wdXRzVW5kZXJNYXN0ZXJDaGVja2JveEJhc2tldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbmRlbGV0ZVNlbGVjdGVkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaW5wdXRzVW5kZXJNYXN0ZXJDaGVja2JveCkgey8vaXRlcmF0ZXMgb3ZlciBhbGwgaW5wdXRzIGZyb20gdGhlIGlucHV0c1VuZGVyTWFzdGVyQ2hlY2tib3ggY29sbGVjdGlvblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7ICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2tzIGZvciBjaGVja2VkIGFuZCBpZiB0cnVlIHJlbW92ZXMgdGhlIGlucHV0J3MgcGFyZW50XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY291bnRBbGxQcmljZSgpOy8vb24gbGluZSA4NVxyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmNsZWFyRmF2LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gey8vd2lsbCBzaW1wbHkgcmVtb3ZlIGFsbCBnb29kcyBmcm9tIGZhdm9yaXRlc1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaW5wdXRzVW5kZXJNYXN0ZXJDaGVja2JveEZhdm9yKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY2xlYXJCYXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7Ly93aWxsIHNpbXBseSByZW1vdmUgYWxsIGdvb2RzIGZyb20gYmFza2V0XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpbnB1dHNVbmRlck1hc3RlckNoZWNrYm94QmFza2V0KSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdG90YWxBbGwudG90YWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpLy9jb3VudGVyLWdvb2RzLmpzIGxpbmUgMTNcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5iYXNrZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7Ly9GaXJzdCBvbiB0aGUgYWNjb3VudC5odG1sIHBhZ2UsIGZvcm0gLSB5b3VyLWRldGFpbHMgaXMgZGlzcGxheWVkLCB3aGVuIGNsaWNraW5nIGlucHV0IChpZCA9IGJhc2tldCkgaXQgd2lsbCBzdGFydCBjYWxjdWxhdGluZyB0aGUgcHJpY2VcclxuICAgIGNvdW50QWxsUHJpY2UoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjb3VudEFsbFByaWNlKCkge1xyXG4gICAgbGV0IGFsbEdvb2RzQmFza2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY291bnRfX2Jhc2tldCAucHJpY2UtcmVsYXRpdmUtaW5wdXQnKTtcclxuXHJcbiAgICBpZiAoYWxsR29vZHNCYXNrZXQubGVuZ3RoID09IDApIHsgLy9pZiB0aGUgcHJvZHVjdHMgYXJlIGRlbGV0ZWQsIHRoZW4gdGhlIGJsb2NrIHdpdGggdGhlIGZpbmFsIHByaWNlIGlzIGFsc28gZGVsZXRlZFxyXG4gICAgICAgIHRvdGFsQWxsLnRvdGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKS8vY291bnRlci1nb29kcy5qcyBsaW5lIDEzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzdW1QcmljZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbWFsbEdvb2RzQmFza2V0IG9mIGFsbEdvb2RzQmFza2V0KSB7Ly9vbmx5IHRoZSBwcmljZSBvZiB0aGUgcHJvZHVjdCBpcyB0YWtlbiAoc3RyaW5nKSwgXHJcbiAgICAgICAgICAgIHN1bVByaWNlICs9IE51bWJlcihpdGVtYWxsR29vZHNCYXNrZXQuaW5uZXJIVE1MLnNsaWNlKDAsIC0yKSk7Ly9pcyBjb252ZXJ0ZWQgdG8gYSBudW1iZXIgYW5kIGFkZGVkIHRvIHN1bVByaWNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvdGFsQWxsLnRvdGFsUHJpY2UuaW5uZXJIVE1MID0gc3VtUHJpY2UgKyBcIiDigr1cIiAgICAgICAgIC8vdGhlIHN1bVByaWNlIHZhbHVlIGlzIGluc2VydGVkIGludG8gdGhlIGJsb2NrIHdpdGggdGhlIHRvdGFsIGFtb3VudCBvZiBnb29kc1xyXG4gICAgICAgIC8vY291bnRlci1nb29kcy5qcyBsaW5lIDE0XHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==