"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["widget"],{

/***/ "./src/script/allScripts/widget.js":
/*!*****************************************!*\
  !*** ./src/script/allScripts/widget.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openWidget: () => (/* binding */ openWidget)
/* harmony export */ });
const list = document.querySelector('.widget__ul');
//const trigger = document.querySelector('.widget__trigger');
const triggerImg = document.querySelector('.widget__trigger__img');
const cross = document.querySelector('.widget__trigger__cross');

const openWidget = () => {
        if( !list.classList.contains('visibleWidgetlist') ){//scss on line 4349
            list.classList.add('visibleWidgetlist')//the list drops to the top
            triggerImg.classList.add('hidetrigger')   //changes the widget icon to a cross
            cross.classList.remove('hidetrigger')
        }else{
            list.classList.remove('visibleWidgetlist')//the list comes back
            triggerImg.classList.remove('hidetrigger')   
            cross.classList.add('hidetrigger')
        }
};
//openWidget();
//trigger.addEventListener('click', openWidget);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3dpZGdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdWwnKTtcclxuLy9jb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcicpO1xyXG5jb25zdCB0cmlnZ2VySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcl9faW1nJyk7XHJcbmNvbnN0IGNyb3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcl9fY3Jvc3MnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuV2lkZ2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCAhbGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGVXaWRnZXRsaXN0JykgKXsvL3Njc3Mgb24gbGluZSA0MzQ5XHJcbiAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgndmlzaWJsZVdpZGdldGxpc3QnKS8vdGhlIGxpc3QgZHJvcHMgdG8gdGhlIHRvcFxyXG4gICAgICAgICAgICB0cmlnZ2VySW1nLmNsYXNzTGlzdC5hZGQoJ2hpZGV0cmlnZ2VyJykgICAvL2NoYW5nZXMgdGhlIHdpZGdldCBpY29uIHRvIGEgY3Jvc3NcclxuICAgICAgICAgICAgY3Jvc3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZXRyaWdnZXInKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVXaWRnZXRsaXN0JykvL3RoZSBsaXN0IGNvbWVzIGJhY2tcclxuICAgICAgICAgICAgdHJpZ2dlckltZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRldHJpZ2dlcicpICAgXHJcbiAgICAgICAgICAgIGNyb3NzLmNsYXNzTGlzdC5hZGQoJ2hpZGV0cmlnZ2VyJylcclxuICAgICAgICB9XHJcbn07XHJcbi8vb3BlbldpZGdldCgpO1xyXG4vL3RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuV2lkZ2V0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=