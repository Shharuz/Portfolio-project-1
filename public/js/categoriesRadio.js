"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["categoriesRadio"],{

/***/ "./src/script/allScripts/categoriesRadio.js":
/*!**************************************************!*\
  !*** ./src/script/allScripts/categoriesRadio.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collectionOfElementsForhideShow: () => (/* binding */ collectionOfElementsForhideShow),
/* harmony export */   highlightedElement: () => (/* binding */ highlightedElement)
/* harmony export */ });
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ "./src/script/allScripts/animation.js");
//For howToBuy.html, blog.html, account.html, questions.html



//import { itemsCategories } from '../howToBuy.js';
//const itemsCategories = document.querySelectorAll('.forCategoryAllPages p'); //in the element with the class radio-category, all inputs of the radio type are taken
const collectionOfElementsForhideShow = document.querySelectorAll('[data-anchor]') //collection of all elements with attribute data-anchor
const footer = document.querySelector('footer .footer-container');

/*itemsCategories.forEach((item) => {

    item.addEventListener('click', highlightedElement);
});*/

function highlightedElement(eTarget, itemsCategories) {
    for (let item of itemsCategories) {
        item.classList.remove('highlighted') 
    }
    if (!eTarget.classList.contains('highlighted')) {
            eTarget.classList.add('highlighted')
        }

    for (let itemCollect of collectionOfElementsForhideShow) { //iterate over all elements with data-anchor attribute
        itemCollect.classList.add('hide'); //all elements with the data-anchor attribute are assigned the hide class


        if (eTarget.id == 'all-blog') { //for blog.html //if the value of the input id is 'all-blog', then all elements with the data-anchor attribute will have the hide class removed
            itemCollect.classList.remove('hide');
        } else if (eTarget.id == itemCollect.getAttribute('data-anchor')) { //there are: 1. input with change event 2. element (div or p) with data-anchor attribute
            itemCollect.classList.remove('hide'); // if input id matches element (div or p) data-anchor attribute, then remove class hide from element (div or p)
            //fix display footer on howToBuy.html (for animateFooter.js)
            footer.classList.add('footerVisible');
        }

    }
    if (collectionOfElementsForhideShow[0].classList.contains('questions__question-and-answer')) {
        (0,_animation_js__WEBPACK_IMPORTED_MODULE_0__.alignBody)(); //only for questions.html, so that smooth scrolling works
    } else if (collectionOfElementsForhideShow[0].classList.contains('blog__reviews')) {
        (0,_animation_js__WEBPACK_IMPORTED_MODULE_0__.alignBody)(); //only for blog.html, so that smooth scrolling works
    }
}

//only blog.html
let checkBlog = document.querySelector('.blog');
if (checkBlog != null) {

    document.addEventListener('DOMContentLoaded', changeCheckedRadioBlog);

    function changeCheckedRadioBlog() { //to go from the card.html page; section card-helpful-information -> card-helpful-information__articles
        let blogHref = window.location.href.split("?")[1];

        if (blogHref != undefined) {
            for (let item of itemsCategories) {
                if (item.classList.contains('highlighted')) {
                    item.classList.remove('highlighted')
                };
                if (item.id == blogHref) { //https://livebacteria.local/blog.html?video-broadcasts - will only take video-broadcasts
                    item.classList.add('highlighted'); //will set the checked state to the input whose id matches the link address
                    for (let itemCollect of collectionOfElementsForhideShow) {
                        itemCollect.classList.add('hide'); //all elements with the data-anchor attribute are assigned the hide class
                        if (itemCollect.getAttribute('data-anchor') == window.location.href.split("?")[1]) { //if the value of the data-anchor attribute matches the split link address (2nd part), 
                            itemCollect.classList.remove('hide'); // then the 'hide' class will be removed from this element
                        }
                    }
                    (0,_animation_js__WEBPACK_IMPORTED_MODULE_0__.alignBody)();
                }

            }
        }


    };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllc1JhZGlvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDMkM7QUFDVTtBQUNyRCxXQUFXLGtCQUFrQjtBQUM3QiwrRUFBK0U7QUFDeEU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9ELDJDQUEyQztBQUMzQztBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EsVUFBVSxrRUFBa0U7QUFDNUUsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVMsSUFBSTtBQUNyQixNQUFNO0FBQ04sUUFBUSx3REFBUyxJQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpQ0FBaUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsdURBQXVEO0FBQ3ZEO0FBQ0EsMkRBQTJEO0FBQzNELDZHQUE2RztBQUM3RyxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBLG9CQUFvQix3REFBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvY2F0ZWdvcmllc1JhZGlvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRm9yIGhvd1RvQnV5Lmh0bWwsIGJsb2cuaHRtbCwgYWNjb3VudC5odG1sLCBxdWVzdGlvbnMuaHRtbFxyXG5cclxuaW1wb3J0IHsgYWxpZ25Cb2R5IH0gZnJvbSAnLi9hbmltYXRpb24uanMnO1xyXG5pbXBvcnQgeyBib2R5Zm9yU21vb3RoU2Nyb2xsIH0gZnJvbSAnLi9hbmltYXRpb24uanMnO1xyXG4vL2ltcG9ydCB7IGl0ZW1zQ2F0ZWdvcmllcyB9IGZyb20gJy4uL2hvd1RvQnV5LmpzJztcclxuLy9jb25zdCBpdGVtc0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yQ2F0ZWdvcnlBbGxQYWdlcyBwJyk7IC8vaW4gdGhlIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgcmFkaW8tY2F0ZWdvcnksIGFsbCBpbnB1dHMgb2YgdGhlIHJhZGlvIHR5cGUgYXJlIHRha2VuXHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYW5jaG9yXScpIC8vY29sbGVjdGlvbiBvZiBhbGwgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGUgZGF0YS1hbmNob3JcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyIC5mb290ZXItY29udGFpbmVyJyk7XHJcblxyXG4vKml0ZW1zQ2F0ZWdvcmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZ2hsaWdodGVkRWxlbWVudCk7XHJcbn0pOyovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0ZWRFbGVtZW50KGVUYXJnZXQsIGl0ZW1zQ2F0ZWdvcmllcykge1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJykgXHJcbiAgICB9XHJcbiAgICBpZiAoIWVUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHRlZCcpKSB7XHJcbiAgICAgICAgICAgIGVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpdGVtQ29sbGVjdCBvZiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93KSB7IC8vaXRlcmF0ZSBvdmVyIGFsbCBlbGVtZW50cyB3aXRoIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZVxyXG4gICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsgLy9hbGwgZWxlbWVudHMgd2l0aCB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIGFyZSBhc3NpZ25lZCB0aGUgaGlkZSBjbGFzc1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGVUYXJnZXQuaWQgPT0gJ2FsbC1ibG9nJykgeyAvL2ZvciBibG9nLmh0bWwgLy9pZiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGlkIGlzICdhbGwtYmxvZycsIHRoZW4gYWxsIGVsZW1lbnRzIHdpdGggdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSB3aWxsIGhhdmUgdGhlIGhpZGUgY2xhc3MgcmVtb3ZlZFxyXG4gICAgICAgICAgICBpdGVtQ29sbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlVGFyZ2V0LmlkID09IGl0ZW1Db2xsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSkgeyAvL3RoZXJlIGFyZTogMS4gaW5wdXQgd2l0aCBjaGFuZ2UgZXZlbnQgMi4gZWxlbWVudCAoZGl2IG9yIHApIHdpdGggZGF0YS1hbmNob3IgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgLy8gaWYgaW5wdXQgaWQgbWF0Y2hlcyBlbGVtZW50IChkaXYgb3IgcCkgZGF0YS1hbmNob3IgYXR0cmlidXRlLCB0aGVuIHJlbW92ZSBjbGFzcyBoaWRlIGZyb20gZWxlbWVudCAoZGl2IG9yIHApXHJcbiAgICAgICAgICAgIC8vZml4IGRpc3BsYXkgZm9vdGVyIG9uIGhvd1RvQnV5Lmh0bWwgKGZvciBhbmltYXRlRm9vdGVyLmpzKVxyXG4gICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvd1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3F1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcicpKSB7XHJcbiAgICAgICAgYWxpZ25Cb2R5KCk7IC8vb25seSBmb3IgcXVlc3Rpb25zLmh0bWwsIHNvIHRoYXQgc21vb3RoIHNjcm9sbGluZyB3b3Jrc1xyXG4gICAgfSBlbHNlIGlmIChjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93WzBdLmNsYXNzTGlzdC5jb250YWlucygnYmxvZ19fcmV2aWV3cycpKSB7XHJcbiAgICAgICAgYWxpZ25Cb2R5KCk7IC8vb25seSBmb3IgYmxvZy5odG1sLCBzbyB0aGF0IHNtb290aCBzY3JvbGxpbmcgd29ya3NcclxuICAgIH1cclxufVxyXG5cclxuLy9vbmx5IGJsb2cuaHRtbFxyXG5sZXQgY2hlY2tCbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2cnKTtcclxuaWYgKGNoZWNrQmxvZyAhPSBudWxsKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNoYW5nZUNoZWNrZWRSYWRpb0Jsb2cpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUNoZWNrZWRSYWRpb0Jsb2coKSB7IC8vdG8gZ28gZnJvbSB0aGUgY2FyZC5odG1sIHBhZ2U7IHNlY3Rpb24gY2FyZC1oZWxwZnVsLWluZm9ybWF0aW9uIC0+IGNhcmQtaGVscGZ1bC1pbmZvcm1hdGlvbl9fYXJ0aWNsZXNcclxuICAgICAgICBsZXQgYmxvZ0hyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMV07XHJcblxyXG4gICAgICAgIGlmIChibG9nSHJlZiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGJsb2dIcmVmKSB7IC8vaHR0cHM6Ly9saXZlYmFjdGVyaWEubG9jYWwvYmxvZy5odG1sP3ZpZGVvLWJyb2FkY2FzdHMgLSB3aWxsIG9ubHkgdGFrZSB2aWRlby1icm9hZGNhc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpOyAvL3dpbGwgc2V0IHRoZSBjaGVja2VkIHN0YXRlIHRvIHRoZSBpbnB1dCB3aG9zZSBpZCBtYXRjaGVzIHRoZSBsaW5rIGFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtQ29sbGVjdCBvZiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsgLy9hbGwgZWxlbWVudHMgd2l0aCB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIGFyZSBhc3NpZ25lZCB0aGUgaGlkZSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbGxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVsxXSkgeyAvL2lmIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIG1hdGNoZXMgdGhlIHNwbGl0IGxpbmsgYWRkcmVzcyAoMm5kIHBhcnQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgLy8gdGhlbiB0aGUgJ2hpZGUnIGNsYXNzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQm9keSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==