/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/allScripts/animateHeaderSecondaryNav.js":
/*!************************************************************!*\
  !*** ./src/script/allScripts/animateHeaderSecondaryNav.js ***!
  \************************************************************/
/***/ (() => {

const header = document.querySelector('header');
const secondNav = document.querySelector('.secondary-nav');

const indexOffer = document.querySelector('.index-offer');
const catalogMainPage = document.querySelector('.catalogMainPage');
const catalogCategories = document.querySelector('.catalogCategories');

if(indexOffer != null || catalogMainPage != null || catalogCategories != null){
     window.addEventListener('load', appearHeaderSecondNav)
}else{
     window.addEventListener('DOMContentLoaded', appearHeaderSecondNav)
}


function appearHeaderSecondNav() {
    header.classList.add('appearHeader');
    if(secondNav != null){
        secondNav.classList.add('appearSecondary-nav'); 
    }
};


/***/ }),

/***/ "./src/script/allScripts/animation.js":
/*!********************************************!*\
  !*** ./src/script/allScripts/animation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignBody: () => (/* binding */ alignBody),
/* harmony export */   bodyforSmoothScroll: () => (/* binding */ bodyforSmoothScroll),
/* harmony export */   forSmoothScrollWrapper: () => (/* binding */ forSmoothScrollWrapper)
/* harmony export */ });
//catalogMainPage contacts directory forPartners howToBuy placingAnOrder questions account
//article blog catalogCategories reviews
//smooth scroll
const bodyforSmoothScroll = document.querySelector('body');

const forSmoothScrollWrapper = document.querySelector('.forSmoothScroll__wrapper');
//let heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));

let heightForScroll;
function alignBody() { // script/radioPerson  /  script/categoriesRadio / script/questions
    /*heightForScroll = forSmoothScrollWrapper.getBoundingClientRect().height;
    bodyforSmoothScroll.setAttribute('style', `height:${heightForScroll.toFixed(2)}px`);*/
    heightForScroll = forSmoothScrollWrapper.offsetHeight;
    //console.log(heightForScroll)
    bodyforSmoothScroll.setAttribute('style', `height:${heightForScroll}px`);

};

if (document.querySelector('.forSmoothScroll')) {


    //gives the height of the body so that scrolling occurs
    window.addEventListener('load', alignBody);

    window.addEventListener('resize', alignBody);

    let scrPosY = 0; //for scroll positions
    let blockPosY = scrPosY; // for forSmoothScrollWrapper position
    let speedAnim = 0.03; //if speedAnim > 0.07 (0.1) animation happens faster
    //if speedAnim < 0.07 (0.02) animation is slower


    // Bind a scroll function
    window.addEventListener('scroll', getsScrollValue);


    function getsScrollValue() {
        scrPosY = window.pageYOffset;
        //console.log(scrPosY);
    }


    window.requestAnimationFrame(smooth);

    //animate element reviews.html, questions.html and blog.html

    let windowHeight;
    const elementVisible = 1; //animation will start when the block is 150px away from the bottom of the viewport.
    const elementVisibleBlog = 30; //animation will start when the block is 150px away from the bottom of the viewport.
    let scrollElements;
    if (document.querySelectorAll(".reviews__wrapper-for-item__item").length > 0) {
        scrollElements = document.querySelectorAll(".reviews__wrapper-for-item__item"); //start by selecting all the block

    } else if (document.querySelectorAll(".questions__question-and-answer__item").length > 0) {
        scrollElements = document.querySelectorAll(".questions__question-and-answer__item"); //start by selecting all the block 
    } else if (document.querySelectorAll(".blog-article-min").length > 0) {
        scrollElements = document.querySelectorAll(".blog-article-min"); //start by selecting all the block 
    }

    function getWindowHeight() {
        windowHeight = window.innerHeight; //windowHeight gets the height of the viewport (innerHeight)
    }
    getWindowHeight();
    window.addEventListener('resize', getWindowHeight);


    function appearElement(arg) {
        //console.log(scrollElements)
        for (let i = 0; i < scrollElements.length; i++) {

            let elementTop = +scrollElements[i].getBoundingClientRect().top.toFixed(2); //calculates the distance from the top of the viewport to the top of the block

            if (arg > 0) {

                if (elementTop < windowHeight - elementVisibleBlog) {
                    scrollElements[i].classList.add("animateElementsOnScroll");
                } else {
                    scrollElements[i].classList.remove("animateElementsOnScroll");
                }
            } else {

                if (elementTop < windowHeight - elementVisible) {
                    scrollElements[i].classList.add("animateElementsOnScroll");
                } else {
                    scrollElements[i].classList.remove("animateElementsOnScroll");
                }
            }

        }

    }
    //appearElementReviews();
    //window.addEventListener("scroll", appearElementReviews);

    function smooth() {

        //We calculate our container position by linear interpolation method
        blockPosY = linear(blockPosY, scrPosY, speedAnim) //calculate forSmoothScrollWrapper position by linear interpolation method

        blockPosY = Math.floor(blockPosY * 100) / 100;


        forSmoothScrollWrapper.setAttribute('style', `transform: translate3d(0px, -${blockPosY}px, 0px)`);



        window.requestAnimationFrame(smooth);
        //animate element reviews.html and questions.html
        if (document.querySelectorAll(".reviews__wrapper-for-item__item").length > 0) {
            appearElement();

        } else if (document.querySelectorAll(".questions__question-and-answer__item").length > 0) {
            appearElement();
        } else if (document.querySelectorAll(".blog-article-min").length > 0) {
            appearElement(1);
        }

    }

    function linear(arg1, arg2, arg3) {
        return (1 - arg3) * arg1 + arg3 * arg2;
    }


}



//split txt
const h2 = document.querySelector('h2')


let stringH;
let arrayLettersH = [];

if (h2 != null) {
    if (h2.id == 'h2catalogMainPage') {
        let tmpAdaptiveH2;
        h2catalogMainPageAdaptive();
        window.addEventListener('resize', h2catalogMainPageAdaptive);

        function h2catalogMainPageAdaptive() {
            if (window.innerWidth > 580) {
                if (tmpAdaptiveH2 != 0) {
                    tmpAdaptiveH2 = 0;
                    //console.log('0')    
                    creatingWrappers(h2, 1, 0, 0, 0, 0, 0);
                }

            } else if (window.innerWidth <= 580) {
                if (tmpAdaptiveH2 != 1) {
                    tmpAdaptiveH2 = 1;
                    creatingWrappers(h2, 2, 2, 1, 0, 0, 0);
                }
            }
        }
    } else if (h2.id == 'h2articleOrVideo') {

    } else {
        creatingWrappers(h2, 1, 0, 0, 0, 0, 0);
    }
}




//arg1 = h1 or h2[i]
//arg2 = amount lines
//arg3 = amount words in 1 line
//arg4 = amount words in 2 line
//arg5 = amount words in 3 line


function creatingWrappers(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {

    //for adaptive
    //console.log(arg1);
    //console.log(arg1.childNodes.length);
    //console.log(arg1.childNodes[0]);
    //console.log(arg1.childNodes[0].nodeName)
    for (let item of arg1.childNodes) {
        //console.log(item)
    }
    if (arg1.childNodes[0].nodeName == 'DIV') { //checks if h2 is split into letters
        let tmpWord = arg1.querySelectorAll('.wrapperForWord'); //takes all the words
        let tmpArr = [];
        for (let i = 0; i < tmpWord.length; ++i) {
            let char = tmpWord[i].querySelectorAll('.wrapperSymbol'); //takes all characters in each word
            for (let y = 0; y < char.length; ++y) {
                //console.log(char[y].innerHTML)   
                tmpArr.push(char[y].innerHTML); //сhar puts into array
                if (y == (char.length - 1)) { //if the last character in a word, then it will add a space to the array
                    tmpArr.push(' ');
                }
                //console.log(tmpArr)
            }
        }
        arg1.innerHTML = ""; //will clear h2
        arg1.innerHTML = tmpArr.join(""); //the line cleared of wrappers will be added to h2
        //arg1.append(tmpArr.join(""));
    }
    /*if(arg1.childNodes[0].classList.contains('line')){
             console.log('rrrrrrrr')
    }*/

    stringH = arg1.innerHTML; //the content of the element (string) is put into a variable
    arg1.innerHTML = ''; //zeroing content to add wrappers with content
    arrayLettersH = [] //array zeroing ??? it seems to be reset to zero around line 209 ???
    for (let char of stringH) { //the string is split into characters and added to the array
        arrayLettersH.push(char);
    }

    let count = 1;
    for (let i = 0; i < arrayLettersH.length; ++i) { //count words in a line, relative to ' '
        if (arrayLettersH[i] == " ") {
            count++
        }
    }
    let lenghtArr = arrayLettersH.length;

    if (arg2 == 1) { //if you need to make a line in 1 line
        let line = document.createElement("div"); //creating a line and adding it to an element (H1 or H2)
        line.classList.add('line');
        arg1.append(line);
        for (let i = 0; i < count; ++i) {
            creatingWrappersWordsSymbols(line); //approximately on line 176
        }

    } else if (arg2 > 1) { //if you need to make a line in 2 lines or more
        for (let y = 0; y < arg2; ++y) { // y < arg2(3) = make 3 lines 
            let line = document.createElement("div"); //creating a line and adding it to an element (H1 or H2)
            line.classList.add('line');
            arg1.append(line);
            if (y == 0) { //1ST LINE SETTINGS 
                for (let i = 0; i < arg3; ++i) { //  i < arg3(2) =  2 words in line
                    creatingWrappersWordsSymbols(line); //approximately on line 176
                }
            } else if (y == 1) { //2ND LINE SETTINGS 
                for (let i = 0; i < arg4; ++i) { // //  i < arg4(3) =  3 words in line 
                    creatingWrappersWordsSymbols(line) //approximately on line 176
                }
            } else if (y == 2) { //3ND LINE SETTINGS 
                for (let i = 0; i < arg5; ++i) { // //  i < arg5(2) =  2 words in  line 
                    creatingWrappersWordsSymbols(line); //approximately on line 176
                }
            } else if (y == 3) { //4ND LINE SETTINGS 
                for (let i = 0; i < arg6; ++i) { // //  i < arg6(2) =  2 words in  line 
                    creatingWrappersWordsSymbols(line); //approximately on line 176
                }
            } else if (y == 4) { //5ND LINE SETTINGS 
                for (let i = 0; i < arg7; ++i) { // //  i < arg7(2) =  2 words in  line 
                    creatingWrappersWordsSymbols(line); //approximately on line 176
                }
            }

        }
    }

    function creatingWrappersWordsSymbols(arg1) {
        //by the term word and symbol, we mean a wrapper for a word and symbol
        let wrapperForWord = document.createElement("div"); //creation of a word
        wrapperForWord.classList.add('wrapperForWord');

        for (let y = 0; y < lenghtArr; ++y) {
            if (arrayLettersH[0] == " ") { //if it encounters " " - it will delete it
                arrayLettersH.splice(0, 1);
                break;
            } else if (arrayLettersH[0] == undefined) break; //if the array is over - stop
            let divForSymbol = document.createElement("div"); //creation of a symbol
            divForSymbol.classList.add('wrapperSymbol');
            divForSymbol.innerHTML = arrayLettersH[0]; //adding a symbol from an array to a wrapper(symbol)
            wrapperForWord.append(divForSymbol); //adding a symbol to a word
            arrayLettersH.splice(0, 1); //remove added character from array
        }

        arg1.append(wrapperForWord); //adding a word with symbols to the created line (the line was created at about 175 and 184)
    }
}

//h2 char prep for anim

if (h2 != null) {
    const h2line = h2.querySelectorAll('.line')
    h2line.forEach(line => {
        const h2Char = line.querySelectorAll('.wrapperSymbol')
        let tmpH2CharTransY = 0;
        for (let char of h2Char) { //will make a ladder
            char.style.transform = `translateY(${tmpH2CharTransY * 0.5}px)`;
            char.style.opacity = `0`;
            //console.log(char)
            tmpH2CharTransY += 10;
        }

        function appearH2chars() {
            for (let i = 0; i < h2Char.length; ++i) {

                if (h2Char.length > 10) {
                    setTimeout(() => {
                        h2Char[i].style.transform = `translateY(0px)`;
                        h2Char[i].style.opacity = `1`;
                    }, 30 * i);
                    //console.log('>10')
                } else {
                    setTimeout(() => {
                        h2Char[i].style.transform = `translateY(0px)`;
                        h2Char[i].style.opacity = `1`;
                    }, 60 * i);
                    //console.log('<10')
                }

            }
        }
        window.addEventListener('DOMContentLoaded', appearH2chars)

    })
    //console.log(h2Char);

}




/***/ }),

/***/ "./src/script/allScripts/buttonFormConsentCheck.js":
/*!*********************************************************!*\
  !*** ./src/script/allScripts/buttonFormConsentCheck.js ***!
  \*********************************************************/
/***/ (() => {

const consent = document.querySelectorAll('form .consent'); //take all elements with class .consent
const modalPoliticBtn = document.querySelector('.politic-agreement-button-close');
const consentCheckBox = document.querySelectorAll('.consent input[type="checkbox"]');

//there is a div with class concent. In consent there are 2 elements input and label
//the next element after the consent is the button element

for( let item of consent){                                   //collection enumeration
    item.nextElementSibling.addEventListener('click', (e) => { //add click event to each next item(button) from the collection
        
        if( !e.target.previousElementSibling.querySelector('input').checked ){ //if the label is not in the checked state
            e.preventDefault();                                       // then the button does not work
        }                                                             //This is necessary for the user to agree to the 
                                                                      //terms of personal data processing 
    });
};

modalPoliticBtn.addEventListener('click', () => {
        consentCheckBox.forEach( item => {
            item.setAttribute('checked', 'checked')
        } )
})




/***/ }),

/***/ "./src/script/allScripts/getScrollPercent.js":
/*!***************************************************!*\
  !*** ./src/script/allScripts/getScrollPercent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

let scrollPercent;
const body = document.querySelector('body');

if (body.classList.contains('scroll-container')) {//for card.html

    function getScrollPercent() {
        scrollPercent = +((window.scrollY / (document.querySelector('.scroll-container__scroll-content').offsetHeight - window.innerHeight) * 100).toFixed(2));
        //console.log(scrollPercent)
        if (scrollPercent > 50) {
            __webpack_require__.e(/*! import() | animateFooter */ "animateFooter").then(__webpack_require__.bind(__webpack_require__, /*! ./animateFooter.js */ "./src/script/allScripts/animateFooter.js")).then(module => {
                const footerVisibleScroll = module.footerVisibleScroll;
                footerVisibleScroll(scrollPercent);
            });
        }
    };
    window.addEventListener('scroll', getScrollPercent);

} else {                                        //for all
    function getScrollPercent() {
        scrollPercent = +((window.scrollY / (body.offsetHeight - window.innerHeight) * 100).toFixed(2));
        //console.log(scrollPercent)
        if (scrollPercent > 50) {
            __webpack_require__.e(/*! import() | animateFooter */ "animateFooter").then(__webpack_require__.bind(__webpack_require__, /*! ./animateFooter.js */ "./src/script/allScripts/animateFooter.js")).then(module => {
                const footerVisibleScroll = module.footerVisibleScroll;
                footerVisibleScroll(scrollPercent);
            });
        }
    };
    window.addEventListener('scroll', getScrollPercent);

    window.addEventListener('load', () => {
        if ((body.offsetHeight - window.innerHeight) == 0) {
            //console.log((document.querySelector('body').offsetHeight - window.innerHeight))
            __webpack_require__.e(/*! import() | animateFooter */ "animateFooter").then(__webpack_require__.bind(__webpack_require__, /*! ./animateFooter.js */ "./src/script/allScripts/animateFooter.js")).then(module => {
                const footerVisibleWithoutScroll = module.footerVisibleWithoutScroll;
                footerVisibleWithoutScroll();
            })
        }
    })


    window.addEventListener("resize", e => __webpack_require__.e(/*! import() | animateFooter */ "animateFooter").then(__webpack_require__.bind(__webpack_require__, /*! ./animateFooter.js */ "./src/script/allScripts/animateFooter.js")).then(module => {

        const footerVisibleWithoutScroll = module.footerVisibleWithoutScroll;
        footerVisibleWithoutScroll();
    }))
}

/***/ }),

/***/ "./src/script/lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js":
/*!**********************************************************************************************************!*\
  !*** ./src/script/lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allScripts_getScrollPercent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allScripts/getScrollPercent.js */ "./src/script/allScripts/getScrollPercent.js");
/* harmony import */ var _allScripts_getScrollPercent_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allScripts_getScrollPercent_js__WEBPACK_IMPORTED_MODULE_0__);
const widgetTrigger = document.querySelector(".widget__trigger");
widgetTrigger.onclick = e => __webpack_require__.e(/*! import() | widget */ "widget").then(__webpack_require__.bind(__webpack_require__, /*! ./allScripts/widget.js */ "./src/script/allScripts/widget.js")).then(module => {
    const openWidget = module.openWidget;
    openWidget();
});

const btnBurgerheader = document.querySelector(".header__nav__burger-wrapper-for-line");
btnBurgerheader.onclick = eventbtnBurgerheader => __webpack_require__.e(/*! import() | headerNavBurgerViewPortWidth1100px */ "headerNavBurgerViewPortWidth1100px").then(__webpack_require__.bind(__webpack_require__, /*! ./allScripts/headerNavBurgerViewPortWidth1100px.js */ "./src/script/allScripts/headerNavBurgerViewPortWidth1100px.js")).then(module => {
    const headerNavListDown = module.headerNavListDown;
    headerNavListDown(eventbtnBurgerheader);
});

const headerNavArrowsOpenList = document.querySelectorAll('.arrow-rigth-wrapper');
headerNavArrowsOpenList.forEach(arrow => {
    arrow.onclick = e => __webpack_require__.e(/*! import() | headerArrowOpenSubListViewPortWidth735px */ "headerArrowOpenSubListViewPortWidth735px").then(__webpack_require__.bind(__webpack_require__, /*! ./allScripts/headerArrowOpenSubListViewPortWidth735px.js */ "./src/script/allScripts/headerArrowOpenSubListViewPortWidth735px.js")).then(module => {
        const headerNavListOpenSubList = module.headerNavListOpenSubList;
        headerNavListOpenSubList(arrow);
    });
});

///////////////////modal/////////////////////////
const openModalItems = document.querySelectorAll('[data-forOpenModal]');
//console.log(openModalItems[0].getAttribute('data-forOpenModal'));
openModalItems.forEach(openModalItem => {
    openModalItem.addEventListener('click', e => __webpack_require__.e(/*! import() | modal */ "modal").then(__webpack_require__.bind(__webpack_require__, /*! ./allScripts/modal.js */ "./src/script/allScripts/modal.js")).then(module => {
        const openModal = module.openModal;
        for (let modalWindow of module.allModal) {
            if (openModalItem.getAttribute('data-forOpenModal') == modalWindow.id) {//if the opening element has a data-forOpenModal attribute that matches the modal window's id, then remove the 'hide' class from that modal window
                //console.log(modalWindow)
                openModal(module.modal, modalWindow);
            }
        }

    }))
});

///////////////////////////pass-eye///////////////////////////////
const eyes = document.querySelectorAll('.eye');
eyes.forEach(eye => {
    eye.onclick = eventEye => __webpack_require__.e(/*! import() | pass-eye */ "pass-eye").then(__webpack_require__.bind(__webpack_require__, /*! ./allScripts/pass-eye.js */ "./src/script/allScripts/pass-eye.js")).then(module => {
        const openCloseEye = module.openCloseEye;
        openCloseEye(eventEye);
    });
});
///////////////////////////PhoneMask////////////////////////
/*
const phoneMaskLoaderBtns = [openRegistr, openLogin, openCallback, widgetOpenModal];
phoneMaskLoaderBtns.forEach(loaderBtn => {

    if (loaderBtn.length != undefined) {
        loaderBtn.forEach(item => {
            item.addEventListener('click', e => import(  webpackChunkName: "PhoneMask"  './allScripts/PhoneMask.js').then(module => {
                const phoneMask = module.phoneMask;
                phoneMask();
            }));
        })
    } else {
        loaderBtn.addEventListener('click', e => import(  webpackChunkName: "PhoneMask"  './allScripts/PhoneMask.js').then(module => {
            const phoneMask = module.phoneMask;
            phoneMask();
        }));
    }


});*/
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(phoneInput => {
    phoneInput.onfocus = e => __webpack_require__.e(/*! import() | PhoneMask */ "PhoneMask").then(__webpack_require__.bind(__webpack_require__, /*! ./allScripts/PhoneMask.js */ "./src/script/allScripts/PhoneMask.js")).then(module => {
        const phoneMask = module.phoneMask;
        phoneMask();
    });
});
///////////////////////OTP-Input-field(sms)////////////////////////////////
const openCodeFromSms = document.querySelector('#GoToCodeFromSms');
openCodeFromSms.onfocus = e => __webpack_require__.e(/*! import() | OTP-Input-field(sms) */ "OTP-Input-field(sms)").then(__webpack_require__.t.bind(__webpack_require__, /*! ./allScripts/OTP-Input-field(sms).js */ "./src/script/allScripts/OTP-Input-field(sms).js", 23)).then(module => {

});

/////////////////////////////////textareaGrow.js////////////////////////////////////////////////
const askAQuestionTextArea = document.querySelector('#ask-a-question__question');
askAQuestionTextArea.onfocus = e => __webpack_require__.e(/*! import() | textareaGrow */ "textareaGrow").then(__webpack_require__.t.bind(__webpack_require__, /*! ./allScripts/textareaGrow.js */ "./src/script/allScripts/textareaGrow.js", 23)).then(module => {

});

/////////////////////////////animateFooter///////////////////////////////////////


/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/normalize.css":
/*!*********************************!*\
  !*** ./src/style/normalize.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/placingAnOrder.scss":
/*!***************************************!*\
  !*** ./src/style/placingAnOrder.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/swiper-bundle.min.css":
/*!*****************************************!*\
  !*** ./src/style/swiper-bundle.min.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "livebacteria.local:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"placingAnOrder": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./src/script/placingAnOrder.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/normalize.css */ "./src/style/normalize.css");
/* harmony import */ var _style_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/swiper-bundle.min.css */ "./src/style/swiper-bundle.min.css");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _style_placingAnOrder_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/placingAnOrder.scss */ "./src/style/placingAnOrder.scss");
/* harmony import */ var _allScripts_animateHeaderSecondaryNav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allScripts/animateHeaderSecondaryNav.js */ "./src/script/allScripts/animateHeaderSecondaryNav.js");
/* harmony import */ var _allScripts_animateHeaderSecondaryNav_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_allScripts_animateHeaderSecondaryNav_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _allScripts_animation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allScripts/animation.js */ "./src/script/allScripts/animation.js");
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allScripts/buttonFormConsentCheck.js */ "./src/script/allScripts/buttonFormConsentCheck.js");
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lazyWidgetHeaderBurgerArrowsOpenListModalPass_eyePMaskSmsTextareaGrowAnimateFooter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js */ "./src/script/lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js");






//////////////////////////secondaryNavArrowLinks580.js//////////////////////////
if (window.innerWidth <= 580) {
    document.addEventListener("DOMContentLoaded", e => __webpack_require__.e(/*! import() | secondaryNavArrowLinks580 */ "secondaryNavArrowLinks580").then(__webpack_require__.bind(__webpack_require__, /*! ./allScripts/secondaryNavArrowLinks580.js */ "./src/script/allScripts/secondaryNavArrowLinks580.js")).then(module => {
        const goToPreviousPage = module.goToPreviousPage;
        goToPreviousPage();
    }))

}
window.addEventListener("resize", e => __webpack_require__.e(/*! import() | secondaryNavArrowLinks580 */ "secondaryNavArrowLinks580").then(__webpack_require__.bind(__webpack_require__, /*! ./allScripts/secondaryNavArrowLinks580.js */ "./src/script/allScripts/secondaryNavArrowLinks580.js")).then(module => {
        const goToPreviousPage = module.goToPreviousPage;
        goToPreviousPage();
    }))
//////////////////////////////////////////////////////////////////////////////
//import './allScripts/radioPerson.js';
/////////////////////////////////radioPerson.js///////////////////////////////////////////
const radioPerson = document.querySelectorAll('.fieldset__item input[type="radio"]');
radioPerson.forEach( item => {
    item.addEventListener('change', e => __webpack_require__.e(/*! import() | radioPerson */ "radioPerson").then(__webpack_require__.bind(__webpack_require__, /*! ./allScripts/radioPerson.js */ "./src/script/allScripts/radioPerson.js")).then(module => {
        const switching = module.switching;
        switching(item);
    }))
})
///////////////////////////////////////////////////////////////////////////////////////////////////
;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2luZ0FuT3JkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ08sdUJBQXVCO0FBQzlCO0FBQ0Esd0RBQXdELDJCQUEyQixLQUFLO0FBQ3hGO0FBQ0E7QUFDQSx3REFBd0QsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQSxNQUFNO0FBQ04sNkZBQTZGO0FBQzdGLE1BQU07QUFDTix5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixVQUFVO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELGdFQUFnRTtBQUNoRTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUMsc0VBQXNFO0FBQ3RFLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQSxnREFBZ0Q7QUFDaEQsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOEJBQThCO0FBQzlCLHlCQUF5QjtBQUN6QjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEIsT0FBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQyxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLE1BQU0scUJBQXFCO0FBQzNCLHdCQUF3QixVQUFVLE9BQU87QUFDekMsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsZ0NBQWdDLFVBQVUsT0FBTztBQUNqRCx3REFBd0Q7QUFDeEQ7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQyxnQ0FBZ0MsVUFBVSxPQUFPO0FBQ2pEO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQyxnQ0FBZ0MsVUFBVSxPQUFPO0FBQ2pELHdEQUF3RDtBQUN4RDtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDLGdDQUFnQyxVQUFVLE9BQU87QUFDakQsd0RBQXdEO0FBQ3hEO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakMsZ0NBQWdDLFVBQVUsT0FBTztBQUNqRCx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkMsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxjQUFjLCtDQUErQztBQUM3RCw4REFBOEQ7QUFDOUQ7QUFDQSx1REFBdUQ7QUFDdkQsaURBQWlEO0FBQ2pELHdDQUF3QztBQUN4QztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLGlEQUFpRCxzQkFBc0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9UQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdELCtEQUErRDtBQUMvRDtBQUNBLCtFQUErRTtBQUMvRSxzRUFBc0U7QUFDdEUsc0VBQXNFO0FBQ3RFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnTUFBcUU7QUFDakY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOENBQThDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnTUFBcUU7QUFDakY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ01BQXFFO0FBQ2pGO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJDQUEyQyxnTUFBcUU7QUFDaEg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEM7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0EsNkJBQTZCLCtLQUFrRTtBQUMvRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrREFBa0QsK1JBQTBIO0FBQzVLO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVUQUFzSTtBQUMvSjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDJLQUFnRTtBQUNqSDtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVMQUFzRTtBQUNwRztBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0EsOEJBQThCLDJMQUF3RTtBQUN0RztBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0EsK0JBQStCLDZPQUE4RjtBQUM3SDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNk1BQThFO0FBQ2xIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRkE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0RBQXNEO1dBQ3RELHNDQUFzQyxtR0FBbUc7V0FDekk7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRixFOzs7OztXQ1JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHVCQUF1Qiw0QkFBNEI7V0FDbkQ7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLG9CQUFvQjtXQUNyQztXQUNBLG1HQUFtRyxZQUFZO1dBQy9HO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3pDQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRmdDO0FBQ1E7QUFDWjtBQUNVO0FBQ2E7QUFDaEI7QUFDbkM7QUFDQTtBQUNBLHVEQUF1RCwyUEFBd0c7QUFDL0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUNBQXVDLDJQQUF3RztBQUMvSTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbU1BQTRFO0FBQ3JIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsQ0FBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYW5pbWF0ZUhlYWRlclNlY29uZGFyeU5hdi5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9idXR0b25Gb3JtQ29uc2VudENoZWNrLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9nZXRTY3JvbGxQZXJjZW50LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvbGF6eVdpZGdldEhlYWRlckJ1cmdlckFycm93c09wZW5MaXN0TW9kYWxQYXNzLWV5ZVBNYXNrU21zVGV4dGFyZWFHcm93QW5pbWF0ZUZvb3Rlci5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc3R5bGUvbWFpbi5zY3NzPzc3NDUiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3N0eWxlL25vcm1hbGl6ZS5jc3M/NTNmYSIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc3R5bGUvcGxhY2luZ0FuT3JkZXIuc2Nzcz9hYjUzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zdHlsZS9zd2lwZXItYnVuZGxlLm1pbi5jc3M/YTMzYiIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvcGxhY2luZ0FuT3JkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcbmNvbnN0IHNlY29uZE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRhcnktbmF2Jyk7XHJcblxyXG5jb25zdCBpbmRleE9mZmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGV4LW9mZmVyJyk7XHJcbmNvbnN0IGNhdGFsb2dNYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nTWFpblBhZ2UnKTtcclxuY29uc3QgY2F0YWxvZ0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ0NhdGVnb3JpZXMnKTtcclxuXHJcbmlmKGluZGV4T2ZmZXIgIT0gbnVsbCB8fCBjYXRhbG9nTWFpblBhZ2UgIT0gbnVsbCB8fCBjYXRhbG9nQ2F0ZWdvcmllcyAhPSBudWxsKXtcclxuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFwcGVhckhlYWRlclNlY29uZE5hdilcclxufWVsc2V7XHJcbiAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhcHBlYXJIZWFkZXJTZWNvbmROYXYpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhcHBlYXJIZWFkZXJTZWNvbmROYXYoKSB7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnYXBwZWFySGVhZGVyJyk7XHJcbiAgICBpZihzZWNvbmROYXYgIT0gbnVsbCl7XHJcbiAgICAgICAgc2Vjb25kTmF2LmNsYXNzTGlzdC5hZGQoJ2FwcGVhclNlY29uZGFyeS1uYXYnKTsgXHJcbiAgICB9XHJcbn07XHJcbiIsIi8vY2F0YWxvZ01haW5QYWdlIGNvbnRhY3RzIGRpcmVjdG9yeSBmb3JQYXJ0bmVycyBob3dUb0J1eSBwbGFjaW5nQW5PcmRlciBxdWVzdGlvbnMgYWNjb3VudFxyXG4vL2FydGljbGUgYmxvZyBjYXRhbG9nQ2F0ZWdvcmllcyByZXZpZXdzXHJcbi8vc21vb3RoIHNjcm9sbFxyXG5leHBvcnQgY29uc3QgYm9keWZvclNtb290aFNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvclNtb290aFNjcm9sbF9fd3JhcHBlcicpO1xyXG4vL2xldCBoZWlnaHRGb3JTY3JvbGwgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmb3JTbW9vdGhTY3JvbGxXcmFwcGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XHJcblxyXG5sZXQgaGVpZ2h0Rm9yU2Nyb2xsO1xyXG5leHBvcnQgZnVuY3Rpb24gYWxpZ25Cb2R5KCkgeyAvLyBzY3JpcHQvcmFkaW9QZXJzb24gIC8gIHNjcmlwdC9jYXRlZ29yaWVzUmFkaW8gLyBzY3JpcHQvcXVlc3Rpb25zXHJcbiAgICAvKmhlaWdodEZvclNjcm9sbCA9IGZvclNtb290aFNjcm9sbFdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgYm9keWZvclNtb290aFNjcm9sbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoke2hlaWdodEZvclNjcm9sbC50b0ZpeGVkKDIpfXB4YCk7Ki9cclxuICAgIGhlaWdodEZvclNjcm9sbCA9IGZvclNtb290aFNjcm9sbFdyYXBwZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgLy9jb25zb2xlLmxvZyhoZWlnaHRGb3JTY3JvbGwpXHJcbiAgICBib2R5Zm9yU21vb3RoU2Nyb2xsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OiR7aGVpZ2h0Rm9yU2Nyb2xsfXB4YCk7XHJcblxyXG59O1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JTbW9vdGhTY3JvbGwnKSkge1xyXG5cclxuXHJcbiAgICAvL2dpdmVzIHRoZSBoZWlnaHQgb2YgdGhlIGJvZHkgc28gdGhhdCBzY3JvbGxpbmcgb2NjdXJzXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFsaWduQm9keSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFsaWduQm9keSk7XHJcblxyXG4gICAgbGV0IHNjclBvc1kgPSAwOyAvL2ZvciBzY3JvbGwgcG9zaXRpb25zXHJcbiAgICBsZXQgYmxvY2tQb3NZID0gc2NyUG9zWTsgLy8gZm9yIGZvclNtb290aFNjcm9sbFdyYXBwZXIgcG9zaXRpb25cclxuICAgIGxldCBzcGVlZEFuaW0gPSAwLjAzOyAvL2lmIHNwZWVkQW5pbSA+IDAuMDcgKDAuMSkgYW5pbWF0aW9uIGhhcHBlbnMgZmFzdGVyXHJcbiAgICAvL2lmIHNwZWVkQW5pbSA8IDAuMDcgKDAuMDIpIGFuaW1hdGlvbiBpcyBzbG93ZXJcclxuXHJcblxyXG4gICAgLy8gQmluZCBhIHNjcm9sbCBmdW5jdGlvblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGdldHNTY3JvbGxWYWx1ZSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldHNTY3JvbGxWYWx1ZSgpIHtcclxuICAgICAgICBzY3JQb3NZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2NyUG9zWSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoKTtcclxuXHJcbiAgICAvL2FuaW1hdGUgZWxlbWVudCByZXZpZXdzLmh0bWwsIHF1ZXN0aW9ucy5odG1sIGFuZCBibG9nLmh0bWxcclxuXHJcbiAgICBsZXQgd2luZG93SGVpZ2h0O1xyXG4gICAgY29uc3QgZWxlbWVudFZpc2libGUgPSAxOyAvL2FuaW1hdGlvbiB3aWxsIHN0YXJ0IHdoZW4gdGhlIGJsb2NrIGlzIDE1MHB4IGF3YXkgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydC5cclxuICAgIGNvbnN0IGVsZW1lbnRWaXNpYmxlQmxvZyA9IDMwOyAvL2FuaW1hdGlvbiB3aWxsIHN0YXJ0IHdoZW4gdGhlIGJsb2NrIGlzIDE1MHB4IGF3YXkgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydC5cclxuICAgIGxldCBzY3JvbGxFbGVtZW50cztcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzX193cmFwcGVyLWZvci1pdGVtX19pdGVtXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrXHJcblxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKTsgLy9zdGFydCBieSBzZWxlY3RpbmcgYWxsIHRoZSBibG9jayBcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWFydGljbGUtbWluXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKTsgLy9zdGFydCBieSBzZWxlY3RpbmcgYWxsIHRoZSBibG9jayBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3dIZWlnaHQoKSB7XHJcbiAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyAvL3dpbmRvd0hlaWdodCBnZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0IChpbm5lckhlaWdodClcclxuICAgIH1cclxuICAgIGdldFdpbmRvd0hlaWdodCgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldFdpbmRvd0hlaWdodCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGVhckVsZW1lbnQoYXJnKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JvbGxFbGVtZW50cylcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvcCA9ICtzY3JvbGxFbGVtZW50c1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AudG9GaXhlZCgyKTsgLy9jYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0IHRvIHRoZSB0b3Agb2YgdGhlIGJsb2NrXHJcblxyXG4gICAgICAgICAgICBpZiAoYXJnID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50VG9wIDwgd2luZG93SGVpZ2h0IC0gZWxlbWVudFZpc2libGVCbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudHNbaV0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVFbGVtZW50c09uU2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxFbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZUVsZW1lbnRzT25TY3JvbGxcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRUb3AgPCB3aW5kb3dIZWlnaHQgLSBlbGVtZW50VmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVFbGVtZW50c09uU2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvL2FwcGVhckVsZW1lbnRSZXZpZXdzKCk7XHJcbiAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGFwcGVhckVsZW1lbnRSZXZpZXdzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzbW9vdGgoKSB7XHJcblxyXG4gICAgICAgIC8vV2UgY2FsY3VsYXRlIG91ciBjb250YWluZXIgcG9zaXRpb24gYnkgbGluZWFyIGludGVycG9sYXRpb24gbWV0aG9kXHJcbiAgICAgICAgYmxvY2tQb3NZID0gbGluZWFyKGJsb2NrUG9zWSwgc2NyUG9zWSwgc3BlZWRBbmltKSAvL2NhbGN1bGF0ZSBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyIHBvc2l0aW9uIGJ5IGxpbmVhciBpbnRlcnBvbGF0aW9uIG1ldGhvZFxyXG5cclxuICAgICAgICBibG9ja1Bvc1kgPSBNYXRoLmZsb29yKGJsb2NrUG9zWSAqIDEwMCkgLyAxMDA7XHJcblxyXG5cclxuICAgICAgICBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC0ke2Jsb2NrUG9zWX1weCwgMHB4KWApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoKTtcclxuICAgICAgICAvL2FuaW1hdGUgZWxlbWVudCByZXZpZXdzLmh0bWwgYW5kIHF1ZXN0aW9ucy5odG1sXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaW5lYXIoYXJnMSwgYXJnMiwgYXJnMykge1xyXG4gICAgICAgIHJldHVybiAoMSAtIGFyZzMpICogYXJnMSArIGFyZzMgKiBhcmcyO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLy9zcGxpdCB0eHRcclxuY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpXHJcblxyXG5cclxubGV0IHN0cmluZ0g7XHJcbmxldCBhcnJheUxldHRlcnNIID0gW107XHJcblxyXG5pZiAoaDIgIT0gbnVsbCkge1xyXG4gICAgaWYgKGgyLmlkID09ICdoMmNhdGFsb2dNYWluUGFnZScpIHtcclxuICAgICAgICBsZXQgdG1wQWRhcHRpdmVIMjtcclxuICAgICAgICBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1ODApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0bXBBZGFwdGl2ZUgyICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBBZGFwdGl2ZUgyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCcwJykgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU4MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcEFkYXB0aXZlSDIgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFkYXB0aXZlSDIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDIsIDIsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChoMi5pZCA9PSAnaDJhcnRpY2xlT3JWaWRlbycpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vL2FyZzEgPSBoMSBvciBoMltpXVxyXG4vL2FyZzIgPSBhbW91bnQgbGluZXNcclxuLy9hcmczID0gYW1vdW50IHdvcmRzIGluIDEgbGluZVxyXG4vL2FyZzQgPSBhbW91bnQgd29yZHMgaW4gMiBsaW5lXHJcbi8vYXJnNSA9IGFtb3VudCB3b3JkcyBpbiAzIGxpbmVcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGluZ1dyYXBwZXJzKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUsIGFyZzYsIGFyZzcpIHtcclxuXHJcbiAgICAvL2ZvciBhZGFwdGl2ZVxyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSlcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJnMS5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgfVxyXG4gICAgaWYgKGFyZzEuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PSAnRElWJykgeyAvL2NoZWNrcyBpZiBoMiBpcyBzcGxpdCBpbnRvIGxldHRlcnNcclxuICAgICAgICBsZXQgdG1wV29yZCA9IGFyZzEucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJGb3JXb3JkJyk7IC8vdGFrZXMgYWxsIHRoZSB3b3Jkc1xyXG4gICAgICAgIGxldCB0bXBBcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRtcFdvcmQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0bXBXb3JkW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyU3ltYm9sJyk7IC8vdGFrZXMgYWxsIGNoYXJhY3RlcnMgaW4gZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2hhci5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFyW3ldLmlubmVySFRNTCkgICBcclxuICAgICAgICAgICAgICAgIHRtcEFyci5wdXNoKGNoYXJbeV0uaW5uZXJIVE1MKTsgLy/RgWhhciBwdXRzIGludG8gYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmICh5ID09IChjaGFyLmxlbmd0aCAtIDEpKSB7IC8vaWYgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgd29yZCwgdGhlbiBpdCB3aWxsIGFkZCBhIHNwYWNlIHRvIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFyci5wdXNoKCcgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRtcEFycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmcxLmlubmVySFRNTCA9IFwiXCI7IC8vd2lsbCBjbGVhciBoMlxyXG4gICAgICAgIGFyZzEuaW5uZXJIVE1MID0gdG1wQXJyLmpvaW4oXCJcIik7IC8vdGhlIGxpbmUgY2xlYXJlZCBvZiB3cmFwcGVycyB3aWxsIGJlIGFkZGVkIHRvIGgyXHJcbiAgICAgICAgLy9hcmcxLmFwcGVuZCh0bXBBcnIuam9pbihcIlwiKSk7XHJcbiAgICB9XHJcbiAgICAvKmlmKGFyZzEuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmUnKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygncnJycnJycnInKVxyXG4gICAgfSovXHJcblxyXG4gICAgc3RyaW5nSCA9IGFyZzEuaW5uZXJIVE1MOyAvL3RoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IChzdHJpbmcpIGlzIHB1dCBpbnRvIGEgdmFyaWFibGVcclxuICAgIGFyZzEuaW5uZXJIVE1MID0gJyc7IC8vemVyb2luZyBjb250ZW50IHRvIGFkZCB3cmFwcGVycyB3aXRoIGNvbnRlbnRcclxuICAgIGFycmF5TGV0dGVyc0ggPSBbXSAvL2FycmF5IHplcm9pbmcgPz8/IGl0IHNlZW1zIHRvIGJlIHJlc2V0IHRvIHplcm8gYXJvdW5kIGxpbmUgMjA5ID8/P1xyXG4gICAgZm9yIChsZXQgY2hhciBvZiBzdHJpbmdIKSB7IC8vdGhlIHN0cmluZyBpcyBzcGxpdCBpbnRvIGNoYXJhY3RlcnMgYW5kIGFkZGVkIHRvIHRoZSBhcnJheVxyXG4gICAgICAgIGFycmF5TGV0dGVyc0gucHVzaChjaGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxldHRlcnNILmxlbmd0aDsgKytpKSB7IC8vY291bnQgd29yZHMgaW4gYSBsaW5lLCByZWxhdGl2ZSB0byAnICdcclxuICAgICAgICBpZiAoYXJyYXlMZXR0ZXJzSFtpXSA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGxlbmdodEFyciA9IGFycmF5TGV0dGVyc0gubGVuZ3RoO1xyXG5cclxuICAgIGlmIChhcmcyID09IDEpIHsgLy9pZiB5b3UgbmVlZCB0byBtYWtlIGEgbGluZSBpbiAxIGxpbmVcclxuICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpbmcgYSBsaW5lIGFuZCBhZGRpbmcgaXQgdG8gYW4gZWxlbWVudCAoSDEgb3IgSDIpXHJcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgYXJnMS5hcHBlbmQobGluZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKGFyZzIgPiAxKSB7IC8vaWYgeW91IG5lZWQgdG8gbWFrZSBhIGxpbmUgaW4gMiBsaW5lcyBvciBtb3JlXHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBhcmcyOyArK3kpIHsgLy8geSA8IGFyZzIoMykgPSBtYWtlIDMgbGluZXMgXHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGluZyBhIGxpbmUgYW5kIGFkZGluZyBpdCB0byBhbiBlbGVtZW50IChIMSBvciBIMilcclxuICAgICAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgICAgIGFyZzEuYXBwZW5kKGxpbmUpO1xyXG4gICAgICAgICAgICBpZiAoeSA9PSAwKSB7IC8vMVNUIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzM7ICsraSkgeyAvLyAgaSA8IGFyZzMoMikgPSAgMiB3b3JkcyBpbiBsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAxKSB7IC8vMk5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzQ7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzQoMykgPSAgMyB3b3JkcyBpbiBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSkgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAyKSB7IC8vM05EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzU7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzUoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDMpIHsgLy80TkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNjsgKytpKSB7IC8vIC8vICBpIDwgYXJnNigyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gNCkgeyAvLzVORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc3OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc3KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMoYXJnMSkge1xyXG4gICAgICAgIC8vYnkgdGhlIHRlcm0gd29yZCBhbmQgc3ltYm9sLCB3ZSBtZWFuIGEgd3JhcHBlciBmb3IgYSB3b3JkIGFuZCBzeW1ib2xcclxuICAgICAgICBsZXQgd3JhcHBlckZvcldvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW9uIG9mIGEgd29yZFxyXG4gICAgICAgIHdyYXBwZXJGb3JXb3JkLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXJGb3JXb3JkJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuZ2h0QXJyOyArK3kpIHtcclxuICAgICAgICAgICAgaWYgKGFycmF5TGV0dGVyc0hbMF0gPT0gXCIgXCIpIHsgLy9pZiBpdCBlbmNvdW50ZXJzIFwiIFwiIC0gaXQgd2lsbCBkZWxldGUgaXRcclxuICAgICAgICAgICAgICAgIGFycmF5TGV0dGVyc0guc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyYXlMZXR0ZXJzSFswXSA9PSB1bmRlZmluZWQpIGJyZWFrOyAvL2lmIHRoZSBhcnJheSBpcyBvdmVyIC0gc3RvcFxyXG4gICAgICAgICAgICBsZXQgZGl2Rm9yU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGlvbiBvZiBhIHN5bWJvbFxyXG4gICAgICAgICAgICBkaXZGb3JTeW1ib2wuY2xhc3NMaXN0LmFkZCgnd3JhcHBlclN5bWJvbCcpO1xyXG4gICAgICAgICAgICBkaXZGb3JTeW1ib2wuaW5uZXJIVE1MID0gYXJyYXlMZXR0ZXJzSFswXTsgLy9hZGRpbmcgYSBzeW1ib2wgZnJvbSBhbiBhcnJheSB0byBhIHdyYXBwZXIoc3ltYm9sKVxyXG4gICAgICAgICAgICB3cmFwcGVyRm9yV29yZC5hcHBlbmQoZGl2Rm9yU3ltYm9sKTsgLy9hZGRpbmcgYSBzeW1ib2wgdG8gYSB3b3JkXHJcbiAgICAgICAgICAgIGFycmF5TGV0dGVyc0guc3BsaWNlKDAsIDEpOyAvL3JlbW92ZSBhZGRlZCBjaGFyYWN0ZXIgZnJvbSBhcnJheVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJnMS5hcHBlbmQod3JhcHBlckZvcldvcmQpOyAvL2FkZGluZyBhIHdvcmQgd2l0aCBzeW1ib2xzIHRvIHRoZSBjcmVhdGVkIGxpbmUgKHRoZSBsaW5lIHdhcyBjcmVhdGVkIGF0IGFib3V0IDE3NSBhbmQgMTg0KVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2gyIGNoYXIgcHJlcCBmb3IgYW5pbVxyXG5cclxuaWYgKGgyICE9IG51bGwpIHtcclxuICAgIGNvbnN0IGgybGluZSA9IGgyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5lJylcclxuICAgIGgybGluZS5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGgyQ2hhciA9IGxpbmUucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJTeW1ib2wnKVxyXG4gICAgICAgIGxldCB0bXBIMkNoYXJUcmFuc1kgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNoYXIgb2YgaDJDaGFyKSB7IC8vd2lsbCBtYWtlIGEgbGFkZGVyXHJcbiAgICAgICAgICAgIGNoYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0bXBIMkNoYXJUcmFuc1kgKiAwLjV9cHgpYDtcclxuICAgICAgICAgICAgY2hhci5zdHlsZS5vcGFjaXR5ID0gYDBgO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXIpXHJcbiAgICAgICAgICAgIHRtcEgyQ2hhclRyYW5zWSArPSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFwcGVhckgyY2hhcnMoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaDJDaGFyLmxlbmd0aDsgKytpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGgyQ2hhci5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMkNoYXJbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoMHB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyQ2hhcltpXS5zdHlsZS5vcGFjaXR5ID0gYDFgO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwICogaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnPjEwJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyQ2hhcltpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgwcHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDJDaGFyW2ldLnN0eWxlLm9wYWNpdHkgPSBgMWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNjAgKiBpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc8MTAnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFwcGVhckgyY2hhcnMpXHJcblxyXG4gICAgfSlcclxuICAgIC8vY29uc29sZS5sb2coaDJDaGFyKTtcclxuXHJcbn1cclxuXHJcblxyXG4iLCJjb25zdCBjb25zZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSAuY29uc2VudCcpOyAvL3Rha2UgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3MgLmNvbnNlbnRcclxuY29uc3QgbW9kYWxQb2xpdGljQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvbGl0aWMtYWdyZWVtZW50LWJ1dHRvbi1jbG9zZScpO1xyXG5jb25zdCBjb25zZW50Q2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29uc2VudCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuXHJcbi8vdGhlcmUgaXMgYSBkaXYgd2l0aCBjbGFzcyBjb25jZW50LiBJbiBjb25zZW50IHRoZXJlIGFyZSAyIGVsZW1lbnRzIGlucHV0IGFuZCBsYWJlbFxyXG4vL3RoZSBuZXh0IGVsZW1lbnQgYWZ0ZXIgdGhlIGNvbnNlbnQgaXMgdGhlIGJ1dHRvbiBlbGVtZW50XHJcblxyXG5mb3IoIGxldCBpdGVtIG9mIGNvbnNlbnQpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb2xsZWN0aW9uIGVudW1lcmF0aW9uXHJcbiAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IC8vYWRkIGNsaWNrIGV2ZW50IHRvIGVhY2ggbmV4dCBpdGVtKGJ1dHRvbikgZnJvbSB0aGUgY29sbGVjdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCAhZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgKXsgLy9pZiB0aGUgbGFiZWwgaXMgbm90IGluIHRoZSBjaGVja2VkIHN0YXRlXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIHRoZSBidXR0b24gZG9lcyBub3Qgd29ya1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UaGlzIGlzIG5lY2Vzc2FyeSBmb3IgdGhlIHVzZXIgdG8gYWdyZWUgdG8gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90ZXJtcyBvZiBwZXJzb25hbCBkYXRhIHByb2Nlc3NpbmcgXHJcbiAgICB9KTtcclxufTtcclxuXHJcbm1vZGFsUG9saXRpY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zZW50Q2hlY2tCb3guZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxyXG4gICAgICAgIH0gKVxyXG59KVxyXG5cclxuXHJcbiIsImxldCBzY3JvbGxQZXJjZW50O1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuaWYgKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzY3JvbGwtY29udGFpbmVyJykpIHsvL2ZvciBjYXJkLmh0bWxcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxQZXJjZW50KCkge1xyXG4gICAgICAgIHNjcm9sbFBlcmNlbnQgPSArKCh3aW5kb3cuc2Nyb2xsWSAvIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLWNvbnRhaW5lcl9fc2Nyb2xsLWNvbnRlbnQnKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpICogMTAwKS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNjcm9sbFBlcmNlbnQpXHJcbiAgICAgICAgaWYgKHNjcm9sbFBlcmNlbnQgPiA1MCkge1xyXG4gICAgICAgICAgICBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYW5pbWF0ZUZvb3RlclwiICovICcuL2FuaW1hdGVGb290ZXIuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJWaXNpYmxlU2Nyb2xsID0gbW9kdWxlLmZvb3RlclZpc2libGVTY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBmb290ZXJWaXNpYmxlU2Nyb2xsKHNjcm9sbFBlcmNlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGdldFNjcm9sbFBlcmNlbnQpO1xyXG5cclxufSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3IgYWxsXHJcbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxQZXJjZW50KCkge1xyXG4gICAgICAgIHNjcm9sbFBlcmNlbnQgPSArKCh3aW5kb3cuc2Nyb2xsWSAvIChib2R5Lm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDApLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2Nyb2xsUGVyY2VudClcclxuICAgICAgICBpZiAoc2Nyb2xsUGVyY2VudCA+IDUwKSB7XHJcbiAgICAgICAgICAgIGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJhbmltYXRlRm9vdGVyXCIgKi8gJy4vYW5pbWF0ZUZvb3Rlci5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3RlclZpc2libGVTY3JvbGwgPSBtb2R1bGUuZm9vdGVyVmlzaWJsZVNjcm9sbDtcclxuICAgICAgICAgICAgICAgIGZvb3RlclZpc2libGVTY3JvbGwoc2Nyb2xsUGVyY2VudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZ2V0U2Nyb2xsUGVyY2VudCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKChib2R5Lm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPT0gMCkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSlcclxuICAgICAgICAgICAgaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFuaW1hdGVGb290ZXJcIiAqLyAnLi9hbmltYXRlRm9vdGVyLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9vdGVyVmlzaWJsZVdpdGhvdXRTY3JvbGwgPSBtb2R1bGUuZm9vdGVyVmlzaWJsZVdpdGhvdXRTY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBmb290ZXJWaXNpYmxlV2l0aG91dFNjcm9sbCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFuaW1hdGVGb290ZXJcIiAqLyAnLi9hbmltYXRlRm9vdGVyLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBmb290ZXJWaXNpYmxlV2l0aG91dFNjcm9sbCA9IG1vZHVsZS5mb290ZXJWaXNpYmxlV2l0aG91dFNjcm9sbDtcclxuICAgICAgICBmb290ZXJWaXNpYmxlV2l0aG91dFNjcm9sbCgpO1xyXG4gICAgfSkpXHJcbn0iLCJjb25zdCB3aWRnZXRUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aWRnZXRfX3RyaWdnZXJcIik7XHJcbndpZGdldFRyaWdnZXIub25jbGljayA9IGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIndpZGdldFwiICovICcuL2FsbFNjcmlwdHMvd2lkZ2V0LmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgY29uc3Qgb3BlbldpZGdldCA9IG1vZHVsZS5vcGVuV2lkZ2V0O1xyXG4gICAgb3BlbldpZGdldCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IGJ0bkJ1cmdlcmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19uYXZfX2J1cmdlci13cmFwcGVyLWZvci1saW5lXCIpO1xyXG5idG5CdXJnZXJoZWFkZXIub25jbGljayA9IGV2ZW50YnRuQnVyZ2VyaGVhZGVyID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJoZWFkZXJOYXZCdXJnZXJWaWV3UG9ydFdpZHRoMTEwMHB4XCIgKi8gJy4vYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJWaWV3UG9ydFdpZHRoMTEwMHB4LmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyTmF2TGlzdERvd24gPSBtb2R1bGUuaGVhZGVyTmF2TGlzdERvd247XHJcbiAgICBoZWFkZXJOYXZMaXN0RG93bihldmVudGJ0bkJ1cmdlcmhlYWRlcik7XHJcbn0pO1xyXG5cclxuY29uc3QgaGVhZGVyTmF2QXJyb3dzT3Blbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3ctcmlndGgtd3JhcHBlcicpO1xyXG5oZWFkZXJOYXZBcnJvd3NPcGVuTGlzdC5mb3JFYWNoKGFycm93ID0+IHtcclxuICAgIGFycm93Lm9uY2xpY2sgPSBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJoZWFkZXJBcnJvd09wZW5TdWJMaXN0Vmlld1BvcnRXaWR0aDczNXB4XCIgKi8gJy4vYWxsU2NyaXB0cy9oZWFkZXJBcnJvd09wZW5TdWJMaXN0Vmlld1BvcnRXaWR0aDczNXB4LmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlck5hdkxpc3RPcGVuU3ViTGlzdCA9IG1vZHVsZS5oZWFkZXJOYXZMaXN0T3BlblN1Ykxpc3Q7XHJcbiAgICAgICAgaGVhZGVyTmF2TGlzdE9wZW5TdWJMaXN0KGFycm93KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9tb2RhbC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3Qgb3Blbk1vZGFsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mb3JPcGVuTW9kYWxdJyk7XHJcbi8vY29uc29sZS5sb2cob3Blbk1vZGFsSXRlbXNbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLWZvck9wZW5Nb2RhbCcpKTtcclxub3Blbk1vZGFsSXRlbXMuZm9yRWFjaChvcGVuTW9kYWxJdGVtID0+IHtcclxuICAgIG9wZW5Nb2RhbEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJtb2RhbFwiICovICcuL2FsbFNjcmlwdHMvbW9kYWwuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3Blbk1vZGFsID0gbW9kdWxlLm9wZW5Nb2RhbDtcclxuICAgICAgICBmb3IgKGxldCBtb2RhbFdpbmRvdyBvZiBtb2R1bGUuYWxsTW9kYWwpIHtcclxuICAgICAgICAgICAgaWYgKG9wZW5Nb2RhbEl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZvck9wZW5Nb2RhbCcpID09IG1vZGFsV2luZG93LmlkKSB7Ly9pZiB0aGUgb3BlbmluZyBlbGVtZW50IGhhcyBhIGRhdGEtZm9yT3Blbk1vZGFsIGF0dHJpYnV0ZSB0aGF0IG1hdGNoZXMgdGhlIG1vZGFsIHdpbmRvdydzIGlkLCB0aGVuIHJlbW92ZSB0aGUgJ2hpZGUnIGNsYXNzIGZyb20gdGhhdCBtb2RhbCB3aW5kb3dcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobW9kYWxXaW5kb3cpXHJcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWwobW9kdWxlLm1vZGFsLCBtb2RhbFdpbmRvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSkpXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vcGFzcy1leWUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGV5ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXllJyk7XHJcbmV5ZXMuZm9yRWFjaChleWUgPT4ge1xyXG4gICAgZXllLm9uY2xpY2sgPSBldmVudEV5ZSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFzcy1leWVcIiAqLyAnLi9hbGxTY3JpcHRzL3Bhc3MtZXllLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wZW5DbG9zZUV5ZSA9IG1vZHVsZS5vcGVuQ2xvc2VFeWU7XHJcbiAgICAgICAgb3BlbkNsb3NlRXllKGV2ZW50RXllKTtcclxuICAgIH0pO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vUGhvbmVNYXNrLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8qXHJcbmNvbnN0IHBob25lTWFza0xvYWRlckJ0bnMgPSBbb3BlblJlZ2lzdHIsIG9wZW5Mb2dpbiwgb3BlbkNhbGxiYWNrLCB3aWRnZXRPcGVuTW9kYWxdO1xyXG5waG9uZU1hc2tMb2FkZXJCdG5zLmZvckVhY2gobG9hZGVyQnRuID0+IHtcclxuXHJcbiAgICBpZiAobG9hZGVyQnRuLmxlbmd0aCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsb2FkZXJCdG4uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaW1wb3J0KCAgd2VicGFja0NodW5rTmFtZTogXCJQaG9uZU1hc2tcIiAgJy4vYWxsU2NyaXB0cy9QaG9uZU1hc2suanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwaG9uZU1hc2sgPSBtb2R1bGUucGhvbmVNYXNrO1xyXG4gICAgICAgICAgICAgICAgcGhvbmVNYXNrKCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsb2FkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGltcG9ydCggIHdlYnBhY2tDaHVua05hbWU6IFwiUGhvbmVNYXNrXCIgICcuL2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwaG9uZU1hc2sgPSBtb2R1bGUucGhvbmVNYXNrO1xyXG4gICAgICAgICAgICBwaG9uZU1hc2soKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG5cclxufSk7Ki9cclxuY29uc3QgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwidGVsXCJdJyk7XHJcbnBob25lSW5wdXRzLmZvckVhY2gocGhvbmVJbnB1dCA9PiB7XHJcbiAgICBwaG9uZUlucHV0Lm9uZm9jdXMgPSBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJQaG9uZU1hc2tcIiAqLyAnLi9hbGxTY3JpcHRzL1Bob25lTWFzay5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICBjb25zdCBwaG9uZU1hc2sgPSBtb2R1bGUucGhvbmVNYXNrO1xyXG4gICAgICAgIHBob25lTWFzaygpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL09UUC1JbnB1dC1maWVsZChzbXMpLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3Qgb3BlbkNvZGVGcm9tU21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9Db2RlRnJvbVNtcycpO1xyXG5vcGVuQ29kZUZyb21TbXMub25mb2N1cyA9IGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIk9UUC1JbnB1dC1maWVsZChzbXMpXCIgKi8gJy4vYWxsU2NyaXB0cy9PVFAtSW5wdXQtZmllbGQoc21zKS5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vdGV4dGFyZWFHcm93LmpzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGFza0FRdWVzdGlvblRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fzay1hLXF1ZXN0aW9uX19xdWVzdGlvbicpO1xyXG5hc2tBUXVlc3Rpb25UZXh0QXJlYS5vbmZvY3VzID0gZSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidGV4dGFyZWFHcm93XCIgKi8gJy4vYWxsU2NyaXB0cy90ZXh0YXJlYUdyb3cuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcblxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vYW5pbWF0ZUZvb3Rlci8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9nZXRTY3JvbGxQZXJjZW50LmpzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyAodHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIGN1cnJlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwibGl2ZWJhY3RlcmlhLmxvY2FsOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicGxhY2luZ0FuT3JkZXJcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtsaXZlYmFjdGVyaWFfbG9jYWxcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbGl2ZWJhY3RlcmlhX2xvY2FsXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJpbXBvcnQgJy4uL3N0eWxlL25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlL3N3aXBlci1idW5kbGUubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGUvbWFpbi5zY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZS9wbGFjaW5nQW5PcmRlci5zY3NzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvYW5pbWF0ZUhlYWRlclNlY29uZGFyeU5hdi5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyc7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vc2Vjb25kYXJ5TmF2QXJyb3dMaW5rczU4MC5qcy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1ODApIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNlY29uZGFyeU5hdkFycm93TGlua3M1ODBcIiAqLyAnLi9hbGxTY3JpcHRzL3NlY29uZGFyeU5hdkFycm93TGlua3M1ODAuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ29Ub1ByZXZpb3VzUGFnZSA9IG1vZHVsZS5nb1RvUHJldmlvdXNQYWdlO1xyXG4gICAgICAgIGdvVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH0pKVxyXG5cclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJzZWNvbmRhcnlOYXZBcnJvd0xpbmtzNTgwXCIgKi8gJy4vYWxsU2NyaXB0cy9zZWNvbmRhcnlOYXZBcnJvd0xpbmtzNTgwLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdvVG9QcmV2aW91c1BhZ2UgPSBtb2R1bGUuZ29Ub1ByZXZpb3VzUGFnZTtcclxuICAgICAgICBnb1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICB9KSlcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vaW1wb3J0ICcuL2FsbFNjcmlwdHMvcmFkaW9QZXJzb24uanMnO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9yYWRpb1BlcnNvbi5qcy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgcmFkaW9QZXJzb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmllbGRzZXRfX2l0ZW0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbnJhZGlvUGVyc29uLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJyYWRpb1BlcnNvblwiICovICcuL2FsbFNjcmlwdHMvcmFkaW9QZXJzb24uanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3dpdGNoaW5nID0gbW9kdWxlLnN3aXRjaGluZztcclxuICAgICAgICBzd2l0Y2hpbmcoaXRlbSk7XHJcbiAgICB9KSlcclxufSlcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2J1dHRvbkZvcm1Db25zZW50Q2hlY2suanMnO1xyXG5pbXBvcnQgJy4vbGF6eVdpZGdldEhlYWRlckJ1cmdlckFycm93c09wZW5MaXN0TW9kYWxQYXNzLWV5ZVBNYXNrU21zVGV4dGFyZWFHcm93QW5pbWF0ZUZvb3Rlci5qcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9