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

/***/ "./src/script/allScripts/questionsDropDown.js":
/*!****************************************************!*\
  !*** ./src/script/allScripts/questionsDropDown.js ***!
  \****************************************************/
/***/ (() => {

const svgDropDown = document.querySelectorAll('.questions__question-and-answer__item svg');

svgDropDown.forEach( (item) =>{
    item.addEventListener('click', () =>{         //opens and closes the answer to the question, on adding/removing a class
           if(!item.classList.contains('rotate-svg-questions')){
               item.classList.add('rotate-svg-questions')
           }else{
               item.classList.remove('rotate-svg-questions')
           }

           if(!item.nextElementSibling.classList.contains('open-question')){
                item.nextElementSibling.classList.add('open-question')
           }else{
                item.nextElementSibling.classList.remove('open-question')
           };

    } );
} );

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
/*!*********************************!*\
  !*** ./src/script/questions.js ***!
  \*********************************/
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
/* harmony import */ var _allScripts_questionsDropDown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allScripts/questionsDropDown.js */ "./src/script/allScripts/questionsDropDown.js");
/* harmony import */ var _allScripts_questionsDropDown_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_allScripts_questionsDropDown_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allScripts/Widget.js */ "./src/script/allScripts/Widget.js");
/* harmony import */ var _allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _allScripts_modal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allScripts/modal.js */ "./src/script/allScripts/modal.js");
/* harmony import */ var _allScripts_modal_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_allScripts_modal_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./allScripts/pass-eye.js */ "./src/script/allScripts/pass-eye.js");
/* harmony import */ var _allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./allScripts/PhoneMask.js */ "./src/script/allScripts/PhoneMask.js");
/* harmony import */ var _allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./allScripts/OTP-Input-field(sms).js */ "./src/script/allScripts/OTP-Input-field(sms).js");
/* harmony import */ var _allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./allScripts/textareaGrow.js */ "./src/script/allScripts/textareaGrow.js");
/* harmony import */ var _allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./allScripts/buttonFormConsentCheck.js */ "./src/script/allScripts/buttonFormConsentCheck.js");
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./allScripts/animateFooter.js */ "./src/script/allScripts/animateFooter.js");
/* harmony import */ var _allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_13__);














})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7O1VDdENEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQzRCO0FBQ0Q7QUFDWDtBQUNWO0FBQ0U7QUFDWDtBQUNEO0FBQ0c7QUFDQztBQUNVO0FBQ1A7QUFDUyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9PVFAtSW5wdXQtZmllbGQoc21zKS5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9XaWRnZXQuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGVGb290ZXIuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvYnV0dG9uRm9ybUNvbnNlbnRDaGVjay5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvY2F0ZWdvcmllc1JhZGlvLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoMTEyMHB4LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoNzM1cHguanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL21vZGFsLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9wYXNzLWV5ZS5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvcXVlc3Rpb25zRHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3NlY29uZGFyeU5hdkFycm93TGlua3MzMjAuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3RleHRhcmVhR3Jvdy5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9xdWVzdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy90byBjb3JyZWN0bHkgZmlsbCBpbiB0aGUgZmllbGRzKGlucHV0cykgaW4gdGhlIG1vZGFsIHdpbmRvdyAoZWxlbWVudCB3aXRoIGNsYXNzIC5tb2RhbF9fY29kZS1mcm9tLXNtcylcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJPVFBpbnB1dHNcIik7XHJcblxyXG5pbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKGUpIHsvL3doZW4gdGhlIGNoYXJhY3RlcnMgd2lsbCBiZSBlbnRlcmVkXHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDsgICAgICAgICAgICAgICAgICAvL3RoZSBmaWVsZCBpbiB3aGljaCB0aGUgc3ltYm9sIGlzIGN1cnJlbnRseSBlbnRlcmVkXHJcbiAgICBjb25zdCB2YWwgPSB0YXJnZXQudmFsdWU7ICAgICAgICAgICAgICAgICAvL3RoZSB2YWx1ZSBvZiB0aGlzIGZpZWxkXHJcblxyXG4gICAgaWYgKGlzTmFOKHZhbCkpIHsgICAgICAgIC8vd2hlbiBlbnRlcmluZyBhbnkgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGEgbnVtYmVyLCByZXR1cm5zIGFuIGVtcHR5IHN0cmluZ1xyXG4gICAgICAgIHRhcmdldC52YWx1ZSA9IFwiXCI7ICAgICAgLy8gaXQgd29uJ3QgbGV0IHlvdSBlbnRlciBhbnl0aGluZyBleGNlcHQgbnVtYmVyc1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsICE9IFwiXCIpIHsgICAgICAgICAgICAgLy9pZiBhIG51bWJlciBpcyBlbnRlcmVkLCBpdCBnb2VzIHRvIHRoZSBuZXh0IGZpZWxkKGlucHV0KVxyXG4gICAgICAgIGNvbnN0IG5leHQgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgIG5leHQuZm9jdXMoKTsgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmlucHV0cy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7ICAgICAgICAgICAgICAgICAgXHJcbiAgICBjb25zdCBrZXkgPSBlLmtleS50b0xvd2VyQ2FzZSgpOyAgICAgICAgLy90aGUgbnVtYmVycyB5b3UgZW50ZXIgd2lsbCBhbHdheXMgYmUgaW4gdXBwZXJjYXNlICBcclxuXHJcbiAgICBpZiAoa2V5ID09IFwiYmFja3NwYWNlXCIgfHwga2V5ID09IFwiZGVsZXRlXCIpIHsvL3doZW4gYSBjaGFyYWN0ZXIgaXMgZGVsZXRlZCwgaXQgbW92ZXMgdG8gdGhlIHByZXZpb3VzIGZpZWxkXHJcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCJcIjsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJldiA9IHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChwcmV2KSB7XHJcbiAgICAgICAgICAgIHByZXYuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59KTsiLCJcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBsZXQgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLXRlbC1pbnB1dF0nKTtcclxuXHJcbiAgICBsZXQgZ2V0SW5wdXROdW1iZXJzVmFsdWUgPSBmdW5jdGlvbihpbnB1dCkgeyAvL3Byb2hpYml0aW9uIG9uIGVudGVyaW5nIGFsbCBzeW1ib2xzIGV4Y2VwdCBudW1iZXJzXHJcbiAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvblBob25lSW5wdXQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZS50YXJnZXQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v0Y3Qu9C10LzQtdC90YIg0LjQvdC/0YPRglxyXG4gICAgICAgICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KTsvL9GF0YDQsNC90Y/RgtGB0Y8g0YLQvtC70YzQutC+INGH0LjRgdC70LBcclxuICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gXCJcIjtcclxuICAgICAgICBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0Oy8vSSBkb24ndCBrbm93IHdoeVxyXG5cclxuICAgICAgICAvKmlmICghaW5wdXROdW1iZXJzVmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoICE9IHNlbGVjdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlZGl0aW5nIG1pZGxlIHN0cmluZycsIGUpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJzVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0qL1xyXG5cclxuXHJcbiAgICAgICAgaWYgKFtcIjdcIiwgXCI4XCIsIFwiOVwiXS5pbmRleE9mKGlucHV0TnVtYmVyc1ZhbHVlWzBdKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZVswXSA9PSBcIjlcIikgaW5wdXROdW1iZXJzVmFsdWUgPSBcIjdcIiArIGlucHV0TnVtYmVyc1ZhbHVlOy8vaWYgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyA5IHRoZW4gcmVwbGFjZSBpdCB3aXRoIDcgOVxyXG5cclxuICAgICAgICAgICAgbGV0IGZpcnN0U3ltYm9scyA9IChpbnB1dE51bWJlcnNWYWx1ZVswXSA9PSBcIjhcIikgPyBcIjhcIiA6IFwiKzdcIjsvL2lmIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgOCB0aGVuIGl0IHdpbGwgcmV0dXJuIDggb3RoZXJ3aXNlIGl0IHdpbGwgcmV0dXJuICs3XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbHMgKyBcIiBcIjtcclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+IDEpIHsgLy9pZiBtb3JlIHRoYW4gMSBjaGFyYWN0ZXIgaXMgZW50ZXJlZCwgXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZygxLCA0KTsvL2l0IHdpbGwgYWRkICcoJyArIGNoYXJhY3RlcnMgZnJvbSAybmQgdG8gNXRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA1KSB7Ly9pZiA1IG9yIG1vcmUgY2hhcmFjdGVycyBhcmUgZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKSAnICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDQsIDcpOy8vaXQgd2lsbCBhZGQgJykgJyArIGNoYXJhY3RlcnMgZnJvbSA1bmQgdG8gOHRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSA4KSB7Ly9pZiA4IG9yIG1vcmUgY2hhcmFjdGVycyBhcmUgZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoNywgOSk7Ly9pdCB3aWxsIGFkZCAnLScgKyBjaGFyYWN0ZXJzIGZyb20gOG5kIHRvIDEwdGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWUubGVuZ3RoID49IDEwKSB7Ly9pZiAxMCBvciBtb3JlIGNoYXJhY3RlcnMgYXJlIGVudGVyZWRcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDksIDExKTsvL2l0IHdpbGwgYWRkICctJyArIGNoYXJhY3RlcnMgZnJvbSAxMG5kIHRvIDEydGhcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBcIitcIiArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZygwLCAxNik7Ly9pdCB3aWxsIGFkZCAnKycgKyBjaGFyYWN0ZXJzIGZyb20gMXN0IHRvIDEydGhcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBvblBob25lSW5wdXRLZXlEb3duID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUua2V5Q29kZSwgZS50YXJnZXQudmFsdWUpOy8va2V5IGNvZGUgYW5kIGlucHV0IHZhbHVlICggICAxMDAgLSBjb2RlICAgICAgICAgJys3ICg5ODQpIDU2JyAtIGlucHV0IHZhbHVlICAgIClcclxuICAgICAgICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDggJiYgZ2V0SW5wdXROdW1iZXJzVmFsdWUoaW5wdXQpLmxlbmd0aCA9PSAxKSB7Ly9pZiBiYWNrc3BhY2UgaXMgZW50ZXJlZChrZXlDb2RlID09IDgpLCB0aGUgaW5wdXQgdmFsdWUgd2lsbCBiZSByZXBsYWNlZCB3aXRoICcnXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvblBob25lUGFzdGUgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHBhc3RlZCA9IGUuY2xpcGJvYXJkRGF0YSB8fCB3aW5kb3cuY2xpcGJvYXJkRGF0YTsvL3RoZSBjb3BpZWQgbnVtYmVyIGlzIHN0b3JlZFxyXG4gICAgICAgIGlucHV0ID0gZS50YXJnZXQ7Ly9pbnB1dCBzdG9yZWRcclxuICAgICAgICBpbnB1dE51bWJlcnNWYWx1ZSA9IGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KTsvL3RoZSBpbnB1dCBpcyBjaGVja2VkIHRvIG1ha2Ugc3VyZSB0aGVyZSBhcmUgb25seSBudW1iZXJzXHJcblxyXG4gICAgICAgIGlmIChwYXN0ZWQpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYW55IGRhdGEgd2hlbiBpbnNlcnRpbmdcclxuICAgICAgICAgICAgbGV0IHBhc3RlZFRleHQgPSBwYXN0ZWQuZ2V0RGF0YSgndGV4dCcpOy8vaW5zZXJ0cyBhIHZhbHVlIGFzIGEgc3RyaW5nIGZyb20gdGhlIGNvcGllZCB0ZXh0XHJcbiAgICAgICAgICAgIGlmICgvXFxEL2cudGVzdChwYXN0ZWRUZXh0KSkgeyAgICAgICAgICAgLy9jaGVja3MgdGhhdCB0aGVyZSBhcmUgb25seSBudW1iZXJzXHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyc1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCBwaG9uZUlucHV0cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHBob25lSW5wdXRzW2ldO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25QaG9uZUlucHV0KTsvL29uIGxpbmUgMTBcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25QaG9uZUlucHV0S2V5RG93bik7Ly9vbiBsaW5lIDU2XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBob25lUGFzdGUpOy8vb24gbGluZSA2NFxyXG4gICAgfTtcclxuXHJcblxyXG59KSIsImNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0X191bCcpO1xyXG5jb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcicpO1xyXG5jb25zdCB3aWRnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lkZ2V0X190cmlnZ2VyX19tYWluJyk7XHJcbmNvbnN0IGNyb3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcl9fY3Jvc3MnKTtcclxuXHJcbmxldCBvcGVuV2lkZ2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCAhbGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGVXaWRnZXRsaXN0JykgKXsvL3Njc3Mgb24gbGluZSA0MzQ5XHJcbiAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgndmlzaWJsZVdpZGdldGxpc3QnKS8vdGhlIGxpc3QgZHJvcHMgdG8gdGhlIHRvcFxyXG4gICAgICAgICAgICB3aWRnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZXRyaWdnZXInKSAgIC8vY2hhbmdlcyB0aGUgd2lkZ2V0IGljb24gdG8gYSBjcm9zc1xyXG4gICAgICAgICAgICBjcm9zcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRldHJpZ2dlcicpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxpc3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVdpZGdldGxpc3QnKS8vdGhlIGxpc3QgY29tZXMgYmFja1xyXG4gICAgICAgICAgICB3aWRnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZXRyaWdnZXInKSAgIFxyXG4gICAgICAgICAgICBjcm9zcy5jbGFzc0xpc3QuYWRkKCdoaWRldHJpZ2dlcicpXHJcbiAgICAgICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbldpZGdldCk7IiwiY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyIC5mb290ZXItY29udGFpbmVyJyk7XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCA9PSAwKSB7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG59XHJcblxyXG5sZXQgc2Nyb2xsUGVyY2VudDtcclxuXHJcbmZ1bmN0aW9uIGdldFNjcm9sbFBlcmNlbnQoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLCAnd2luZG93LnNjcm9sbFknKTtcclxuICAgIC8vY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0LCAnd2luZG93LmlubmVySGVpZ2h0Jyk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhib2R5Lm9mZnNldEhlaWdodCwgJ2JvZHkub2Zmc2V0SGVpZ2h0Jyk7XHJcblxyXG4gICAgc2Nyb2xsUGVyY2VudCA9ICsoKHdpbmRvdy5zY3JvbGxZIC8gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpICogMTAwKS50b0ZpeGVkKDIpKTtcclxuICAgIFxyXG5cclxuICAgIGlmIChzY3JvbGxQZXJjZW50ID4gOTUpIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gdmlzaWJsZUZvb3RlcigpIHsvL2lmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgYXQgdGhlIHZlcnkgYm90dG9tXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCA9PSAwKSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGdldFNjcm9sbFBlcmNlbnQpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdmlzaWJsZUZvb3Rlcik7XHJcblxyXG4iLCIvL3Ntb290aCBzY3JvbGxcclxuY29uc3QgYm9keWZvclNtb290aFNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yU21vb3RoU2Nyb2xsJykpIHtcclxuICAgIGNvbnN0IGZvclNtb290aFNjcm9sbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yU21vb3RoU2Nyb2xsX193cmFwcGVyJyk7XHJcblxyXG4gICAgLy9naXZlcyB0aGUgaGVpZ2h0IG9mIHRoZSBib2R5IHNvIHRoYXQgc2Nyb2xsaW5nIG9jY3Vyc1xyXG4gICAgbGV0IGhlaWdodEZvclNjcm9sbCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZvclNtb290aFNjcm9sbFdyYXBwZXIpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpKTtcclxuICAgIGJvZHlmb3JTbW9vdGhTY3JvbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBoZWlnaHQ6JHtoZWlnaHRGb3JTY3JvbGx9cHhgKTtcclxuXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGFsaWduQm9keSlcclxuXHJcbiAgICBmdW5jdGlvbiBhbGlnbkJvZHkoKSB7IC8vIHNjcmlwdC9yYWRpb1BlcnNvbiAgLyAgc2NyaXB0L2NhdGVnb3JpZXNSYWRpb1xyXG4gICAgICAgIGhlaWdodEZvclNjcm9sbCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZvclNtb290aFNjcm9sbFdyYXBwZXIpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpKTtcclxuICAgICAgICBib2R5Zm9yU21vb3RoU2Nyb2xsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OiR7aGVpZ2h0Rm9yU2Nyb2xsfXB4YCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNjclBvc1kgPSAwOyAvL2ZvciBzY3JvbGwgcG9zaXRpb25zXHJcbiAgICBsZXQgYmxvY2tQb3NZID0gc2NyUG9zWTsgLy8gZm9yIGZvclNtb290aFNjcm9sbFdyYXBwZXIgcG9zaXRpb25cclxuICAgIGxldCBzcGVlZEFuaW0gPSAwLjAzOyAvL2lmIHNwZWVkQW5pbSA+IDAuMDcgKDAuMSkgYW5pbWF0aW9uIGhhcHBlbnMgZmFzdGVyXHJcbiAgICAvL2lmIHNwZWVkQW5pbSA8IDAuMDcgKDAuMDIpIGFuaW1hdGlvbiBpcyBzbG93ZXJcclxuXHJcblxyXG4gICAgLy8gQmluZCBhIHNjcm9sbCBmdW5jdGlvblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGdldHNTY3JvbGxWYWx1ZSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdldHNTY3JvbGxWYWx1ZSgpIHtcclxuICAgICAgICBzY3JQb3NZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2NyUG9zWSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoKTtcclxuXHJcbiAgICAvL2FuaW1hdGUgZWxlbWVudCByZXZpZXdzLmh0bWwgYW5kIHF1ZXN0aW9ucy5odG1sXHJcblxyXG4gICAgbGV0IHdpbmRvd0hlaWdodDtcclxuICAgIGNvbnN0IGVsZW1lbnRWaXNpYmxlID0gMTsgLy9hbmltYXRpb24gd2lsbCBzdGFydCB3aGVuIHRoZSBibG9jayBpcyAxNTBweCBhd2F5IGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQuXHJcbiAgICBsZXQgc2Nyb2xsRWxlbWVudHM7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzX193cmFwcGVyLWZvci1pdGVtX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKTsgLy9zdGFydCBieSBzZWxlY3RpbmcgYWxsIHRoZSBibG9ja1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2sgXHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2sgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93SGVpZ2h0KCkge1xyXG4gICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDsgLy93aW5kb3dIZWlnaHQgZ2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCAoaW5uZXJIZWlnaHQpXHJcbiAgICB9XHJcbiAgICBnZXRXaW5kb3dIZWlnaHQoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRXaW5kb3dIZWlnaHQpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhcHBlYXJFbGVtZW50KCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coc2Nyb2xsRWxlbWVudHMpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY3JvbGxFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRvcCA9ICtzY3JvbGxFbGVtZW50c1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AudG9GaXhlZCgyKTsgLy9jYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSB0b3Agb2YgdGhlIHZpZXdwb3J0IHRvIHRoZSB0b3Agb2YgdGhlIGJsb2NrXHJcblxyXG4gICAgICAgICAgICAvL0lmIHRoaXMgY29uZGl0aW9uIGlzIHRydWUsIGl0IG1lYW5zIHRoZSBibG9jayBpcyB3aXRoaW4gdGhlIHZpZXdwb3J0LCBhbmQgdGhlIGNsYXNzIHJldmVhbCwgXHJcbiAgICAgICAgICAgIC8vd2hpY2ggaGFzIHRoZSBzdHlsZSBjaGFuZ2VzLCBpcyBhZGRlZC4gSWYgdGhlIGJsb2NrIGlzIG5vdCB3aXRoaW4gdGhlIGRlZmluZWQgXHJcbiAgICAgICAgICAgIC8vdmlzaWJpbGl0eSBhcmVhLCB0aGUgcmV2ZWFsIGNsYXNzIGlzIHJlbW92ZWQsIHJldmVydGluZyB0aGUgYW5pbWF0aW9uLlxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvcCA8IHdpbmRvd0hlaWdodCAtIGVsZW1lbnRWaXNpYmxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudHNbaV0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVFbGVtZW50c09uU2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGVFbGVtZW50c09uU2Nyb2xsXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvL2FwcGVhckVsZW1lbnRSZXZpZXdzKCk7XHJcbiAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGFwcGVhckVsZW1lbnRSZXZpZXdzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzbW9vdGgoKSB7XHJcblxyXG4gICAgICAgIC8vV2UgY2FsY3VsYXRlIG91ciBjb250YWluZXIgcG9zaXRpb24gYnkgbGluZWFyIGludGVycG9sYXRpb24gbWV0aG9kXHJcbiAgICAgICAgYmxvY2tQb3NZID0gbGluZWFyKGJsb2NrUG9zWSwgc2NyUG9zWSwgc3BlZWRBbmltKSAvL2NhbGN1bGF0ZSBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyIHBvc2l0aW9uIGJ5IGxpbmVhciBpbnRlcnBvbGF0aW9uIG1ldGhvZFxyXG5cclxuICAgICAgICBibG9ja1Bvc1kgPSBNYXRoLmZsb29yKGJsb2NrUG9zWSAqIDEwMCkgLyAxMDA7XHJcblxyXG5cclxuICAgICAgICBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC0ke2Jsb2NrUG9zWX1weCwgMHB4KWApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc21vb3RoKTtcclxuICAgICAgICAvL2FuaW1hdGUgZWxlbWVudCByZXZpZXdzLmh0bWwgYW5kIHF1ZXN0aW9ucy5odG1sXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcl9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy1hcnRpY2xlLW1pblwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFwcGVhckVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxpbmVhcihhcmcxLCBhcmcyLCBhcmczKSB7XHJcbiAgICAgICAgcmV0dXJuICgxIC0gYXJnMykgKiBhcmcxICsgYXJnMyAqIGFyZzI7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLy9zcGxpdCB0eHRcclxuY29uc3QgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpXHJcblxyXG5cclxubGV0IHN0cmluZ0g7XHJcbmxldCBhcnJheUxldHRlcnNIID0gW107XHJcblxyXG5jb25zb2xlLmxvZyhoMik7XHJcbmlmIChoMiAhPSBudWxsKSB7XHJcbiAgICBpZiAoaDIuaWQgPT0gJ2gyY2F0YWxvZ01haW5QYWdlJykge1xyXG4gICAgICAgIGxldCB0bXBBZGFwdGl2ZUgyO1xyXG4gICAgICAgIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaDJjYXRhbG9nTWFpblBhZ2VBZGFwdGl2ZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDU4MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcEFkYXB0aXZlSDIgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFkYXB0aXZlSDIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzAnKSAgICBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzKGgyLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTgwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG1wQWRhcHRpdmVIMiAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQWRhcHRpdmVIMiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMiwgMiwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGgyLmlkID09ICdoMmFydGljbGVPclZpZGVvJykge1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vYXJnMSA9IGgxIG9yIGgyW2ldXHJcbi8vYXJnMiA9IGFtb3VudCBsaW5lc1xyXG4vL2FyZzMgPSBhbW91bnQgd29yZHMgaW4gMSBsaW5lXHJcbi8vYXJnNCA9IGFtb3VudCB3b3JkcyBpbiAyIGxpbmVcclxuLy9hcmc1ID0gYW1vdW50IHdvcmRzIGluIDMgbGluZVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0aW5nV3JhcHBlcnMoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSwgYXJnNiwgYXJnNykge1xyXG5cclxuICAgIC8vZm9yIGFkYXB0aXZlXHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxLmNoaWxkTm9kZXMubGVuZ3RoKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzWzBdKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lKVxyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBhcmcxLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICB9XHJcbiAgICBpZiAoYXJnMS5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lID09ICdESVYnKSB7IC8vY2hlY2tzIGlmIGgyIGlzIHNwbGl0IGludG8gbGV0dGVyc1xyXG4gICAgICAgIGxldCB0bXBXb3JkID0gYXJnMS5xdWVyeVNlbGVjdG9yQWxsKCcud3JhcHBlckZvcldvcmQnKTsgLy90YWtlcyBhbGwgdGhlIHdvcmRzXHJcbiAgICAgICAgbGV0IHRtcEFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG1wV29yZC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IHRtcFdvcmRbaV0ucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJTeW1ib2wnKTsgLy90YWtlcyBhbGwgY2hhcmFjdGVycyBpbiBlYWNoIHdvcmRcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBjaGFyLmxlbmd0aDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXJbeV0uaW5uZXJIVE1MKSAgIFxyXG4gICAgICAgICAgICAgICAgdG1wQXJyLnB1c2goY2hhclt5XS5pbm5lckhUTUwpOyAvL9GBaGFyIHB1dHMgaW50byBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPT0gKGNoYXIubGVuZ3RoIC0gMSkpIHsgLy9pZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSB3b3JkLCB0aGVuIGl0IHdpbGwgYWRkIGEgc3BhY2UgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wQXJyLnB1c2goJyAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codG1wQXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyZzEuaW5uZXJIVE1MID0gXCJcIjsgLy93aWxsIGNsZWFyIGgyXHJcbiAgICAgICAgYXJnMS5pbm5lckhUTUwgPSB0bXBBcnIuam9pbihcIlwiKTsgLy90aGUgbGluZSBjbGVhcmVkIG9mIHdyYXBwZXJzIHdpbGwgYmUgYWRkZWQgdG8gaDJcclxuICAgICAgICAvL2FyZzEuYXBwZW5kKHRtcEFyci5qb2luKFwiXCIpKTtcclxuICAgIH1cclxuICAgIC8qaWYoYXJnMS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucygnbGluZScpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdycnJycnJycicpXHJcbiAgICB9Ki9cclxuXHJcbiAgICBzdHJpbmdIID0gYXJnMS5pbm5lckhUTUw7IC8vdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgKHN0cmluZykgaXMgcHV0IGludG8gYSB2YXJpYWJsZVxyXG4gICAgYXJnMS5pbm5lckhUTUwgPSAnJzsgLy96ZXJvaW5nIGNvbnRlbnQgdG8gYWRkIHdyYXBwZXJzIHdpdGggY29udGVudFxyXG4gICAgYXJyYXlMZXR0ZXJzSCA9IFtdIC8vYXJyYXkgemVyb2luZyA/Pz8gaXQgc2VlbXMgdG8gYmUgcmVzZXQgdG8gemVybyBhcm91bmQgbGluZSAyMDkgPz8/XHJcbiAgICBmb3IgKGxldCBjaGFyIG9mIHN0cmluZ0gpIHsgLy90aGUgc3RyaW5nIGlzIHNwbGl0IGludG8gY2hhcmFjdGVycyBhbmQgYWRkZWQgdG8gdGhlIGFycmF5XHJcbiAgICAgICAgYXJyYXlMZXR0ZXJzSC5wdXNoKGNoYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb3VudCA9IDE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TGV0dGVyc0gubGVuZ3RoOyArK2kpIHsgLy9jb3VudCB3b3JkcyBpbiBhIGxpbmUsIHJlbGF0aXZlIHRvICcgJ1xyXG4gICAgICAgIGlmIChhcnJheUxldHRlcnNIW2ldID09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbGVuZ2h0QXJyID0gYXJyYXlMZXR0ZXJzSC5sZW5ndGg7XHJcblxyXG4gICAgaWYgKGFyZzIgPT0gMSkgeyAvL2lmIHlvdSBuZWVkIHRvIG1ha2UgYSBsaW5lIGluIDEgbGluZVxyXG4gICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGluZyBhIGxpbmUgYW5kIGFkZGluZyBpdCB0byBhbiBlbGVtZW50IChIMSBvciBIMilcclxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgICBhcmcxLmFwcGVuZChsaW5lKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcclxuICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSBpZiAoYXJnMiA+IDEpIHsgLy9pZiB5b3UgbmVlZCB0byBtYWtlIGEgbGluZSBpbiAyIGxpbmVzIG9yIG1vcmVcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGFyZzI7ICsreSkgeyAvLyB5IDwgYXJnMigzKSA9IG1ha2UgMyBsaW5lcyBcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW5nIGEgbGluZSBhbmQgYWRkaW5nIGl0IHRvIGFuIGVsZW1lbnQgKEgxIG9yIEgyKVxyXG4gICAgICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgICAgICAgICAgYXJnMS5hcHBlbmQobGluZSk7XHJcbiAgICAgICAgICAgIGlmICh5ID09IDApIHsgLy8xU1QgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnMzsgKytpKSB7IC8vICBpIDwgYXJnMygyKSA9ICAyIHdvcmRzIGluIGxpbmVcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDEpIHsgLy8yTkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNDsgKytpKSB7IC8vIC8vICBpIDwgYXJnNCgzKSA9ICAzIHdvcmRzIGluIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKSAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDIpIHsgLy8zTkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNTsgKytpKSB7IC8vIC8vICBpIDwgYXJnNSgyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gMykgeyAvLzRORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc2OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc2KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSA0KSB7IC8vNU5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzc7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzcoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhhcmcxKSB7XHJcbiAgICAgICAgLy9ieSB0aGUgdGVybSB3b3JkIGFuZCBzeW1ib2wsIHdlIG1lYW4gYSB3cmFwcGVyIGZvciBhIHdvcmQgYW5kIHN5bWJvbFxyXG4gICAgICAgIGxldCB3cmFwcGVyRm9yV29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpb24gb2YgYSB3b3JkXHJcbiAgICAgICAgd3JhcHBlckZvcldvcmQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlckZvcldvcmQnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5naHRBcnI7ICsreSkge1xyXG4gICAgICAgICAgICBpZiAoYXJyYXlMZXR0ZXJzSFswXSA9PSBcIiBcIikgeyAvL2lmIGl0IGVuY291bnRlcnMgXCIgXCIgLSBpdCB3aWxsIGRlbGV0ZSBpdFxyXG4gICAgICAgICAgICAgICAgYXJyYXlMZXR0ZXJzSC5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJheUxldHRlcnNIWzBdID09IHVuZGVmaW5lZCkgYnJlYWs7IC8vaWYgdGhlIGFycmF5IGlzIG92ZXIgLSBzdG9wXHJcbiAgICAgICAgICAgIGxldCBkaXZGb3JTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW9uIG9mIGEgc3ltYm9sXHJcbiAgICAgICAgICAgIGRpdkZvclN5bWJvbC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyU3ltYm9sJyk7XHJcbiAgICAgICAgICAgIGRpdkZvclN5bWJvbC5pbm5lckhUTUwgPSBhcnJheUxldHRlcnNIWzBdOyAvL2FkZGluZyBhIHN5bWJvbCBmcm9tIGFuIGFycmF5IHRvIGEgd3JhcHBlcihzeW1ib2wpXHJcbiAgICAgICAgICAgIHdyYXBwZXJGb3JXb3JkLmFwcGVuZChkaXZGb3JTeW1ib2wpOyAvL2FkZGluZyBhIHN5bWJvbCB0byBhIHdvcmRcclxuICAgICAgICAgICAgYXJyYXlMZXR0ZXJzSC5zcGxpY2UoMCwgMSk7IC8vcmVtb3ZlIGFkZGVkIGNoYXJhY3RlciBmcm9tIGFycmF5XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcmcxLmFwcGVuZCh3cmFwcGVyRm9yV29yZCk7IC8vYWRkaW5nIGEgd29yZCB3aXRoIHN5bWJvbHMgdG8gdGhlIGNyZWF0ZWQgbGluZSAodGhlIGxpbmUgd2FzIGNyZWF0ZWQgYXQgYWJvdXQgMTc1IGFuZCAxODQpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vaDIgY2hhciBwcmVwIGZvciBhbmltXHJcblxyXG5pZiAoaDIgIT0gbnVsbCkge1xyXG4gICAgY29uc3QgaDJDaGFyID0gaDIucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJTeW1ib2wnKVxyXG4gICAgLy9jb25zb2xlLmxvZyhoMkNoYXIpO1xyXG4gICAgbGV0IHRtcEgyQ2hhclRyYW5zWSA9IDA7XHJcbiAgICBmb3IgKGxldCBjaGFyIG9mIGgyQ2hhcikgeyAvL3dpbGwgbWFrZSBhIGxhZGRlclxyXG4gICAgICAgIGNoYXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0bXBIMkNoYXJUcmFuc1kgKiAwLjV9cHgpYDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoYXIpXHJcbiAgICAgICAgdG1wSDJDaGFyVHJhbnNZICs9IDE1O1xyXG4gICAgfVxyXG59IiwiY29uc3QgY29uc2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0gLmNvbnNlbnQnKTsgLy90YWtlIGFsbCBlbGVtZW50cyB3aXRoIGNsYXNzIC5jb25zZW50XHJcblxyXG4vL3RoZXJlIGlzIGEgZGl2IHdpdGggY2xhc3MgY29uY2VudC4gSW4gY29uc2VudCB0aGVyZSBhcmUgMiBlbGVtZW50cyBpbnB1dCBhbmQgbGFiZWxcclxuLy90aGUgbmV4dCBlbGVtZW50IGFmdGVyIHRoZSBjb25zZW50IGlzIHRoZSBidXR0b24gZWxlbWVudFxyXG5cclxuZm9yKCBsZXQgaXRlbSBvZiBjb25zZW50KXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29sbGVjdGlvbiBlbnVtZXJhdGlvblxyXG4gICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyAvL2FkZCBjbGljayBldmVudCB0byBlYWNoIG5leHQgaXRlbShidXR0b24pIGZyb20gdGhlIGNvbGxlY3Rpb25cclxuICAgICAgICBcclxuICAgICAgICBpZiggIWUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2hpbGROb2Rlc1sxXS5jaGVja2VkICl7IC8vaWYgdGhlIGxhYmVsIGlzIG5vdCBpbiB0aGUgY2hlY2tlZCBzdGF0ZVxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiB0aGUgYnV0dG9uIGRvZXMgbm90IHdvcmtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVGhpcyBpcyBuZWNlc3NhcnkgZm9yIHRoZSB1c2VyIHRvIGFncmVlIHRvIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGVybXMgb2YgcGVyc29uYWwgZGF0YSBwcm9jZXNzaW5nIFxyXG4gICAgfSk7XHJcbn07XHJcbiIsIi8vRm9yIGhvd1RvQnV5Lmh0bWwsIGJsb2cuaHRtbCwgYWNjb3VudC5odG1sLCBxdWVzdGlvbnMuaHRtbFxyXG5cclxuY29uc3QgaXRlbXNDYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvckNhdGVnb3J5QWxsUGFnZXMgcCcpOyAvL2luIHRoZSBlbGVtZW50IHdpdGggdGhlIGNsYXNzIHJhZGlvLWNhdGVnb3J5LCBhbGwgaW5wdXRzIG9mIHRoZSByYWRpbyB0eXBlIGFyZSB0YWtlblxyXG5jb25zdCBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYW5jaG9yXScpIC8vY29sbGVjdGlvbiBvZiBhbGwgZWxlbWVudHMgd2l0aCBhdHRyaWJ1dGUgZGF0YS1hbmNob3JcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyIC5mb290ZXItY29udGFpbmVyJyk7XHJcblxyXG5pdGVtc0NhdGVnb3JpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXNDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHRlZCcpKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpdGVtQ29sbGVjdCBvZiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93KSB7IC8vaXRlcmF0ZSBvdmVyIGFsbCBlbGVtZW50cyB3aXRoIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICBpdGVtQ29sbGVjdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7IC8vYWxsIGVsZW1lbnRzIHdpdGggdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSBhcmUgYXNzaWduZWQgdGhlIGhpZGUgY2xhc3NcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbUNvbGxlY3QpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gJ2FsbC1ibG9nJykgeyAvL2ZvciBibG9nLmh0bWwgLy9pZiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGlkIGlzICdhbGwtYmxvZycsIHRoZW4gYWxsIGVsZW1lbnRzIHdpdGggdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSB3aWxsIGhhdmUgdGhlIGhpZGUgY2xhc3MgcmVtb3ZlZFxyXG4gICAgICAgICAgICAgICAgaXRlbUNvbGxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaWQgPT0gaXRlbUNvbGxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpKSB7IC8vdGhlcmUgYXJlOiAxLiBpbnB1dCB3aXRoIGNoYW5nZSBldmVudCAyLiBlbGVtZW50IChkaXYgb3IgcCkgd2l0aCBkYXRhLWFuY2hvciBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgLy8gaWYgaW5wdXQgaWQgbWF0Y2hlcyBlbGVtZW50IChkaXYgb3IgcCkgZGF0YS1hbmNob3IgYXR0cmlidXRlLCB0aGVuIHJlbW92ZSBjbGFzcyBoaWRlIGZyb20gZWxlbWVudCAoZGl2IG9yIHApXHJcbiAgICAgICAgICAgICAgICAvL2ZpeCBkaXNwbGF5IGZvb3RlciBvbiBob3dUb0J1eS5odG1sIChmb3IgYW5pbWF0ZUZvb3Rlci5qcylcclxuICAgICAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93WzBdLmNsYXNzTGlzdC5jb250YWlucygncXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyJykpIHtcclxuICAgICAgICAgICAgYWxpZ25Cb2R5KCk7IC8vb25seSBmb3IgcXVlc3Rpb25zLmh0bWwsIHNvIHRoYXQgc21vb3RoIHNjcm9sbGluZyB3b3Jrc1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvd1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2Jsb2dfX3Jldmlld3MnKSkge1xyXG4gICAgICAgICAgICBhbGlnbkJvZHkoKTsgLy9vbmx5IGZvciBibG9nLmh0bWwsIHNvIHRoYXQgc21vb3RoIHNjcm9sbGluZyB3b3Jrc1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vY29uc29sZS5sb2coaXRlbXNDYXRlZ29yaWVzWzBdKTtcclxuXHJcbi8vY29uc29sZS5sb2coaXRlbXNDYXRlZ29yaWVzWzBdLmNoaWxkTm9kZXNbMV0udGFnTmFtZSk7XHJcblxyXG4vL2ZvciBibG9nLmh0bWwgLy9jb3VudGluZyB0aGUgbnVtYmVyIG9mIGFsbCBhcnRpY2xlcyBhbmQgYnkgY2F0ZWdvcmllc1xyXG5pZiAoaXRlbXNDYXRlZ29yaWVzWzBdLmNoaWxkTm9kZXNbMV0pIHsgLy9jaGVjayB0aGF0IHRoaXMgcGllY2Ugb2YgY29kZSBvbmx5IHdvcmtzIG9uIHRoZSBibG9nLmh0bWxcclxuXHJcbiAgICAvL2NvdW50aW5nIGFsbCBhcnRpY2xlc1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGZvciAobGV0IGl0ZW1Db2xsZWN0IG9mIGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3cpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW1Db2xsZWN0LmNoaWxkTm9kZXMpOy8vTm9kZUxpc3QgZm9ybWF0OiB0ZXh0LCBkaXYuYmxvZy1hcnRpY2xlLW1pbjsgdGV4dCwgZGl2LmJsb2ctYXJ0aWNsZS1taW47IGV0Yy4gXHJcbiAgICAgICAgLy9vbmx5IGRpdi5ibG9nLWFydGljbGUtbWluIG5lZWQgdG8gYmUgY291bnRlZCwgVGhhdCdzIHdoeSAtPiBpdGVtQ29sbGVjdC5jaGlsZE5vZGVzLmxlbmd0aCAvIDJcclxuICAgICAgICAvL3RoZXJlIGlzIHRleHQgYXQgdGhlIGVuZCBvZiB0aGUgbm9kZWxpc3QsIHRoZSB0ZXh0IG5lZWRzIHRvIGJlIHJlbW92ZWQsIFRoYXQncyB3aHkgLT4gaXRlbUNvbGxlY3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgY291bnQgKz0gKGl0ZW1Db2xsZWN0LmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkgLyAyIC8vdGhyb3cgaW50byB0aGUgY291bnRcclxuICAgIH1cclxuICAgIGl0ZW1zQ2F0ZWdvcmllc1swXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9IGNvdW50OyAvL2FkZCBjb3VudGVkIGFydGljbGVzIHRvIGh0bWxcclxuXHJcbiAgICAvL2NvdW50aW5nIGFydGljbGVzIGJ5IGNhdGVnb3J5XHJcbiAgICBpdGVtc0NhdGVnb3JpZXMuZm9yRWFjaCgoaXRlbSkgPT4geyAvLyBmb3IgZWFjaCBpdGVtIGZyb20gdGhlIGNvbGxlY3Rpb24gaXRlbXNDYXRlZ29yaWVzXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbUNvbGxlY3Qgb2YgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdykgeyAvL2l0ZXJhdGUgb3ZlciBhbGwgZWxlbWVudHMgd2l0aCBkYXRhLWFuY2hvciBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gaXRlbUNvbGxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpKSB7IC8vaWYgaXRlbS5pZCBtYXRjaGVzIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGUgb2YgYW4gZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uIGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3dcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSAoaXRlbUNvbGxlY3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSAvIDI7IC8vIHRoZW4gZnJvbSB0aGUgaW5wdXQgZ28gdG8gdGhlIGxhYmVsLCBhbmQgaW4gdGhlIGxhYmVsIGZpbmQgdGhlIHNwYW4gYW5kIGFzc2lnbiB0aGUgdmFsdWUgb2YgdGhlIGNvdW50ZWQgYXJ0aWNsZXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNoZWNrZWRSYWRpb0Jsb2coKSB7IC8vdG8gZ28gZnJvbSB0aGUgY2FyZC5odG1sIHBhZ2U7IHNlY3Rpb24gY2FyZC1oZWxwZnVsLWluZm9ybWF0aW9uIC0+IGNhcmQtaGVscGZ1bC1pbmZvcm1hdGlvbl9fYXJ0aWNsZXNcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zQ2F0ZWdvcmllcykge1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVsxXSkgeyAvL2h0dHBzOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL2Jsb2cuaHRtbD92aWRlby1icm9hZGNhc3RzIC0gd2lsbCBvbmx5IHRha2UgdmlkZW8tYnJvYWRjYXN0c1xyXG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7IC8vd2lsbCBzZXQgdGhlIGNoZWNrZWQgc3RhdGUgdG8gdGhlIGlucHV0IHdob3NlIGlkIG1hdGNoZXMgdGhlIGxpbmsgYWRkcmVzc1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtQ29sbGVjdCBvZiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtQ29sbGVjdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7IC8vYWxsIGVsZW1lbnRzIHdpdGggdGhlIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSBhcmUgYXNzaWduZWQgdGhlIGhpZGUgY2xhc3NcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtQ29sbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJykgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzFdKSB7IC8vaWYgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGUgbWF0Y2hlcyB0aGUgc3BsaXQgbGluayBhZGRyZXNzICgybmQgcGFydCksIFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTsgLy8gdGhlbiB0aGUgJ2hpZGUnIGNsYXNzIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoaXMgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn07IiwiY29uc3QgYnRuTGlzdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2X19idXJnZXItd3JhcHBlci1mb3ItbGluZScpO1xyXG5jb25zdCBuYXZNYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7XHJcbmJ0bkxpc3REcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xyXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8PSAxMDgzKSB7Ly9icm93c2VyIHdpbmRvdyB3aWR0aFxyXG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Nyb3NzJyk7ICAgICAgICAgLy93aGVuIGFkZGluZyBhIGNsYXNzIGZyb20gc3RpY2tzIG1ha2VzIGEgY3Jvc3NcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5hdk1haW5MaXN0LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bl9faGVhZGVyX19uYXZfX21haW4tbGlzdCcpOy8vd2hlbiBhZGRpbmcgYSBjbGFzcywgaXQgbWFrZXMgYSBsaXN0IGRyb3AgZG93blxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zcycpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYXZNYWluTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wLWRvd25fX2hlYWRlcl9fbmF2X19tYWluLWxpc3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIiwiLy9kcm9wIGRvd24gaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3QgYW5kIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0X19pdGVtX19sYXN0LWxpc3QgXHJcbmNvbnN0IGFycm93T3Blbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3ctcmlndGgtd3JhcHBlcicpO1xyXG5hcnJvd09wZW5MaXN0LmZvckVhY2goKGl0ZW0pID0+IHsvL3doZW4geW91IGNsaWNrIG9uIHRoZSBhcnJvdyBhIGxpc3QgZHJvcCBkb3duXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIWl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnb3Blbi1saXN0JykpIHsvL2l0IHdpbGwgYmUgZWl0aGVyIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0IG9yIGEgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3RfX2l0ZW1fX2xhc3QtbGlzdFxyXG4gICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdvcGVuLWxpc3QnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4tbGlzdCcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhcnJvdy1yaWd0aC13cmFwcGVyLXJvdGF0ZScpKSB7Ly9zcGlucyBieSBhZGRpbmcgYSBjbGFzc1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJylcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIiwiLy9iZWdpbiAvL2VsZW1lbnRzIGZvciBvcGVuaW5nIG1vZGFsIHdpbmRvd3NcclxuY29uc3Qgb3BlblJlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pdGVtc19fc2hvcHBpbmctY2FyZCcpO1xyXG5jb25zdCBvcGVuQ2FsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pdGVtc19fY2FsbCcpO1xyXG5jb25zdCBvcGVuTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pdGVtc19fYXV0aG9yaXphdGlvbicpO1xyXG5jb25zdCBvcGVuRm9yZ290WW91clBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9Gb3Jnb3QteW91ci1wYXNzd29yZCcpO1xyXG5jb25zdCBvcGVuR29Ub0xvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvVG9Mb2dpbicpO1xyXG5jb25zdCBvcGVuR29Ub1JlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub1JlZ2lzdHInKTtcclxuY29uc3Qgb3BlbkNvZGVGcm9tU21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9Db2RlRnJvbVNtcycpO1xyXG5jb25zdCBvcGVuTmV3UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub05ld1Bhc3N3b3JkJyk7XHJcbmNvbnN0IGNvbnRhY3RPcGVuTW9kYWxRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbHF1ZXN0aW9uJyk7Ly9mb3IgY29udGFjdHMuaHRtbFxyXG5jb25zdCB3aWRnZXRPcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2lkZ2V0LW9wZW4tbW9kYWwnKTsgLy9pbiB0aGUgd2lkZ2V0LCB0aGlyZCBpdGVtIGZyb20gdGhlIHRvcFxyXG4vL2VuZFxyXG5cclxuLy9iZWdpbiAvL21vZGFsIHdpbmRvd3NcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuY29uc3QgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2xvZ2luJyk7XHJcbmNvbnN0IHJlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3JlZ2lzdHInKTtcclxuY29uc3QgZm9yZ290WW91clBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19mb3Jnb3QteW91ci1wYXNzd29yZCcpO1xyXG5jb25zdCBjb2RlRnJvbVNtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29kZS1mcm9tLXNtcycpO1xyXG5jb25zdCBuZXdQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fbmV3LXBhc3N3b3JkJyk7XHJcbmNvbnN0IGNhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jYWxsYmFjaycpO1xyXG5jb25zdCBhc2tBUXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Fzay1hLXF1ZXN0aW9uJyk7XHJcbi8vZW5kXHJcblxyXG4vL2JlZ2luICAvL2Nsb3NlIG1vZGFsIHdpbmRvd3NcclxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuLy9lbmRcclxuXHJcbi8vYmVnaW4gLy9ldmVyeXRoaW5nIHJlbGF0ZWQgdG8gcHJpdmFjeSBwb2xpY3lcclxuY29uc3QgcG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcG9saXRpY3MnKTtcclxuY29uc3Qgb3BlblBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvVG9Qb2xpdGljcycpO1xyXG5jb25zdCBjbG9zZVBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXBvbGl0aWNzX19jbG9zZScpO1xyXG5jb25zdCBjbG9zZUJ0blBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvbGl0aWMtYnV0dG9uLWNsb3NlJyk7XHJcbi8vZW5kXHJcblxyXG4vL21vZGFsLnN0eWxlLmhlaWdodCA9IGAke21vZGFsLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDsvL2ZvciB0ZXh0YXJlYUdyb3cuanNcclxuXHJcblxyXG5cclxuXHJcbi8vY29uc3Qgb3Blbk1vZGFsUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtcmV3aWV3c19fbGVhdmUtZmVlZGJhY2snKTtcclxuLy9jb25zdCBtb2RhbFJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcmV2aWV3Jyk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwsIGl0ZW0pIHsvL3BhcmFtZXRlciBtb2RhbCA9PSBvbiBsaW5lIDE1IC8gcGFyYW1ldGVyIGl0ZW0gPT0gbG9naW4gb3IgcmVnaXN0ciBhbmQgZXRjLiBvbiBsaW5lIDE2XHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSAhPSAtMSkgeyAvL2ZvciB0ZXh0YXJlYUdyb3cuanMgdG8gd29yayBpbiBGaXJlZm94IGJyb3dzZXJcclxuICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19hc2stYS1xdWVzdGlvbicpKXtcclxuICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnNldEF0dHJpYnV0ZShcIkNvbHNcIiwgYDI0YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgfSBcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoZSkgey8vaWYgeW91IGNsaWNrIG9uIHNvbWV0aGluZyBvdGhlciB0aGFuIGEgbW9kYWwgd2luZG93LCBpdCB3aWxsIGNsb3NlIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICByZWdpc3RyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBjYWxsYmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgbG9naW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGZvcmdvdFlvdXJQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY29kZUZyb21TbXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIG5ld1Bhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBhc2tBUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIC8vbW9kYWxSZXZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT0gcG9saXRpY3MpIHtcclxuICAgICAgICBwb2xpdGljcy5jbGFzc0xpc3QuYWRkKCdoaWRlLXBvbGl0aWNzJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbG9zZWJ0bihlKSB7Ly9jbG9zZXMgbW9kYWwgd2luZG93IHdoZW4gY2xpY2tpbmcgb24gYnRuXHJcbiAgICBpZiAoZS50YXJnZXQgPT0gY2xvc2VQb2xpdGljcyB8fCBlLnRhcmdldCA9PSBjbG9zZUJ0blBvbGl0aWNzKSB7XHJcbiAgICAgICAgcG9saXRpY3MuY2xhc3NMaXN0LmFkZCgnaGlkZS1wb2xpdGljcycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgcmVnaXN0ci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY2FsbGJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGxvZ2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBmb3Jnb3RZb3VyUGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGNvZGVGcm9tU21zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBuZXdQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgYXNrQVF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAvL21vZGFsUmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbG9zZdChdXJyZW50T3BlbkxpbmsoY2xvc2UsIG9wZW4pIHsvL2Nsb3NlIG9uZSBtb2RhbCB3aW5kb3cgYW5kIG9wZW4gYW5vdGhlclxyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgb3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZdChdXJyZW50T3BlbmxvZ2luKGUpIHsvLyhlKSA9PSBvcGVuR29Ub0xvZ2luID09IGVsZW1lbnQgd2l0aCBjbGFzcyAuZ29Ub0xvZ2luLCBjbG9zZXN0KFwiLm1vZGFsX19ibG9ja1wiKSBpcyBzZXQgb24gdGhpcyBlbGVtZW50LlxyXG4gICAgZS50YXJnZXQuY2xvc2VzdChcIi5tb2RhbF9fYmxvY2tcIikuY2xhc3NMaXN0LmFkZCgnaGlkZScpOy8vd2hlbiBjbGlja2luZyBvbiBhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzIC5nb1RvTG9naW4sIFxyXG4gICAgbG9naW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpOyAgICAgICAgICAgICAgICAgICAgICAgICAvL2l0IHdpbGwgZ28gdGhyb3VnaCBhbGwgZWxlbWVudHMgaW5jbHVkaW5nIHBhcmVudHMgdXAgdG8gdGhlIHJvb3QgZWxlbWVudCB1bnRpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pdCBmaW5kcyBhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzIC5tb2RhbF9fYmxvY2ssIHN0b3AsIGFuZCBhZGQgdGhlIGNsYXNzIC5oaWRlIHRvIHRoaXMgZWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWxQb2xpdGljcygpIHtcclxuICAgIHBvbGl0aWNzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtcG9saXRpY3MnKTtcclxufVxyXG5cclxuXHJcbm9wZW5SZWdpc3RyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCByZWdpc3RyKSk7Ly9vbiBsaW5lIDQ3XHJcbm9wZW5DYWxsYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgY2FsbGJhY2spKTtcclxub3BlbkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBsb2dpbikpO1xyXG53aWRnZXRPcGVuTW9kYWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGNhbGxiYWNrKSk7XHJcbndpZGdldE9wZW5Nb2RhbFsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgYXNrQVF1ZXN0aW9uKSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuY2xvc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pIH0pOy8vb24gbGluZSA1OVxyXG5cclxub3BlbkdvVG9Mb2dpbi5mb3JFYWNoKChpdGVtKSA9PiB7IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZdChdXJyZW50T3BlbmxvZ2luKSB9KTtcclxuXHJcbm9wZW5Gb3Jnb3RZb3VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsobG9naW4sIGZvcmdvdFlvdXJQYXNzd29yZCkpOy8vb24gbGluZSA5M1xyXG5vcGVuR29Ub1JlZ2lzdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsobG9naW4sIHJlZ2lzdHIpKTtcclxub3BlbkNvZGVGcm9tU21zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGZvcmdvdFlvdXJQYXNzd29yZCwgY29kZUZyb21TbXMpKTtcclxub3Blbk5ld1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGNvZGVGcm9tU21zLCBuZXdQYXNzd29yZCkpO1xyXG5cclxub3BlblBvbGl0aWNzLmZvckVhY2goKGl0ZW0pID0+IHsvL29uIGxpbmUgMTA1XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsUG9saXRpY3MpO1xyXG59KTtcclxuY2xvc2VQb2xpdGljcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlYnRuKTsgICAvL29uIGxpbmUgNTlcclxuY2xvc2VCdG5Qb2xpdGljcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlYnRuKTsvL29uIGxpbmUgNTkgIFxyXG5cclxuXHJcbmlmKCBjb250YWN0T3Blbk1vZGFsUXVlc3Rpb24gKXtcclxuICAgIGNvbnRhY3RPcGVuTW9kYWxRdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgYXNrQVF1ZXN0aW9uKSk7XHJcbn07XHJcblxyXG4vL29wZW5Nb2RhbFJldmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgbW9kYWxSZXZpZXcpKTtcclxuXHJcblxyXG4iLCIvL2xldCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRlLXNob3ctcGFzc3dvcmQnKTsgLy8gZm9yIHZlci4gMVxyXG5sZXQgZXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV5ZScpO1xyXG5jb25zdCBidG5QYXNzQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtY2hlY2snKTtcclxubGV0IG1lc3NhZ2VQYXNzTWlzbWF0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmRzLWRvLW5vdC1tYXRjaCcpO1xyXG5sZXQgdHdvSW5wdXRQYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhc3NDaGVjaycpO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb3BlbihlKSB7XHJcblxyXG4gICAgLy92ZXIuMSBUaGlzIHZlcnNpb24gb2YgdGhlIGNvZGUgaGlkL3Nob3dlZCB0aGUgcGFzc3dvcmQgZm9yIGFsbCBpbnB1dHMgd2hlbiBjbGlja2luZyBvbiB0aGUgZXllXHJcblxyXG4gICAgLypwYXNzd29yZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgZXllLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1leWUnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLnR5cGUgPSAncGFzc3dvcmQnO1xyXG4gICAgICAgICAgICBleWUuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRlLWV5ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KSAgKi9cclxuXHJcbiAgICAvL05vdyBoaWRlcy9zaG93cyBvbmx5IHRoZSBpbnB1dCB0aGF0IHJlbGF0ZXMgdG8gdGhlIHByZXNzZWQgZXllXHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudHlwZSA9PSAncGFzc3dvcmQnKSB7Ly93aGVuIGNsaWNraW5nIG9uIHRoZSBleWUgaWYgdGhlIGlucHV0IGlzIG9mIHR5cGUgJ3Bhc3N3b3JkJ1xyXG4gICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudHlwZSA9ICd0ZXh0JzsgICAgICAgLy90aGVuIHJlcGxhY2Ugd2l0aCB0eXBlICd0ZXh0J1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZXllJykgICAgICAgICAgICAgICAgLy9vcGVuIGV5ZSB0aHJvdWdoIGNsYXNzIHJlbW92YWxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID0gJ3Bhc3N3b3JkJzsvL290aGVyd2lzZSBhc3NpZ24gdGhlIHR5cGUgJ3Bhc3N3b3JkJyAocmVwbGFjZXMgc3ltYm9scyB3aXRoIGRvdHMpXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZS1leWUnKTsgICAgICAgICAgICAgICAvL2FuZCB3aWxsIGNsb3NlIHRoZSBleWUgYXMgYSByZXN1bHQgb2YgYWRkaW5nIHRoZSBjbGFzc1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV5ZS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbik7XHJcbn0pO1xyXG5cclxuXHJcbmJ0blBhc3NDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmICghKHR3b0lucHV0UGFzc1swXS52YWx1ZSA9PSB0d29JbnB1dFBhc3NbMV0udmFsdWUpKSB7IC8vaWYgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBmaWVsZCBkb2VzIG5vdCBtYXRjaCB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBmaWVsZFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGVuIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWRcclxuICAgICAgICBtZXNzYWdlUGFzc01pc21hdGNoLmlubmVySFRNTCA9ICfQndC10YHQvtCy0L/QsNC00LXQvdC40LUg0L/QsNGA0L7Qu9C10LknOy8vYW5kIHdpbGwgZGlzcGxheSBhIG1lc3NhZ2UgYWJvdXQgdGhlIHBhc3N3b3JkIG1pc21hdGNoXHJcbiAgICB9O1xyXG5cclxufSk7XHJcblxyXG50d29JbnB1dFBhc3MuZm9yRWFjaCgoaXRlbSkgPT4geyAgICAgICAgICAvL3dpdGggZWFjaCBuZXcgZW50cnkgaXQgd2lsbCBkZWxldGUgdGhlIG1lc3NhZ2UgYWJvdXQgcGFzc3dvcmQgbWlzbWF0Y2hcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTsiLCJjb25zdCBzdmdEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW0gc3ZnJyk7XHJcblxyXG5zdmdEcm9wRG93bi5mb3JFYWNoKCAoaXRlbSkgPT57XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57ICAgICAgICAgLy9vcGVucyBhbmQgY2xvc2VzIHRoZSBhbnN3ZXIgdG8gdGhlIHF1ZXN0aW9uLCBvbiBhZGRpbmcvcmVtb3ZpbmcgYSBjbGFzc1xyXG4gICAgICAgICAgIGlmKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygncm90YXRlLXN2Zy1xdWVzdGlvbnMnKSl7XHJcbiAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgncm90YXRlLXN2Zy1xdWVzdGlvbnMnKVxyXG4gICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZS1zdmctcXVlc3Rpb25zJylcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIGlmKCFpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tcXVlc3Rpb24nKSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdvcGVuLXF1ZXN0aW9uJylcclxuICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4tcXVlc3Rpb24nKVxyXG4gICAgICAgICAgIH07XHJcblxyXG4gICAgfSApO1xyXG59ICk7IiwiLy90byBnbyB0byB0aGUgcHJldmlvdXMgcGFnZSBieSBuYXZpZ2F0aW9uXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbmxldCBhbGxMaVNlY29uZE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWNvbmRhcnktbmF2IGxpJyk7XHJcblxyXG4vL3Rha2VzIHRoZSBsaW5rIGFkZHJlc3MgZnJvbSB0aGUgcHJldmlvdXMgZWxlbWVudCBhbmQgcHV0cyBpdCBpbnRvIHRoZSBhcnJvdyBsaW5rIG9mIHRoZSBsYXN0IGVsZW1lbnRcclxubGV0IGxpbmtBZHJlc3MgPSBhbGxMaVNlY29uZE5hdlsoYWxsTGlTZWNvbmROYXYubGVuZ3RoIC0gMildLmNoaWxkTm9kZXNbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblxyXG5hbGxMaVNlY29uZE5hdlsoYWxsTGlTZWNvbmROYXYubGVuZ3RoIC0gMSldLmNoaWxkTm9kZXNbMV0uc2V0QXR0cmlidXRlKCdocmVmJywgbGlua0FkcmVzcyk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3QgbW9kYWxBc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Fzay1hLXF1ZXN0aW9uJyk7XHJcbmNvbnN0IGFza1RleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fzay1hLXF1ZXN0aW9uX19xdWVzdGlvbicpO1xyXG5jb25zdCBwYXJlbnRBc2tUZXh0YXJlYSA9IGFza1RleHRhcmVhLnBhcmVudEVsZW1lbnQ7XHJcbi8vY29uc29sZS5sb2cocGFyZW50QXNrVGV4dGFyZWEpO1xyXG5sZXQgaW5pdGlhbFdpZHRoQXNrVGV4dGFyZWEgPSArKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFza1RleHRhcmVhKS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikuc2xpY2UoMCwgLTIpKTsvL3RoZSBpbml0aWFsIHdpZHRoIG9mIHRoZSB0ZXh0YXJlYSBpcyB0YWtlblxyXG4vL2NvbnNvbGUubG9nKGluaXRpYWxXaWR0aEFza1RleHRhcmVhKTtcclxuXHJcbi8vd2lkdGggYW5kIGhlaWdodCByZXN0cmljdGlvbnMgYXQgYXBwcm94aW1hdGVseSBsaW5lIDkzOChzY3NzKVxyXG5cclxuYXNrVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhhc2tUZXh0YXJlYS5zY3JvbGxIZWlnaHQpXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1ODApIHtcclxuICAgICAgICBpZiAoZS5pbnB1dFR5cGUgPT0gJ2luc2VydFRleHQnICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA+IDI2ICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA8IDU0KSB7XHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7YXNrVGV4dGFyZWEuY2xpZW50V2lkdGggKz0gMTB9cHhgOyAvL2lmIHRoZSBudW1iZXIgb2YgZW50ZXJlZCBjaGFyYWN0ZXJzIG1hdGNoZXMgdGhlIGNvbmRpdGlvbnMgYWJvdmUsIHRoZSB0ZXh0YXJlYSB3aWxsIGdyb3cgaW4gd2lkdGggYnkgMTBweCBhZnRlciBlYWNoIGlucHV0XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmlucHV0VHlwZSA9PSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJyAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPiAyNiAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPCA1NCAmJiBhc2tUZXh0YXJlYS5jbGllbnRXaWR0aCA+IGluaXRpYWxXaWR0aEFza1RleHRhcmVhKSB7XHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7YXNrVGV4dGFyZWEuY2xpZW50V2lkdGggLT0gNX1weGA7Ly9pZiB0aGVyZSBpcyBhIGRlbGV0aW9uIG9mIGNoYXJhY3RlcnMsIHRoZSB0ZXh0YXJlYSB3aWxsIHNocmlua1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5pbnB1dFR5cGUgPT0gJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCcgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDw9IDI1KSB7XHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7aW5pdGlhbFdpZHRoQXNrVGV4dGFyZWF9cHhgOy8vYWRqdXN0IHRleHRhcmVhIHdpZHRoIHRvIGluaXRpYWwgdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGF0YSk7XHJcbiAgICAgICAgaWYgKGUuZGF0YSAhPSBudWxsICYmIGUuZGF0YS5sZW5ndGggPiAxKSB7Ly9pZiB0aGUgZW50aXJlIHJldmlldyBpcyBpbnNlcnRlZCAvIGUuZGF0YSAhPSBudWxsIC0+IG51bGwgPSB3aGVuIHByZXNzaW5nIGVudGVyIG9yIGJhY2tzcGFjZVxyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9ICc1MDBweCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPCAxKSB7Ly9pZiBhbGwgdGV4dCBpcyBkZWxldGVkIGF0IG9uY2VcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSBgJHtpbml0aWFsV2lkdGhBc2tUZXh0YXJlYX1weGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoID4gMjYpIHsvL3JlYXJyYW5nZSBlbGVtZW50cyB3aGVuIHRleHRhcmVhIGdyb3dzXHJcbiAgICAgICAgICAgIHBhcmVudEFza1RleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRhcmVhLWNvbHVtbicpXHJcbiAgICAgICAgICAgIG1vZGFsQXNrLmNsYXNzTGlzdC5hZGQoJ21vZGFsX19hc2stYS1xdWVzdGlvbi1iaWctYXNrJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJlbnRBc2tUZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0YXJlYS1jb2x1bW4nKVxyXG4gICAgICAgICAgICBtb2RhbEFzay5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fYXNrLWEtcXVlc3Rpb24tYmlnLWFzaycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFza1RleHRhcmVhLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiOyAgLy90ZXh0YXJlYSBoZWlnaHQgZ3Jvd3RoXHJcbiAgICBhc2tUZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBhc2tUZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7Ly8gXHJcbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2hlYWRlck5hdkJ1cmdlck9uTWVkaWFNYXgtd2lkdGgxMTIwcHguanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoNzM1cHguanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9zZWNvbmRhcnlOYXZBcnJvd0xpbmtzMzIwLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvY2F0ZWdvcmllc1JhZGlvLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvcXVlc3Rpb25zRHJvcERvd24uanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9XaWRnZXQuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9tb2RhbC5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL3Bhc3MtZXllLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvUGhvbmVNYXNrLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvT1RQLUlucHV0LWZpZWxkKHNtcykuanMnXHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL3RleHRhcmVhR3Jvdy5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2J1dHRvbkZvcm1Db25zZW50Q2hlY2suanMnXHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2FuaW1hdGVGb290ZXIuanMnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==