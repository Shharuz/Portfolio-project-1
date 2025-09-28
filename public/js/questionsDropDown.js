"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["questionsDropDown"],{

/***/ "./src/script/allScripts/questionsDropDown.js":
/*!****************************************************!*\
  !*** ./src/script/allScripts/questionsDropDown.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   questionsDropDown: () => (/* binding */ questionsDropDown)
/* harmony export */ });
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ "./src/script/allScripts/animation.js");


function questionsDropDown(item) {
     if(!item.classList.contains('rotate-svg-questions')){
               item.classList.add('rotate-svg-questions')
               setTimeout(function() {
                   ;(0,_animation_js__WEBPACK_IMPORTED_MODULE_0__.alignBody)();
                }, 510);
               
           }else{
               item.classList.remove('rotate-svg-questions')
               setTimeout(function() {
                    ;(0,_animation_js__WEBPACK_IMPORTED_MODULE_0__.alignBody)();
                }, 510);
               
           }

           if(!item.nextElementSibling.classList.contains('open-question')){
                item.nextElementSibling.classList.add('open-question')
           }else{
                item.nextElementSibling.classList.remove('open-question')
           };
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb25zRHJvcERvd24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDM0M7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBUztBQUM1QixpQkFBaUI7QUFDakI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9CQUFvQix5REFBUztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9xdWVzdGlvbnNEcm9wRG93bi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGlnbkJvZHkgfSBmcm9tICcuL2FuaW1hdGlvbi5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcXVlc3Rpb25zRHJvcERvd24oaXRlbSkge1xyXG4gICAgIGlmKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlLXN2Zy1xdWVzdGlvbnMnKSl7XHJcbiAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncm90YXRlLXN2Zy1xdWVzdGlvbnMnKVxyXG4gICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgYWxpZ25Cb2R5KCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MTApO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUtc3ZnLXF1ZXN0aW9ucycpXHJcbiAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25Cb2R5KCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MTApO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIGlmKCFpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tcXVlc3Rpb24nKSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdvcGVuLXF1ZXN0aW9uJylcclxuICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4tcXVlc3Rpb24nKVxyXG4gICAgICAgICAgIH07XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==