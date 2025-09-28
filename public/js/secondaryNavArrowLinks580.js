"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["secondaryNavArrowLinks580"],{

/***/ "./src/script/allScripts/secondaryNavArrowLinks580.js":
/*!************************************************************!*\
  !*** ./src/script/allScripts/secondaryNavArrowLinks580.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goToPreviousPage: () => (/* binding */ goToPreviousPage)
/* harmony export */ });
// go to the previous page by navigation
function goToPreviousPage() {
    let allLiSecondNav = document.querySelectorAll('.secondary-nav li');

    //takes the link address from the previous element and puts it into the arrow link of the last element
    let linkAdress = allLiSecondNav[(allLiSecondNav.length - 2)].childNodes[0].getAttribute('href');

    allLiSecondNav[(allLiSecondNav.length - 1)].childNodes[1].setAttribute('href', linkAdress);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kYXJ5TmF2QXJyb3dMaW5rczU4MC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvc2Vjb25kYXJ5TmF2QXJyb3dMaW5rczU4MC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnbyB0byB0aGUgcHJldmlvdXMgcGFnZSBieSBuYXZpZ2F0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBnb1RvUHJldmlvdXNQYWdlKCkge1xyXG4gICAgbGV0IGFsbExpU2Vjb25kTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY29uZGFyeS1uYXYgbGknKTtcclxuXHJcbiAgICAvL3Rha2VzIHRoZSBsaW5rIGFkZHJlc3MgZnJvbSB0aGUgcHJldmlvdXMgZWxlbWVudCBhbmQgcHV0cyBpdCBpbnRvIHRoZSBhcnJvdyBsaW5rIG9mIHRoZSBsYXN0IGVsZW1lbnRcclxuICAgIGxldCBsaW5rQWRyZXNzID0gYWxsTGlTZWNvbmROYXZbKGFsbExpU2Vjb25kTmF2Lmxlbmd0aCAtIDIpXS5jaGlsZE5vZGVzWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cclxuICAgIGFsbExpU2Vjb25kTmF2WyhhbGxMaVNlY29uZE5hdi5sZW5ndGggLSAxKV0uY2hpbGROb2Rlc1sxXS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rQWRyZXNzKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==