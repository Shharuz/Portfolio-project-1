"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["categoriesRadioCount"],{

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

/***/ }),

/***/ "./src/script/allScripts/categoriesRadioCount.js":
/*!*******************************************************!*\
  !*** ./src/script/allScripts/categoriesRadioCount.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countCategories: () => (/* binding */ countCategories)
/* harmony export */ });
/* harmony import */ var _categoriesRadio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoriesRadio.js */ "./src/script/allScripts/categoriesRadio.js");
//export const itemsCategories = document.querySelectorAll('.forCategoryAllPages p'); //in the element with the class radio-category, all inputs of the radio type are taken

function countCategories(itemsCategories) {
    if (itemsCategories[0].childNodes[1]) { //check that this piece of code only works on the blog.html

        //counting all articles
        let count = 0;
        for (let itemCollect of _categoriesRadio_js__WEBPACK_IMPORTED_MODULE_0__.collectionOfElementsForhideShow) {
            //console.log(itemCollect.childNodes);//NodeList format: text, div.blog-article-min; text, div.blog-article-min; etc. 
            //only div.blog-article-min need to be counted, That's why -> itemCollect.childNodes.length / 2
            //there is text at the end of the nodelist, the text needs to be removed, That's why -> itemCollect.childNodes.length - 1
            count += itemCollect.childNodes.length //throw into the count
        }
        itemsCategories[0].childNodes[1].innerHTML = count; //add counted articles to html

        //counting articles by category
        itemsCategories.forEach((item) => { // for each item from the collection itemsCategories
            for (let itemCollect of _categoriesRadio_js__WEBPACK_IMPORTED_MODULE_0__.collectionOfElementsForhideShow) { //iterate over all elements with data-anchor attribute
                if (item.id == itemCollect.getAttribute('data-anchor')) { //if item.id matches the data-anchor attribute of an element from the collection collectionOfElementsForhideShow
                    item.childNodes[1].innerHTML = (itemCollect.childNodes.length); // then from the input go to the label, and in the label find the span and assign the value of the counted articles
                };
            }
        });
    };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllc1JhZGlvQ291bnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUMyQztBQUNVO0FBQ3JELFdBQVcsa0JBQWtCO0FBQzdCLCtFQUErRTtBQUN4RTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0QsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQSxVQUFVLGtFQUFrRTtBQUM1RSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBUyxJQUFJO0FBQ3JCLE1BQU07QUFDTixRQUFRLHdEQUFTLElBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlDQUFpQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyx1REFBdUQ7QUFDdkQ7QUFDQSwyREFBMkQ7QUFDM0QsNkdBQTZHO0FBQzdHLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBLHNGQUFzRjtBQUNmO0FBQ2hFO0FBQ1AsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnRkFBK0I7QUFDL0Qsa0RBQWtELCtDQUErQyw0QkFBNEI7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxvQ0FBb0MsZ0ZBQStCLElBQUk7QUFDdkUsMEVBQTBFO0FBQzFFLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9jYXRlZ29yaWVzUmFkaW8uanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2NhdGVnb3JpZXNSYWRpb0NvdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRm9yIGhvd1RvQnV5Lmh0bWwsIGJsb2cuaHRtbCwgYWNjb3VudC5odG1sLCBxdWVzdGlvbnMuaHRtbFxyXG5cclxuaW1wb3J0IHsgYWxpZ25Cb2R5IH0gZnJvbSAnLi9hbmltYXRpb24uanMnO1xyXG5pbXBvcnQgeyBib2R5Zm9yU21vb3RoU2Nyb2xsIH0gZnJvbSAnLi9hbmltYXRpb24uanMnO1xyXG4vL2ltcG9ydCB7IGl0ZW1zQ2F0ZWdvcmllcyB9IGZyb20gJy4uL2hvd1RvQnV5LmpzJztcclxuLy9jb25zdCBpdGVtc0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yQ2F0ZWdvcnlBbGxQYWdlcyBwJyk7IC8vaW4gdGhlIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgcmFkaW8tY2F0ZWdvcnksIGFsbCBpbnB1dHMgb2YgdGhlIHJhZGlvIHR5cGUgYXJlIHRha2VuXHJcbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYW5jaG9yXScpIC8vY29sbGVjdGlvbiBvZiBhbGwgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGUgZGF0YS1hbmNob3JcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyIC5mb290ZXItY29udGFpbmVyJyk7XHJcblxyXG4vKml0ZW1zQ2F0ZWdvcmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZ2hsaWdodGVkRWxlbWVudCk7XHJcbn0pOyovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0ZWRFbGVtZW50KGVUYXJnZXQsIGl0ZW1zQ2F0ZWdvcmllcykge1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJykgXHJcbiAgICB9XHJcbiAgICBpZiAoIWVUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHRlZCcpKSB7XHJcbiAgICAgICAgICAgIGVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpdGVtQ29sbGVjdCBvZiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93KSB7IC8vaXRlcmF0ZSBvdmVyIGFsbCBlbGVtZW50cyB3aXRoIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZVxyXG4gICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsgLy9hbGwgZWxlbWVudHMgd2l0aCB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIGFyZSBhc3NpZ25lZCB0aGUgaGlkZSBjbGFzc1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGVUYXJnZXQuaWQgPT0gJ2FsbC1ibG9nJykgeyAvL2ZvciBibG9nLmh0bWwgLy9pZiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGlkIGlzICdhbGwtYmxvZycsIHRoZW4gYWxsIGVsZW1lbnRzIHdpdGggdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSB3aWxsIGhhdmUgdGhlIGhpZGUgY2xhc3MgcmVtb3ZlZFxyXG4gICAgICAgICAgICBpdGVtQ29sbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlVGFyZ2V0LmlkID09IGl0ZW1Db2xsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSkgeyAvL3RoZXJlIGFyZTogMS4gaW5wdXQgd2l0aCBjaGFuZ2UgZXZlbnQgMi4gZWxlbWVudCAoZGl2IG9yIHApIHdpdGggZGF0YS1hbmNob3IgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgLy8gaWYgaW5wdXQgaWQgbWF0Y2hlcyBlbGVtZW50IChkaXYgb3IgcCkgZGF0YS1hbmNob3IgYXR0cmlidXRlLCB0aGVuIHJlbW92ZSBjbGFzcyBoaWRlIGZyb20gZWxlbWVudCAoZGl2IG9yIHApXHJcbiAgICAgICAgICAgIC8vZml4IGRpc3BsYXkgZm9vdGVyIG9uIGhvd1RvQnV5Lmh0bWwgKGZvciBhbmltYXRlRm9vdGVyLmpzKVxyXG4gICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpZiAoY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvd1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3F1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcicpKSB7XHJcbiAgICAgICAgYWxpZ25Cb2R5KCk7IC8vb25seSBmb3IgcXVlc3Rpb25zLmh0bWwsIHNvIHRoYXQgc21vb3RoIHNjcm9sbGluZyB3b3Jrc1xyXG4gICAgfSBlbHNlIGlmIChjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93WzBdLmNsYXNzTGlzdC5jb250YWlucygnYmxvZ19fcmV2aWV3cycpKSB7XHJcbiAgICAgICAgYWxpZ25Cb2R5KCk7IC8vb25seSBmb3IgYmxvZy5odG1sLCBzbyB0aGF0IHNtb290aCBzY3JvbGxpbmcgd29ya3NcclxuICAgIH1cclxufVxyXG5cclxuLy9vbmx5IGJsb2cuaHRtbFxyXG5sZXQgY2hlY2tCbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2cnKTtcclxuaWYgKGNoZWNrQmxvZyAhPSBudWxsKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNoYW5nZUNoZWNrZWRSYWRpb0Jsb2cpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUNoZWNrZWRSYWRpb0Jsb2coKSB7IC8vdG8gZ28gZnJvbSB0aGUgY2FyZC5odG1sIHBhZ2U7IHNlY3Rpb24gY2FyZC1oZWxwZnVsLWluZm9ybWF0aW9uIC0+IGNhcmQtaGVscGZ1bC1pbmZvcm1hdGlvbl9fYXJ0aWNsZXNcclxuICAgICAgICBsZXQgYmxvZ0hyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMV07XHJcblxyXG4gICAgICAgIGlmIChibG9nSHJlZiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGJsb2dIcmVmKSB7IC8vaHR0cHM6Ly9saXZlYmFjdGVyaWEubG9jYWwvYmxvZy5odG1sP3ZpZGVvLWJyb2FkY2FzdHMgLSB3aWxsIG9ubHkgdGFrZSB2aWRlby1icm9hZGNhc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpOyAvL3dpbGwgc2V0IHRoZSBjaGVja2VkIHN0YXRlIHRvIHRoZSBpbnB1dCB3aG9zZSBpZCBtYXRjaGVzIHRoZSBsaW5rIGFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtQ29sbGVjdCBvZiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsgLy9hbGwgZWxlbWVudHMgd2l0aCB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIGFyZSBhc3NpZ25lZCB0aGUgaGlkZSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbGxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVsxXSkgeyAvL2lmIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIG1hdGNoZXMgdGhlIHNwbGl0IGxpbmsgYWRkcmVzcyAoMm5kIHBhcnQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgLy8gdGhlbiB0aGUgJ2hpZGUnIGNsYXNzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduQm9keSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfTtcclxufSIsIi8vZXhwb3J0IGNvbnN0IGl0ZW1zQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JDYXRlZ29yeUFsbFBhZ2VzIHAnKTsgLy9pbiB0aGUgZWxlbWVudCB3aXRoIHRoZSBjbGFzcyByYWRpby1jYXRlZ29yeSwgYWxsIGlucHV0cyBvZiB0aGUgcmFkaW8gdHlwZSBhcmUgdGFrZW5cclxuaW1wb3J0IHsgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdyB9IGZyb20gJy4vY2F0ZWdvcmllc1JhZGlvLmpzJztcclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50Q2F0ZWdvcmllcyhpdGVtc0NhdGVnb3JpZXMpIHtcclxuICAgIGlmIChpdGVtc0NhdGVnb3JpZXNbMF0uY2hpbGROb2Rlc1sxXSkgeyAvL2NoZWNrIHRoYXQgdGhpcyBwaWVjZSBvZiBjb2RlIG9ubHkgd29ya3Mgb24gdGhlIGJsb2cuaHRtbFxyXG5cclxuICAgICAgICAvL2NvdW50aW5nIGFsbCBhcnRpY2xlc1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbUNvbGxlY3Qgb2YgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdykge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW1Db2xsZWN0LmNoaWxkTm9kZXMpOy8vTm9kZUxpc3QgZm9ybWF0OiB0ZXh0LCBkaXYuYmxvZy1hcnRpY2xlLW1pbjsgdGV4dCwgZGl2LmJsb2ctYXJ0aWNsZS1taW47IGV0Yy4gXHJcbiAgICAgICAgICAgIC8vb25seSBkaXYuYmxvZy1hcnRpY2xlLW1pbiBuZWVkIHRvIGJlIGNvdW50ZWQsIFRoYXQncyB3aHkgLT4gaXRlbUNvbGxlY3QuY2hpbGROb2Rlcy5sZW5ndGggLyAyXHJcbiAgICAgICAgICAgIC8vdGhlcmUgaXMgdGV4dCBhdCB0aGUgZW5kIG9mIHRoZSBub2RlbGlzdCwgdGhlIHRleHQgbmVlZHMgdG8gYmUgcmVtb3ZlZCwgVGhhdCdzIHdoeSAtPiBpdGVtQ29sbGVjdC5jaGlsZE5vZGVzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgY291bnQgKz0gaXRlbUNvbGxlY3QuY2hpbGROb2Rlcy5sZW5ndGggLy90aHJvdyBpbnRvIHRoZSBjb3VudFxyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtc0NhdGVnb3JpZXNbMF0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBjb3VudDsgLy9hZGQgY291bnRlZCBhcnRpY2xlcyB0byBodG1sXHJcblxyXG4gICAgICAgIC8vY291bnRpbmcgYXJ0aWNsZXMgYnkgY2F0ZWdvcnlcclxuICAgICAgICBpdGVtc0NhdGVnb3JpZXMuZm9yRWFjaCgoaXRlbSkgPT4geyAvLyBmb3IgZWFjaCBpdGVtIGZyb20gdGhlIGNvbGxlY3Rpb24gaXRlbXNDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW1Db2xsZWN0IG9mIGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3cpIHsgLy9pdGVyYXRlIG92ZXIgYWxsIGVsZW1lbnRzIHdpdGggZGF0YS1hbmNob3IgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSBpdGVtQ29sbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJykpIHsgLy9pZiBpdGVtLmlkIG1hdGNoZXMgdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSBvZiBhbiBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24gY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvd1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSAoaXRlbUNvbGxlY3QuY2hpbGROb2Rlcy5sZW5ndGgpOyAvLyB0aGVuIGZyb20gdGhlIGlucHV0IGdvIHRvIHRoZSBsYWJlbCwgYW5kIGluIHRoZSBsYWJlbCBmaW5kIHRoZSBzcGFuIGFuZCBhc3NpZ24gdGhlIHZhbHVlIG9mIHRoZSBjb3VudGVkIGFydGljbGVzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9