"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["modalFilter"],{

/***/ "./src/script/allScripts/modalFilter.js":
/*!**********************************************!*\
  !*** ./src/script/allScripts/modalFilter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openFilterModal: () => (/* binding */ openFilterModal)
/* harmony export */ });
//to display the filter manufacturer weight and price on the page catalog Categories.html
//on screen resolution less than 1400px
const openFilter = document.querySelector(".bth-filter");
const filter = document.querySelector(".filter");
const closeFilter = document.querySelector(".filter__close");

function openFilterModal() {
        filter.classList.add('visible');
};

function closeFilterModal(e) {
        if(e.target == filter || e.target == closeFilter){
            filter.classList.remove('visible');
        }
        

};



  //open filter by clicking on element with class .bth-filter
closeFilter.addEventListener("click", closeFilterModal);//close filter by clicking on element with class .filter__close
filter.addEventListener("click", closeFilterModal);     //close the filter by clicking on any place on the screen except the filter

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxGaWx0ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCx3REFBd0QsMkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvbW9kYWxGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy90byBkaXNwbGF5IHRoZSBmaWx0ZXIgbWFudWZhY3R1cmVyIHdlaWdodCBhbmQgcHJpY2Ugb24gdGhlIHBhZ2UgY2F0YWxvZyBDYXRlZ29yaWVzLmh0bWxcclxuLy9vbiBzY3JlZW4gcmVzb2x1dGlvbiBsZXNzIHRoYW4gMTQwMHB4XHJcbmNvbnN0IG9wZW5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0aC1maWx0ZXJcIik7XHJcbmNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xyXG5jb25zdCBjbG9zZUZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19jbG9zZVwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuRmlsdGVyTW9kYWwoKSB7XHJcbiAgICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlRmlsdGVyTW9kYWwoZSkge1xyXG4gICAgICAgIGlmKGUudGFyZ2V0ID09IGZpbHRlciB8fCBlLnRhcmdldCA9PSBjbG9zZUZpbHRlcil7XHJcbiAgICAgICAgICAgIGZpbHRlci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxufTtcclxuXHJcblxyXG5cclxuICAvL29wZW4gZmlsdGVyIGJ5IGNsaWNraW5nIG9uIGVsZW1lbnQgd2l0aCBjbGFzcyAuYnRoLWZpbHRlclxyXG5jbG9zZUZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGaWx0ZXJNb2RhbCk7Ly9jbG9zZSBmaWx0ZXIgYnkgY2xpY2tpbmcgb24gZWxlbWVudCB3aXRoIGNsYXNzIC5maWx0ZXJfX2Nsb3NlXHJcbmZpbHRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGaWx0ZXJNb2RhbCk7ICAgICAvL2Nsb3NlIHRoZSBmaWx0ZXIgYnkgY2xpY2tpbmcgb24gYW55IHBsYWNlIG9uIHRoZSBzY3JlZW4gZXhjZXB0IHRoZSBmaWx0ZXIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=