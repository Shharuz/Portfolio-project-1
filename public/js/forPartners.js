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

/***/ "./src/script/allScripts/radioPerson.js":
/*!**********************************************!*\
  !*** ./src/script/allScripts/radioPerson.js ***!
  \**********************************************/
/***/ (() => {

//for forPartners.html, account.html, placingAnOrder.html,
const radioPerson = document.querySelectorAll('.fieldset__item input[type="radio"]');
const formItems = document.querySelectorAll('main .form__item');
const delivery = document.querySelectorAll('main [data-hide-delivery]');//for delivery method on page placingAnOrder.html




radioPerson.forEach((item) => {
    item.addEventListener('change', () => {
        for (let itemformItems of formItems) {
            if (itemformItems.classList.contains('hide')) {//reveals all elements
                itemformItems.classList.remove('hide')
                alignBody()//for script/animation.js (smoothScroll)
            }

            if (item.id == itemformItems.getAttribute('data-hide')) {//if the radioPerson id matches the data-hide of the form element, it will hide it
                itemformItems.classList.add('hide')
                alignBody()//for script/animation.js (smoothScroll) 
            }
        }
        if (item.getAttribute('name') == 'delivery') {//similarly, see above
            for (let itemdelivery of delivery) {
                itemdelivery.classList.add('hide')
                if (item.id == itemdelivery.getAttribute('data-hide-delivery')) {
                    itemdelivery.classList.remove('hide')
                }
            }
        }



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
/*!***********************************!*\
  !*** ./src/script/forPartners.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allScripts_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allScripts/animation.js */ "./src/script/allScripts/animation.js");
/* harmony import */ var _allScripts_animation_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allScripts_animation_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width1120px_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allScripts/headerNavBurgerOnMediaMax-width1120px.js */ "./src/script/allScripts/headerNavBurgerOnMediaMax-width1120px.js");
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width1120px_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_allScripts_headerNavBurgerOnMediaMax_width1120px_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width735px_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allScripts/headerNavBurgerOnMediaMax-width735px.js */ "./src/script/allScripts/headerNavBurgerOnMediaMax-width735px.js");
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width735px_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_allScripts_headerNavBurgerOnMediaMax_width735px_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _allScripts_secondaryNavArrowLinks320_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allScripts/secondaryNavArrowLinks320.js */ "./src/script/allScripts/secondaryNavArrowLinks320.js");
/* harmony import */ var _allScripts_secondaryNavArrowLinks320_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_allScripts_secondaryNavArrowLinks320_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _allScripts_radioPerson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allScripts/radioPerson.js */ "./src/script/allScripts/radioPerson.js");
/* harmony import */ var _allScripts_radioPerson_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_allScripts_radioPerson_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allScripts/Widget.js */ "./src/script/allScripts/Widget.js");
/* harmony import */ var _allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _allScripts_modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allScripts/modal.js */ "./src/script/allScripts/modal.js");
/* harmony import */ var _allScripts_modal_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_allScripts_modal_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allScripts/pass-eye.js */ "./src/script/allScripts/pass-eye.js");
/* harmony import */ var _allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./allScripts/PhoneMask.js */ "./src/script/allScripts/PhoneMask.js");
/* harmony import */ var _allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./allScripts/OTP-Input-field(sms).js */ "./src/script/allScripts/OTP-Input-field(sms).js");
/* harmony import */ var _allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./allScripts/textareaGrow.js */ "./src/script/allScripts/textareaGrow.js");
/* harmony import */ var _allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./allScripts/buttonFormConsentCheck.js */ "./src/script/allScripts/buttonFormConsentCheck.js");
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./allScripts/animateFooter.js */ "./src/script/allScripts/animateFooter.js");
/* harmony import */ var _allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_12__);













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDhCQUE4QixLQUFLO0FBQzVFLFVBQVU7QUFDVix5Q0FBeUMsNkJBQTZCLElBQUk7QUFDMUUsVUFBVTtBQUNWLHlDQUF5Qyx3QkFBd0IsSUFBSTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSxVQUFVLHdDQUF3QztBQUNsRCx5Q0FBeUMsd0JBQXdCO0FBQ2pFO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtEQUErRDtBQUMvRCxDQUFDLEM7Ozs7OztVQ3RDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDNEI7QUFDRDtBQUNYO0FBQ2Q7QUFDTDtBQUNEO0FBQ0c7QUFDQztBQUNXO0FBQ1I7QUFDVSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9PVFAtSW5wdXQtZmllbGQoc21zKS5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9XaWRnZXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGVGb290ZXIuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYnV0dG9uRm9ybUNvbnNlbnRDaGVjay5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDExMjBweC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDczNXB4LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvcGFzcy1leWUuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3JhZGlvUGVyc29uLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9zZWNvbmRhcnlOYXZBcnJvd0xpbmtzMzIwLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy90ZXh0YXJlYUdyb3cuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvZm9yUGFydG5lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy90byBjb3JyZWN0bHkgZmlsbCBpbiB0aGUgZmllbGRzKGlucHV0cykgaW4gdGhlIG1vZGFsIHdpbmRvdyAoZWxlbWVudCB3aXRoIGNsYXNzIC5tb2RhbF9fY29kZS1mcm9tLXNtcylcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJPVFBpbnB1dHNcIik7XHJcblxyXG5pbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKGUpIHsvL3doZW4gdGhlIGNoYXJhY3RlcnMgd2lsbCBiZSBlbnRlcmVkXHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDsgICAgICAgICAgICAgICAgICAvL3RoZSBmaWVsZCBpbiB3aGljaCB0aGUgc3ltYm9sIGlzIGN1cnJlbnRseSBlbnRlcmVkXHJcbiAgICBjb25zdCB2YWwgPSB0YXJnZXQudmFsdWU7ICAgICAgICAgICAgICAgICAvL3RoZSB2YWx1ZSBvZiB0aGlzIGZpZWxkXHJcblxyXG4gICAgaWYgKGlzTmFOKHZhbCkpIHsgICAgICAgIC8vd2hlbiBlbnRlcmluZyBhbnkgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGEgbnVtYmVyLCByZXR1cm5zIGFuIGVtcHR5IHN0cmluZ1xyXG4gICAgICAgIHRhcmdldC52YWx1ZSA9IFwiXCI7ICAgICAgLy8gaXQgd29uJ3QgbGV0IHlvdSBlbnRlciBhbnl0aGluZyBleGNlcHQgbnVtYmVyc1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsICE9IFwiXCIpIHsgICAgICAgICAgICAgLy9pZiBhIG51bWJlciBpcyBlbnRlcmVkLCBpdCBnb2VzIHRvIHRoZSBuZXh0IGZpZWxkKGlucHV0KVxyXG4gICAgICAgIGNvbnN0IG5leHQgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgIG5leHQuZm9jdXMoKTsgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmlucHV0cy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7ICAgICAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBrZXkgPSBlLmtleS50b0xvd2VyQ2FzZSgpOyAgICAgICAgLy90aGUgbnVtYmVycyB5b3UgZW50ZXIgd2lsbCBhbHdheXMgYmUgaW4gdXBwZXJjYXNlICBcclxuXHJcbiAgICBpZiAoa2V5ID09IFwiYmFja3NwYWNlXCIgfHwga2V5ID09IFwiZGVsZXRlXCIpIHsvL3doZW4gYSBjaGFyYWN0ZXIgaXMgZGVsZXRlZCwgaXQgbW92ZXMgdG8gdGhlIHByZXZpb3VzIGZpZWxkXHJcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCJcIjsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJldiA9IHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChwcmV2KSB7XHJcbiAgICAgICAgICAgIHByZXYuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59KTsiLCJcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBsZXQgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLXRlbC1pbnB1dF0nKTtcclxuXHJcbiAgICBsZXQgZ2V0SW5wdXROdW1iZXJzVmFsdWUgPSBmdW5jdGlvbihpbnB1dCkgeyAvL3Byb2hpYml0aW9uIG9uIGVudGVyaW5nIGFsbCBzeW1ib2xzIGV4Y2VwdCBudW1iZXJzXHJcbiAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvblBob25lSW5wdXQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZS50YXJnZXQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0Y3Qu9C10LzQtdC90YIg0LjQvdC/0YPRglxyXG4gICAgICAgICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KTsvL9GF0YDQsNC90Y/RgtGB0Y8g0YLQvtC70YzQutC+INGH0LjRgdC70LBcclxuICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gXCJcIjtcclxuICAgICAgICBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0Oy8vSSBkb24ndCBrbm93IHdoeVxyXG5cclxuICAgICAgICAvKmlmICghaW5wdXROdW1iZXJzVmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoICE9IHNlbGVjdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlZGl0aW5nIG1pZGxlIHN0cmluZycsIGUpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0qL1xyXG5cclxuXHJcbiAgICAgICAgaWYgKFtcIjdcIiwgXCI4XCIsIFwiOVwiXS5pbmRleE9mKGlucHV0TnVtYmVyc1ZhbHVlWzBdKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZVswXSA9PSBcIjlcIikgaW5wdXROdW1iZXJzVmFsdWUgPSBcIjdcIiArIGlucHV0TnVtYmVyc1ZhbHVlOy8vaWYgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyA5IHRoZW4gcmVwbGFjZSBpdCB3aXRoIDcgOVxyXG5cclxuICAgICAgICAgICAgbGV0IGZpcnN0U3ltYm9scyA9IChpbnB1dE51bWJlcnNWYWx1ZVswXSA9PSBcIjhcIikgPyBcIjhcIiA6IFwiKzdcIjsvL2lmIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgOCB0aGVuIGl0IHdpbGwgcmV0dXJuIDggb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuICs3XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbHMgKyBcIiBcIjtcclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+IDEpIHsgLy9pZiBtb3JlIHRoYW4gMSBjaGFyYWN0ZXIgaXMgZW50ZXJlZCwgXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZygxLCA0KTsvL2l0IHdpbGwgYWRkICcoJyArIGNoYXJhY3RlcnMgZnJvbSAybmQgdG8gNXRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA1KSB7Ly9pZiA1IG9yIG1vcmUgY2hhcmFjdGVycyBhcmUgZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKSAnICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDQsIDcpOy8vaXQgd2lsbCBhZGQgJykgJyArIGNoYXJhY3RlcnMgZnJvbSA1bmQgdG8gOHRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA4KSB7Ly9pZiA4IG9yIG1vcmUgY2hhcmFjdGVycyBhcmUgZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoNywgOSk7Ly9pdCB3aWxsIGFkZCAnLScgKyBjaGFyYWN0ZXJzIGZyb20gOG5kIHRvIDEwdGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDEwKSB7Ly9pZiAxMCBvciBtb3JlIGNoYXJhY3RlcnMgYXJlIGVudGVyZWRcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDksIDExKTsvL2l0IHdpbGwgYWRkICctJyArIGNoYXJhY3RlcnMgZnJvbSAxMG5kIHRvIDEydGhcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBcIitcIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZygwLCAxNik7Ly9pdCB3aWxsIGFkZCAnKycgKyBjaGFyYWN0ZXJzIGZyb20gMXN0IHRvIDEydGhcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBvblBob25lSW5wdXRLZXlEb3duID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUua2V5Q29kZSwgZS50YXJnZXQudmFsdWUpOy8va2V5IGNvZGUgYW5kIGlucHV0IHZhbHVlICggICAxMDAgLSBjb2RlICAgICAgICAgJys3ICg5ODQpIDU2JyAtIGlucHV0IHZhbHVlICAgIClcclxuICAgICAgICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDggJiYgZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpLmxlbmd0aCA9PSAxKSB7Ly9pZiBiYWNrc3BhY2UgaXMgZW50ZXJlZChrZXlDb2RlID09IDgpLCB0aGUgaW5wdXQgdmFsdWUgd2lsbCBiZSByZXBsYWNlZCB3aXRoICcnXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvblBob25lUGFzdGUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHBhc3RlZCA9IGUuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTsvL3RoZSBjb3BpZWQgbnVtYmVyIGlzIHN0b3JlZFxyXG4gICAgICAgIGlucHV0ID0gZS50YXJnZXQ7Ly9pbnB1dCBzdG9yZWRcclxuICAgICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KTsvL3RoZSBpbnB1dCBpcyBjaGVja2VkIHRvIG1ha2Ugc3VyZSB0aGVyZSBhcmUgb25seSBudW1iZXJzXHJcblxyXG4gICAgICAgIGlmIChwYXN0ZWQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYW55IGRhdGEgd2hlbiBpbnNlcnRpbmdcclxuICAgICAgICAgICAgbGV0IHBhc3RlZFRleHQgPSBwYXN0ZWQuZ2V0RGF0YSgndGV4dCcpOy8vaW5zZXJ0cyBhIHZhbHVlIGFzIGEgc3RyaW5nIGZyb20gdGhlIGNvcGllZCB0ZXh0XHJcbiAgICAgICAgICAgIGlmICgvXFxEL2cudGVzdChwYXN0ZWRUZXh0KSkgeyAgICAgICAgICAgLy9jaGVja3MgdGhhdCB0aGVyZSBhcmUgb25seSBudW1iZXJzXHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyc1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBwaG9uZUlucHV0cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHBob25lSW5wdXRzW2ldO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25QaG9uZUlucHV0KTsvL29uIGxpbmUgMTBcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25QaG9uZUlucHV0S2V5RG93bik7Ly9vbiBsaW5lIDU2XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBob25lUGFzdGUpOy8vb24gbGluZSA2NFxyXG4gICAgfTtcclxuXHJcblxyXG59KSIsImNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0X191bCcpO1xyXG5jb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcicpO1xyXG5jb25zdCB3aWRnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0X190cmlnZ2VyX19tYWluJyk7XHJcbmNvbnN0IGNyb3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcl9fY3Jvc3MnKTtcclxuXHJcbmxldCBvcGVuV2lkZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCAhbGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGVXaWRnZXRsaXN0JykgKXsvL3Njc3Mgb24gbGluZSA0MzQ5XHJcbiAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgndmlzaWJsZVdpZGdldGxpc3QnKS8vdGhlIGxpc3QgZHJvcHMgdG8gdGhlIHRvcFxyXG4gICAgICAgICAgICB3aWRnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZXRyaWdnZXInKSAgIC8vY2hhbmdlcyB0aGUgd2lkZ2V0IGljb24gdG8gYSBjcm9zc1xyXG4gICAgICAgICAgICBjcm9zcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRldHJpZ2dlcicpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVdpZGdldGxpc3QnKS8vdGhlIGxpc3QgY29tZXMgYmFja1xyXG4gICAgICAgICAgICB3aWRnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZXRyaWdnZXInKSAgIFxyXG4gICAgICAgICAgICBjcm9zcy5jbGFzc0xpc3QuYWRkKCdoaWRldHJpZ2dlcicpXHJcbiAgICAgICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbldpZGdldCk7IiwiY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyIC5mb290ZXItY29udGFpbmVyJyk7XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCA9PSAwKSB7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG59XHJcblxyXG5sZXQgc2Nyb2xsUGVyY2VudDtcclxuXHJcbmZ1bmN0aW9uIGdldFNjcm9sbFBlcmNlbnQoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLCAnd2luZG93LnNjcm9sbFknKTtcclxuICAgIC8vY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0LCAnd2luZG93LmlubmVySGVpZ2h0Jyk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhib2R5Lm9mZnNldEhlaWdodCwgJ2JvZHkub2Zmc2V0SGVpZ2h0Jyk7XHJcblxyXG4gICAgc2Nyb2xsUGVyY2VudCA9ICsoKHdpbmRvdy5zY3JvbGxZIC8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpICogMTAwKS50b0ZpeGVkKDIpKTtcclxuICAgIFxyXG5cclxuICAgIGlmIChzY3JvbGxQZXJjZW50ID4gOTUpIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gdmlzaWJsZUZvb3RlcigpIHsvL2lmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgYXQgdGhlIHZlcnkgYm90dG9tXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCA9PSAwKSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGdldFNjcm9sbFBlcmNlbnQpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdmlzaWJsZUZvb3Rlcik7XHJcblxyXG4iLCIvL3Ntb290aCBzY3JvbGxcclxuY29uc3QgYm9keWZvclNtb290aFNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yU21vb3RoU2Nyb2xsJykpIHtcclxuICAgIGNvbnN0IGZvclNtb290aFNjcm9sbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yU21vb3RoU2Nyb2xsX193cmFwcGVyJyk7XHJcblxyXG4gICAgLy9naXZlcyB0aGUgaGVpZ2h0IG9mIHRoZSBib2R5IHNvIHRoYXQgc2Nyb2xsaW5nIG9jY3Vyc1xyXG4gICAgbGV0IGhlaWdodEZvclNjcm9sbCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZvclNtb290aFNjcm9sbFdyYXBwZXIpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpKTtcclxuICAgIGJvZHlmb3JTbW9vdGhTY3JvbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6JHtoZWlnaHRGb3JTY3JvbGx9cHhgKTtcclxuXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFsaWduQm9keSlcclxuXHJcbiAgICBmdW5jdGlvbiBhbGlnbkJvZHkoKSB7IC8vIHNjcmlwdC9yYWRpb1BlcnNvbiAgLyAgc2NyaXB0L2NhdGVnb3JpZXNSYWRpb1xyXG4gICAgICAgIGhlaWdodEZvclNjcm9sbCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZvclNtb290aFNjcm9sbFdyYXBwZXIpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpKTtcclxuICAgICAgICBib2R5Zm9yU21vb3RoU2Nyb2xsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OiR7aGVpZ2h0Rm9yU2Nyb2xsfXB4YCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNjclBvc1kgPSAwOyAvL2ZvciBzY3JvbGwgcG9zaXRpb25zXHJcbiAgICBsZXQgYmxvY2tQb3NZID0gc2NyUG9zWTsgLy8gZm9yIGZvclNtb290aFNjcm9sbFdyYXBwZXIgcG9zaXRpb25cclxuICAgIGxldCBzcGVlZEFuaW0gPSAwLjAzOyAvL2lmIHNwZWVkQW5pbSA+IDAuMDcgKDAuMSkgYW5pbWF0aW9uIGhhcHBlbnMgZmFzdGVyXHJcbiAgICAvL2lmIHNwZWVkQW5pbSA8IDAuMDcgKDAuMDIpIGFuaW1hdGlvbiBpcyBzbG93ZXJcclxuXHJcblxyXG4gICAgLy8gQmluZCBhIHNjcm9sbCBmdW5jdGlvblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGdldHNTY3JvbGxWYWx1ZSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldHNTY3JvbGxWYWx1ZSgpIHtcclxuICAgICAgICBzY3JQb3NZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2NyUG9zWSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoKTtcclxuXHJcbiAgICAvL2FuaW1hdGUgZWxlbWVudCByZXZpZXdzLmh0bWwgYW5kIHF1ZXN0aW9ucy5odG1sXHJcblxyXG4gICAgbGV0IHdpbmRvd0hlaWdodDtcclxuICAgIGNvbnN0IGVsZW1lbnRWaXNpYmxlID0gMTsgLy9hbmltYXRpb24gd2lsbCBzdGFydCB3aGVuIHRoZSBibG9jayBpcyAxNTBweCBhd2F5IGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQuXHJcbiAgICBsZXQgc2Nyb2xsRWxlbWVudHM7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzX193cmFwcGVyLWZvci1pdGVtX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKTsgLy9zdGFydCBieSBzZWxlY3RpbmcgYWxsIHRoZSBibG9ja1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2sgXHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2sgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93SGVpZ2h0KCkge1xyXG4gICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDsgLy93aW5kb3dIZWlnaHQgZ2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCAoaW5uZXJIZWlnaHQpXHJcbiAgICB9XHJcbiAgICBnZXRXaW5kb3dIZWlnaHQoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRXaW5kb3dIZWlnaHQpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhcHBlYXJFbGVtZW50KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2Nyb2xsRWxlbWVudHMpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvcCA9ICtzY3JvbGxFbGVtZW50c1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AudG9GaXhlZCgyKTsgLy9jYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0IHRvIHRoZSB0b3Agb2YgdGhlIGJsb2NrXHJcblxyXG4gICAgICAgICAgICAvL0lmIHRoaXMgY29uZGl0aW9uIGlzIHRydWUsIGl0IG1lYW5zIHRoZSBibG9jayBpcyB3aXRoaW4gdGhlIHZpZXdwb3J0LCBhbmQgdGhlIGNsYXNzIHJldmVhbCwgXHJcbiAgICAgICAgICAgIC8vd2hpY2ggaGFzIHRoZSBzdHlsZSBjaGFuZ2VzLCBpcyBhZGRlZC4gSWYgdGhlIGJsb2NrIGlzIG5vdCB3aXRoaW4gdGhlIGRlZmluZWQgXHJcbiAgICAgICAgICAgIC8vdmlzaWJpbGl0eSBhcmVhLCB0aGUgcmV2ZWFsIGNsYXNzIGlzIHJlbW92ZWQsIHJldmVydGluZyB0aGUgYW5pbWF0aW9uLlxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvcCA8IHdpbmRvd0hlaWdodCAtIGVsZW1lbnRWaXNpYmxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudHNbaV0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVFbGVtZW50c09uU2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVFbGVtZW50c09uU2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvL2FwcGVhckVsZW1lbnRSZXZpZXdzKCk7XHJcbiAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGFwcGVhckVsZW1lbnRSZXZpZXdzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzbW9vdGgoKSB7XHJcblxyXG4gICAgICAgIC8vV2UgY2FsY3VsYXRlIG91ciBjb250YWluZXIgcG9zaXRpb24gYnkgbGluZWFyIGludGVycG9sYXRpb24gbWV0aG9kXHJcbiAgICAgICAgYmxvY2tQb3NZID0gbGluZWFyKGJsb2NrUG9zWSwgc2NyUG9zWSwgc3BlZWRBbmltKSAvL2NhbGN1bGF0ZSBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyIHBvc2l0aW9uIGJ5IGxpbmVhciBpbnRlcnBvbGF0aW9uIG1ldGhvZFxyXG5cclxuICAgICAgICBibG9ja1Bvc1kgPSBNYXRoLmZsb29yKGJsb2NrUG9zWSAqIDEwMCkgLyAxMDA7XHJcblxyXG5cclxuICAgICAgICBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC0ke2Jsb2NrUG9zWX1weCwgMHB4KWApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoKTtcclxuICAgICAgICAvL2FuaW1hdGUgZWxlbWVudCByZXZpZXdzLmh0bWwgYW5kIHF1ZXN0aW9ucy5odG1sXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpbmVhcihhcmcxLCBhcmcyLCBhcmczKSB7XHJcbiAgICAgICAgcmV0dXJuICgxIC0gYXJnMykgKiBhcmcxICsgYXJnMyAqIGFyZzI7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLy9zcGxpdCB0eHRcclxuY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpXHJcblxyXG5cclxubGV0IHN0cmluZ0g7XHJcbmxldCBhcnJheUxldHRlcnNIID0gW107XHJcblxyXG5jb25zb2xlLmxvZyhoMik7XHJcbmlmIChoMiAhPSBudWxsKSB7XHJcbiAgICBpZiAoaDIuaWQgPT0gJ2gyY2F0YWxvZ01haW5QYWdlJykge1xyXG4gICAgICAgIGxldCB0bXBBZGFwdGl2ZUgyO1xyXG4gICAgICAgIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaDJjYXRhbG9nTWFpblBhZ2VBZGFwdGl2ZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDU4MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcEFkYXB0aXZlSDIgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFkYXB0aXZlSDIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzAnKSAgICBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzKGgyLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTgwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG1wQWRhcHRpdmVIMiAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQWRhcHRpdmVIMiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMiwgMiwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGgyLmlkID09ICdoMmFydGljbGVPclZpZGVvJykge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vYXJnMSA9IGgxIG9yIGgyW2ldXHJcbi8vYXJnMiA9IGFtb3VudCBsaW5lc1xyXG4vL2FyZzMgPSBhbW91bnQgd29yZHMgaW4gMSBsaW5lXHJcbi8vYXJnNCA9IGFtb3VudCB3b3JkcyBpbiAyIGxpbmVcclxuLy9hcmc1ID0gYW1vdW50IHdvcmRzIGluIDMgbGluZVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0aW5nV3JhcHBlcnMoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSwgYXJnNiwgYXJnNykge1xyXG5cclxuICAgIC8vZm9yIGFkYXB0aXZlXHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxLmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzWzBdKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lKVxyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcmcxLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICB9XHJcbiAgICBpZiAoYXJnMS5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lID09ICdESVYnKSB7IC8vY2hlY2tzIGlmIGgyIGlzIHNwbGl0IGludG8gbGV0dGVyc1xyXG4gICAgICAgIGxldCB0bXBXb3JkID0gYXJnMS5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlckZvcldvcmQnKTsgLy90YWtlcyBhbGwgdGhlIHdvcmRzXHJcbiAgICAgICAgbGV0IHRtcEFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG1wV29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRtcFdvcmRbaV0ucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJTeW1ib2wnKTsgLy90YWtlcyBhbGwgY2hhcmFjdGVycyBpbiBlYWNoIHdvcmRcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjaGFyLmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXJbeV0uaW5uZXJIVE1MKSAgIFxyXG4gICAgICAgICAgICAgICAgdG1wQXJyLnB1c2goY2hhclt5XS5pbm5lckhUTUwpOyAvL9GBaGFyIHB1dHMgaW50byBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPT0gKGNoYXIubGVuZ3RoIC0gMSkpIHsgLy9pZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSB3b3JkLCB0aGVuIGl0IHdpbGwgYWRkIGEgc3BhY2UgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQXJyLnB1c2goJyAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codG1wQXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyZzEuaW5uZXJIVE1MID0gXCJcIjsgLy93aWxsIGNsZWFyIGgyXHJcbiAgICAgICAgYXJnMS5pbm5lckhUTUwgPSB0bXBBcnIuam9pbihcIlwiKTsgLy90aGUgbGluZSBjbGVhcmVkIG9mIHdyYXBwZXJzIHdpbGwgYmUgYWRkZWQgdG8gaDJcclxuICAgICAgICAvL2FyZzEuYXBwZW5kKHRtcEFyci5qb2luKFwiXCIpKTtcclxuICAgIH1cclxuICAgIC8qaWYoYXJnMS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucygnbGluZScpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdycnJycnJycicpXHJcbiAgICB9Ki9cclxuXHJcbiAgICBzdHJpbmdIID0gYXJnMS5pbm5lckhUTUw7IC8vdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgKHN0cmluZykgaXMgcHV0IGludG8gYSB2YXJpYWJsZVxyXG4gICAgYXJnMS5pbm5lckhUTUwgPSAnJzsgLy96ZXJvaW5nIGNvbnRlbnQgdG8gYWRkIHdyYXBwZXJzIHdpdGggY29udGVudFxyXG4gICAgYXJyYXlMZXR0ZXJzSCA9IFtdIC8vYXJyYXkgemVyb2luZyA/Pz8gaXQgc2VlbXMgdG8gYmUgcmVzZXQgdG8gemVybyBhcm91bmQgbGluZSAyMDkgPz8/XHJcbiAgICBmb3IgKGxldCBjaGFyIG9mIHN0cmluZ0gpIHsgLy90aGUgc3RyaW5nIGlzIHNwbGl0IGludG8gY2hhcmFjdGVycyBhbmQgYWRkZWQgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgYXJyYXlMZXR0ZXJzSC5wdXNoKGNoYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TGV0dGVyc0gubGVuZ3RoOyArK2kpIHsgLy9jb3VudCB3b3JkcyBpbiBhIGxpbmUsIHJlbGF0aXZlIHRvICcgJ1xyXG4gICAgICAgIGlmIChhcnJheUxldHRlcnNIW2ldID09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbGVuZ2h0QXJyID0gYXJyYXlMZXR0ZXJzSC5sZW5ndGg7XHJcblxyXG4gICAgaWYgKGFyZzIgPT0gMSkgeyAvL2lmIHlvdSBuZWVkIHRvIG1ha2UgYSBsaW5lIGluIDEgbGluZVxyXG4gICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGluZyBhIGxpbmUgYW5kIGFkZGluZyBpdCB0byBhbiBlbGVtZW50IChIMSBvciBIMilcclxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgICBhcmcxLmFwcGVuZChsaW5lKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoYXJnMiA+IDEpIHsgLy9pZiB5b3UgbmVlZCB0byBtYWtlIGEgbGluZSBpbiAyIGxpbmVzIG9yIG1vcmVcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGFyZzI7ICsreSkgeyAvLyB5IDwgYXJnMigzKSA9IG1ha2UgMyBsaW5lcyBcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW5nIGEgbGluZSBhbmQgYWRkaW5nIGl0IHRvIGFuIGVsZW1lbnQgKEgxIG9yIEgyKVxyXG4gICAgICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgICAgICAgYXJnMS5hcHBlbmQobGluZSk7XHJcbiAgICAgICAgICAgIGlmICh5ID09IDApIHsgLy8xU1QgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMzsgKytpKSB7IC8vICBpIDwgYXJnMygyKSA9ICAyIHdvcmRzIGluIGxpbmVcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDEpIHsgLy8yTkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNDsgKytpKSB7IC8vIC8vICBpIDwgYXJnNCgzKSA9ICAzIHdvcmRzIGluIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKSAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDIpIHsgLy8zTkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNTsgKytpKSB7IC8vIC8vICBpIDwgYXJnNSgyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gMykgeyAvLzRORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc2OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc2KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSA0KSB7IC8vNU5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzc7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzcoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhhcmcxKSB7XHJcbiAgICAgICAgLy9ieSB0aGUgdGVybSB3b3JkIGFuZCBzeW1ib2wsIHdlIG1lYW4gYSB3cmFwcGVyIGZvciBhIHdvcmQgYW5kIHN5bWJvbFxyXG4gICAgICAgIGxldCB3cmFwcGVyRm9yV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpb24gb2YgYSB3b3JkXHJcbiAgICAgICAgd3JhcHBlckZvcldvcmQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlckZvcldvcmQnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5naHRBcnI7ICsreSkge1xyXG4gICAgICAgICAgICBpZiAoYXJyYXlMZXR0ZXJzSFswXSA9PSBcIiBcIikgeyAvL2lmIGl0IGVuY291bnRlcnMgXCIgXCIgLSBpdCB3aWxsIGRlbGV0ZSBpdFxyXG4gICAgICAgICAgICAgICAgYXJyYXlMZXR0ZXJzSC5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheUxldHRlcnNIWzBdID09IHVuZGVmaW5lZCkgYnJlYWs7IC8vaWYgdGhlIGFycmF5IGlzIG92ZXIgLSBzdG9wXHJcbiAgICAgICAgICAgIGxldCBkaXZGb3JTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW9uIG9mIGEgc3ltYm9sXHJcbiAgICAgICAgICAgIGRpdkZvclN5bWJvbC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyU3ltYm9sJyk7XHJcbiAgICAgICAgICAgIGRpdkZvclN5bWJvbC5pbm5lckhUTUwgPSBhcnJheUxldHRlcnNIWzBdOyAvL2FkZGluZyBhIHN5bWJvbCBmcm9tIGFuIGFycmF5IHRvIGEgd3JhcHBlcihzeW1ib2wpXHJcbiAgICAgICAgICAgIHdyYXBwZXJGb3JXb3JkLmFwcGVuZChkaXZGb3JTeW1ib2wpOyAvL2FkZGluZyBhIHN5bWJvbCB0byBhIHdvcmRcclxuICAgICAgICAgICAgYXJyYXlMZXR0ZXJzSC5zcGxpY2UoMCwgMSk7IC8vcmVtb3ZlIGFkZGVkIGNoYXJhY3RlciBmcm9tIGFycmF5XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcmcxLmFwcGVuZCh3cmFwcGVyRm9yV29yZCk7IC8vYWRkaW5nIGEgd29yZCB3aXRoIHN5bWJvbHMgdG8gdGhlIGNyZWF0ZWQgbGluZSAodGhlIGxpbmUgd2FzIGNyZWF0ZWQgYXQgYWJvdXQgMTc1IGFuZCAxODQpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vaDIgY2hhciBwcmVwIGZvciBhbmltXHJcblxyXG5pZiAoaDIgIT0gbnVsbCkge1xyXG4gICAgY29uc3QgaDJDaGFyID0gaDIucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJTeW1ib2wnKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoMkNoYXIpO1xyXG4gICAgbGV0IHRtcEgyQ2hhclRyYW5zWSA9IDA7XHJcbiAgICBmb3IgKGxldCBjaGFyIG9mIGgyQ2hhcikgeyAvL3dpbGwgbWFrZSBhIGxhZGRlclxyXG4gICAgICAgIGNoYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0bXBIMkNoYXJUcmFuc1kgKiAwLjV9cHgpYDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXIpXHJcbiAgICAgICAgdG1wSDJDaGFyVHJhbnNZICs9IDE1O1xyXG4gICAgfVxyXG59IiwiY29uc3QgY29uc2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gLmNvbnNlbnQnKTsgLy90YWtlIGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzIC5jb25zZW50XHJcblxyXG4vL3RoZXJlIGlzIGEgZGl2IHdpdGggY2xhc3MgY29uY2VudC4gSW4gY29uc2VudCB0aGVyZSBhcmUgMiBlbGVtZW50cyBpbnB1dCBhbmQgbGFiZWxcclxuLy90aGUgbmV4dCBlbGVtZW50IGFmdGVyIHRoZSBjb25zZW50IGlzIHRoZSBidXR0b24gZWxlbWVudFxyXG5cclxuZm9yKCBsZXQgaXRlbSBvZiBjb25zZW50KXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29sbGVjdGlvbiBlbnVtZXJhdGlvblxyXG4gICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAvL2FkZCBjbGljayBldmVudCB0byBlYWNoIG5leHQgaXRlbShidXR0b24pIGZyb20gdGhlIGNvbGxlY3Rpb25cclxuICAgICAgICBcclxuICAgICAgICBpZiggIWUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hpbGROb2Rlc1sxXS5jaGVja2VkICl7IC8vaWYgdGhlIGxhYmVsIGlzIG5vdCBpbiB0aGUgY2hlY2tlZCBzdGF0ZVxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiB0aGUgYnV0dG9uIGRvZXMgbm90IHdvcmtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVGhpcyBpcyBuZWNlc3NhcnkgZm9yIHRoZSB1c2VyIHRvIGFncmVlIHRvIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGVybXMgb2YgcGVyc29uYWwgZGF0YSBwcm9jZXNzaW5nIFxyXG4gICAgfSk7XHJcbn07XHJcbiIsImNvbnN0IGJ0bkxpc3REcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdl9fYnVyZ2VyLXdyYXBwZXItZm9yLWxpbmUnKTtcclxuY29uc3QgbmF2TWFpbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZfX21haW4tbGlzdCcpO1xyXG5idG5MaXN0RHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcclxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gMTA4Mykgey8vYnJvd3NlciB3aW5kb3cgd2lkdGhcclxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjcm9zcycpOyAgICAgICAgIC8vd2hlbiBhZGRpbmcgYSBjbGFzcyBmcm9tIHN0aWNrcyBtYWtlcyBhIGNyb3NzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYXZNYWluTGlzdC5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd25fX2hlYWRlcl9fbmF2X19tYWluLWxpc3QnKTsvL3doZW4gYWRkaW5nIGEgY2xhc3MsIGl0IG1ha2VzIGEgbGlzdCBkcm9wIGRvd25cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3MnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmF2TWFpbkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcC1kb3duX19oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiIsIi8vZHJvcCBkb3duIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0IGFuZCBoZWFkZXJfX25hdl9fbWFpbi1saXN0X19pdGVtX19zdWItbGlzdF9faXRlbV9fbGFzdC1saXN0IFxyXG5jb25zdCBhcnJvd09wZW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93LXJpZ3RoLXdyYXBwZXInKTtcclxuYXJyb3dPcGVuTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7Ly93aGVuIHlvdSBjbGljayBvbiB0aGUgYXJyb3cgYSBsaXN0IGRyb3AgZG93blxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tbGlzdCcpKSB7Ly9pdCB3aWxsIGJlIGVpdGhlciBoZWFkZXJfX25hdl9fbWFpbi1saXN0X19pdGVtX19zdWItbGlzdCBvciBhIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0X19pdGVtX19sYXN0LWxpc3RcclxuICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnb3Blbi1saXN0JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLWxpc3QnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYXJyb3ctcmlndGgtd3JhcHBlci1yb3RhdGUnKSkgey8vc3BpbnMgYnkgYWRkaW5nIGEgY2xhc3NcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhcnJvdy1yaWd0aC13cmFwcGVyLXJvdGF0ZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhcnJvdy1yaWd0aC13cmFwcGVyLXJvdGF0ZScpXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiIsIi8vYmVnaW4gLy9lbGVtZW50cyBmb3Igb3BlbmluZyBtb2RhbCB3aW5kb3dzXHJcbmNvbnN0IG9wZW5SZWdpc3RyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faXRlbXNfX3Nob3BwaW5nLWNhcmQnKTtcclxuY29uc3Qgb3BlbkNhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faXRlbXNfX2NhbGwnKTtcclxuY29uc3Qgb3BlbkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faXRlbXNfX2F1dGhvcml6YXRpb24nKTtcclxuY29uc3Qgb3BlbkZvcmdvdFlvdXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHb1RvRm9yZ290LXlvdXItcGFzc3dvcmQnKTtcclxuY29uc3Qgb3BlbkdvVG9Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb1RvTG9naW4nKTtcclxuY29uc3Qgb3BlbkdvVG9SZWdpc3RyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9SZWdpc3RyJyk7XHJcbmNvbnN0IG9wZW5Db2RlRnJvbVNtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHb1RvQ29kZUZyb21TbXMnKTtcclxuY29uc3Qgb3Blbk5ld1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9OZXdQYXNzd29yZCcpO1xyXG5jb25zdCBjb250YWN0T3Blbk1vZGFsUXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxxdWVzdGlvbicpOy8vZm9yIGNvbnRhY3RzLmh0bWxcclxuY29uc3Qgd2lkZ2V0T3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndpZGdldC1vcGVuLW1vZGFsJyk7IC8vaW4gdGhlIHdpZGdldCwgdGhpcmQgaXRlbSBmcm9tIHRoZSB0b3BcclxuLy9lbmRcclxuXHJcbi8vYmVnaW4gLy9tb2RhbCB3aW5kb3dzXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IGxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19sb2dpbicpO1xyXG5jb25zdCByZWdpc3RyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19yZWdpc3RyJyk7XHJcbmNvbnN0IGZvcmdvdFlvdXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZm9yZ290LXlvdXItcGFzc3dvcmQnKTtcclxuY29uc3QgY29kZUZyb21TbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvZGUtZnJvbS1zbXMnKTtcclxuY29uc3QgbmV3UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX25ldy1wYXNzd29yZCcpO1xyXG5jb25zdCBjYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2FsbGJhY2snKTtcclxuY29uc3QgYXNrQVF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hc2stYS1xdWVzdGlvbicpO1xyXG4vL2VuZFxyXG5cclxuLy9iZWdpbiAgLy9jbG9zZSBtb2RhbCB3aW5kb3dzXHJcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fY2xvc2VcIik7XHJcbi8vZW5kXHJcblxyXG4vL2JlZ2luIC8vZXZlcnl0aGluZyByZWxhdGVkIHRvIHByaXZhY3kgcG9saWN5XHJcbmNvbnN0IHBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXBvbGl0aWNzJyk7XHJcbmNvbnN0IG9wZW5Qb2xpdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb1RvUG9saXRpY3MnKTtcclxuY29uc3QgY2xvc2VQb2xpdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wb2xpdGljc19fY2xvc2UnKTtcclxuY29uc3QgY2xvc2VCdG5Qb2xpdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2xpdGljLWJ1dHRvbi1jbG9zZScpO1xyXG4vL2VuZFxyXG5cclxuLy9tb2RhbC5zdHlsZS5oZWlnaHQgPSBgJHttb2RhbC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodH1weGA7Ly9mb3IgdGV4dGFyZWFHcm93LmpzXHJcblxyXG5cclxuXHJcblxyXG4vL2NvbnN0IG9wZW5Nb2RhbFJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXJld2lld3NfX2xlYXZlLWZlZWRiYWNrJyk7XHJcbi8vY29uc3QgbW9kYWxSZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3JldmlldycpO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsLCBpdGVtKSB7Ly9wYXJhbWV0ZXIgbW9kYWwgPT0gb24gbGluZSAxNSAvIHBhcmFtZXRlciBpdGVtID09IGxvZ2luIG9yIHJlZ2lzdHIgYW5kIGV0Yy4gb24gbGluZSAxNlxyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgIT0gLTEpIHsgLy9mb3IgdGV4dGFyZWFHcm93LmpzIHRvIHdvcmsgaW4gRmlyZWZveCBicm93c2VyXHJcbiAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9fYXNrLWEtcXVlc3Rpb24nKSl7XHJcbiAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS5zZXRBdHRyaWJ1dGUoXCJDb2xzXCIsIGAyNGApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgIH0gXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGUpIHsvL2lmIHlvdSBjbGljayBvbiBzb21ldGhpbmcgb3RoZXIgdGhhbiBhIG1vZGFsIHdpbmRvdywgaXQgd2lsbCBjbG9zZSB0aGUgbW9kYWwgd2luZG93XHJcbiAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgcmVnaXN0ci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY2FsbGJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGxvZ2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBmb3Jnb3RZb3VyUGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGNvZGVGcm9tU21zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBuZXdQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgYXNrQVF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAvL21vZGFsUmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09IHBvbGl0aWNzKSB7XHJcbiAgICAgICAgcG9saXRpY3MuY2xhc3NMaXN0LmFkZCgnaGlkZS1wb2xpdGljcycpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xvc2VidG4oZSkgey8vY2xvc2VzIG1vZGFsIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIGJ0blxyXG4gICAgaWYgKGUudGFyZ2V0ID09IGNsb3NlUG9saXRpY3MgfHwgZS50YXJnZXQgPT0gY2xvc2VCdG5Qb2xpdGljcykge1xyXG4gICAgICAgIHBvbGl0aWNzLmNsYXNzTGlzdC5hZGQoJ2hpZGUtcG9saXRpY3MnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHJlZ2lzdHIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGNhbGxiYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBsb2dpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZm9yZ290WW91clBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBjb2RlRnJvbVNtcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgbmV3UGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGFza0FRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgLy9tb2RhbFJldmlldy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xvc2XQoXVycmVudE9wZW5MaW5rKGNsb3NlLCBvcGVuKSB7Ly9jbG9zZSBvbmUgbW9kYWwgd2luZG93IGFuZCBvcGVuIGFub3RoZXJcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIG9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xvc2XQoXVycmVudE9wZW5sb2dpbihlKSB7Ly8oZSkgPT0gb3BlbkdvVG9Mb2dpbiA9PSBlbGVtZW50IHdpdGggY2xhc3MgLmdvVG9Mb2dpbiwgY2xvc2VzdChcIi5tb2RhbF9fYmxvY2tcIikgaXMgc2V0IG9uIHRoaXMgZWxlbWVudC5cclxuICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWxfX2Jsb2NrXCIpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsvL3doZW4gY2xpY2tpbmcgb24gYW4gZWxlbWVudCB3aXRoIHRoZSBjbGFzcyAuZ29Ub0xvZ2luLCBcclxuICAgIGxvZ2luLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgICAgICAgICAgICAgICAgICAgICAgICAgLy9pdCB3aWxsIGdvIHRocm91Z2ggYWxsIGVsZW1lbnRzIGluY2x1ZGluZyBwYXJlbnRzIHVwIHRvIHRoZSByb290IGVsZW1lbnQgdW50aWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaXQgZmluZHMgYW4gZWxlbWVudCB3aXRoIHRoZSBjbGFzcyAubW9kYWxfX2Jsb2NrLCBzdG9wLCBhbmQgYWRkIHRoZSBjbGFzcyAuaGlkZSB0byB0aGlzIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsUG9saXRpY3MoKSB7XHJcbiAgICBwb2xpdGljcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLXBvbGl0aWNzJyk7XHJcbn1cclxuXHJcblxyXG5vcGVuUmVnaXN0ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgcmVnaXN0cikpOy8vb24gbGluZSA0N1xyXG5vcGVuQ2FsbGJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGNhbGxiYWNrKSk7XHJcbm9wZW5Mb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgbG9naW4pKTtcclxud2lkZ2V0T3Blbk1vZGFsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBjYWxsYmFjaykpO1xyXG53aWRnZXRPcGVuTW9kYWxbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGFza0FRdWVzdGlvbikpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XHJcbmNsb3NlLmZvckVhY2goKGVsZW1lbnQpID0+IHsgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlYnRuKSB9KTsvL29uIGxpbmUgNTlcclxuXHJcbm9wZW5Hb1RvTG9naW4uZm9yRWFjaCgoaXRlbSkgPT4geyBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2XQoXVycmVudE9wZW5sb2dpbikgfSk7XHJcblxyXG5vcGVuRm9yZ290WW91clBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGxvZ2luLCBmb3Jnb3RZb3VyUGFzc3dvcmQpKTsvL29uIGxpbmUgOTNcclxub3BlbkdvVG9SZWdpc3RyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGxvZ2luLCByZWdpc3RyKSk7XHJcbm9wZW5Db2RlRnJvbVNtcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3Nl0KF1cnJlbnRPcGVuTGluayhmb3Jnb3RZb3VyUGFzc3dvcmQsIGNvZGVGcm9tU21zKSk7XHJcbm9wZW5OZXdQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3Nl0KF1cnJlbnRPcGVuTGluayhjb2RlRnJvbVNtcywgbmV3UGFzc3dvcmQpKTtcclxuXHJcbm9wZW5Qb2xpdGljcy5mb3JFYWNoKChpdGVtKSA9PiB7Ly9vbiBsaW5lIDEwNVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbFBvbGl0aWNzKTtcclxufSk7XHJcbmNsb3NlUG9saXRpY3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZWJ0bik7ICAgLy9vbiBsaW5lIDU5XHJcbmNsb3NlQnRuUG9saXRpY3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZWJ0bik7Ly9vbiBsaW5lIDU5ICBcclxuXHJcblxyXG5pZiggY29udGFjdE9wZW5Nb2RhbFF1ZXN0aW9uICl7XHJcbiAgICBjb250YWN0T3Blbk1vZGFsUXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGFza0FRdWVzdGlvbikpO1xyXG59O1xyXG5cclxuLy9vcGVuTW9kYWxSZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIG1vZGFsUmV2aWV3KSk7XHJcblxyXG5cclxuIiwiLy9sZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkZS1zaG93LXBhc3N3b3JkJyk7IC8vIGZvciB2ZXIuIDFcclxubGV0IGV5ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leWUnKTtcclxuY29uc3QgYnRuUGFzc0NoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkLWNoZWNrJyk7XHJcbmxldCBtZXNzYWdlUGFzc01pc21hdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3N3b3Jkcy1kby1ub3QtbWF0Y2gnKTtcclxubGV0IHR3b0lucHV0UGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXNzQ2hlY2snKTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9wZW4oZSkge1xyXG5cclxuICAgIC8vdmVyLjEgVGhpcyB2ZXJzaW9uIG9mIHRoZSBjb2RlIGhpZC9zaG93ZWQgdGhlIHBhc3N3b3JkIGZvciBhbGwgaW5wdXRzIHdoZW4gY2xpY2tpbmcgb24gdGhlIGV5ZVxyXG5cclxuICAgIC8qcGFzc3dvcmQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgICAgICBpdGVtLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgIGV5ZS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZXllJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS50eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICAgICAgZXllLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnaGlkZS1leWUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkgICovXHJcblxyXG4gICAgLy9Ob3cgaGlkZXMvc2hvd3Mgb25seSB0aGUgaW5wdXQgdGhhdCByZWxhdGVzIHRvIHRoZSBwcmVzc2VkIGV5ZVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnR5cGUgPT0gJ3Bhc3N3b3JkJykgey8vd2hlbiBjbGlja2luZyBvbiB0aGUgZXllIGlmIHRoZSBpbnB1dCBpcyBvZiB0eXBlICdwYXNzd29yZCdcclxuICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnR5cGUgPSAndGV4dCc7ICAgICAgIC8vdGhlbiByZXBsYWNlIHdpdGggdHlwZSAndGV4dCdcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWV5ZScpICAgICAgICAgICAgICAgIC8vb3BlbiBleWUgdGhyb3VnaCBjbGFzcyByZW1vdmFsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudHlwZSA9ICdwYXNzd29yZCc7Ly9vdGhlcndpc2UgYXNzaWduIHRoZSB0eXBlICdwYXNzd29yZCcgKHJlcGxhY2VzIHN5bWJvbHMgd2l0aCBkb3RzKVxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUtZXllJyk7ICAgICAgICAgICAgICAgLy9hbmQgd2lsbCBjbG9zZSB0aGUgZXllIGFzIGEgcmVzdWx0IG9mIGFkZGluZyB0aGUgY2xhc3NcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leWUuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW4pO1xyXG59KTtcclxuXHJcblxyXG5idG5QYXNzQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoISh0d29JbnB1dFBhc3NbMF0udmFsdWUgPT0gdHdvSW5wdXRQYXNzWzFdLnZhbHVlKSkgeyAvL2lmIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZmllbGQgZG9lcyBub3QgbWF0Y2ggdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQgZmllbGRcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlbiBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkXHJcbiAgICAgICAgbWVzc2FnZVBhc3NNaXNtYXRjaC5pbm5lckhUTUwgPSAn0J3QtdGB0L7QstC/0LDQtNC10L3QuNC1INC/0LDRgNC+0LvQtdC5JzsvL2FuZCB3aWxsIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IHRoZSBwYXNzd29yZCBtaXNtYXRjaFxyXG4gICAgfTtcclxuXHJcbn0pO1xyXG5cclxudHdvSW5wdXRQYXNzLmZvckVhY2goKGl0ZW0pID0+IHsgICAgICAgICAgLy93aXRoIGVhY2ggbmV3IGVudHJ5IGl0IHdpbGwgZGVsZXRlIHRoZSBtZXNzYWdlIGFib3V0IHBhc3N3b3JkIG1pc21hdGNoXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlUGFzc01pc21hdGNoLmlubmVySFRNTCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlUGFzc01pc21hdGNoLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7IiwiLy9mb3IgZm9yUGFydG5lcnMuaHRtbCwgYWNjb3VudC5odG1sLCBwbGFjaW5nQW5PcmRlci5odG1sLFxyXG5jb25zdCByYWRpb1BlcnNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWVsZHNldF9faXRlbSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuY29uc3QgZm9ybUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWFpbiAuZm9ybV9faXRlbScpO1xyXG5jb25zdCBkZWxpdmVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21haW4gW2RhdGEtaGlkZS1kZWxpdmVyeV0nKTsvL2ZvciBkZWxpdmVyeSBtZXRob2Qgb24gcGFnZSBwbGFjaW5nQW5PcmRlci5odG1sXHJcblxyXG5cclxuXHJcblxyXG5yYWRpb1BlcnNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtZm9ybUl0ZW1zIG9mIGZvcm1JdGVtcykge1xyXG4gICAgICAgICAgICBpZiAoaXRlbWZvcm1JdGVtcy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkgey8vcmV2ZWFscyBhbGwgZWxlbWVudHNcclxuICAgICAgICAgICAgICAgIGl0ZW1mb3JtSXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICBhbGlnbkJvZHkoKS8vZm9yIHNjcmlwdC9hbmltYXRpb24uanMgKHNtb290aFNjcm9sbClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gaXRlbWZvcm1JdGVtcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGlkZScpKSB7Ly9pZiB0aGUgcmFkaW9QZXJzb24gaWQgbWF0Y2hlcyB0aGUgZGF0YS1oaWRlIG9mIHRoZSBmb3JtIGVsZW1lbnQsIGl0IHdpbGwgaGlkZSBpdFxyXG4gICAgICAgICAgICAgICAgaXRlbWZvcm1JdGVtcy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICAgICAgICAgIGFsaWduQm9keSgpLy9mb3Igc2NyaXB0L2FuaW1hdGlvbi5qcyAoc21vb3RoU2Nyb2xsKSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PSAnZGVsaXZlcnknKSB7Ly9zaW1pbGFybHksIHNlZSBhYm92ZVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtZGVsaXZlcnkgb2YgZGVsaXZlcnkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1kZWxpdmVyeS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGl0ZW1kZWxpdmVyeS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGlkZS1kZWxpdmVyeScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbWRlbGl2ZXJ5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcbn0pOyIsIi8vdG8gZ28gdG8gdGhlIHByZXZpb3VzIHBhZ2UgYnkgbmF2aWdhdGlvblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG5sZXQgYWxsTGlTZWNvbmROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kYXJ5LW5hdiBsaScpO1xyXG5cclxuLy90YWtlcyB0aGUgbGluayBhZGRyZXNzIGZyb20gdGhlIHByZXZpb3VzIGVsZW1lbnQgYW5kIHB1dHMgaXQgaW50byB0aGUgYXJyb3cgbGluayBvZiB0aGUgbGFzdCBlbGVtZW50XHJcbmxldCBsaW5rQWRyZXNzID0gYWxsTGlTZWNvbmROYXZbKGFsbExpU2Vjb25kTmF2Lmxlbmd0aCAtIDIpXS5jaGlsZE5vZGVzWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cclxuYWxsTGlTZWNvbmROYXZbKGFsbExpU2Vjb25kTmF2Lmxlbmd0aCAtIDEpXS5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtBZHJlc3MpO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IG1vZGFsQXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hc2stYS1xdWVzdGlvbicpO1xyXG5jb25zdCBhc2tUZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc2stYS1xdWVzdGlvbl9fcXVlc3Rpb24nKTtcclxuY29uc3QgcGFyZW50QXNrVGV4dGFyZWEgPSBhc2tUZXh0YXJlYS5wYXJlbnRFbGVtZW50O1xyXG4vL2NvbnNvbGUubG9nKHBhcmVudEFza1RleHRhcmVhKTtcclxubGV0IGluaXRpYWxXaWR0aEFza1RleHRhcmVhID0gKyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhc2tUZXh0YXJlYSkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpLnNsaWNlKDAsIC0yKSk7Ly90aGUgaW5pdGlhbCB3aWR0aCBvZiB0aGUgdGV4dGFyZWEgaXMgdGFrZW5cclxuLy9jb25zb2xlLmxvZyhpbml0aWFsV2lkdGhBc2tUZXh0YXJlYSk7XHJcblxyXG4vL3dpZHRoIGFuZCBoZWlnaHQgcmVzdHJpY3Rpb25zIGF0IGFwcHJveGltYXRlbHkgbGluZSA5Mzgoc2NzcylcclxuXHJcbmFza1RleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coYXNrVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0KVxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTgwKSB7XHJcbiAgICAgICAgaWYgKGUuaW5wdXRUeXBlID09ICdpbnNlcnRUZXh0JyAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPiAyNiAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPCA1NCkge1xyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2Fza1RleHRhcmVhLmNsaWVudFdpZHRoICs9IDEwfXB4YDsgLy9pZiB0aGUgbnVtYmVyIG9mIGVudGVyZWQgY2hhcmFjdGVycyBtYXRjaGVzIHRoZSBjb25kaXRpb25zIGFib3ZlLCB0aGUgdGV4dGFyZWEgd2lsbCBncm93IGluIHdpZHRoIGJ5IDEwcHggYWZ0ZXIgZWFjaCBpbnB1dFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5pbnB1dFR5cGUgPT0gJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCcgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoID4gMjYgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDwgNTQgJiYgYXNrVGV4dGFyZWEuY2xpZW50V2lkdGggPiBpbml0aWFsV2lkdGhBc2tUZXh0YXJlYSkge1xyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2Fza1RleHRhcmVhLmNsaWVudFdpZHRoIC09IDV9cHhgOy8vaWYgdGhlcmUgaXMgYSBkZWxldGlvbiBvZiBjaGFyYWN0ZXJzLCB0aGUgdGV4dGFyZWEgd2lsbCBzaHJpbmtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuaW5wdXRUeXBlID09ICdkZWxldGVDb250ZW50QmFja3dhcmQnICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA8PSAyNSkge1xyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2luaXRpYWxXaWR0aEFza1RleHRhcmVhfXB4YDsvL2FkanVzdCB0ZXh0YXJlYSB3aWR0aCB0byBpbml0aWFsIHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGEpO1xyXG4gICAgICAgIGlmIChlLmRhdGEgIT0gbnVsbCAmJiBlLmRhdGEubGVuZ3RoID4gMSkgey8vaWYgdGhlIGVudGlyZSByZXZpZXcgaXMgaW5zZXJ0ZWQgLyBlLmRhdGEgIT0gbnVsbCAtPiBudWxsID0gd2hlbiBwcmVzc2luZyBlbnRlciBvciBiYWNrc3BhY2VcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSAnNTAwcHgnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDwgMSkgey8vaWYgYWxsIHRleHQgaXMgZGVsZXRlZCBhdCBvbmNlXHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7aW5pdGlhbFdpZHRoQXNrVGV4dGFyZWF9cHhgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA+IDI2KSB7Ly9yZWFycmFuZ2UgZWxlbWVudHMgd2hlbiB0ZXh0YXJlYSBncm93c1xyXG4gICAgICAgICAgICBwYXJlbnRBc2tUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYS1jb2x1bW4nKVxyXG4gICAgICAgICAgICBtb2RhbEFzay5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYXNrLWEtcXVlc3Rpb24tYmlnLWFzaycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50QXNrVGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgndGV4dGFyZWEtY29sdW1uJylcclxuICAgICAgICAgICAgbW9kYWxBc2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2Fzay1hLXF1ZXN0aW9uLWJpZy1hc2snKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc2tUZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjsgIC8vdGV4dGFyZWEgaGVpZ2h0IGdyb3d0aFxyXG4gICAgYXNrVGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYXNrVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiOy8vIFxyXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYWxsU2NyaXB0cy9hbmltYXRpb24uanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoMTEyMHB4LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDczNXB4LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvc2Vjb25kYXJ5TmF2QXJyb3dMaW5rczMyMC5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL3JhZGlvUGVyc29uLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvV2lkZ2V0LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvbW9kYWwuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9wYXNzLWV5ZS5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL1Bob25lTWFzay5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL09UUC1JbnB1dC1maWVsZChzbXMpLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvdGV4dGFyZWFHcm93LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvYnV0dG9uRm9ybUNvbnNlbnRDaGVjay5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2FuaW1hdGVGb290ZXIuanMnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==