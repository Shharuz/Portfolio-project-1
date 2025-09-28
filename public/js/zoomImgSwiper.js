"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["zoomImgSwiper"],{

/***/ "./src/script/allScripts/zoomImgSwiper.js":
/*!************************************************!*\
  !*** ./src/script/allScripts/zoomImgSwiper.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   zoomDecrease: () => (/* binding */ zoomDecrease),
/* harmony export */   zoomIncrease: () => (/* binding */ zoomIncrease)
/* harmony export */ });
//for card.html
function zoomIncrease(e, item, preview, x, y) {
    preview.style.backgroundImage = "url(" + `${item.getAttribute('src')}` + ')'; //the div with class "zoom-preview" has a background similar to the adjacent image
    preview.style.backgroundSize = item.width * x +
        "px " + item.height * y + "px";

    let posX = e.offsetX; //cursor x coordinates
    let posY = e.offsetY; //cursor y coordinates

    preview.style.backgroundPosition = "-" +
        (posX * x) / 2.7 + "px -" + (posY * y) / 1.9 + "px";
    //value 2.7 - is responsible for the distance by which the enlarged image will be shifted horizontally
    //for example, with a value of 8, the image will hardly move, but with a value of 1, it will move too much, going beyond the block
    //value 1.9 - is responsible for the distance by which the enlarged image will be shifted vertically      
}

function zoomDecrease(preview) {
    preview.style.backgroundImage = "none";
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbUltZ1N3aXBlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ087QUFDUCxnREFBZ0QseUJBQXlCLFNBQVM7QUFDbEY7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvem9vbUltZ1N3aXBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ZvciBjYXJkLmh0bWxcclxuZXhwb3J0IGZ1bmN0aW9uIHpvb21JbmNyZWFzZShlLCBpdGVtLCBwcmV2aWV3LCB4LCB5KSB7XHJcbiAgICBwcmV2aWV3LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgYCR7aXRlbS5nZXRBdHRyaWJ1dGUoJ3NyYycpfWAgKyAnKSc7IC8vdGhlIGRpdiB3aXRoIGNsYXNzIFwiem9vbS1wcmV2aWV3XCIgaGFzIGEgYmFja2dyb3VuZCBzaW1pbGFyIHRvIHRoZSBhZGphY2VudCBpbWFnZVxyXG4gICAgcHJldmlldy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGl0ZW0ud2lkdGggKiB4ICtcclxuICAgICAgICBcInB4IFwiICsgaXRlbS5oZWlnaHQgKiB5ICsgXCJweFwiO1xyXG5cclxuICAgIGxldCBwb3NYID0gZS5vZmZzZXRYOyAvL2N1cnNvciB4IGNvb3JkaW5hdGVzXHJcbiAgICBsZXQgcG9zWSA9IGUub2Zmc2V0WTsgLy9jdXJzb3IgeSBjb29yZGluYXRlc1xyXG5cclxuICAgIHByZXZpZXcuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCItXCIgK1xyXG4gICAgICAgIChwb3NYICogeCkgLyAyLjcgKyBcInB4IC1cIiArIChwb3NZICogeSkgLyAxLjkgKyBcInB4XCI7XHJcbiAgICAvL3ZhbHVlIDIuNyAtIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgZGlzdGFuY2UgYnkgd2hpY2ggdGhlIGVubGFyZ2VkIGltYWdlIHdpbGwgYmUgc2hpZnRlZCBob3Jpem9udGFsbHlcclxuICAgIC8vZm9yIGV4YW1wbGUsIHdpdGggYSB2YWx1ZSBvZiA4LCB0aGUgaW1hZ2Ugd2lsbCBoYXJkbHkgbW92ZSwgYnV0IHdpdGggYSB2YWx1ZSBvZiAxLCBpdCB3aWxsIG1vdmUgdG9vIG11Y2gsIGdvaW5nIGJleW9uZCB0aGUgYmxvY2tcclxuICAgIC8vdmFsdWUgMS45IC0gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBkaXN0YW5jZSBieSB3aGljaCB0aGUgZW5sYXJnZWQgaW1hZ2Ugd2lsbCBiZSBzaGlmdGVkIHZlcnRpY2FsbHkgICAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHpvb21EZWNyZWFzZShwcmV2aWV3KSB7XHJcbiAgICBwcmV2aWV3LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibm9uZVwiO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9