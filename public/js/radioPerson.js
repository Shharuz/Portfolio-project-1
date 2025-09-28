"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["radioPerson"],{

/***/ "./src/script/allScripts/radioPerson.js":
/*!**********************************************!*\
  !*** ./src/script/allScripts/radioPerson.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switching: () => (/* binding */ switching)
/* harmony export */ });
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ "./src/script/allScripts/animation.js");
//for forPartners.html, account.html, placingAnOrder.html,


//const radioPerson = document.querySelectorAll('.fieldset__item input[type="radio"]');
const formItems = document.querySelectorAll('main .form__item');
const delivery = document.querySelectorAll('main [data-hide-delivery]');//for delivery method on page placingAnOrder.html

/*radioPerson.forEach((item) => {
    item.addEventListener('change', () => {
        for (let itemformItems of formItems) {
            if (itemformItems.classList.contains('hide')) {//reveals all elements
                itemformItems.classList.remove('hide')
                if (document.querySelector('.forSmoothScroll')){
                    alignBody()//for script/animation.js (smoothScroll)
                } 
            }

            if (item.id == itemformItems.getAttribute('data-hide')) {//if the radioPerson id matches the data-hide of the form element, it will hide it
                itemformItems.classList.add('hide')
                if (document.querySelector('.forSmoothScroll')){
                    alignBody()//for script/animation.js (smoothScroll)
                }
                
            }
        }
        if (item.getAttribute('name') == 'delivery') {//similarly, see above
            for (let itemdelivery of delivery) {
                itemdelivery.classList.add('hide')
                if (item.id == itemdelivery.getAttribute('data-hide-delivery')) {
                    itemdelivery.classList.remove('hide')
                }
            }
        }



    });
});*/

function switching(item) {
    for (let itemformItems of formItems) {
            if (itemformItems.classList.contains('hide')) {//reveals all elements
                itemformItems.classList.remove('hide')
                if (document.querySelector('.forSmoothScroll')){
                    (0,_animation_js__WEBPACK_IMPORTED_MODULE_0__.alignBody)()//for script/animation.js (smoothScroll)
                } 
            }

            if (item.id == itemformItems.getAttribute('data-hide')) {//if the radioPerson id matches the data-hide of the form element, it will hide it
                itemformItems.classList.add('hide')
                if (document.querySelector('.forSmoothScroll')){
                    (0,_animation_js__WEBPACK_IMPORTED_MODULE_0__.alignBody)()//for script/animation.js (smoothScroll)
                }
                
            }
        }
        if (item.getAttribute('name') == 'delivery') {//similarly, see above
            for (let itemdelivery of delivery) {
                itemdelivery.classList.add('hide')
                if (item.id == itemdelivery.getAttribute('data-hide-delivery')) {
                    itemdelivery.classList.remove('hide')
                }
            }
        }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9QZXJzb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNIO0FBQ087QUFDUDtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9yYWRpb1BlcnNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ZvciBmb3JQYXJ0bmVycy5odG1sLCBhY2NvdW50Lmh0bWwsIHBsYWNpbmdBbk9yZGVyLmh0bWwsXHJcbmltcG9ydCB7IGFsaWduQm9keSB9IGZyb20gJy4vYW5pbWF0aW9uLmpzJztcclxuXHJcbi8vY29uc3QgcmFkaW9QZXJzb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmllbGRzZXRfX2l0ZW0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbmNvbnN0IGZvcm1JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21haW4gLmZvcm1fX2l0ZW0nKTtcclxuY29uc3QgZGVsaXZlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdtYWluIFtkYXRhLWhpZGUtZGVsaXZlcnldJyk7Ly9mb3IgZGVsaXZlcnkgbWV0aG9kIG9uIHBhZ2UgcGxhY2luZ0FuT3JkZXIuaHRtbFxyXG5cclxuLypyYWRpb1BlcnNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtZm9ybUl0ZW1zIG9mIGZvcm1JdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoaXRlbWZvcm1JdGVtcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkgey8vcmV2ZWFscyBhbGwgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgIGl0ZW1mb3JtSXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvclNtb290aFNjcm9sbCcpKXtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkJvZHkoKS8vZm9yIHNjcmlwdC9hbmltYXRpb24uanMgKHNtb290aFNjcm9sbClcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGl0ZW1mb3JtSXRlbXMuZ2V0QXR0cmlidXRlKCdkYXRhLWhpZGUnKSkgey8vaWYgdGhlIHJhZGlvUGVyc29uIGlkIG1hdGNoZXMgdGhlIGRhdGEtaGlkZSBvZiB0aGUgZm9ybSBlbGVtZW50LCBpdCB3aWxsIGhpZGUgaXRcclxuICAgICAgICAgICAgICAgIGl0ZW1mb3JtSXRlbXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvclNtb290aFNjcm9sbCcpKXtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkJvZHkoKS8vZm9yIHNjcmlwdC9hbmltYXRpb24uanMgKHNtb290aFNjcm9sbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpID09ICdkZWxpdmVyeScpIHsvL3NpbWlsYXJseSwgc2VlIGFib3ZlXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW1kZWxpdmVyeSBvZiBkZWxpdmVyeSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbWRlbGl2ZXJ5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gaXRlbWRlbGl2ZXJ5LmdldEF0dHJpYnV0ZSgnZGF0YS1oaWRlLWRlbGl2ZXJ5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtZGVsaXZlcnkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxufSk7Ki9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hpbmcoaXRlbSkge1xyXG4gICAgZm9yIChsZXQgaXRlbWZvcm1JdGVtcyBvZiBmb3JtSXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1mb3JtSXRlbXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHsvL3JldmVhbHMgYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBpdGVtZm9ybUl0ZW1zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JTbW9vdGhTY3JvbGwnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25Cb2R5KCkvL2ZvciBzY3JpcHQvYW5pbWF0aW9uLmpzIChzbW9vdGhTY3JvbGwpXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSBpdGVtZm9ybUl0ZW1zLmdldEF0dHJpYnV0ZSgnZGF0YS1oaWRlJykpIHsvL2lmIHRoZSByYWRpb1BlcnNvbiBpZCBtYXRjaGVzIHRoZSBkYXRhLWhpZGUgb2YgdGhlIGZvcm0gZWxlbWVudCwgaXQgd2lsbCBoaWRlIGl0XHJcbiAgICAgICAgICAgICAgICBpdGVtZm9ybUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JTbW9vdGhTY3JvbGwnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25Cb2R5KCkvL2ZvciBzY3JpcHQvYW5pbWF0aW9uLmpzIChzbW9vdGhTY3JvbGwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PSAnZGVsaXZlcnknKSB7Ly9zaW1pbGFybHksIHNlZSBhYm92ZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtZGVsaXZlcnkgb2YgZGVsaXZlcnkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1kZWxpdmVyeS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGl0ZW1kZWxpdmVyeS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGlkZS1kZWxpdmVyeScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbWRlbGl2ZXJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9