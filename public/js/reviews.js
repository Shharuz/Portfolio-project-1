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
/*!*******************************!*\
  !*** ./src/script/reviews.js ***!
  \*******************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxVQUFVLHdDQUF3QztBQUNsRCx5Q0FBeUMsd0JBQXdCO0FBQ2pFO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtEQUErRDtBQUMvRCxDQUFDLEM7Ozs7OztVQ3RDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQzRCO0FBQ0Q7QUFDWDtBQUNuQjtBQUNEO0FBQ0c7QUFDQztBQUNXO0FBQ1I7QUFDVSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9PVFAtSW5wdXQtZmllbGQoc21zKS5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9XaWRnZXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGVGb290ZXIuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYnV0dG9uRm9ybUNvbnNlbnRDaGVjay5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDExMjBweC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDczNXB4LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvcGFzcy1leWUuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3NlY29uZGFyeU5hdkFycm93TGlua3MzMjAuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3RleHRhcmVhR3Jvdy5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9yZXZpZXdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdG8gY29ycmVjdGx5IGZpbGwgaW4gdGhlIGZpZWxkcyhpbnB1dHMpIGluIHRoZSBtb2RhbCB3aW5kb3cgKGVsZW1lbnQgd2l0aCBjbGFzcyAubW9kYWxfX2NvZGUtZnJvbS1zbXMpXHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiT1RQaW5wdXRzXCIpO1xyXG5cclxuaW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbihlKSB7Ly93aGVuIHRoZSBjaGFyYWN0ZXJzIHdpbGwgYmUgZW50ZXJlZFxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7ICAgICAgICAgICAgICAgICAgLy90aGUgZmllbGQgaW4gd2hpY2ggdGhlIHN5bWJvbCBpcyBjdXJyZW50bHkgZW50ZXJlZFxyXG4gICAgY29uc3QgdmFsID0gdGFyZ2V0LnZhbHVlOyAgICAgICAgICAgICAgICAgLy90aGUgdmFsdWUgb2YgdGhpcyBmaWVsZFxyXG5cclxuICAgIGlmIChpc05hTih2YWwpKSB7ICAgICAgICAvL3doZW4gZW50ZXJpbmcgYW55IGNoYXJhY3RlciB0aGF0IGlzIG5vdCBhIG51bWJlciwgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmdcclxuICAgICAgICB0YXJnZXQudmFsdWUgPSBcIlwiOyAgICAgIC8vIGl0IHdvbid0IGxldCB5b3UgZW50ZXIgYW55dGhpbmcgZXhjZXB0IG51bWJlcnNcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbCAhPSBcIlwiKSB7ICAgICAgICAgICAgIC8vaWYgYSBudW1iZXIgaXMgZW50ZXJlZCwgaXQgZ29lcyB0byB0aGUgbmV4dCBmaWVsZChpbnB1dClcclxuICAgICAgICBjb25zdCBuZXh0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICBuZXh0LmZvY3VzKCk7ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5pbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29uc3Qga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTsgICAgICAgIC8vdGhlIG51bWJlcnMgeW91IGVudGVyIHdpbGwgYWx3YXlzIGJlIGluIHVwcGVyY2FzZSAgXHJcblxyXG4gICAgaWYgKGtleSA9PSBcImJhY2tzcGFjZVwiIHx8IGtleSA9PSBcImRlbGV0ZVwiKSB7Ly93aGVuIGEgY2hhcmFjdGVyIGlzIGRlbGV0ZWQsIGl0IG1vdmVzIHRvIHRoZSBwcmV2aW91cyBmaWVsZFxyXG4gICAgICAgIHRhcmdldC52YWx1ZSA9IFwiXCI7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByZXYgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAocHJldikge1xyXG4gICAgICAgICAgICBwcmV2LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufSk7IiwiXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbGV0IHBob25lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbZGF0YS10ZWwtaW5wdXRdJyk7XHJcblxyXG4gICAgbGV0IGdldElucHV0TnVtYmVyc1ZhbHVlID0gZnVuY3Rpb24oaW5wdXQpIHsgLy9wcm9oaWJpdGlvbiBvbiBlbnRlcmluZyBhbGwgc3ltYm9scyBleGNlcHQgbnVtYmVyc1xyXG4gICAgICAgIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb25QaG9uZUlucHV0ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL9GN0LvQtdC80LXQvdGCINC40L3Qv9GD0YJcclxuICAgICAgICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCk7Ly/RhdGA0LDQvdGP0YLRgdGPINGC0L7Qu9GM0LrQviDRh9C40YHQu9CwXHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDsvL0kgZG9uJ3Qga25vdyB3aHlcclxuXHJcbiAgICAgICAgLyppZiAoIWlucHV0TnVtYmVyc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWRpdGluZyBtaWRsZSBzdHJpbmcnLCBlKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyc1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9Ki9cclxuXHJcblxyXG4gICAgICAgIGlmIChbXCI3XCIsIFwiOFwiLCBcIjlcIl0uaW5kZXhPZihpbnB1dE51bWJlcnNWYWx1ZVswXSkgPiAtMSkge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWVbMF0gPT0gXCI5XCIpIGlucHV0TnVtYmVyc1ZhbHVlID0gXCI3XCIgKyBpbnB1dE51bWJlcnNWYWx1ZTsvL2lmIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgOSB0aGVuIHJlcGxhY2UgaXQgd2l0aCA3IDlcclxuXHJcbiAgICAgICAgICAgIGxldCBmaXJzdFN5bWJvbHMgPSAoaW5wdXROdW1iZXJzVmFsdWVbMF0gPT0gXCI4XCIpID8gXCI4XCIgOiBcIis3XCI7Ly9pZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIDggdGhlbiBpdCB3aWxsIHJldHVybiA4IG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiArN1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gZmlyc3RTeW1ib2xzICsgXCIgXCI7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPiAxKSB7IC8vaWYgbW9yZSB0aGFuIDEgY2hhcmFjdGVyIGlzIGVudGVyZWQsIFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKCcgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMSwgNCk7Ly9pdCB3aWxsIGFkZCAnKCcgKyBjaGFyYWN0ZXJzIGZyb20gMm5kIHRvIDV0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gNSkgey8vaWYgNSBvciBtb3JlIGNoYXJhY3RlcnMgYXJlIGVudGVyZWRcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg0LCA3KTsvL2l0IHdpbGwgYWRkICcpICcgKyBjaGFyYWN0ZXJzIGZyb20gNW5kIHRvIDh0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gOCkgey8vaWYgOCBvciBtb3JlIGNoYXJhY3RlcnMgYXJlIGVudGVyZWRcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDcsIDkpOy8vaXQgd2lsbCBhZGQgJy0nICsgY2hhcmFjdGVycyBmcm9tIDhuZCB0byAxMHRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSAxMCkgey8vaWYgMTAgb3IgbW9yZSBjaGFyYWN0ZXJzIGFyZSBlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg5LCAxMSk7Ly9pdCB3aWxsIGFkZCAnLScgKyBjaGFyYWN0ZXJzIGZyb20gMTBuZCB0byAxMnRoXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gXCIrXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMCwgMTYpOy8vaXQgd2lsbCBhZGQgJysnICsgY2hhcmFjdGVycyBmcm9tIDFzdCB0byAxMnRoXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgb25QaG9uZUlucHV0S2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmtleUNvZGUsIGUudGFyZ2V0LnZhbHVlKTsvL2tleSBjb2RlIGFuZCBpbnB1dCB2YWx1ZSAoICAgMTAwIC0gY29kZSAgICAgICAgICcrNyAoOTg0KSA1NicgLSBpbnB1dCB2YWx1ZSAgICApXHJcbiAgICAgICAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA4ICYmIGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KS5sZW5ndGggPT0gMSkgey8vaWYgYmFja3NwYWNlIGlzIGVudGVyZWQoa2V5Q29kZSA9PSA4KSwgdGhlIGlucHV0IHZhbHVlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCAnJ1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgb25QaG9uZVBhc3RlID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwYXN0ZWQgPSBlLmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7Ly90aGUgY29waWVkIG51bWJlciBpcyBzdG9yZWRcclxuICAgICAgICBpbnB1dCA9IGUudGFyZ2V0Oy8vaW5wdXQgc3RvcmVkXHJcbiAgICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCk7Ly90aGUgaW5wdXQgaXMgY2hlY2tlZCB0byBtYWtlIHN1cmUgdGhlcmUgYXJlIG9ubHkgbnVtYmVyc1xyXG5cclxuICAgICAgICBpZiAocGFzdGVkKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGFueSBkYXRhIHdoZW4gaW5zZXJ0aW5nXHJcbiAgICAgICAgICAgIGxldCBwYXN0ZWRUZXh0ID0gcGFzdGVkLmdldERhdGEoJ3RleHQnKTsvL2luc2VydHMgYSB2YWx1ZSBhcyBhIHN0cmluZyBmcm9tIHRoZSBjb3BpZWQgdGV4dFxyXG4gICAgICAgICAgICBpZiAoL1xcRC9nLnRlc3QocGFzdGVkVGV4dCkpIHsgICAgICAgICAgIC8vY2hlY2tzIHRoYXQgdGhlcmUgYXJlIG9ubHkgbnVtYmVyc1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGhvbmVJbnB1dHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSBwaG9uZUlucHV0c1tpXTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uUGhvbmVJbnB1dCk7Ly9vbiBsaW5lIDEwXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUGhvbmVJbnB1dEtleURvd24pOy8vb24gbGluZSA1NlxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QaG9uZVBhc3RlKTsvL29uIGxpbmUgNjRcclxuICAgIH07XHJcblxyXG5cclxufSkiLCJjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdWwnKTtcclxuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3RyaWdnZXInKTtcclxuY29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcl9fbWFpbicpO1xyXG5jb25zdCBjcm9zcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3RyaWdnZXJfX2Nyb3NzJyk7XHJcblxyXG5sZXQgb3BlbldpZGdldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiggIWxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlV2lkZ2V0bGlzdCcpICl7Ly9zY3NzIG9uIGxpbmUgNDM0OVxyXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVXaWRnZXRsaXN0JykvL3RoZSBsaXN0IGRyb3BzIHRvIHRoZSB0b3BcclxuICAgICAgICAgICAgd2lkZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGV0cmlnZ2VyJykgICAvL2NoYW5nZXMgdGhlIHdpZGdldCBpY29uIHRvIGEgY3Jvc3NcclxuICAgICAgICAgICAgY3Jvc3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZXRyaWdnZXInKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVXaWRnZXRsaXN0JykvL3RoZSBsaXN0IGNvbWVzIGJhY2tcclxuICAgICAgICAgICAgd2lkZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGV0cmlnZ2VyJykgICBcclxuICAgICAgICAgICAgY3Jvc3MuY2xhc3NMaXN0LmFkZCgnaGlkZXRyaWdnZXInKVxyXG4gICAgICAgIH1cclxufTtcclxuXHJcblxyXG5cclxudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5XaWRnZXQpOyIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlciAuZm9vdGVyLWNvbnRhaW5lcicpO1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPT0gMCkge1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxufVxyXG5cclxubGV0IHNjcm9sbFBlcmNlbnQ7XHJcblxyXG5mdW5jdGlvbiBnZXRTY3JvbGxQZXJjZW50KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgJ3dpbmRvdy5zY3JvbGxZJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHdpbmRvdy5pbm5lckhlaWdodCwgJ3dpbmRvdy5pbm5lckhlaWdodCcpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coYm9keS5vZmZzZXRIZWlnaHQsICdib2R5Lm9mZnNldEhlaWdodCcpO1xyXG5cclxuICAgIHNjcm9sbFBlcmNlbnQgPSArKCh3aW5kb3cuc2Nyb2xsWSAvIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSAqIDEwMCkudG9GaXhlZCgyKSk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAoc2Nyb2xsUGVyY2VudCA+IDk1KSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpc2libGVGb290ZXIoKSB7Ly9pZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGF0IHRoZSB2ZXJ5IGJvdHRvbVxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPT0gMCkge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRTY3JvbGxQZXJjZW50KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHZpc2libGVGb290ZXIpO1xyXG5cclxuIiwiLy9zbW9vdGggc2Nyb2xsXHJcbmNvbnN0IGJvZHlmb3JTbW9vdGhTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvclNtb290aFNjcm9sbCcpKSB7XHJcbiAgICBjb25zdCBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvclNtb290aFNjcm9sbF9fd3JhcHBlcicpO1xyXG5cclxuICAgIC8vZ2l2ZXMgdGhlIGhlaWdodCBvZiB0aGUgYm9keSBzbyB0aGF0IHNjcm9sbGluZyBvY2N1cnNcclxuICAgIGxldCBoZWlnaHRGb3JTY3JvbGwgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmb3JTbW9vdGhTY3JvbGxXcmFwcGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XHJcbiAgICBib2R5Zm9yU21vb3RoU2Nyb2xsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OiR7aGVpZ2h0Rm9yU2Nyb2xsfXB4YCk7XHJcblxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhbGlnbkJvZHkpXHJcblxyXG4gICAgZnVuY3Rpb24gYWxpZ25Cb2R5KCkgeyAvLyBzY3JpcHQvcmFkaW9QZXJzb24gIC8gIHNjcmlwdC9jYXRlZ29yaWVzUmFkaW9cclxuICAgICAgICBoZWlnaHRGb3JTY3JvbGwgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmb3JTbW9vdGhTY3JvbGxXcmFwcGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XHJcbiAgICAgICAgYm9keWZvclNtb290aFNjcm9sbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoke2hlaWdodEZvclNjcm9sbH1weGApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzY3JQb3NZID0gMDsgLy9mb3Igc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgbGV0IGJsb2NrUG9zWSA9IHNjclBvc1k7IC8vIGZvciBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyIHBvc2l0aW9uXHJcbiAgICBsZXQgc3BlZWRBbmltID0gMC4wMzsgLy9pZiBzcGVlZEFuaW0gPiAwLjA3ICgwLjEpIGFuaW1hdGlvbiBoYXBwZW5zIGZhc3RlclxyXG4gICAgLy9pZiBzcGVlZEFuaW0gPCAwLjA3ICgwLjAyKSBhbmltYXRpb24gaXMgc2xvd2VyXHJcblxyXG5cclxuICAgIC8vIEJpbmQgYSBzY3JvbGwgZnVuY3Rpb25cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRzU2Nyb2xsVmFsdWUpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRzU2Nyb2xsVmFsdWUoKSB7XHJcbiAgICAgICAgc2NyUG9zWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNjclBvc1kpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aCk7XHJcblxyXG4gICAgLy9hbmltYXRlIGVsZW1lbnQgcmV2aWV3cy5odG1sIGFuZCBxdWVzdGlvbnMuaHRtbFxyXG5cclxuICAgIGxldCB3aW5kb3dIZWlnaHQ7XHJcbiAgICBjb25zdCBlbGVtZW50VmlzaWJsZSA9IDE7IC8vYW5pbWF0aW9uIHdpbGwgc3RhcnQgd2hlbiB0aGUgYmxvY2sgaXMgMTUwcHggYXdheSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0LlxyXG4gICAgbGV0IHNjcm9sbEVsZW1lbnRzO1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2tcclxuXHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrIFxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWFydGljbGUtbWluXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpIHtcclxuICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IC8vd2luZG93SGVpZ2h0IGdldHMgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKGlubmVySGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgZ2V0V2luZG93SGVpZ2h0KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0V2luZG93SGVpZ2h0KTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZWFyRWxlbWVudCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNjcm9sbEVsZW1lbnRzKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb3AgPSArc2Nyb2xsRWxlbWVudHNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLnRvRml4ZWQoMik7IC8vY2FsY3VsYXRlcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCB0byB0aGUgdG9wIG9mIHRoZSBibG9ja1xyXG5cclxuICAgICAgICAgICAgLy9JZiB0aGlzIGNvbmRpdGlvbiBpcyB0cnVlLCBpdCBtZWFucyB0aGUgYmxvY2sgaXMgd2l0aGluIHRoZSB2aWV3cG9ydCwgYW5kIHRoZSBjbGFzcyByZXZlYWwsIFxyXG4gICAgICAgICAgICAvL3doaWNoIGhhcyB0aGUgc3R5bGUgY2hhbmdlcywgaXMgYWRkZWQuIElmIHRoZSBibG9jayBpcyBub3Qgd2l0aGluIHRoZSBkZWZpbmVkIFxyXG4gICAgICAgICAgICAvL3Zpc2liaWxpdHkgYXJlYSwgdGhlIHJldmVhbCBjbGFzcyBpcyByZW1vdmVkLCByZXZlcnRpbmcgdGhlIGFuaW1hdGlvbi5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb3AgPCB3aW5kb3dIZWlnaHQgLSBlbGVtZW50VmlzaWJsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy9hcHBlYXJFbGVtZW50UmV2aWV3cygpO1xyXG4gICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBhcHBlYXJFbGVtZW50UmV2aWV3cyk7XHJcblxyXG4gICAgZnVuY3Rpb24gc21vb3RoKCkge1xyXG5cclxuICAgICAgICAvL1dlIGNhbGN1bGF0ZSBvdXIgY29udGFpbmVyIHBvc2l0aW9uIGJ5IGxpbmVhciBpbnRlcnBvbGF0aW9uIG1ldGhvZFxyXG4gICAgICAgIGJsb2NrUG9zWSA9IGxpbmVhcihibG9ja1Bvc1ksIHNjclBvc1ksIHNwZWVkQW5pbSkgLy9jYWxjdWxhdGUgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciBwb3NpdGlvbiBieSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBtZXRob2RcclxuXHJcbiAgICAgICAgYmxvY2tQb3NZID0gTWF0aC5mbG9vcihibG9ja1Bvc1kgKiAxMDApIC8gMTAwO1xyXG5cclxuXHJcbiAgICAgICAgZm9yU21vb3RoU2Nyb2xsV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtJHtibG9ja1Bvc1l9cHgsIDBweClgKTtcclxuXHJcblxyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aCk7XHJcbiAgICAgICAgLy9hbmltYXRlIGVsZW1lbnQgcmV2aWV3cy5odG1sIGFuZCBxdWVzdGlvbnMuaHRtbFxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaW5lYXIoYXJnMSwgYXJnMiwgYXJnMykge1xyXG4gICAgICAgIHJldHVybiAoMSAtIGFyZzMpICogYXJnMSArIGFyZzMgKiBhcmcyO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi8vc3BsaXQgdHh0XHJcbmNvbnN0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDInKVxyXG5cclxuXHJcbmxldCBzdHJpbmdIO1xyXG5sZXQgYXJyYXlMZXR0ZXJzSCA9IFtdO1xyXG5cclxuY29uc29sZS5sb2coaDIpO1xyXG5pZiAoaDIgIT0gbnVsbCkge1xyXG4gICAgaWYgKGgyLmlkID09ICdoMmNhdGFsb2dNYWluUGFnZScpIHtcclxuICAgICAgICBsZXQgdG1wQWRhcHRpdmVIMjtcclxuICAgICAgICBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1ODApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0bXBBZGFwdGl2ZUgyICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBBZGFwdGl2ZUgyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCcwJykgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU4MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcEFkYXB0aXZlSDIgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFkYXB0aXZlSDIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDIsIDIsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChoMi5pZCA9PSAnaDJhcnRpY2xlT3JWaWRlbycpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vL2FyZzEgPSBoMSBvciBoMltpXVxyXG4vL2FyZzIgPSBhbW91bnQgbGluZXNcclxuLy9hcmczID0gYW1vdW50IHdvcmRzIGluIDEgbGluZVxyXG4vL2FyZzQgPSBhbW91bnQgd29yZHMgaW4gMiBsaW5lXHJcbi8vYXJnNSA9IGFtb3VudCB3b3JkcyBpbiAzIGxpbmVcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGluZ1dyYXBwZXJzKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUsIGFyZzYsIGFyZzcpIHtcclxuXHJcbiAgICAvL2ZvciBhZGFwdGl2ZVxyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSlcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJnMS5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgfVxyXG4gICAgaWYgKGFyZzEuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PSAnRElWJykgeyAvL2NoZWNrcyBpZiBoMiBpcyBzcGxpdCBpbnRvIGxldHRlcnNcclxuICAgICAgICBsZXQgdG1wV29yZCA9IGFyZzEucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJGb3JXb3JkJyk7IC8vdGFrZXMgYWxsIHRoZSB3b3Jkc1xyXG4gICAgICAgIGxldCB0bXBBcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRtcFdvcmQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0bXBXb3JkW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyU3ltYm9sJyk7IC8vdGFrZXMgYWxsIGNoYXJhY3RlcnMgaW4gZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2hhci5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFyW3ldLmlubmVySFRNTCkgICBcclxuICAgICAgICAgICAgICAgIHRtcEFyci5wdXNoKGNoYXJbeV0uaW5uZXJIVE1MKTsgLy/RgWhhciBwdXRzIGludG8gYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmICh5ID09IChjaGFyLmxlbmd0aCAtIDEpKSB7IC8vaWYgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgd29yZCwgdGhlbiBpdCB3aWxsIGFkZCBhIHNwYWNlIHRvIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFyci5wdXNoKCcgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRtcEFycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmcxLmlubmVySFRNTCA9IFwiXCI7IC8vd2lsbCBjbGVhciBoMlxyXG4gICAgICAgIGFyZzEuaW5uZXJIVE1MID0gdG1wQXJyLmpvaW4oXCJcIik7IC8vdGhlIGxpbmUgY2xlYXJlZCBvZiB3cmFwcGVycyB3aWxsIGJlIGFkZGVkIHRvIGgyXHJcbiAgICAgICAgLy9hcmcxLmFwcGVuZCh0bXBBcnIuam9pbihcIlwiKSk7XHJcbiAgICB9XHJcbiAgICAvKmlmKGFyZzEuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmUnKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygncnJycnJycnInKVxyXG4gICAgfSovXHJcblxyXG4gICAgc3RyaW5nSCA9IGFyZzEuaW5uZXJIVE1MOyAvL3RoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IChzdHJpbmcpIGlzIHB1dCBpbnRvIGEgdmFyaWFibGVcclxuICAgIGFyZzEuaW5uZXJIVE1MID0gJyc7IC8vemVyb2luZyBjb250ZW50IHRvIGFkZCB3cmFwcGVycyB3aXRoIGNvbnRlbnRcclxuICAgIGFycmF5TGV0dGVyc0ggPSBbXSAvL2FycmF5IHplcm9pbmcgPz8/IGl0IHNlZW1zIHRvIGJlIHJlc2V0IHRvIHplcm8gYXJvdW5kIGxpbmUgMjA5ID8/P1xyXG4gICAgZm9yIChsZXQgY2hhciBvZiBzdHJpbmdIKSB7IC8vdGhlIHN0cmluZyBpcyBzcGxpdCBpbnRvIGNoYXJhY3RlcnMgYW5kIGFkZGVkIHRvIHRoZSBhcnJheVxyXG4gICAgICAgIGFycmF5TGV0dGVyc0gucHVzaChjaGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxldHRlcnNILmxlbmd0aDsgKytpKSB7IC8vY291bnQgd29yZHMgaW4gYSBsaW5lLCByZWxhdGl2ZSB0byAnICdcclxuICAgICAgICBpZiAoYXJyYXlMZXR0ZXJzSFtpXSA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGxlbmdodEFyciA9IGFycmF5TGV0dGVyc0gubGVuZ3RoO1xyXG5cclxuICAgIGlmIChhcmcyID09IDEpIHsgLy9pZiB5b3UgbmVlZCB0byBtYWtlIGEgbGluZSBpbiAxIGxpbmVcclxuICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpbmcgYSBsaW5lIGFuZCBhZGRpbmcgaXQgdG8gYW4gZWxlbWVudCAoSDEgb3IgSDIpXHJcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgYXJnMS5hcHBlbmQobGluZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKGFyZzIgPiAxKSB7IC8vaWYgeW91IG5lZWQgdG8gbWFrZSBhIGxpbmUgaW4gMiBsaW5lcyBvciBtb3JlXHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBhcmcyOyArK3kpIHsgLy8geSA8IGFyZzIoMykgPSBtYWtlIDMgbGluZXMgXHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGluZyBhIGxpbmUgYW5kIGFkZGluZyBpdCB0byBhbiBlbGVtZW50IChIMSBvciBIMilcclxuICAgICAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgICAgIGFyZzEuYXBwZW5kKGxpbmUpO1xyXG4gICAgICAgICAgICBpZiAoeSA9PSAwKSB7IC8vMVNUIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzM7ICsraSkgeyAvLyAgaSA8IGFyZzMoMikgPSAgMiB3b3JkcyBpbiBsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAxKSB7IC8vMk5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzQ7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzQoMykgPSAgMyB3b3JkcyBpbiBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSkgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAyKSB7IC8vM05EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzU7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzUoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDMpIHsgLy80TkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNjsgKytpKSB7IC8vIC8vICBpIDwgYXJnNigyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gNCkgeyAvLzVORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc3OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc3KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMoYXJnMSkge1xyXG4gICAgICAgIC8vYnkgdGhlIHRlcm0gd29yZCBhbmQgc3ltYm9sLCB3ZSBtZWFuIGEgd3JhcHBlciBmb3IgYSB3b3JkIGFuZCBzeW1ib2xcclxuICAgICAgICBsZXQgd3JhcHBlckZvcldvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW9uIG9mIGEgd29yZFxyXG4gICAgICAgIHdyYXBwZXJGb3JXb3JkLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXJGb3JXb3JkJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuZ2h0QXJyOyArK3kpIHtcclxuICAgICAgICAgICAgaWYgKGFycmF5TGV0dGVyc0hbMF0gPT0gXCIgXCIpIHsgLy9pZiBpdCBlbmNvdW50ZXJzIFwiIFwiIC0gaXQgd2lsbCBkZWxldGUgaXRcclxuICAgICAgICAgICAgICAgIGFycmF5TGV0dGVyc0guc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyYXlMZXR0ZXJzSFswXSA9PSB1bmRlZmluZWQpIGJyZWFrOyAvL2lmIHRoZSBhcnJheSBpcyBvdmVyIC0gc3RvcFxyXG4gICAgICAgICAgICBsZXQgZGl2Rm9yU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGlvbiBvZiBhIHN5bWJvbFxyXG4gICAgICAgICAgICBkaXZGb3JTeW1ib2wuY2xhc3NMaXN0LmFkZCgnd3JhcHBlclN5bWJvbCcpO1xyXG4gICAgICAgICAgICBkaXZGb3JTeW1ib2wuaW5uZXJIVE1MID0gYXJyYXlMZXR0ZXJzSFswXTsgLy9hZGRpbmcgYSBzeW1ib2wgZnJvbSBhbiBhcnJheSB0byBhIHdyYXBwZXIoc3ltYm9sKVxyXG4gICAgICAgICAgICB3cmFwcGVyRm9yV29yZC5hcHBlbmQoZGl2Rm9yU3ltYm9sKTsgLy9hZGRpbmcgYSBzeW1ib2wgdG8gYSB3b3JkXHJcbiAgICAgICAgICAgIGFycmF5TGV0dGVyc0guc3BsaWNlKDAsIDEpOyAvL3JlbW92ZSBhZGRlZCBjaGFyYWN0ZXIgZnJvbSBhcnJheVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJnMS5hcHBlbmQod3JhcHBlckZvcldvcmQpOyAvL2FkZGluZyBhIHdvcmQgd2l0aCBzeW1ib2xzIHRvIHRoZSBjcmVhdGVkIGxpbmUgKHRoZSBsaW5lIHdhcyBjcmVhdGVkIGF0IGFib3V0IDE3NSBhbmQgMTg0KVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2gyIGNoYXIgcHJlcCBmb3IgYW5pbVxyXG5cclxuaWYgKGgyICE9IG51bGwpIHtcclxuICAgIGNvbnN0IGgyQ2hhciA9IGgyLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyU3ltYm9sJylcclxuICAgIC8vY29uc29sZS5sb2coaDJDaGFyKTtcclxuICAgIGxldCB0bXBIMkNoYXJUcmFuc1kgPSAwO1xyXG4gICAgZm9yIChsZXQgY2hhciBvZiBoMkNoYXIpIHsgLy93aWxsIG1ha2UgYSBsYWRkZXJcclxuICAgICAgICBjaGFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dG1wSDJDaGFyVHJhbnNZICogMC41fXB4KWA7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFyKVxyXG4gICAgICAgIHRtcEgyQ2hhclRyYW5zWSArPSAxNTtcclxuICAgIH1cclxufSIsImNvbnN0IGNvbnNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIC5jb25zZW50Jyk7IC8vdGFrZSBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyAuY29uc2VudFxyXG5cclxuLy90aGVyZSBpcyBhIGRpdiB3aXRoIGNsYXNzIGNvbmNlbnQuIEluIGNvbnNlbnQgdGhlcmUgYXJlIDIgZWxlbWVudHMgaW5wdXQgYW5kIGxhYmVsXHJcbi8vdGhlIG5leHQgZWxlbWVudCBhZnRlciB0aGUgY29uc2VudCBpcyB0aGUgYnV0dG9uIGVsZW1lbnRcclxuXHJcbmZvciggbGV0IGl0ZW0gb2YgY29uc2VudCl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbGxlY3Rpb24gZW51bWVyYXRpb25cclxuICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy9hZGQgY2xpY2sgZXZlbnQgdG8gZWFjaCBuZXh0IGl0ZW0oYnV0dG9uKSBmcm9tIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoICFlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkTm9kZXNbMV0uY2hlY2tlZCApeyAvL2lmIHRoZSBsYWJlbCBpcyBub3QgaW4gdGhlIGNoZWNrZWQgc3RhdGVcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZW4gdGhlIGJ1dHRvbiBkb2VzIG5vdCB3b3JrXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RoaXMgaXMgbmVjZXNzYXJ5IGZvciB0aGUgdXNlciB0byBhZ3JlZSB0byB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Rlcm1zIG9mIHBlcnNvbmFsIGRhdGEgcHJvY2Vzc2luZyBcclxuICAgIH0pO1xyXG59O1xyXG4iLCJjb25zdCBidG5MaXN0RHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZfX2J1cmdlci13cmFwcGVyLWZvci1saW5lJyk7XHJcbmNvbnN0IG5hdk1haW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2X19tYWluLWxpc3QnKTtcclxuYnRuTGlzdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IDEwODMpIHsvL2Jyb3dzZXIgd2luZG93IHdpZHRoXHJcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nyb3NzJykpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY3Jvc3MnKTsgICAgICAgICAvL3doZW4gYWRkaW5nIGEgY2xhc3MgZnJvbSBzdGlja3MgbWFrZXMgYSBjcm9zc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmF2TWFpbkxpc3QuY2xhc3NMaXN0LmFkZCgnZHJvcC1kb3duX19oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7Ly93aGVuIGFkZGluZyBhIGNsYXNzLCBpdCBtYWtlcyBhIGxpc3QgZHJvcCBkb3duXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Nyb3NzJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5hdk1haW5MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3AtZG93bl9faGVhZGVyX19uYXZfX21haW4tbGlzdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4iLCIvL2Ryb3AgZG93biBoZWFkZXJfX25hdl9fbWFpbi1saXN0X19pdGVtX19zdWItbGlzdCBhbmQgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3RfX2l0ZW1fX2xhc3QtbGlzdCBcclxuY29uc3QgYXJyb3dPcGVuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnJvdy1yaWd0aC13cmFwcGVyJyk7XHJcbmFycm93T3Blbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gey8vd2hlbiB5b3UgY2xpY2sgb24gdGhlIGFycm93IGEgbGlzdCBkcm9wIGRvd25cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLWxpc3QnKSkgey8vaXQgd2lsbCBiZSBlaXRoZXIgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3Qgb3IgYSBoZWFkZXJfX25hdl9fbWFpbi1saXN0X19pdGVtX19zdWItbGlzdF9faXRlbV9fbGFzdC1saXN0XHJcbiAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ29wZW4tbGlzdCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3Blbi1saXN0JylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJykpIHsvL3NwaW5zIGJ5IGFkZGluZyBhIGNsYXNzXHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYXJyb3ctcmlndGgtd3JhcHBlci1yb3RhdGUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYXJyb3ctcmlndGgtd3JhcHBlci1yb3RhdGUnKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iLCIvL2JlZ2luIC8vZWxlbWVudHMgZm9yIG9wZW5pbmcgbW9kYWwgd2luZG93c1xyXG5jb25zdCBvcGVuUmVnaXN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2l0ZW1zX19zaG9wcGluZy1jYXJkJyk7XHJcbmNvbnN0IG9wZW5DYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2l0ZW1zX19jYWxsJyk7XHJcbmNvbnN0IG9wZW5Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2l0ZW1zX19hdXRob3JpemF0aW9uJyk7XHJcbmNvbnN0IG9wZW5Gb3Jnb3RZb3VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub0ZvcmdvdC15b3VyLXBhc3N3b3JkJyk7XHJcbmNvbnN0IG9wZW5Hb1RvTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29Ub0xvZ2luJyk7XHJcbmNvbnN0IG9wZW5Hb1RvUmVnaXN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHb1RvUmVnaXN0cicpO1xyXG5jb25zdCBvcGVuQ29kZUZyb21TbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub0NvZGVGcm9tU21zJyk7XHJcbmNvbnN0IG9wZW5OZXdQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHb1RvTmV3UGFzc3dvcmQnKTtcclxuY29uc3QgY29udGFjdE9wZW5Nb2RhbFF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFscXVlc3Rpb24nKTsvL2ZvciBjb250YWN0cy5odG1sXHJcbmNvbnN0IHdpZGdldE9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aWRnZXQtb3Blbi1tb2RhbCcpOyAvL2luIHRoZSB3aWRnZXQsIHRoaXJkIGl0ZW0gZnJvbSB0aGUgdG9wXHJcbi8vZW5kXHJcblxyXG4vL2JlZ2luIC8vbW9kYWwgd2luZG93c1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBsb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fbG9naW4nKTtcclxuY29uc3QgcmVnaXN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcmVnaXN0cicpO1xyXG5jb25zdCBmb3Jnb3RZb3VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ZvcmdvdC15b3VyLXBhc3N3b3JkJyk7XHJcbmNvbnN0IGNvZGVGcm9tU21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb2RlLWZyb20tc21zJyk7XHJcbmNvbnN0IG5ld1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19uZXctcGFzc3dvcmQnKTtcclxuY29uc3QgY2FsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NhbGxiYWNrJyk7XHJcbmNvbnN0IGFza0FRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYXNrLWEtcXVlc3Rpb24nKTtcclxuLy9lbmRcclxuXHJcbi8vYmVnaW4gIC8vY2xvc2UgbW9kYWwgd2luZG93c1xyXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2Nsb3NlXCIpO1xyXG4vL2VuZFxyXG5cclxuLy9iZWdpbiAvL2V2ZXJ5dGhpbmcgcmVsYXRlZCB0byBwcml2YWN5IHBvbGljeVxyXG5jb25zdCBwb2xpdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wb2xpdGljcycpO1xyXG5jb25zdCBvcGVuUG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29Ub1BvbGl0aWNzJyk7XHJcbmNvbnN0IGNsb3NlUG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcG9saXRpY3NfX2Nsb3NlJyk7XHJcbmNvbnN0IGNsb3NlQnRuUG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9saXRpYy1idXR0b24tY2xvc2UnKTtcclxuLy9lbmRcclxuXHJcbi8vbW9kYWwuc3R5bGUuaGVpZ2h0ID0gYCR7bW9kYWwucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgOy8vZm9yIHRleHRhcmVhR3Jvdy5qc1xyXG5cclxuXHJcblxyXG5cclxuLy9jb25zdCBvcGVuTW9kYWxSZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1yZXdpZXdzX19sZWF2ZS1mZWVkYmFjaycpO1xyXG4vL2NvbnN0IG1vZGFsUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19yZXZpZXcnKTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCwgaXRlbSkgey8vcGFyYW1ldGVyIG1vZGFsID09IG9uIGxpbmUgMTUgLyBwYXJhbWV0ZXIgaXRlbSA9PSBsb2dpbiBvciByZWdpc3RyIGFuZCBldGMuIG9uIGxpbmUgMTZcclxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJGaXJlZm94XCIpICE9IC0xKSB7IC8vZm9yIHRleHRhcmVhR3Jvdy5qcyB0byB3b3JrIGluIEZpcmVmb3ggYnJvd3NlclxyXG4gICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWxfX2Fzay1hLXF1ZXN0aW9uJykpe1xyXG4gICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykuc2V0QXR0cmlidXRlKFwiQ29sc1wiLCBgMjRgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICB9IFxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbChlKSB7Ly9pZiB5b3UgY2xpY2sgb24gc29tZXRoaW5nIG90aGVyIHRoYW4gYSBtb2RhbCB3aW5kb3csIGl0IHdpbGwgY2xvc2UgdGhlIG1vZGFsIHdpbmRvd1xyXG4gICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHJlZ2lzdHIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGNhbGxiYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBsb2dpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZm9yZ290WW91clBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBjb2RlRnJvbVNtcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgbmV3UGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGFza0FRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgLy9tb2RhbFJldmlldy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PSBwb2xpdGljcykge1xyXG4gICAgICAgIHBvbGl0aWNzLmNsYXNzTGlzdC5hZGQoJ2hpZGUtcG9saXRpY3MnKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlYnRuKGUpIHsvL2Nsb3NlcyBtb2RhbCB3aW5kb3cgd2hlbiBjbGlja2luZyBvbiBidG5cclxuICAgIGlmIChlLnRhcmdldCA9PSBjbG9zZVBvbGl0aWNzIHx8IGUudGFyZ2V0ID09IGNsb3NlQnRuUG9saXRpY3MpIHtcclxuICAgICAgICBwb2xpdGljcy5jbGFzc0xpc3QuYWRkKCdoaWRlLXBvbGl0aWNzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICByZWdpc3RyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBjYWxsYmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgbG9naW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGZvcmdvdFlvdXJQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY29kZUZyb21TbXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIG5ld1Bhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBhc2tBUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIC8vbW9kYWxSZXZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsb3Nl0KF1cnJlbnRPcGVuTGluayhjbG9zZSwgb3Blbikgey8vY2xvc2Ugb25lIG1vZGFsIHdpbmRvdyBhbmQgb3BlbiBhbm90aGVyXHJcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBvcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsb3Nl0KF1cnJlbnRPcGVubG9naW4oZSkgey8vKGUpID09IG9wZW5Hb1RvTG9naW4gPT0gZWxlbWVudCB3aXRoIGNsYXNzIC5nb1RvTG9naW4sIGNsb3Nlc3QoXCIubW9kYWxfX2Jsb2NrXCIpIGlzIHNldCBvbiB0aGlzIGVsZW1lbnQuXHJcbiAgICBlLnRhcmdldC5jbG9zZXN0KFwiLm1vZGFsX19ibG9ja1wiKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7Ly93aGVuIGNsaWNraW5nIG9uIGFuIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgLmdvVG9Mb2dpbiwgXHJcbiAgICBsb2dpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vaXQgd2lsbCBnbyB0aHJvdWdoIGFsbCBlbGVtZW50cyBpbmNsdWRpbmcgcGFyZW50cyB1cCB0byB0aGUgcm9vdCBlbGVtZW50IHVudGlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2l0IGZpbmRzIGFuIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgLm1vZGFsX19ibG9jaywgc3RvcCwgYW5kIGFkZCB0aGUgY2xhc3MgLmhpZGUgdG8gdGhpcyBlbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbFBvbGl0aWNzKCkge1xyXG4gICAgcG9saXRpY3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1wb2xpdGljcycpO1xyXG59XHJcblxyXG5cclxub3BlblJlZ2lzdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIHJlZ2lzdHIpKTsvL29uIGxpbmUgNDdcclxub3BlbkNhbGxiYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBjYWxsYmFjaykpO1xyXG5vcGVuTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGxvZ2luKSk7XHJcbndpZGdldE9wZW5Nb2RhbFswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgY2FsbGJhY2spKTtcclxud2lkZ2V0T3Blbk1vZGFsWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBhc2tBUXVlc3Rpb24pKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG5jbG9zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZWJ0bikgfSk7Ly9vbiBsaW5lIDU5XHJcblxyXG5vcGVuR29Ub0xvZ2luLmZvckVhY2goKGl0ZW0pID0+IHsgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3Nl0KF1cnJlbnRPcGVubG9naW4pIH0pO1xyXG5cclxub3BlbkZvcmdvdFlvdXJQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3Nl0KF1cnJlbnRPcGVuTGluayhsb2dpbiwgZm9yZ290WW91clBhc3N3b3JkKSk7Ly9vbiBsaW5lIDkzXHJcbm9wZW5Hb1RvUmVnaXN0ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3Nl0KF1cnJlbnRPcGVuTGluayhsb2dpbiwgcmVnaXN0cikpO1xyXG5vcGVuQ29kZUZyb21TbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsoZm9yZ290WW91clBhc3N3b3JkLCBjb2RlRnJvbVNtcykpO1xyXG5vcGVuTmV3UGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsoY29kZUZyb21TbXMsIG5ld1Bhc3N3b3JkKSk7XHJcblxyXG5vcGVuUG9saXRpY3MuZm9yRWFjaCgoaXRlbSkgPT4gey8vb24gbGluZSAxMDVcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWxQb2xpdGljcyk7XHJcbn0pO1xyXG5jbG9zZVBvbGl0aWNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pOyAgIC8vb24gbGluZSA1OVxyXG5jbG9zZUJ0blBvbGl0aWNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pOy8vb24gbGluZSA1OSAgXHJcblxyXG5cclxuaWYoIGNvbnRhY3RPcGVuTW9kYWxRdWVzdGlvbiApe1xyXG4gICAgY29udGFjdE9wZW5Nb2RhbFF1ZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBhc2tBUXVlc3Rpb24pKTtcclxufTtcclxuXHJcbi8vb3Blbk1vZGFsUmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBtb2RhbFJldmlldykpO1xyXG5cclxuXHJcbiIsIi8vbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGUtc2hvdy1wYXNzd29yZCcpOyAvLyBmb3IgdmVyLiAxXHJcbmxldCBleWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXllJyk7XHJcbmNvbnN0IGJ0blBhc3NDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZC1jaGVjaycpO1xyXG5sZXQgbWVzc2FnZVBhc3NNaXNtYXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZHMtZG8tbm90LW1hdGNoJyk7XHJcbmxldCB0d29JbnB1dFBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFzc0NoZWNrJyk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuKGUpIHtcclxuXHJcbiAgICAvL3Zlci4xIFRoaXMgdmVyc2lvbiBvZiB0aGUgY29kZSBoaWQvc2hvd2VkIHRoZSBwYXNzd29yZCBmb3IgYWxsIGlucHV0cyB3aGVuIGNsaWNraW5nIG9uIHRoZSBleWVcclxuXHJcbiAgICAvKnBhc3N3b3JkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgaXRlbS50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICBleWUuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWV5ZScpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIGV5ZS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZXllJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pICAqL1xyXG5cclxuICAgIC8vTm93IGhpZGVzL3Nob3dzIG9ubHkgdGhlIGlucHV0IHRoYXQgcmVsYXRlcyB0byB0aGUgcHJlc3NlZCBleWVcclxuXHJcbiAgICBpZiAoZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID09ICdwYXNzd29yZCcpIHsvL3doZW4gY2xpY2tpbmcgb24gdGhlIGV5ZSBpZiB0aGUgaW5wdXQgaXMgb2YgdHlwZSAncGFzc3dvcmQnXHJcbiAgICAgICAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID0gJ3RleHQnOyAgICAgICAvL3RoZW4gcmVwbGFjZSB3aXRoIHR5cGUgJ3RleHQnXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1leWUnKSAgICAgICAgICAgICAgICAvL29wZW4gZXllIHRocm91Z2ggY2xhc3MgcmVtb3ZhbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnR5cGUgPSAncGFzc3dvcmQnOy8vb3RoZXJ3aXNlIGFzc2lnbiB0aGUgdHlwZSAncGFzc3dvcmQnIChyZXBsYWNlcyBzeW1ib2xzIHdpdGggZG90cylcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlLWV5ZScpOyAgICAgICAgICAgICAgIC8vYW5kIHdpbGwgY2xvc2UgdGhlIGV5ZSBhcyBhIHJlc3VsdCBvZiBhZGRpbmcgdGhlIGNsYXNzXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXllLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuKTtcclxufSk7XHJcblxyXG5cclxuYnRuUGFzc0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKCEodHdvSW5wdXRQYXNzWzBdLnZhbHVlID09IHR3b0lucHV0UGFzc1sxXS52YWx1ZSkpIHsgLy9pZiB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGZpZWxkIGRvZXMgbm90IG1hdGNoIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGZpZWxkXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoZW4gcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZFxyXG4gICAgICAgIG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MID0gJ9Cd0LXRgdC+0LLQv9Cw0LTQtdC90LjQtSDQv9Cw0YDQvtC70LXQuSc7Ly9hbmQgd2lsbCBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCB0aGUgcGFzc3dvcmQgbWlzbWF0Y2hcclxuICAgIH07XHJcblxyXG59KTtcclxuXHJcbnR3b0lucHV0UGFzcy5mb3JFYWNoKChpdGVtKSA9PiB7ICAgICAgICAgIC8vd2l0aCBlYWNoIG5ldyBlbnRyeSBpdCB3aWxsIGRlbGV0ZSB0aGUgbWVzc2FnZSBhYm91dCBwYXNzd29yZCBtaXNtYXRjaFxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICBpZiAobWVzc2FnZVBhc3NNaXNtYXRjaC5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgbWVzc2FnZVBhc3NNaXNtYXRjaC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pOyIsIi8vdG8gZ28gdG8gdGhlIHByZXZpb3VzIHBhZ2UgYnkgbmF2aWdhdGlvblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG5sZXQgYWxsTGlTZWNvbmROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kYXJ5LW5hdiBsaScpO1xyXG5cclxuLy90YWtlcyB0aGUgbGluayBhZGRyZXNzIGZyb20gdGhlIHByZXZpb3VzIGVsZW1lbnQgYW5kIHB1dHMgaXQgaW50byB0aGUgYXJyb3cgbGluayBvZiB0aGUgbGFzdCBlbGVtZW50XHJcbmxldCBsaW5rQWRyZXNzID0gYWxsTGlTZWNvbmROYXZbKGFsbExpU2Vjb25kTmF2Lmxlbmd0aCAtIDIpXS5jaGlsZE5vZGVzWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cclxuYWxsTGlTZWNvbmROYXZbKGFsbExpU2Vjb25kTmF2Lmxlbmd0aCAtIDEpXS5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtBZHJlc3MpO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IG1vZGFsQXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hc2stYS1xdWVzdGlvbicpO1xyXG5jb25zdCBhc2tUZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc2stYS1xdWVzdGlvbl9fcXVlc3Rpb24nKTtcclxuY29uc3QgcGFyZW50QXNrVGV4dGFyZWEgPSBhc2tUZXh0YXJlYS5wYXJlbnRFbGVtZW50O1xyXG4vL2NvbnNvbGUubG9nKHBhcmVudEFza1RleHRhcmVhKTtcclxubGV0IGluaXRpYWxXaWR0aEFza1RleHRhcmVhID0gKyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhc2tUZXh0YXJlYSkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpLnNsaWNlKDAsIC0yKSk7Ly90aGUgaW5pdGlhbCB3aWR0aCBvZiB0aGUgdGV4dGFyZWEgaXMgdGFrZW5cclxuLy9jb25zb2xlLmxvZyhpbml0aWFsV2lkdGhBc2tUZXh0YXJlYSk7XHJcblxyXG4vL3dpZHRoIGFuZCBoZWlnaHQgcmVzdHJpY3Rpb25zIGF0IGFwcHJveGltYXRlbHkgbGluZSA5Mzgoc2NzcylcclxuXHJcbmFza1RleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coYXNrVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0KVxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTgwKSB7XHJcbiAgICAgICAgaWYgKGUuaW5wdXRUeXBlID09ICdpbnNlcnRUZXh0JyAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPiAyNiAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPCA1NCkge1xyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2Fza1RleHRhcmVhLmNsaWVudFdpZHRoICs9IDEwfXB4YDsgLy9pZiB0aGUgbnVtYmVyIG9mIGVudGVyZWQgY2hhcmFjdGVycyBtYXRjaGVzIHRoZSBjb25kaXRpb25zIGFib3ZlLCB0aGUgdGV4dGFyZWEgd2lsbCBncm93IGluIHdpZHRoIGJ5IDEwcHggYWZ0ZXIgZWFjaCBpbnB1dFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5pbnB1dFR5cGUgPT0gJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCcgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoID4gMjYgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDwgNTQgJiYgYXNrVGV4dGFyZWEuY2xpZW50V2lkdGggPiBpbml0aWFsV2lkdGhBc2tUZXh0YXJlYSkge1xyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2Fza1RleHRhcmVhLmNsaWVudFdpZHRoIC09IDV9cHhgOy8vaWYgdGhlcmUgaXMgYSBkZWxldGlvbiBvZiBjaGFyYWN0ZXJzLCB0aGUgdGV4dGFyZWEgd2lsbCBzaHJpbmtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuaW5wdXRUeXBlID09ICdkZWxldGVDb250ZW50QmFja3dhcmQnICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA8PSAyNSkge1xyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2luaXRpYWxXaWR0aEFza1RleHRhcmVhfXB4YDsvL2FkanVzdCB0ZXh0YXJlYSB3aWR0aCB0byBpbml0aWFsIHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGEpO1xyXG4gICAgICAgIGlmIChlLmRhdGEgIT0gbnVsbCAmJiBlLmRhdGEubGVuZ3RoID4gMSkgey8vaWYgdGhlIGVudGlyZSByZXZpZXcgaXMgaW5zZXJ0ZWQgLyBlLmRhdGEgIT0gbnVsbCAtPiBudWxsID0gd2hlbiBwcmVzc2luZyBlbnRlciBvciBiYWNrc3BhY2VcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSAnNTAwcHgnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDwgMSkgey8vaWYgYWxsIHRleHQgaXMgZGVsZXRlZCBhdCBvbmNlXHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7aW5pdGlhbFdpZHRoQXNrVGV4dGFyZWF9cHhgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA+IDI2KSB7Ly9yZWFycmFuZ2UgZWxlbWVudHMgd2hlbiB0ZXh0YXJlYSBncm93c1xyXG4gICAgICAgICAgICBwYXJlbnRBc2tUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYS1jb2x1bW4nKVxyXG4gICAgICAgICAgICBtb2RhbEFzay5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYXNrLWEtcXVlc3Rpb24tYmlnLWFzaycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50QXNrVGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgndGV4dGFyZWEtY29sdW1uJylcclxuICAgICAgICAgICAgbW9kYWxBc2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2Fzay1hLXF1ZXN0aW9uLWJpZy1hc2snKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc2tUZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjsgIC8vdGV4dGFyZWEgaGVpZ2h0IGdyb3d0aFxyXG4gICAgYXNrVGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYXNrVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiOy8vIFxyXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYWxsU2NyaXB0cy9hbmltYXRpb24uanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoMTEyMHB4LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDczNXB4LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvc2Vjb25kYXJ5TmF2QXJyb3dMaW5rczMyMC5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL1dpZGdldC5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL21vZGFsLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvcGFzcy1leWUuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9QaG9uZU1hc2suanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9PVFAtSW5wdXQtZmllbGQoc21zKS5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL3RleHRhcmVhR3Jvdy5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2J1dHRvbkZvcm1Db25zZW50Q2hlY2suanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9hbmltYXRlRm9vdGVyLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=