"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["pass-eye"],{

/***/ "./src/script/allScripts/pass-eye.js":
/*!*******************************************!*\
  !*** ./src/script/allScripts/pass-eye.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openCloseEye: () => (/* binding */ openCloseEye)
/* harmony export */ });
//let password = document.querySelectorAll('.hide-show-password'); // for ver. 1
const eyes = document.querySelectorAll('.eye');
const btnPassCheck = document.querySelector('#password-check');
let messagePassMismatch = document.querySelector('.passwords-do-not-match');
let twoInputPass = document.querySelectorAll('.passCheck');




function openCloseEye(e) {

    //ver.1 This version of the code hid/showed the password for all inputs when clicking on the eye

    /*password.forEach((item) => {
        if (item.type == 'password') {
            item.type = 'text';
            eye.forEach((elem) => {
                elem.classList.remove('hide-eye')
            });
        } else {
            item.type = 'password';
            eye.forEach((elem) => {
                elem.classList.add('hide-eye');
            });
        }
    })  */

    //Now hides/shows only the input that relates to the pressed eye

    if (e.target.previousElementSibling.type == 'password') {//when clicking on the eye if the input is of type 'password'
        e.target.previousElementSibling.type = 'text';       //then replace with type 'text'
        e.target.classList.remove('hide-eye')                //open eye through class removal
    } else {
        e.target.previousElementSibling.type = 'password';//otherwise assign the type 'password' (replaces symbols with dots)
        e.target.classList.add('hide-eye');               //and will close the eye as a result of adding the class
    }

};

/*eyes.forEach((elem) => {
    elem.addEventListener('click', openCloseEye);
});*/


btnPassCheck.addEventListener('click', function(e) {
    if (!(twoInputPass[0].value == twoInputPass[1].value)) { //if the value of the first field does not match the value of the second field
        e.preventDefault();                                  //then prevent the form from being submitted
        messagePassMismatch.innerHTML = 'Несовпадение паролей';//and will display a message about the password mismatch
    };

});

twoInputPass.forEach((item) => {          //with each new entry it will delete the message about password mismatch
    item.addEventListener('input', () => {
        if (messagePassMismatch.innerHTML) {
            messagePassMismatch.innerHTML = '';
        };
    });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzcy1leWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdELDZEQUE2RDtBQUM3RDtBQUNBLE1BQU07QUFDTiwwREFBMEQ7QUFDMUQsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RCw2REFBNkQ7QUFDN0QsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3Bhc3MtZXllLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGUtc2hvdy1wYXNzd29yZCcpOyAvLyBmb3IgdmVyLiAxXHJcbmNvbnN0IGV5ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXllJyk7XHJcbmNvbnN0IGJ0blBhc3NDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZC1jaGVjaycpO1xyXG5sZXQgbWVzc2FnZVBhc3NNaXNtYXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZHMtZG8tbm90LW1hdGNoJyk7XHJcbmxldCB0d29JbnB1dFBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFzc0NoZWNrJyk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkNsb3NlRXllKGUpIHtcclxuXHJcbiAgICAvL3Zlci4xIFRoaXMgdmVyc2lvbiBvZiB0aGUgY29kZSBoaWQvc2hvd2VkIHRoZSBwYXNzd29yZCBmb3IgYWxsIGlucHV0cyB3aGVuIGNsaWNraW5nIG9uIHRoZSBleWVcclxuXHJcbiAgICAvKnBhc3N3b3JkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgaXRlbS50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICBleWUuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWV5ZScpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIGV5ZS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZXllJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pICAqL1xyXG5cclxuICAgIC8vTm93IGhpZGVzL3Nob3dzIG9ubHkgdGhlIGlucHV0IHRoYXQgcmVsYXRlcyB0byB0aGUgcHJlc3NlZCBleWVcclxuXHJcbiAgICBpZiAoZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID09ICdwYXNzd29yZCcpIHsvL3doZW4gY2xpY2tpbmcgb24gdGhlIGV5ZSBpZiB0aGUgaW5wdXQgaXMgb2YgdHlwZSAncGFzc3dvcmQnXHJcbiAgICAgICAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID0gJ3RleHQnOyAgICAgICAvL3RoZW4gcmVwbGFjZSB3aXRoIHR5cGUgJ3RleHQnXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1leWUnKSAgICAgICAgICAgICAgICAvL29wZW4gZXllIHRocm91Z2ggY2xhc3MgcmVtb3ZhbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnR5cGUgPSAncGFzc3dvcmQnOy8vb3RoZXJ3aXNlIGFzc2lnbiB0aGUgdHlwZSAncGFzc3dvcmQnIChyZXBsYWNlcyBzeW1ib2xzIHdpdGggZG90cylcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlLWV5ZScpOyAgICAgICAgICAgICAgIC8vYW5kIHdpbGwgY2xvc2UgdGhlIGV5ZSBhcyBhIHJlc3VsdCBvZiBhZGRpbmcgdGhlIGNsYXNzXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuLypleWVzLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQ2xvc2VFeWUpO1xyXG59KTsqL1xyXG5cclxuXHJcbmJ0blBhc3NDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmICghKHR3b0lucHV0UGFzc1swXS52YWx1ZSA9PSB0d29JbnB1dFBhc3NbMV0udmFsdWUpKSB7IC8vaWYgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBmaWVsZCBkb2VzIG5vdCBtYXRjaCB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBmaWVsZFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGVuIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWRcclxuICAgICAgICBtZXNzYWdlUGFzc01pc21hdGNoLmlubmVySFRNTCA9ICfQndC10YHQvtCy0L/QsNC00LXQvdC40LUg0L/QsNGA0L7Qu9C10LknOy8vYW5kIHdpbGwgZGlzcGxheSBhIG1lc3NhZ2UgYWJvdXQgdGhlIHBhc3N3b3JkIG1pc21hdGNoXHJcbiAgICB9O1xyXG5cclxufSk7XHJcblxyXG50d29JbnB1dFBhc3MuZm9yRWFjaCgoaXRlbSkgPT4geyAgICAgICAgICAvL3dpdGggZWFjaCBuZXcgZW50cnkgaXQgd2lsbCBkZWxldGUgdGhlIG1lc3NhZ2UgYWJvdXQgcGFzc3dvcmQgbWlzbWF0Y2hcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=