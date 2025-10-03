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
/* harmony import */ var _allScripts_animateHeaderSecondaryNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allScripts/animateHeaderSecondaryNav.js */ "./src/script/allScripts/animateHeaderSecondaryNav.js");
/* harmony import */ var _allScripts_animateHeaderSecondaryNav_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allScripts_animateHeaderSecondaryNav_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _allScripts_animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allScripts/animation.js */ "./src/script/allScripts/animation.js");
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allScripts/buttonFormConsentCheck.js */ "./src/script/allScripts/buttonFormConsentCheck.js");
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lazyWidgetHeaderBurgerArrowsOpenListModalPass_eyePMaskSmsTextareaGrowAnimateFooter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js */ "./src/script/lazyWidgetHeaderBurgerArrowsOpenListModalPass-eyePMaskSmsTextareaGrowAnimateFooter.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGVIZWFkZXJTZWNvbmRhcnlOYXYuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYnV0dG9uRm9ybUNvbnNlbnRDaGVjay5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvZ2V0U2Nyb2xsUGVyY2VudC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2xhenlXaWRnZXRIZWFkZXJCdXJnZXJBcnJvd3NPcGVuTGlzdE1vZGFsUGFzcy1leWVQTWFza1Ntc1RleHRhcmVhR3Jvd0FuaW1hdGVGb290ZXIuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L3BsYWNpbmdBbk9yZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5jb25zdCBzZWNvbmROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kYXJ5LW5hdicpO1xyXG5cclxuY29uc3QgaW5kZXhPZmZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmRleC1vZmZlcicpO1xyXG5jb25zdCBjYXRhbG9nTWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ01haW5QYWdlJyk7XHJcbmNvbnN0IGNhdGFsb2dDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dDYXRlZ29yaWVzJyk7XHJcblxyXG5pZihpbmRleE9mZmVyICE9IG51bGwgfHwgY2F0YWxvZ01haW5QYWdlICE9IG51bGwgfHwgY2F0YWxvZ0NhdGVnb3JpZXMgIT0gbnVsbCl7XHJcbiAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhcHBlYXJIZWFkZXJTZWNvbmROYXYpXHJcbn1lbHNle1xyXG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXBwZWFySGVhZGVyU2Vjb25kTmF2KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYXBwZWFySGVhZGVyU2Vjb25kTmF2KCkge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2FwcGVhckhlYWRlcicpO1xyXG4gICAgaWYoc2Vjb25kTmF2ICE9IG51bGwpe1xyXG4gICAgICAgIHNlY29uZE5hdi5jbGFzc0xpc3QuYWRkKCdhcHBlYXJTZWNvbmRhcnktbmF2Jyk7IFxyXG4gICAgfVxyXG59O1xyXG4iLCIvL2NhdGFsb2dNYWluUGFnZSBjb250YWN0cyBkaXJlY3RvcnkgZm9yUGFydG5lcnMgaG93VG9CdXkgcGxhY2luZ0FuT3JkZXIgcXVlc3Rpb25zIGFjY291bnRcclxuLy9hcnRpY2xlIGJsb2cgY2F0YWxvZ0NhdGVnb3JpZXMgcmV2aWV3c1xyXG4vL3Ntb290aCBzY3JvbGxcclxuZXhwb3J0IGNvbnN0IGJvZHlmb3JTbW9vdGhTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JTbW9vdGhTY3JvbGxfX3dyYXBwZXInKTtcclxuLy9sZXQgaGVpZ2h0Rm9yU2Nyb2xsID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZm9yU21vb3RoU2Nyb2xsV3JhcHBlcikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykpO1xyXG5cclxubGV0IGhlaWdodEZvclNjcm9sbDtcclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduQm9keSgpIHsgLy8gc2NyaXB0L3JhZGlvUGVyc29uICAvICBzY3JpcHQvY2F0ZWdvcmllc1JhZGlvIC8gc2NyaXB0L3F1ZXN0aW9uc1xyXG4gICAgLypoZWlnaHRGb3JTY3JvbGwgPSBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIGJvZHlmb3JTbW9vdGhTY3JvbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6JHtoZWlnaHRGb3JTY3JvbGwudG9GaXhlZCgyKX1weGApOyovXHJcbiAgICBoZWlnaHRGb3JTY3JvbGwgPSBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyLm9mZnNldEhlaWdodDtcclxuICAgIC8vY29uc29sZS5sb2coaGVpZ2h0Rm9yU2Nyb2xsKVxyXG4gICAgYm9keWZvclNtb290aFNjcm9sbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoke2hlaWdodEZvclNjcm9sbH1weGApO1xyXG5cclxufTtcclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yU21vb3RoU2Nyb2xsJykpIHtcclxuXHJcblxyXG4gICAgLy9naXZlcyB0aGUgaGVpZ2h0IG9mIHRoZSBib2R5IHNvIHRoYXQgc2Nyb2xsaW5nIG9jY3Vyc1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhbGlnbkJvZHkpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhbGlnbkJvZHkpO1xyXG5cclxuICAgIGxldCBzY3JQb3NZID0gMDsgLy9mb3Igc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgbGV0IGJsb2NrUG9zWSA9IHNjclBvc1k7IC8vIGZvciBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyIHBvc2l0aW9uXHJcbiAgICBsZXQgc3BlZWRBbmltID0gMC4wMzsgLy9pZiBzcGVlZEFuaW0gPiAwLjA3ICgwLjEpIGFuaW1hdGlvbiBoYXBwZW5zIGZhc3RlclxyXG4gICAgLy9pZiBzcGVlZEFuaW0gPCAwLjA3ICgwLjAyKSBhbmltYXRpb24gaXMgc2xvd2VyXHJcblxyXG5cclxuICAgIC8vIEJpbmQgYSBzY3JvbGwgZnVuY3Rpb25cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRzU2Nyb2xsVmFsdWUpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRzU2Nyb2xsVmFsdWUoKSB7XHJcbiAgICAgICAgc2NyUG9zWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNjclBvc1kpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aCk7XHJcblxyXG4gICAgLy9hbmltYXRlIGVsZW1lbnQgcmV2aWV3cy5odG1sLCBxdWVzdGlvbnMuaHRtbCBhbmQgYmxvZy5odG1sXHJcblxyXG4gICAgbGV0IHdpbmRvd0hlaWdodDtcclxuICAgIGNvbnN0IGVsZW1lbnRWaXNpYmxlID0gMTsgLy9hbmltYXRpb24gd2lsbCBzdGFydCB3aGVuIHRoZSBibG9jayBpcyAxNTBweCBhd2F5IGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQuXHJcbiAgICBjb25zdCBlbGVtZW50VmlzaWJsZUJsb2cgPSAzMDsgLy9hbmltYXRpb24gd2lsbCBzdGFydCB3aGVuIHRoZSBibG9jayBpcyAxNTBweCBhd2F5IGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQuXHJcbiAgICBsZXQgc2Nyb2xsRWxlbWVudHM7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzX193cmFwcGVyLWZvci1pdGVtX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKTsgLy9zdGFydCBieSBzZWxlY3RpbmcgYWxsIHRoZSBibG9ja1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2sgXHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2sgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93SGVpZ2h0KCkge1xyXG4gICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDsgLy93aW5kb3dIZWlnaHQgZ2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCAoaW5uZXJIZWlnaHQpXHJcbiAgICB9XHJcbiAgICBnZXRXaW5kb3dIZWlnaHQoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRXaW5kb3dIZWlnaHQpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhcHBlYXJFbGVtZW50KGFyZykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2Nyb2xsRWxlbWVudHMpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb3AgPSArc2Nyb2xsRWxlbWVudHNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLnRvRml4ZWQoMik7IC8vY2FsY3VsYXRlcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCB0byB0aGUgdG9wIG9mIHRoZSBibG9ja1xyXG5cclxuICAgICAgICAgICAgaWYgKGFyZyA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFRvcCA8IHdpbmRvd0hlaWdodCAtIGVsZW1lbnRWaXNpYmxlQmxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVFbGVtZW50c09uU2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50VG9wIDwgd2luZG93SGVpZ2h0IC0gZWxlbWVudFZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxFbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZUVsZW1lbnRzT25TY3JvbGxcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy9hcHBlYXJFbGVtZW50UmV2aWV3cygpO1xyXG4gICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBhcHBlYXJFbGVtZW50UmV2aWV3cyk7XHJcblxyXG4gICAgZnVuY3Rpb24gc21vb3RoKCkge1xyXG5cclxuICAgICAgICAvL1dlIGNhbGN1bGF0ZSBvdXIgY29udGFpbmVyIHBvc2l0aW9uIGJ5IGxpbmVhciBpbnRlcnBvbGF0aW9uIG1ldGhvZFxyXG4gICAgICAgIGJsb2NrUG9zWSA9IGxpbmVhcihibG9ja1Bvc1ksIHNjclBvc1ksIHNwZWVkQW5pbSkgLy9jYWxjdWxhdGUgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciBwb3NpdGlvbiBieSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBtZXRob2RcclxuXHJcbiAgICAgICAgYmxvY2tQb3NZID0gTWF0aC5mbG9vcihibG9ja1Bvc1kgKiAxMDApIC8gMTAwO1xyXG5cclxuXHJcbiAgICAgICAgZm9yU21vb3RoU2Nyb2xsV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtJHtibG9ja1Bvc1l9cHgsIDBweClgKTtcclxuXHJcblxyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aCk7XHJcbiAgICAgICAgLy9hbmltYXRlIGVsZW1lbnQgcmV2aWV3cy5odG1sIGFuZCBxdWVzdGlvbnMuaHRtbFxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbGluZWFyKGFyZzEsIGFyZzIsIGFyZzMpIHtcclxuICAgICAgICByZXR1cm4gKDEgLSBhcmczKSAqIGFyZzEgKyBhcmczICogYXJnMjtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vc3BsaXQgdHh0XHJcbmNvbnN0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDInKVxyXG5cclxuXHJcbmxldCBzdHJpbmdIO1xyXG5sZXQgYXJyYXlMZXR0ZXJzSCA9IFtdO1xyXG5cclxuaWYgKGgyICE9IG51bGwpIHtcclxuICAgIGlmIChoMi5pZCA9PSAnaDJjYXRhbG9nTWFpblBhZ2UnKSB7XHJcbiAgICAgICAgbGV0IHRtcEFkYXB0aXZlSDI7XHJcbiAgICAgICAgaDJjYXRhbG9nTWFpblBhZ2VBZGFwdGl2ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaDJjYXRhbG9nTWFpblBhZ2VBZGFwdGl2ZSgpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTgwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG1wQWRhcHRpdmVIMiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQWRhcHRpdmVIMiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMCcpICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1ODApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0bXBBZGFwdGl2ZUgyICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBBZGFwdGl2ZUgyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzKGgyLCAyLCAyLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaDIuaWQgPT0gJ2gyYXJ0aWNsZU9yVmlkZW8nKSB7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGluZ1dyYXBwZXJzKGgyLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy9hcmcxID0gaDEgb3IgaDJbaV1cclxuLy9hcmcyID0gYW1vdW50IGxpbmVzXHJcbi8vYXJnMyA9IGFtb3VudCB3b3JkcyBpbiAxIGxpbmVcclxuLy9hcmc0ID0gYW1vdW50IHdvcmRzIGluIDIgbGluZVxyXG4vL2FyZzUgPSBhbW91bnQgd29yZHMgaW4gMyBsaW5lXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRpbmdXcmFwcGVycyhhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1LCBhcmc2LCBhcmc3KSB7XHJcblxyXG4gICAgLy9mb3IgYWRhcHRpdmVcclxuICAgIC8vY29uc29sZS5sb2coYXJnMSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUpXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFyZzEuY2hpbGROb2Rlcykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coaXRlbSlcclxuICAgIH1cclxuICAgIGlmIChhcmcxLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUgPT0gJ0RJVicpIHsgLy9jaGVja3MgaWYgaDIgaXMgc3BsaXQgaW50byBsZXR0ZXJzXHJcbiAgICAgICAgbGV0IHRtcFdvcmQgPSBhcmcxLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyRm9yV29yZCcpOyAvL3Rha2VzIGFsbCB0aGUgd29yZHNcclxuICAgICAgICBsZXQgdG1wQXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0bXBXb3JkLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdG1wV29yZFtpXS5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlclN5bWJvbCcpOyAvL3Rha2VzIGFsbCBjaGFyYWN0ZXJzIGluIGVhY2ggd29yZFxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNoYXIubGVuZ3RoOyArK3kpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hhclt5XS5pbm5lckhUTUwpICAgXHJcbiAgICAgICAgICAgICAgICB0bXBBcnIucHVzaChjaGFyW3ldLmlubmVySFRNTCk7IC8v0YFoYXIgcHV0cyBpbnRvIGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZiAoeSA9PSAoY2hhci5sZW5ndGggLSAxKSkgeyAvL2lmIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIHdvcmQsIHRoZW4gaXQgd2lsbCBhZGQgYSBzcGFjZSB0byB0aGUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICB0bXBBcnIucHVzaCgnICcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0bXBBcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXJnMS5pbm5lckhUTUwgPSBcIlwiOyAvL3dpbGwgY2xlYXIgaDJcclxuICAgICAgICBhcmcxLmlubmVySFRNTCA9IHRtcEFyci5qb2luKFwiXCIpOyAvL3RoZSBsaW5lIGNsZWFyZWQgb2Ygd3JhcHBlcnMgd2lsbCBiZSBhZGRlZCB0byBoMlxyXG4gICAgICAgIC8vYXJnMS5hcHBlbmQodG1wQXJyLmpvaW4oXCJcIikpO1xyXG4gICAgfVxyXG4gICAgLyppZihhcmcxLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5lJykpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ3JycnJycnJyJylcclxuICAgIH0qL1xyXG5cclxuICAgIHN0cmluZ0ggPSBhcmcxLmlubmVySFRNTDsgLy90aGUgY29udGVudCBvZiB0aGUgZWxlbWVudCAoc3RyaW5nKSBpcyBwdXQgaW50byBhIHZhcmlhYmxlXHJcbiAgICBhcmcxLmlubmVySFRNTCA9ICcnOyAvL3plcm9pbmcgY29udGVudCB0byBhZGQgd3JhcHBlcnMgd2l0aCBjb250ZW50XHJcbiAgICBhcnJheUxldHRlcnNIID0gW10gLy9hcnJheSB6ZXJvaW5nID8/PyBpdCBzZWVtcyB0byBiZSByZXNldCB0byB6ZXJvIGFyb3VuZCBsaW5lIDIwOSA/Pz9cclxuICAgIGZvciAobGV0IGNoYXIgb2Ygc3RyaW5nSCkgeyAvL3RoZSBzdHJpbmcgaXMgc3BsaXQgaW50byBjaGFyYWN0ZXJzIGFuZCBhZGRlZCB0byB0aGUgYXJyYXlcclxuICAgICAgICBhcnJheUxldHRlcnNILnB1c2goY2hhcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvdW50ID0gMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlMZXR0ZXJzSC5sZW5ndGg7ICsraSkgeyAvL2NvdW50IHdvcmRzIGluIGEgbGluZSwgcmVsYXRpdmUgdG8gJyAnXHJcbiAgICAgICAgaWYgKGFycmF5TGV0dGVyc0hbaV0gPT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBsZW5naHRBcnIgPSBhcnJheUxldHRlcnNILmxlbmd0aDtcclxuXHJcbiAgICBpZiAoYXJnMiA9PSAxKSB7IC8vaWYgeW91IG5lZWQgdG8gbWFrZSBhIGxpbmUgaW4gMSBsaW5lXHJcbiAgICAgICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW5nIGEgbGluZSBhbmQgYWRkaW5nIGl0IHRvIGFuIGVsZW1lbnQgKEgxIG9yIEgyKVxyXG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICAgIGFyZzEuYXBwZW5kKGxpbmUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmIChhcmcyID4gMSkgeyAvL2lmIHlvdSBuZWVkIHRvIG1ha2UgYSBsaW5lIGluIDIgbGluZXMgb3IgbW9yZVxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgYXJnMjsgKyt5KSB7IC8vIHkgPCBhcmcyKDMpID0gbWFrZSAzIGxpbmVzIFxyXG4gICAgICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpbmcgYSBsaW5lIGFuZCBhZGRpbmcgaXQgdG8gYW4gZWxlbWVudCAoSDEgb3IgSDIpXHJcbiAgICAgICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICAgICAgICBhcmcxLmFwcGVuZChsaW5lKTtcclxuICAgICAgICAgICAgaWYgKHkgPT0gMCkgeyAvLzFTVCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmczOyArK2kpIHsgLy8gIGkgPCBhcmczKDIpID0gIDIgd29yZHMgaW4gbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gMSkgeyAvLzJORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc0OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc0KDMpID0gIDMgd29yZHMgaW4gbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpIC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gMikgeyAvLzNORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc1OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc1KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAzKSB7IC8vNE5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzY7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzYoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDQpIHsgLy81TkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNzsgKytpKSB7IC8vIC8vICBpIDwgYXJnNygyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGFyZzEpIHtcclxuICAgICAgICAvL2J5IHRoZSB0ZXJtIHdvcmQgYW5kIHN5bWJvbCwgd2UgbWVhbiBhIHdyYXBwZXIgZm9yIGEgd29yZCBhbmQgc3ltYm9sXHJcbiAgICAgICAgbGV0IHdyYXBwZXJGb3JXb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGlvbiBvZiBhIHdvcmRcclxuICAgICAgICB3cmFwcGVyRm9yV29yZC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyRm9yV29yZCcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmdodEFycjsgKyt5KSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJheUxldHRlcnNIWzBdID09IFwiIFwiKSB7IC8vaWYgaXQgZW5jb3VudGVycyBcIiBcIiAtIGl0IHdpbGwgZGVsZXRlIGl0XHJcbiAgICAgICAgICAgICAgICBhcnJheUxldHRlcnNILnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5TGV0dGVyc0hbMF0gPT0gdW5kZWZpbmVkKSBicmVhazsgLy9pZiB0aGUgYXJyYXkgaXMgb3ZlciAtIHN0b3BcclxuICAgICAgICAgICAgbGV0IGRpdkZvclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpb24gb2YgYSBzeW1ib2xcclxuICAgICAgICAgICAgZGl2Rm9yU3ltYm9sLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXJTeW1ib2wnKTtcclxuICAgICAgICAgICAgZGl2Rm9yU3ltYm9sLmlubmVySFRNTCA9IGFycmF5TGV0dGVyc0hbMF07IC8vYWRkaW5nIGEgc3ltYm9sIGZyb20gYW4gYXJyYXkgdG8gYSB3cmFwcGVyKHN5bWJvbClcclxuICAgICAgICAgICAgd3JhcHBlckZvcldvcmQuYXBwZW5kKGRpdkZvclN5bWJvbCk7IC8vYWRkaW5nIGEgc3ltYm9sIHRvIGEgd29yZFxyXG4gICAgICAgICAgICBhcnJheUxldHRlcnNILnNwbGljZSgwLCAxKTsgLy9yZW1vdmUgYWRkZWQgY2hhcmFjdGVyIGZyb20gYXJyYXlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZzEuYXBwZW5kKHdyYXBwZXJGb3JXb3JkKTsgLy9hZGRpbmcgYSB3b3JkIHdpdGggc3ltYm9scyB0byB0aGUgY3JlYXRlZCBsaW5lICh0aGUgbGluZSB3YXMgY3JlYXRlZCBhdCBhYm91dCAxNzUgYW5kIDE4NClcclxuICAgIH1cclxufVxyXG5cclxuLy9oMiBjaGFyIHByZXAgZm9yIGFuaW1cclxuXHJcbmlmIChoMiAhPSBudWxsKSB7XHJcbiAgICBjb25zdCBoMmxpbmUgPSBoMi5xdWVyeVNlbGVjdG9yQWxsKCcubGluZScpXHJcbiAgICBoMmxpbmUuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICBjb25zdCBoMkNoYXIgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyU3ltYm9sJylcclxuICAgICAgICBsZXQgdG1wSDJDaGFyVHJhbnNZID0gMDtcclxuICAgICAgICBmb3IgKGxldCBjaGFyIG9mIGgyQ2hhcikgeyAvL3dpbGwgbWFrZSBhIGxhZGRlclxyXG4gICAgICAgICAgICBjaGFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dG1wSDJDaGFyVHJhbnNZICogMC41fXB4KWA7XHJcbiAgICAgICAgICAgIGNoYXIuc3R5bGUub3BhY2l0eSA9IGAwYDtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFyKVxyXG4gICAgICAgICAgICB0bXBIMkNoYXJUcmFuc1kgKz0gMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhcHBlYXJIMmNoYXJzKCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGgyQ2hhci5sZW5ndGg7ICsraSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoMkNoYXIubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDJDaGFyW2ldLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDBweClgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMkNoYXJbaV0uc3R5bGUub3BhY2l0eSA9IGAxYDtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMCAqIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJz4xMCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMkNoYXJbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoMHB4KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyQ2hhcltpXS5zdHlsZS5vcGFjaXR5ID0gYDFgO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwICogaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnPDEwJylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhcHBlYXJIMmNoYXJzKVxyXG5cclxuICAgIH0pXHJcbiAgICAvL2NvbnNvbGUubG9nKGgyQ2hhcik7XHJcblxyXG59XHJcblxyXG5cclxuIiwiY29uc3QgY29uc2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gLmNvbnNlbnQnKTsgLy90YWtlIGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzIC5jb25zZW50XHJcbmNvbnN0IG1vZGFsUG9saXRpY0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2xpdGljLWFncmVlbWVudC1idXR0b24tY2xvc2UnKTtcclxuY29uc3QgY29uc2VudENoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnNlbnQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcblxyXG4vL3RoZXJlIGlzIGEgZGl2IHdpdGggY2xhc3MgY29uY2VudC4gSW4gY29uc2VudCB0aGVyZSBhcmUgMiBlbGVtZW50cyBpbnB1dCBhbmQgbGFiZWxcclxuLy90aGUgbmV4dCBlbGVtZW50IGFmdGVyIHRoZSBjb25zZW50IGlzIHRoZSBidXR0b24gZWxlbWVudFxyXG5cclxuZm9yKCBsZXQgaXRlbSBvZiBjb25zZW50KXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29sbGVjdGlvbiBlbnVtZXJhdGlvblxyXG4gICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAvL2FkZCBjbGljayBldmVudCB0byBlYWNoIG5leHQgaXRlbShidXR0b24pIGZyb20gdGhlIGNvbGxlY3Rpb25cclxuICAgICAgICBcclxuICAgICAgICBpZiggIWUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jaGVja2VkICl7IC8vaWYgdGhlIGxhYmVsIGlzIG5vdCBpbiB0aGUgY2hlY2tlZCBzdGF0ZVxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiB0aGUgYnV0dG9uIGRvZXMgbm90IHdvcmtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVGhpcyBpcyBuZWNlc3NhcnkgZm9yIHRoZSB1c2VyIHRvIGFncmVlIHRvIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGVybXMgb2YgcGVyc29uYWwgZGF0YSBwcm9jZXNzaW5nIFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5tb2RhbFBvbGl0aWNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc2VudENoZWNrQm94LmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJylcclxuICAgICAgICB9IClcclxufSlcclxuXHJcblxyXG4iLCJsZXQgc2Nyb2xsUGVyY2VudDtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbmlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsLWNvbnRhaW5lcicpKSB7Ly9mb3IgY2FyZC5odG1sXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsUGVyY2VudCgpIHtcclxuICAgICAgICBzY3JvbGxQZXJjZW50ID0gKygod2luZG93LnNjcm9sbFkgLyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1jb250YWluZXJfX3Njcm9sbC1jb250ZW50Jykub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSAqIDEwMCkudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JvbGxQZXJjZW50KVxyXG4gICAgICAgIGlmIChzY3JvbGxQZXJjZW50ID4gNTApIHtcclxuICAgICAgICAgICAgaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFuaW1hdGVGb290ZXJcIiAqLyAnLi9hbmltYXRlRm9vdGVyLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9vdGVyVmlzaWJsZVNjcm9sbCA9IG1vZHVsZS5mb290ZXJWaXNpYmxlU2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgZm9vdGVyVmlzaWJsZVNjcm9sbChzY3JvbGxQZXJjZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRTY3JvbGxQZXJjZW50KTtcclxuXHJcbn0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9yIGFsbFxyXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsUGVyY2VudCgpIHtcclxuICAgICAgICBzY3JvbGxQZXJjZW50ID0gKygod2luZG93LnNjcm9sbFkgLyAoYm9keS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpICogMTAwKS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNjcm9sbFBlcmNlbnQpXHJcbiAgICAgICAgaWYgKHNjcm9sbFBlcmNlbnQgPiA1MCkge1xyXG4gICAgICAgICAgICBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYW5pbWF0ZUZvb3RlclwiICovICcuL2FuaW1hdGVGb290ZXIuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb290ZXJWaXNpYmxlU2Nyb2xsID0gbW9kdWxlLmZvb3RlclZpc2libGVTY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBmb290ZXJWaXNpYmxlU2Nyb2xsKHNjcm9sbFBlcmNlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGdldFNjcm9sbFBlcmNlbnQpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICgoYm9keS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpID09IDApIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkpXHJcbiAgICAgICAgICAgIGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJhbmltYXRlRm9vdGVyXCIgKi8gJy4vYW5pbWF0ZUZvb3Rlci5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3RlclZpc2libGVXaXRob3V0U2Nyb2xsID0gbW9kdWxlLmZvb3RlclZpc2libGVXaXRob3V0U2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgZm9vdGVyVmlzaWJsZVdpdGhvdXRTY3JvbGwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJhbmltYXRlRm9vdGVyXCIgKi8gJy4vYW5pbWF0ZUZvb3Rlci5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZm9vdGVyVmlzaWJsZVdpdGhvdXRTY3JvbGwgPSBtb2R1bGUuZm9vdGVyVmlzaWJsZVdpdGhvdXRTY3JvbGw7XHJcbiAgICAgICAgZm9vdGVyVmlzaWJsZVdpdGhvdXRTY3JvbGwoKTtcclxuICAgIH0pKVxyXG59IiwiY29uc3Qgd2lkZ2V0VHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lkZ2V0X190cmlnZ2VyXCIpO1xyXG53aWRnZXRUcmlnZ2VyLm9uY2xpY2sgPSBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJ3aWRnZXRcIiAqLyAnLi9hbGxTY3JpcHRzL3dpZGdldC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgIGNvbnN0IG9wZW5XaWRnZXQgPSBtb2R1bGUub3BlbldpZGdldDtcclxuICAgIG9wZW5XaWRnZXQoKTtcclxufSk7XHJcblxyXG5jb25zdCBidG5CdXJnZXJoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbmF2X19idXJnZXItd3JhcHBlci1mb3ItbGluZVwiKTtcclxuYnRuQnVyZ2VyaGVhZGVyLm9uY2xpY2sgPSBldmVudGJ0bkJ1cmdlcmhlYWRlciA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaGVhZGVyTmF2QnVyZ2VyVmlld1BvcnRXaWR0aDExMDBweFwiICovICcuL2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyVmlld1BvcnRXaWR0aDExMDBweC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgIGNvbnN0IGhlYWRlck5hdkxpc3REb3duID0gbW9kdWxlLmhlYWRlck5hdkxpc3REb3duO1xyXG4gICAgaGVhZGVyTmF2TGlzdERvd24oZXZlbnRidG5CdXJnZXJoZWFkZXIpO1xyXG59KTtcclxuXHJcbmNvbnN0IGhlYWRlck5hdkFycm93c09wZW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93LXJpZ3RoLXdyYXBwZXInKTtcclxuaGVhZGVyTmF2QXJyb3dzT3Blbkxpc3QuZm9yRWFjaChhcnJvdyA9PiB7XHJcbiAgICBhcnJvdy5vbmNsaWNrID0gZSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaGVhZGVyQXJyb3dPcGVuU3ViTGlzdFZpZXdQb3J0V2lkdGg3MzVweFwiICovICcuL2FsbFNjcmlwdHMvaGVhZGVyQXJyb3dPcGVuU3ViTGlzdFZpZXdQb3J0V2lkdGg3MzVweC5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJOYXZMaXN0T3BlblN1Ykxpc3QgPSBtb2R1bGUuaGVhZGVyTmF2TGlzdE9wZW5TdWJMaXN0O1xyXG4gICAgICAgIGhlYWRlck5hdkxpc3RPcGVuU3ViTGlzdChhcnJvdyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vbW9kYWwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IG9wZW5Nb2RhbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9yT3Blbk1vZGFsXScpO1xyXG4vL2NvbnNvbGUubG9nKG9wZW5Nb2RhbEl0ZW1zWzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1mb3JPcGVuTW9kYWwnKSk7XHJcbm9wZW5Nb2RhbEl0ZW1zLmZvckVhY2gob3Blbk1vZGFsSXRlbSA9PiB7XHJcbiAgICBvcGVuTW9kYWxJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwibW9kYWxcIiAqLyAnLi9hbGxTY3JpcHRzL21vZGFsLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wZW5Nb2RhbCA9IG1vZHVsZS5vcGVuTW9kYWw7XHJcbiAgICAgICAgZm9yIChsZXQgbW9kYWxXaW5kb3cgb2YgbW9kdWxlLmFsbE1vZGFsKSB7XHJcbiAgICAgICAgICAgIGlmIChvcGVuTW9kYWxJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1mb3JPcGVuTW9kYWwnKSA9PSBtb2RhbFdpbmRvdy5pZCkgey8vaWYgdGhlIG9wZW5pbmcgZWxlbWVudCBoYXMgYSBkYXRhLWZvck9wZW5Nb2RhbCBhdHRyaWJ1dGUgdGhhdCBtYXRjaGVzIHRoZSBtb2RhbCB3aW5kb3cncyBpZCwgdGhlbiByZW1vdmUgdGhlICdoaWRlJyBjbGFzcyBmcm9tIHRoYXQgbW9kYWwgd2luZG93XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1vZGFsV2luZG93KVxyXG4gICAgICAgICAgICAgICAgb3Blbk1vZGFsKG1vZHVsZS5tb2RhbCwgbW9kYWxXaW5kb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pKVxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3Bhc3MtZXllLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBleWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV5ZScpO1xyXG5leWVzLmZvckVhY2goZXllID0+IHtcclxuICAgIGV5ZS5vbmNsaWNrID0gZXZlbnRFeWUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhc3MtZXllXCIgKi8gJy4vYWxsU2NyaXB0cy9wYXNzLWV5ZS5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICBjb25zdCBvcGVuQ2xvc2VFeWUgPSBtb2R1bGUub3BlbkNsb3NlRXllO1xyXG4gICAgICAgIG9wZW5DbG9zZUV5ZShldmVudEV5ZSk7XHJcbiAgICB9KTtcclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Bob25lTWFzay8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vKlxyXG5jb25zdCBwaG9uZU1hc2tMb2FkZXJCdG5zID0gW29wZW5SZWdpc3RyLCBvcGVuTG9naW4sIG9wZW5DYWxsYmFjaywgd2lkZ2V0T3Blbk1vZGFsXTtcclxucGhvbmVNYXNrTG9hZGVyQnRucy5mb3JFYWNoKGxvYWRlckJ0biA9PiB7XHJcblxyXG4gICAgaWYgKGxvYWRlckJ0bi5sZW5ndGggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbG9hZGVyQnRuLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGltcG9ydCggIHdlYnBhY2tDaHVua05hbWU6IFwiUGhvbmVNYXNrXCIgICcuL2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGhvbmVNYXNrID0gbW9kdWxlLnBob25lTWFzaztcclxuICAgICAgICAgICAgICAgIHBob25lTWFzaygpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9hZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBpbXBvcnQoICB3ZWJwYWNrQ2h1bmtOYW1lOiBcIlBob25lTWFza1wiICAnLi9hbGxTY3JpcHRzL1Bob25lTWFzay5qcycpLnRoZW4obW9kdWxlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGhvbmVNYXNrID0gbW9kdWxlLnBob25lTWFzaztcclxuICAgICAgICAgICAgcGhvbmVNYXNrKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pOyovXHJcbmNvbnN0IHBob25lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInRlbFwiXScpO1xyXG5waG9uZUlucHV0cy5mb3JFYWNoKHBob25lSW5wdXQgPT4ge1xyXG4gICAgcGhvbmVJbnB1dC5vbmZvY3VzID0gZSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiUGhvbmVNYXNrXCIgKi8gJy4vYWxsU2NyaXB0cy9QaG9uZU1hc2suanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGhvbmVNYXNrID0gbW9kdWxlLnBob25lTWFzaztcclxuICAgICAgICBwaG9uZU1hc2soKTtcclxuICAgIH0pO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9PVFAtSW5wdXQtZmllbGQoc21zKS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IG9wZW5Db2RlRnJvbVNtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHb1RvQ29kZUZyb21TbXMnKTtcclxub3BlbkNvZGVGcm9tU21zLm9uZm9jdXMgPSBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJPVFAtSW5wdXQtZmllbGQoc21zKVwiICovICcuL2FsbFNjcmlwdHMvT1RQLUlucHV0LWZpZWxkKHNtcykuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcblxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3RleHRhcmVhR3Jvdy5qcy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBhc2tBUXVlc3Rpb25UZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc2stYS1xdWVzdGlvbl9fcXVlc3Rpb24nKTtcclxuYXNrQVF1ZXN0aW9uVGV4dEFyZWEub25mb2N1cyA9IGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInRleHRhcmVhR3Jvd1wiICovICcuL2FsbFNjcmlwdHMvdGV4dGFyZWFHcm93LmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG5cclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2FuaW1hdGVGb290ZXIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvZ2V0U2Nyb2xsUGVyY2VudC5qcyc7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgKHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnIHx8IHR5cGVvZiBjdXJyZW50ID09ICdmdW5jdGlvbicpICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImxpdmViYWN0ZXJpYS5sb2NhbDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInBsYWNpbmdBbk9yZGVyXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbGl2ZWJhY3RlcmlhX2xvY2FsXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2xpdmViYWN0ZXJpYV9sb2NhbFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiaW1wb3J0ICcuL2FsbFNjcmlwdHMvYW5pbWF0ZUhlYWRlclNlY29uZGFyeU5hdi5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyc7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vc2Vjb25kYXJ5TmF2QXJyb3dMaW5rczU4MC5qcy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1ODApIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGUgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInNlY29uZGFyeU5hdkFycm93TGlua3M1ODBcIiAqLyAnLi9hbGxTY3JpcHRzL3NlY29uZGFyeU5hdkFycm93TGlua3M1ODAuanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ29Ub1ByZXZpb3VzUGFnZSA9IG1vZHVsZS5nb1RvUHJldmlvdXNQYWdlO1xyXG4gICAgICAgIGdvVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH0pKVxyXG5cclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJzZWNvbmRhcnlOYXZBcnJvd0xpbmtzNTgwXCIgKi8gJy4vYWxsU2NyaXB0cy9zZWNvbmRhcnlOYXZBcnJvd0xpbmtzNTgwLmpzJykudGhlbihtb2R1bGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdvVG9QcmV2aW91c1BhZ2UgPSBtb2R1bGUuZ29Ub1ByZXZpb3VzUGFnZTtcclxuICAgICAgICBnb1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICB9KSlcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vaW1wb3J0ICcuL2FsbFNjcmlwdHMvcmFkaW9QZXJzb24uanMnO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9yYWRpb1BlcnNvbi5qcy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgcmFkaW9QZXJzb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmllbGRzZXRfX2l0ZW0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbnJhZGlvUGVyc29uLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogXCJyYWRpb1BlcnNvblwiICovICcuL2FsbFNjcmlwdHMvcmFkaW9QZXJzb24uanMnKS50aGVuKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3dpdGNoaW5nID0gbW9kdWxlLnN3aXRjaGluZztcclxuICAgICAgICBzd2l0Y2hpbmcoaXRlbSk7XHJcbiAgICB9KSlcclxufSlcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2J1dHRvbkZvcm1Db25zZW50Q2hlY2suanMnO1xyXG5pbXBvcnQgJy4vbGF6eVdpZGdldEhlYWRlckJ1cmdlckFycm93c09wZW5MaXN0TW9kYWxQYXNzLWV5ZVBNYXNrU21zVGV4dGFyZWFHcm93QW5pbWF0ZUZvb3Rlci5qcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9