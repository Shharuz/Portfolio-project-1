"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["PhoneMask"],{

/***/ "./src/script/allScripts/PhoneMask.js":
/*!********************************************!*\
  !*** ./src/script/allScripts/PhoneMask.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   phoneMask: () => (/* binding */ phoneMask)
/* harmony export */ });
function phoneMask() {
    let phoneInputs = document.querySelectorAll('input[data-tel-input]');

    let getInputNumbersValue = function(input) { //prohibition on entering all symbols except numbers
        return input.value.replace(/\D/g, "")
    }

    let onPhoneInput = function(e) {
        let input = e.target,                               //элемент инпут
            inputNumbersValue = getInputNumbersValue(input),//хранятся только числа
            formattedInputValue = "",
            selectionStart = input.selectionStart;//I don't know why

        /*if (!inputNumbersValue) {
            return input.value = "";
        };

        if (input.value.length != selectionStart) {
            console.log('editing midle string', e);
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }*/


        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;//if the first character is 9 then replace it with 7 9

            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";//if the first character is 8 then it will return 8 otherwise it will return +7
            formattedInputValue = firstSymbols + " ";
            if (inputNumbersValue.length > 1) { //if more than 1 character is entered, 
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);//it will add '(' + characters from 2nd to 5th
            }
            if (inputNumbersValue.length >= 5) {//if 5 or more characters are entered
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);//it will add ') ' + characters from 5nd to 8th
            }
            if (inputNumbersValue.length >= 8) {//if 8 or more characters are entered
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);//it will add '-' + characters from 8nd to 10th
            }
            if (inputNumbersValue.length >= 10) {//if 10 or more characters are entered
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);//it will add '-' + characters from 10nd to 12th
            }


        } else {

            formattedInputValue = "+" + inputNumbersValue.substring(0, 16);//it will add '+' + characters from 1st to 12th

        };
        input.value = formattedInputValue;
    };

    let onPhoneInputKeyDown = function(e) {
        //console.log(e.keyCode, e.target.value);//key code and input value (   100 - code         '+7 (984) 56' - input value    )
        let input = e.target;
        if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {//if backspace is entered(keyCode == 8), the input value will be replaced with ''
            input.value = '';
        }
    }

    let onPhonePaste = function(e) {
        let pasted = e.clipboardData || window.clipboardData;//the copied number is stored
        input = e.target;//input stored
        inputNumbersValue = getInputNumbersValue(input);//the input is checked to make sure there are only numbers

        if (pasted) {                                //if there is any data when inserting
            let pastedText = pasted.getData('text');//inserts a value as a string from the copied text
            if (/\D/g.test(pastedText)) {           //checks that there are only numbers
                input.value = inputNumbersValue;
            }
        }
    }

    for (let i = 0; i < phoneInputs.length; ++i) {
        let input = phoneInputs[i];
        input.addEventListener('input', onPhoneInput);//on line 10
        input.addEventListener('keydown', onPhoneInputKeyDown);//on line 56
        input.addEventListener('paste', onPhonePaste);//on line 64
    };


}

//document.addEventListener('DOMContentLoaded', phoneMask)

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGhvbmVNYXNrLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx5RkFBeUY7QUFDekY7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQSxnREFBZ0Q7QUFDaEQsK0VBQStFO0FBQy9FO0FBQ0EsZ0RBQWdEO0FBQ2hELGdGQUFnRjtBQUNoRjtBQUNBLGdEQUFnRDtBQUNoRCwrRUFBK0U7QUFDL0U7QUFDQSxpREFBaUQ7QUFDakQsZ0ZBQWdGO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RCx5QkFBeUI7QUFDekIsd0RBQXdEO0FBQ3hEO0FBQ0EscURBQXFEO0FBQ3JELG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQSxzREFBc0Q7QUFDdEQsK0RBQStEO0FBQy9ELHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwaG9uZU1hc2soKSB7XHJcbiAgICBsZXQgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLXRlbC1pbnB1dF0nKTtcclxuXHJcbiAgICBsZXQgZ2V0SW5wdXROdW1iZXJzVmFsdWUgPSBmdW5jdGlvbihpbnB1dCkgeyAvL3Byb2hpYml0aW9uIG9uIGVudGVyaW5nIGFsbCBzeW1ib2xzIGV4Y2VwdCBudW1iZXJzXHJcbiAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvblBob25lSW5wdXQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZS50YXJnZXQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0Y3Qu9C10LzQtdC90YIg0LjQvdC/0YPRglxyXG4gICAgICAgICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KSwvL9GF0YDQsNC90Y/RgtGB0Y8g0YLQvtC70YzQutC+INGH0LjRgdC70LBcclxuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7Ly9JIGRvbid0IGtub3cgd2h5XHJcblxyXG4gICAgICAgIC8qaWYgKCFpbnB1dE51bWJlcnNWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXRpbmcgbWlkbGUgc3RyaW5nJywgZSk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSovXHJcblxyXG5cclxuICAgICAgICBpZiAoW1wiN1wiLCBcIjhcIiwgXCI5XCJdLmluZGV4T2YoaW5wdXROdW1iZXJzVmFsdWVbMF0pID4gLTEpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlWzBdID09IFwiOVwiKSBpbnB1dE51bWJlcnNWYWx1ZSA9IFwiN1wiICsgaW5wdXROdW1iZXJzVmFsdWU7Ly9pZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIDkgdGhlbiByZXBsYWNlIGl0IHdpdGggNyA5XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlyc3RTeW1ib2xzID0gKGlucHV0TnVtYmVyc1ZhbHVlWzBdID09IFwiOFwiKSA/IFwiOFwiIDogXCIrN1wiOy8vaWYgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyA4IHRoZW4gaXQgd2lsbCByZXR1cm4gOCBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gKzdcclxuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGZpcnN0U3ltYm9scyArIFwiIFwiO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID4gMSkgeyAvL2lmIG1vcmUgdGhhbiAxIGNoYXJhY3RlciBpcyBlbnRlcmVkLCBcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDEsIDQpOy8vaXQgd2lsbCBhZGQgJygnICsgY2hhcmFjdGVycyBmcm9tIDJuZCB0byA1dGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDUpIHsvL2lmIDUgb3IgbW9yZSBjaGFyYWN0ZXJzIGFyZSBlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoNCwgNyk7Ly9pdCB3aWxsIGFkZCAnKSAnICsgY2hhcmFjdGVycyBmcm9tIDVuZCB0byA4dGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDgpIHsvL2lmIDggb3IgbW9yZSBjaGFyYWN0ZXJzIGFyZSBlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg3LCA5KTsvL2l0IHdpbGwgYWRkICctJyArIGNoYXJhY3RlcnMgZnJvbSA4bmQgdG8gMTB0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gMTApIHsvL2lmIDEwIG9yIG1vcmUgY2hhcmFjdGVycyBhcmUgZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpOy8vaXQgd2lsbCBhZGQgJy0nICsgY2hhcmFjdGVycyBmcm9tIDEwbmQgdG8gMTJ0aFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiK1wiICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDAsIDE2KTsvL2l0IHdpbGwgYWRkICcrJyArIGNoYXJhY3RlcnMgZnJvbSAxc3QgdG8gMTJ0aFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IG9uUGhvbmVJbnB1dEtleURvd24gPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLmtleUNvZGUsIGUudGFyZ2V0LnZhbHVlKTsvL2tleSBjb2RlIGFuZCBpbnB1dCB2YWx1ZSAoICAgMTAwIC0gY29kZSAgICAgICAgICcrNyAoOTg0KSA1NicgLSBpbnB1dCB2YWx1ZSAgICApXHJcbiAgICAgICAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA4ICYmIGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KS5sZW5ndGggPT0gMSkgey8vaWYgYmFja3NwYWNlIGlzIGVudGVyZWQoa2V5Q29kZSA9PSA4KSwgdGhlIGlucHV0IHZhbHVlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCAnJ1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgb25QaG9uZVBhc3RlID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwYXN0ZWQgPSBlLmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7Ly90aGUgY29waWVkIG51bWJlciBpcyBzdG9yZWRcclxuICAgICAgICBpbnB1dCA9IGUudGFyZ2V0Oy8vaW5wdXQgc3RvcmVkXHJcbiAgICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCk7Ly90aGUgaW5wdXQgaXMgY2hlY2tlZCB0byBtYWtlIHN1cmUgdGhlcmUgYXJlIG9ubHkgbnVtYmVyc1xyXG5cclxuICAgICAgICBpZiAocGFzdGVkKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGFueSBkYXRhIHdoZW4gaW5zZXJ0aW5nXHJcbiAgICAgICAgICAgIGxldCBwYXN0ZWRUZXh0ID0gcGFzdGVkLmdldERhdGEoJ3RleHQnKTsvL2luc2VydHMgYSB2YWx1ZSBhcyBhIHN0cmluZyBmcm9tIHRoZSBjb3BpZWQgdGV4dFxyXG4gICAgICAgICAgICBpZiAoL1xcRC9nLnRlc3QocGFzdGVkVGV4dCkpIHsgICAgICAgICAgIC8vY2hlY2tzIHRoYXQgdGhlcmUgYXJlIG9ubHkgbnVtYmVyc1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBob25lSW5wdXRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gcGhvbmVJbnB1dHNbaV07XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvblBob25lSW5wdXQpOy8vb24gbGluZSAxMFxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvblBob25lSW5wdXRLZXlEb3duKTsvL29uIGxpbmUgNTZcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGhvbmVQYXN0ZSk7Ly9vbiBsaW5lIDY0XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuXHJcbi8vZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHBob25lTWFzaykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=