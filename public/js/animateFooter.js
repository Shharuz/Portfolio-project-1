"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["animateFooter"],{

/***/ "./src/script/allScripts/animateFooter.js":
/*!************************************************!*\
  !*** ./src/script/allScripts/animateFooter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footerVisibleScroll: () => (/* binding */ footerVisibleScroll),
/* harmony export */   footerVisibleWithoutScroll: () => (/* binding */ footerVisibleWithoutScroll)
/* harmony export */ });
const footer = document.querySelector('footer .footer-container');
/*let scrollPercent;

function getScrollPercent() {
    //console.log(window.scrollY, 'window.scrollY');
    //console.log(window.innerHeight, 'window.innerHeight');

    //console.log(body.offsetHeight, 'body.offsetHeight');

    scrollPercent = +((window.scrollY / (document.querySelector('body').offsetHeight - window.innerHeight) * 100).toFixed(2));
    

    if (scrollPercent > 95) {
        footer.classList.add('footerVisible');
    } else {
        footer.classList.remove('footerVisible');
    }

}*/

function footerVisibleScroll(scrollPercent) {
    if (scrollPercent > 95) {
        footer.classList.add('footerVisible');
    } else {
        footer.classList.remove('footerVisible');
    }
}



function footerVisibleWithoutScroll() {//if the scroll position is at the very bottom
    if (document.querySelector('body').offsetHeight - window.innerHeight == 0) {
        footer.classList.add('footerVisible');
    } else {
        footer.classList.remove('footerVisible');
    }
}


//window.addEventListener('scroll', getScrollPercent);
window.addEventListener('resize', footerVisibleWithoutScroll);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZUZvb3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHVDQUF1QztBQUM5QztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYW5pbWF0ZUZvb3Rlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXIgLmZvb3Rlci1jb250YWluZXInKTtcclxuLypsZXQgc2Nyb2xsUGVyY2VudDtcclxuXHJcbmZ1bmN0aW9uIGdldFNjcm9sbFBlcmNlbnQoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLCAnd2luZG93LnNjcm9sbFknKTtcclxuICAgIC8vY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0LCAnd2luZG93LmlubmVySGVpZ2h0Jyk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhib2R5Lm9mZnNldEhlaWdodCwgJ2JvZHkub2Zmc2V0SGVpZ2h0Jyk7XHJcblxyXG4gICAgc2Nyb2xsUGVyY2VudCA9ICsoKHdpbmRvdy5zY3JvbGxZIC8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpICogMTAwKS50b0ZpeGVkKDIpKTtcclxuICAgIFxyXG5cclxuICAgIGlmIChzY3JvbGxQZXJjZW50ID4gOTUpIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxufSovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyVmlzaWJsZVNjcm9sbChzY3JvbGxQZXJjZW50KSB7XHJcbiAgICBpZiAoc2Nyb2xsUGVyY2VudCA+IDk1KSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyVmlzaWJsZVdpdGhvdXRTY3JvbGwoKSB7Ly9pZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGF0IHRoZSB2ZXJ5IGJvdHRvbVxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPT0gMCkge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRTY3JvbGxQZXJjZW50KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZvb3RlclZpc2libGVXaXRob3V0U2Nyb2xsKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==