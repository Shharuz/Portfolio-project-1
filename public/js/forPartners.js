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
    heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));
    bodyforSmoothScroll.setAttribute('style', `height:${heightForScroll}px`);
};

if (document.querySelector('.forSmoothScroll')) {


    //gives the height of the body so that scrolling occurs
    alignBody();

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

/***/ "./src/style/forPartners.scss":
/*!************************************!*\
  !*** ./src/style/forPartners.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			"forPartners": 0
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
/*!***********************************!*\
  !*** ./src/script/forPartners.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/normalize.css */ "./src/style/normalize.css");
/* harmony import */ var _style_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/swiper-bundle.min.css */ "./src/style/swiper-bundle.min.css");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _style_forPartners_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/forPartners.scss */ "./src/style/forPartners.scss");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSxDQUFnRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9hbmltYXRlSGVhZGVyU2Vjb25kYXJ5TmF2LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2J1dHRvbkZvcm1Db25zZW50Q2hlY2suanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2dldFNjcm9sbFBlcmNlbnQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9sYXp5V2lkZ2V0SGVhZGVyQnVyZ2VyQXJyb3dzT3Blbkxpc3RNb2RhbFBhc3MtZXllUE1hc2tTbXNUZXh0YXJlYUdyb3dBbmltYXRlRm9vdGVyLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zdHlsZS9mb3JQYXJ0bmVycy5zY3NzP2FhMGEiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3N0eWxlL21haW4uc2Nzcz83NzQ1Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zdHlsZS9ub3JtYWxpemUuY3NzPzUzZmEiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3N0eWxlL3N3aXBlci1idW5kbGUubWluLmNzcz9hMzNiIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9mb3JQYXJ0bmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuY29uc3Qgc2Vjb25kTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZGFyeS1uYXYnKTtcclxuXHJcbmNvbnN0IGluZGV4T2ZmZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5kZXgtb2ZmZXInKTtcclxuY29uc3QgY2F0YWxvZ01haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dNYWluUGFnZScpO1xyXG5jb25zdCBjYXRhbG9nQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nQ2F0ZWdvcmllcycpO1xyXG5cclxuaWYoaW5kZXhPZmZlciAhPSBudWxsIHx8IGNhdGFsb2dNYWluUGFnZSAhPSBudWxsIHx8IGNhdGFsb2dDYXRlZ29yaWVzICE9IG51bGwpe1xyXG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXBwZWFySGVhZGVyU2Vjb25kTmF2KVxyXG59ZWxzZXtcclxuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFwcGVhckhlYWRlclNlY29uZE5hdilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcGVhckhlYWRlclNlY29uZE5hdigpIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdhcHBlYXJIZWFkZXInKTtcclxuICAgIGlmKHNlY29uZE5hdiAhPSBudWxsKXtcclxuICAgICAgICBzZWNvbmROYXYuY2xhc3NMaXN0LmFkZCgnYXBwZWFyU2Vjb25kYXJ5LW5hdicpOyBcclxuICAgIH1cclxufTtcclxuIiwiLy9jYXRhbG9nTWFpblBhZ2UgY29udGFjdHMgZGlyZWN0b3J5IGZvclBhcnRuZXJzIGhvd1RvQnV5IHBsYWNpbmdBbk9yZGVyIHF1ZXN0aW9ucyBhY2NvdW50XHJcbi8vYXJ0aWNsZSBibG9nIGNhdGFsb2dDYXRlZ29yaWVzIHJldmlld3NcclxuLy9zbW9vdGggc2Nyb2xsXHJcbmV4cG9ydCBjb25zdCBib2R5Zm9yU21vb3RoU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvclNtb290aFNjcm9sbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yU21vb3RoU2Nyb2xsX193cmFwcGVyJyk7XHJcbi8vbGV0IGhlaWdodEZvclNjcm9sbCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZvclNtb290aFNjcm9sbFdyYXBwZXIpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpKTtcclxubGV0IGhlaWdodEZvclNjcm9sbDtcclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduQm9keSgpIHsgLy8gc2NyaXB0L3JhZGlvUGVyc29uICAvICBzY3JpcHQvY2F0ZWdvcmllc1JhZGlvIC8gc2NyaXB0L3F1ZXN0aW9uc1xyXG4gICAgaGVpZ2h0Rm9yU2Nyb2xsID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZm9yU21vb3RoU2Nyb2xsV3JhcHBlcikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykpO1xyXG4gICAgYm9keWZvclNtb290aFNjcm9sbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoke2hlaWdodEZvclNjcm9sbH1weGApO1xyXG59O1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JTbW9vdGhTY3JvbGwnKSkge1xyXG5cclxuXHJcbiAgICAvL2dpdmVzIHRoZSBoZWlnaHQgb2YgdGhlIGJvZHkgc28gdGhhdCBzY3JvbGxpbmcgb2NjdXJzXHJcbiAgICBhbGlnbkJvZHkoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYWxpZ25Cb2R5KTtcclxuXHJcbiAgICBsZXQgc2NyUG9zWSA9IDA7IC8vZm9yIHNjcm9sbCBwb3NpdGlvbnNcclxuICAgIGxldCBibG9ja1Bvc1kgPSBzY3JQb3NZOyAvLyBmb3IgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciBwb3NpdGlvblxyXG4gICAgbGV0IHNwZWVkQW5pbSA9IDAuMDM7IC8vaWYgc3BlZWRBbmltID4gMC4wNyAoMC4xKSBhbmltYXRpb24gaGFwcGVucyBmYXN0ZXJcclxuICAgIC8vaWYgc3BlZWRBbmltIDwgMC4wNyAoMC4wMikgYW5pbWF0aW9uIGlzIHNsb3dlclxyXG5cclxuXHJcbiAgICAvLyBCaW5kIGEgc2Nyb2xsIGZ1bmN0aW9uXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZ2V0c1Njcm9sbFZhbHVlKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0c1Njcm9sbFZhbHVlKCkge1xyXG4gICAgICAgIHNjclBvc1kgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JQb3NZKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGgpO1xyXG5cclxuICAgIC8vYW5pbWF0ZSBlbGVtZW50IHJldmlld3MuaHRtbCwgcXVlc3Rpb25zLmh0bWwgYW5kIGJsb2cuaHRtbFxyXG5cclxuICAgIGxldCB3aW5kb3dIZWlnaHQ7XHJcbiAgICBjb25zdCBlbGVtZW50VmlzaWJsZSA9IDE7IC8vYW5pbWF0aW9uIHdpbGwgc3RhcnQgd2hlbiB0aGUgYmxvY2sgaXMgMTUwcHggYXdheSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0LlxyXG4gICAgY29uc3QgZWxlbWVudFZpc2libGVCbG9nID0gMzA7IC8vYW5pbWF0aW9uIHdpbGwgc3RhcnQgd2hlbiB0aGUgYmxvY2sgaXMgMTUwcHggYXdheSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0LlxyXG4gICAgbGV0IHNjcm9sbEVsZW1lbnRzO1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2tcclxuXHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrIFxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWFydGljbGUtbWluXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpIHtcclxuICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IC8vd2luZG93SGVpZ2h0IGdldHMgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKGlubmVySGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgZ2V0V2luZG93SGVpZ2h0KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0V2luZG93SGVpZ2h0KTtcclxuXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGFwcGVhckVsZW1lbnQoYXJnKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JvbGxFbGVtZW50cylcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvcCA9ICtzY3JvbGxFbGVtZW50c1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AudG9GaXhlZCgyKTsgLy9jYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0IHRvIHRoZSB0b3Agb2YgdGhlIGJsb2NrXHJcblxyXG4gICAgICAgICAgICBpZiAoYXJnID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50VG9wIDwgd2luZG93SGVpZ2h0IC0gZWxlbWVudFZpc2libGVCbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudHNbaV0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVFbGVtZW50c09uU2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxFbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZUVsZW1lbnRzT25TY3JvbGxcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRUb3AgPCB3aW5kb3dIZWlnaHQgLSBlbGVtZW50VmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVFbGVtZW50c09uU2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvL2FwcGVhckVsZW1lbnRSZXZpZXdzKCk7XHJcbiAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGFwcGVhckVsZW1lbnRSZXZpZXdzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzbW9vdGgoKSB7XHJcblxyXG4gICAgICAgIC8vV2UgY2FsY3VsYXRlIG91ciBjb250YWluZXIgcG9zaXRpb24gYnkgbGluZWFyIGludGVycG9sYXRpb24gbWV0aG9kXHJcbiAgICAgICAgYmxvY2tQb3NZID0gbGluZWFyKGJsb2NrUG9zWSwgc2NyUG9zWSwgc3BlZWRBbmltKSAvL2NhbGN1bGF0ZSBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyIHBvc2l0aW9uIGJ5IGxpbmVhciBpbnRlcnBvbGF0aW9uIG1ldGhvZFxyXG5cclxuICAgICAgICBibG9ja1Bvc1kgPSBNYXRoLmZsb29yKGJsb2NrUG9zWSAqIDEwMCkgLyAxMDA7XHJcblxyXG5cclxuICAgICAgICBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC0ke2Jsb2NrUG9zWX1weCwgMHB4KWApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoKTtcclxuICAgICAgICAvL2FuaW1hdGUgZWxlbWVudCByZXZpZXdzLmh0bWwgYW5kIHF1ZXN0aW9ucy5odG1sXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaW5lYXIoYXJnMSwgYXJnMiwgYXJnMykge1xyXG4gICAgICAgIHJldHVybiAoMSAtIGFyZzMpICogYXJnMSArIGFyZzMgKiBhcmcyO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4vL3NwbGl0IHR4dFxyXG5jb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJylcclxuXHJcblxyXG5sZXQgc3RyaW5nSDtcclxubGV0IGFycmF5TGV0dGVyc0ggPSBbXTtcclxuXHJcbmlmIChoMiAhPSBudWxsKSB7XHJcbiAgICBpZiAoaDIuaWQgPT0gJ2gyY2F0YWxvZ01haW5QYWdlJykge1xyXG4gICAgICAgIGxldCB0bXBBZGFwdGl2ZUgyO1xyXG4gICAgICAgIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaDJjYXRhbG9nTWFpblBhZ2VBZGFwdGl2ZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDU4MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcEFkYXB0aXZlSDIgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFkYXB0aXZlSDIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzAnKSAgICBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzKGgyLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTgwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG1wQWRhcHRpdmVIMiAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQWRhcHRpdmVIMiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMiwgMiwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGgyLmlkID09ICdoMmFydGljbGVPclZpZGVvJykge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vYXJnMSA9IGgxIG9yIGgyW2ldXHJcbi8vYXJnMiA9IGFtb3VudCBsaW5lc1xyXG4vL2FyZzMgPSBhbW91bnQgd29yZHMgaW4gMSBsaW5lXHJcbi8vYXJnNCA9IGFtb3VudCB3b3JkcyBpbiAyIGxpbmVcclxuLy9hcmc1ID0gYW1vdW50IHdvcmRzIGluIDMgbGluZVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0aW5nV3JhcHBlcnMoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSwgYXJnNiwgYXJnNykge1xyXG5cclxuICAgIC8vZm9yIGFkYXB0aXZlXHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxLmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzWzBdKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lKVxyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcmcxLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICB9XHJcbiAgICBpZiAoYXJnMS5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lID09ICdESVYnKSB7IC8vY2hlY2tzIGlmIGgyIGlzIHNwbGl0IGludG8gbGV0dGVyc1xyXG4gICAgICAgIGxldCB0bXBXb3JkID0gYXJnMS5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlckZvcldvcmQnKTsgLy90YWtlcyBhbGwgdGhlIHdvcmRzXHJcbiAgICAgICAgbGV0IHRtcEFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG1wV29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRtcFdvcmRbaV0ucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJTeW1ib2wnKTsgLy90YWtlcyBhbGwgY2hhcmFjdGVycyBpbiBlYWNoIHdvcmRcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjaGFyLmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXJbeV0uaW5uZXJIVE1MKSAgIFxyXG4gICAgICAgICAgICAgICAgdG1wQXJyLnB1c2goY2hhclt5XS5pbm5lckhUTUwpOyAvL9GBaGFyIHB1dHMgaW50byBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPT0gKGNoYXIubGVuZ3RoIC0gMSkpIHsgLy9pZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSB3b3JkLCB0aGVuIGl0IHdpbGwgYWRkIGEgc3BhY2UgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQXJyLnB1c2goJyAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codG1wQXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyZzEuaW5uZXJIVE1MID0gXCJcIjsgLy93aWxsIGNsZWFyIGgyXHJcbiAgICAgICAgYXJnMS5pbm5lckhUTUwgPSB0bXBBcnIuam9pbihcIlwiKTsgLy90aGUgbGluZSBjbGVhcmVkIG9mIHdyYXBwZXJzIHdpbGwgYmUgYWRkZWQgdG8gaDJcclxuICAgICAgICAvL2FyZzEuYXBwZW5kKHRtcEFyci5qb2luKFwiXCIpKTtcclxuICAgIH1cclxuICAgIC8qaWYoYXJnMS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucygnbGluZScpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdycnJycnJycicpXHJcbiAgICB9Ki9cclxuXHJcbiAgICBzdHJpbmdIID0gYXJnMS5pbm5lckhUTUw7IC8vdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgKHN0cmluZykgaXMgcHV0IGludG8gYSB2YXJpYWJsZVxyXG4gICAgYXJnMS5pbm5lckhUTUwgPSAnJzsgLy96ZXJvaW5nIGNvbnRlbnQgdG8gYWRkIHdyYXBwZXJzIHdpdGggY29udGVudFxyXG4gICAgYXJyYXlMZXR0ZXJzSCA9IFtdIC8vYXJyYXkgemVyb2luZyA/Pz8gaXQgc2VlbXMgdG8gYmUgcmVzZXQgdG8gemVybyBhcm91bmQgbGluZSAyMDkgPz8/XHJcbiAgICBmb3IgKGxldCBjaGFyIG9mIHN0cmluZ0gpIHsgLy90aGUgc3RyaW5nIGlzIHNwbGl0IGludG8gY2hhcmFjdGVycyBhbmQgYWRkZWQgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgYXJyYXlMZXR0ZXJzSC5wdXNoKGNoYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TGV0dGVyc0gubGVuZ3RoOyArK2kpIHsgLy9jb3VudCB3b3JkcyBpbiBhIGxpbmUsIHJlbGF0aXZlIHRvICcgJ1xyXG4gICAgICAgIGlmIChhcnJheUxldHRlcnNIW2ldID09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbGVuZ2h0QXJyID0gYXJyYXlMZXR0ZXJzSC5sZW5ndGg7XHJcblxyXG4gICAgaWYgKGFyZzIgPT0gMSkgeyAvL2lmIHlvdSBuZWVkIHRvIG1ha2UgYSBsaW5lIGluIDEgbGluZVxyXG4gICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGluZyBhIGxpbmUgYW5kIGFkZGluZyBpdCB0byBhbiBlbGVtZW50IChIMSBvciBIMilcclxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgICBhcmcxLmFwcGVuZChsaW5lKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoYXJnMiA+IDEpIHsgLy9pZiB5b3UgbmVlZCB0byBtYWtlIGEgbGluZSBpbiAyIGxpbmVzIG9yIG1vcmVcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGFyZzI7ICsreSkgeyAvLyB5IDwgYXJnMigzKSA9IG1ha2UgMyBsaW5lcyBcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW5nIGEgbGluZSBhbmQgYWRkaW5nIGl0IHRvIGFuIGVsZW1lbnQgKEgxIG9yIEgyKVxyXG4gICAgICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgICAgICAgYXJnMS5hcHBlbmQobGluZSk7XHJcbiAgICAgICAgICAgIGlmICh5ID09IDApIHsgLy8xU1QgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMzsgKytpKSB7IC8vICBpIDwgYXJnMygyKSA9ICAyIHdvcmRzIGluIGxpbmVcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDEpIHsgLy8yTkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNDsgKytpKSB7IC8vIC8vICBpIDwgYXJnNCgzKSA9ICAzIHdvcmRzIGluIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKSAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDIpIHsgLy8zTkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNTsgKytpKSB7IC8vIC8vICBpIDwgYXJnNSgyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gMykgeyAvLzRORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc2OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc2KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSA0KSB7IC8vNU5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzc7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzcoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhhcmcxKSB7XHJcbiAgICAgICAgLy9ieSB0aGUgdGVybSB3b3JkIGFuZCBzeW1ib2wsIHdlIG1lYW4gYSB3cmFwcGVyIGZvciBhIHdvcmQgYW5kIHN5bWJvbFxyXG4gICAgICAgIGxldCB3cmFwcGVyRm9yV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpb24gb2YgYSB3b3JkXHJcbiAgICAgICAgd3JhcHBlckZvcldvcmQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlckZvcldvcmQnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5naHRBcnI7ICsreSkge1xyXG4gICAgICAgICAgICBpZiAoYXJyYXlMZXR0ZXJzSFswXSA9PSBcIiBcIikgeyAvL2lmIGl0IGVuY291bnRlcnMgXCIgXCIgLSBpdCB3aWxsIGRlbGV0ZSBpdFxyXG4gICAgICAgICAgICAgICAgYXJyYXlMZXR0ZXJzSC5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheUxldHRlcnNIWzBdID09IHVuZGVmaW5lZCkgYnJlYWs7IC8vaWYgdGhlIGFycmF5IGlzIG92ZXIgLSBzdG9wXHJcbiAgICAgICAgICAgIGxldCBkaXZGb3JTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW9uIG9mIGEgc3ltYm9sXHJcbiAgICAgICAgICAgIGRpdkZvclN5bWJvbC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyU3ltYm9sJyk7XHJcbiAgICAgICAgICAgIGRpdkZvclN5bWJvbC5pbm5lckhUTUwgPSBhcnJheUxldHRlcnNIWzBdOyAvL2FkZGluZyBhIHN5bWJvbCBmcm9tIGFuIGFycmF5IHRvIGEgd3JhcHBlcihzeW1ib2wpXHJcbiAgICAgICAgICAgIHdyYXBwZXJGb3JXb3JkLmFwcGVuZChkaXZGb3JTeW1ib2wpOyAvL2FkZGluZyBhIHN5bWJvbCB0byBhIHdvcmRcclxuICAgICAgICAgICAgYXJyYXlMZXR0ZXJzSC5zcGxpY2UoMCwgMSk7IC8vcmVtb3ZlIGFkZGVkIGNoYXJhY3RlciBmcm9tIGFycmF5XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcmcxLmFwcGVuZCh3cmFwcGVyRm9yV29yZCk7IC8vYWRkaW5nIGEgd29yZCB3aXRoIHN5bWJvbHMgdG8gdGhlIGNyZWF0ZWQgbGluZSAodGhlIGxpbmUgd2FzIGNyZWF0ZWQgYXQgYWJvdXQgMTc1IGFuZCAxODQpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vaDIgY2hhciBwcmVwIGZvciBhbmltXHJcblxyXG5pZiAoaDIgIT0gbnVsbCkge1xyXG4gICAgY29uc3QgaDJsaW5lID0gaDIucXVlcnlTZWxlY3RvckFsbCgnLmxpbmUnKVxyXG4gICAgaDJsaW5lLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaDJDaGFyID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlclN5bWJvbCcpXHJcbiAgICAgICAgbGV0IHRtcEgyQ2hhclRyYW5zWSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgY2hhciBvZiBoMkNoYXIpIHsgLy93aWxsIG1ha2UgYSBsYWRkZXJcclxuICAgICAgICAgICAgY2hhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RtcEgyQ2hhclRyYW5zWSAqIDAuNX1weClgO1xyXG4gICAgICAgICAgICBjaGFyLnN0eWxlLm9wYWNpdHkgPSBgMGA7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hhcilcclxuICAgICAgICAgICAgdG1wSDJDaGFyVHJhbnNZICs9IDEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYXBwZWFySDJjaGFycygpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoMkNoYXIubGVuZ3RoOyArK2kpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaDJDaGFyLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyQ2hhcltpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgwcHgpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDJDaGFyW2ldLnN0eWxlLm9wYWNpdHkgPSBgMWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAgKiBpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc+MTAnKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDJDaGFyW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDBweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMkNoYXJbaV0uc3R5bGUub3BhY2l0eSA9IGAxYDtcclxuICAgICAgICAgICAgICAgICAgICB9LCA2MCAqIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzwxMCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXBwZWFySDJjaGFycylcclxuXHJcbiAgICB9KVxyXG4gICAgLy9jb25zb2xlLmxvZyhoMkNoYXIpO1xyXG5cclxufSIsImNvbnN0IGNvbnNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIC5jb25zZW50Jyk7IC8vdGFrZSBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyAuY29uc2VudFxyXG5jb25zdCBtb2RhbFBvbGl0aWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9saXRpYy1hZ3JlZW1lbnQtYnV0dG9uLWNsb3NlJyk7XHJcbmNvbnN0IGNvbnNlbnRDaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb25zZW50IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG5cclxuLy90aGVyZSBpcyBhIGRpdiB3aXRoIGNsYXNzIGNvbmNlbnQuIEluIGNvbnNlbnQgdGhlcmUgYXJlIDIgZWxlbWVudHMgaW5wdXQgYW5kIGxhYmVsXHJcbi8vdGhlIG5leHQgZWxlbWVudCBhZnRlciB0aGUgY29uc2VudCBpcyB0aGUgYnV0dG9uIGVsZW1lbnRcclxuXHJcbmZvciggbGV0IGl0ZW0gb2YgY29uc2VudCl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbGxlY3Rpb24gZW51bWVyYXRpb25cclxuICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy9hZGQgY2xpY2sgZXZlbnQgdG8gZWFjaCBuZXh0IGl0ZW0oYnV0dG9uKSBmcm9tIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoICFlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2hlY2tlZCApeyAvL2lmIHRoZSBsYWJlbCBpcyBub3QgaW4gdGhlIGNoZWNrZWQgc3RhdGVcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZW4gdGhlIGJ1dHRvbiBkb2VzIG5vdCB3b3JrXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RoaXMgaXMgbmVjZXNzYXJ5IGZvciB0aGUgdXNlciB0byBhZ3JlZSB0byB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Rlcm1zIG9mIHBlcnNvbmFsIGRhdGEgcHJvY2Vzc2luZyBcclxuICAgIH0pO1xyXG59O1xyXG5cclxubW9kYWxQb2xpdGljQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNlbnRDaGVja0JveC5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpXHJcbiAgICAgICAgfSApXHJcbn0pXHJcblxyXG5cclxuIiwibGV0IHNjcm9sbFBlcmNlbnQ7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5pZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3Njcm9sbC1jb250YWluZXInKSkgey8vZm9yIGNhcmQuaHRtbFxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbFBlcmNlbnQoKSB7XHJcbiAgICAgICAgc2Nyb2xsUGVyY2VudCA9ICsoKHdpbmRvdy5zY3JvbGxZIC8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtY29udGFpbmVyX19zY3JvbGwtY29udGVudCcpLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDApLnRvRml4ZWQoMikpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2Nyb2xsUGVyY2VudClcclxuICAgICAgICBpZiAoc2Nyb2xsUGVyY2VudCA+IDUwKSB7XHJcbiAgICAgICAgICAgIGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJhbmltYXRlRm9vdGVyXCIgKi8gJy4vYW5pbWF0ZUZvb3Rlci5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3RlclZpc2libGVTY3JvbGwgPSBtb2R1bGUuZm9vdGVyVmlzaWJsZVNjcm9sbDtcclxuICAgICAgICAgICAgICAgIGZvb3RlclZpc2libGVTY3JvbGwoc2Nyb2xsUGVyY2VudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZ2V0U2Nyb2xsUGVyY2VudCk7XHJcblxyXG59IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZvciBhbGxcclxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbFBlcmNlbnQoKSB7XHJcbiAgICAgICAgc2Nyb2xsUGVyY2VudCA9ICsoKHdpbmRvdy5zY3JvbGxZIC8gKGJvZHkub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSAqIDEwMCkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JvbGxQZXJjZW50KVxyXG4gICAgICAgIGlmIChzY3JvbGxQZXJjZW50ID4gNTApIHtcclxuICAgICAgICAgICAgaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFuaW1hdGVGb290ZXJcIiAqLyAnLi9hbmltYXRlRm9vdGVyLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9vdGVyVmlzaWJsZVNjcm9sbCA9IG1vZHVsZS5mb290ZXJWaXNpYmxlU2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgZm9vdGVyVmlzaWJsZVNjcm9sbChzY3JvbGxQZXJjZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRTY3JvbGxQZXJjZW50KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBpZiAoKGJvZHkub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpKVxyXG4gICAgICAgICAgICBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYW5pbWF0ZUZvb3RlclwiICovICcuL2FuaW1hdGVGb290ZXIuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJWaXNpYmxlV2l0aG91dFNjcm9sbCA9IG1vZHVsZS5mb290ZXJWaXNpYmxlV2l0aG91dFNjcm9sbDtcclxuICAgICAgICAgICAgICAgIGZvb3RlclZpc2libGVXaXRob3V0U2Nyb2xsKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYW5pbWF0ZUZvb3RlclwiICovICcuL2FuaW1hdGVGb290ZXIuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvb3RlclZpc2libGVXaXRob3V0U2Nyb2xsID0gbW9kdWxlLmZvb3RlclZpc2libGVXaXRob3V0U2Nyb2xsO1xyXG4gICAgICAgIGZvb3RlclZpc2libGVXaXRob3V0U2Nyb2xsKCk7XHJcbiAgICB9KSlcclxufSIsImNvbnN0IHdpZGdldFRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpZGdldF9fdHJpZ2dlclwiKTtcclxud2lkZ2V0VHJpZ2dlci5vbmNsaWNrID0gZSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwid2lkZ2V0XCIgKi8gJy4vYWxsU2NyaXB0cy93aWRnZXQuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICBjb25zdCBvcGVuV2lkZ2V0ID0gbW9kdWxlLm9wZW5XaWRnZXQ7XHJcbiAgICBvcGVuV2lkZ2V0KCk7XHJcbn0pO1xyXG5cclxuY29uc3QgYnRuQnVyZ2VyaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX25hdl9fYnVyZ2VyLXdyYXBwZXItZm9yLWxpbmVcIik7XHJcbmJ0bkJ1cmdlcmhlYWRlci5vbmNsaWNrID0gZXZlbnRidG5CdXJnZXJoZWFkZXIgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhlYWRlck5hdkJ1cmdlclZpZXdQb3J0V2lkdGgxMTAwcHhcIiAqLyAnLi9hbGxTY3JpcHRzL2hlYWRlck5hdkJ1cmdlclZpZXdQb3J0V2lkdGgxMTAwcHguanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXJOYXZMaXN0RG93biA9IG1vZHVsZS5oZWFkZXJOYXZMaXN0RG93bjtcclxuICAgIGhlYWRlck5hdkxpc3REb3duKGV2ZW50YnRuQnVyZ2VyaGVhZGVyKTtcclxufSk7XHJcblxyXG5jb25zdCBoZWFkZXJOYXZBcnJvd3NPcGVuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnJvdy1yaWd0aC13cmFwcGVyJyk7XHJcbmhlYWRlck5hdkFycm93c09wZW5MaXN0LmZvckVhY2goYXJyb3cgPT4ge1xyXG4gICAgYXJyb3cub25jbGljayA9IGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhlYWRlckFycm93T3BlblN1Ykxpc3RWaWV3UG9ydFdpZHRoNzM1cHhcIiAqLyAnLi9hbGxTY3JpcHRzL2hlYWRlckFycm93T3BlblN1Ykxpc3RWaWV3UG9ydFdpZHRoNzM1cHguanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyTmF2TGlzdE9wZW5TdWJMaXN0ID0gbW9kdWxlLmhlYWRlck5hdkxpc3RPcGVuU3ViTGlzdDtcclxuICAgICAgICBoZWFkZXJOYXZMaXN0T3BlblN1Ykxpc3QoYXJyb3cpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL21vZGFsLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBvcGVuTW9kYWxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZvck9wZW5Nb2RhbF0nKTtcclxuLy9jb25zb2xlLmxvZyhvcGVuTW9kYWxJdGVtc1swXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9yT3Blbk1vZGFsJykpO1xyXG5vcGVuTW9kYWxJdGVtcy5mb3JFYWNoKG9wZW5Nb2RhbEl0ZW0gPT4ge1xyXG4gICAgb3Blbk1vZGFsSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1vZGFsXCIgKi8gJy4vYWxsU2NyaXB0cy9tb2RhbC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICBjb25zdCBvcGVuTW9kYWwgPSBtb2R1bGUub3Blbk1vZGFsO1xyXG4gICAgICAgIGZvciAobGV0IG1vZGFsV2luZG93IG9mIG1vZHVsZS5hbGxNb2RhbCkge1xyXG4gICAgICAgICAgICBpZiAob3Blbk1vZGFsSXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9yT3Blbk1vZGFsJykgPT0gbW9kYWxXaW5kb3cuaWQpIHsvL2lmIHRoZSBvcGVuaW5nIGVsZW1lbnQgaGFzIGEgZGF0YS1mb3JPcGVuTW9kYWwgYXR0cmlidXRlIHRoYXQgbWF0Y2hlcyB0aGUgbW9kYWwgd2luZG93J3MgaWQsIHRoZW4gcmVtb3ZlIHRoZSAnaGlkZScgY2xhc3MgZnJvbSB0aGF0IG1vZGFsIHdpbmRvd1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtb2RhbFdpbmRvdylcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbChtb2R1bGUubW9kYWwsIG1vZGFsV2luZG93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KSlcclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9wYXNzLWV5ZS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgZXllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leWUnKTtcclxuZXllcy5mb3JFYWNoKGV5ZSA9PiB7XHJcbiAgICBleWUub25jbGljayA9IGV2ZW50RXllID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJwYXNzLWV5ZVwiICovICcuL2FsbFNjcmlwdHMvcGFzcy1leWUuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3BlbkNsb3NlRXllID0gbW9kdWxlLm9wZW5DbG9zZUV5ZTtcclxuICAgICAgICBvcGVuQ2xvc2VFeWUoZXZlbnRFeWUpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9QaG9uZU1hc2svLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLypcclxuY29uc3QgcGhvbmVNYXNrTG9hZGVyQnRucyA9IFtvcGVuUmVnaXN0ciwgb3BlbkxvZ2luLCBvcGVuQ2FsbGJhY2ssIHdpZGdldE9wZW5Nb2RhbF07XHJcbnBob25lTWFza0xvYWRlckJ0bnMuZm9yRWFjaChsb2FkZXJCdG4gPT4ge1xyXG5cclxuICAgIGlmIChsb2FkZXJCdG4ubGVuZ3RoICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxvYWRlckJ0bi5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBpbXBvcnQoICB3ZWJwYWNrQ2h1bmtOYW1lOiBcIlBob25lTWFza1wiICAnLi9hbGxTY3JpcHRzL1Bob25lTWFzay5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBob25lTWFzayA9IG1vZHVsZS5waG9uZU1hc2s7XHJcbiAgICAgICAgICAgICAgICBwaG9uZU1hc2soKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvYWRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gaW1wb3J0KCAgd2VicGFja0NodW5rTmFtZTogXCJQaG9uZU1hc2tcIiAgJy4vYWxsU2NyaXB0cy9QaG9uZU1hc2suanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBob25lTWFzayA9IG1vZHVsZS5waG9uZU1hc2s7XHJcbiAgICAgICAgICAgIHBob25lTWFzaygpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcblxyXG59KTsqL1xyXG5jb25zdCBwaG9uZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKTtcclxucGhvbmVJbnB1dHMuZm9yRWFjaChwaG9uZUlucHV0ID0+IHtcclxuICAgIHBob25lSW5wdXQub25mb2N1cyA9IGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIlBob25lTWFza1wiICovICcuL2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBob25lTWFzayA9IG1vZHVsZS5waG9uZU1hc2s7XHJcbiAgICAgICAgcGhvbmVNYXNrKCk7XHJcbiAgICB9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vT1RQLUlucHV0LWZpZWxkKHNtcykvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBvcGVuQ29kZUZyb21TbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub0NvZGVGcm9tU21zJyk7XHJcbm9wZW5Db2RlRnJvbVNtcy5vbmZvY3VzID0gZSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiT1RQLUlucHV0LWZpZWxkKHNtcylcIiAqLyAnLi9hbGxTY3JpcHRzL09UUC1JbnB1dC1maWVsZChzbXMpLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG5cclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy90ZXh0YXJlYUdyb3cuanMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgYXNrQVF1ZXN0aW9uVGV4dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNrLWEtcXVlc3Rpb25fX3F1ZXN0aW9uJyk7XHJcbmFza0FRdWVzdGlvblRleHRBcmVhLm9uZm9jdXMgPSBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJ0ZXh0YXJlYUdyb3dcIiAqLyAnLi9hbGxTY3JpcHRzL3RleHRhcmVhR3Jvdy5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9hbmltYXRlRm9vdGVyLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2dldFNjcm9sbFBlcmNlbnQuanMnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7ICh0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgY3VycmVudCA9PSAnZnVuY3Rpb24nKSAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJsaXZlYmFjdGVyaWEubG9jYWw6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJmb3JQYXJ0bmVyc1wiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2xpdmViYWN0ZXJpYV9sb2NhbFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtsaXZlYmFjdGVyaWFfbG9jYWxcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCAnLi4vc3R5bGUvbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGUvc3dpcGVyLWJ1bmRsZS5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZS9tYWluLnNjc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlL2ZvclBhcnRuZXJzLnNjc3MnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9hbmltYXRlSGVhZGVyU2Vjb25kYXJ5TmF2LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvYW5pbWF0aW9uLmpzJztcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9zZWNvbmRhcnlOYXZBcnJvd0xpbmtzNTgwLmpzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU4MCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwic2Vjb25kYXJ5TmF2QXJyb3dMaW5rczU4MFwiICovICcuL2FsbFNjcmlwdHMvc2Vjb25kYXJ5TmF2QXJyb3dMaW5rczU4MC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICBjb25zdCBnb1RvUHJldmlvdXNQYWdlID0gbW9kdWxlLmdvVG9QcmV2aW91c1BhZ2U7XHJcbiAgICAgICAgZ29Ub1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgfSkpXHJcblxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNlY29uZGFyeU5hdkFycm93TGlua3M1ODBcIiAqLyAnLi9hbGxTY3JpcHRzL3NlY29uZGFyeU5hdkFycm93TGlua3M1ODAuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ29Ub1ByZXZpb3VzUGFnZSA9IG1vZHVsZS5nb1RvUHJldmlvdXNQYWdlO1xyXG4gICAgICAgIGdvVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH0pKVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9pbXBvcnQgJy4vYWxsU2NyaXB0cy9yYWRpb1BlcnNvbi5qcyc7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3JhZGlvUGVyc29uLmpzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCByYWRpb1BlcnNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWVsZHNldF9faXRlbSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxucmFkaW9QZXJzb24uZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInJhZGlvUGVyc29uXCIgKi8gJy4vYWxsU2NyaXB0cy9yYWRpb1BlcnNvbi5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICBjb25zdCBzd2l0Y2hpbmcgPSBtb2R1bGUuc3dpdGNoaW5nO1xyXG4gICAgICAgIHN3aXRjaGluZyhpdGVtKTtcclxuICAgIH0pKVxyXG59KVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvYnV0dG9uRm9ybUNvbnNlbnRDaGVjay5qcyc7XHJcbmltcG9ydCAnLi9sYXp5V2lkZ2V0SGVhZGVyQnVyZ2VyQXJyb3dzT3Blbkxpc3RNb2RhbFBhc3MtZXllUE1hc2tTbXNUZXh0YXJlYUdyb3dBbmltYXRlRm9vdGVyLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=