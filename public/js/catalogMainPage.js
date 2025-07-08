/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/allScripts/OTP-Input-field(sms).js":
/*!*******************************************************!*\
  !*** ./src/script/allScripts/OTP-Input-field(sms).js ***!
  \*******************************************************/
/***/ (() => {

//to correctly fill in the fields(inputs) in the modal window (element with class .modal__code-from-sms)
const inputs = document.getElementById("OTPinputs");

inputs.addEventListener("input", function(e) {//when the characters will be entered
    const target = e.target;                  //the field in which the symbol is currently entered
    const val = target.value;                 //the value of this field

    if (isNaN(val)) {        //when entering any character that is not a number, returns an empty string
        target.value = "";      // it won't let you enter anything except numbers
        return;
    }

    if (val != "") {             //if a number is entered, it goes to the next field(input)
        const next = target.nextElementSibling;
        if (next) {
            next.focus();       
        }
    }
});

inputs.addEventListener("keyup", function(e) {
    const target = e.target;                  
    const key = e.key.toLowerCase();        //the numbers you enter will always be in uppercase  

    if (key == "backspace" || key == "delete") {//when a character is deleted, it moves to the previous field
        target.value = "";                      
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});

/***/ }),

/***/ "./src/script/allScripts/PhoneMask.js":
/*!********************************************!*\
  !*** ./src/script/allScripts/PhoneMask.js ***!
  \********************************************/
/***/ (() => {



document.addEventListener('DOMContentLoaded', () => {
    let phoneInputs = document.querySelectorAll('input[data-tel-input]');

    let getInputNumbersValue = function(input) { //prohibition on entering all symbols except numbers
        return input.value.replace(/\D/g, "")
    }

    let onPhoneInput = function(e) {
        let input = e.target,                               //элемент инпут
            inputNumbersValue = getInputNumbersValue(input);//хранятся только числа
        formattedInputValue = "";
        selectionStart = input.selectionStart;//I don't know why

        /*if (!inputNumbersValue) {
            return input.value = "";
        };

        if (input.value.length != selectionStart) {
            console.log('editing midle string', e);
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }*/


        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;//if the first character is 9 then replace it with 7 9

            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";//if the first character is 8 then it will return 8 otherwise it will return +7
            formattedInputValue = firstSymbols + " ";
            if (inputNumbersValue.length > 1) { //if more than 1 character is entered, 
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);//it will add '(' + characters from 2nd to 5th
            }
            if (inputNumbersValue.length >= 5) {//if 5 or more characters are entered
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);//it will add ') ' + characters from 5nd to 8th
            }
            if (inputNumbersValue.length >= 8) {//if 8 or more characters are entered
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);//it will add '-' + characters from 8nd to 10th
            }
            if (inputNumbersValue.length >= 10) {//if 10 or more characters are entered
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);//it will add '-' + characters from 10nd to 12th
            }


        } else {

            formattedInputValue = "+" + inputNumbersValue.substring(0, 16);//it will add '+' + characters from 1st to 12th

        };
        input.value = formattedInputValue;
    };

    let onPhoneInputKeyDown = function(e) {
        console.log(e.keyCode, e.target.value);//key code and input value (   100 - code         '+7 (984) 56' - input value    )
        let input = e.target;
        if (e.keyCode == 8 && getInputNumbersValue(input).length == 1) {//if backspace is entered(keyCode == 8), the input value will be replaced with ''
            input.value = '';
        }
    }

    let onPhonePaste = function(e) {
        let pasted = e.clipboardData || window.clipboardData;//the copied number is stored
        input = e.target;//input stored
        inputNumbersValue = getInputNumbersValue(input);//the input is checked to make sure there are only numbers

        if (pasted) {                                //if there is any data when inserting
            let pastedText = pasted.getData('text');//inserts a value as a string from the copied text
            if (/\D/g.test(pastedText)) {           //checks that there are only numbers
                input.value = inputNumbersValue;
            }
        }
    }

    for (i = 0; i < phoneInputs.length; ++i) {
        let input = phoneInputs[i];
        input.addEventListener('input', onPhoneInput);//on line 10
        input.addEventListener('keydown', onPhoneInputKeyDown);//on line 56
        input.addEventListener('paste', onPhonePaste);//on line 64
    };


})

/***/ }),

/***/ "./src/script/allScripts/Widget.js":
/*!*****************************************!*\
  !*** ./src/script/allScripts/Widget.js ***!
  \*****************************************/
/***/ (() => {

const list = document.querySelector('.widget__ul');
const trigger = document.querySelector('.widget__trigger');
const widget = document.querySelector('.widget__trigger__main');
const cross = document.querySelector('.widget__trigger__cross');

let openWidget = function () {
        if( !list.classList.contains('visibleWidgetlist') ){//scss on line 4349
            list.classList.add('visibleWidgetlist')//the list drops to the top
            widget.classList.add('hidetrigger')   //changes the widget icon to a cross
            cross.classList.remove('hidetrigger')
        }else{
            list.classList.remove('visibleWidgetlist')//the list comes back
            widget.classList.remove('hidetrigger')   
            cross.classList.add('hidetrigger')
        }
};



trigger.addEventListener('click', openWidget);

/***/ }),

/***/ "./src/script/allScripts/animateFooter.js":
/*!************************************************!*\
  !*** ./src/script/allScripts/animateFooter.js ***!
  \************************************************/
/***/ (() => {

const footer = document.querySelector('footer .footer-container');

if (document.querySelector('body').offsetHeight - window.innerHeight == 0) {
    footer.classList.add('footerVisible');
}

let scrollPercent;

function getScrollPercent() {
    //console.log(window.scrollY, 'window.scrollY');
    //console.log(window.innerHeight, 'window.innerHeight');

    //console.log(body.offsetHeight, 'body.offsetHeight');

    scrollPercent = +((window.scrollY / (document.querySelector('body').offsetHeight - window.innerHeight) * 100).toFixed(2));
    

    if (scrollPercent > 95) {
        footer.classList.add('footerVisible');
    } else {
        footer.classList.remove('footerVisible');
    }

}

function visibleFooter() {//if the scroll position is at the very bottom
    if (document.querySelector('body').offsetHeight - window.innerHeight == 0) {
        footer.classList.add('footerVisible');
    } else {
        footer.classList.remove('footerVisible');
    }
}

window.addEventListener('scroll', getScrollPercent);
window.addEventListener('resize', visibleFooter);



/***/ }),

/***/ "./src/script/allScripts/animation.js":
/*!********************************************!*\
  !*** ./src/script/allScripts/animation.js ***!
  \********************************************/
/***/ (() => {

//smooth scroll
const bodyforSmoothScroll = document.querySelector('body');

if (document.querySelector('.forSmoothScroll')) {
    const forSmoothScrollWrapper = document.querySelector('.forSmoothScroll__wrapper');

    //gives the height of the body so that scrolling occurs
    let heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));
    bodyforSmoothScroll.setAttribute('style', `height:${heightForScroll}px`);


    window.addEventListener('resize', alignBody)

    function alignBody() { // script/radioPerson  /  script/categoriesRadio
        heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));
        bodyforSmoothScroll.setAttribute('style', `height:${heightForScroll}px`);
    }

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

    //animate element reviews.html and questions.html

    let windowHeight;
    const elementVisible = 1; //animation will start when the block is 150px away from the bottom of the viewport.
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


    function appearElement() {
        //console.log(scrollElements)
        for (let i = 0; i < scrollElements.length; i++) {
            let elementTop = +scrollElements[i].getBoundingClientRect().top.toFixed(2); //calculates the distance from the top of the viewport to the top of the block

            //If this condition is true, it means the block is within the viewport, and the class reveal, 
            //which has the style changes, is added. If the block is not within the defined 
            //visibility area, the reveal class is removed, reverting the animation.
            if (elementTop < windowHeight - elementVisible) {

                scrollElements[i].classList.add("animateElementsOnScroll");
            } else {
                scrollElements[i].classList.remove("animateElementsOnScroll");
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
            appearElement();
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

console.log(h2);
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
    const h2Char = h2.querySelectorAll('.wrapperSymbol')
    //console.log(h2Char);
    let tmpH2CharTransY = 0;
    for (let char of h2Char) { //will make a ladder
        char.style.transform = `translateY(${tmpH2CharTransY * 0.5}px)`;
        //console.log(char)
        tmpH2CharTransY += 15;
    }
}

/***/ }),

/***/ "./src/script/allScripts/buttonFormConsentCheck.js":
/*!*********************************************************!*\
  !*** ./src/script/allScripts/buttonFormConsentCheck.js ***!
  \*********************************************************/
/***/ (() => {

const consent = document.querySelectorAll('form .consent'); //take all elements with class .consent

//there is a div with class concent. In consent there are 2 elements input and label
//the next element after the consent is the button element

for( let item of consent){                                   //collection enumeration
    item.nextElementSibling.addEventListener('click', (e) => { //add click event to each next item(button) from the collection
        
        if( !e.target.previousElementSibling.childNodes[1].checked ){ //if the label is not in the checked state
            e.preventDefault();                                       // then the button does not work
        }                                                             //This is necessary for the user to agree to the 
                                                                      //terms of personal data processing 
    });
};


/***/ }),

/***/ "./src/script/allScripts/headerNavBurgerOnMediaMax-width1120px.js":
/*!************************************************************************!*\
  !*** ./src/script/allScripts/headerNavBurgerOnMediaMax-width1120px.js ***!
  \************************************************************************/
/***/ (() => {

const btnListDropDown = document.querySelector('.header__nav__burger-wrapper-for-line');
const navMainList = document.querySelector('.header__nav__main-list');
btnListDropDown.addEventListener('click', (e) => {
    console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth <= 1083) {//browser window width
        if (!e.target.classList.contains('cross')) {
            e.target.classList.add('cross');         //when adding a class from sticks makes a cross
            
            navMainList.classList.add('drop-down__header__nav__main-list');//when adding a class, it makes a list drop down
            
        } else {
            e.target.classList.remove('cross')
            
            navMainList.classList.remove('drop-down__header__nav__main-list');
        }
    }
});



/***/ }),

/***/ "./src/script/allScripts/headerNavBurgerOnMediaMax-width735px.js":
/*!***********************************************************************!*\
  !*** ./src/script/allScripts/headerNavBurgerOnMediaMax-width735px.js ***!
  \***********************************************************************/
/***/ (() => {

//drop down header__nav__main-list__item__sub-list and header__nav__main-list__item__sub-list__item__last-list 
const arrowOpenList = document.querySelectorAll('.arrow-rigth-wrapper');
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
});



/***/ }),

/***/ "./src/script/allScripts/modal.js":
/*!****************************************!*\
  !*** ./src/script/allScripts/modal.js ***!
  \****************************************/
/***/ (() => {

//begin //elements for opening modal windows
const openRegistr = document.querySelector('.header__items__shopping-card');
const openCallback = document.querySelector('.header__items__call');
const openLogin = document.querySelector('.header__items__authorization');
const openForgotYourPassword = document.querySelector('#GoToForgot-your-password');
const openGoToLogin = document.querySelectorAll('.goToLogin');
const openGoToRegistr = document.querySelector('#GoToRegistr');
const openCodeFromSms = document.querySelector('#GoToCodeFromSms');
const openNewPassword = document.querySelector('#GoToNewPassword');
const contactOpenModalQuestion = document.querySelector('.modalquestion');//for contacts.html
const widgetOpenModal = document.querySelectorAll('.widget-open-modal'); //in the widget, third item from the top
//end

//begin //modal windows
const modal = document.querySelector('.modal');
const login = document.querySelector('.modal__login');
const registr = document.querySelector('.modal__registr');
const forgotYourPassword = document.querySelector('.modal__forgot-your-password');
const codeFromSms = document.querySelector('.modal__code-from-sms');
const newPassword = document.querySelector('.modal__new-password');
const callback = document.querySelector('.modal__callback');
const askAQuestion = document.querySelector('.modal__ask-a-question');
//end

//begin  //close modal windows
const close = document.querySelectorAll(".modal__close");
//end

//begin //everything related to privacy policy
const politics = document.querySelector('.modal-politics');
const openPolitics = document.querySelectorAll('.goToPolitics');
const closePolitics = document.querySelector('.modal-politics__close');
const closeBtnPolitics = document.querySelector('.politic-button-close');
//end

//modal.style.height = `${modal.parentElement.offsetHeight}px`;//for textareaGrow.js




//const openModalReview = document.querySelector('.card-rewiews__leave-feedback');
//const modalReview = document.querySelector('.modal__review');




function openModal(modal, item) {//parameter modal == on line 15 / parameter item == login or registr and etc. on line 16
    if (navigator.userAgent.indexOf("Firefox") != -1) { //for textareaGrow.js to work in Firefox browser
         if(item.classList.contains('modal__ask-a-question')){
            item.querySelector('textarea').setAttribute("Cols", `24`);
            
         }
     } 
    modal.classList.remove('hide');
    item.classList.remove('hide');

};

function closeModal(e) {//if you click on something other than a modal window, it will close the modal window
    if (e.target == modal) {
        modal.classList.add('hide');
        registr.classList.add('hide');
        callback.classList.add('hide');
        login.classList.add('hide');
        forgotYourPassword.classList.add('hide');
        codeFromSms.classList.add('hide');
        newPassword.classList.add('hide');
        askAQuestion.classList.add('hide');
        //modalReview.classList.add('hide');

    } else if (e.target == politics) {
        politics.classList.add('hide-politics');
    }
};

function closebtn(e) {//closes modal window when clicking on btn
    if (e.target == closePolitics || e.target == closeBtnPolitics) {
        politics.classList.add('hide-politics');
    } else {
        modal.classList.add('hide');
        registr.classList.add('hide');
        callback.classList.add('hide');
        login.classList.add('hide');
        forgotYourPassword.classList.add('hide');
        codeFromSms.classList.add('hide');
        newPassword.classList.add('hide');
        askAQuestion.classList.add('hide');
        //modalReview.classList.add('hide');
    }

};

function closeСurrentOpenLink(close, open) {//close one modal window and open another
    close.classList.add('hide');
    open.classList.remove('hide');
}


function closeСurrentOpenlogin(e) {//(e) == openGoToLogin == element with class .goToLogin, closest(".modal__block") is set on this element.
    e.target.closest(".modal__block").classList.add('hide');//when clicking on an element with the class .goToLogin, 
    login.classList.remove('hide');                         //it will go through all elements including parents up to the root element until 
                                                            //it finds an element with the class .modal__block, stop, and add the class .hide to this element
}

function openModalPolitics() {
    politics.classList.remove('hide-politics');
}


openRegistr.addEventListener('click', () => openModal(modal, registr));//on line 47
openCallback.addEventListener('click', () => openModal(modal, callback));
openLogin.addEventListener('click', () => openModal(modal, login));
widgetOpenModal[0].addEventListener('click', () => openModal(modal, callback));
widgetOpenModal[1].addEventListener('click', () => openModal(modal, askAQuestion));

window.addEventListener('click', closeModal);
close.forEach((element) => { element.addEventListener('click', closebtn) });//on line 59

openGoToLogin.forEach((item) => { item.addEventListener('click', closeСurrentOpenlogin) });

openForgotYourPassword.addEventListener('click', () => closeСurrentOpenLink(login, forgotYourPassword));//on line 93
openGoToRegistr.addEventListener('click', () => closeСurrentOpenLink(login, registr));
openCodeFromSms.addEventListener('click', () => closeСurrentOpenLink(forgotYourPassword, codeFromSms));
openNewPassword.addEventListener('click', () => closeСurrentOpenLink(codeFromSms, newPassword));

openPolitics.forEach((item) => {//on line 105
    item.addEventListener('click', openModalPolitics);
});
closePolitics.addEventListener('click', closebtn);   //on line 59
closeBtnPolitics.addEventListener('click', closebtn);//on line 59  


if( contactOpenModalQuestion ){
    contactOpenModalQuestion.addEventListener('click', () => openModal(modal, askAQuestion));
};

//openModalReview.addEventListener('click', () => openModal(modal, modalReview));




/***/ }),

/***/ "./src/script/allScripts/pass-eye.js":
/*!*******************************************!*\
  !*** ./src/script/allScripts/pass-eye.js ***!
  \*******************************************/
/***/ (() => {

//let password = document.querySelectorAll('.hide-show-password'); // for ver. 1
let eye = document.querySelectorAll('.eye');
const btnPassCheck = document.querySelector('#password-check');
let messagePassMismatch = document.querySelector('.passwords-do-not-match');
let twoInputPass = document.querySelectorAll('.passCheck');




function open(e) {

    //ver.1 This version of the code hid/showed the password for all inputs when clicking on the eye

    /*password.forEach((item) => {
        if (item.type == 'password') {
            item.type = 'text';
            eye.forEach((elem) => {
                elem.classList.remove('hide-eye')
            });
        } else {
            item.type = 'password';
            eye.forEach((elem) => {
                elem.classList.add('hide-eye');
            });
        }
    })  */

    //Now hides/shows only the input that relates to the pressed eye

    if (e.target.previousElementSibling.type == 'password') {//when clicking on the eye if the input is of type 'password'
        e.target.previousElementSibling.type = 'text';       //then replace with type 'text'
        e.target.classList.remove('hide-eye')                //open eye through class removal
    } else {
        e.target.previousElementSibling.type = 'password';//otherwise assign the type 'password' (replaces symbols with dots)
        e.target.classList.add('hide-eye');               //and will close the eye as a result of adding the class
    }

};

eye.forEach((elem) => {
    elem.addEventListener('click', open);
});


btnPassCheck.addEventListener('click', function(e) {
    if (!(twoInputPass[0].value == twoInputPass[1].value)) { //if the value of the first field does not match the value of the second field
        e.preventDefault();                                  //then prevent the form from being submitted
        messagePassMismatch.innerHTML = 'Несовпадение паролей';//and will display a message about the password mismatch
    };

});

twoInputPass.forEach((item) => {          //with each new entry it will delete the message about password mismatch
    item.addEventListener('input', () => {
        if (messagePassMismatch.innerHTML) {
            messagePassMismatch.innerHTML = '';
        };
    });
});

/***/ }),

/***/ "./src/script/allScripts/secondaryNavArrowLinks320.js":
/*!************************************************************!*\
  !*** ./src/script/allScripts/secondaryNavArrowLinks320.js ***!
  \************************************************************/
/***/ (() => {

//to go to the previous page by navigation
document.addEventListener("DOMContentLoaded", () => {

let allLiSecondNav = document.querySelectorAll('.secondary-nav li');

//takes the link address from the previous element and puts it into the arrow link of the last element
let linkAdress = allLiSecondNav[(allLiSecondNav.length - 2)].childNodes[0].getAttribute('href');

allLiSecondNav[(allLiSecondNav.length - 1)].childNodes[1].setAttribute('href', linkAdress);

});








/***/ }),

/***/ "./src/script/allScripts/textareaGrow.js":
/*!***********************************************!*\
  !*** ./src/script/allScripts/textareaGrow.js ***!
  \***********************************************/
/***/ (() => {

const modalAsk = document.querySelector('.modal__ask-a-question');
const askTextarea = document.querySelector('#ask-a-question__question');
const parentAskTextarea = askTextarea.parentElement;
//console.log(parentAskTextarea);
let initialWidthAskTextarea = +(window.getComputedStyle(askTextarea).getPropertyValue("width").slice(0, -2));//the initial width of the textarea is taken
//console.log(initialWidthAskTextarea);

//width and height restrictions at approximately line 938(scss)

askTextarea.addEventListener('input', (e) => {
    //console.log(askTextarea.scrollHeight)
    if (window.innerWidth > 580) {
        if (e.inputType == 'insertText' && askTextarea.value.length > 26 && askTextarea.value.length < 54) {
            askTextarea.style.width = `${askTextarea.clientWidth += 10}px`; //if the number of entered characters matches the conditions above, the textarea will grow in width by 10px after each input
        } else if (e.inputType == 'deleteContentBackward' && askTextarea.value.length > 26 && askTextarea.value.length < 54 && askTextarea.clientWidth > initialWidthAskTextarea) {
            askTextarea.style.width = `${askTextarea.clientWidth -= 5}px`;//if there is a deletion of characters, the textarea will shrink
        } else if (e.inputType == 'deleteContentBackward' && askTextarea.value.length <= 25) {
            askTextarea.style.width = `${initialWidthAskTextarea}px`;//adjust textarea width to initial value
        }
            
        console.log(e.data);
        if (e.data != null && e.data.length > 1) {//if the entire review is inserted / e.data != null -> null = when pressing enter or backspace
            askTextarea.style.width = '500px';
        } else if (askTextarea.value.length < 1) {//if all text is deleted at once
            askTextarea.style.width = `${initialWidthAskTextarea}px`;
        }

        if (askTextarea.value.length > 26) {//rearrange elements when textarea grows
            parentAskTextarea.classList.add('textarea-column')
            modalAsk.classList.add('modal__ask-a-question-big-ask')
        } else {
            parentAskTextarea.classList.remove('textarea-column')
            modalAsk.classList.remove('modal__ask-a-question-big-ask')
        }
    }

    askTextarea.style.height = "auto";  //textarea height growth
    askTextarea.style.height = askTextarea.scrollHeight + "px";// 
})

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***************************************!*\
  !*** ./src/script/catalogMainPage.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allScripts_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allScripts/animation.js */ "./src/script/allScripts/animation.js");
/* harmony import */ var _allScripts_animation_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allScripts_animation_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width1120px_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allScripts/headerNavBurgerOnMediaMax-width1120px.js */ "./src/script/allScripts/headerNavBurgerOnMediaMax-width1120px.js");
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width1120px_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_allScripts_headerNavBurgerOnMediaMax_width1120px_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width735px_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allScripts/headerNavBurgerOnMediaMax-width735px.js */ "./src/script/allScripts/headerNavBurgerOnMediaMax-width735px.js");
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width735px_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_allScripts_headerNavBurgerOnMediaMax_width735px_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _allScripts_secondaryNavArrowLinks320_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allScripts/secondaryNavArrowLinks320.js */ "./src/script/allScripts/secondaryNavArrowLinks320.js");
/* harmony import */ var _allScripts_secondaryNavArrowLinks320_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_allScripts_secondaryNavArrowLinks320_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allScripts/Widget.js */ "./src/script/allScripts/Widget.js");
/* harmony import */ var _allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _allScripts_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allScripts/modal.js */ "./src/script/allScripts/modal.js");
/* harmony import */ var _allScripts_modal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_allScripts_modal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allScripts/pass-eye.js */ "./src/script/allScripts/pass-eye.js");
/* harmony import */ var _allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allScripts/PhoneMask.js */ "./src/script/allScripts/PhoneMask.js");
/* harmony import */ var _allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./allScripts/OTP-Input-field(sms).js */ "./src/script/allScripts/OTP-Input-field(sms).js");
/* harmony import */ var _allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./allScripts/textareaGrow.js */ "./src/script/allScripts/textareaGrow.js");
/* harmony import */ var _allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./allScripts/buttonFormConsentCheck.js */ "./src/script/allScripts/buttonFormConsentCheck.js");
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./allScripts/animateFooter.js */ "./src/script/allScripts/animateFooter.js");
/* harmony import */ var _allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_11__);












})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUNsRDtBQUNBLFVBQVUsd0NBQXdDO0FBQ2xELHlDQUF5Qyx3QkFBd0I7QUFDakU7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0RBQStEO0FBQy9ELENBQUMsQzs7Ozs7O1VDdENEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDNEI7QUFDRDtBQUNYO0FBQ25CO0FBQ0Q7QUFDRztBQUNDO0FBQ1c7QUFDUjtBQUNVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL09UUC1JbnB1dC1maWVsZChzbXMpLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9QaG9uZU1hc2suanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL1dpZGdldC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYW5pbWF0ZUZvb3Rlci5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9idXR0b25Gb3JtQ29uc2VudENoZWNrLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoMTEyMHB4LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoNzM1cHguanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL21vZGFsLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9wYXNzLWV5ZS5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvc2Vjb25kYXJ5TmF2QXJyb3dMaW5rczMyMC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvdGV4dGFyZWFHcm93LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2NhdGFsb2dNYWluUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RvIGNvcnJlY3RseSBmaWxsIGluIHRoZSBmaWVsZHMoaW5wdXRzKSBpbiB0aGUgbW9kYWwgd2luZG93IChlbGVtZW50IHdpdGggY2xhc3MgLm1vZGFsX19jb2RlLWZyb20tc21zKVxyXG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk9UUGlucHV0c1wiKTtcclxuXHJcbmlucHV0cy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24oZSkgey8vd2hlbiB0aGUgY2hhcmFjdGVycyB3aWxsIGJlIGVudGVyZWRcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgICAgICAgICAgICAgICAgIC8vdGhlIGZpZWxkIGluIHdoaWNoIHRoZSBzeW1ib2wgaXMgY3VycmVudGx5IGVudGVyZWRcclxuICAgIGNvbnN0IHZhbCA9IHRhcmdldC52YWx1ZTsgICAgICAgICAgICAgICAgIC8vdGhlIHZhbHVlIG9mIHRoaXMgZmllbGRcclxuXHJcbiAgICBpZiAoaXNOYU4odmFsKSkgeyAgICAgICAgLy93aGVuIGVudGVyaW5nIGFueSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgYSBudW1iZXIsIHJldHVybnMgYW4gZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCJcIjsgICAgICAvLyBpdCB3b24ndCBsZXQgeW91IGVudGVyIGFueXRoaW5nIGV4Y2VwdCBudW1iZXJzXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWwgIT0gXCJcIikgeyAgICAgICAgICAgICAvL2lmIGEgbnVtYmVyIGlzIGVudGVyZWQsIGl0IGdvZXMgdG8gdGhlIG5leHQgZmllbGQoaW5wdXQpXHJcbiAgICAgICAgY29uc3QgbmV4dCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgICAgbmV4dC5mb2N1cygpOyAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuaW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDsgICAgICAgICAgICAgICAgICBcclxuICAgIGNvbnN0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7ICAgICAgICAvL3RoZSBudW1iZXJzIHlvdSBlbnRlciB3aWxsIGFsd2F5cyBiZSBpbiB1cHBlcmNhc2UgIFxyXG5cclxuICAgIGlmIChrZXkgPT0gXCJiYWNrc3BhY2VcIiB8fCBrZXkgPT0gXCJkZWxldGVcIikgey8vd2hlbiBhIGNoYXJhY3RlciBpcyBkZWxldGVkLCBpdCBtb3ZlcyB0byB0aGUgcHJldmlvdXMgZmllbGRcclxuICAgICAgICB0YXJnZXQudmFsdWUgPSBcIlwiOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBwcmV2ID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgaWYgKHByZXYpIHtcclxuICAgICAgICAgICAgcHJldi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn0pOyIsIlxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGxldCBwaG9uZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2RhdGEtdGVsLWlucHV0XScpO1xyXG5cclxuICAgIGxldCBnZXRJbnB1dE51bWJlcnNWYWx1ZSA9IGZ1bmN0aW9uKGlucHV0KSB7IC8vcHJvaGliaXRpb24gb24gZW50ZXJpbmcgYWxsIHN5bWJvbHMgZXhjZXB0IG51bWJlcnNcclxuICAgICAgICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9uUGhvbmVJbnB1dCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSBlLnRhcmdldCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/RjdC70LXQvNC10L3RgiDQuNC90L/Rg9GCXHJcbiAgICAgICAgICAgIGlucHV0TnVtYmVyc1ZhbHVlID0gZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpOy8v0YXRgNCw0L3Rj9GC0YHRjyDRgtC+0LvRjNC60L4g0YfQuNGB0LvQsFxyXG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7Ly9JIGRvbid0IGtub3cgd2h5XHJcblxyXG4gICAgICAgIC8qaWYgKCFpbnB1dE51bWJlcnNWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXRpbmcgbWlkbGUgc3RyaW5nJywgZSk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSovXHJcblxyXG5cclxuICAgICAgICBpZiAoW1wiN1wiLCBcIjhcIiwgXCI5XCJdLmluZGV4T2YoaW5wdXROdW1iZXJzVmFsdWVbMF0pID4gLTEpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlWzBdID09IFwiOVwiKSBpbnB1dE51bWJlcnNWYWx1ZSA9IFwiN1wiICsgaW5wdXROdW1iZXJzVmFsdWU7Ly9pZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIDkgdGhlbiByZXBsYWNlIGl0IHdpdGggNyA5XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlyc3RTeW1ib2xzID0gKGlucHV0TnVtYmVyc1ZhbHVlWzBdID09IFwiOFwiKSA/IFwiOFwiIDogXCIrN1wiOy8vaWYgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyA4IHRoZW4gaXQgd2lsbCByZXR1cm4gOCBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gKzdcclxuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGZpcnN0U3ltYm9scyArIFwiIFwiO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID4gMSkgeyAvL2lmIG1vcmUgdGhhbiAxIGNoYXJhY3RlciBpcyBlbnRlcmVkLCBcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDEsIDQpOy8vaXQgd2lsbCBhZGQgJygnICsgY2hhcmFjdGVycyBmcm9tIDJuZCB0byA1dGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDUpIHsvL2lmIDUgb3IgbW9yZSBjaGFyYWN0ZXJzIGFyZSBlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoNCwgNyk7Ly9pdCB3aWxsIGFkZCAnKSAnICsgY2hhcmFjdGVycyBmcm9tIDVuZCB0byA4dGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDgpIHsvL2lmIDggb3IgbW9yZSBjaGFyYWN0ZXJzIGFyZSBlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg3LCA5KTsvL2l0IHdpbGwgYWRkICctJyArIGNoYXJhY3RlcnMgZnJvbSA4bmQgdG8gMTB0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gMTApIHsvL2lmIDEwIG9yIG1vcmUgY2hhcmFjdGVycyBhcmUgZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpOy8vaXQgd2lsbCBhZGQgJy0nICsgY2hhcmFjdGVycyBmcm9tIDEwbmQgdG8gMTJ0aFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiK1wiICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDAsIDE2KTsvL2l0IHdpbGwgYWRkICcrJyArIGNoYXJhY3RlcnMgZnJvbSAxc3QgdG8gMTJ0aFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IG9uUGhvbmVJbnB1dEtleURvd24gPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5rZXlDb2RlLCBlLnRhcmdldC52YWx1ZSk7Ly9rZXkgY29kZSBhbmQgaW5wdXQgdmFsdWUgKCAgIDEwMCAtIGNvZGUgICAgICAgICAnKzcgKDk4NCkgNTYnIC0gaW5wdXQgdmFsdWUgICAgKVxyXG4gICAgICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gOCAmJiBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCkubGVuZ3RoID09IDEpIHsvL2lmIGJhY2tzcGFjZSBpcyBlbnRlcmVkKGtleUNvZGUgPT0gOCksIHRoZSBpbnB1dCB2YWx1ZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggJydcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9uUGhvbmVQYXN0ZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcGFzdGVkID0gZS5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhOy8vdGhlIGNvcGllZCBudW1iZXIgaXMgc3RvcmVkXHJcbiAgICAgICAgaW5wdXQgPSBlLnRhcmdldDsvL2lucHV0IHN0b3JlZFxyXG4gICAgICAgIGlucHV0TnVtYmVyc1ZhbHVlID0gZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpOy8vdGhlIGlucHV0IGlzIGNoZWNrZWQgdG8gbWFrZSBzdXJlIHRoZXJlIGFyZSBvbmx5IG51bWJlcnNcclxuXHJcbiAgICAgICAgaWYgKHBhc3RlZCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhbnkgZGF0YSB3aGVuIGluc2VydGluZ1xyXG4gICAgICAgICAgICBsZXQgcGFzdGVkVGV4dCA9IHBhc3RlZC5nZXREYXRhKCd0ZXh0Jyk7Ly9pbnNlcnRzIGEgdmFsdWUgYXMgYSBzdHJpbmcgZnJvbSB0aGUgY29waWVkIHRleHRcclxuICAgICAgICAgICAgaWYgKC9cXEQvZy50ZXN0KHBhc3RlZFRleHQpKSB7ICAgICAgICAgICAvL2NoZWNrcyB0aGF0IHRoZXJlIGFyZSBvbmx5IG51bWJlcnNcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IHBob25lSW5wdXRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gcGhvbmVJbnB1dHNbaV07XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvblBob25lSW5wdXQpOy8vb24gbGluZSAxMFxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvblBob25lSW5wdXRLZXlEb3duKTsvL29uIGxpbmUgNTZcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGhvbmVQYXN0ZSk7Ly9vbiBsaW5lIDY0XHJcbiAgICB9O1xyXG5cclxuXHJcbn0pIiwiY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3VsJyk7XHJcbmNvbnN0IHRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0X190cmlnZ2VyJyk7XHJcbmNvbnN0IHdpZGdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3RyaWdnZXJfX21haW4nKTtcclxuY29uc3QgY3Jvc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0X190cmlnZ2VyX19jcm9zcycpO1xyXG5cclxubGV0IG9wZW5XaWRnZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoICFsaXN0LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZVdpZGdldGxpc3QnKSApey8vc2NzcyBvbiBsaW5lIDQzNDlcclxuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlV2lkZ2V0bGlzdCcpLy90aGUgbGlzdCBkcm9wcyB0byB0aGUgdG9wXHJcbiAgICAgICAgICAgIHdpZGdldC5jbGFzc0xpc3QuYWRkKCdoaWRldHJpZ2dlcicpICAgLy9jaGFuZ2VzIHRoZSB3aWRnZXQgaWNvbiB0byBhIGNyb3NzXHJcbiAgICAgICAgICAgIGNyb3NzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGV0cmlnZ2VyJylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlV2lkZ2V0bGlzdCcpLy90aGUgbGlzdCBjb21lcyBiYWNrXHJcbiAgICAgICAgICAgIHdpZGdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRldHJpZ2dlcicpICAgXHJcbiAgICAgICAgICAgIGNyb3NzLmNsYXNzTGlzdC5hZGQoJ2hpZGV0cmlnZ2VyJylcclxuICAgICAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcbnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuV2lkZ2V0KTsiLCJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXIgLmZvb3Rlci1jb250YWluZXInKTtcclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ID09IDApIHtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXJWaXNpYmxlJyk7XHJcbn1cclxuXHJcbmxldCBzY3JvbGxQZXJjZW50O1xyXG5cclxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGVyY2VudCgpIHtcclxuICAgIC8vY29uc29sZS5sb2cod2luZG93LnNjcm9sbFksICd3aW5kb3cuc2Nyb2xsWScpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJIZWlnaHQsICd3aW5kb3cuaW5uZXJIZWlnaHQnKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGJvZHkub2Zmc2V0SGVpZ2h0LCAnYm9keS5vZmZzZXRIZWlnaHQnKTtcclxuXHJcbiAgICBzY3JvbGxQZXJjZW50ID0gKygod2luZG93LnNjcm9sbFkgLyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDApLnRvRml4ZWQoMikpO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKHNjcm9sbFBlcmNlbnQgPiA5NSkge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB2aXNpYmxlRm9vdGVyKCkgey8vaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBhdCB0aGUgdmVyeSBib3R0b21cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ID09IDApIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZ2V0U2Nyb2xsUGVyY2VudCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB2aXNpYmxlRm9vdGVyKTtcclxuXHJcbiIsIi8vc21vb3RoIHNjcm9sbFxyXG5jb25zdCBib2R5Zm9yU21vb3RoU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JTbW9vdGhTY3JvbGwnKSkge1xyXG4gICAgY29uc3QgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JTbW9vdGhTY3JvbGxfX3dyYXBwZXInKTtcclxuXHJcbiAgICAvL2dpdmVzIHRoZSBoZWlnaHQgb2YgdGhlIGJvZHkgc28gdGhhdCBzY3JvbGxpbmcgb2NjdXJzXHJcbiAgICBsZXQgaGVpZ2h0Rm9yU2Nyb2xsID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZm9yU21vb3RoU2Nyb2xsV3JhcHBlcikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykpO1xyXG4gICAgYm9keWZvclNtb290aFNjcm9sbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoke2hlaWdodEZvclNjcm9sbH1weGApO1xyXG5cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYWxpZ25Cb2R5KVxyXG5cclxuICAgIGZ1bmN0aW9uIGFsaWduQm9keSgpIHsgLy8gc2NyaXB0L3JhZGlvUGVyc29uICAvICBzY3JpcHQvY2F0ZWdvcmllc1JhZGlvXHJcbiAgICAgICAgaGVpZ2h0Rm9yU2Nyb2xsID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZm9yU21vb3RoU2Nyb2xsV3JhcHBlcikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykpO1xyXG4gICAgICAgIGJvZHlmb3JTbW9vdGhTY3JvbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6JHtoZWlnaHRGb3JTY3JvbGx9cHhgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2NyUG9zWSA9IDA7IC8vZm9yIHNjcm9sbCBwb3NpdGlvbnNcclxuICAgIGxldCBibG9ja1Bvc1kgPSBzY3JQb3NZOyAvLyBmb3IgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciBwb3NpdGlvblxyXG4gICAgbGV0IHNwZWVkQW5pbSA9IDAuMDM7IC8vaWYgc3BlZWRBbmltID4gMC4wNyAoMC4xKSBhbmltYXRpb24gaGFwcGVucyBmYXN0ZXJcclxuICAgIC8vaWYgc3BlZWRBbmltIDwgMC4wNyAoMC4wMikgYW5pbWF0aW9uIGlzIHNsb3dlclxyXG5cclxuXHJcbiAgICAvLyBCaW5kIGEgc2Nyb2xsIGZ1bmN0aW9uXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZ2V0c1Njcm9sbFZhbHVlKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0c1Njcm9sbFZhbHVlKCkge1xyXG4gICAgICAgIHNjclBvc1kgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JQb3NZKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGgpO1xyXG5cclxuICAgIC8vYW5pbWF0ZSBlbGVtZW50IHJldmlld3MuaHRtbCBhbmQgcXVlc3Rpb25zLmh0bWxcclxuXHJcbiAgICBsZXQgd2luZG93SGVpZ2h0O1xyXG4gICAgY29uc3QgZWxlbWVudFZpc2libGUgPSAxOyAvL2FuaW1hdGlvbiB3aWxsIHN0YXJ0IHdoZW4gdGhlIGJsb2NrIGlzIDE1MHB4IGF3YXkgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydC5cclxuICAgIGxldCBzY3JvbGxFbGVtZW50cztcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzX193cmFwcGVyLWZvci1pdGVtX19pdGVtXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrXHJcblxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKTsgLy9zdGFydCBieSBzZWxlY3RpbmcgYWxsIHRoZSBibG9jayBcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWFydGljbGUtbWluXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKTsgLy9zdGFydCBieSBzZWxlY3RpbmcgYWxsIHRoZSBibG9jayBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3dIZWlnaHQoKSB7XHJcbiAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyAvL3dpbmRvd0hlaWdodCBnZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0IChpbm5lckhlaWdodClcclxuICAgIH1cclxuICAgIGdldFdpbmRvd0hlaWdodCgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldFdpbmRvd0hlaWdodCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGVhckVsZW1lbnQoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JvbGxFbGVtZW50cylcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50VG9wID0gK3Njcm9sbEVsZW1lbnRzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcC50b0ZpeGVkKDIpOyAvL2NhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcCBvZiB0aGUgdmlld3BvcnQgdG8gdGhlIHRvcCBvZiB0aGUgYmxvY2tcclxuXHJcbiAgICAgICAgICAgIC8vSWYgdGhpcyBjb25kaXRpb24gaXMgdHJ1ZSwgaXQgbWVhbnMgdGhlIGJsb2NrIGlzIHdpdGhpbiB0aGUgdmlld3BvcnQsIGFuZCB0aGUgY2xhc3MgcmV2ZWFsLCBcclxuICAgICAgICAgICAgLy93aGljaCBoYXMgdGhlIHN0eWxlIGNoYW5nZXMsIGlzIGFkZGVkLiBJZiB0aGUgYmxvY2sgaXMgbm90IHdpdGhpbiB0aGUgZGVmaW5lZCBcclxuICAgICAgICAgICAgLy92aXNpYmlsaXR5IGFyZWEsIHRoZSByZXZlYWwgY2xhc3MgaXMgcmVtb3ZlZCwgcmV2ZXJ0aW5nIHRoZSBhbmltYXRpb24uXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9wIDwgd2luZG93SGVpZ2h0IC0gZWxlbWVudFZpc2libGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxFbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZUVsZW1lbnRzT25TY3JvbGxcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxFbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZUVsZW1lbnRzT25TY3JvbGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vYXBwZWFyRWxlbWVudFJldmlld3MoKTtcclxuICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgYXBwZWFyRWxlbWVudFJldmlld3MpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNtb290aCgpIHtcclxuXHJcbiAgICAgICAgLy9XZSBjYWxjdWxhdGUgb3VyIGNvbnRhaW5lciBwb3NpdGlvbiBieSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBtZXRob2RcclxuICAgICAgICBibG9ja1Bvc1kgPSBsaW5lYXIoYmxvY2tQb3NZLCBzY3JQb3NZLCBzcGVlZEFuaW0pIC8vY2FsY3VsYXRlIGZvclNtb290aFNjcm9sbFdyYXBwZXIgcG9zaXRpb24gYnkgbGluZWFyIGludGVycG9sYXRpb24gbWV0aG9kXHJcblxyXG4gICAgICAgIGJsb2NrUG9zWSA9IE1hdGguZmxvb3IoYmxvY2tQb3NZICogMTAwKSAvIDEwMDtcclxuXHJcblxyXG4gICAgICAgIGZvclNtb290aFNjcm9sbFdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLSR7YmxvY2tQb3NZfXB4LCAwcHgpYCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGgpO1xyXG4gICAgICAgIC8vYW5pbWF0ZSBlbGVtZW50IHJldmlld3MuaHRtbCBhbmQgcXVlc3Rpb25zLmh0bWxcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzX193cmFwcGVyLWZvci1pdGVtX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXBwZWFyRWxlbWVudCgpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXBwZWFyRWxlbWVudCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWFydGljbGUtbWluXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXBwZWFyRWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbGluZWFyKGFyZzEsIGFyZzIsIGFyZzMpIHtcclxuICAgICAgICByZXR1cm4gKDEgLSBhcmczKSAqIGFyZzEgKyBhcmczICogYXJnMjtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4vL3NwbGl0IHR4dFxyXG5jb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJylcclxuXHJcblxyXG5sZXQgc3RyaW5nSDtcclxubGV0IGFycmF5TGV0dGVyc0ggPSBbXTtcclxuXHJcbmNvbnNvbGUubG9nKGgyKTtcclxuaWYgKGgyICE9IG51bGwpIHtcclxuICAgIGlmIChoMi5pZCA9PSAnaDJjYXRhbG9nTWFpblBhZ2UnKSB7XHJcbiAgICAgICAgbGV0IHRtcEFkYXB0aXZlSDI7XHJcbiAgICAgICAgaDJjYXRhbG9nTWFpblBhZ2VBZGFwdGl2ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaDJjYXRhbG9nTWFpblBhZ2VBZGFwdGl2ZSgpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTgwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG1wQWRhcHRpdmVIMiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQWRhcHRpdmVIMiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMCcpICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1ODApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0bXBBZGFwdGl2ZUgyICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBBZGFwdGl2ZUgyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzKGgyLCAyLCAyLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaDIuaWQgPT0gJ2gyYXJ0aWNsZU9yVmlkZW8nKSB7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGluZ1dyYXBwZXJzKGgyLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy9hcmcxID0gaDEgb3IgaDJbaV1cclxuLy9hcmcyID0gYW1vdW50IGxpbmVzXHJcbi8vYXJnMyA9IGFtb3VudCB3b3JkcyBpbiAxIGxpbmVcclxuLy9hcmc0ID0gYW1vdW50IHdvcmRzIGluIDIgbGluZVxyXG4vL2FyZzUgPSBhbW91bnQgd29yZHMgaW4gMyBsaW5lXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRpbmdXcmFwcGVycyhhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1LCBhcmc2LCBhcmc3KSB7XHJcblxyXG4gICAgLy9mb3IgYWRhcHRpdmVcclxuICAgIC8vY29uc29sZS5sb2coYXJnMSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUpXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFyZzEuY2hpbGROb2Rlcykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coaXRlbSlcclxuICAgIH1cclxuICAgIGlmIChhcmcxLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUgPT0gJ0RJVicpIHsgLy9jaGVja3MgaWYgaDIgaXMgc3BsaXQgaW50byBsZXR0ZXJzXHJcbiAgICAgICAgbGV0IHRtcFdvcmQgPSBhcmcxLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyRm9yV29yZCcpOyAvL3Rha2VzIGFsbCB0aGUgd29yZHNcclxuICAgICAgICBsZXQgdG1wQXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0bXBXb3JkLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdG1wV29yZFtpXS5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlclN5bWJvbCcpOyAvL3Rha2VzIGFsbCBjaGFyYWN0ZXJzIGluIGVhY2ggd29yZFxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNoYXIubGVuZ3RoOyArK3kpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hhclt5XS5pbm5lckhUTUwpICAgXHJcbiAgICAgICAgICAgICAgICB0bXBBcnIucHVzaChjaGFyW3ldLmlubmVySFRNTCk7IC8v0YFoYXIgcHV0cyBpbnRvIGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZiAoeSA9PSAoY2hhci5sZW5ndGggLSAxKSkgeyAvL2lmIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIHdvcmQsIHRoZW4gaXQgd2lsbCBhZGQgYSBzcGFjZSB0byB0aGUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICB0bXBBcnIucHVzaCgnICcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0bXBBcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXJnMS5pbm5lckhUTUwgPSBcIlwiOyAvL3dpbGwgY2xlYXIgaDJcclxuICAgICAgICBhcmcxLmlubmVySFRNTCA9IHRtcEFyci5qb2luKFwiXCIpOyAvL3RoZSBsaW5lIGNsZWFyZWQgb2Ygd3JhcHBlcnMgd2lsbCBiZSBhZGRlZCB0byBoMlxyXG4gICAgICAgIC8vYXJnMS5hcHBlbmQodG1wQXJyLmpvaW4oXCJcIikpO1xyXG4gICAgfVxyXG4gICAgLyppZihhcmcxLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5lJykpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ3JycnJycnJyJylcclxuICAgIH0qL1xyXG5cclxuICAgIHN0cmluZ0ggPSBhcmcxLmlubmVySFRNTDsgLy90aGUgY29udGVudCBvZiB0aGUgZWxlbWVudCAoc3RyaW5nKSBpcyBwdXQgaW50byBhIHZhcmlhYmxlXHJcbiAgICBhcmcxLmlubmVySFRNTCA9ICcnOyAvL3plcm9pbmcgY29udGVudCB0byBhZGQgd3JhcHBlcnMgd2l0aCBjb250ZW50XHJcbiAgICBhcnJheUxldHRlcnNIID0gW10gLy9hcnJheSB6ZXJvaW5nID8/PyBpdCBzZWVtcyB0byBiZSByZXNldCB0byB6ZXJvIGFyb3VuZCBsaW5lIDIwOSA/Pz9cclxuICAgIGZvciAobGV0IGNoYXIgb2Ygc3RyaW5nSCkgeyAvL3RoZSBzdHJpbmcgaXMgc3BsaXQgaW50byBjaGFyYWN0ZXJzIGFuZCBhZGRlZCB0byB0aGUgYXJyYXlcclxuICAgICAgICBhcnJheUxldHRlcnNILnB1c2goY2hhcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvdW50ID0gMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlMZXR0ZXJzSC5sZW5ndGg7ICsraSkgeyAvL2NvdW50IHdvcmRzIGluIGEgbGluZSwgcmVsYXRpdmUgdG8gJyAnXHJcbiAgICAgICAgaWYgKGFycmF5TGV0dGVyc0hbaV0gPT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBsZW5naHRBcnIgPSBhcnJheUxldHRlcnNILmxlbmd0aDtcclxuXHJcbiAgICBpZiAoYXJnMiA9PSAxKSB7IC8vaWYgeW91IG5lZWQgdG8gbWFrZSBhIGxpbmUgaW4gMSBsaW5lXHJcbiAgICAgICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW5nIGEgbGluZSBhbmQgYWRkaW5nIGl0IHRvIGFuIGVsZW1lbnQgKEgxIG9yIEgyKVxyXG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICAgIGFyZzEuYXBwZW5kKGxpbmUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmIChhcmcyID4gMSkgeyAvL2lmIHlvdSBuZWVkIHRvIG1ha2UgYSBsaW5lIGluIDIgbGluZXMgb3IgbW9yZVxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgYXJnMjsgKyt5KSB7IC8vIHkgPCBhcmcyKDMpID0gbWFrZSAzIGxpbmVzIFxyXG4gICAgICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpbmcgYSBsaW5lIGFuZCBhZGRpbmcgaXQgdG8gYW4gZWxlbWVudCAoSDEgb3IgSDIpXHJcbiAgICAgICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICAgICAgICBhcmcxLmFwcGVuZChsaW5lKTtcclxuICAgICAgICAgICAgaWYgKHkgPT0gMCkgeyAvLzFTVCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmczOyArK2kpIHsgLy8gIGkgPCBhcmczKDIpID0gIDIgd29yZHMgaW4gbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gMSkgeyAvLzJORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc0OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc0KDMpID0gIDMgd29yZHMgaW4gbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpIC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gMikgeyAvLzNORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc1OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc1KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAzKSB7IC8vNE5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzY7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzYoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDQpIHsgLy81TkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNzsgKytpKSB7IC8vIC8vICBpIDwgYXJnNygyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGFyZzEpIHtcclxuICAgICAgICAvL2J5IHRoZSB0ZXJtIHdvcmQgYW5kIHN5bWJvbCwgd2UgbWVhbiBhIHdyYXBwZXIgZm9yIGEgd29yZCBhbmQgc3ltYm9sXHJcbiAgICAgICAgbGV0IHdyYXBwZXJGb3JXb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGlvbiBvZiBhIHdvcmRcclxuICAgICAgICB3cmFwcGVyRm9yV29yZC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyRm9yV29yZCcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmdodEFycjsgKyt5KSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJheUxldHRlcnNIWzBdID09IFwiIFwiKSB7IC8vaWYgaXQgZW5jb3VudGVycyBcIiBcIiAtIGl0IHdpbGwgZGVsZXRlIGl0XHJcbiAgICAgICAgICAgICAgICBhcnJheUxldHRlcnNILnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5TGV0dGVyc0hbMF0gPT0gdW5kZWZpbmVkKSBicmVhazsgLy9pZiB0aGUgYXJyYXkgaXMgb3ZlciAtIHN0b3BcclxuICAgICAgICAgICAgbGV0IGRpdkZvclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpb24gb2YgYSBzeW1ib2xcclxuICAgICAgICAgICAgZGl2Rm9yU3ltYm9sLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXJTeW1ib2wnKTtcclxuICAgICAgICAgICAgZGl2Rm9yU3ltYm9sLmlubmVySFRNTCA9IGFycmF5TGV0dGVyc0hbMF07IC8vYWRkaW5nIGEgc3ltYm9sIGZyb20gYW4gYXJyYXkgdG8gYSB3cmFwcGVyKHN5bWJvbClcclxuICAgICAgICAgICAgd3JhcHBlckZvcldvcmQuYXBwZW5kKGRpdkZvclN5bWJvbCk7IC8vYWRkaW5nIGEgc3ltYm9sIHRvIGEgd29yZFxyXG4gICAgICAgICAgICBhcnJheUxldHRlcnNILnNwbGljZSgwLCAxKTsgLy9yZW1vdmUgYWRkZWQgY2hhcmFjdGVyIGZyb20gYXJyYXlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZzEuYXBwZW5kKHdyYXBwZXJGb3JXb3JkKTsgLy9hZGRpbmcgYSB3b3JkIHdpdGggc3ltYm9scyB0byB0aGUgY3JlYXRlZCBsaW5lICh0aGUgbGluZSB3YXMgY3JlYXRlZCBhdCBhYm91dCAxNzUgYW5kIDE4NClcclxuICAgIH1cclxufVxyXG5cclxuLy9oMiBjaGFyIHByZXAgZm9yIGFuaW1cclxuXHJcbmlmIChoMiAhPSBudWxsKSB7XHJcbiAgICBjb25zdCBoMkNoYXIgPSBoMi5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlclN5bWJvbCcpXHJcbiAgICAvL2NvbnNvbGUubG9nKGgyQ2hhcik7XHJcbiAgICBsZXQgdG1wSDJDaGFyVHJhbnNZID0gMDtcclxuICAgIGZvciAobGV0IGNoYXIgb2YgaDJDaGFyKSB7IC8vd2lsbCBtYWtlIGEgbGFkZGVyXHJcbiAgICAgICAgY2hhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RtcEgyQ2hhclRyYW5zWSAqIDAuNX1weClgO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hhcilcclxuICAgICAgICB0bXBIMkNoYXJUcmFuc1kgKz0gMTU7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBjb25zZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSAuY29uc2VudCcpOyAvL3Rha2UgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3MgLmNvbnNlbnRcclxuXHJcbi8vdGhlcmUgaXMgYSBkaXYgd2l0aCBjbGFzcyBjb25jZW50LiBJbiBjb25zZW50IHRoZXJlIGFyZSAyIGVsZW1lbnRzIGlucHV0IGFuZCBsYWJlbFxyXG4vL3RoZSBuZXh0IGVsZW1lbnQgYWZ0ZXIgdGhlIGNvbnNlbnQgaXMgdGhlIGJ1dHRvbiBlbGVtZW50XHJcblxyXG5mb3IoIGxldCBpdGVtIG9mIGNvbnNlbnQpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb2xsZWN0aW9uIGVudW1lcmF0aW9uXHJcbiAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IC8vYWRkIGNsaWNrIGV2ZW50IHRvIGVhY2ggbmV4dCBpdGVtKGJ1dHRvbikgZnJvbSB0aGUgY29sbGVjdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCAhZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5jaGlsZE5vZGVzWzFdLmNoZWNrZWQgKXsgLy9pZiB0aGUgbGFiZWwgaXMgbm90IGluIHRoZSBjaGVja2VkIHN0YXRlXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIHRoZSBidXR0b24gZG9lcyBub3Qgd29ya1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UaGlzIGlzIG5lY2Vzc2FyeSBmb3IgdGhlIHVzZXIgdG8gYWdyZWUgdG8gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90ZXJtcyBvZiBwZXJzb25hbCBkYXRhIHByb2Nlc3NpbmcgXHJcbiAgICB9KTtcclxufTtcclxuIiwiY29uc3QgYnRuTGlzdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2X19idXJnZXItd3JhcHBlci1mb3ItbGluZScpO1xyXG5jb25zdCBuYXZNYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7XHJcbmJ0bkxpc3REcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xyXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8PSAxMDgzKSB7Ly9icm93c2VyIHdpbmRvdyB3aWR0aFxyXG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Nyb3NzJyk7ICAgICAgICAgLy93aGVuIGFkZGluZyBhIGNsYXNzIGZyb20gc3RpY2tzIG1ha2VzIGEgY3Jvc3NcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5hdk1haW5MaXN0LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bl9faGVhZGVyX19uYXZfX21haW4tbGlzdCcpOy8vd2hlbiBhZGRpbmcgYSBjbGFzcywgaXQgbWFrZXMgYSBsaXN0IGRyb3AgZG93blxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zcycpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYXZNYWluTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wLWRvd25fX2hlYWRlcl9fbmF2X19tYWluLWxpc3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIiwiLy9kcm9wIGRvd24gaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3QgYW5kIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0X19pdGVtX19sYXN0LWxpc3QgXHJcbmNvbnN0IGFycm93T3Blbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3ctcmlndGgtd3JhcHBlcicpO1xyXG5hcnJvd09wZW5MaXN0LmZvckVhY2goKGl0ZW0pID0+IHsvL3doZW4geW91IGNsaWNrIG9uIHRoZSBhcnJvdyBhIGxpc3QgZHJvcCBkb3duXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIWl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnb3Blbi1saXN0JykpIHsvL2l0IHdpbGwgYmUgZWl0aGVyIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0IG9yIGEgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3RfX2l0ZW1fX2xhc3QtbGlzdFxyXG4gICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdvcGVuLWxpc3QnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4tbGlzdCcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhcnJvdy1yaWd0aC13cmFwcGVyLXJvdGF0ZScpKSB7Ly9zcGlucyBieSBhZGRpbmcgYSBjbGFzc1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJylcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIiwiLy9iZWdpbiAvL2VsZW1lbnRzIGZvciBvcGVuaW5nIG1vZGFsIHdpbmRvd3NcclxuY29uc3Qgb3BlblJlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pdGVtc19fc2hvcHBpbmctY2FyZCcpO1xyXG5jb25zdCBvcGVuQ2FsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pdGVtc19fY2FsbCcpO1xyXG5jb25zdCBvcGVuTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pdGVtc19fYXV0aG9yaXphdGlvbicpO1xyXG5jb25zdCBvcGVuRm9yZ290WW91clBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9Gb3Jnb3QteW91ci1wYXNzd29yZCcpO1xyXG5jb25zdCBvcGVuR29Ub0xvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvVG9Mb2dpbicpO1xyXG5jb25zdCBvcGVuR29Ub1JlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub1JlZ2lzdHInKTtcclxuY29uc3Qgb3BlbkNvZGVGcm9tU21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9Db2RlRnJvbVNtcycpO1xyXG5jb25zdCBvcGVuTmV3UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub05ld1Bhc3N3b3JkJyk7XHJcbmNvbnN0IGNvbnRhY3RPcGVuTW9kYWxRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbHF1ZXN0aW9uJyk7Ly9mb3IgY29udGFjdHMuaHRtbFxyXG5jb25zdCB3aWRnZXRPcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2lkZ2V0LW9wZW4tbW9kYWwnKTsgLy9pbiB0aGUgd2lkZ2V0LCB0aGlyZCBpdGVtIGZyb20gdGhlIHRvcFxyXG4vL2VuZFxyXG5cclxuLy9iZWdpbiAvL21vZGFsIHdpbmRvd3NcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuY29uc3QgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2xvZ2luJyk7XHJcbmNvbnN0IHJlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3JlZ2lzdHInKTtcclxuY29uc3QgZm9yZ290WW91clBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19mb3Jnb3QteW91ci1wYXNzd29yZCcpO1xyXG5jb25zdCBjb2RlRnJvbVNtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29kZS1mcm9tLXNtcycpO1xyXG5jb25zdCBuZXdQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fbmV3LXBhc3N3b3JkJyk7XHJcbmNvbnN0IGNhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jYWxsYmFjaycpO1xyXG5jb25zdCBhc2tBUXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Fzay1hLXF1ZXN0aW9uJyk7XHJcbi8vZW5kXHJcblxyXG4vL2JlZ2luICAvL2Nsb3NlIG1vZGFsIHdpbmRvd3NcclxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuLy9lbmRcclxuXHJcbi8vYmVnaW4gLy9ldmVyeXRoaW5nIHJlbGF0ZWQgdG8gcHJpdmFjeSBwb2xpY3lcclxuY29uc3QgcG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcG9saXRpY3MnKTtcclxuY29uc3Qgb3BlblBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvVG9Qb2xpdGljcycpO1xyXG5jb25zdCBjbG9zZVBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXBvbGl0aWNzX19jbG9zZScpO1xyXG5jb25zdCBjbG9zZUJ0blBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvbGl0aWMtYnV0dG9uLWNsb3NlJyk7XHJcbi8vZW5kXHJcblxyXG4vL21vZGFsLnN0eWxlLmhlaWdodCA9IGAke21vZGFsLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDsvL2ZvciB0ZXh0YXJlYUdyb3cuanNcclxuXHJcblxyXG5cclxuXHJcbi8vY29uc3Qgb3Blbk1vZGFsUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtcmV3aWV3c19fbGVhdmUtZmVlZGJhY2snKTtcclxuLy9jb25zdCBtb2RhbFJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcmV2aWV3Jyk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwsIGl0ZW0pIHsvL3BhcmFtZXRlciBtb2RhbCA9PSBvbiBsaW5lIDE1IC8gcGFyYW1ldGVyIGl0ZW0gPT0gbG9naW4gb3IgcmVnaXN0ciBhbmQgZXRjLiBvbiBsaW5lIDE2XHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSAhPSAtMSkgeyAvL2ZvciB0ZXh0YXJlYUdyb3cuanMgdG8gd29yayBpbiBGaXJlZm94IGJyb3dzZXJcclxuICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19hc2stYS1xdWVzdGlvbicpKXtcclxuICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnNldEF0dHJpYnV0ZShcIkNvbHNcIiwgYDI0YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgfSBcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoZSkgey8vaWYgeW91IGNsaWNrIG9uIHNvbWV0aGluZyBvdGhlciB0aGFuIGEgbW9kYWwgd2luZG93LCBpdCB3aWxsIGNsb3NlIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICByZWdpc3RyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBjYWxsYmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgbG9naW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGZvcmdvdFlvdXJQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY29kZUZyb21TbXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIG5ld1Bhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBhc2tBUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIC8vbW9kYWxSZXZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT0gcG9saXRpY3MpIHtcclxuICAgICAgICBwb2xpdGljcy5jbGFzc0xpc3QuYWRkKCdoaWRlLXBvbGl0aWNzJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbG9zZWJ0bihlKSB7Ly9jbG9zZXMgbW9kYWwgd2luZG93IHdoZW4gY2xpY2tpbmcgb24gYnRuXHJcbiAgICBpZiAoZS50YXJnZXQgPT0gY2xvc2VQb2xpdGljcyB8fCBlLnRhcmdldCA9PSBjbG9zZUJ0blBvbGl0aWNzKSB7XHJcbiAgICAgICAgcG9saXRpY3MuY2xhc3NMaXN0LmFkZCgnaGlkZS1wb2xpdGljcycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgcmVnaXN0ci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY2FsbGJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGxvZ2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBmb3Jnb3RZb3VyUGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGNvZGVGcm9tU21zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBuZXdQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgYXNrQVF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAvL21vZGFsUmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbG9zZdChdXJyZW50T3BlbkxpbmsoY2xvc2UsIG9wZW4pIHsvL2Nsb3NlIG9uZSBtb2RhbCB3aW5kb3cgYW5kIG9wZW4gYW5vdGhlclxyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgb3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZdChdXJyZW50T3BlbmxvZ2luKGUpIHsvLyhlKSA9PSBvcGVuR29Ub0xvZ2luID09IGVsZW1lbnQgd2l0aCBjbGFzcyAuZ29Ub0xvZ2luLCBjbG9zZXN0KFwiLm1vZGFsX19ibG9ja1wiKSBpcyBzZXQgb24gdGhpcyBlbGVtZW50LlxyXG4gICAgZS50YXJnZXQuY2xvc2VzdChcIi5tb2RhbF9fYmxvY2tcIikuY2xhc3NMaXN0LmFkZCgnaGlkZScpOy8vd2hlbiBjbGlja2luZyBvbiBhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzIC5nb1RvTG9naW4sIFxyXG4gICAgbG9naW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpOyAgICAgICAgICAgICAgICAgICAgICAgICAvL2l0IHdpbGwgZ28gdGhyb3VnaCBhbGwgZWxlbWVudHMgaW5jbHVkaW5nIHBhcmVudHMgdXAgdG8gdGhlIHJvb3QgZWxlbWVudCB1bnRpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pdCBmaW5kcyBhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzIC5tb2RhbF9fYmxvY2ssIHN0b3AsIGFuZCBhZGQgdGhlIGNsYXNzIC5oaWRlIHRvIHRoaXMgZWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWxQb2xpdGljcygpIHtcclxuICAgIHBvbGl0aWNzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtcG9saXRpY3MnKTtcclxufVxyXG5cclxuXHJcbm9wZW5SZWdpc3RyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCByZWdpc3RyKSk7Ly9vbiBsaW5lIDQ3XHJcbm9wZW5DYWxsYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgY2FsbGJhY2spKTtcclxub3BlbkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBsb2dpbikpO1xyXG53aWRnZXRPcGVuTW9kYWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGNhbGxiYWNrKSk7XHJcbndpZGdldE9wZW5Nb2RhbFsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgYXNrQVF1ZXN0aW9uKSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuY2xvc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pIH0pOy8vb24gbGluZSA1OVxyXG5cclxub3BlbkdvVG9Mb2dpbi5mb3JFYWNoKChpdGVtKSA9PiB7IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZdChdXJyZW50T3BlbmxvZ2luKSB9KTtcclxuXHJcbm9wZW5Gb3Jnb3RZb3VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsobG9naW4sIGZvcmdvdFlvdXJQYXNzd29yZCkpOy8vb24gbGluZSA5M1xyXG5vcGVuR29Ub1JlZ2lzdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsobG9naW4sIHJlZ2lzdHIpKTtcclxub3BlbkNvZGVGcm9tU21zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGZvcmdvdFlvdXJQYXNzd29yZCwgY29kZUZyb21TbXMpKTtcclxub3Blbk5ld1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGNvZGVGcm9tU21zLCBuZXdQYXNzd29yZCkpO1xyXG5cclxub3BlblBvbGl0aWNzLmZvckVhY2goKGl0ZW0pID0+IHsvL29uIGxpbmUgMTA1XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsUG9saXRpY3MpO1xyXG59KTtcclxuY2xvc2VQb2xpdGljcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlYnRuKTsgICAvL29uIGxpbmUgNTlcclxuY2xvc2VCdG5Qb2xpdGljcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlYnRuKTsvL29uIGxpbmUgNTkgIFxyXG5cclxuXHJcbmlmKCBjb250YWN0T3Blbk1vZGFsUXVlc3Rpb24gKXtcclxuICAgIGNvbnRhY3RPcGVuTW9kYWxRdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgYXNrQVF1ZXN0aW9uKSk7XHJcbn07XHJcblxyXG4vL29wZW5Nb2RhbFJldmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgbW9kYWxSZXZpZXcpKTtcclxuXHJcblxyXG4iLCIvL2xldCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRlLXNob3ctcGFzc3dvcmQnKTsgLy8gZm9yIHZlci4gMVxyXG5sZXQgZXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV5ZScpO1xyXG5jb25zdCBidG5QYXNzQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtY2hlY2snKTtcclxubGV0IG1lc3NhZ2VQYXNzTWlzbWF0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmRzLWRvLW5vdC1tYXRjaCcpO1xyXG5sZXQgdHdvSW5wdXRQYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhc3NDaGVjaycpO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb3BlbihlKSB7XHJcblxyXG4gICAgLy92ZXIuMSBUaGlzIHZlcnNpb24gb2YgdGhlIGNvZGUgaGlkL3Nob3dlZCB0aGUgcGFzc3dvcmQgZm9yIGFsbCBpbnB1dHMgd2hlbiBjbGlja2luZyBvbiB0aGUgZXllXHJcblxyXG4gICAgLypwYXNzd29yZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgZXllLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1leWUnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLnR5cGUgPSAncGFzc3dvcmQnO1xyXG4gICAgICAgICAgICBleWUuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRlLWV5ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KSAgKi9cclxuXHJcbiAgICAvL05vdyBoaWRlcy9zaG93cyBvbmx5IHRoZSBpbnB1dCB0aGF0IHJlbGF0ZXMgdG8gdGhlIHByZXNzZWQgZXllXHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudHlwZSA9PSAncGFzc3dvcmQnKSB7Ly93aGVuIGNsaWNraW5nIG9uIHRoZSBleWUgaWYgdGhlIGlucHV0IGlzIG9mIHR5cGUgJ3Bhc3N3b3JkJ1xyXG4gICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudHlwZSA9ICd0ZXh0JzsgICAgICAgLy90aGVuIHJlcGxhY2Ugd2l0aCB0eXBlICd0ZXh0J1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZXllJykgICAgICAgICAgICAgICAgLy9vcGVuIGV5ZSB0aHJvdWdoIGNsYXNzIHJlbW92YWxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID0gJ3Bhc3N3b3JkJzsvL290aGVyd2lzZSBhc3NpZ24gdGhlIHR5cGUgJ3Bhc3N3b3JkJyAocmVwbGFjZXMgc3ltYm9scyB3aXRoIGRvdHMpXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZS1leWUnKTsgICAgICAgICAgICAgICAvL2FuZCB3aWxsIGNsb3NlIHRoZSBleWUgYXMgYSByZXN1bHQgb2YgYWRkaW5nIHRoZSBjbGFzc1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV5ZS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbik7XHJcbn0pO1xyXG5cclxuXHJcbmJ0blBhc3NDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmICghKHR3b0lucHV0UGFzc1swXS52YWx1ZSA9PSB0d29JbnB1dFBhc3NbMV0udmFsdWUpKSB7IC8vaWYgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBmaWVsZCBkb2VzIG5vdCBtYXRjaCB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBmaWVsZFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGVuIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWRcclxuICAgICAgICBtZXNzYWdlUGFzc01pc21hdGNoLmlubmVySFRNTCA9ICfQndC10YHQvtCy0L/QsNC00LXQvdC40LUg0L/QsNGA0L7Qu9C10LknOy8vYW5kIHdpbGwgZGlzcGxheSBhIG1lc3NhZ2UgYWJvdXQgdGhlIHBhc3N3b3JkIG1pc21hdGNoXHJcbiAgICB9O1xyXG5cclxufSk7XHJcblxyXG50d29JbnB1dFBhc3MuZm9yRWFjaCgoaXRlbSkgPT4geyAgICAgICAgICAvL3dpdGggZWFjaCBuZXcgZW50cnkgaXQgd2lsbCBkZWxldGUgdGhlIG1lc3NhZ2UgYWJvdXQgcGFzc3dvcmQgbWlzbWF0Y2hcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTsiLCIvL3RvIGdvIHRvIHRoZSBwcmV2aW91cyBwYWdlIGJ5IG5hdmlnYXRpb25cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cclxubGV0IGFsbExpU2Vjb25kTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY29uZGFyeS1uYXYgbGknKTtcclxuXHJcbi8vdGFrZXMgdGhlIGxpbmsgYWRkcmVzcyBmcm9tIHRoZSBwcmV2aW91cyBlbGVtZW50IGFuZCBwdXRzIGl0IGludG8gdGhlIGFycm93IGxpbmsgb2YgdGhlIGxhc3QgZWxlbWVudFxyXG5sZXQgbGlua0FkcmVzcyA9IGFsbExpU2Vjb25kTmF2WyhhbGxMaVNlY29uZE5hdi5sZW5ndGggLSAyKV0uY2hpbGROb2Rlc1swXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHJcbmFsbExpU2Vjb25kTmF2WyhhbGxMaVNlY29uZE5hdi5sZW5ndGggLSAxKV0uY2hpbGROb2Rlc1sxXS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rQWRyZXNzKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJjb25zdCBtb2RhbEFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYXNrLWEtcXVlc3Rpb24nKTtcclxuY29uc3QgYXNrVGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNrLWEtcXVlc3Rpb25fX3F1ZXN0aW9uJyk7XHJcbmNvbnN0IHBhcmVudEFza1RleHRhcmVhID0gYXNrVGV4dGFyZWEucGFyZW50RWxlbWVudDtcclxuLy9jb25zb2xlLmxvZyhwYXJlbnRBc2tUZXh0YXJlYSk7XHJcbmxldCBpbml0aWFsV2lkdGhBc2tUZXh0YXJlYSA9ICsod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXNrVGV4dGFyZWEpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKS5zbGljZSgwLCAtMikpOy8vdGhlIGluaXRpYWwgd2lkdGggb2YgdGhlIHRleHRhcmVhIGlzIHRha2VuXHJcbi8vY29uc29sZS5sb2coaW5pdGlhbFdpZHRoQXNrVGV4dGFyZWEpO1xyXG5cclxuLy93aWR0aCBhbmQgaGVpZ2h0IHJlc3RyaWN0aW9ucyBhdCBhcHByb3hpbWF0ZWx5IGxpbmUgOTM4KHNjc3MpXHJcblxyXG5hc2tUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFza1RleHRhcmVhLnNjcm9sbEhlaWdodClcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDU4MCkge1xyXG4gICAgICAgIGlmIChlLmlucHV0VHlwZSA9PSAnaW5zZXJ0VGV4dCcgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoID4gMjYgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDwgNTQpIHtcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSBgJHthc2tUZXh0YXJlYS5jbGllbnRXaWR0aCArPSAxMH1weGA7IC8vaWYgdGhlIG51bWJlciBvZiBlbnRlcmVkIGNoYXJhY3RlcnMgbWF0Y2hlcyB0aGUgY29uZGl0aW9ucyBhYm92ZSwgdGhlIHRleHRhcmVhIHdpbGwgZ3JvdyBpbiB3aWR0aCBieSAxMHB4IGFmdGVyIGVhY2ggaW5wdXRcclxuICAgICAgICB9IGVsc2UgaWYgKGUuaW5wdXRUeXBlID09ICdkZWxldGVDb250ZW50QmFja3dhcmQnICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA+IDI2ICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA8IDU0ICYmIGFza1RleHRhcmVhLmNsaWVudFdpZHRoID4gaW5pdGlhbFdpZHRoQXNrVGV4dGFyZWEpIHtcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSBgJHthc2tUZXh0YXJlYS5jbGllbnRXaWR0aCAtPSA1fXB4YDsvL2lmIHRoZXJlIGlzIGEgZGVsZXRpb24gb2YgY2hhcmFjdGVycywgdGhlIHRleHRhcmVhIHdpbGwgc2hyaW5rXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmlucHV0VHlwZSA9PSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJyAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPD0gMjUpIHtcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSBgJHtpbml0aWFsV2lkdGhBc2tUZXh0YXJlYX1weGA7Ly9hZGp1c3QgdGV4dGFyZWEgd2lkdGggdG8gaW5pdGlhbCB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZS5kYXRhKTtcclxuICAgICAgICBpZiAoZS5kYXRhICE9IG51bGwgJiYgZS5kYXRhLmxlbmd0aCA+IDEpIHsvL2lmIHRoZSBlbnRpcmUgcmV2aWV3IGlzIGluc2VydGVkIC8gZS5kYXRhICE9IG51bGwgLT4gbnVsbCA9IHdoZW4gcHJlc3NpbmcgZW50ZXIgb3IgYmFja3NwYWNlXHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gJzUwMHB4JztcclxuICAgICAgICB9IGVsc2UgaWYgKGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA8IDEpIHsvL2lmIGFsbCB0ZXh0IGlzIGRlbGV0ZWQgYXQgb25jZVxyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2luaXRpYWxXaWR0aEFza1RleHRhcmVhfXB4YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPiAyNikgey8vcmVhcnJhbmdlIGVsZW1lbnRzIHdoZW4gdGV4dGFyZWEgZ3Jvd3NcclxuICAgICAgICAgICAgcGFyZW50QXNrVGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgndGV4dGFyZWEtY29sdW1uJylcclxuICAgICAgICAgICAgbW9kYWxBc2suY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2Fzay1hLXF1ZXN0aW9uLWJpZy1hc2snKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBhcmVudEFza1RleHRhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHRhcmVhLWNvbHVtbicpXHJcbiAgICAgICAgICAgIG1vZGFsQXNrLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19hc2stYS1xdWVzdGlvbi1iaWctYXNrJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXNrVGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7ICAvL3RleHRhcmVhIGhlaWdodCBncm93dGhcclxuICAgIGFza1RleHRhcmVhLnN0eWxlLmhlaWdodCA9IGFza1RleHRhcmVhLnNjcm9sbEhlaWdodCArIFwicHhcIjsvLyBcclxufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2FsbFNjcmlwdHMvYW5pbWF0aW9uLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDExMjBweC5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2hlYWRlck5hdkJ1cmdlck9uTWVkaWFNYXgtd2lkdGg3MzVweC5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL3NlY29uZGFyeU5hdkFycm93TGlua3MzMjAuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9XaWRnZXQuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9tb2RhbC5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL3Bhc3MtZXllLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvT1RQLUlucHV0LWZpZWxkKHNtcykuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy90ZXh0YXJlYUdyb3cuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9idXR0b25Gb3JtQ29uc2VudENoZWNrLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvYW5pbWF0ZUZvb3Rlci5qcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9