"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["headerArrowOpenSubListViewPortWidth735px"],{

/***/ "./src/script/allScripts/headerArrowOpenSubListViewPortWidth735px.js":
/*!***************************************************************************!*\
  !*** ./src/script/allScripts/headerArrowOpenSubListViewPortWidth735px.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerNavListOpenSubList: () => (/* binding */ headerNavListOpenSubList)
/* harmony export */ });
//drop down header__nav__main-list__item__sub-list and header__nav__main-list__item__sub-list__item__last-list 
/*const arrowOpenList = document.querySelectorAll('.arrow-rigth-wrapper');
arrowOpenList.forEach((item) => {//when you click on the arrow a list drop down
    item.addEventListener('click', () => {
        if (!item.nextElementSibling.classList.contains('open-list')) {//it will be either header__nav__main-list__item__sub-list or a header__nav__main-list__item__sub-list__item__last-list
            item.nextElementSibling.classList.add('open-list')
        } else {
            item.nextElementSibling.classList.remove('open-list')
        };
        if (!item.classList.contains('arrow-rigth-wrapper-rotate')) {//spins by adding a class
            item.classList.add('arrow-rigth-wrapper-rotate')
        } else {
            item.classList.remove('arrow-rigth-wrapper-rotate')
        };
    });
});*/


//const arrowOpenList = document.querySelectorAll('.arrow-rigth-wrapper');
function headerNavListOpenSubList(arrow) {
    if (!arrow.nextElementSibling.classList.contains('open-list')) { //it will be either header__nav__main-list__item__sub-list or a header__nav__main-list__item__sub-list__item__last-list
        arrow.nextElementSibling.classList.add('open-list')
    } else {
        arrow.nextElementSibling.classList.remove('open-list')
    };
    if (!arrow.classList.contains('arrow-rigth-wrapper-rotate')) { //spins by adding a class
        arrow.classList.add('arrow-rigth-wrapper-rotate')
    } else {
        arrow.classList.remove('arrow-rigth-wrapper-rotate')
    };
}

/*arrowOpenList.forEach(item => {
    item.addEventListener('click', headerNavListOpenSubList)
})*/

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyQXJyb3dPcGVuU3ViTGlzdFZpZXdQb3J0V2lkdGg3MzVweC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLHVFQUF1RTtBQUN2RTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBO0FBQ087QUFDUCxxRUFBcUU7QUFDckU7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvaGVhZGVyQXJyb3dPcGVuU3ViTGlzdFZpZXdQb3J0V2lkdGg3MzVweC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2Ryb3AgZG93biBoZWFkZXJfX25hdl9fbWFpbi1saXN0X19pdGVtX19zdWItbGlzdCBhbmQgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3RfX2l0ZW1fX2xhc3QtbGlzdCBcclxuLypjb25zdCBhcnJvd09wZW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93LXJpZ3RoLXdyYXBwZXInKTtcclxuYXJyb3dPcGVuTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7Ly93aGVuIHlvdSBjbGljayBvbiB0aGUgYXJyb3cgYSBsaXN0IGRyb3AgZG93blxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoIWl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnb3Blbi1saXN0JykpIHsvL2l0IHdpbGwgYmUgZWl0aGVyIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0IG9yIGEgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3RfX2l0ZW1fX2xhc3QtbGlzdFxyXG4gICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdvcGVuLWxpc3QnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4tbGlzdCcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhcnJvdy1yaWd0aC13cmFwcGVyLXJvdGF0ZScpKSB7Ly9zcGlucyBieSBhZGRpbmcgYSBjbGFzc1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJylcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pOyovXHJcblxyXG5cclxuLy9jb25zdCBhcnJvd09wZW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93LXJpZ3RoLXdyYXBwZXInKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlck5hdkxpc3RPcGVuU3ViTGlzdChhcnJvdykge1xyXG4gICAgaWYgKCFhcnJvdy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLWxpc3QnKSkgeyAvL2l0IHdpbGwgYmUgZWl0aGVyIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0IG9yIGEgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3RfX2l0ZW1fX2xhc3QtbGlzdFxyXG4gICAgICAgIGFycm93Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdvcGVuLWxpc3QnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhcnJvdy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3Blbi1saXN0JylcclxuICAgIH07XHJcbiAgICBpZiAoIWFycm93LmNsYXNzTGlzdC5jb250YWlucygnYXJyb3ctcmlndGgtd3JhcHBlci1yb3RhdGUnKSkgeyAvL3NwaW5zIGJ5IGFkZGluZyBhIGNsYXNzXHJcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgnYXJyb3ctcmlndGgtd3JhcHBlci1yb3RhdGUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdhcnJvdy1yaWd0aC13cmFwcGVyLXJvdGF0ZScpXHJcbiAgICB9O1xyXG59XHJcblxyXG4vKmFycm93T3Blbkxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoZWFkZXJOYXZMaXN0T3BlblN1Ykxpc3QpXHJcbn0pKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=