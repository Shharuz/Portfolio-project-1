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

/***/ "./src/script/allScripts/categoriesRadio.js":
/*!**************************************************!*\
  !*** ./src/script/allScripts/categoriesRadio.js ***!
  \**************************************************/
/***/ (() => {

//For howToBuy.html, blog.html, account.html, questions.html

const itemsCategories = document.querySelectorAll('.forCategoryAllPages p'); //in the element with the class radio-category, all inputs of the radio type are taken
const collectionOfElementsForhideShow = document.querySelectorAll('[data-anchor]') //collection of all elements with attribute data-anchor
const footer = document.querySelector('footer .footer-container');

itemsCategories.forEach((item) => {

    item.addEventListener('click', () => {

        for (let item of itemsCategories) {
            item.classList.remove('highlighted')
        }
        if (!item.classList.contains('highlighted')) {
            item.classList.add('highlighted')
        }
        for (let itemCollect of collectionOfElementsForhideShow) { //iterate over all elements with data-anchor attribute
            itemCollect.classList.add('hide'); //all elements with the data-anchor attribute are assigned the hide class
            console.log(itemCollect);

            if (item.id == 'all-blog') { //for blog.html //if the value of the input id is 'all-blog', then all elements with the data-anchor attribute will have the hide class removed
                itemCollect.classList.remove('hide');
            } else if (item.id == itemCollect.getAttribute('data-anchor')) { //there are: 1. input with change event 2. element (div or p) with data-anchor attribute
                itemCollect.classList.remove('hide'); // if input id matches element (div or p) data-anchor attribute, then remove class hide from element (div or p)
                //fix display footer on howToBuy.html (for animateFooter.js)
                footer.classList.add('footerVisible');
            }

        }
        if (collectionOfElementsForhideShow[0].classList.contains('questions__question-and-answer')) {
            alignBody(); //only for questions.html, so that smooth scrolling works
        } else if (collectionOfElementsForhideShow[0].classList.contains('blog__reviews')) {
            alignBody(); //only for blog.html, so that smooth scrolling works
        }
    });
});

//console.log(itemsCategories[0]);

//console.log(itemsCategories[0].childNodes[1].tagName);

//for blog.html //counting the number of all articles and by categories
if (itemsCategories[0].childNodes[1]) { //check that this piece of code only works on the blog.html

    //counting all articles
    let count = 0;
    for (let itemCollect of collectionOfElementsForhideShow) {
        //console.log(itemCollect.childNodes);//NodeList format: text, div.blog-article-min; text, div.blog-article-min; etc. 
        //only div.blog-article-min need to be counted, That's why -> itemCollect.childNodes.length / 2
        //there is text at the end of the nodelist, the text needs to be removed, That's why -> itemCollect.childNodes.length - 1
        count += (itemCollect.childNodes.length - 1) / 2 //throw into the count
    }
    itemsCategories[0].childNodes[1].innerHTML = count; //add counted articles to html

    //counting articles by category
    itemsCategories.forEach((item) => { // for each item from the collection itemsCategories
        for (let itemCollect of collectionOfElementsForhideShow) { //iterate over all elements with data-anchor attribute
            if (item.id == itemCollect.getAttribute('data-anchor')) { //if item.id matches the data-anchor attribute of an element from the collection collectionOfElementsForhideShow
                item.childNodes[1].innerHTML = (itemCollect.childNodes.length - 1) / 2; // then from the input go to the label, and in the label find the span and assign the value of the counted articles
            };
        }
    });
};

function changeCheckedRadioBlog() { //to go from the card.html page; section card-helpful-information -> card-helpful-information__articles

    for (let item of itemsCategories) {
        if (item.id == window.location.href.split("?")[1]) { //https://livebacteria.local/blog.html?video-broadcasts - will only take video-broadcasts
            item.setAttribute('checked', 'checked'); //will set the checked state to the input whose id matches the link address
            for (let itemCollect of collectionOfElementsForhideShow) {
                itemCollect.classList.add('hide'); //all elements with the data-anchor attribute are assigned the hide class
                if (itemCollect.getAttribute('data-anchor') == window.location.href.split("?")[1]) { //if the value of the data-anchor attribute matches the split link address (2nd part), 
                    itemCollect.classList.remove('hide'); // then the 'hide' class will be removed from this element
                }
            }
        }

    }

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
/*!****************************!*\
  !*** ./src/script/blog.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allScripts_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allScripts/animation.js */ "./src/script/allScripts/animation.js");
/* harmony import */ var _allScripts_animation_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_allScripts_animation_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width1120px_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allScripts/headerNavBurgerOnMediaMax-width1120px.js */ "./src/script/allScripts/headerNavBurgerOnMediaMax-width1120px.js");
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width1120px_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_allScripts_headerNavBurgerOnMediaMax_width1120px_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width735px_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allScripts/headerNavBurgerOnMediaMax-width735px.js */ "./src/script/allScripts/headerNavBurgerOnMediaMax-width735px.js");
/* harmony import */ var _allScripts_headerNavBurgerOnMediaMax_width735px_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_allScripts_headerNavBurgerOnMediaMax_width735px_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _allScripts_secondaryNavArrowLinks320_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allScripts/secondaryNavArrowLinks320.js */ "./src/script/allScripts/secondaryNavArrowLinks320.js");
/* harmony import */ var _allScripts_secondaryNavArrowLinks320_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_allScripts_secondaryNavArrowLinks320_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _allScripts_categoriesRadio_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allScripts/categoriesRadio.js */ "./src/script/allScripts/categoriesRadio.js");
/* harmony import */ var _allScripts_categoriesRadio_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_allScripts_categoriesRadio_js__WEBPACK_IMPORTED_MODULE_4__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05tQztBQUM0QjtBQUNEO0FBQ1g7QUFDVjtBQUNUO0FBQ0Q7QUFDRztBQUNDO0FBQ1c7QUFDUjtBQUNVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL09UUC1JbnB1dC1maWVsZChzbXMpLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9QaG9uZU1hc2suanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL1dpZGdldC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYW5pbWF0ZUZvb3Rlci5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9idXR0b25Gb3JtQ29uc2VudENoZWNrLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9jYXRlZ29yaWVzUmFkaW8uanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2hlYWRlck5hdkJ1cmdlck9uTWVkaWFNYXgtd2lkdGgxMTIwcHguanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2hlYWRlck5hdkJ1cmdlck9uTWVkaWFNYXgtd2lkdGg3MzVweC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3Bhc3MtZXllLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9zZWNvbmRhcnlOYXZBcnJvd0xpbmtzMzIwLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy90ZXh0YXJlYUdyb3cuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYmxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RvIGNvcnJlY3RseSBmaWxsIGluIHRoZSBmaWVsZHMoaW5wdXRzKSBpbiB0aGUgbW9kYWwgd2luZG93IChlbGVtZW50IHdpdGggY2xhc3MgLm1vZGFsX19jb2RlLWZyb20tc21zKVxyXG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk9UUGlucHV0c1wiKTtcclxuXHJcbmlucHV0cy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24oZSkgey8vd2hlbiB0aGUgY2hhcmFjdGVycyB3aWxsIGJlIGVudGVyZWRcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgICAgICAgICAgICAgICAgIC8vdGhlIGZpZWxkIGluIHdoaWNoIHRoZSBzeW1ib2wgaXMgY3VycmVudGx5IGVudGVyZWRcclxuICAgIGNvbnN0IHZhbCA9IHRhcmdldC52YWx1ZTsgICAgICAgICAgICAgICAgIC8vdGhlIHZhbHVlIG9mIHRoaXMgZmllbGRcclxuXHJcbiAgICBpZiAoaXNOYU4odmFsKSkgeyAgICAgICAgLy93aGVuIGVudGVyaW5nIGFueSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgYSBudW1iZXIsIHJldHVybnMgYW4gZW1wdHkgc3RyaW5nXHJcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCJcIjsgICAgICAvLyBpdCB3b24ndCBsZXQgeW91IGVudGVyIGFueXRoaW5nIGV4Y2VwdCBudW1iZXJzXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWwgIT0gXCJcIikgeyAgICAgICAgICAgICAvL2lmIGEgbnVtYmVyIGlzIGVudGVyZWQsIGl0IGdvZXMgdG8gdGhlIG5leHQgZmllbGQoaW5wdXQpXHJcbiAgICAgICAgY29uc3QgbmV4dCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgICAgbmV4dC5mb2N1cygpOyAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuaW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDsgICAgICAgICAgICAgICAgICBcclxuICAgIGNvbnN0IGtleSA9IGUua2V5LnRvTG93ZXJDYXNlKCk7ICAgICAgICAvL3RoZSBudW1iZXJzIHlvdSBlbnRlciB3aWxsIGFsd2F5cyBiZSBpbiB1cHBlcmNhc2UgIFxyXG5cclxuICAgIGlmIChrZXkgPT0gXCJiYWNrc3BhY2VcIiB8fCBrZXkgPT0gXCJkZWxldGVcIikgey8vd2hlbiBhIGNoYXJhY3RlciBpcyBkZWxldGVkLCBpdCBtb3ZlcyB0byB0aGUgcHJldmlvdXMgZmllbGRcclxuICAgICAgICB0YXJnZXQudmFsdWUgPSBcIlwiOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBwcmV2ID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgaWYgKHByZXYpIHtcclxuICAgICAgICAgICAgcHJldi5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn0pOyIsIlxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGxldCBwaG9uZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2RhdGEtdGVsLWlucHV0XScpO1xyXG5cclxuICAgIGxldCBnZXRJbnB1dE51bWJlcnNWYWx1ZSA9IGZ1bmN0aW9uKGlucHV0KSB7IC8vcHJvaGliaXRpb24gb24gZW50ZXJpbmcgYWxsIHN5bWJvbHMgZXhjZXB0IG51bWJlcnNcclxuICAgICAgICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9uUGhvbmVJbnB1dCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSBlLnRhcmdldCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/RjdC70LXQvNC10L3RgiDQuNC90L/Rg9GCXHJcbiAgICAgICAgICAgIGlucHV0TnVtYmVyc1ZhbHVlID0gZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpOy8v0YXRgNCw0L3Rj9GC0YHRjyDRgtC+0LvRjNC60L4g0YfQuNGB0LvQsFxyXG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7Ly9JIGRvbid0IGtub3cgd2h5XHJcblxyXG4gICAgICAgIC8qaWYgKCFpbnB1dE51bWJlcnNWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2VkaXRpbmcgbWlkbGUgc3RyaW5nJywgZSk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSovXHJcblxyXG5cclxuICAgICAgICBpZiAoW1wiN1wiLCBcIjhcIiwgXCI5XCJdLmluZGV4T2YoaW5wdXROdW1iZXJzVmFsdWVbMF0pID4gLTEpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlWzBdID09IFwiOVwiKSBpbnB1dE51bWJlcnNWYWx1ZSA9IFwiN1wiICsgaW5wdXROdW1iZXJzVmFsdWU7Ly9pZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIDkgdGhlbiByZXBsYWNlIGl0IHdpdGggNyA5XHJcblxyXG4gICAgICAgICAgICBsZXQgZmlyc3RTeW1ib2xzID0gKGlucHV0TnVtYmVyc1ZhbHVlWzBdID09IFwiOFwiKSA/IFwiOFwiIDogXCIrN1wiOy8vaWYgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyA4IHRoZW4gaXQgd2lsbCByZXR1cm4gOCBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gKzdcclxuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGZpcnN0U3ltYm9scyArIFwiIFwiO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID4gMSkgeyAvL2lmIG1vcmUgdGhhbiAxIGNoYXJhY3RlciBpcyBlbnRlcmVkLCBcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDEsIDQpOy8vaXQgd2lsbCBhZGQgJygnICsgY2hhcmFjdGVycyBmcm9tIDJuZCB0byA1dGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDUpIHsvL2lmIDUgb3IgbW9yZSBjaGFyYWN0ZXJzIGFyZSBlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoNCwgNyk7Ly9pdCB3aWxsIGFkZCAnKSAnICsgY2hhcmFjdGVycyBmcm9tIDVuZCB0byA4dGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDgpIHsvL2lmIDggb3IgbW9yZSBjaGFyYWN0ZXJzIGFyZSBlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg3LCA5KTsvL2l0IHdpbGwgYWRkICctJyArIGNoYXJhY3RlcnMgZnJvbSA4bmQgdG8gMTB0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gMTApIHsvL2lmIDEwIG9yIG1vcmUgY2hhcmFjdGVycyBhcmUgZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpOy8vaXQgd2lsbCBhZGQgJy0nICsgY2hhcmFjdGVycyBmcm9tIDEwbmQgdG8gMTJ0aFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiK1wiICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDAsIDE2KTsvL2l0IHdpbGwgYWRkICcrJyArIGNoYXJhY3RlcnMgZnJvbSAxc3QgdG8gMTJ0aFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IG9uUGhvbmVJbnB1dEtleURvd24gPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5rZXlDb2RlLCBlLnRhcmdldC52YWx1ZSk7Ly9rZXkgY29kZSBhbmQgaW5wdXQgdmFsdWUgKCAgIDEwMCAtIGNvZGUgICAgICAgICAnKzcgKDk4NCkgNTYnIC0gaW5wdXQgdmFsdWUgICAgKVxyXG4gICAgICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gOCAmJiBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCkubGVuZ3RoID09IDEpIHsvL2lmIGJhY2tzcGFjZSBpcyBlbnRlcmVkKGtleUNvZGUgPT0gOCksIHRoZSBpbnB1dCB2YWx1ZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggJydcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9uUGhvbmVQYXN0ZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgcGFzdGVkID0gZS5jbGlwYm9hcmREYXRhIHx8IHdpbmRvdy5jbGlwYm9hcmREYXRhOy8vdGhlIGNvcGllZCBudW1iZXIgaXMgc3RvcmVkXHJcbiAgICAgICAgaW5wdXQgPSBlLnRhcmdldDsvL2lucHV0IHN0b3JlZFxyXG4gICAgICAgIGlucHV0TnVtYmVyc1ZhbHVlID0gZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpOy8vdGhlIGlucHV0IGlzIGNoZWNrZWQgdG8gbWFrZSBzdXJlIHRoZXJlIGFyZSBvbmx5IG51bWJlcnNcclxuXHJcbiAgICAgICAgaWYgKHBhc3RlZCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhbnkgZGF0YSB3aGVuIGluc2VydGluZ1xyXG4gICAgICAgICAgICBsZXQgcGFzdGVkVGV4dCA9IHBhc3RlZC5nZXREYXRhKCd0ZXh0Jyk7Ly9pbnNlcnRzIGEgdmFsdWUgYXMgYSBzdHJpbmcgZnJvbSB0aGUgY29waWVkIHRleHRcclxuICAgICAgICAgICAgaWYgKC9cXEQvZy50ZXN0KHBhc3RlZFRleHQpKSB7ICAgICAgICAgICAvL2NoZWNrcyB0aGF0IHRoZXJlIGFyZSBvbmx5IG51bWJlcnNcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IHBob25lSW5wdXRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gcGhvbmVJbnB1dHNbaV07XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvblBob25lSW5wdXQpOy8vb24gbGluZSAxMFxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvblBob25lSW5wdXRLZXlEb3duKTsvL29uIGxpbmUgNTZcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGhvbmVQYXN0ZSk7Ly9vbiBsaW5lIDY0XHJcbiAgICB9O1xyXG5cclxuXHJcbn0pIiwiY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3VsJyk7XHJcbmNvbnN0IHRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0X190cmlnZ2VyJyk7XHJcbmNvbnN0IHdpZGdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3RyaWdnZXJfX21haW4nKTtcclxuY29uc3QgY3Jvc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0X190cmlnZ2VyX19jcm9zcycpO1xyXG5cclxubGV0IG9wZW5XaWRnZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoICFsaXN0LmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZVdpZGdldGxpc3QnKSApey8vc2NzcyBvbiBsaW5lIDQzNDlcclxuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlV2lkZ2V0bGlzdCcpLy90aGUgbGlzdCBkcm9wcyB0byB0aGUgdG9wXHJcbiAgICAgICAgICAgIHdpZGdldC5jbGFzc0xpc3QuYWRkKCdoaWRldHJpZ2dlcicpICAgLy9jaGFuZ2VzIHRoZSB3aWRnZXQgaWNvbiB0byBhIGNyb3NzXHJcbiAgICAgICAgICAgIGNyb3NzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGV0cmlnZ2VyJylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGlzdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlV2lkZ2V0bGlzdCcpLy90aGUgbGlzdCBjb21lcyBiYWNrXHJcbiAgICAgICAgICAgIHdpZGdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRldHJpZ2dlcicpICAgXHJcbiAgICAgICAgICAgIGNyb3NzLmNsYXNzTGlzdC5hZGQoJ2hpZGV0cmlnZ2VyJylcclxuICAgICAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcbnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuV2lkZ2V0KTsiLCJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXIgLmZvb3Rlci1jb250YWluZXInKTtcclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ID09IDApIHtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXJWaXNpYmxlJyk7XHJcbn1cclxuXHJcbmxldCBzY3JvbGxQZXJjZW50O1xyXG5cclxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGVyY2VudCgpIHtcclxuICAgIC8vY29uc29sZS5sb2cod2luZG93LnNjcm9sbFksICd3aW5kb3cuc2Nyb2xsWScpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJIZWlnaHQsICd3aW5kb3cuaW5uZXJIZWlnaHQnKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGJvZHkub2Zmc2V0SGVpZ2h0LCAnYm9keS5vZmZzZXRIZWlnaHQnKTtcclxuXHJcbiAgICBzY3JvbGxQZXJjZW50ID0gKygod2luZG93LnNjcm9sbFkgLyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDApLnRvRml4ZWQoMikpO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKHNjcm9sbFBlcmNlbnQgPiA5NSkge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB2aXNpYmxlRm9vdGVyKCkgey8vaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBhdCB0aGUgdmVyeSBib3R0b21cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ID09IDApIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZ2V0U2Nyb2xsUGVyY2VudCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB2aXNpYmxlRm9vdGVyKTtcclxuXHJcbiIsIi8vc21vb3RoIHNjcm9sbFxyXG5jb25zdCBib2R5Zm9yU21vb3RoU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JTbW9vdGhTY3JvbGwnKSkge1xyXG4gICAgY29uc3QgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JTbW9vdGhTY3JvbGxfX3dyYXBwZXInKTtcclxuXHJcbiAgICAvL2dpdmVzIHRoZSBoZWlnaHQgb2YgdGhlIGJvZHkgc28gdGhhdCBzY3JvbGxpbmcgb2NjdXJzXHJcbiAgICBsZXQgaGVpZ2h0Rm9yU2Nyb2xsID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZm9yU21vb3RoU2Nyb2xsV3JhcHBlcikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykpO1xyXG4gICAgYm9keWZvclNtb290aFNjcm9sbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoke2hlaWdodEZvclNjcm9sbH1weGApO1xyXG5cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgYWxpZ25Cb2R5KVxyXG5cclxuICAgIGZ1bmN0aW9uIGFsaWduQm9keSgpIHsgLy8gc2NyaXB0L3JhZGlvUGVyc29uICAvICBzY3JpcHQvY2F0ZWdvcmllc1JhZGlvXHJcbiAgICAgICAgaGVpZ2h0Rm9yU2Nyb2xsID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZm9yU21vb3RoU2Nyb2xsV3JhcHBlcikuZ2V0UHJvcGVydHlWYWx1ZSgnaGVpZ2h0JykpO1xyXG4gICAgICAgIGJvZHlmb3JTbW9vdGhTY3JvbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6JHtoZWlnaHRGb3JTY3JvbGx9cHhgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2NyUG9zWSA9IDA7IC8vZm9yIHNjcm9sbCBwb3NpdGlvbnNcclxuICAgIGxldCBibG9ja1Bvc1kgPSBzY3JQb3NZOyAvLyBmb3IgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciBwb3NpdGlvblxyXG4gICAgbGV0IHNwZWVkQW5pbSA9IDAuMDM7IC8vaWYgc3BlZWRBbmltID4gMC4wNyAoMC4xKSBhbmltYXRpb24gaGFwcGVucyBmYXN0ZXJcclxuICAgIC8vaWYgc3BlZWRBbmltIDwgMC4wNyAoMC4wMikgYW5pbWF0aW9uIGlzIHNsb3dlclxyXG5cclxuXHJcbiAgICAvLyBCaW5kIGEgc2Nyb2xsIGZ1bmN0aW9uXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZ2V0c1Njcm9sbFZhbHVlKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0c1Njcm9sbFZhbHVlKCkge1xyXG4gICAgICAgIHNjclBvc1kgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JQb3NZKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGgpO1xyXG5cclxuICAgIC8vYW5pbWF0ZSBlbGVtZW50IHJldmlld3MuaHRtbCBhbmQgcXVlc3Rpb25zLmh0bWxcclxuXHJcbiAgICBsZXQgd2luZG93SGVpZ2h0O1xyXG4gICAgY29uc3QgZWxlbWVudFZpc2libGUgPSAxOyAvL2FuaW1hdGlvbiB3aWxsIHN0YXJ0IHdoZW4gdGhlIGJsb2NrIGlzIDE1MHB4IGF3YXkgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydC5cclxuICAgIGxldCBzY3JvbGxFbGVtZW50cztcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzX193cmFwcGVyLWZvci1pdGVtX19pdGVtXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrXHJcblxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKTsgLy9zdGFydCBieSBzZWxlY3RpbmcgYWxsIHRoZSBibG9jayBcclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWFydGljbGUtbWluXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKTsgLy9zdGFydCBieSBzZWxlY3RpbmcgYWxsIHRoZSBibG9jayBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3dIZWlnaHQoKSB7XHJcbiAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0OyAvL3dpbmRvd0hlaWdodCBnZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0IChpbm5lckhlaWdodClcclxuICAgIH1cclxuICAgIGdldFdpbmRvd0hlaWdodCgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldFdpbmRvd0hlaWdodCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGVhckVsZW1lbnQoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzY3JvbGxFbGVtZW50cylcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjcm9sbEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50VG9wID0gK3Njcm9sbEVsZW1lbnRzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcC50b0ZpeGVkKDIpOyAvL2NhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIGZyb20gdGhlIHRvcCBvZiB0aGUgdmlld3BvcnQgdG8gdGhlIHRvcCBvZiB0aGUgYmxvY2tcclxuXHJcbiAgICAgICAgICAgIC8vSWYgdGhpcyBjb25kaXRpb24gaXMgdHJ1ZSwgaXQgbWVhbnMgdGhlIGJsb2NrIGlzIHdpdGhpbiB0aGUgdmlld3BvcnQsIGFuZCB0aGUgY2xhc3MgcmV2ZWFsLCBcclxuICAgICAgICAgICAgLy93aGljaCBoYXMgdGhlIHN0eWxlIGNoYW5nZXMsIGlzIGFkZGVkLiBJZiB0aGUgYmxvY2sgaXMgbm90IHdpdGhpbiB0aGUgZGVmaW5lZCBcclxuICAgICAgICAgICAgLy92aXNpYmlsaXR5IGFyZWEsIHRoZSByZXZlYWwgY2xhc3MgaXMgcmVtb3ZlZCwgcmV2ZXJ0aW5nIHRoZSBhbmltYXRpb24uXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50VG9wIDwgd2luZG93SGVpZ2h0IC0gZWxlbWVudFZpc2libGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxFbGVtZW50c1tpXS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZUVsZW1lbnRzT25TY3JvbGxcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxFbGVtZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZUVsZW1lbnRzT25TY3JvbGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8vYXBwZWFyRWxlbWVudFJldmlld3MoKTtcclxuICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgYXBwZWFyRWxlbWVudFJldmlld3MpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNtb290aCgpIHtcclxuXHJcbiAgICAgICAgLy9XZSBjYWxjdWxhdGUgb3VyIGNvbnRhaW5lciBwb3NpdGlvbiBieSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBtZXRob2RcclxuICAgICAgICBibG9ja1Bvc1kgPSBsaW5lYXIoYmxvY2tQb3NZLCBzY3JQb3NZLCBzcGVlZEFuaW0pIC8vY2FsY3VsYXRlIGZvclNtb290aFNjcm9sbFdyYXBwZXIgcG9zaXRpb24gYnkgbGluZWFyIGludGVycG9sYXRpb24gbWV0aG9kXHJcblxyXG4gICAgICAgIGJsb2NrUG9zWSA9IE1hdGguZmxvb3IoYmxvY2tQb3NZICogMTAwKSAvIDEwMDtcclxuXHJcblxyXG4gICAgICAgIGZvclNtb290aFNjcm9sbFdyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgLSR7YmxvY2tQb3NZfXB4LCAwcHgpYCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGgpO1xyXG4gICAgICAgIC8vYW5pbWF0ZSBlbGVtZW50IHJldmlld3MuaHRtbCBhbmQgcXVlc3Rpb25zLmh0bWxcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzX193cmFwcGVyLWZvci1pdGVtX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXBwZWFyRWxlbWVudCgpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXBwZWFyRWxlbWVudCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWFydGljbGUtbWluXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXBwZWFyRWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbGluZWFyKGFyZzEsIGFyZzIsIGFyZzMpIHtcclxuICAgICAgICByZXR1cm4gKDEgLSBhcmczKSAqIGFyZzEgKyBhcmczICogYXJnMjtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4vL3NwbGl0IHR4dFxyXG5jb25zdCBoMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJylcclxuXHJcblxyXG5sZXQgc3RyaW5nSDtcclxubGV0IGFycmF5TGV0dGVyc0ggPSBbXTtcclxuXHJcbmNvbnNvbGUubG9nKGgyKTtcclxuaWYgKGgyICE9IG51bGwpIHtcclxuICAgIGlmIChoMi5pZCA9PSAnaDJjYXRhbG9nTWFpblBhZ2UnKSB7XHJcbiAgICAgICAgbGV0IHRtcEFkYXB0aXZlSDI7XHJcbiAgICAgICAgaDJjYXRhbG9nTWFpblBhZ2VBZGFwdGl2ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaDJjYXRhbG9nTWFpblBhZ2VBZGFwdGl2ZSgpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTgwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG1wQWRhcHRpdmVIMiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQWRhcHRpdmVIMiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMCcpICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1ODApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0bXBBZGFwdGl2ZUgyICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBBZGFwdGl2ZUgyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzKGgyLCAyLCAyLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaDIuaWQgPT0gJ2gyYXJ0aWNsZU9yVmlkZW8nKSB7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGluZ1dyYXBwZXJzKGgyLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy9hcmcxID0gaDEgb3IgaDJbaV1cclxuLy9hcmcyID0gYW1vdW50IGxpbmVzXHJcbi8vYXJnMyA9IGFtb3VudCB3b3JkcyBpbiAxIGxpbmVcclxuLy9hcmc0ID0gYW1vdW50IHdvcmRzIGluIDIgbGluZVxyXG4vL2FyZzUgPSBhbW91bnQgd29yZHMgaW4gMyBsaW5lXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRpbmdXcmFwcGVycyhhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1LCBhcmc2LCBhcmc3KSB7XHJcblxyXG4gICAgLy9mb3IgYWRhcHRpdmVcclxuICAgIC8vY29uc29sZS5sb2coYXJnMSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlcy5sZW5ndGgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUpXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGFyZzEuY2hpbGROb2Rlcykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coaXRlbSlcclxuICAgIH1cclxuICAgIGlmIChhcmcxLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUgPT0gJ0RJVicpIHsgLy9jaGVja3MgaWYgaDIgaXMgc3BsaXQgaW50byBsZXR0ZXJzXHJcbiAgICAgICAgbGV0IHRtcFdvcmQgPSBhcmcxLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyRm9yV29yZCcpOyAvL3Rha2VzIGFsbCB0aGUgd29yZHNcclxuICAgICAgICBsZXQgdG1wQXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0bXBXb3JkLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyID0gdG1wV29yZFtpXS5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlclN5bWJvbCcpOyAvL3Rha2VzIGFsbCBjaGFyYWN0ZXJzIGluIGVhY2ggd29yZFxyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNoYXIubGVuZ3RoOyArK3kpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hhclt5XS5pbm5lckhUTUwpICAgXHJcbiAgICAgICAgICAgICAgICB0bXBBcnIucHVzaChjaGFyW3ldLmlubmVySFRNTCk7IC8v0YFoYXIgcHV0cyBpbnRvIGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZiAoeSA9PSAoY2hhci5sZW5ndGggLSAxKSkgeyAvL2lmIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIHdvcmQsIHRoZW4gaXQgd2lsbCBhZGQgYSBzcGFjZSB0byB0aGUgYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICB0bXBBcnIucHVzaCgnICcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0bXBBcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXJnMS5pbm5lckhUTUwgPSBcIlwiOyAvL3dpbGwgY2xlYXIgaDJcclxuICAgICAgICBhcmcxLmlubmVySFRNTCA9IHRtcEFyci5qb2luKFwiXCIpOyAvL3RoZSBsaW5lIGNsZWFyZWQgb2Ygd3JhcHBlcnMgd2lsbCBiZSBhZGRlZCB0byBoMlxyXG4gICAgICAgIC8vYXJnMS5hcHBlbmQodG1wQXJyLmpvaW4oXCJcIikpO1xyXG4gICAgfVxyXG4gICAgLyppZihhcmcxLmNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5lJykpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ3JycnJycnJyJylcclxuICAgIH0qL1xyXG5cclxuICAgIHN0cmluZ0ggPSBhcmcxLmlubmVySFRNTDsgLy90aGUgY29udGVudCBvZiB0aGUgZWxlbWVudCAoc3RyaW5nKSBpcyBwdXQgaW50byBhIHZhcmlhYmxlXHJcbiAgICBhcmcxLmlubmVySFRNTCA9ICcnOyAvL3plcm9pbmcgY29udGVudCB0byBhZGQgd3JhcHBlcnMgd2l0aCBjb250ZW50XHJcbiAgICBhcnJheUxldHRlcnNIID0gW10gLy9hcnJheSB6ZXJvaW5nID8/PyBpdCBzZWVtcyB0byBiZSByZXNldCB0byB6ZXJvIGFyb3VuZCBsaW5lIDIwOSA/Pz9cclxuICAgIGZvciAobGV0IGNoYXIgb2Ygc3RyaW5nSCkgeyAvL3RoZSBzdHJpbmcgaXMgc3BsaXQgaW50byBjaGFyYWN0ZXJzIGFuZCBhZGRlZCB0byB0aGUgYXJyYXlcclxuICAgICAgICBhcnJheUxldHRlcnNILnB1c2goY2hhcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvdW50ID0gMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlMZXR0ZXJzSC5sZW5ndGg7ICsraSkgeyAvL2NvdW50IHdvcmRzIGluIGEgbGluZSwgcmVsYXRpdmUgdG8gJyAnXHJcbiAgICAgICAgaWYgKGFycmF5TGV0dGVyc0hbaV0gPT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBsZW5naHRBcnIgPSBhcnJheUxldHRlcnNILmxlbmd0aDtcclxuXHJcbiAgICBpZiAoYXJnMiA9PSAxKSB7IC8vaWYgeW91IG5lZWQgdG8gbWFrZSBhIGxpbmUgaW4gMSBsaW5lXHJcbiAgICAgICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW5nIGEgbGluZSBhbmQgYWRkaW5nIGl0IHRvIGFuIGVsZW1lbnQgKEgxIG9yIEgyKVxyXG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICAgIGFyZzEuYXBwZW5kKGxpbmUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmIChhcmcyID4gMSkgeyAvL2lmIHlvdSBuZWVkIHRvIG1ha2UgYSBsaW5lIGluIDIgbGluZXMgb3IgbW9yZVxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgYXJnMjsgKyt5KSB7IC8vIHkgPCBhcmcyKDMpID0gbWFrZSAzIGxpbmVzIFxyXG4gICAgICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpbmcgYSBsaW5lIGFuZCBhZGRpbmcgaXQgdG8gYW4gZWxlbWVudCAoSDEgb3IgSDIpXHJcbiAgICAgICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgICAgICAgICBhcmcxLmFwcGVuZChsaW5lKTtcclxuICAgICAgICAgICAgaWYgKHkgPT0gMCkgeyAvLzFTVCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmczOyArK2kpIHsgLy8gIGkgPCBhcmczKDIpID0gIDIgd29yZHMgaW4gbGluZVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gMSkgeyAvLzJORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc0OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc0KDMpID0gIDMgd29yZHMgaW4gbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpIC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gMikgeyAvLzNORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc1OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc1KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAzKSB7IC8vNE5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzY7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzYoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDQpIHsgLy81TkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNzsgKytpKSB7IC8vIC8vICBpIDwgYXJnNygyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGFyZzEpIHtcclxuICAgICAgICAvL2J5IHRoZSB0ZXJtIHdvcmQgYW5kIHN5bWJvbCwgd2UgbWVhbiBhIHdyYXBwZXIgZm9yIGEgd29yZCBhbmQgc3ltYm9sXHJcbiAgICAgICAgbGV0IHdyYXBwZXJGb3JXb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGlvbiBvZiBhIHdvcmRcclxuICAgICAgICB3cmFwcGVyRm9yV29yZC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyRm9yV29yZCcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmdodEFycjsgKyt5KSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJheUxldHRlcnNIWzBdID09IFwiIFwiKSB7IC8vaWYgaXQgZW5jb3VudGVycyBcIiBcIiAtIGl0IHdpbGwgZGVsZXRlIGl0XHJcbiAgICAgICAgICAgICAgICBhcnJheUxldHRlcnNILnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5TGV0dGVyc0hbMF0gPT0gdW5kZWZpbmVkKSBicmVhazsgLy9pZiB0aGUgYXJyYXkgaXMgb3ZlciAtIHN0b3BcclxuICAgICAgICAgICAgbGV0IGRpdkZvclN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpb24gb2YgYSBzeW1ib2xcclxuICAgICAgICAgICAgZGl2Rm9yU3ltYm9sLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXJTeW1ib2wnKTtcclxuICAgICAgICAgICAgZGl2Rm9yU3ltYm9sLmlubmVySFRNTCA9IGFycmF5TGV0dGVyc0hbMF07IC8vYWRkaW5nIGEgc3ltYm9sIGZyb20gYW4gYXJyYXkgdG8gYSB3cmFwcGVyKHN5bWJvbClcclxuICAgICAgICAgICAgd3JhcHBlckZvcldvcmQuYXBwZW5kKGRpdkZvclN5bWJvbCk7IC8vYWRkaW5nIGEgc3ltYm9sIHRvIGEgd29yZFxyXG4gICAgICAgICAgICBhcnJheUxldHRlcnNILnNwbGljZSgwLCAxKTsgLy9yZW1vdmUgYWRkZWQgY2hhcmFjdGVyIGZyb20gYXJyYXlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZzEuYXBwZW5kKHdyYXBwZXJGb3JXb3JkKTsgLy9hZGRpbmcgYSB3b3JkIHdpdGggc3ltYm9scyB0byB0aGUgY3JlYXRlZCBsaW5lICh0aGUgbGluZSB3YXMgY3JlYXRlZCBhdCBhYm91dCAxNzUgYW5kIDE4NClcclxuICAgIH1cclxufVxyXG5cclxuLy9oMiBjaGFyIHByZXAgZm9yIGFuaW1cclxuXHJcbmlmIChoMiAhPSBudWxsKSB7XHJcbiAgICBjb25zdCBoMkNoYXIgPSBoMi5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlclN5bWJvbCcpXHJcbiAgICAvL2NvbnNvbGUubG9nKGgyQ2hhcik7XHJcbiAgICBsZXQgdG1wSDJDaGFyVHJhbnNZID0gMDtcclxuICAgIGZvciAobGV0IGNoYXIgb2YgaDJDaGFyKSB7IC8vd2lsbCBtYWtlIGEgbGFkZGVyXHJcbiAgICAgICAgY2hhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RtcEgyQ2hhclRyYW5zWSAqIDAuNX1weClgO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hhcilcclxuICAgICAgICB0bXBIMkNoYXJUcmFuc1kgKz0gMTU7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBjb25zZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybSAuY29uc2VudCcpOyAvL3Rha2UgYWxsIGVsZW1lbnRzIHdpdGggY2xhc3MgLmNvbnNlbnRcclxuXHJcbi8vdGhlcmUgaXMgYSBkaXYgd2l0aCBjbGFzcyBjb25jZW50LiBJbiBjb25zZW50IHRoZXJlIGFyZSAyIGVsZW1lbnRzIGlucHV0IGFuZCBsYWJlbFxyXG4vL3RoZSBuZXh0IGVsZW1lbnQgYWZ0ZXIgdGhlIGNvbnNlbnQgaXMgdGhlIGJ1dHRvbiBlbGVtZW50XHJcblxyXG5mb3IoIGxldCBpdGVtIG9mIGNvbnNlbnQpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb2xsZWN0aW9uIGVudW1lcmF0aW9uXHJcbiAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IC8vYWRkIGNsaWNrIGV2ZW50IHRvIGVhY2ggbmV4dCBpdGVtKGJ1dHRvbikgZnJvbSB0aGUgY29sbGVjdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCAhZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5jaGlsZE5vZGVzWzFdLmNoZWNrZWQgKXsgLy9pZiB0aGUgbGFiZWwgaXMgbm90IGluIHRoZSBjaGVja2VkIHN0YXRlXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIHRoZSBidXR0b24gZG9lcyBub3Qgd29ya1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UaGlzIGlzIG5lY2Vzc2FyeSBmb3IgdGhlIHVzZXIgdG8gYWdyZWUgdG8gdGhlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90ZXJtcyBvZiBwZXJzb25hbCBkYXRhIHByb2Nlc3NpbmcgXHJcbiAgICB9KTtcclxufTtcclxuIiwiLy9Gb3IgaG93VG9CdXkuaHRtbCwgYmxvZy5odG1sLCBhY2NvdW50Lmh0bWwsIHF1ZXN0aW9ucy5odG1sXHJcblxyXG5jb25zdCBpdGVtc0NhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yQ2F0ZWdvcnlBbGxQYWdlcyBwJyk7IC8vaW4gdGhlIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgcmFkaW8tY2F0ZWdvcnksIGFsbCBpbnB1dHMgb2YgdGhlIHJhZGlvIHR5cGUgYXJlIHRha2VuXHJcbmNvbnN0IGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hbmNob3JdJykgLy9jb2xsZWN0aW9uIG9mIGFsbCBlbGVtZW50cyB3aXRoIGF0dHJpYnV0ZSBkYXRhLWFuY2hvclxyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXIgLmZvb3Rlci1jb250YWluZXInKTtcclxuXHJcbml0ZW1zQ2F0ZWdvcmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHRlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodGVkJykpIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGl0ZW1Db2xsZWN0IG9mIGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3cpIHsgLy9pdGVyYXRlIG92ZXIgYWxsIGVsZW1lbnRzIHdpdGggZGF0YS1hbmNob3IgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsgLy9hbGwgZWxlbWVudHMgd2l0aCB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIGFyZSBhc3NpZ25lZCB0aGUgaGlkZSBjbGFzc1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtQ29sbGVjdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSAnYWxsLWJsb2cnKSB7IC8vZm9yIGJsb2cuaHRtbCAvL2lmIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgaWQgaXMgJ2FsbC1ibG9nJywgdGhlbiBhbGwgZWxlbWVudHMgd2l0aCB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIHdpbGwgaGF2ZSB0aGUgaGlkZSBjbGFzcyByZW1vdmVkXHJcbiAgICAgICAgICAgICAgICBpdGVtQ29sbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5pZCA9PSBpdGVtQ29sbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJykpIHsgLy90aGVyZSBhcmU6IDEuIGlucHV0IHdpdGggY2hhbmdlIGV2ZW50IDIuIGVsZW1lbnQgKGRpdiBvciBwKSB3aXRoIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgaXRlbUNvbGxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpOyAvLyBpZiBpbnB1dCBpZCBtYXRjaGVzIGVsZW1lbnQgKGRpdiBvciBwKSBkYXRhLWFuY2hvciBhdHRyaWJ1dGUsIHRoZW4gcmVtb3ZlIGNsYXNzIGhpZGUgZnJvbSBlbGVtZW50IChkaXYgb3IgcClcclxuICAgICAgICAgICAgICAgIC8vZml4IGRpc3BsYXkgZm9vdGVyIG9uIGhvd1RvQnV5Lmh0bWwgKGZvciBhbmltYXRlRm9vdGVyLmpzKVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3dbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdxdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXInKSkge1xyXG4gICAgICAgICAgICBhbGlnbkJvZHkoKTsgLy9vbmx5IGZvciBxdWVzdGlvbnMuaHRtbCwgc28gdGhhdCBzbW9vdGggc2Nyb2xsaW5nIHdvcmtzXHJcbiAgICAgICAgfSBlbHNlIGlmIChjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93WzBdLmNsYXNzTGlzdC5jb250YWlucygnYmxvZ19fcmV2aWV3cycpKSB7XHJcbiAgICAgICAgICAgIGFsaWduQm9keSgpOyAvL29ubHkgZm9yIGJsb2cuaHRtbCwgc28gdGhhdCBzbW9vdGggc2Nyb2xsaW5nIHdvcmtzXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy9jb25zb2xlLmxvZyhpdGVtc0NhdGVnb3JpZXNbMF0pO1xyXG5cclxuLy9jb25zb2xlLmxvZyhpdGVtc0NhdGVnb3JpZXNbMF0uY2hpbGROb2Rlc1sxXS50YWdOYW1lKTtcclxuXHJcbi8vZm9yIGJsb2cuaHRtbCAvL2NvdW50aW5nIHRoZSBudW1iZXIgb2YgYWxsIGFydGljbGVzIGFuZCBieSBjYXRlZ29yaWVzXHJcbmlmIChpdGVtc0NhdGVnb3JpZXNbMF0uY2hpbGROb2Rlc1sxXSkgeyAvL2NoZWNrIHRoYXQgdGhpcyBwaWVjZSBvZiBjb2RlIG9ubHkgd29ya3Mgb24gdGhlIGJsb2cuaHRtbFxyXG5cclxuICAgIC8vY291bnRpbmcgYWxsIGFydGljbGVzXHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgZm9yIChsZXQgaXRlbUNvbGxlY3Qgb2YgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coaXRlbUNvbGxlY3QuY2hpbGROb2Rlcyk7Ly9Ob2RlTGlzdCBmb3JtYXQ6IHRleHQsIGRpdi5ibG9nLWFydGljbGUtbWluOyB0ZXh0LCBkaXYuYmxvZy1hcnRpY2xlLW1pbjsgZXRjLiBcclxuICAgICAgICAvL29ubHkgZGl2LmJsb2ctYXJ0aWNsZS1taW4gbmVlZCB0byBiZSBjb3VudGVkLCBUaGF0J3Mgd2h5IC0+IGl0ZW1Db2xsZWN0LmNoaWxkTm9kZXMubGVuZ3RoIC8gMlxyXG4gICAgICAgIC8vdGhlcmUgaXMgdGV4dCBhdCB0aGUgZW5kIG9mIHRoZSBub2RlbGlzdCwgdGhlIHRleHQgbmVlZHMgdG8gYmUgcmVtb3ZlZCwgVGhhdCdzIHdoeSAtPiBpdGVtQ29sbGVjdC5jaGlsZE5vZGVzLmxlbmd0aCAtIDFcclxuICAgICAgICBjb3VudCArPSAoaXRlbUNvbGxlY3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSAvIDIgLy90aHJvdyBpbnRvIHRoZSBjb3VudFxyXG4gICAgfVxyXG4gICAgaXRlbXNDYXRlZ29yaWVzWzBdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gY291bnQ7IC8vYWRkIGNvdW50ZWQgYXJ0aWNsZXMgdG8gaHRtbFxyXG5cclxuICAgIC8vY291bnRpbmcgYXJ0aWNsZXMgYnkgY2F0ZWdvcnlcclxuICAgIGl0ZW1zQ2F0ZWdvcmllcy5mb3JFYWNoKChpdGVtKSA9PiB7IC8vIGZvciBlYWNoIGl0ZW0gZnJvbSB0aGUgY29sbGVjdGlvbiBpdGVtc0NhdGVnb3JpZXNcclxuICAgICAgICBmb3IgKGxldCBpdGVtQ29sbGVjdCBvZiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93KSB7IC8vaXRlcmF0ZSBvdmVyIGFsbCBlbGVtZW50cyB3aXRoIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSBpdGVtQ29sbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJykpIHsgLy9pZiBpdGVtLmlkIG1hdGNoZXMgdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSBvZiBhbiBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb24gY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvd1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IChpdGVtQ29sbGVjdC5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpIC8gMjsgLy8gdGhlbiBmcm9tIHRoZSBpbnB1dCBnbyB0byB0aGUgbGFiZWwsIGFuZCBpbiB0aGUgbGFiZWwgZmluZCB0aGUgc3BhbiBhbmQgYXNzaWduIHRoZSB2YWx1ZSBvZiB0aGUgY291bnRlZCBhcnRpY2xlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ2hlY2tlZFJhZGlvQmxvZygpIHsgLy90byBnbyBmcm9tIHRoZSBjYXJkLmh0bWwgcGFnZTsgc2VjdGlvbiBjYXJkLWhlbHBmdWwtaW5mb3JtYXRpb24gLT4gY2FyZC1oZWxwZnVsLWluZm9ybWF0aW9uX19hcnRpY2xlc1xyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXNDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzFdKSB7IC8vaHR0cHM6Ly9saXZlYmFjdGVyaWEubG9jYWwvYmxvZy5odG1sP3ZpZGVvLWJyb2FkY2FzdHMgLSB3aWxsIG9ubHkgdGFrZSB2aWRlby1icm9hZGNhc3RzXHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTsgLy93aWxsIHNldCB0aGUgY2hlY2tlZCBzdGF0ZSB0byB0aGUgaW5wdXQgd2hvc2UgaWQgbWF0Y2hlcyB0aGUgbGluayBhZGRyZXNzXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW1Db2xsZWN0IG9mIGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3cpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsgLy9hbGwgZWxlbWVudHMgd2l0aCB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIGFyZSBhc3NpZ25lZCB0aGUgaGlkZSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1Db2xsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMV0pIHsgLy9pZiB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSBtYXRjaGVzIHRoZSBzcGxpdCBsaW5rIGFkZHJlc3MgKDJuZCBwYXJ0KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUNvbGxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpOyAvLyB0aGVuIHRoZSAnaGlkZScgY2xhc3Mgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhpcyBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufTsiLCJjb25zdCBidG5MaXN0RHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZfX2J1cmdlci13cmFwcGVyLWZvci1saW5lJyk7XHJcbmNvbnN0IG5hdk1haW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2X19tYWluLWxpc3QnKTtcclxuYnRuTGlzdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IDEwODMpIHsvL2Jyb3dzZXIgd2luZG93IHdpZHRoXHJcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nyb3NzJykpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY3Jvc3MnKTsgICAgICAgICAvL3doZW4gYWRkaW5nIGEgY2xhc3MgZnJvbSBzdGlja3MgbWFrZXMgYSBjcm9zc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmF2TWFpbkxpc3QuY2xhc3NMaXN0LmFkZCgnZHJvcC1kb3duX19oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7Ly93aGVuIGFkZGluZyBhIGNsYXNzLCBpdCBtYWtlcyBhIGxpc3QgZHJvcCBkb3duXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Nyb3NzJylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5hdk1haW5MaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3AtZG93bl9faGVhZGVyX19uYXZfX21haW4tbGlzdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4iLCIvL2Ryb3AgZG93biBoZWFkZXJfX25hdl9fbWFpbi1saXN0X19pdGVtX19zdWItbGlzdCBhbmQgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3RfX2l0ZW1fX2xhc3QtbGlzdCBcclxuY29uc3QgYXJyb3dPcGVuTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnJvdy1yaWd0aC13cmFwcGVyJyk7XHJcbmFycm93T3Blbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gey8vd2hlbiB5b3UgY2xpY2sgb24gdGhlIGFycm93IGEgbGlzdCBkcm9wIGRvd25cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLWxpc3QnKSkgey8vaXQgd2lsbCBiZSBlaXRoZXIgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3Qgb3IgYSBoZWFkZXJfX25hdl9fbWFpbi1saXN0X19pdGVtX19zdWItbGlzdF9faXRlbV9fbGFzdC1saXN0XHJcbiAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ29wZW4tbGlzdCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3Blbi1saXN0JylcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJykpIHsvL3NwaW5zIGJ5IGFkZGluZyBhIGNsYXNzXHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYXJyb3ctcmlndGgtd3JhcHBlci1yb3RhdGUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYXJyb3ctcmlndGgtd3JhcHBlci1yb3RhdGUnKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iLCIvL2JlZ2luIC8vZWxlbWVudHMgZm9yIG9wZW5pbmcgbW9kYWwgd2luZG93c1xyXG5jb25zdCBvcGVuUmVnaXN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2l0ZW1zX19zaG9wcGluZy1jYXJkJyk7XHJcbmNvbnN0IG9wZW5DYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2l0ZW1zX19jYWxsJyk7XHJcbmNvbnN0IG9wZW5Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2l0ZW1zX19hdXRob3JpemF0aW9uJyk7XHJcbmNvbnN0IG9wZW5Gb3Jnb3RZb3VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub0ZvcmdvdC15b3VyLXBhc3N3b3JkJyk7XHJcbmNvbnN0IG9wZW5Hb1RvTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29Ub0xvZ2luJyk7XHJcbmNvbnN0IG9wZW5Hb1RvUmVnaXN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHb1RvUmVnaXN0cicpO1xyXG5jb25zdCBvcGVuQ29kZUZyb21TbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub0NvZGVGcm9tU21zJyk7XHJcbmNvbnN0IG9wZW5OZXdQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHb1RvTmV3UGFzc3dvcmQnKTtcclxuY29uc3QgY29udGFjdE9wZW5Nb2RhbFF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFscXVlc3Rpb24nKTsvL2ZvciBjb250YWN0cy5odG1sXHJcbmNvbnN0IHdpZGdldE9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aWRnZXQtb3Blbi1tb2RhbCcpOyAvL2luIHRoZSB3aWRnZXQsIHRoaXJkIGl0ZW0gZnJvbSB0aGUgdG9wXHJcbi8vZW5kXHJcblxyXG4vL2JlZ2luIC8vbW9kYWwgd2luZG93c1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBsb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fbG9naW4nKTtcclxuY29uc3QgcmVnaXN0ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcmVnaXN0cicpO1xyXG5jb25zdCBmb3Jnb3RZb3VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ZvcmdvdC15b3VyLXBhc3N3b3JkJyk7XHJcbmNvbnN0IGNvZGVGcm9tU21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jb2RlLWZyb20tc21zJyk7XHJcbmNvbnN0IG5ld1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19uZXctcGFzc3dvcmQnKTtcclxuY29uc3QgY2FsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NhbGxiYWNrJyk7XHJcbmNvbnN0IGFza0FRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYXNrLWEtcXVlc3Rpb24nKTtcclxuLy9lbmRcclxuXHJcbi8vYmVnaW4gIC8vY2xvc2UgbW9kYWwgd2luZG93c1xyXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2Nsb3NlXCIpO1xyXG4vL2VuZFxyXG5cclxuLy9iZWdpbiAvL2V2ZXJ5dGhpbmcgcmVsYXRlZCB0byBwcml2YWN5IHBvbGljeVxyXG5jb25zdCBwb2xpdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wb2xpdGljcycpO1xyXG5jb25zdCBvcGVuUG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29Ub1BvbGl0aWNzJyk7XHJcbmNvbnN0IGNsb3NlUG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcG9saXRpY3NfX2Nsb3NlJyk7XHJcbmNvbnN0IGNsb3NlQnRuUG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9saXRpYy1idXR0b24tY2xvc2UnKTtcclxuLy9lbmRcclxuXHJcbi8vbW9kYWwuc3R5bGUuaGVpZ2h0ID0gYCR7bW9kYWwucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgOy8vZm9yIHRleHRhcmVhR3Jvdy5qc1xyXG5cclxuXHJcblxyXG5cclxuLy9jb25zdCBvcGVuTW9kYWxSZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1yZXdpZXdzX19sZWF2ZS1mZWVkYmFjaycpO1xyXG4vL2NvbnN0IG1vZGFsUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19yZXZpZXcnKTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCwgaXRlbSkgey8vcGFyYW1ldGVyIG1vZGFsID09IG9uIGxpbmUgMTUgLyBwYXJhbWV0ZXIgaXRlbSA9PSBsb2dpbiBvciByZWdpc3RyIGFuZCBldGMuIG9uIGxpbmUgMTZcclxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJGaXJlZm94XCIpICE9IC0xKSB7IC8vZm9yIHRleHRhcmVhR3Jvdy5qcyB0byB3b3JrIGluIEZpcmVmb3ggYnJvd3NlclxyXG4gICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWxfX2Fzay1hLXF1ZXN0aW9uJykpe1xyXG4gICAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykuc2V0QXR0cmlidXRlKFwiQ29sc1wiLCBgMjRgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICB9IFxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbChlKSB7Ly9pZiB5b3UgY2xpY2sgb24gc29tZXRoaW5nIG90aGVyIHRoYW4gYSBtb2RhbCB3aW5kb3csIGl0IHdpbGwgY2xvc2UgdGhlIG1vZGFsIHdpbmRvd1xyXG4gICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHJlZ2lzdHIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGNhbGxiYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBsb2dpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZm9yZ290WW91clBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBjb2RlRnJvbVNtcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgbmV3UGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGFza0FRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgLy9tb2RhbFJldmlldy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldCA9PSBwb2xpdGljcykge1xyXG4gICAgICAgIHBvbGl0aWNzLmNsYXNzTGlzdC5hZGQoJ2hpZGUtcG9saXRpY3MnKTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlYnRuKGUpIHsvL2Nsb3NlcyBtb2RhbCB3aW5kb3cgd2hlbiBjbGlja2luZyBvbiBidG5cclxuICAgIGlmIChlLnRhcmdldCA9PSBjbG9zZVBvbGl0aWNzIHx8IGUudGFyZ2V0ID09IGNsb3NlQnRuUG9saXRpY3MpIHtcclxuICAgICAgICBwb2xpdGljcy5jbGFzc0xpc3QuYWRkKCdoaWRlLXBvbGl0aWNzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICByZWdpc3RyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBjYWxsYmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgbG9naW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGZvcmdvdFlvdXJQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY29kZUZyb21TbXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIG5ld1Bhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBhc2tBUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIC8vbW9kYWxSZXZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsb3Nl0KF1cnJlbnRPcGVuTGluayhjbG9zZSwgb3Blbikgey8vY2xvc2Ugb25lIG1vZGFsIHdpbmRvdyBhbmQgb3BlbiBhbm90aGVyXHJcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBvcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsb3Nl0KF1cnJlbnRPcGVubG9naW4oZSkgey8vKGUpID09IG9wZW5Hb1RvTG9naW4gPT0gZWxlbWVudCB3aXRoIGNsYXNzIC5nb1RvTG9naW4sIGNsb3Nlc3QoXCIubW9kYWxfX2Jsb2NrXCIpIGlzIHNldCBvbiB0aGlzIGVsZW1lbnQuXHJcbiAgICBlLnRhcmdldC5jbG9zZXN0KFwiLm1vZGFsX19ibG9ja1wiKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7Ly93aGVuIGNsaWNraW5nIG9uIGFuIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgLmdvVG9Mb2dpbiwgXHJcbiAgICBsb2dpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vaXQgd2lsbCBnbyB0aHJvdWdoIGFsbCBlbGVtZW50cyBpbmNsdWRpbmcgcGFyZW50cyB1cCB0byB0aGUgcm9vdCBlbGVtZW50IHVudGlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2l0IGZpbmRzIGFuIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgLm1vZGFsX19ibG9jaywgc3RvcCwgYW5kIGFkZCB0aGUgY2xhc3MgLmhpZGUgdG8gdGhpcyBlbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbFBvbGl0aWNzKCkge1xyXG4gICAgcG9saXRpY3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1wb2xpdGljcycpO1xyXG59XHJcblxyXG5cclxub3BlblJlZ2lzdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIHJlZ2lzdHIpKTsvL29uIGxpbmUgNDdcclxub3BlbkNhbGxiYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBjYWxsYmFjaykpO1xyXG5vcGVuTG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGxvZ2luKSk7XHJcbndpZGdldE9wZW5Nb2RhbFswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgY2FsbGJhY2spKTtcclxud2lkZ2V0T3Blbk1vZGFsWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBhc2tBUXVlc3Rpb24pKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG5jbG9zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZWJ0bikgfSk7Ly9vbiBsaW5lIDU5XHJcblxyXG5vcGVuR29Ub0xvZ2luLmZvckVhY2goKGl0ZW0pID0+IHsgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3Nl0KF1cnJlbnRPcGVubG9naW4pIH0pO1xyXG5cclxub3BlbkZvcmdvdFlvdXJQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3Nl0KF1cnJlbnRPcGVuTGluayhsb2dpbiwgZm9yZ290WW91clBhc3N3b3JkKSk7Ly9vbiBsaW5lIDkzXHJcbm9wZW5Hb1RvUmVnaXN0ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3Nl0KF1cnJlbnRPcGVuTGluayhsb2dpbiwgcmVnaXN0cikpO1xyXG5vcGVuQ29kZUZyb21TbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsoZm9yZ290WW91clBhc3N3b3JkLCBjb2RlRnJvbVNtcykpO1xyXG5vcGVuTmV3UGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsoY29kZUZyb21TbXMsIG5ld1Bhc3N3b3JkKSk7XHJcblxyXG5vcGVuUG9saXRpY3MuZm9yRWFjaCgoaXRlbSkgPT4gey8vb24gbGluZSAxMDVcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWxQb2xpdGljcyk7XHJcbn0pO1xyXG5jbG9zZVBvbGl0aWNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pOyAgIC8vb24gbGluZSA1OVxyXG5jbG9zZUJ0blBvbGl0aWNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pOy8vb24gbGluZSA1OSAgXHJcblxyXG5cclxuaWYoIGNvbnRhY3RPcGVuTW9kYWxRdWVzdGlvbiApe1xyXG4gICAgY29udGFjdE9wZW5Nb2RhbFF1ZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBhc2tBUXVlc3Rpb24pKTtcclxufTtcclxuXHJcbi8vb3Blbk1vZGFsUmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBtb2RhbFJldmlldykpO1xyXG5cclxuXHJcbiIsIi8vbGV0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGUtc2hvdy1wYXNzd29yZCcpOyAvLyBmb3IgdmVyLiAxXHJcbmxldCBleWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXllJyk7XHJcbmNvbnN0IGJ0blBhc3NDaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZC1jaGVjaycpO1xyXG5sZXQgbWVzc2FnZVBhc3NNaXNtYXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZHMtZG8tbm90LW1hdGNoJyk7XHJcbmxldCB0d29JbnB1dFBhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFzc0NoZWNrJyk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuKGUpIHtcclxuXHJcbiAgICAvL3Zlci4xIFRoaXMgdmVyc2lvbiBvZiB0aGUgY29kZSBoaWQvc2hvd2VkIHRoZSBwYXNzd29yZCBmb3IgYWxsIGlucHV0cyB3aGVuIGNsaWNraW5nIG9uIHRoZSBleWVcclxuXHJcbiAgICAvKnBhc3N3b3JkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS50eXBlID09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgaXRlbS50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgICAgICBleWUuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWV5ZScpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIGV5ZS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZXllJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pICAqL1xyXG5cclxuICAgIC8vTm93IGhpZGVzL3Nob3dzIG9ubHkgdGhlIGlucHV0IHRoYXQgcmVsYXRlcyB0byB0aGUgcHJlc3NlZCBleWVcclxuXHJcbiAgICBpZiAoZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID09ICdwYXNzd29yZCcpIHsvL3doZW4gY2xpY2tpbmcgb24gdGhlIGV5ZSBpZiB0aGUgaW5wdXQgaXMgb2YgdHlwZSAncGFzc3dvcmQnXHJcbiAgICAgICAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID0gJ3RleHQnOyAgICAgICAvL3RoZW4gcmVwbGFjZSB3aXRoIHR5cGUgJ3RleHQnXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1leWUnKSAgICAgICAgICAgICAgICAvL29wZW4gZXllIHRocm91Z2ggY2xhc3MgcmVtb3ZhbFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnR5cGUgPSAncGFzc3dvcmQnOy8vb3RoZXJ3aXNlIGFzc2lnbiB0aGUgdHlwZSAncGFzc3dvcmQnIChyZXBsYWNlcyBzeW1ib2xzIHdpdGggZG90cylcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlLWV5ZScpOyAgICAgICAgICAgICAgIC8vYW5kIHdpbGwgY2xvc2UgdGhlIGV5ZSBhcyBhIHJlc3VsdCBvZiBhZGRpbmcgdGhlIGNsYXNzXHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZXllLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuKTtcclxufSk7XHJcblxyXG5cclxuYnRuUGFzc0NoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgaWYgKCEodHdvSW5wdXRQYXNzWzBdLnZhbHVlID09IHR3b0lucHV0UGFzc1sxXS52YWx1ZSkpIHsgLy9pZiB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGZpZWxkIGRvZXMgbm90IG1hdGNoIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGZpZWxkXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoZW4gcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZFxyXG4gICAgICAgIG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MID0gJ9Cd0LXRgdC+0LLQv9Cw0LTQtdC90LjQtSDQv9Cw0YDQvtC70LXQuSc7Ly9hbmQgd2lsbCBkaXNwbGF5IGEgbWVzc2FnZSBhYm91dCB0aGUgcGFzc3dvcmQgbWlzbWF0Y2hcclxuICAgIH07XHJcblxyXG59KTtcclxuXHJcbnR3b0lucHV0UGFzcy5mb3JFYWNoKChpdGVtKSA9PiB7ICAgICAgICAgIC8vd2l0aCBlYWNoIG5ldyBlbnRyeSBpdCB3aWxsIGRlbGV0ZSB0aGUgbWVzc2FnZSBhYm91dCBwYXNzd29yZCBtaXNtYXRjaFxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICBpZiAobWVzc2FnZVBhc3NNaXNtYXRjaC5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgbWVzc2FnZVBhc3NNaXNtYXRjaC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pOyIsIi8vdG8gZ28gdG8gdGhlIHByZXZpb3VzIHBhZ2UgYnkgbmF2aWdhdGlvblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG5sZXQgYWxsTGlTZWNvbmROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kYXJ5LW5hdiBsaScpO1xyXG5cclxuLy90YWtlcyB0aGUgbGluayBhZGRyZXNzIGZyb20gdGhlIHByZXZpb3VzIGVsZW1lbnQgYW5kIHB1dHMgaXQgaW50byB0aGUgYXJyb3cgbGluayBvZiB0aGUgbGFzdCBlbGVtZW50XHJcbmxldCBsaW5rQWRyZXNzID0gYWxsTGlTZWNvbmROYXZbKGFsbExpU2Vjb25kTmF2Lmxlbmd0aCAtIDIpXS5jaGlsZE5vZGVzWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cclxuYWxsTGlTZWNvbmROYXZbKGFsbExpU2Vjb25kTmF2Lmxlbmd0aCAtIDEpXS5jaGlsZE5vZGVzWzFdLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmtBZHJlc3MpO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImNvbnN0IG1vZGFsQXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hc2stYS1xdWVzdGlvbicpO1xyXG5jb25zdCBhc2tUZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhc2stYS1xdWVzdGlvbl9fcXVlc3Rpb24nKTtcclxuY29uc3QgcGFyZW50QXNrVGV4dGFyZWEgPSBhc2tUZXh0YXJlYS5wYXJlbnRFbGVtZW50O1xyXG4vL2NvbnNvbGUubG9nKHBhcmVudEFza1RleHRhcmVhKTtcclxubGV0IGluaXRpYWxXaWR0aEFza1RleHRhcmVhID0gKyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhc2tUZXh0YXJlYSkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpLnNsaWNlKDAsIC0yKSk7Ly90aGUgaW5pdGlhbCB3aWR0aCBvZiB0aGUgdGV4dGFyZWEgaXMgdGFrZW5cclxuLy9jb25zb2xlLmxvZyhpbml0aWFsV2lkdGhBc2tUZXh0YXJlYSk7XHJcblxyXG4vL3dpZHRoIGFuZCBoZWlnaHQgcmVzdHJpY3Rpb25zIGF0IGFwcHJveGltYXRlbHkgbGluZSA5Mzgoc2NzcylcclxuXHJcbmFza1RleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coYXNrVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0KVxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTgwKSB7XHJcbiAgICAgICAgaWYgKGUuaW5wdXRUeXBlID09ICdpbnNlcnRUZXh0JyAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPiAyNiAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPCA1NCkge1xyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2Fza1RleHRhcmVhLmNsaWVudFdpZHRoICs9IDEwfXB4YDsgLy9pZiB0aGUgbnVtYmVyIG9mIGVudGVyZWQgY2hhcmFjdGVycyBtYXRjaGVzIHRoZSBjb25kaXRpb25zIGFib3ZlLCB0aGUgdGV4dGFyZWEgd2lsbCBncm93IGluIHdpZHRoIGJ5IDEwcHggYWZ0ZXIgZWFjaCBpbnB1dFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5pbnB1dFR5cGUgPT0gJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCcgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoID4gMjYgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDwgNTQgJiYgYXNrVGV4dGFyZWEuY2xpZW50V2lkdGggPiBpbml0aWFsV2lkdGhBc2tUZXh0YXJlYSkge1xyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2Fza1RleHRhcmVhLmNsaWVudFdpZHRoIC09IDV9cHhgOy8vaWYgdGhlcmUgaXMgYSBkZWxldGlvbiBvZiBjaGFyYWN0ZXJzLCB0aGUgdGV4dGFyZWEgd2lsbCBzaHJpbmtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuaW5wdXRUeXBlID09ICdkZWxldGVDb250ZW50QmFja3dhcmQnICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA8PSAyNSkge1xyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9IGAke2luaXRpYWxXaWR0aEFza1RleHRhcmVhfXB4YDsvL2FkanVzdCB0ZXh0YXJlYSB3aWR0aCB0byBpbml0aWFsIHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmRhdGEpO1xyXG4gICAgICAgIGlmIChlLmRhdGEgIT0gbnVsbCAmJiBlLmRhdGEubGVuZ3RoID4gMSkgey8vaWYgdGhlIGVudGlyZSByZXZpZXcgaXMgaW5zZXJ0ZWQgLyBlLmRhdGEgIT0gbnVsbCAtPiBudWxsID0gd2hlbiBwcmVzc2luZyBlbnRlciBvciBiYWNrc3BhY2VcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSAnNTAwcHgnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDwgMSkgey8vaWYgYWxsIHRleHQgaXMgZGVsZXRlZCBhdCBvbmNlXHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7aW5pdGlhbFdpZHRoQXNrVGV4dGFyZWF9cHhgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA+IDI2KSB7Ly9yZWFycmFuZ2UgZWxlbWVudHMgd2hlbiB0ZXh0YXJlYSBncm93c1xyXG4gICAgICAgICAgICBwYXJlbnRBc2tUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYS1jb2x1bW4nKVxyXG4gICAgICAgICAgICBtb2RhbEFzay5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYXNrLWEtcXVlc3Rpb24tYmlnLWFzaycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50QXNrVGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgndGV4dGFyZWEtY29sdW1uJylcclxuICAgICAgICAgICAgbW9kYWxBc2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2Fzay1hLXF1ZXN0aW9uLWJpZy1hc2snKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc2tUZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjsgIC8vdGV4dGFyZWEgaGVpZ2h0IGdyb3d0aFxyXG4gICAgYXNrVGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYXNrVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiOy8vIFxyXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYWxsU2NyaXB0cy9hbmltYXRpb24uanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoMTEyMHB4LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDczNXB4LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvc2Vjb25kYXJ5TmF2QXJyb3dMaW5rczMyMC5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2NhdGVnb3JpZXNSYWRpby5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL1dpZGdldC5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL21vZGFsLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvcGFzcy1leWUuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9QaG9uZU1hc2suanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9PVFAtSW5wdXQtZmllbGQoc21zKS5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL3RleHRhcmVhR3Jvdy5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2J1dHRvbkZvcm1Db25zZW50Q2hlY2suanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9hbmltYXRlRm9vdGVyLmpzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=