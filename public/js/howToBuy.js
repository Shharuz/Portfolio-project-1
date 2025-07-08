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
/*!********************************!*\
  !*** ./src/script/howToBuy.js ***!
  \********************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDNEI7QUFDRDtBQUNYO0FBQ1Y7QUFDVDtBQUNEO0FBQ0c7QUFDQztBQUNXO0FBQ1I7QUFDVSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9PVFAtSW5wdXQtZmllbGQoc21zKS5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9XaWRnZXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGVGb290ZXIuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYnV0dG9uRm9ybUNvbnNlbnRDaGVjay5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvY2F0ZWdvcmllc1JhZGlvLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoMTEyMHB4LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoNzM1cHguanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL21vZGFsLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9wYXNzLWV5ZS5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvc2Vjb25kYXJ5TmF2QXJyb3dMaW5rczMyMC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvdGV4dGFyZWFHcm93LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2hvd1RvQnV5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdG8gY29ycmVjdGx5IGZpbGwgaW4gdGhlIGZpZWxkcyhpbnB1dHMpIGluIHRoZSBtb2RhbCB3aW5kb3cgKGVsZW1lbnQgd2l0aCBjbGFzcyAubW9kYWxfX2NvZGUtZnJvbS1zbXMpXHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiT1RQaW5wdXRzXCIpO1xyXG5cclxuaW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbihlKSB7Ly93aGVuIHRoZSBjaGFyYWN0ZXJzIHdpbGwgYmUgZW50ZXJlZFxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7ICAgICAgICAgICAgICAgICAgLy90aGUgZmllbGQgaW4gd2hpY2ggdGhlIHN5bWJvbCBpcyBjdXJyZW50bHkgZW50ZXJlZFxyXG4gICAgY29uc3QgdmFsID0gdGFyZ2V0LnZhbHVlOyAgICAgICAgICAgICAgICAgLy90aGUgdmFsdWUgb2YgdGhpcyBmaWVsZFxyXG5cclxuICAgIGlmIChpc05hTih2YWwpKSB7ICAgICAgICAvL3doZW4gZW50ZXJpbmcgYW55IGNoYXJhY3RlciB0aGF0IGlzIG5vdCBhIG51bWJlciwgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmdcclxuICAgICAgICB0YXJnZXQudmFsdWUgPSBcIlwiOyAgICAgIC8vIGl0IHdvbid0IGxldCB5b3UgZW50ZXIgYW55dGhpbmcgZXhjZXB0IG51bWJlcnNcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbCAhPSBcIlwiKSB7ICAgICAgICAgICAgIC8vaWYgYSBudW1iZXIgaXMgZW50ZXJlZCwgaXQgZ29lcyB0byB0aGUgbmV4dCBmaWVsZChpbnB1dClcclxuICAgICAgICBjb25zdCBuZXh0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICBuZXh0LmZvY3VzKCk7ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5pbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29uc3Qga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTsgICAgICAgIC8vdGhlIG51bWJlcnMgeW91IGVudGVyIHdpbGwgYWx3YXlzIGJlIGluIHVwcGVyY2FzZSAgXHJcblxyXG4gICAgaWYgKGtleSA9PSBcImJhY2tzcGFjZVwiIHx8IGtleSA9PSBcImRlbGV0ZVwiKSB7Ly93aGVuIGEgY2hhcmFjdGVyIGlzIGRlbGV0ZWQsIGl0IG1vdmVzIHRvIHRoZSBwcmV2aW91cyBmaWVsZFxyXG4gICAgICAgIHRhcmdldC52YWx1ZSA9IFwiXCI7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByZXYgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAocHJldikge1xyXG4gICAgICAgICAgICBwcmV2LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufSk7IiwiXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbGV0IHBob25lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbZGF0YS10ZWwtaW5wdXRdJyk7XHJcblxyXG4gICAgbGV0IGdldElucHV0TnVtYmVyc1ZhbHVlID0gZnVuY3Rpb24oaW5wdXQpIHsgLy9wcm9oaWJpdGlvbiBvbiBlbnRlcmluZyBhbGwgc3ltYm9scyBleGNlcHQgbnVtYmVyc1xyXG4gICAgICAgIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb25QaG9uZUlucHV0ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL9GN0LvQtdC80LXQvdGCINC40L3Qv9GD0YJcclxuICAgICAgICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCk7Ly/RhdGA0LDQvdGP0YLRgdGPINGC0L7Qu9GM0LrQviDRh9C40YHQu9CwXHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDsvL0kgZG9uJ3Qga25vdyB3aHlcclxuXHJcbiAgICAgICAgLyppZiAoIWlucHV0TnVtYmVyc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWRpdGluZyBtaWRsZSBzdHJpbmcnLCBlKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyc1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9Ki9cclxuXHJcblxyXG4gICAgICAgIGlmIChbXCI3XCIsIFwiOFwiLCBcIjlcIl0uaW5kZXhPZihpbnB1dE51bWJlcnNWYWx1ZVswXSkgPiAtMSkge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWVbMF0gPT0gXCI5XCIpIGlucHV0TnVtYmVyc1ZhbHVlID0gXCI3XCIgKyBpbnB1dE51bWJlcnNWYWx1ZTsvL2lmIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgOSB0aGVuIHJlcGxhY2UgaXQgd2l0aCA3IDlcclxuXHJcbiAgICAgICAgICAgIGxldCBmaXJzdFN5bWJvbHMgPSAoaW5wdXROdW1iZXJzVmFsdWVbMF0gPT0gXCI4XCIpID8gXCI4XCIgOiBcIis3XCI7Ly9pZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIDggdGhlbiBpdCB3aWxsIHJldHVybiA4IG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiArN1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gZmlyc3RTeW1ib2xzICsgXCIgXCI7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPiAxKSB7IC8vaWYgbW9yZSB0aGFuIDEgY2hhcmFjdGVyIGlzIGVudGVyZWQsIFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKCcgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMSwgNCk7Ly9pdCB3aWxsIGFkZCAnKCcgKyBjaGFyYWN0ZXJzIGZyb20gMm5kIHRvIDV0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gNSkgey8vaWYgNSBvciBtb3JlIGNoYXJhY3RlcnMgYXJlIGVudGVyZWRcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg0LCA3KTsvL2l0IHdpbGwgYWRkICcpICcgKyBjaGFyYWN0ZXJzIGZyb20gNW5kIHRvIDh0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gOCkgey8vaWYgOCBvciBtb3JlIGNoYXJhY3RlcnMgYXJlIGVudGVyZWRcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDcsIDkpOy8vaXQgd2lsbCBhZGQgJy0nICsgY2hhcmFjdGVycyBmcm9tIDhuZCB0byAxMHRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSAxMCkgey8vaWYgMTAgb3IgbW9yZSBjaGFyYWN0ZXJzIGFyZSBlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg5LCAxMSk7Ly9pdCB3aWxsIGFkZCAnLScgKyBjaGFyYWN0ZXJzIGZyb20gMTBuZCB0byAxMnRoXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gXCIrXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMCwgMTYpOy8vaXQgd2lsbCBhZGQgJysnICsgY2hhcmFjdGVycyBmcm9tIDFzdCB0byAxMnRoXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgb25QaG9uZUlucHV0S2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmtleUNvZGUsIGUudGFyZ2V0LnZhbHVlKTsvL2tleSBjb2RlIGFuZCBpbnB1dCB2YWx1ZSAoICAgMTAwIC0gY29kZSAgICAgICAgICcrNyAoOTg0KSA1NicgLSBpbnB1dCB2YWx1ZSAgICApXHJcbiAgICAgICAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA4ICYmIGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KS5sZW5ndGggPT0gMSkgey8vaWYgYmFja3NwYWNlIGlzIGVudGVyZWQoa2V5Q29kZSA9PSA4KSwgdGhlIGlucHV0IHZhbHVlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCAnJ1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgb25QaG9uZVBhc3RlID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwYXN0ZWQgPSBlLmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7Ly90aGUgY29waWVkIG51bWJlciBpcyBzdG9yZWRcclxuICAgICAgICBpbnB1dCA9IGUudGFyZ2V0Oy8vaW5wdXQgc3RvcmVkXHJcbiAgICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCk7Ly90aGUgaW5wdXQgaXMgY2hlY2tlZCB0byBtYWtlIHN1cmUgdGhlcmUgYXJlIG9ubHkgbnVtYmVyc1xyXG5cclxuICAgICAgICBpZiAocGFzdGVkKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGFueSBkYXRhIHdoZW4gaW5zZXJ0aW5nXHJcbiAgICAgICAgICAgIGxldCBwYXN0ZWRUZXh0ID0gcGFzdGVkLmdldERhdGEoJ3RleHQnKTsvL2luc2VydHMgYSB2YWx1ZSBhcyBhIHN0cmluZyBmcm9tIHRoZSBjb3BpZWQgdGV4dFxyXG4gICAgICAgICAgICBpZiAoL1xcRC9nLnRlc3QocGFzdGVkVGV4dCkpIHsgICAgICAgICAgIC8vY2hlY2tzIHRoYXQgdGhlcmUgYXJlIG9ubHkgbnVtYmVyc1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGhvbmVJbnB1dHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSBwaG9uZUlucHV0c1tpXTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uUGhvbmVJbnB1dCk7Ly9vbiBsaW5lIDEwXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUGhvbmVJbnB1dEtleURvd24pOy8vb24gbGluZSA1NlxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QaG9uZVBhc3RlKTsvL29uIGxpbmUgNjRcclxuICAgIH07XHJcblxyXG5cclxufSkiLCJjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdWwnKTtcclxuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3RyaWdnZXInKTtcclxuY29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcl9fbWFpbicpO1xyXG5jb25zdCBjcm9zcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3RyaWdnZXJfX2Nyb3NzJyk7XHJcblxyXG5sZXQgb3BlbldpZGdldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiggIWxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlV2lkZ2V0bGlzdCcpICl7Ly9zY3NzIG9uIGxpbmUgNDM0OVxyXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVXaWRnZXRsaXN0JykvL3RoZSBsaXN0IGRyb3BzIHRvIHRoZSB0b3BcclxuICAgICAgICAgICAgd2lkZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGV0cmlnZ2VyJykgICAvL2NoYW5nZXMgdGhlIHdpZGdldCBpY29uIHRvIGEgY3Jvc3NcclxuICAgICAgICAgICAgY3Jvc3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZXRyaWdnZXInKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVXaWRnZXRsaXN0JykvL3RoZSBsaXN0IGNvbWVzIGJhY2tcclxuICAgICAgICAgICAgd2lkZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGV0cmlnZ2VyJykgICBcclxuICAgICAgICAgICAgY3Jvc3MuY2xhc3NMaXN0LmFkZCgnaGlkZXRyaWdnZXInKVxyXG4gICAgICAgIH1cclxufTtcclxuXHJcblxyXG5cclxudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5XaWRnZXQpOyIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlciAuZm9vdGVyLWNvbnRhaW5lcicpO1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPT0gMCkge1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxufVxyXG5cclxubGV0IHNjcm9sbFBlcmNlbnQ7XHJcblxyXG5mdW5jdGlvbiBnZXRTY3JvbGxQZXJjZW50KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgJ3dpbmRvdy5zY3JvbGxZJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHdpbmRvdy5pbm5lckhlaWdodCwgJ3dpbmRvdy5pbm5lckhlaWdodCcpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coYm9keS5vZmZzZXRIZWlnaHQsICdib2R5Lm9mZnNldEhlaWdodCcpO1xyXG5cclxuICAgIHNjcm9sbFBlcmNlbnQgPSArKCh3aW5kb3cuc2Nyb2xsWSAvIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSAqIDEwMCkudG9GaXhlZCgyKSk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAoc2Nyb2xsUGVyY2VudCA+IDk1KSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpc2libGVGb290ZXIoKSB7Ly9pZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGF0IHRoZSB2ZXJ5IGJvdHRvbVxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPT0gMCkge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRTY3JvbGxQZXJjZW50KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHZpc2libGVGb290ZXIpO1xyXG5cclxuIiwiLy9zbW9vdGggc2Nyb2xsXHJcbmNvbnN0IGJvZHlmb3JTbW9vdGhTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvclNtb290aFNjcm9sbCcpKSB7XHJcbiAgICBjb25zdCBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvclNtb290aFNjcm9sbF9fd3JhcHBlcicpO1xyXG5cclxuICAgIC8vZ2l2ZXMgdGhlIGhlaWdodCBvZiB0aGUgYm9keSBzbyB0aGF0IHNjcm9sbGluZyBvY2N1cnNcclxuICAgIGxldCBoZWlnaHRGb3JTY3JvbGwgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmb3JTbW9vdGhTY3JvbGxXcmFwcGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XHJcbiAgICBib2R5Zm9yU21vb3RoU2Nyb2xsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OiR7aGVpZ2h0Rm9yU2Nyb2xsfXB4YCk7XHJcblxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhbGlnbkJvZHkpXHJcblxyXG4gICAgZnVuY3Rpb24gYWxpZ25Cb2R5KCkgeyAvLyBzY3JpcHQvcmFkaW9QZXJzb24gIC8gIHNjcmlwdC9jYXRlZ29yaWVzUmFkaW9cclxuICAgICAgICBoZWlnaHRGb3JTY3JvbGwgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmb3JTbW9vdGhTY3JvbGxXcmFwcGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XHJcbiAgICAgICAgYm9keWZvclNtb290aFNjcm9sbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoke2hlaWdodEZvclNjcm9sbH1weGApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzY3JQb3NZID0gMDsgLy9mb3Igc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgbGV0IGJsb2NrUG9zWSA9IHNjclBvc1k7IC8vIGZvciBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyIHBvc2l0aW9uXHJcbiAgICBsZXQgc3BlZWRBbmltID0gMC4wMzsgLy9pZiBzcGVlZEFuaW0gPiAwLjA3ICgwLjEpIGFuaW1hdGlvbiBoYXBwZW5zIGZhc3RlclxyXG4gICAgLy9pZiBzcGVlZEFuaW0gPCAwLjA3ICgwLjAyKSBhbmltYXRpb24gaXMgc2xvd2VyXHJcblxyXG5cclxuICAgIC8vIEJpbmQgYSBzY3JvbGwgZnVuY3Rpb25cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRzU2Nyb2xsVmFsdWUpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRzU2Nyb2xsVmFsdWUoKSB7XHJcbiAgICAgICAgc2NyUG9zWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNjclBvc1kpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aCk7XHJcblxyXG4gICAgLy9hbmltYXRlIGVsZW1lbnQgcmV2aWV3cy5odG1sIGFuZCBxdWVzdGlvbnMuaHRtbFxyXG5cclxuICAgIGxldCB3aW5kb3dIZWlnaHQ7XHJcbiAgICBjb25zdCBlbGVtZW50VmlzaWJsZSA9IDE7IC8vYW5pbWF0aW9uIHdpbGwgc3RhcnQgd2hlbiB0aGUgYmxvY2sgaXMgMTUwcHggYXdheSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0LlxyXG4gICAgbGV0IHNjcm9sbEVsZW1lbnRzO1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2tcclxuXHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrIFxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWFydGljbGUtbWluXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpIHtcclxuICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IC8vd2luZG93SGVpZ2h0IGdldHMgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKGlubmVySGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgZ2V0V2luZG93SGVpZ2h0KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0V2luZG93SGVpZ2h0KTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZWFyRWxlbWVudCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNjcm9sbEVsZW1lbnRzKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb3AgPSArc2Nyb2xsRWxlbWVudHNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLnRvRml4ZWQoMik7IC8vY2FsY3VsYXRlcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCB0byB0aGUgdG9wIG9mIHRoZSBibG9ja1xyXG5cclxuICAgICAgICAgICAgLy9JZiB0aGlzIGNvbmRpdGlvbiBpcyB0cnVlLCBpdCBtZWFucyB0aGUgYmxvY2sgaXMgd2l0aGluIHRoZSB2aWV3cG9ydCwgYW5kIHRoZSBjbGFzcyByZXZlYWwsIFxyXG4gICAgICAgICAgICAvL3doaWNoIGhhcyB0aGUgc3R5bGUgY2hhbmdlcywgaXMgYWRkZWQuIElmIHRoZSBibG9jayBpcyBub3Qgd2l0aGluIHRoZSBkZWZpbmVkIFxyXG4gICAgICAgICAgICAvL3Zpc2liaWxpdHkgYXJlYSwgdGhlIHJldmVhbCBjbGFzcyBpcyByZW1vdmVkLCByZXZlcnRpbmcgdGhlIGFuaW1hdGlvbi5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb3AgPCB3aW5kb3dIZWlnaHQgLSBlbGVtZW50VmlzaWJsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy9hcHBlYXJFbGVtZW50UmV2aWV3cygpO1xyXG4gICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBhcHBlYXJFbGVtZW50UmV2aWV3cyk7XHJcblxyXG4gICAgZnVuY3Rpb24gc21vb3RoKCkge1xyXG5cclxuICAgICAgICAvL1dlIGNhbGN1bGF0ZSBvdXIgY29udGFpbmVyIHBvc2l0aW9uIGJ5IGxpbmVhciBpbnRlcnBvbGF0aW9uIG1ldGhvZFxyXG4gICAgICAgIGJsb2NrUG9zWSA9IGxpbmVhcihibG9ja1Bvc1ksIHNjclBvc1ksIHNwZWVkQW5pbSkgLy9jYWxjdWxhdGUgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciBwb3NpdGlvbiBieSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBtZXRob2RcclxuXHJcbiAgICAgICAgYmxvY2tQb3NZID0gTWF0aC5mbG9vcihibG9ja1Bvc1kgKiAxMDApIC8gMTAwO1xyXG5cclxuXHJcbiAgICAgICAgZm9yU21vb3RoU2Nyb2xsV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtJHtibG9ja1Bvc1l9cHgsIDBweClgKTtcclxuXHJcblxyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aCk7XHJcbiAgICAgICAgLy9hbmltYXRlIGVsZW1lbnQgcmV2aWV3cy5odG1sIGFuZCBxdWVzdGlvbnMuaHRtbFxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaW5lYXIoYXJnMSwgYXJnMiwgYXJnMykge1xyXG4gICAgICAgIHJldHVybiAoMSAtIGFyZzMpICogYXJnMSArIGFyZzMgKiBhcmcyO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi8vc3BsaXQgdHh0XHJcbmNvbnN0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDInKVxyXG5cclxuXHJcbmxldCBzdHJpbmdIO1xyXG5sZXQgYXJyYXlMZXR0ZXJzSCA9IFtdO1xyXG5cclxuY29uc29sZS5sb2coaDIpO1xyXG5pZiAoaDIgIT0gbnVsbCkge1xyXG4gICAgaWYgKGgyLmlkID09ICdoMmNhdGFsb2dNYWluUGFnZScpIHtcclxuICAgICAgICBsZXQgdG1wQWRhcHRpdmVIMjtcclxuICAgICAgICBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1ODApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0bXBBZGFwdGl2ZUgyICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBBZGFwdGl2ZUgyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCcwJykgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU4MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcEFkYXB0aXZlSDIgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFkYXB0aXZlSDIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDIsIDIsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChoMi5pZCA9PSAnaDJhcnRpY2xlT3JWaWRlbycpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vL2FyZzEgPSBoMSBvciBoMltpXVxyXG4vL2FyZzIgPSBhbW91bnQgbGluZXNcclxuLy9hcmczID0gYW1vdW50IHdvcmRzIGluIDEgbGluZVxyXG4vL2FyZzQgPSBhbW91bnQgd29yZHMgaW4gMiBsaW5lXHJcbi8vYXJnNSA9IGFtb3VudCB3b3JkcyBpbiAzIGxpbmVcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGluZ1dyYXBwZXJzKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUsIGFyZzYsIGFyZzcpIHtcclxuXHJcbiAgICAvL2ZvciBhZGFwdGl2ZVxyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSlcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJnMS5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgfVxyXG4gICAgaWYgKGFyZzEuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PSAnRElWJykgeyAvL2NoZWNrcyBpZiBoMiBpcyBzcGxpdCBpbnRvIGxldHRlcnNcclxuICAgICAgICBsZXQgdG1wV29yZCA9IGFyZzEucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJGb3JXb3JkJyk7IC8vdGFrZXMgYWxsIHRoZSB3b3Jkc1xyXG4gICAgICAgIGxldCB0bXBBcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRtcFdvcmQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0bXBXb3JkW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyU3ltYm9sJyk7IC8vdGFrZXMgYWxsIGNoYXJhY3RlcnMgaW4gZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2hhci5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFyW3ldLmlubmVySFRNTCkgICBcclxuICAgICAgICAgICAgICAgIHRtcEFyci5wdXNoKGNoYXJbeV0uaW5uZXJIVE1MKTsgLy/RgWhhciBwdXRzIGludG8gYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmICh5ID09IChjaGFyLmxlbmd0aCAtIDEpKSB7IC8vaWYgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgd29yZCwgdGhlbiBpdCB3aWxsIGFkZCBhIHNwYWNlIHRvIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFyci5wdXNoKCcgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRtcEFycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmcxLmlubmVySFRNTCA9IFwiXCI7IC8vd2lsbCBjbGVhciBoMlxyXG4gICAgICAgIGFyZzEuaW5uZXJIVE1MID0gdG1wQXJyLmpvaW4oXCJcIik7IC8vdGhlIGxpbmUgY2xlYXJlZCBvZiB3cmFwcGVycyB3aWxsIGJlIGFkZGVkIHRvIGgyXHJcbiAgICAgICAgLy9hcmcxLmFwcGVuZCh0bXBBcnIuam9pbihcIlwiKSk7XHJcbiAgICB9XHJcbiAgICAvKmlmKGFyZzEuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmUnKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygncnJycnJycnInKVxyXG4gICAgfSovXHJcblxyXG4gICAgc3RyaW5nSCA9IGFyZzEuaW5uZXJIVE1MOyAvL3RoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IChzdHJpbmcpIGlzIHB1dCBpbnRvIGEgdmFyaWFibGVcclxuICAgIGFyZzEuaW5uZXJIVE1MID0gJyc7IC8vemVyb2luZyBjb250ZW50IHRvIGFkZCB3cmFwcGVycyB3aXRoIGNvbnRlbnRcclxuICAgIGFycmF5TGV0dGVyc0ggPSBbXSAvL2FycmF5IHplcm9pbmcgPz8/IGl0IHNlZW1zIHRvIGJlIHJlc2V0IHRvIHplcm8gYXJvdW5kIGxpbmUgMjA5ID8/P1xyXG4gICAgZm9yIChsZXQgY2hhciBvZiBzdHJpbmdIKSB7IC8vdGhlIHN0cmluZyBpcyBzcGxpdCBpbnRvIGNoYXJhY3RlcnMgYW5kIGFkZGVkIHRvIHRoZSBhcnJheVxyXG4gICAgICAgIGFycmF5TGV0dGVyc0gucHVzaChjaGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxldHRlcnNILmxlbmd0aDsgKytpKSB7IC8vY291bnQgd29yZHMgaW4gYSBsaW5lLCByZWxhdGl2ZSB0byAnICdcclxuICAgICAgICBpZiAoYXJyYXlMZXR0ZXJzSFtpXSA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGxlbmdodEFyciA9IGFycmF5TGV0dGVyc0gubGVuZ3RoO1xyXG5cclxuICAgIGlmIChhcmcyID09IDEpIHsgLy9pZiB5b3UgbmVlZCB0byBtYWtlIGEgbGluZSBpbiAxIGxpbmVcclxuICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpbmcgYSBsaW5lIGFuZCBhZGRpbmcgaXQgdG8gYW4gZWxlbWVudCAoSDEgb3IgSDIpXHJcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgYXJnMS5hcHBlbmQobGluZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKGFyZzIgPiAxKSB7IC8vaWYgeW91IG5lZWQgdG8gbWFrZSBhIGxpbmUgaW4gMiBsaW5lcyBvciBtb3JlXHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBhcmcyOyArK3kpIHsgLy8geSA8IGFyZzIoMykgPSBtYWtlIDMgbGluZXMgXHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGluZyBhIGxpbmUgYW5kIGFkZGluZyBpdCB0byBhbiBlbGVtZW50IChIMSBvciBIMilcclxuICAgICAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgICAgIGFyZzEuYXBwZW5kKGxpbmUpO1xyXG4gICAgICAgICAgICBpZiAoeSA9PSAwKSB7IC8vMVNUIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzM7ICsraSkgeyAvLyAgaSA8IGFyZzMoMikgPSAgMiB3b3JkcyBpbiBsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAxKSB7IC8vMk5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzQ7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzQoMykgPSAgMyB3b3JkcyBpbiBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSkgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAyKSB7IC8vM05EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzU7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzUoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDMpIHsgLy80TkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNjsgKytpKSB7IC8vIC8vICBpIDwgYXJnNigyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gNCkgeyAvLzVORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc3OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc3KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMoYXJnMSkge1xyXG4gICAgICAgIC8vYnkgdGhlIHRlcm0gd29yZCBhbmQgc3ltYm9sLCB3ZSBtZWFuIGEgd3JhcHBlciBmb3IgYSB3b3JkIGFuZCBzeW1ib2xcclxuICAgICAgICBsZXQgd3JhcHBlckZvcldvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW9uIG9mIGEgd29yZFxyXG4gICAgICAgIHdyYXBwZXJGb3JXb3JkLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXJGb3JXb3JkJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuZ2h0QXJyOyArK3kpIHtcclxuICAgICAgICAgICAgaWYgKGFycmF5TGV0dGVyc0hbMF0gPT0gXCIgXCIpIHsgLy9pZiBpdCBlbmNvdW50ZXJzIFwiIFwiIC0gaXQgd2lsbCBkZWxldGUgaXRcclxuICAgICAgICAgICAgICAgIGFycmF5TGV0dGVyc0guc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyYXlMZXR0ZXJzSFswXSA9PSB1bmRlZmluZWQpIGJyZWFrOyAvL2lmIHRoZSBhcnJheSBpcyBvdmVyIC0gc3RvcFxyXG4gICAgICAgICAgICBsZXQgZGl2Rm9yU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGlvbiBvZiBhIHN5bWJvbFxyXG4gICAgICAgICAgICBkaXZGb3JTeW1ib2wuY2xhc3NMaXN0LmFkZCgnd3JhcHBlclN5bWJvbCcpO1xyXG4gICAgICAgICAgICBkaXZGb3JTeW1ib2wuaW5uZXJIVE1MID0gYXJyYXlMZXR0ZXJzSFswXTsgLy9hZGRpbmcgYSBzeW1ib2wgZnJvbSBhbiBhcnJheSB0byBhIHdyYXBwZXIoc3ltYm9sKVxyXG4gICAgICAgICAgICB3cmFwcGVyRm9yV29yZC5hcHBlbmQoZGl2Rm9yU3ltYm9sKTsgLy9hZGRpbmcgYSBzeW1ib2wgdG8gYSB3b3JkXHJcbiAgICAgICAgICAgIGFycmF5TGV0dGVyc0guc3BsaWNlKDAsIDEpOyAvL3JlbW92ZSBhZGRlZCBjaGFyYWN0ZXIgZnJvbSBhcnJheVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJnMS5hcHBlbmQod3JhcHBlckZvcldvcmQpOyAvL2FkZGluZyBhIHdvcmQgd2l0aCBzeW1ib2xzIHRvIHRoZSBjcmVhdGVkIGxpbmUgKHRoZSBsaW5lIHdhcyBjcmVhdGVkIGF0IGFib3V0IDE3NSBhbmQgMTg0KVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2gyIGNoYXIgcHJlcCBmb3IgYW5pbVxyXG5cclxuaWYgKGgyICE9IG51bGwpIHtcclxuICAgIGNvbnN0IGgyQ2hhciA9IGgyLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyU3ltYm9sJylcclxuICAgIC8vY29uc29sZS5sb2coaDJDaGFyKTtcclxuICAgIGxldCB0bXBIMkNoYXJUcmFuc1kgPSAwO1xyXG4gICAgZm9yIChsZXQgY2hhciBvZiBoMkNoYXIpIHsgLy93aWxsIG1ha2UgYSBsYWRkZXJcclxuICAgICAgICBjaGFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dG1wSDJDaGFyVHJhbnNZICogMC41fXB4KWA7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFyKVxyXG4gICAgICAgIHRtcEgyQ2hhclRyYW5zWSArPSAxNTtcclxuICAgIH1cclxufSIsImNvbnN0IGNvbnNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIC5jb25zZW50Jyk7IC8vdGFrZSBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyAuY29uc2VudFxyXG5cclxuLy90aGVyZSBpcyBhIGRpdiB3aXRoIGNsYXNzIGNvbmNlbnQuIEluIGNvbnNlbnQgdGhlcmUgYXJlIDIgZWxlbWVudHMgaW5wdXQgYW5kIGxhYmVsXHJcbi8vdGhlIG5leHQgZWxlbWVudCBhZnRlciB0aGUgY29uc2VudCBpcyB0aGUgYnV0dG9uIGVsZW1lbnRcclxuXHJcbmZvciggbGV0IGl0ZW0gb2YgY29uc2VudCl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbGxlY3Rpb24gZW51bWVyYXRpb25cclxuICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy9hZGQgY2xpY2sgZXZlbnQgdG8gZWFjaCBuZXh0IGl0ZW0oYnV0dG9uKSBmcm9tIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoICFlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkTm9kZXNbMV0uY2hlY2tlZCApeyAvL2lmIHRoZSBsYWJlbCBpcyBub3QgaW4gdGhlIGNoZWNrZWQgc3RhdGVcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZW4gdGhlIGJ1dHRvbiBkb2VzIG5vdCB3b3JrXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RoaXMgaXMgbmVjZXNzYXJ5IGZvciB0aGUgdXNlciB0byBhZ3JlZSB0byB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Rlcm1zIG9mIHBlcnNvbmFsIGRhdGEgcHJvY2Vzc2luZyBcclxuICAgIH0pO1xyXG59O1xyXG4iLCIvL0ZvciBob3dUb0J1eS5odG1sLCBibG9nLmh0bWwsIGFjY291bnQuaHRtbCwgcXVlc3Rpb25zLmh0bWxcclxuXHJcbmNvbnN0IGl0ZW1zQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JDYXRlZ29yeUFsbFBhZ2VzIHAnKTsgLy9pbiB0aGUgZWxlbWVudCB3aXRoIHRoZSBjbGFzcyByYWRpby1jYXRlZ29yeSwgYWxsIGlucHV0cyBvZiB0aGUgcmFkaW8gdHlwZSBhcmUgdGFrZW5cclxuY29uc3QgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFuY2hvcl0nKSAvL2NvbGxlY3Rpb24gb2YgYWxsIGVsZW1lbnRzIHdpdGggYXR0cmlidXRlIGRhdGEtYW5jaG9yXHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlciAuZm9vdGVyLWNvbnRhaW5lcicpO1xyXG5cclxuaXRlbXNDYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0ZWQnKSkge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbUNvbGxlY3Qgb2YgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdykgeyAvL2l0ZXJhdGUgb3ZlciBhbGwgZWxlbWVudHMgd2l0aCBkYXRhLWFuY2hvciBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgaXRlbUNvbGxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpOyAvL2FsbCBlbGVtZW50cyB3aXRoIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGUgYXJlIGFzc2lnbmVkIHRoZSBoaWRlIGNsYXNzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1Db2xsZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09ICdhbGwtYmxvZycpIHsgLy9mb3IgYmxvZy5odG1sIC8vaWYgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBpZCBpcyAnYWxsLWJsb2cnLCB0aGVuIGFsbCBlbGVtZW50cyB3aXRoIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGUgd2lsbCBoYXZlIHRoZSBoaWRlIGNsYXNzIHJlbW92ZWRcclxuICAgICAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlkID09IGl0ZW1Db2xsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSkgeyAvL3RoZXJlIGFyZTogMS4gaW5wdXQgd2l0aCBjaGFuZ2UgZXZlbnQgMi4gZWxlbWVudCAoZGl2IG9yIHApIHdpdGggZGF0YS1hbmNob3IgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICBpdGVtQ29sbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7IC8vIGlmIGlucHV0IGlkIG1hdGNoZXMgZWxlbWVudCAoZGl2IG9yIHApIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSwgdGhlbiByZW1vdmUgY2xhc3MgaGlkZSBmcm9tIGVsZW1lbnQgKGRpdiBvciBwKVxyXG4gICAgICAgICAgICAgICAgLy9maXggZGlzcGxheSBmb290ZXIgb24gaG93VG9CdXkuaHRtbCAoZm9yIGFuaW1hdGVGb290ZXIuanMpXHJcbiAgICAgICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvd1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3F1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcicpKSB7XHJcbiAgICAgICAgICAgIGFsaWduQm9keSgpOyAvL29ubHkgZm9yIHF1ZXN0aW9ucy5odG1sLCBzbyB0aGF0IHNtb290aCBzY3JvbGxpbmcgd29ya3NcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3dbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdibG9nX19yZXZpZXdzJykpIHtcclxuICAgICAgICAgICAgYWxpZ25Cb2R5KCk7IC8vb25seSBmb3IgYmxvZy5odG1sLCBzbyB0aGF0IHNtb290aCBzY3JvbGxpbmcgd29ya3NcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vL2NvbnNvbGUubG9nKGl0ZW1zQ2F0ZWdvcmllc1swXSk7XHJcblxyXG4vL2NvbnNvbGUubG9nKGl0ZW1zQ2F0ZWdvcmllc1swXS5jaGlsZE5vZGVzWzFdLnRhZ05hbWUpO1xyXG5cclxuLy9mb3IgYmxvZy5odG1sIC8vY291bnRpbmcgdGhlIG51bWJlciBvZiBhbGwgYXJ0aWNsZXMgYW5kIGJ5IGNhdGVnb3JpZXNcclxuaWYgKGl0ZW1zQ2F0ZWdvcmllc1swXS5jaGlsZE5vZGVzWzFdKSB7IC8vY2hlY2sgdGhhdCB0aGlzIHBpZWNlIG9mIGNvZGUgb25seSB3b3JrcyBvbiB0aGUgYmxvZy5odG1sXHJcblxyXG4gICAgLy9jb3VudGluZyBhbGwgYXJ0aWNsZXNcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBmb3IgKGxldCBpdGVtQ29sbGVjdCBvZiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtQ29sbGVjdC5jaGlsZE5vZGVzKTsvL05vZGVMaXN0IGZvcm1hdDogdGV4dCwgZGl2LmJsb2ctYXJ0aWNsZS1taW47IHRleHQsIGRpdi5ibG9nLWFydGljbGUtbWluOyBldGMuIFxyXG4gICAgICAgIC8vb25seSBkaXYuYmxvZy1hcnRpY2xlLW1pbiBuZWVkIHRvIGJlIGNvdW50ZWQsIFRoYXQncyB3aHkgLT4gaXRlbUNvbGxlY3QuY2hpbGROb2Rlcy5sZW5ndGggLyAyXHJcbiAgICAgICAgLy90aGVyZSBpcyB0ZXh0IGF0IHRoZSBlbmQgb2YgdGhlIG5vZGVsaXN0LCB0aGUgdGV4dCBuZWVkcyB0byBiZSByZW1vdmVkLCBUaGF0J3Mgd2h5IC0+IGl0ZW1Db2xsZWN0LmNoaWxkTm9kZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgIGNvdW50ICs9IChpdGVtQ29sbGVjdC5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpIC8gMiAvL3Rocm93IGludG8gdGhlIGNvdW50XHJcbiAgICB9XHJcbiAgICBpdGVtc0NhdGVnb3JpZXNbMF0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBjb3VudDsgLy9hZGQgY291bnRlZCBhcnRpY2xlcyB0byBodG1sXHJcblxyXG4gICAgLy9jb3VudGluZyBhcnRpY2xlcyBieSBjYXRlZ29yeVxyXG4gICAgaXRlbXNDYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHsgLy8gZm9yIGVhY2ggaXRlbSBmcm9tIHRoZSBjb2xsZWN0aW9uIGl0ZW1zQ2F0ZWdvcmllc1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW1Db2xsZWN0IG9mIGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3cpIHsgLy9pdGVyYXRlIG92ZXIgYWxsIGVsZW1lbnRzIHdpdGggZGF0YS1hbmNob3IgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGl0ZW1Db2xsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSkgeyAvL2lmIGl0ZW0uaWQgbWF0Y2hlcyB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIG9mIGFuIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gKGl0ZW1Db2xsZWN0LmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkgLyAyOyAvLyB0aGVuIGZyb20gdGhlIGlucHV0IGdvIHRvIHRoZSBsYWJlbCwgYW5kIGluIHRoZSBsYWJlbCBmaW5kIHRoZSBzcGFuIGFuZCBhc3NpZ24gdGhlIHZhbHVlIG9mIHRoZSBjb3VudGVkIGFydGljbGVzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDaGVja2VkUmFkaW9CbG9nKCkgeyAvL3RvIGdvIGZyb20gdGhlIGNhcmQuaHRtbCBwYWdlOyBzZWN0aW9uIGNhcmQtaGVscGZ1bC1pbmZvcm1hdGlvbiAtPiBjYXJkLWhlbHBmdWwtaW5mb3JtYXRpb25fX2FydGljbGVzXHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMV0pIHsgLy9odHRwczovL2xpdmViYWN0ZXJpYS5sb2NhbC9ibG9nLmh0bWw/dmlkZW8tYnJvYWRjYXN0cyAtIHdpbGwgb25seSB0YWtlIHZpZGVvLWJyb2FkY2FzdHNcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpOyAvL3dpbGwgc2V0IHRoZSBjaGVja2VkIHN0YXRlIHRvIHRoZSBpbnB1dCB3aG9zZSBpZCBtYXRjaGVzIHRoZSBsaW5rIGFkZHJlc3NcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbUNvbGxlY3Qgb2YgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdykge1xyXG4gICAgICAgICAgICAgICAgaXRlbUNvbGxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpOyAvL2FsbCBlbGVtZW50cyB3aXRoIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGUgYXJlIGFzc2lnbmVkIHRoZSBoaWRlIGNsYXNzXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbGxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVsxXSkgeyAvL2lmIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIG1hdGNoZXMgdGhlIHNwbGl0IGxpbmsgYWRkcmVzcyAoMm5kIHBhcnQpLCBcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29sbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7IC8vIHRoZW4gdGhlICdoaWRlJyBjbGFzcyB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGlzIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59OyIsImNvbnN0IGJ0bkxpc3REcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdl9fYnVyZ2VyLXdyYXBwZXItZm9yLWxpbmUnKTtcclxuY29uc3QgbmF2TWFpbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZfX21haW4tbGlzdCcpO1xyXG5idG5MaXN0RHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcclxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gMTA4Mykgey8vYnJvd3NlciB3aW5kb3cgd2lkdGhcclxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjcm9zcycpOyAgICAgICAgIC8vd2hlbiBhZGRpbmcgYSBjbGFzcyBmcm9tIHN0aWNrcyBtYWtlcyBhIGNyb3NzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYXZNYWluTGlzdC5jbGFzc0xpc3QuYWRkKCdkcm9wLWRvd25fX2hlYWRlcl9fbmF2X19tYWluLWxpc3QnKTsvL3doZW4gYWRkaW5nIGEgY2xhc3MsIGl0IG1ha2VzIGEgbGlzdCBkcm9wIGRvd25cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3MnKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbmF2TWFpbkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcC1kb3duX19oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiIsIi8vZHJvcCBkb3duIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0IGFuZCBoZWFkZXJfX25hdl9fbWFpbi1saXN0X19pdGVtX19zdWItbGlzdF9faXRlbV9fbGFzdC1saXN0IFxyXG5jb25zdCBhcnJvd09wZW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFycm93LXJpZ3RoLXdyYXBwZXInKTtcclxuYXJyb3dPcGVuTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7Ly93aGVuIHlvdSBjbGljayBvbiB0aGUgYXJyb3cgYSBsaXN0IGRyb3AgZG93blxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tbGlzdCcpKSB7Ly9pdCB3aWxsIGJlIGVpdGhlciBoZWFkZXJfX25hdl9fbWFpbi1saXN0X19pdGVtX19zdWItbGlzdCBvciBhIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0X19pdGVtX19sYXN0LWxpc3RcclxuICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnb3Blbi1saXN0JylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLWxpc3QnKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYXJyb3ctcmlndGgtd3JhcHBlci1yb3RhdGUnKSkgey8vc3BpbnMgYnkgYWRkaW5nIGEgY2xhc3NcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhcnJvdy1yaWd0aC13cmFwcGVyLXJvdGF0ZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhcnJvdy1yaWd0aC13cmFwcGVyLXJvdGF0ZScpXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiIsIi8vYmVnaW4gLy9lbGVtZW50cyBmb3Igb3BlbmluZyBtb2RhbCB3aW5kb3dzXHJcbmNvbnN0IG9wZW5SZWdpc3RyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faXRlbXNfX3Nob3BwaW5nLWNhcmQnKTtcclxuY29uc3Qgb3BlbkNhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faXRlbXNfX2NhbGwnKTtcclxuY29uc3Qgb3BlbkxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faXRlbXNfX2F1dGhvcml6YXRpb24nKTtcclxuY29uc3Qgb3BlbkZvcmdvdFlvdXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHb1RvRm9yZ290LXlvdXItcGFzc3dvcmQnKTtcclxuY29uc3Qgb3BlbkdvVG9Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb1RvTG9naW4nKTtcclxuY29uc3Qgb3BlbkdvVG9SZWdpc3RyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9SZWdpc3RyJyk7XHJcbmNvbnN0IG9wZW5Db2RlRnJvbVNtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHb1RvQ29kZUZyb21TbXMnKTtcclxuY29uc3Qgb3Blbk5ld1Bhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9OZXdQYXNzd29yZCcpO1xyXG5jb25zdCBjb250YWN0T3Blbk1vZGFsUXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxxdWVzdGlvbicpOy8vZm9yIGNvbnRhY3RzLmh0bWxcclxuY29uc3Qgd2lkZ2V0T3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndpZGdldC1vcGVuLW1vZGFsJyk7IC8vaW4gdGhlIHdpZGdldCwgdGhpcmQgaXRlbSBmcm9tIHRoZSB0b3BcclxuLy9lbmRcclxuXHJcbi8vYmVnaW4gLy9tb2RhbCB3aW5kb3dzXHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IGxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19sb2dpbicpO1xyXG5jb25zdCByZWdpc3RyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19yZWdpc3RyJyk7XHJcbmNvbnN0IGZvcmdvdFlvdXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZm9yZ290LXlvdXItcGFzc3dvcmQnKTtcclxuY29uc3QgY29kZUZyb21TbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvZGUtZnJvbS1zbXMnKTtcclxuY29uc3QgbmV3UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX25ldy1wYXNzd29yZCcpO1xyXG5jb25zdCBjYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2FsbGJhY2snKTtcclxuY29uc3QgYXNrQVF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hc2stYS1xdWVzdGlvbicpO1xyXG4vL2VuZFxyXG5cclxuLy9iZWdpbiAgLy9jbG9zZSBtb2RhbCB3aW5kb3dzXHJcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fY2xvc2VcIik7XHJcbi8vZW5kXHJcblxyXG4vL2JlZ2luIC8vZXZlcnl0aGluZyByZWxhdGVkIHRvIHByaXZhY3kgcG9saWN5XHJcbmNvbnN0IHBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXBvbGl0aWNzJyk7XHJcbmNvbnN0IG9wZW5Qb2xpdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nb1RvUG9saXRpY3MnKTtcclxuY29uc3QgY2xvc2VQb2xpdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1wb2xpdGljc19fY2xvc2UnKTtcclxuY29uc3QgY2xvc2VCdG5Qb2xpdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2xpdGljLWJ1dHRvbi1jbG9zZScpO1xyXG4vL2VuZFxyXG5cclxuLy9tb2RhbC5zdHlsZS5oZWlnaHQgPSBgJHttb2RhbC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodH1weGA7Ly9mb3IgdGV4dGFyZWFHcm93LmpzXHJcblxyXG5cclxuXHJcblxyXG4vL2NvbnN0IG9wZW5Nb2RhbFJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXJld2lld3NfX2xlYXZlLWZlZWRiYWNrJyk7XHJcbi8vY29uc3QgbW9kYWxSZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3JldmlldycpO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsLCBpdGVtKSB7Ly9wYXJhbWV0ZXIgbW9kYWwgPT0gb24gbGluZSAxNSAvIHBhcmFtZXRlciBpdGVtID09IGxvZ2luIG9yIHJlZ2lzdHIgYW5kIGV0Yy4gb24gbGluZSAxNlxyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIikgIT0gLTEpIHsgLy9mb3IgdGV4dGFyZWFHcm93LmpzIHRvIHdvcmsgaW4gRmlyZWZveCBicm93c2VyXHJcbiAgICAgICAgIGlmKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbF9fYXNrLWEtcXVlc3Rpb24nKSl7XHJcbiAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS5zZXRBdHRyaWJ1dGUoXCJDb2xzXCIsIGAyNGApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgIH0gXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGUpIHsvL2lmIHlvdSBjbGljayBvbiBzb21ldGhpbmcgb3RoZXIgdGhhbiBhIG1vZGFsIHdpbmRvdywgaXQgd2lsbCBjbG9zZSB0aGUgbW9kYWwgd2luZG93XHJcbiAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgcmVnaXN0ci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY2FsbGJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGxvZ2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBmb3Jnb3RZb3VyUGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGNvZGVGcm9tU21zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBuZXdQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgYXNrQVF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAvL21vZGFsUmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09IHBvbGl0aWNzKSB7XHJcbiAgICAgICAgcG9saXRpY3MuY2xhc3NMaXN0LmFkZCgnaGlkZS1wb2xpdGljcycpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xvc2VidG4oZSkgey8vY2xvc2VzIG1vZGFsIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIGJ0blxyXG4gICAgaWYgKGUudGFyZ2V0ID09IGNsb3NlUG9saXRpY3MgfHwgZS50YXJnZXQgPT0gY2xvc2VCdG5Qb2xpdGljcykge1xyXG4gICAgICAgIHBvbGl0aWNzLmNsYXNzTGlzdC5hZGQoJ2hpZGUtcG9saXRpY3MnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHJlZ2lzdHIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGNhbGxiYWNrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBsb2dpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZm9yZ290WW91clBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBjb2RlRnJvbVNtcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgbmV3UGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGFza0FRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgLy9tb2RhbFJldmlldy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2xvc2XQoXVycmVudE9wZW5MaW5rKGNsb3NlLCBvcGVuKSB7Ly9jbG9zZSBvbmUgbW9kYWwgd2luZG93IGFuZCBvcGVuIGFub3RoZXJcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIG9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xvc2XQoXVycmVudE9wZW5sb2dpbihlKSB7Ly8oZSkgPT0gb3BlbkdvVG9Mb2dpbiA9PSBlbGVtZW50IHdpdGggY2xhc3MgLmdvVG9Mb2dpbiwgY2xvc2VzdChcIi5tb2RhbF9fYmxvY2tcIikgaXMgc2V0IG9uIHRoaXMgZWxlbWVudC5cclxuICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWxfX2Jsb2NrXCIpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsvL3doZW4gY2xpY2tpbmcgb24gYW4gZWxlbWVudCB3aXRoIHRoZSBjbGFzcyAuZ29Ub0xvZ2luLCBcclxuICAgIGxvZ2luLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgICAgICAgICAgICAgICAgICAgICAgICAgLy9pdCB3aWxsIGdvIHRocm91Z2ggYWxsIGVsZW1lbnRzIGluY2x1ZGluZyBwYXJlbnRzIHVwIHRvIHRoZSByb290IGVsZW1lbnQgdW50aWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaXQgZmluZHMgYW4gZWxlbWVudCB3aXRoIHRoZSBjbGFzcyAubW9kYWxfX2Jsb2NrLCBzdG9wLCBhbmQgYWRkIHRoZSBjbGFzcyAuaGlkZSB0byB0aGlzIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsUG9saXRpY3MoKSB7XHJcbiAgICBwb2xpdGljcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLXBvbGl0aWNzJyk7XHJcbn1cclxuXHJcblxyXG5vcGVuUmVnaXN0ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgcmVnaXN0cikpOy8vb24gbGluZSA0N1xyXG5vcGVuQ2FsbGJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGNhbGxiYWNrKSk7XHJcbm9wZW5Mb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgbG9naW4pKTtcclxud2lkZ2V0T3Blbk1vZGFsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBjYWxsYmFjaykpO1xyXG53aWRnZXRPcGVuTW9kYWxbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGFza0FRdWVzdGlvbikpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XHJcbmNsb3NlLmZvckVhY2goKGVsZW1lbnQpID0+IHsgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlYnRuKSB9KTsvL29uIGxpbmUgNTlcclxuXHJcbm9wZW5Hb1RvTG9naW4uZm9yRWFjaCgoaXRlbSkgPT4geyBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2XQoXVycmVudE9wZW5sb2dpbikgfSk7XHJcblxyXG5vcGVuRm9yZ290WW91clBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGxvZ2luLCBmb3Jnb3RZb3VyUGFzc3dvcmQpKTsvL29uIGxpbmUgOTNcclxub3BlbkdvVG9SZWdpc3RyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGxvZ2luLCByZWdpc3RyKSk7XHJcbm9wZW5Db2RlRnJvbVNtcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3Nl0KF1cnJlbnRPcGVuTGluayhmb3Jnb3RZb3VyUGFzc3dvcmQsIGNvZGVGcm9tU21zKSk7XHJcbm9wZW5OZXdQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3Nl0KF1cnJlbnRPcGVuTGluayhjb2RlRnJvbVNtcywgbmV3UGFzc3dvcmQpKTtcclxuXHJcbm9wZW5Qb2xpdGljcy5mb3JFYWNoKChpdGVtKSA9PiB7Ly9vbiBsaW5lIDEwNVxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbFBvbGl0aWNzKTtcclxufSk7XHJcbmNsb3NlUG9saXRpY3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZWJ0bik7ICAgLy9vbiBsaW5lIDU5XHJcbmNsb3NlQnRuUG9saXRpY3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZWJ0bik7Ly9vbiBsaW5lIDU5ICBcclxuXHJcblxyXG5pZiggY29udGFjdE9wZW5Nb2RhbFF1ZXN0aW9uICl7XHJcbiAgICBjb250YWN0T3Blbk1vZGFsUXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGFza0FRdWVzdGlvbikpO1xyXG59O1xyXG5cclxuLy9vcGVuTW9kYWxSZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIG1vZGFsUmV2aWV3KSk7XHJcblxyXG5cclxuIiwiLy9sZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkZS1zaG93LXBhc3N3b3JkJyk7IC8vIGZvciB2ZXIuIDFcclxubGV0IGV5ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leWUnKTtcclxuY29uc3QgYnRuUGFzc0NoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkLWNoZWNrJyk7XHJcbmxldCBtZXNzYWdlUGFzc01pc21hdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3N3b3Jkcy1kby1ub3QtbWF0Y2gnKTtcclxubGV0IHR3b0lucHV0UGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXNzQ2hlY2snKTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9wZW4oZSkge1xyXG5cclxuICAgIC8vdmVyLjEgVGhpcyB2ZXJzaW9uIG9mIHRoZSBjb2RlIGhpZC9zaG93ZWQgdGhlIHBhc3N3b3JkIGZvciBhbGwgaW5wdXRzIHdoZW4gY2xpY2tpbmcgb24gdGhlIGV5ZVxyXG5cclxuICAgIC8qcGFzc3dvcmQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT0gJ3Bhc3N3b3JkJykge1xyXG4gICAgICAgICAgICBpdGVtLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgIGV5ZS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZXllJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS50eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICAgICAgZXllLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnaGlkZS1leWUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkgICovXHJcblxyXG4gICAgLy9Ob3cgaGlkZXMvc2hvd3Mgb25seSB0aGUgaW5wdXQgdGhhdCByZWxhdGVzIHRvIHRoZSBwcmVzc2VkIGV5ZVxyXG5cclxuICAgIGlmIChlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnR5cGUgPT0gJ3Bhc3N3b3JkJykgey8vd2hlbiBjbGlja2luZyBvbiB0aGUgZXllIGlmIHRoZSBpbnB1dCBpcyBvZiB0eXBlICdwYXNzd29yZCdcclxuICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnR5cGUgPSAndGV4dCc7ICAgICAgIC8vdGhlbiByZXBsYWNlIHdpdGggdHlwZSAndGV4dCdcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWV5ZScpICAgICAgICAgICAgICAgIC8vb3BlbiBleWUgdGhyb3VnaCBjbGFzcyByZW1vdmFsXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudHlwZSA9ICdwYXNzd29yZCc7Ly9vdGhlcndpc2UgYXNzaWduIHRoZSB0eXBlICdwYXNzd29yZCcgKHJlcGxhY2VzIHN5bWJvbHMgd2l0aCBkb3RzKVxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUtZXllJyk7ICAgICAgICAgICAgICAgLy9hbmQgd2lsbCBjbG9zZSB0aGUgZXllIGFzIGEgcmVzdWx0IG9mIGFkZGluZyB0aGUgY2xhc3NcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leWUuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW4pO1xyXG59KTtcclxuXHJcblxyXG5idG5QYXNzQ2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBpZiAoISh0d29JbnB1dFBhc3NbMF0udmFsdWUgPT0gdHdvSW5wdXRQYXNzWzFdLnZhbHVlKSkgeyAvL2lmIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZmllbGQgZG9lcyBub3QgbWF0Y2ggdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQgZmllbGRcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlbiBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkXHJcbiAgICAgICAgbWVzc2FnZVBhc3NNaXNtYXRjaC5pbm5lckhUTUwgPSAn0J3QtdGB0L7QstC/0LDQtNC10L3QuNC1INC/0LDRgNC+0LvQtdC5JzsvL2FuZCB3aWxsIGRpc3BsYXkgYSBtZXNzYWdlIGFib3V0IHRoZSBwYXNzd29yZCBtaXNtYXRjaFxyXG4gICAgfTtcclxuXHJcbn0pO1xyXG5cclxudHdvSW5wdXRQYXNzLmZvckVhY2goKGl0ZW0pID0+IHsgICAgICAgICAgLy93aXRoIGVhY2ggbmV3IGVudHJ5IGl0IHdpbGwgZGVsZXRlIHRoZSBtZXNzYWdlIGFib3V0IHBhc3N3b3JkIG1pc21hdGNoXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlUGFzc01pc21hdGNoLmlubmVySFRNTCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlUGFzc01pc21hdGNoLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7IiwiLy90byBnbyB0byB0aGUgcHJldmlvdXMgcGFnZSBieSBuYXZpZ2F0aW9uXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbmxldCBhbGxMaVNlY29uZE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWNvbmRhcnktbmF2IGxpJyk7XHJcblxyXG4vL3Rha2VzIHRoZSBsaW5rIGFkZHJlc3MgZnJvbSB0aGUgcHJldmlvdXMgZWxlbWVudCBhbmQgcHV0cyBpdCBpbnRvIHRoZSBhcnJvdyBsaW5rIG9mIHRoZSBsYXN0IGVsZW1lbnRcclxubGV0IGxpbmtBZHJlc3MgPSBhbGxMaVNlY29uZE5hdlsoYWxsTGlTZWNvbmROYXYubGVuZ3RoIC0gMildLmNoaWxkTm9kZXNbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblxyXG5hbGxMaVNlY29uZE5hdlsoYWxsTGlTZWNvbmROYXYubGVuZ3RoIC0gMSldLmNoaWxkTm9kZXNbMV0uc2V0QXR0cmlidXRlKCdocmVmJywgbGlua0FkcmVzcyk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3QgbW9kYWxBc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Fzay1hLXF1ZXN0aW9uJyk7XHJcbmNvbnN0IGFza1RleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fzay1hLXF1ZXN0aW9uX19xdWVzdGlvbicpO1xyXG5jb25zdCBwYXJlbnRBc2tUZXh0YXJlYSA9IGFza1RleHRhcmVhLnBhcmVudEVsZW1lbnQ7XHJcbi8vY29uc29sZS5sb2cocGFyZW50QXNrVGV4dGFyZWEpO1xyXG5sZXQgaW5pdGlhbFdpZHRoQXNrVGV4dGFyZWEgPSArKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFza1RleHRhcmVhKS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikuc2xpY2UoMCwgLTIpKTsvL3RoZSBpbml0aWFsIHdpZHRoIG9mIHRoZSB0ZXh0YXJlYSBpcyB0YWtlblxyXG4vL2NvbnNvbGUubG9nKGluaXRpYWxXaWR0aEFza1RleHRhcmVhKTtcclxuXHJcbi8vd2lkdGggYW5kIGhlaWdodCByZXN0cmljdGlvbnMgYXQgYXBwcm94aW1hdGVseSBsaW5lIDkzOChzY3NzKVxyXG5cclxuYXNrVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhhc2tUZXh0YXJlYS5zY3JvbGxIZWlnaHQpXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1ODApIHtcclxuICAgICAgICBpZiAoZS5pbnB1dFR5cGUgPT0gJ2luc2VydFRleHQnICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA+IDI2ICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA8IDU0KSB7XHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7YXNrVGV4dGFyZWEuY2xpZW50V2lkdGggKz0gMTB9cHhgOyAvL2lmIHRoZSBudW1iZXIgb2YgZW50ZXJlZCBjaGFyYWN0ZXJzIG1hdGNoZXMgdGhlIGNvbmRpdGlvbnMgYWJvdmUsIHRoZSB0ZXh0YXJlYSB3aWxsIGdyb3cgaW4gd2lkdGggYnkgMTBweCBhZnRlciBlYWNoIGlucHV0XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmlucHV0VHlwZSA9PSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJyAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPiAyNiAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPCA1NCAmJiBhc2tUZXh0YXJlYS5jbGllbnRXaWR0aCA+IGluaXRpYWxXaWR0aEFza1RleHRhcmVhKSB7XHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7YXNrVGV4dGFyZWEuY2xpZW50V2lkdGggLT0gNX1weGA7Ly9pZiB0aGVyZSBpcyBhIGRlbGV0aW9uIG9mIGNoYXJhY3RlcnMsIHRoZSB0ZXh0YXJlYSB3aWxsIHNocmlua1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5pbnB1dFR5cGUgPT0gJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCcgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDw9IDI1KSB7XHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7aW5pdGlhbFdpZHRoQXNrVGV4dGFyZWF9cHhgOy8vYWRqdXN0IHRleHRhcmVhIHdpZHRoIHRvIGluaXRpYWwgdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGF0YSk7XHJcbiAgICAgICAgaWYgKGUuZGF0YSAhPSBudWxsICYmIGUuZGF0YS5sZW5ndGggPiAxKSB7Ly9pZiB0aGUgZW50aXJlIHJldmlldyBpcyBpbnNlcnRlZCAvIGUuZGF0YSAhPSBudWxsIC0+IG51bGwgPSB3aGVuIHByZXNzaW5nIGVudGVyIG9yIGJhY2tzcGFjZVxyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9ICc1MDBweCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPCAxKSB7Ly9pZiBhbGwgdGV4dCBpcyBkZWxldGVkIGF0IG9uY2VcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSBgJHtpbml0aWFsV2lkdGhBc2tUZXh0YXJlYX1weGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoID4gMjYpIHsvL3JlYXJyYW5nZSBlbGVtZW50cyB3aGVuIHRleHRhcmVhIGdyb3dzXHJcbiAgICAgICAgICAgIHBhcmVudEFza1RleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRhcmVhLWNvbHVtbicpXHJcbiAgICAgICAgICAgIG1vZGFsQXNrLmNsYXNzTGlzdC5hZGQoJ21vZGFsX19hc2stYS1xdWVzdGlvbi1iaWctYXNrJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJlbnRBc2tUZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0YXJlYS1jb2x1bW4nKVxyXG4gICAgICAgICAgICBtb2RhbEFzay5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fYXNrLWEtcXVlc3Rpb24tYmlnLWFzaycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFza1RleHRhcmVhLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiOyAgLy90ZXh0YXJlYSBoZWlnaHQgZ3Jvd3RoXHJcbiAgICBhc2tUZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBhc2tUZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7Ly8gXHJcbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2hlYWRlck5hdkJ1cmdlck9uTWVkaWFNYXgtd2lkdGgxMTIwcHguanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoNzM1cHguanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9zZWNvbmRhcnlOYXZBcnJvd0xpbmtzMzIwLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvY2F0ZWdvcmllc1JhZGlvLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvV2lkZ2V0LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvbW9kYWwuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9wYXNzLWV5ZS5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL1Bob25lTWFzay5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL09UUC1JbnB1dC1maWVsZChzbXMpLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvdGV4dGFyZWFHcm93LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvYnV0dG9uRm9ybUNvbnNlbnRDaGVjay5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2FuaW1hdGVGb290ZXIuanMnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==