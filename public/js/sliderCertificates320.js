"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["sliderCertificates320"],{

/***/ "./src/script/allScripts/sliderCertificates320.js":
/*!********************************************************!*\
  !*** ./src/script/allScripts/sliderCertificates320.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dragStart: () => (/* binding */ dragStart)
/* harmony export */ });
/* harmony import */ var _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aboutUs.js */ "./src/script/aboutUs.js");
//const slider = document.querySelector('.aboutUs-certificates__block');

const wrapper = document.querySelector('.aboutUs-certificates__block__wrapper');
const firstElem = document.querySelectorAll('.aboutUs-certificates__block__wrapper__item')[0];
//console.log(firstElem);

let isDragstart = false;
let isDragging = false;
let prevPageX;
let prevScrollLeft;
let positionDiff;
let firstElemWidth = firstElem.clientWidth + 20;

const autoslide = () => {//the slider automatically reaches the desired position
    //slider.scrollLeft - value in px how much is scrolled relative to the left edge
    //slider.scrollWidth - width of the element, including the part that is hidden
    //slider.clientWidth - internal width with padding (if there is)
    if (_aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.scrollLeft == (_aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.scrollWidth - _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.clientWidth)) return;//will stop auto aligning the slide when it reaches the end (right edge)

    positionDiff = Math.abs(positionDiff);//always returns a positive number
    let firstElemWidth = firstElem.clientWidth + 20;
    let valDifference = firstElemWidth - positionDiff;


    if (_aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.scrollLeft > prevScrollLeft) {//aligns when you drag a slide from right to left
        return _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.scrollLeft += positionDiff > firstElemWidth / 3 ? valDifference : -positionDiff;//while dragging a slide if true, then there will be a value of valDifference and transition to the next slide
    }                                                                                                 //while dragging a slide if false, then the value will be -positionDiff and the slide will return to its original position
    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.scrollLeft -= positionDiff > firstElemWidth / 3 ? valDifference : -positionDiff;//aligns when you drag a slide from left to right
    //while dragging a slide, if true, then there will be a value of valDifference and transition to the next slide
    //while dragging a slide, if false, then the value will be -positionDiff and the slide will return to its original position
}

const dragStart = (e) => {
    isDragstart = true;
    e.preventDefault();
    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.classList.add('dragging')//for css styles(style.scss on line 8122)
    prevPageX = e.pageX || e.touches[0].pageX;//e.pageX - cursor(touches) coordinates relative to the left edge of the entire document
    //console.log(e.pageX);
    prevScrollLeft = _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.scrollLeft;//slider.scrollLeft -(receives or sets) the number of pixels by which the element's content is scrolled from the left edge
    //console.log(slider.scrollLeft);
}

const dragging = (e) => {
    if (!isDragstart) return;//the dragging() function is only triggered when a mousedown event occurs on the slider
    e.preventDefault();
    isDragging = true;
    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.classList.add('dragging')//for css styles(style.scss on line 8122)
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;//current cursor coordinates (counting from the left edge) subtract previous cursor coordinates (counting from the left edge)
    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.scrollLeft = prevScrollLeft - positionDiff;
    //In general, the cursor coordinates are recalculated and assigned to the Element.scrollLeft property
    
}

const dragStop = (e) => {
    e.preventDefault();
    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.classList.remove('dragging')//for css styles(style.scss on line 8122)
    isDragstart = false;

    if (!isDragging) return;//I need autoslide() to only trigger when mouseup occurs on a slide
    isDragging = false;
    autoslide();//on line 13
}


    //slider.addEventListener('mousedown', dragStart);
    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.addEventListener('touchstart', dragStart);

    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.addEventListener('mousemove', dragging);
    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.addEventListener('touchmove', dragging);

    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.addEventListener('mouseup', dragStop);
    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.addEventListener('touchend', dragStop);
    _aboutUs_js__WEBPACK_IMPORTED_MODULE_0__.slider.addEventListener('mouseleave', dragStop);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyQ2VydGlmaWNhdGVzMzIwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFNLGdCQUFnQiwrQ0FBTSxlQUFlLCtDQUFNLHNCQUFzQjtBQUMvRTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQU0sK0JBQStCO0FBQzdDLGVBQWUsK0NBQU0saUZBQWlGO0FBQ3RHLHNHQUFzRztBQUN0RyxJQUFJLCtDQUFNLGlGQUFpRjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUksK0NBQU07QUFDViw4Q0FBOEM7QUFDOUM7QUFDQSxxQkFBcUIsK0NBQU0sWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWLCtEQUErRDtBQUMvRCxJQUFJLCtDQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFNO0FBQ1Y7QUFDQSxJQUFJLCtDQUFNO0FBQ1YsSUFBSSwrQ0FBTTtBQUNWO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWLElBQUksK0NBQU07QUFDVixJQUFJLCtDQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3NsaWRlckNlcnRpZmljYXRlczMyMC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dFVzLWNlcnRpZmljYXRlc19fYmxvY2snKTtcclxuaW1wb3J0IHsgc2xpZGVyIH0gZnJvbSAnLi4vYWJvdXRVcy5qcyc7XHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRVcy1jZXJ0aWZpY2F0ZXNfX2Jsb2NrX193cmFwcGVyJyk7XHJcbmNvbnN0IGZpcnN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dFVzLWNlcnRpZmljYXRlc19fYmxvY2tfX3dyYXBwZXJfX2l0ZW0nKVswXTtcclxuLy9jb25zb2xlLmxvZyhmaXJzdEVsZW0pO1xyXG5cclxubGV0IGlzRHJhZ3N0YXJ0ID0gZmFsc2U7XHJcbmxldCBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbmxldCBwcmV2UGFnZVg7XHJcbmxldCBwcmV2U2Nyb2xsTGVmdDtcclxubGV0IHBvc2l0aW9uRGlmZjtcclxubGV0IGZpcnN0RWxlbVdpZHRoID0gZmlyc3RFbGVtLmNsaWVudFdpZHRoICsgMjA7XHJcblxyXG5jb25zdCBhdXRvc2xpZGUgPSAoKSA9PiB7Ly90aGUgc2xpZGVyIGF1dG9tYXRpY2FsbHkgcmVhY2hlcyB0aGUgZGVzaXJlZCBwb3NpdGlvblxyXG4gICAgLy9zbGlkZXIuc2Nyb2xsTGVmdCAtIHZhbHVlIGluIHB4IGhvdyBtdWNoIGlzIHNjcm9sbGVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0IGVkZ2VcclxuICAgIC8vc2xpZGVyLnNjcm9sbFdpZHRoIC0gd2lkdGggb2YgdGhlIGVsZW1lbnQsIGluY2x1ZGluZyB0aGUgcGFydCB0aGF0IGlzIGhpZGRlblxyXG4gICAgLy9zbGlkZXIuY2xpZW50V2lkdGggLSBpbnRlcm5hbCB3aWR0aCB3aXRoIHBhZGRpbmcgKGlmIHRoZXJlIGlzKVxyXG4gICAgaWYgKHNsaWRlci5zY3JvbGxMZWZ0ID09IChzbGlkZXIuc2Nyb2xsV2lkdGggLSBzbGlkZXIuY2xpZW50V2lkdGgpKSByZXR1cm47Ly93aWxsIHN0b3AgYXV0byBhbGlnbmluZyB0aGUgc2xpZGUgd2hlbiBpdCByZWFjaGVzIHRoZSBlbmQgKHJpZ2h0IGVkZ2UpXHJcblxyXG4gICAgcG9zaXRpb25EaWZmID0gTWF0aC5hYnMocG9zaXRpb25EaWZmKTsvL2Fsd2F5cyByZXR1cm5zIGEgcG9zaXRpdmUgbnVtYmVyXHJcbiAgICBsZXQgZmlyc3RFbGVtV2lkdGggPSBmaXJzdEVsZW0uY2xpZW50V2lkdGggKyAyMDtcclxuICAgIGxldCB2YWxEaWZmZXJlbmNlID0gZmlyc3RFbGVtV2lkdGggLSBwb3NpdGlvbkRpZmY7XHJcblxyXG5cclxuICAgIGlmIChzbGlkZXIuc2Nyb2xsTGVmdCA+IHByZXZTY3JvbGxMZWZ0KSB7Ly9hbGlnbnMgd2hlbiB5b3UgZHJhZyBhIHNsaWRlIGZyb20gcmlnaHQgdG8gbGVmdFxyXG4gICAgICAgIHJldHVybiBzbGlkZXIuc2Nyb2xsTGVmdCArPSBwb3NpdGlvbkRpZmYgPiBmaXJzdEVsZW1XaWR0aCAvIDMgPyB2YWxEaWZmZXJlbmNlIDogLXBvc2l0aW9uRGlmZjsvL3doaWxlIGRyYWdnaW5nIGEgc2xpZGUgaWYgdHJ1ZSwgdGhlbiB0aGVyZSB3aWxsIGJlIGEgdmFsdWUgb2YgdmFsRGlmZmVyZW5jZSBhbmQgdHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzbGlkZVxyXG4gICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3doaWxlIGRyYWdnaW5nIGEgc2xpZGUgaWYgZmFsc2UsIHRoZW4gdGhlIHZhbHVlIHdpbGwgYmUgLXBvc2l0aW9uRGlmZiBhbmQgdGhlIHNsaWRlIHdpbGwgcmV0dXJuIHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvblxyXG4gICAgc2xpZGVyLnNjcm9sbExlZnQgLT0gcG9zaXRpb25EaWZmID4gZmlyc3RFbGVtV2lkdGggLyAzID8gdmFsRGlmZmVyZW5jZSA6IC1wb3NpdGlvbkRpZmY7Ly9hbGlnbnMgd2hlbiB5b3UgZHJhZyBhIHNsaWRlIGZyb20gbGVmdCB0byByaWdodFxyXG4gICAgLy93aGlsZSBkcmFnZ2luZyBhIHNsaWRlLCBpZiB0cnVlLCB0aGVuIHRoZXJlIHdpbGwgYmUgYSB2YWx1ZSBvZiB2YWxEaWZmZXJlbmNlIGFuZCB0cmFuc2l0aW9uIHRvIHRoZSBuZXh0IHNsaWRlXHJcbiAgICAvL3doaWxlIGRyYWdnaW5nIGEgc2xpZGUsIGlmIGZhbHNlLCB0aGVuIHRoZSB2YWx1ZSB3aWxsIGJlIC1wb3NpdGlvbkRpZmYgYW5kIHRoZSBzbGlkZSB3aWxsIHJldHVybiB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb25cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRyYWdTdGFydCA9IChlKSA9PiB7XHJcbiAgICBpc0RyYWdzdGFydCA9IHRydWU7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKS8vZm9yIGNzcyBzdHlsZXMoc3R5bGUuc2NzcyBvbiBsaW5lIDgxMjIpXHJcbiAgICBwcmV2UGFnZVggPSBlLnBhZ2VYIHx8IGUudG91Y2hlc1swXS5wYWdlWDsvL2UucGFnZVggLSBjdXJzb3IodG91Y2hlcykgY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gdGhlIGxlZnQgZWRnZSBvZiB0aGUgZW50aXJlIGRvY3VtZW50XHJcbiAgICAvL2NvbnNvbGUubG9nKGUucGFnZVgpO1xyXG4gICAgcHJldlNjcm9sbExlZnQgPSBzbGlkZXIuc2Nyb2xsTGVmdDsvL3NsaWRlci5zY3JvbGxMZWZ0IC0ocmVjZWl2ZXMgb3Igc2V0cykgdGhlIG51bWJlciBvZiBwaXhlbHMgYnkgd2hpY2ggdGhlIGVsZW1lbnQncyBjb250ZW50IGlzIHNjcm9sbGVkIGZyb20gdGhlIGxlZnQgZWRnZVxyXG4gICAgLy9jb25zb2xlLmxvZyhzbGlkZXIuc2Nyb2xsTGVmdCk7XHJcbn1cclxuXHJcbmNvbnN0IGRyYWdnaW5nID0gKGUpID0+IHtcclxuICAgIGlmICghaXNEcmFnc3RhcnQpIHJldHVybjsvL3RoZSBkcmFnZ2luZygpIGZ1bmN0aW9uIGlzIG9ubHkgdHJpZ2dlcmVkIHdoZW4gYSBtb3VzZWRvd24gZXZlbnQgb2NjdXJzIG9uIHRoZSBzbGlkZXJcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJykvL2ZvciBjc3Mgc3R5bGVzKHN0eWxlLnNjc3Mgb24gbGluZSA4MTIyKVxyXG4gICAgcG9zaXRpb25EaWZmID0gKGUucGFnZVggfHwgZS50b3VjaGVzWzBdLnBhZ2VYKSAtIHByZXZQYWdlWDsvL2N1cnJlbnQgY3Vyc29yIGNvb3JkaW5hdGVzIChjb3VudGluZyBmcm9tIHRoZSBsZWZ0IGVkZ2UpIHN1YnRyYWN0IHByZXZpb3VzIGN1cnNvciBjb29yZGluYXRlcyAoY291bnRpbmcgZnJvbSB0aGUgbGVmdCBlZGdlKVxyXG4gICAgc2xpZGVyLnNjcm9sbExlZnQgPSBwcmV2U2Nyb2xsTGVmdCAtIHBvc2l0aW9uRGlmZjtcclxuICAgIC8vSW4gZ2VuZXJhbCwgdGhlIGN1cnNvciBjb29yZGluYXRlcyBhcmUgcmVjYWxjdWxhdGVkIGFuZCBhc3NpZ25lZCB0byB0aGUgRWxlbWVudC5zY3JvbGxMZWZ0IHByb3BlcnR5XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgZHJhZ1N0b3AgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJykvL2ZvciBjc3Mgc3R5bGVzKHN0eWxlLnNjc3Mgb24gbGluZSA4MTIyKVxyXG4gICAgaXNEcmFnc3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjsvL0kgbmVlZCBhdXRvc2xpZGUoKSB0byBvbmx5IHRyaWdnZXIgd2hlbiBtb3VzZXVwIG9jY3VycyBvbiBhIHNsaWRlXHJcbiAgICBpc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICBhdXRvc2xpZGUoKTsvL29uIGxpbmUgMTNcclxufVxyXG5cclxuXHJcbiAgICAvL3NsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnU3RhcnQpO1xyXG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkcmFnU3RhcnQpO1xyXG5cclxuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnZ2luZyk7XHJcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhZ2dpbmcpO1xyXG5cclxuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZHJhZ1N0b3ApO1xyXG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZHJhZ1N0b3ApO1xyXG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBkcmFnU3RvcCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==