"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["headerNavBurgerViewPortWidth1100px"],{

/***/ "./src/script/allScripts/headerNavBurgerViewPortWidth1100px.js":
/*!*********************************************************************!*\
  !*** ./src/script/allScripts/headerNavBurgerViewPortWidth1100px.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerNavListDown: () => (/* binding */ headerNavListDown)
/* harmony export */ });
//const btnListDropDown = document.querySelector('.header__nav__burger-wrapper-for-line');
const navMainList = document.querySelector('.header__nav__main-list');
/*btnListDropDown.addEventListener('click', (e) => {
    //console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth <= 1083) {//browser window width
        if (!e.target.classList.contains('cross')) {
            e.target.classList.add('cross');         //when adding a class from sticks makes a cross
            navMainList.classList.add('drop-down__header__nav__main-list');//when adding a class, it makes a list drop down
        } else {
            e.target.classList.remove('cross')
            navMainList.classList.remove('drop-down__header__nav__main-list');
        }
    }
    
});*/
function headerNavListDown(eventbtnBurgerheader) {
    if (!eventbtnBurgerheader.target.classList.contains('cross')) {
        eventbtnBurgerheader.target.classList.add('cross'); //when adding a class from sticks makes a cross
        navMainList.classList.add('drop-down__header__nav__main-list'); //when adding a class, it makes a list drop down
    } else {
        eventbtnBurgerheader.target.classList.remove('cross')
        navMainList.classList.remove('drop-down__header__nav__main-list');
    }
}
//btnListDropDown.addEventListener('click', headerNavListDown)



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyTmF2QnVyZ2VyVmlld1BvcnRXaWR0aDExMDBweC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxxREFBcUQ7QUFDckQsMkVBQTJFO0FBQzNFLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0k7QUFDUDtBQUNBLDREQUE0RDtBQUM1RCx3RUFBd0U7QUFDeEUsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJWaWV3UG9ydFdpZHRoMTEwMHB4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY29uc3QgYnRuTGlzdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2X19idXJnZXItd3JhcHBlci1mb3ItbGluZScpO1xyXG5jb25zdCBuYXZNYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7XHJcbi8qYnRuTGlzdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcclxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gMTA4Mykgey8vYnJvd3NlciB3aW5kb3cgd2lkdGhcclxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjcm9zcycpOyAgICAgICAgIC8vd2hlbiBhZGRpbmcgYSBjbGFzcyBmcm9tIHN0aWNrcyBtYWtlcyBhIGNyb3NzXHJcbiAgICAgICAgICAgIG5hdk1haW5MaXN0LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bl9faGVhZGVyX19uYXZfX21haW4tbGlzdCcpOy8vd2hlbiBhZGRpbmcgYSBjbGFzcywgaXQgbWFrZXMgYSBsaXN0IGRyb3AgZG93blxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Nyb3NzJylcclxuICAgICAgICAgICAgbmF2TWFpbkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcC1kb3duX19oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0pOyovXHJcbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXJOYXZMaXN0RG93bihldmVudGJ0bkJ1cmdlcmhlYWRlcikge1xyXG4gICAgaWYgKCFldmVudGJ0bkJ1cmdlcmhlYWRlci50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpKSB7XHJcbiAgICAgICAgZXZlbnRidG5CdXJnZXJoZWFkZXIudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Nyb3NzJyk7IC8vd2hlbiBhZGRpbmcgYSBjbGFzcyBmcm9tIHN0aWNrcyBtYWtlcyBhIGNyb3NzXHJcbiAgICAgICAgbmF2TWFpbkxpc3QuY2xhc3NMaXN0LmFkZCgnZHJvcC1kb3duX19oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7IC8vd2hlbiBhZGRpbmcgYSBjbGFzcywgaXQgbWFrZXMgYSBsaXN0IGRyb3AgZG93blxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudGJ0bkJ1cmdlcmhlYWRlci50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3MnKVxyXG4gICAgICAgIG5hdk1haW5MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3AtZG93bl9faGVhZGVyX19uYXZfX21haW4tbGlzdCcpO1xyXG4gICAgfVxyXG59XHJcbi8vYnRuTGlzdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGVhZGVyTmF2TGlzdERvd24pXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=