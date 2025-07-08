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

/***/ "./src/script/allScripts/counter-goods.js":
/*!************************************************!*\
  !*** ./src/script/allScripts/counter-goods.js ***!
  \************************************************/
/***/ (() => {

//for account.html and card.html

const blockThatHasCounter = document.querySelectorAll('.block-that-has-counter');
let allGoodsBasket;
let total;
let totalPrice;
let additionalInfoCounter;


//for account.html
if (document.querySelector('.account__basket')) {
    allGoodsBasket = document.querySelectorAll('.account__basket .price-relative-input');//the price is taken relative to the input
    total = document.querySelector('.account__total'); //a block is taken in which there is an element with a total price
    totalPrice = document.querySelector('.account__total .price');//the total price is taken
}



blockThatHasCounter.forEach((item) => {
    let incrementBtn = item.querySelector('.increment-btn');
    let decrementBtn = item.querySelector('.decrement-btn');
    let inputCount = item.querySelector('.counter-value');

    let price = item.querySelector('.price-relative-input'); //takes a string with a price that depends on the input
    let priceInitialValue = price.innerHTML.slice(0, -2);    //takes the initial price before any actions with the counter

    //for card.html
    let discount;
    let priceInitDiscount;
    if (item.querySelector('sup')) { //check if element with sup tag exists
        discount = item.querySelector('sup');//takes an element with the sup tag
        priceInitDiscount = discount.innerHTML.slice(0, -2);//takes the initial value of the old price before any actions with the counter
    }

    //for account.html
    let discAfterCount;
    let priceInitDiscAfterCount;
    if (item.querySelector('.disc span')) { //checks if there is an element with class disc that has span
        discAfterCount = item.querySelector('.disc span');//takes an element with the span tag
        priceInitDiscAfterCount = discAfterCount.innerHTML.slice(0, -2);//takes the initial discount value before any actions are performed on the counter
    }

    //for account.html
    let tax;
    let priceInitTax;
    if (item.querySelector('.tax span')) {   //checks if there is an element with class tax that has span
        tax = item.querySelector('.tax span');//takes an element with the span tag
        priceInitTax = tax.innerHTML.slice(0, -2);//takes the initial tax value before any actions are performed on the counter
    }


    incrementBtn.addEventListener('click', () => {

        let inputValue = Number(inputCount.value);//takes the string value of the input and converts it to a number
        let increaseInputValue = ++inputValue;//the variable will be needed to work with discount and price
        inputCount.value = increaseInputValue;

        changePrice(increaseInputValue); //transition to 109

        //for account.html
        growInput(increaseInputValue);//transition to 129

        //for account.html
        if (item.nextElementSibling.classList.contains('additional-info-counter')) {
            additionalInfoCounter = item.nextElementSibling;
            countTheBoxes(increaseInputValue);//transition to 142

        };
        if (document.querySelector('.account__basket')){
            countAllPrice();//transition to 150
        }
        


    });
    decrementBtn.addEventListener('click', () => {
        //everything is exactly the same as in incrementBtn.addEventListener('click'...
        let inputValue = Number(inputCount.value);
        let decreaseInputValue = --inputValue;
        if (decreaseInputValue >= 1) { //prevents the counter from going negative
            inputCount.value = decreaseInputValue;

            changePrice(decreaseInputValue); //transition to 109

            growInput(decreaseInputValue);   //transition to 129

            if (item.nextElementSibling.classList.contains('additional-info-counter')) {
                additionalInfoCounter = item.nextElementSibling;
                countTheBoxes(decreaseInputValue);//transition to 142
            }

        }
        if (document.querySelector('.account__basket')){
            countAllPrice();//transition to 150
        }

    });

    inputCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");//You can only enter numbers
        //everything is exactly the same as in incrementBtn.addEventListener('click'...
        changePrice(e.target.value);//transition to 109
        growInput(Number(e.target.value));//transition to 129

        if (item.nextElementSibling.classList.contains('additional-info-counter')) {
            additionalInfoCounter = item.nextElementSibling;
            countTheBoxes(e.target.value);//transition to 142
        };
        if (document.querySelector('.account__basket')){
            countAllPrice();//transition to 150
        }
    });

    function changePrice(par) {
        price.innerHTML = (priceInitialValue * par) + ' ₽';//the initial price value is multiplied by the counter value

        //for card.html
        if (item.querySelector('sup')) {
            discount.innerHTML = (priceInitDiscount * par) + ' ₽';//the principle is the same as with price.innerHTML (see above)
        }

        //for account.html
        if (item.querySelector('.disc span')) {
            discAfterCount.innerHTML = (priceInitDiscAfterCount * par) + ' ₽';//the principle is the same as with price.innerHTML (see above)
        }

        //for account.html
        if (item.querySelector('.tax span')) {
            tax.innerHTML = (priceInitTax * par) + ' ₽';//the principle is the same as with price.innerHTML (see above)
        }

    }

    function growInput(par) {//It is necessary that the input box increases or decreases relative to the number of digits
        if (par >= 10 && par < 100) {//if input value is >= 10 and < 100, will give the corresponding class to the element to extend the input
            inputCount.classList.remove('counter-value100')
            inputCount.classList.add('counter-value10')
        } else if (par >= 100 && par <= 1000) {

            inputCount.classList.add('counter-value100')
        } else {
            inputCount.classList.remove('counter-value10')//will decrease the width of the input if the value of the input decreases
            inputCount.classList.remove('counter-value100')
        }
    }
    //for account.html
    function countTheBoxes(par) {
        if (Math.floor(par / 10) > 0) {//increaseInputValue divide by 10 and round down
            additionalInfoCounter.innerHTML = Math.floor(par / 10) + ' кор.'
        } else {
            additionalInfoCounter.innerHTML = '';//
        };
    }
    //for account.html
    function countAllPrice() {
        let sumPrice = 0;
        for (let itemallGoodsBasket of allGoodsBasket) {//each item takes a string with a price, cuts it, converts it to a number, 
            sumPrice += Number(itemallGoodsBasket.innerHTML.slice(0, -2)); //and adds this number to the value of the sumPrice variable  
        }
        
        totalPrice.innerHTML = sumPrice + " ₽"
    }
});





/*const incrementBtn = document.querySelectorAll('.increment-btn');
const decrementBtn = document.querySelectorAll('.decrement-btn');
const allInputCount = document.querySelectorAll('.counter-value');


incrementBtn.forEach((item) => {

    let priceInitialValue = createPriceInitialValue(item);

    let priceDiscInitialValue;
    if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
        priceDiscInitialValue = createPriceDiscInitialValue(item)
    };

    let priceDiscAfterCountInitialValue;
    if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
        priceDiscAfterCountInitialValue = createPriceDiscAfterCountInitialValue(item);
    }
    console.log(item.parentElement.parentElement.childNodes[9])

    let taxInitialValue;
    if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
        taxInitialValue = createTaxInitialValue(item)
    }


    item.addEventListener('click', () => {

        let inputValue = Number(item.previousElementSibling.value);
        let increaseInputValue = ++inputValue;
        item.previousElementSibling.value = increaseInputValue;
        item.parentElement.parentElement.childNodes[3].innerHTML = (priceInitialValue * increaseInputValue) + ' ₽';

        if (item.parentElement.parentElement.nextElementSibling != null) {
            if (item.parentElement.parentElement.nextElementSibling.classList.contains('additionalCounterInfo')) {
                if (Math.floor(increaseInputValue / 10) > 0) {
                    item.parentElement.parentElement.nextElementSibling.innerHTML = Math.floor(increaseInputValue / 10) + ' кор.'
                } else {
                    item.parentElement.parentElement.nextElementSibling.innerHTML = '';
                }
            }

        }

        if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
            item.parentElement.parentElement.childNodes[5].innerHTML = (priceDiscInitialValue * increaseInputValue) + ' ₽';
        }

        if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
            item.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML = (priceDiscAfterCountInitialValue * increaseInputValue) + ' ₽';
        }

        if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
            item.parentElement.parentElement.childNodes[11].childNodes[1].innerHTML = (taxInitialValue * increaseInputValue) + ' ₽';
        }


    });
});

decrementBtn.forEach((item) => {

    let priceInitialValue = createPriceInitialValue(item);

    let priceDiscInitialValue;
    if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
        priceDiscInitialValue = createPriceDiscInitialValue(item)
    };

    let priceDiscAfterCountInitialValue;
    if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
        priceDiscAfterCountInitialValue = createPriceDiscAfterCountInitialValue(item);
    }

    let taxInitialValue;
    if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
        taxInitialValue = createTaxInitialValue(item)
    }


    item.addEventListener('click', () => {
        let inputValue = Number(item.nextElementSibling.value);
        let decreaseInputValue = --inputValue
        if (decreaseInputValue >= 1) {
            item.nextElementSibling.value = decreaseInputValue;
            item.parentElement.parentElement.childNodes[3].innerHTML = (priceInitialValue * decreaseInputValue) + ' ₽';


            if (item.parentElement.parentElement.nextElementSibling != null) {
                if (item.parentElement.parentElement.nextElementSibling.classList.contains('additionalCounterInfo')) {
                    if (Math.floor(decreaseInputValue / 10) > 0) {
                        item.parentElement.parentElement.nextElementSibling.innerHTML = Math.floor(decreaseInputValue / 10) + ' кор.'
                    } else {
                        item.parentElement.parentElement.nextElementSibling.innerHTML = '';
                    }
                }

            }


            if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
                item.parentElement.parentElement.childNodes[5].innerHTML = (priceDiscInitialValue * decreaseInputValue) + ' ₽';
            }

            if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
                item.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML = (priceDiscAfterCountInitialValue * decreaseInputValue) + ' ₽';
            }

            if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
                item.parentElement.parentElement.childNodes[11].childNodes[1].innerHTML = (taxInitialValue * decreaseInputValue) + ' ₽';
            }
        }

    });
});



allInputCount.forEach((item) => {

    let priceInitialValue = createPriceInitialValue(item);

    let priceDiscInitialValue;
    if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
        priceDiscInitialValue = createPriceDiscInitialValue(item)
    };

    let priceDiscAfterCountInitialValue;
    if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
        priceDiscAfterCountInitialValue = createPriceDiscAfterCountInitialValue(item);
    }

    let taxInitialValue;
    if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
        taxInitialValue = createTaxInitialValue(item)
    }


    item.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/\D/g, "");
        if (!isNaN(e.target.value)) {
            
            item.parentElement.parentElement.childNodes[3].innerHTML = priceInitialValue * e.target.value + ' ₽';

            if (item.parentElement.parentElement.nextElementSibling != null) {
                if (item.parentElement.parentElement.nextElementSibling.classList.contains('additionalCounterInfo')) {
                    if (Math.floor(e.target.value / 10) > 0) {
                        item.parentElement.parentElement.nextElementSibling.innerHTML = Math.floor(e.target.value / 10) + ' кор.'
                    } else {
                        item.parentElement.parentElement.nextElementSibling.innerHTML = '';
                    }
                }

            }

            if (item.parentElement.parentElement.childNodes[5].tagName == 'SUP') {
                item.parentElement.parentElement.childNodes[5].innerHTML = priceDiscInitialValue * e.target.value + ' ₽';
            }

            if (item.parentElement.parentElement.childNodes[9].classList.contains('add-info-price')) {
                item.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML = priceDiscAfterCountInitialValue * e.target.value + ' ₽';
            }

            if (item.parentElement.parentElement.childNodes[11].classList.contains('add-info-price')) {
                item.parentElement.parentElement.childNodes[11].childNodes[1].innerHTML = taxInitialValue * e.target.value + ' ₽';
            }
            if (Number(e.target.value) >= 10 && Number(e.target.value) < 100) {
                item.classList.remove('counter-value100')
                item.classList.add('counter-value10')
            } else if (Number(e.target.value) >= 100 && Number(e.target.value) <= 1000) {

                item.classList.add('counter-value100')
            } else {
                item.classList.remove('counter-value10')
                item.classList.remove('counter-value100')
            }
        }






    });
});




function createPriceInitialValue(par) {

    let initialValue = Number(par.parentElement.parentElement.childNodes[3].innerHTML.slice(0, -2));

    return initialValue;

};

function createPriceDiscInitialValue(par) {

    let pricinitialValue = Number(par.parentElement.parentElement.childNodes[5].innerHTML.slice(0, -2));

    return pricinitialValue;

};


function createPriceDiscAfterCountInitialValue(par) {

    let initialValue = par.parentElement.parentElement.childNodes[9].childNodes[1].innerHTML.slice(0, -2);

    return initialValue;

};


function createTaxInitialValue(par) {

    let initialValue = par.parentElement.parentElement.childNodes[11].childNodes[1].innerHTML.slice(0, -2);

    return initialValue;

};*/

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

/***/ }),

/***/ "./src/script/allScripts/workingWithFavoritesContent.js":
/*!**************************************************************!*\
  !*** ./src/script/allScripts/workingWithFavoritesContent.js ***!
  \**************************************************************/
/***/ (() => {

//for account.html
const masterCheckbox = document.querySelectorAll('[data-for-change-content="master-checkbox"]');
const addSelected = document.querySelector('[data-for-change-content="add-selected-to-shopping-cart"]');
const deleteSelected = document.querySelectorAll('[data-for-change-content="delete-selected"]');
const clearFav = document.querySelectorAll('[data-for-change-content="clear-favorites"]');
const clearBas = document.querySelectorAll('[data-for-change-content="clear-basket"]');
const inputsUnderMasterCheckbox = document.querySelectorAll('.account__content__product input[type=checkbox]');
const inputsUnderMasterCheckboxFavor = document.querySelectorAll('.account__favorites .account__content__product input[type=checkbox]');
const inputsUnderMasterCheckboxBasket = document.querySelectorAll('.account__basket .account__content__product input[type=checkbox]');
const basket = document.querySelector('#basket');





masterCheckbox.forEach((item) => {
    item.addEventListener('change', (e) => {//when item from collection masterCheckbox is checked, all other checkboxes are checked too
        if (e.target.checked) {
            if (e.target.id == 'master-checkbox-favirites') {//so that item from collection masterCheckbox checks only its inputs
                for (let item of inputsUnderMasterCheckboxFavor) {
                    item.checked = true;
                }
            } else {
                for (let item of inputsUnderMasterCheckboxBasket) {
                    item.checked = true;
                }

            }

        } else {
            if (e.target.id == 'master-checkbox-favirites') {
                for (let item of inputsUnderMasterCheckboxFavor) {
                    item.checked = false;
                }
            } else {
                for (let item of inputsUnderMasterCheckboxBasket) {
                    item.checked = false;
                }

            }

        }

    });

});

deleteSelected.forEach((item) => {
    item.addEventListener('click', (e) => {
        for (let item of inputsUnderMasterCheckbox) {//iterates over all inputs from the inputsUnderMasterCheckbox collection
            if (item.checked) {                      //checks for checked and if true removes the input's parent
                item.parentElement.parentElement.remove()
            };
        };
        countAllPrice();//on line 85

    });
});

clearFav.forEach((item) => {
    item.addEventListener('click', (e) => {//will simply remove all goods from favorites
        for (let item of inputsUnderMasterCheckboxFavor) {
            item.parentElement.parentElement.remove()
        };


    });
});

clearBas.forEach((item) => {
    item.addEventListener('click', (e) => {//will simply remove all goods from basket
        for (let item of inputsUnderMasterCheckboxBasket) {
            item.parentElement.parentElement.remove()
        };

        total.classList.add('hide')//counter-goods.js line 13
    });
});


basket.addEventListener('click', () => {//First on the account.html page, form - your-details is displayed, when clicking input (id = basket) it will start calculating the price
    countAllPrice();
});

function countAllPrice() {
    let allGoodsBasket = document.querySelectorAll('.account__basket .price-relative-input');

    if (allGoodsBasket.length == 0) { //if the products are deleted, then the block with the final price is also deleted
        total.classList.add('hide')//counter-goods.js line 13
    } else {
        let sumPrice = 0;
        for (let itemallGoodsBasket of allGoodsBasket) {//only the price of the product is taken (string), 
            sumPrice += Number(itemallGoodsBasket.innerHTML.slice(0, -2));//is converted to a number and added to sumPrice
        }
        totalPrice.innerHTML = sumPrice + " ₽"         //the sumPrice value is inserted into the block with the total amount of goods
        //counter-goods.js line 14
    }


}

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
  !*** ./src/script/account.js ***!
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
/* harmony import */ var _allScripts_radioPerson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allScripts/radioPerson.js */ "./src/script/allScripts/radioPerson.js");
/* harmony import */ var _allScripts_radioPerson_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_allScripts_radioPerson_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _allScripts_categoriesRadio_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./allScripts/categoriesRadio.js */ "./src/script/allScripts/categoriesRadio.js");
/* harmony import */ var _allScripts_categoriesRadio_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_allScripts_categoriesRadio_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _allScripts_counter_goods_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allScripts/counter-goods.js */ "./src/script/allScripts/counter-goods.js");
/* harmony import */ var _allScripts_counter_goods_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_allScripts_counter_goods_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _allScripts_workingWithFavoritesContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allScripts/workingWithFavoritesContent.js */ "./src/script/allScripts/workingWithFavoritesContent.js");
/* harmony import */ var _allScripts_workingWithFavoritesContent_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_allScripts_workingWithFavoritesContent_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./allScripts/Widget.js */ "./src/script/allScripts/Widget.js");
/* harmony import */ var _allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_allScripts_Widget_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _allScripts_modal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./allScripts/modal.js */ "./src/script/allScripts/modal.js");
/* harmony import */ var _allScripts_modal_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_allScripts_modal_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./allScripts/pass-eye.js */ "./src/script/allScripts/pass-eye.js");
/* harmony import */ var _allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_allScripts_pass_eye_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./allScripts/PhoneMask.js */ "./src/script/allScripts/PhoneMask.js");
/* harmony import */ var _allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_allScripts_PhoneMask_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./allScripts/OTP-Input-field(sms).js */ "./src/script/allScripts/OTP-Input-field(sms).js");
/* harmony import */ var _allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_allScripts_OTP_Input_field_sms_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./allScripts/textareaGrow.js */ "./src/script/allScripts/textareaGrow.js");
/* harmony import */ var _allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_allScripts_textareaGrow_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./allScripts/buttonFormConsentCheck.js */ "./src/script/allScripts/buttonFormConsentCheck.js");
/* harmony import */ var _allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_allScripts_buttonFormConsentCheck_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./allScripts/animateFooter.js */ "./src/script/allScripts/animateFooter.js");
/* harmony import */ var _allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_allScripts_animateFooter_js__WEBPACK_IMPORTED_MODULE_15__);
















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtB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Y2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvT1RQLUlucHV0LWZpZWxkKHNtcykuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL1Bob25lTWFzay5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvV2lkZ2V0LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9hbmltYXRlRm9vdGVyLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2J1dHRvbkZvcm1Db25zZW50Q2hlY2suanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL2NhdGVnb3JpZXNSYWRpby5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvY291bnRlci1nb29kcy5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDExMjBweC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvaGVhZGVyTmF2QnVyZ2VyT25NZWRpYU1heC13aWR0aDczNXB4LmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvcGFzcy1leWUuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3JhZGlvUGVyc29uLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9zZWNvbmRhcnlOYXZBcnJvd0xpbmtzMzIwLmpzIiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy90ZXh0YXJlYUdyb3cuanMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3dvcmtpbmdXaXRoRmF2b3JpdGVzQ29udGVudC5qcyIsIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hY2NvdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdG8gY29ycmVjdGx5IGZpbGwgaW4gdGhlIGZpZWxkcyhpbnB1dHMpIGluIHRoZSBtb2RhbCB3aW5kb3cgKGVsZW1lbnQgd2l0aCBjbGFzcyAubW9kYWxfX2NvZGUtZnJvbS1zbXMpXHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiT1RQaW5wdXRzXCIpO1xyXG5cclxuaW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbihlKSB7Ly93aGVuIHRoZSBjaGFyYWN0ZXJzIHdpbGwgYmUgZW50ZXJlZFxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7ICAgICAgICAgICAgICAgICAgLy90aGUgZmllbGQgaW4gd2hpY2ggdGhlIHN5bWJvbCBpcyBjdXJyZW50bHkgZW50ZXJlZFxyXG4gICAgY29uc3QgdmFsID0gdGFyZ2V0LnZhbHVlOyAgICAgICAgICAgICAgICAgLy90aGUgdmFsdWUgb2YgdGhpcyBmaWVsZFxyXG5cclxuICAgIGlmIChpc05hTih2YWwpKSB7ICAgICAgICAvL3doZW4gZW50ZXJpbmcgYW55IGNoYXJhY3RlciB0aGF0IGlzIG5vdCBhIG51bWJlciwgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmdcclxuICAgICAgICB0YXJnZXQudmFsdWUgPSBcIlwiOyAgICAgIC8vIGl0IHdvbid0IGxldCB5b3UgZW50ZXIgYW55dGhpbmcgZXhjZXB0IG51bWJlcnNcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbCAhPSBcIlwiKSB7ICAgICAgICAgICAgIC8vaWYgYSBudW1iZXIgaXMgZW50ZXJlZCwgaXQgZ29lcyB0byB0aGUgbmV4dCBmaWVsZChpbnB1dClcclxuICAgICAgICBjb25zdCBuZXh0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICBuZXh0LmZvY3VzKCk7ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5pbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29uc3Qga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTsgICAgICAgIC8vdGhlIG51bWJlcnMgeW91IGVudGVyIHdpbGwgYWx3YXlzIGJlIGluIHVwcGVyY2FzZSAgXHJcblxyXG4gICAgaWYgKGtleSA9PSBcImJhY2tzcGFjZVwiIHx8IGtleSA9PSBcImRlbGV0ZVwiKSB7Ly93aGVuIGEgY2hhcmFjdGVyIGlzIGRlbGV0ZWQsIGl0IG1vdmVzIHRvIHRoZSBwcmV2aW91cyBmaWVsZFxyXG4gICAgICAgIHRhcmdldC52YWx1ZSA9IFwiXCI7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByZXYgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAocHJldikge1xyXG4gICAgICAgICAgICBwcmV2LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufSk7IiwiXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbGV0IHBob25lSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbZGF0YS10ZWwtaW5wdXRdJyk7XHJcblxyXG4gICAgbGV0IGdldElucHV0TnVtYmVyc1ZhbHVlID0gZnVuY3Rpb24oaW5wdXQpIHsgLy9wcm9oaWJpdGlvbiBvbiBlbnRlcmluZyBhbGwgc3ltYm9scyBleGNlcHQgbnVtYmVyc1xyXG4gICAgICAgIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIilcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb25QaG9uZUlucHV0ID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL9GN0LvQtdC80LXQvdGCINC40L3Qv9GD0YJcclxuICAgICAgICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCk7Ly/RhdGA0LDQvdGP0YLRgdGPINGC0L7Qu9GM0LrQviDRh9C40YHQu9CwXHJcbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDsvL0kgZG9uJ3Qga25vdyB3aHlcclxuXHJcbiAgICAgICAgLyppZiAoIWlucHV0TnVtYmVyc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWRpdGluZyBtaWRsZSBzdHJpbmcnLCBlKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyc1ZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9Ki9cclxuXHJcblxyXG4gICAgICAgIGlmIChbXCI3XCIsIFwiOFwiLCBcIjlcIl0uaW5kZXhPZihpbnB1dE51bWJlcnNWYWx1ZVswXSkgPiAtMSkge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXROdW1iZXJzVmFsdWVbMF0gPT0gXCI5XCIpIGlucHV0TnVtYmVyc1ZhbHVlID0gXCI3XCIgKyBpbnB1dE51bWJlcnNWYWx1ZTsvL2lmIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgOSB0aGVuIHJlcGxhY2UgaXQgd2l0aCA3IDlcclxuXHJcbiAgICAgICAgICAgIGxldCBmaXJzdFN5bWJvbHMgPSAoaW5wdXROdW1iZXJzVmFsdWVbMF0gPT0gXCI4XCIpID8gXCI4XCIgOiBcIis3XCI7Ly9pZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzIDggdGhlbiBpdCB3aWxsIHJldHVybiA4IG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiArN1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gZmlyc3RTeW1ib2xzICsgXCIgXCI7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPiAxKSB7IC8vaWYgbW9yZSB0aGFuIDEgY2hhcmFjdGVyIGlzIGVudGVyZWQsIFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKCcgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMSwgNCk7Ly9pdCB3aWxsIGFkZCAnKCcgKyBjaGFyYWN0ZXJzIGZyb20gMm5kIHRvIDV0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gNSkgey8vaWYgNSBvciBtb3JlIGNoYXJhY3RlcnMgYXJlIGVudGVyZWRcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg0LCA3KTsvL2l0IHdpbGwgYWRkICcpICcgKyBjaGFyYWN0ZXJzIGZyb20gNW5kIHRvIDh0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE51bWJlcnNWYWx1ZS5sZW5ndGggPj0gOCkgey8vaWYgOCBvciBtb3JlIGNoYXJhY3RlcnMgYXJlIGVudGVyZWRcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJzVmFsdWUuc3Vic3RyaW5nKDcsIDkpOy8vaXQgd2lsbCBhZGQgJy0nICsgY2hhcmFjdGVycyBmcm9tIDhuZCB0byAxMHRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0TnVtYmVyc1ZhbHVlLmxlbmd0aCA+PSAxMCkgey8vaWYgMTAgb3IgbW9yZSBjaGFyYWN0ZXJzIGFyZSBlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyc1ZhbHVlLnN1YnN0cmluZyg5LCAxMSk7Ly9pdCB3aWxsIGFkZCAnLScgKyBjaGFyYWN0ZXJzIGZyb20gMTBuZCB0byAxMnRoXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gXCIrXCIgKyBpbnB1dE51bWJlcnNWYWx1ZS5zdWJzdHJpbmcoMCwgMTYpOy8vaXQgd2lsbCBhZGQgJysnICsgY2hhcmFjdGVycyBmcm9tIDFzdCB0byAxMnRoXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgb25QaG9uZUlucHV0S2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmtleUNvZGUsIGUudGFyZ2V0LnZhbHVlKTsvL2tleSBjb2RlIGFuZCBpbnB1dCB2YWx1ZSAoICAgMTAwIC0gY29kZSAgICAgICAgICcrNyAoOTg0KSA1NicgLSBpbnB1dCB2YWx1ZSAgICApXHJcbiAgICAgICAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA4ICYmIGdldElucHV0TnVtYmVyc1ZhbHVlKGlucHV0KS5sZW5ndGggPT0gMSkgey8vaWYgYmFja3NwYWNlIGlzIGVudGVyZWQoa2V5Q29kZSA9PSA4KSwgdGhlIGlucHV0IHZhbHVlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCAnJ1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgb25QaG9uZVBhc3RlID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBwYXN0ZWQgPSBlLmNsaXBib2FyZERhdGEgfHwgd2luZG93LmNsaXBib2FyZERhdGE7Ly90aGUgY29waWVkIG51bWJlciBpcyBzdG9yZWRcclxuICAgICAgICBpbnB1dCA9IGUudGFyZ2V0Oy8vaW5wdXQgc3RvcmVkXHJcbiAgICAgICAgaW5wdXROdW1iZXJzVmFsdWUgPSBnZXRJbnB1dE51bWJlcnNWYWx1ZShpbnB1dCk7Ly90aGUgaW5wdXQgaXMgY2hlY2tlZCB0byBtYWtlIHN1cmUgdGhlcmUgYXJlIG9ubHkgbnVtYmVyc1xyXG5cclxuICAgICAgICBpZiAocGFzdGVkKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGFueSBkYXRhIHdoZW4gaW5zZXJ0aW5nXHJcbiAgICAgICAgICAgIGxldCBwYXN0ZWRUZXh0ID0gcGFzdGVkLmdldERhdGEoJ3RleHQnKTsvL2luc2VydHMgYSB2YWx1ZSBhcyBhIHN0cmluZyBmcm9tIHRoZSBjb3BpZWQgdGV4dFxyXG4gICAgICAgICAgICBpZiAoL1xcRC9nLnRlc3QocGFzdGVkVGV4dCkpIHsgICAgICAgICAgIC8vY2hlY2tzIHRoYXQgdGhlcmUgYXJlIG9ubHkgbnVtYmVyc1xyXG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlcnNWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGhvbmVJbnB1dHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSBwaG9uZUlucHV0c1tpXTtcclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG9uUGhvbmVJbnB1dCk7Ly9vbiBsaW5lIDEwXHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUGhvbmVJbnB1dEtleURvd24pOy8vb24gbGluZSA1NlxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QaG9uZVBhc3RlKTsvL29uIGxpbmUgNjRcclxuICAgIH07XHJcblxyXG5cclxufSkiLCJjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdWwnKTtcclxuY29uc3QgdHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3RyaWdnZXInKTtcclxuY29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpZGdldF9fdHJpZ2dlcl9fbWFpbicpO1xyXG5jb25zdCBjcm9zcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aWRnZXRfX3RyaWdnZXJfX2Nyb3NzJyk7XHJcblxyXG5sZXQgb3BlbldpZGdldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiggIWxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlV2lkZ2V0bGlzdCcpICl7Ly9zY3NzIG9uIGxpbmUgNDM0OVxyXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGVXaWRnZXRsaXN0JykvL3RoZSBsaXN0IGRyb3BzIHRvIHRoZSB0b3BcclxuICAgICAgICAgICAgd2lkZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGV0cmlnZ2VyJykgICAvL2NoYW5nZXMgdGhlIHdpZGdldCBpY29uIHRvIGEgY3Jvc3NcclxuICAgICAgICAgICAgY3Jvc3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZXRyaWdnZXInKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVXaWRnZXRsaXN0JykvL3RoZSBsaXN0IGNvbWVzIGJhY2tcclxuICAgICAgICAgICAgd2lkZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGV0cmlnZ2VyJykgICBcclxuICAgICAgICAgICAgY3Jvc3MuY2xhc3NMaXN0LmFkZCgnaGlkZXRyaWdnZXInKVxyXG4gICAgICAgIH1cclxufTtcclxuXHJcblxyXG5cclxudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5XaWRnZXQpOyIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlciAuZm9vdGVyLWNvbnRhaW5lcicpO1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPT0gMCkge1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxufVxyXG5cclxubGV0IHNjcm9sbFBlcmNlbnQ7XHJcblxyXG5mdW5jdGlvbiBnZXRTY3JvbGxQZXJjZW50KCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSwgJ3dpbmRvdy5zY3JvbGxZJyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHdpbmRvdy5pbm5lckhlaWdodCwgJ3dpbmRvdy5pbm5lckhlaWdodCcpO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coYm9keS5vZmZzZXRIZWlnaHQsICdib2R5Lm9mZnNldEhlaWdodCcpO1xyXG5cclxuICAgIHNjcm9sbFBlcmNlbnQgPSArKCh3aW5kb3cuc2Nyb2xsWSAvIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSAqIDEwMCkudG9GaXhlZCgyKSk7XHJcbiAgICBcclxuXHJcbiAgICBpZiAoc2Nyb2xsUGVyY2VudCA+IDk1KSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3RlclZpc2libGUnKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZpc2libGVGb290ZXIoKSB7Ly9pZiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIGF0IHRoZSB2ZXJ5IGJvdHRvbVxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPT0gMCkge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXJWaXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRTY3JvbGxQZXJjZW50KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHZpc2libGVGb290ZXIpO1xyXG5cclxuIiwiLy9zbW9vdGggc2Nyb2xsXHJcbmNvbnN0IGJvZHlmb3JTbW9vdGhTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvclNtb290aFNjcm9sbCcpKSB7XHJcbiAgICBjb25zdCBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvclNtb290aFNjcm9sbF9fd3JhcHBlcicpO1xyXG5cclxuICAgIC8vZ2l2ZXMgdGhlIGhlaWdodCBvZiB0aGUgYm9keSBzbyB0aGF0IHNjcm9sbGluZyBvY2N1cnNcclxuICAgIGxldCBoZWlnaHRGb3JTY3JvbGwgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmb3JTbW9vdGhTY3JvbGxXcmFwcGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XHJcbiAgICBib2R5Zm9yU21vb3RoU2Nyb2xsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgaGVpZ2h0OiR7aGVpZ2h0Rm9yU2Nyb2xsfXB4YCk7XHJcblxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBhbGlnbkJvZHkpXHJcblxyXG4gICAgZnVuY3Rpb24gYWxpZ25Cb2R5KCkgeyAvLyBzY3JpcHQvcmFkaW9QZXJzb24gIC8gIHNjcmlwdC9jYXRlZ29yaWVzUmFkaW9cclxuICAgICAgICBoZWlnaHRGb3JTY3JvbGwgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmb3JTbW9vdGhTY3JvbGxXcmFwcGVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSk7XHJcbiAgICAgICAgYm9keWZvclNtb290aFNjcm9sbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYGhlaWdodDoke2hlaWdodEZvclNjcm9sbH1weGApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzY3JQb3NZID0gMDsgLy9mb3Igc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgbGV0IGJsb2NrUG9zWSA9IHNjclBvc1k7IC8vIGZvciBmb3JTbW9vdGhTY3JvbGxXcmFwcGVyIHBvc2l0aW9uXHJcbiAgICBsZXQgc3BlZWRBbmltID0gMC4wMzsgLy9pZiBzcGVlZEFuaW0gPiAwLjA3ICgwLjEpIGFuaW1hdGlvbiBoYXBwZW5zIGZhc3RlclxyXG4gICAgLy9pZiBzcGVlZEFuaW0gPCAwLjA3ICgwLjAyKSBhbmltYXRpb24gaXMgc2xvd2VyXHJcblxyXG5cclxuICAgIC8vIEJpbmQgYSBzY3JvbGwgZnVuY3Rpb25cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBnZXRzU2Nyb2xsVmFsdWUpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRzU2Nyb2xsVmFsdWUoKSB7XHJcbiAgICAgICAgc2NyUG9zWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNjclBvc1kpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aCk7XHJcblxyXG4gICAgLy9hbmltYXRlIGVsZW1lbnQgcmV2aWV3cy5odG1sIGFuZCBxdWVzdGlvbnMuaHRtbFxyXG5cclxuICAgIGxldCB3aW5kb3dIZWlnaHQ7XHJcbiAgICBjb25zdCBlbGVtZW50VmlzaWJsZSA9IDE7IC8vYW5pbWF0aW9uIHdpbGwgc3RhcnQgd2hlbiB0aGUgYmxvY2sgaXMgMTUwcHggYXdheSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHZpZXdwb3J0LlxyXG4gICAgbGV0IHNjcm9sbEVsZW1lbnRzO1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmV2aWV3c19fd3JhcHBlci1mb3ItaXRlbV9faXRlbVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIik7IC8vc3RhcnQgYnkgc2VsZWN0aW5nIGFsbCB0aGUgYmxvY2tcclxuXHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzY3JvbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zX19xdWVzdGlvbi1hbmQtYW5zd2VyX19pdGVtXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrIFxyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nLWFydGljbGUtbWluXCIpOyAvL3N0YXJ0IGJ5IHNlbGVjdGluZyBhbGwgdGhlIGJsb2NrIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpIHtcclxuICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7IC8vd2luZG93SGVpZ2h0IGdldHMgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQgKGlubmVySGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgZ2V0V2luZG93SGVpZ2h0KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0V2luZG93SGVpZ2h0KTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZWFyRWxlbWVudCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNjcm9sbEVsZW1lbnRzKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nyb2xsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUb3AgPSArc2Nyb2xsRWxlbWVudHNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLnRvRml4ZWQoMik7IC8vY2FsY3VsYXRlcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCB0byB0aGUgdG9wIG9mIHRoZSBibG9ja1xyXG5cclxuICAgICAgICAgICAgLy9JZiB0aGlzIGNvbmRpdGlvbiBpcyB0cnVlLCBpdCBtZWFucyB0aGUgYmxvY2sgaXMgd2l0aGluIHRoZSB2aWV3cG9ydCwgYW5kIHRoZSBjbGFzcyByZXZlYWwsIFxyXG4gICAgICAgICAgICAvL3doaWNoIGhhcyB0aGUgc3R5bGUgY2hhbmdlcywgaXMgYWRkZWQuIElmIHRoZSBibG9jayBpcyBub3Qgd2l0aGluIHRoZSBkZWZpbmVkIFxyXG4gICAgICAgICAgICAvL3Zpc2liaWxpdHkgYXJlYSwgdGhlIHJldmVhbCBjbGFzcyBpcyByZW1vdmVkLCByZXZlcnRpbmcgdGhlIGFuaW1hdGlvbi5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRUb3AgPCB3aW5kb3dIZWlnaHQgLSBlbGVtZW50VmlzaWJsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlRWxlbWVudHNPblNjcm9sbFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLy9hcHBlYXJFbGVtZW50UmV2aWV3cygpO1xyXG4gICAgLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBhcHBlYXJFbGVtZW50UmV2aWV3cyk7XHJcblxyXG4gICAgZnVuY3Rpb24gc21vb3RoKCkge1xyXG5cclxuICAgICAgICAvL1dlIGNhbGN1bGF0ZSBvdXIgY29udGFpbmVyIHBvc2l0aW9uIGJ5IGxpbmVhciBpbnRlcnBvbGF0aW9uIG1ldGhvZFxyXG4gICAgICAgIGJsb2NrUG9zWSA9IGxpbmVhcihibG9ja1Bvc1ksIHNjclBvc1ksIHNwZWVkQW5pbSkgLy9jYWxjdWxhdGUgZm9yU21vb3RoU2Nyb2xsV3JhcHBlciBwb3NpdGlvbiBieSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBtZXRob2RcclxuXHJcbiAgICAgICAgYmxvY2tQb3NZID0gTWF0aC5mbG9vcihibG9ja1Bvc1kgKiAxMDApIC8gMTAwO1xyXG5cclxuXHJcbiAgICAgICAgZm9yU21vb3RoU2Nyb2xsV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtJHtibG9ja1Bvc1l9cHgsIDBweClgKTtcclxuXHJcblxyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aCk7XHJcbiAgICAgICAgLy9hbmltYXRlIGVsZW1lbnQgcmV2aWV3cy5odG1sIGFuZCBxdWVzdGlvbnMuaHRtbFxyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJldmlld3NfX3dyYXBwZXItZm9yLWl0ZW1fX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNfX3F1ZXN0aW9uLWFuZC1hbnN3ZXJfX2l0ZW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctYXJ0aWNsZS1taW5cIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcHBlYXJFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaW5lYXIoYXJnMSwgYXJnMiwgYXJnMykge1xyXG4gICAgICAgIHJldHVybiAoMSAtIGFyZzMpICogYXJnMSArIGFyZzMgKiBhcmcyO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi8vc3BsaXQgdHh0XHJcbmNvbnN0IGgyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDInKVxyXG5cclxuXHJcbmxldCBzdHJpbmdIO1xyXG5sZXQgYXJyYXlMZXR0ZXJzSCA9IFtdO1xyXG5cclxuY29uc29sZS5sb2coaDIpO1xyXG5pZiAoaDIgIT0gbnVsbCkge1xyXG4gICAgaWYgKGgyLmlkID09ICdoMmNhdGFsb2dNYWluUGFnZScpIHtcclxuICAgICAgICBsZXQgdG1wQWRhcHRpdmVIMjtcclxuICAgICAgICBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGgyY2F0YWxvZ01haW5QYWdlQWRhcHRpdmUpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBoMmNhdGFsb2dNYWluUGFnZUFkYXB0aXZlKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1ODApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0bXBBZGFwdGl2ZUgyICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0bXBBZGFwdGl2ZUgyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCcwJykgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVycyhoMiwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU4MCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRtcEFkYXB0aXZlSDIgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFkYXB0aXZlSDIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDIsIDIsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChoMi5pZCA9PSAnaDJhcnRpY2xlT3JWaWRlbycpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0aW5nV3JhcHBlcnMoaDIsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vL2FyZzEgPSBoMSBvciBoMltpXVxyXG4vL2FyZzIgPSBhbW91bnQgbGluZXNcclxuLy9hcmczID0gYW1vdW50IHdvcmRzIGluIDEgbGluZVxyXG4vL2FyZzQgPSBhbW91bnQgd29yZHMgaW4gMiBsaW5lXHJcbi8vYXJnNSA9IGFtb3VudCB3b3JkcyBpbiAzIGxpbmVcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGluZ1dyYXBwZXJzKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUsIGFyZzYsIGFyZzcpIHtcclxuXHJcbiAgICAvL2ZvciBhZGFwdGl2ZVxyXG4gICAgLy9jb25zb2xlLmxvZyhhcmcxKTtcclxuICAgIC8vY29uc29sZS5sb2coYXJnMS5jaGlsZE5vZGVzLmxlbmd0aCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlc1swXSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFyZzEuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSlcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgYXJnMS5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgfVxyXG4gICAgaWYgKGFyZzEuY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PSAnRElWJykgeyAvL2NoZWNrcyBpZiBoMiBpcyBzcGxpdCBpbnRvIGxldHRlcnNcclxuICAgICAgICBsZXQgdG1wV29yZCA9IGFyZzEucXVlcnlTZWxlY3RvckFsbCgnLndyYXBwZXJGb3JXb3JkJyk7IC8vdGFrZXMgYWxsIHRoZSB3b3Jkc1xyXG4gICAgICAgIGxldCB0bXBBcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRtcFdvcmQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNoYXIgPSB0bXBXb3JkW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyU3ltYm9sJyk7IC8vdGFrZXMgYWxsIGNoYXJhY3RlcnMgaW4gZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2hhci5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFyW3ldLmlubmVySFRNTCkgICBcclxuICAgICAgICAgICAgICAgIHRtcEFyci5wdXNoKGNoYXJbeV0uaW5uZXJIVE1MKTsgLy/RgWhhciBwdXRzIGludG8gYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmICh5ID09IChjaGFyLmxlbmd0aCAtIDEpKSB7IC8vaWYgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgd29yZCwgdGhlbiBpdCB3aWxsIGFkZCBhIHNwYWNlIHRvIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgIHRtcEFyci5wdXNoKCcgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRtcEFycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcmcxLmlubmVySFRNTCA9IFwiXCI7IC8vd2lsbCBjbGVhciBoMlxyXG4gICAgICAgIGFyZzEuaW5uZXJIVE1MID0gdG1wQXJyLmpvaW4oXCJcIik7IC8vdGhlIGxpbmUgY2xlYXJlZCBvZiB3cmFwcGVycyB3aWxsIGJlIGFkZGVkIHRvIGgyXHJcbiAgICAgICAgLy9hcmcxLmFwcGVuZCh0bXBBcnIuam9pbihcIlwiKSk7XHJcbiAgICB9XHJcbiAgICAvKmlmKGFyZzEuY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpbmUnKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygncnJycnJycnInKVxyXG4gICAgfSovXHJcblxyXG4gICAgc3RyaW5nSCA9IGFyZzEuaW5uZXJIVE1MOyAvL3RoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IChzdHJpbmcpIGlzIHB1dCBpbnRvIGEgdmFyaWFibGVcclxuICAgIGFyZzEuaW5uZXJIVE1MID0gJyc7IC8vemVyb2luZyBjb250ZW50IHRvIGFkZCB3cmFwcGVycyB3aXRoIGNvbnRlbnRcclxuICAgIGFycmF5TGV0dGVyc0ggPSBbXSAvL2FycmF5IHplcm9pbmcgPz8/IGl0IHNlZW1zIHRvIGJlIHJlc2V0IHRvIHplcm8gYXJvdW5kIGxpbmUgMjA5ID8/P1xyXG4gICAgZm9yIChsZXQgY2hhciBvZiBzdHJpbmdIKSB7IC8vdGhlIHN0cmluZyBpcyBzcGxpdCBpbnRvIGNoYXJhY3RlcnMgYW5kIGFkZGVkIHRvIHRoZSBhcnJheVxyXG4gICAgICAgIGFycmF5TGV0dGVyc0gucHVzaChjaGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxldHRlcnNILmxlbmd0aDsgKytpKSB7IC8vY291bnQgd29yZHMgaW4gYSBsaW5lLCByZWxhdGl2ZSB0byAnICdcclxuICAgICAgICBpZiAoYXJyYXlMZXR0ZXJzSFtpXSA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGxlbmdodEFyciA9IGFycmF5TGV0dGVyc0gubGVuZ3RoO1xyXG5cclxuICAgIGlmIChhcmcyID09IDEpIHsgLy9pZiB5b3UgbmVlZCB0byBtYWtlIGEgbGluZSBpbiAxIGxpbmVcclxuICAgICAgICBsZXQgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vY3JlYXRpbmcgYSBsaW5lIGFuZCBhZGRpbmcgaXQgdG8gYW4gZWxlbWVudCAoSDEgb3IgSDIpXHJcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgYXJnMS5hcHBlbmQobGluZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKGFyZzIgPiAxKSB7IC8vaWYgeW91IG5lZWQgdG8gbWFrZSBhIGxpbmUgaW4gMiBsaW5lcyBvciBtb3JlXHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBhcmcyOyArK3kpIHsgLy8geSA8IGFyZzIoMykgPSBtYWtlIDMgbGluZXMgXHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGluZyBhIGxpbmUgYW5kIGFkZGluZyBpdCB0byBhbiBlbGVtZW50IChIMSBvciBIMilcclxuICAgICAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XHJcbiAgICAgICAgICAgIGFyZzEuYXBwZW5kKGxpbmUpO1xyXG4gICAgICAgICAgICBpZiAoeSA9PSAwKSB7IC8vMVNUIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzM7ICsraSkgeyAvLyAgaSA8IGFyZzMoMikgPSAgMiB3b3JkcyBpbiBsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAxKSB7IC8vMk5EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzQ7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzQoMykgPSAgMyB3b3JkcyBpbiBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSkgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSA9PSAyKSB7IC8vM05EIExJTkUgU0VUVElOR1MgXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZzU7ICsraSkgeyAvLyAvLyAgaSA8IGFyZzUoMikgPSAgMiB3b3JkcyBpbiAgbGluZSBcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGluZ1dyYXBwZXJzV29yZHNTeW1ib2xzKGxpbmUpOyAvL2FwcHJveGltYXRlbHkgb24gbGluZSAxNzZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh5ID09IDMpIHsgLy80TkQgTElORSBTRVRUSU5HUyBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnNjsgKytpKSB7IC8vIC8vICBpIDwgYXJnNigyKSA9ICAyIHdvcmRzIGluICBsaW5lIFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMobGluZSk7IC8vYXBwcm94aW1hdGVseSBvbiBsaW5lIDE3NlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgPT0gNCkgeyAvLzVORCBMSU5FIFNFVFRJTkdTIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmc3OyArK2kpIHsgLy8gLy8gIGkgPCBhcmc3KDIpID0gIDIgd29yZHMgaW4gIGxpbmUgXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRpbmdXcmFwcGVyc1dvcmRzU3ltYm9scyhsaW5lKTsgLy9hcHByb3hpbWF0ZWx5IG9uIGxpbmUgMTc2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0aW5nV3JhcHBlcnNXb3Jkc1N5bWJvbHMoYXJnMSkge1xyXG4gICAgICAgIC8vYnkgdGhlIHRlcm0gd29yZCBhbmQgc3ltYm9sLCB3ZSBtZWFuIGEgd3JhcHBlciBmb3IgYSB3b3JkIGFuZCBzeW1ib2xcclxuICAgICAgICBsZXQgd3JhcHBlckZvcldvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAvL2NyZWF0aW9uIG9mIGEgd29yZFxyXG4gICAgICAgIHdyYXBwZXJGb3JXb3JkLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXJGb3JXb3JkJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuZ2h0QXJyOyArK3kpIHtcclxuICAgICAgICAgICAgaWYgKGFycmF5TGV0dGVyc0hbMF0gPT0gXCIgXCIpIHsgLy9pZiBpdCBlbmNvdW50ZXJzIFwiIFwiIC0gaXQgd2lsbCBkZWxldGUgaXRcclxuICAgICAgICAgICAgICAgIGFycmF5TGV0dGVyc0guc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyYXlMZXR0ZXJzSFswXSA9PSB1bmRlZmluZWQpIGJyZWFrOyAvL2lmIHRoZSBhcnJheSBpcyBvdmVyIC0gc3RvcFxyXG4gICAgICAgICAgICBsZXQgZGl2Rm9yU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgLy9jcmVhdGlvbiBvZiBhIHN5bWJvbFxyXG4gICAgICAgICAgICBkaXZGb3JTeW1ib2wuY2xhc3NMaXN0LmFkZCgnd3JhcHBlclN5bWJvbCcpO1xyXG4gICAgICAgICAgICBkaXZGb3JTeW1ib2wuaW5uZXJIVE1MID0gYXJyYXlMZXR0ZXJzSFswXTsgLy9hZGRpbmcgYSBzeW1ib2wgZnJvbSBhbiBhcnJheSB0byBhIHdyYXBwZXIoc3ltYm9sKVxyXG4gICAgICAgICAgICB3cmFwcGVyRm9yV29yZC5hcHBlbmQoZGl2Rm9yU3ltYm9sKTsgLy9hZGRpbmcgYSBzeW1ib2wgdG8gYSB3b3JkXHJcbiAgICAgICAgICAgIGFycmF5TGV0dGVyc0guc3BsaWNlKDAsIDEpOyAvL3JlbW92ZSBhZGRlZCBjaGFyYWN0ZXIgZnJvbSBhcnJheVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXJnMS5hcHBlbmQod3JhcHBlckZvcldvcmQpOyAvL2FkZGluZyBhIHdvcmQgd2l0aCBzeW1ib2xzIHRvIHRoZSBjcmVhdGVkIGxpbmUgKHRoZSBsaW5lIHdhcyBjcmVhdGVkIGF0IGFib3V0IDE3NSBhbmQgMTg0KVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2gyIGNoYXIgcHJlcCBmb3IgYW5pbVxyXG5cclxuaWYgKGgyICE9IG51bGwpIHtcclxuICAgIGNvbnN0IGgyQ2hhciA9IGgyLnF1ZXJ5U2VsZWN0b3JBbGwoJy53cmFwcGVyU3ltYm9sJylcclxuICAgIC8vY29uc29sZS5sb2coaDJDaGFyKTtcclxuICAgIGxldCB0bXBIMkNoYXJUcmFuc1kgPSAwO1xyXG4gICAgZm9yIChsZXQgY2hhciBvZiBoMkNoYXIpIHsgLy93aWxsIG1ha2UgYSBsYWRkZXJcclxuICAgICAgICBjaGFyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dG1wSDJDaGFyVHJhbnNZICogMC41fXB4KWA7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFyKVxyXG4gICAgICAgIHRtcEgyQ2hhclRyYW5zWSArPSAxNTtcclxuICAgIH1cclxufSIsImNvbnN0IGNvbnNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIC5jb25zZW50Jyk7IC8vdGFrZSBhbGwgZWxlbWVudHMgd2l0aCBjbGFzcyAuY29uc2VudFxyXG5cclxuLy90aGVyZSBpcyBhIGRpdiB3aXRoIGNsYXNzIGNvbmNlbnQuIEluIGNvbnNlbnQgdGhlcmUgYXJlIDIgZWxlbWVudHMgaW5wdXQgYW5kIGxhYmVsXHJcbi8vdGhlIG5leHQgZWxlbWVudCBhZnRlciB0aGUgY29uc2VudCBpcyB0aGUgYnV0dG9uIGVsZW1lbnRcclxuXHJcbmZvciggbGV0IGl0ZW0gb2YgY29uc2VudCl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbGxlY3Rpb24gZW51bWVyYXRpb25cclxuICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgLy9hZGQgY2xpY2sgZXZlbnQgdG8gZWFjaCBuZXh0IGl0ZW0oYnV0dG9uKSBmcm9tIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoICFlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkTm9kZXNbMV0uY2hlY2tlZCApeyAvL2lmIHRoZSBsYWJlbCBpcyBub3QgaW4gdGhlIGNoZWNrZWQgc3RhdGVcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZW4gdGhlIGJ1dHRvbiBkb2VzIG5vdCB3b3JrXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RoaXMgaXMgbmVjZXNzYXJ5IGZvciB0aGUgdXNlciB0byBhZ3JlZSB0byB0aGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Rlcm1zIG9mIHBlcnNvbmFsIGRhdGEgcHJvY2Vzc2luZyBcclxuICAgIH0pO1xyXG59O1xyXG4iLCIvL0ZvciBob3dUb0J1eS5odG1sLCBibG9nLmh0bWwsIGFjY291bnQuaHRtbCwgcXVlc3Rpb25zLmh0bWxcclxuXHJcbmNvbnN0IGl0ZW1zQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JDYXRlZ29yeUFsbFBhZ2VzIHAnKTsgLy9pbiB0aGUgZWxlbWVudCB3aXRoIHRoZSBjbGFzcyByYWRpby1jYXRlZ29yeSwgYWxsIGlucHV0cyBvZiB0aGUgcmFkaW8gdHlwZSBhcmUgdGFrZW5cclxuY29uc3QgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFuY2hvcl0nKSAvL2NvbGxlY3Rpb24gb2YgYWxsIGVsZW1lbnRzIHdpdGggYXR0cmlidXRlIGRhdGEtYW5jaG9yXHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlciAuZm9vdGVyLWNvbnRhaW5lcicpO1xyXG5cclxuaXRlbXNDYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zQ2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0ZWQnKSkge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbUNvbGxlY3Qgb2YgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdykgeyAvL2l0ZXJhdGUgb3ZlciBhbGwgZWxlbWVudHMgd2l0aCBkYXRhLWFuY2hvciBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgaXRlbUNvbGxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpOyAvL2FsbCBlbGVtZW50cyB3aXRoIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGUgYXJlIGFzc2lnbmVkIHRoZSBoaWRlIGNsYXNzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1Db2xsZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09ICdhbGwtYmxvZycpIHsgLy9mb3IgYmxvZy5odG1sIC8vaWYgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBpZCBpcyAnYWxsLWJsb2cnLCB0aGVuIGFsbCBlbGVtZW50cyB3aXRoIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGUgd2lsbCBoYXZlIHRoZSBoaWRlIGNsYXNzIHJlbW92ZWRcclxuICAgICAgICAgICAgICAgIGl0ZW1Db2xsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlkID09IGl0ZW1Db2xsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSkgeyAvL3RoZXJlIGFyZTogMS4gaW5wdXQgd2l0aCBjaGFuZ2UgZXZlbnQgMi4gZWxlbWVudCAoZGl2IG9yIHApIHdpdGggZGF0YS1hbmNob3IgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICBpdGVtQ29sbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7IC8vIGlmIGlucHV0IGlkIG1hdGNoZXMgZWxlbWVudCAoZGl2IG9yIHApIGRhdGEtYW5jaG9yIGF0dHJpYnV0ZSwgdGhlbiByZW1vdmUgY2xhc3MgaGlkZSBmcm9tIGVsZW1lbnQgKGRpdiBvciBwKVxyXG4gICAgICAgICAgICAgICAgLy9maXggZGlzcGxheSBmb290ZXIgb24gaG93VG9CdXkuaHRtbCAoZm9yIGFuaW1hdGVGb290ZXIuanMpXHJcbiAgICAgICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyVmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvd1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ3F1ZXN0aW9uc19fcXVlc3Rpb24tYW5kLWFuc3dlcicpKSB7XHJcbiAgICAgICAgICAgIGFsaWduQm9keSgpOyAvL29ubHkgZm9yIHF1ZXN0aW9ucy5odG1sLCBzbyB0aGF0IHNtb290aCBzY3JvbGxpbmcgd29ya3NcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3dbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdibG9nX19yZXZpZXdzJykpIHtcclxuICAgICAgICAgICAgYWxpZ25Cb2R5KCk7IC8vb25seSBmb3IgYmxvZy5odG1sLCBzbyB0aGF0IHNtb290aCBzY3JvbGxpbmcgd29ya3NcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vL2NvbnNvbGUubG9nKGl0ZW1zQ2F0ZWdvcmllc1swXSk7XHJcblxyXG4vL2NvbnNvbGUubG9nKGl0ZW1zQ2F0ZWdvcmllc1swXS5jaGlsZE5vZGVzWzFdLnRhZ05hbWUpO1xyXG5cclxuLy9mb3IgYmxvZy5odG1sIC8vY291bnRpbmcgdGhlIG51bWJlciBvZiBhbGwgYXJ0aWNsZXMgYW5kIGJ5IGNhdGVnb3JpZXNcclxuaWYgKGl0ZW1zQ2F0ZWdvcmllc1swXS5jaGlsZE5vZGVzWzFdKSB7IC8vY2hlY2sgdGhhdCB0aGlzIHBpZWNlIG9mIGNvZGUgb25seSB3b3JrcyBvbiB0aGUgYmxvZy5odG1sXHJcblxyXG4gICAgLy9jb3VudGluZyBhbGwgYXJ0aWNsZXNcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBmb3IgKGxldCBpdGVtQ29sbGVjdCBvZiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtQ29sbGVjdC5jaGlsZE5vZGVzKTsvL05vZGVMaXN0IGZvcm1hdDogdGV4dCwgZGl2LmJsb2ctYXJ0aWNsZS1taW47IHRleHQsIGRpdi5ibG9nLWFydGljbGUtbWluOyBldGMuIFxyXG4gICAgICAgIC8vb25seSBkaXYuYmxvZy1hcnRpY2xlLW1pbiBuZWVkIHRvIGJlIGNvdW50ZWQsIFRoYXQncyB3aHkgLT4gaXRlbUNvbGxlY3QuY2hpbGROb2Rlcy5sZW5ndGggLyAyXHJcbiAgICAgICAgLy90aGVyZSBpcyB0ZXh0IGF0IHRoZSBlbmQgb2YgdGhlIG5vZGVsaXN0LCB0aGUgdGV4dCBuZWVkcyB0byBiZSByZW1vdmVkLCBUaGF0J3Mgd2h5IC0+IGl0ZW1Db2xsZWN0LmNoaWxkTm9kZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgIGNvdW50ICs9IChpdGVtQ29sbGVjdC5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpIC8gMiAvL3Rocm93IGludG8gdGhlIGNvdW50XHJcbiAgICB9XHJcbiAgICBpdGVtc0NhdGVnb3JpZXNbMF0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBjb3VudDsgLy9hZGQgY291bnRlZCBhcnRpY2xlcyB0byBodG1sXHJcblxyXG4gICAgLy9jb3VudGluZyBhcnRpY2xlcyBieSBjYXRlZ29yeVxyXG4gICAgaXRlbXNDYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHsgLy8gZm9yIGVhY2ggaXRlbSBmcm9tIHRoZSBjb2xsZWN0aW9uIGl0ZW1zQ2F0ZWdvcmllc1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW1Db2xsZWN0IG9mIGNvbGxlY3Rpb25PZkVsZW1lbnRzRm9yaGlkZVNob3cpIHsgLy9pdGVyYXRlIG92ZXIgYWxsIGVsZW1lbnRzIHdpdGggZGF0YS1hbmNob3IgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09IGl0ZW1Db2xsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSkgeyAvL2lmIGl0ZW0uaWQgbWF0Y2hlcyB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIG9mIGFuIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbiBjb2xsZWN0aW9uT2ZFbGVtZW50c0ZvcmhpZGVTaG93XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gKGl0ZW1Db2xsZWN0LmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkgLyAyOyAvLyB0aGVuIGZyb20gdGhlIGlucHV0IGdvIHRvIHRoZSBsYWJlbCwgYW5kIGluIHRoZSBsYWJlbCBmaW5kIHRoZSBzcGFuIGFuZCBhc3NpZ24gdGhlIHZhbHVlIG9mIHRoZSBjb3VudGVkIGFydGljbGVzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDaGVja2VkUmFkaW9CbG9nKCkgeyAvL3RvIGdvIGZyb20gdGhlIGNhcmQuaHRtbCBwYWdlOyBzZWN0aW9uIGNhcmQtaGVscGZ1bC1pbmZvcm1hdGlvbiAtPiBjYXJkLWhlbHBmdWwtaW5mb3JtYXRpb25fX2FydGljbGVzXHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVtc0NhdGVnb3JpZXMpIHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMV0pIHsgLy9odHRwczovL2xpdmViYWN0ZXJpYS5sb2NhbC9ibG9nLmh0bWw/dmlkZW8tYnJvYWRjYXN0cyAtIHdpbGwgb25seSB0YWtlIHZpZGVvLWJyb2FkY2FzdHNcclxuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpOyAvL3dpbGwgc2V0IHRoZSBjaGVja2VkIHN0YXRlIHRvIHRoZSBpbnB1dCB3aG9zZSBpZCBtYXRjaGVzIHRoZSBsaW5rIGFkZHJlc3NcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbUNvbGxlY3Qgb2YgY29sbGVjdGlvbk9mRWxlbWVudHNGb3JoaWRlU2hvdykge1xyXG4gICAgICAgICAgICAgICAgaXRlbUNvbGxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZScpOyAvL2FsbCBlbGVtZW50cyB3aXRoIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGUgYXJlIGFzc2lnbmVkIHRoZSBoaWRlIGNsYXNzXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbGxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVsxXSkgeyAvL2lmIHRoZSB2YWx1ZSBvZiB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlIG1hdGNoZXMgdGhlIHNwbGl0IGxpbmsgYWRkcmVzcyAoMm5kIHBhcnQpLCBcclxuICAgICAgICAgICAgICAgICAgICBpdGVtQ29sbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7IC8vIHRoZW4gdGhlICdoaWRlJyBjbGFzcyB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGlzIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59OyIsIi8vZm9yIGFjY291bnQuaHRtbCBhbmQgY2FyZC5odG1sXHJcblxyXG5jb25zdCBibG9ja1RoYXRIYXNDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2NrLXRoYXQtaGFzLWNvdW50ZXInKTtcclxubGV0IGFsbEdvb2RzQmFza2V0O1xyXG5sZXQgdG90YWw7XHJcbmxldCB0b3RhbFByaWNlO1xyXG5sZXQgYWRkaXRpb25hbEluZm9Db3VudGVyO1xyXG5cclxuXHJcbi8vZm9yIGFjY291bnQuaHRtbFxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2Jhc2tldCcpKSB7XHJcbiAgICBhbGxHb29kc0Jhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50X19iYXNrZXQgLnByaWNlLXJlbGF0aXZlLWlucHV0Jyk7Ly90aGUgcHJpY2UgaXMgdGFrZW4gcmVsYXRpdmUgdG8gdGhlIGlucHV0XHJcbiAgICB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X190b3RhbCcpOyAvL2EgYmxvY2sgaXMgdGFrZW4gaW4gd2hpY2ggdGhlcmUgaXMgYW4gZWxlbWVudCB3aXRoIGEgdG90YWwgcHJpY2VcclxuICAgIHRvdGFsUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fdG90YWwgLnByaWNlJyk7Ly90aGUgdG90YWwgcHJpY2UgaXMgdGFrZW5cclxufVxyXG5cclxuXHJcblxyXG5ibG9ja1RoYXRIYXNDb3VudGVyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGxldCBpbmNyZW1lbnRCdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5pbmNyZW1lbnQtYnRuJyk7XHJcbiAgICBsZXQgZGVjcmVtZW50QnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZGVjcmVtZW50LWJ0bicpO1xyXG4gICAgbGV0IGlucHV0Q291bnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyLXZhbHVlJyk7XHJcblxyXG4gICAgbGV0IHByaWNlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJpY2UtcmVsYXRpdmUtaW5wdXQnKTsgLy90YWtlcyBhIHN0cmluZyB3aXRoIGEgcHJpY2UgdGhhdCBkZXBlbmRzIG9uIHRoZSBpbnB1dFxyXG4gICAgbGV0IHByaWNlSW5pdGlhbFZhbHVlID0gcHJpY2UuaW5uZXJIVE1MLnNsaWNlKDAsIC0yKTsgICAgLy90YWtlcyB0aGUgaW5pdGlhbCBwcmljZSBiZWZvcmUgYW55IGFjdGlvbnMgd2l0aCB0aGUgY291bnRlclxyXG5cclxuICAgIC8vZm9yIGNhcmQuaHRtbFxyXG4gICAgbGV0IGRpc2NvdW50O1xyXG4gICAgbGV0IHByaWNlSW5pdERpc2NvdW50O1xyXG4gICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3Rvcignc3VwJykpIHsgLy9jaGVjayBpZiBlbGVtZW50IHdpdGggc3VwIHRhZyBleGlzdHNcclxuICAgICAgICBkaXNjb3VudCA9IGl0ZW0ucXVlcnlTZWxlY3Rvcignc3VwJyk7Ly90YWtlcyBhbiBlbGVtZW50IHdpdGggdGhlIHN1cCB0YWdcclxuICAgICAgICBwcmljZUluaXREaXNjb3VudCA9IGRpc2NvdW50LmlubmVySFRNTC5zbGljZSgwLCAtMik7Ly90YWtlcyB0aGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgb2xkIHByaWNlIGJlZm9yZSBhbnkgYWN0aW9ucyB3aXRoIHRoZSBjb3VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgLy9mb3IgYWNjb3VudC5odG1sXHJcbiAgICBsZXQgZGlzY0FmdGVyQ291bnQ7XHJcbiAgICBsZXQgcHJpY2VJbml0RGlzY0FmdGVyQ291bnQ7XHJcbiAgICBpZiAoaXRlbS5xdWVyeVNlbGVjdG9yKCcuZGlzYyBzcGFuJykpIHsgLy9jaGVja3MgaWYgdGhlcmUgaXMgYW4gZWxlbWVudCB3aXRoIGNsYXNzIGRpc2MgdGhhdCBoYXMgc3BhblxyXG4gICAgICAgIGRpc2NBZnRlckNvdW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuZGlzYyBzcGFuJyk7Ly90YWtlcyBhbiBlbGVtZW50IHdpdGggdGhlIHNwYW4gdGFnXHJcbiAgICAgICAgcHJpY2VJbml0RGlzY0FmdGVyQ291bnQgPSBkaXNjQWZ0ZXJDb3VudC5pbm5lckhUTUwuc2xpY2UoMCwgLTIpOy8vdGFrZXMgdGhlIGluaXRpYWwgZGlzY291bnQgdmFsdWUgYmVmb3JlIGFueSBhY3Rpb25zIGFyZSBwZXJmb3JtZWQgb24gdGhlIGNvdW50ZXJcclxuICAgIH1cclxuXHJcbiAgICAvL2ZvciBhY2NvdW50Lmh0bWxcclxuICAgIGxldCB0YXg7XHJcbiAgICBsZXQgcHJpY2VJbml0VGF4O1xyXG4gICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3RvcignLnRheCBzcGFuJykpIHsgICAvL2NoZWNrcyBpZiB0aGVyZSBpcyBhbiBlbGVtZW50IHdpdGggY2xhc3MgdGF4IHRoYXQgaGFzIHNwYW5cclxuICAgICAgICB0YXggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy50YXggc3BhbicpOy8vdGFrZXMgYW4gZWxlbWVudCB3aXRoIHRoZSBzcGFuIHRhZ1xyXG4gICAgICAgIHByaWNlSW5pdFRheCA9IHRheC5pbm5lckhUTUwuc2xpY2UoMCwgLTIpOy8vdGFrZXMgdGhlIGluaXRpYWwgdGF4IHZhbHVlIGJlZm9yZSBhbnkgYWN0aW9ucyBhcmUgcGVyZm9ybWVkIG9uIHRoZSBjb3VudGVyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluY3JlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBOdW1iZXIoaW5wdXRDb3VudC52YWx1ZSk7Ly90YWtlcyB0aGUgc3RyaW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBhbmQgY29udmVydHMgaXQgdG8gYSBudW1iZXJcclxuICAgICAgICBsZXQgaW5jcmVhc2VJbnB1dFZhbHVlID0gKytpbnB1dFZhbHVlOy8vdGhlIHZhcmlhYmxlIHdpbGwgYmUgbmVlZGVkIHRvIHdvcmsgd2l0aCBkaXNjb3VudCBhbmQgcHJpY2VcclxuICAgICAgICBpbnB1dENvdW50LnZhbHVlID0gaW5jcmVhc2VJbnB1dFZhbHVlO1xyXG5cclxuICAgICAgICBjaGFuZ2VQcmljZShpbmNyZWFzZUlucHV0VmFsdWUpOyAvL3RyYW5zaXRpb24gdG8gMTA5XHJcblxyXG4gICAgICAgIC8vZm9yIGFjY291bnQuaHRtbFxyXG4gICAgICAgIGdyb3dJbnB1dChpbmNyZWFzZUlucHV0VmFsdWUpOy8vdHJhbnNpdGlvbiB0byAxMjlcclxuXHJcbiAgICAgICAgLy9mb3IgYWNjb3VudC5odG1sXHJcbiAgICAgICAgaWYgKGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnYWRkaXRpb25hbC1pbmZvLWNvdW50ZXInKSkge1xyXG4gICAgICAgICAgICBhZGRpdGlvbmFsSW5mb0NvdW50ZXIgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgY291bnRUaGVCb3hlcyhpbmNyZWFzZUlucHV0VmFsdWUpOy8vdHJhbnNpdGlvbiB0byAxNDJcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2Jhc2tldCcpKXtcclxuICAgICAgICAgICAgY291bnRBbGxQcmljZSgpOy8vdHJhbnNpdGlvbiB0byAxNTBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgIH0pO1xyXG4gICAgZGVjcmVtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vZXZlcnl0aGluZyBpcyBleGFjdGx5IHRoZSBzYW1lIGFzIGluIGluY3JlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycuLi5cclxuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IE51bWJlcihpbnB1dENvdW50LnZhbHVlKTtcclxuICAgICAgICBsZXQgZGVjcmVhc2VJbnB1dFZhbHVlID0gLS1pbnB1dFZhbHVlO1xyXG4gICAgICAgIGlmIChkZWNyZWFzZUlucHV0VmFsdWUgPj0gMSkgeyAvL3ByZXZlbnRzIHRoZSBjb3VudGVyIGZyb20gZ29pbmcgbmVnYXRpdmVcclxuICAgICAgICAgICAgaW5wdXRDb3VudC52YWx1ZSA9IGRlY3JlYXNlSW5wdXRWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZVByaWNlKGRlY3JlYXNlSW5wdXRWYWx1ZSk7IC8vdHJhbnNpdGlvbiB0byAxMDlcclxuXHJcbiAgICAgICAgICAgIGdyb3dJbnB1dChkZWNyZWFzZUlucHV0VmFsdWUpOyAgIC8vdHJhbnNpdGlvbiB0byAxMjlcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZGl0aW9uYWwtaW5mby1jb3VudGVyJykpIHtcclxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxJbmZvQ291bnRlciA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgY291bnRUaGVCb3hlcyhkZWNyZWFzZUlucHV0VmFsdWUpOy8vdHJhbnNpdGlvbiB0byAxNDJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19iYXNrZXQnKSl7XHJcbiAgICAgICAgICAgIGNvdW50QWxsUHJpY2UoKTsvL3RyYW5zaXRpb24gdG8gMTUwXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0Q291bnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpOy8vWW91IGNhbiBvbmx5IGVudGVyIG51bWJlcnNcclxuICAgICAgICAvL2V2ZXJ5dGhpbmcgaXMgZXhhY3RseSB0aGUgc2FtZSBhcyBpbiBpbmNyZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLi4uXHJcbiAgICAgICAgY2hhbmdlUHJpY2UoZS50YXJnZXQudmFsdWUpOy8vdHJhbnNpdGlvbiB0byAxMDlcclxuICAgICAgICBncm93SW5wdXQoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSk7Ly90cmFuc2l0aW9uIHRvIDEyOVxyXG5cclxuICAgICAgICBpZiAoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRpdGlvbmFsLWluZm8tY291bnRlcicpKSB7XHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxJbmZvQ291bnRlciA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBjb3VudFRoZUJveGVzKGUudGFyZ2V0LnZhbHVlKTsvL3RyYW5zaXRpb24gdG8gMTQyXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2Jhc2tldCcpKXtcclxuICAgICAgICAgICAgY291bnRBbGxQcmljZSgpOy8vdHJhbnNpdGlvbiB0byAxNTBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VQcmljZShwYXIpIHtcclxuICAgICAgICBwcmljZS5pbm5lckhUTUwgPSAocHJpY2VJbml0aWFsVmFsdWUgKiBwYXIpICsgJyDigr0nOy8vdGhlIGluaXRpYWwgcHJpY2UgdmFsdWUgaXMgbXVsdGlwbGllZCBieSB0aGUgY291bnRlciB2YWx1ZVxyXG5cclxuICAgICAgICAvL2ZvciBjYXJkLmh0bWxcclxuICAgICAgICBpZiAoaXRlbS5xdWVyeVNlbGVjdG9yKCdzdXAnKSkge1xyXG4gICAgICAgICAgICBkaXNjb3VudC5pbm5lckhUTUwgPSAocHJpY2VJbml0RGlzY291bnQgKiBwYXIpICsgJyDigr0nOy8vdGhlIHByaW5jaXBsZSBpcyB0aGUgc2FtZSBhcyB3aXRoIHByaWNlLmlubmVySFRNTCAoc2VlIGFib3ZlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9mb3IgYWNjb3VudC5odG1sXHJcbiAgICAgICAgaWYgKGl0ZW0ucXVlcnlTZWxlY3RvcignLmRpc2Mgc3BhbicpKSB7XHJcbiAgICAgICAgICAgIGRpc2NBZnRlckNvdW50LmlubmVySFRNTCA9IChwcmljZUluaXREaXNjQWZ0ZXJDb3VudCAqIHBhcikgKyAnIOKCvSc7Ly90aGUgcHJpbmNpcGxlIGlzIHRoZSBzYW1lIGFzIHdpdGggcHJpY2UuaW5uZXJIVE1MIChzZWUgYWJvdmUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2ZvciBhY2NvdW50Lmh0bWxcclxuICAgICAgICBpZiAoaXRlbS5xdWVyeVNlbGVjdG9yKCcudGF4IHNwYW4nKSkge1xyXG4gICAgICAgICAgICB0YXguaW5uZXJIVE1MID0gKHByaWNlSW5pdFRheCAqIHBhcikgKyAnIOKCvSc7Ly90aGUgcHJpbmNpcGxlIGlzIHRoZSBzYW1lIGFzIHdpdGggcHJpY2UuaW5uZXJIVE1MIChzZWUgYWJvdmUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBncm93SW5wdXQocGFyKSB7Ly9JdCBpcyBuZWNlc3NhcnkgdGhhdCB0aGUgaW5wdXQgYm94IGluY3JlYXNlcyBvciBkZWNyZWFzZXMgcmVsYXRpdmUgdG8gdGhlIG51bWJlciBvZiBkaWdpdHNcclxuICAgICAgICBpZiAocGFyID49IDEwICYmIHBhciA8IDEwMCkgey8vaWYgaW5wdXQgdmFsdWUgaXMgPj0gMTAgYW5kIDwgMTAwLCB3aWxsIGdpdmUgdGhlIGNvcnJlc3BvbmRpbmcgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdG8gZXh0ZW5kIHRoZSBpbnB1dFxyXG4gICAgICAgICAgICBpbnB1dENvdW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZXItdmFsdWUxMDAnKVxyXG4gICAgICAgICAgICBpbnB1dENvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXItdmFsdWUxMCcpXHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXIgPj0gMTAwICYmIHBhciA8PSAxMDAwKSB7XHJcblxyXG4gICAgICAgICAgICBpbnB1dENvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXItdmFsdWUxMDAnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0Q291bnQuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRlci12YWx1ZTEwJykvL3dpbGwgZGVjcmVhc2UgdGhlIHdpZHRoIG9mIHRoZSBpbnB1dCBpZiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGRlY3JlYXNlc1xyXG4gICAgICAgICAgICBpbnB1dENvdW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZXItdmFsdWUxMDAnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vZm9yIGFjY291bnQuaHRtbFxyXG4gICAgZnVuY3Rpb24gY291bnRUaGVCb3hlcyhwYXIpIHtcclxuICAgICAgICBpZiAoTWF0aC5mbG9vcihwYXIgLyAxMCkgPiAwKSB7Ly9pbmNyZWFzZUlucHV0VmFsdWUgZGl2aWRlIGJ5IDEwIGFuZCByb3VuZCBkb3duXHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxJbmZvQ291bnRlci5pbm5lckhUTUwgPSBNYXRoLmZsb29yKHBhciAvIDEwKSArICcg0LrQvtGALidcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRpdGlvbmFsSW5mb0NvdW50ZXIuaW5uZXJIVE1MID0gJyc7Ly9cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy9mb3IgYWNjb3VudC5odG1sXHJcbiAgICBmdW5jdGlvbiBjb3VudEFsbFByaWNlKCkge1xyXG4gICAgICAgIGxldCBzdW1QcmljZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbWFsbEdvb2RzQmFza2V0IG9mIGFsbEdvb2RzQmFza2V0KSB7Ly9lYWNoIGl0ZW0gdGFrZXMgYSBzdHJpbmcgd2l0aCBhIHByaWNlLCBjdXRzIGl0LCBjb252ZXJ0cyBpdCB0byBhIG51bWJlciwgXHJcbiAgICAgICAgICAgIHN1bVByaWNlICs9IE51bWJlcihpdGVtYWxsR29vZHNCYXNrZXQuaW5uZXJIVE1MLnNsaWNlKDAsIC0yKSk7IC8vYW5kIGFkZHMgdGhpcyBudW1iZXIgdG8gdGhlIHZhbHVlIG9mIHRoZSBzdW1QcmljZSB2YXJpYWJsZSAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRvdGFsUHJpY2UuaW5uZXJIVE1MID0gc3VtUHJpY2UgKyBcIiDigr1cIlxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKmNvbnN0IGluY3JlbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmNyZW1lbnQtYnRuJyk7XHJcbmNvbnN0IGRlY3JlbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWNyZW1lbnQtYnRuJyk7XHJcbmNvbnN0IGFsbElucHV0Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY291bnRlci12YWx1ZScpO1xyXG5cclxuXHJcbmluY3JlbWVudEJ0bi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgbGV0IHByaWNlSW5pdGlhbFZhbHVlID0gY3JlYXRlUHJpY2VJbml0aWFsVmFsdWUoaXRlbSk7XHJcblxyXG4gICAgbGV0IHByaWNlRGlzY0luaXRpYWxWYWx1ZTtcclxuICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzVdLnRhZ05hbWUgPT0gJ1NVUCcpIHtcclxuICAgICAgICBwcmljZURpc2NJbml0aWFsVmFsdWUgPSBjcmVhdGVQcmljZURpc2NJbml0aWFsVmFsdWUoaXRlbSlcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHByaWNlRGlzY0FmdGVyQ291bnRJbml0aWFsVmFsdWU7XHJcbiAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s5XS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1pbmZvLXByaWNlJykpIHtcclxuICAgICAgICBwcmljZURpc2NBZnRlckNvdW50SW5pdGlhbFZhbHVlID0gY3JlYXRlUHJpY2VEaXNjQWZ0ZXJDb3VudEluaXRpYWxWYWx1ZShpdGVtKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbOV0pXHJcblxyXG4gICAgbGV0IHRheEluaXRpYWxWYWx1ZTtcclxuICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzExXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1pbmZvLXByaWNlJykpIHtcclxuICAgICAgICB0YXhJbml0aWFsVmFsdWUgPSBjcmVhdGVUYXhJbml0aWFsVmFsdWUoaXRlbSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBOdW1iZXIoaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlKTtcclxuICAgICAgICBsZXQgaW5jcmVhc2VJbnB1dFZhbHVlID0gKytpbnB1dFZhbHVlO1xyXG4gICAgICAgIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZSA9IGluY3JlYXNlSW5wdXRWYWx1ZTtcclxuICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzNdLmlubmVySFRNTCA9IChwcmljZUluaXRpYWxWYWx1ZSAqIGluY3JlYXNlSW5wdXRWYWx1ZSkgKyAnIOKCvSc7XHJcblxyXG4gICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnYWRkaXRpb25hbENvdW50ZXJJbmZvJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKGluY3JlYXNlSW5wdXRWYWx1ZSAvIDEwKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gTWF0aC5mbG9vcihpbmNyZWFzZUlucHV0VmFsdWUgLyAxMCkgKyAnINC60L7RgC4nXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzVdLnRhZ05hbWUgPT0gJ1NVUCcpIHtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s1XS5pbm5lckhUTUwgPSAocHJpY2VEaXNjSW5pdGlhbFZhbHVlICogaW5jcmVhc2VJbnB1dFZhbHVlKSArICcg4oK9JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzldLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWluZm8tcHJpY2UnKSkge1xyXG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzldLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gKHByaWNlRGlzY0FmdGVyQ291bnRJbml0aWFsVmFsdWUgKiBpbmNyZWFzZUlucHV0VmFsdWUpICsgJyDigr0nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMTFdLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWluZm8tcHJpY2UnKSkge1xyXG4gICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzExXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9ICh0YXhJbml0aWFsVmFsdWUgKiBpbmNyZWFzZUlucHV0VmFsdWUpICsgJyDigr0nO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZGVjcmVtZW50QnRuLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHJcbiAgICBsZXQgcHJpY2VJbml0aWFsVmFsdWUgPSBjcmVhdGVQcmljZUluaXRpYWxWYWx1ZShpdGVtKTtcclxuXHJcbiAgICBsZXQgcHJpY2VEaXNjSW5pdGlhbFZhbHVlO1xyXG4gICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbNV0udGFnTmFtZSA9PSAnU1VQJykge1xyXG4gICAgICAgIHByaWNlRGlzY0luaXRpYWxWYWx1ZSA9IGNyZWF0ZVByaWNlRGlzY0luaXRpYWxWYWx1ZShpdGVtKVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcHJpY2VEaXNjQWZ0ZXJDb3VudEluaXRpYWxWYWx1ZTtcclxuICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzldLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWluZm8tcHJpY2UnKSkge1xyXG4gICAgICAgIHByaWNlRGlzY0FmdGVyQ291bnRJbml0aWFsVmFsdWUgPSBjcmVhdGVQcmljZURpc2NBZnRlckNvdW50SW5pdGlhbFZhbHVlKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0YXhJbml0aWFsVmFsdWU7XHJcbiAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtaW5mby1wcmljZScpKSB7XHJcbiAgICAgICAgdGF4SW5pdGlhbFZhbHVlID0gY3JlYXRlVGF4SW5pdGlhbFZhbHVlKGl0ZW0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBOdW1iZXIoaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWUpO1xyXG4gICAgICAgIGxldCBkZWNyZWFzZUlucHV0VmFsdWUgPSAtLWlucHV0VmFsdWVcclxuICAgICAgICBpZiAoZGVjcmVhc2VJbnB1dFZhbHVlID49IDEpIHtcclxuICAgICAgICAgICAgaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWUgPSBkZWNyZWFzZUlucHV0VmFsdWU7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbM10uaW5uZXJIVE1MID0gKHByaWNlSW5pdGlhbFZhbHVlICogZGVjcmVhc2VJbnB1dFZhbHVlKSArICcg4oK9JztcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRpdGlvbmFsQ291bnRlckluZm8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKGRlY3JlYXNlSW5wdXRWYWx1ZSAvIDEwKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IE1hdGguZmxvb3IoZGVjcmVhc2VJbnB1dFZhbHVlIC8gMTApICsgJyDQutC+0YAuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbNV0udGFnTmFtZSA9PSAnU1VQJykge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s1XS5pbm5lckhUTUwgPSAocHJpY2VEaXNjSW5pdGlhbFZhbHVlICogZGVjcmVhc2VJbnB1dFZhbHVlKSArICcg4oK9JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbOV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtaW5mby1wcmljZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzldLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gKHByaWNlRGlzY0FmdGVyQ291bnRJbml0aWFsVmFsdWUgKiBkZWNyZWFzZUlucHV0VmFsdWUpICsgJyDigr0nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxMV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtaW5mby1wcmljZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzExXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCA9ICh0YXhJbml0aWFsVmFsdWUgKiBkZWNyZWFzZUlucHV0VmFsdWUpICsgJyDigr0nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuYWxsSW5wdXRDb3VudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgbGV0IHByaWNlSW5pdGlhbFZhbHVlID0gY3JlYXRlUHJpY2VJbml0aWFsVmFsdWUoaXRlbSk7XHJcblxyXG4gICAgbGV0IHByaWNlRGlzY0luaXRpYWxWYWx1ZTtcclxuICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzVdLnRhZ05hbWUgPT0gJ1NVUCcpIHtcclxuICAgICAgICBwcmljZURpc2NJbml0aWFsVmFsdWUgPSBjcmVhdGVQcmljZURpc2NJbml0aWFsVmFsdWUoaXRlbSlcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHByaWNlRGlzY0FmdGVyQ291bnRJbml0aWFsVmFsdWU7XHJcbiAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s5XS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1pbmZvLXByaWNlJykpIHtcclxuICAgICAgICBwcmljZURpc2NBZnRlckNvdW50SW5pdGlhbFZhbHVlID0gY3JlYXRlUHJpY2VEaXNjQWZ0ZXJDb3VudEluaXRpYWxWYWx1ZShpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGF4SW5pdGlhbFZhbHVlO1xyXG4gICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMTFdLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWluZm8tcHJpY2UnKSkge1xyXG4gICAgICAgIHRheEluaXRpYWxWYWx1ZSA9IGNyZWF0ZVRheEluaXRpYWxWYWx1ZShpdGVtKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XHJcbiAgICAgICAgaWYgKCFpc05hTihlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbM10uaW5uZXJIVE1MID0gcHJpY2VJbml0aWFsVmFsdWUgKiBlLnRhcmdldC52YWx1ZSArICcg4oK9JztcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZGl0aW9uYWxDb3VudGVySW5mbycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoZS50YXJnZXQudmFsdWUgLyAxMCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBNYXRoLmZsb29yKGUudGFyZ2V0LnZhbHVlIC8gMTApICsgJyDQutC+0YAuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s1XS50YWdOYW1lID09ICdTVVAnKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzVdLmlubmVySFRNTCA9IHByaWNlRGlzY0luaXRpYWxWYWx1ZSAqIGUudGFyZ2V0LnZhbHVlICsgJyDigr0nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s5XS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1pbmZvLXByaWNlJykpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbOV0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwgPSBwcmljZURpc2NBZnRlckNvdW50SW5pdGlhbFZhbHVlICogZS50YXJnZXQudmFsdWUgKyAnIOKCvSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzExXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1pbmZvLXByaWNlJykpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMTFdLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID0gdGF4SW5pdGlhbFZhbHVlICogZS50YXJnZXQudmFsdWUgKyAnIOKCvSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE51bWJlcihlLnRhcmdldC52YWx1ZSkgPj0gMTAgJiYgTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSA8IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb3VudGVyLXZhbHVlMTAwJylcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY291bnRlci12YWx1ZTEwJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIoZS50YXJnZXQudmFsdWUpID49IDEwMCAmJiBOdW1iZXIoZS50YXJnZXQudmFsdWUpIDw9IDEwMDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2NvdW50ZXItdmFsdWUxMDAnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb3VudGVyLXZhbHVlMTAnKVxyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb3VudGVyLXZhbHVlMTAwJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByaWNlSW5pdGlhbFZhbHVlKHBhcikge1xyXG5cclxuICAgIGxldCBpbml0aWFsVmFsdWUgPSBOdW1iZXIocGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzNdLmlubmVySFRNTC5zbGljZSgwLCAtMikpO1xyXG5cclxuICAgIHJldHVybiBpbml0aWFsVmFsdWU7XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJpY2VEaXNjSW5pdGlhbFZhbHVlKHBhcikge1xyXG5cclxuICAgIGxldCBwcmljaW5pdGlhbFZhbHVlID0gTnVtYmVyKHBhci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1s1XS5pbm5lckhUTUwuc2xpY2UoMCwgLTIpKTtcclxuXHJcbiAgICByZXR1cm4gcHJpY2luaXRpYWxWYWx1ZTtcclxuXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJpY2VEaXNjQWZ0ZXJDb3VudEluaXRpYWxWYWx1ZShwYXIpIHtcclxuXHJcbiAgICBsZXQgaW5pdGlhbFZhbHVlID0gcGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzldLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MLnNsaWNlKDAsIC0yKTtcclxuXHJcbiAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xyXG5cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXhJbml0aWFsVmFsdWUocGFyKSB7XHJcblxyXG4gICAgbGV0IGluaXRpYWxWYWx1ZSA9IHBhci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxMV0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwuc2xpY2UoMCwgLTIpO1xyXG5cclxuICAgIHJldHVybiBpbml0aWFsVmFsdWU7XHJcblxyXG59OyovIiwiY29uc3QgYnRuTGlzdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2X19idXJnZXItd3JhcHBlci1mb3ItbGluZScpO1xyXG5jb25zdCBuYXZNYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdl9fbWFpbi1saXN0Jyk7XHJcbmJ0bkxpc3REcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xyXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8PSAxMDgzKSB7Ly9icm93c2VyIHdpbmRvdyB3aWR0aFxyXG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Nyb3NzJyk7ICAgICAgICAgLy93aGVuIGFkZGluZyBhIGNsYXNzIGZyb20gc3RpY2tzIG1ha2VzIGEgY3Jvc3NcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5hdk1haW5MaXN0LmNsYXNzTGlzdC5hZGQoJ2Ryb3AtZG93bl9faGVhZGVyX19uYXZfX21haW4tbGlzdCcpOy8vd2hlbiBhZGRpbmcgYSBjbGFzcywgaXQgbWFrZXMgYSBsaXN0IGRyb3AgZG93blxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zcycpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuYXZNYWluTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wLWRvd25fX2hlYWRlcl9fbmF2X19tYWluLWxpc3QnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIiwiLy9kcm9wIGRvd24gaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3QgYW5kIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0X19pdGVtX19sYXN0LWxpc3QgXHJcbmNvbnN0IGFycm93T3Blbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJyb3ctcmlndGgtd3JhcHBlcicpO1xyXG5hcnJvd09wZW5MaXN0LmZvckVhY2goKGl0ZW0pID0+IHsvL3doZW4geW91IGNsaWNrIG9uIHRoZSBhcnJvdyBhIGxpc3QgZHJvcCBkb3duXHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIWl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnb3Blbi1saXN0JykpIHsvL2l0IHdpbGwgYmUgZWl0aGVyIGhlYWRlcl9fbmF2X19tYWluLWxpc3RfX2l0ZW1fX3N1Yi1saXN0IG9yIGEgaGVhZGVyX19uYXZfX21haW4tbGlzdF9faXRlbV9fc3ViLWxpc3RfX2l0ZW1fX2xhc3QtbGlzdFxyXG4gICAgICAgICAgICBpdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdvcGVuLWxpc3QnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4tbGlzdCcpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhcnJvdy1yaWd0aC13cmFwcGVyLXJvdGF0ZScpKSB7Ly9zcGlucyBieSBhZGRpbmcgYSBjbGFzc1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Fycm93LXJpZ3RoLXdyYXBwZXItcm90YXRlJylcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuIiwiLy9iZWdpbiAvL2VsZW1lbnRzIGZvciBvcGVuaW5nIG1vZGFsIHdpbmRvd3NcclxuY29uc3Qgb3BlblJlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pdGVtc19fc2hvcHBpbmctY2FyZCcpO1xyXG5jb25zdCBvcGVuQ2FsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pdGVtc19fY2FsbCcpO1xyXG5jb25zdCBvcGVuTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pdGVtc19fYXV0aG9yaXphdGlvbicpO1xyXG5jb25zdCBvcGVuRm9yZ290WW91clBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9Gb3Jnb3QteW91ci1wYXNzd29yZCcpO1xyXG5jb25zdCBvcGVuR29Ub0xvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvVG9Mb2dpbicpO1xyXG5jb25zdCBvcGVuR29Ub1JlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub1JlZ2lzdHInKTtcclxuY29uc3Qgb3BlbkNvZGVGcm9tU21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9Db2RlRnJvbVNtcycpO1xyXG5jb25zdCBvcGVuTmV3UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub05ld1Bhc3N3b3JkJyk7XHJcbmNvbnN0IGNvbnRhY3RPcGVuTW9kYWxRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbHF1ZXN0aW9uJyk7Ly9mb3IgY29udGFjdHMuaHRtbFxyXG5jb25zdCB3aWRnZXRPcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2lkZ2V0LW9wZW4tbW9kYWwnKTsgLy9pbiB0aGUgd2lkZ2V0LCB0aGlyZCBpdGVtIGZyb20gdGhlIHRvcFxyXG4vL2VuZFxyXG5cclxuLy9iZWdpbiAvL21vZGFsIHdpbmRvd3NcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuY29uc3QgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2xvZ2luJyk7XHJcbmNvbnN0IHJlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3JlZ2lzdHInKTtcclxuY29uc3QgZm9yZ290WW91clBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19mb3Jnb3QteW91ci1wYXNzd29yZCcpO1xyXG5jb25zdCBjb2RlRnJvbVNtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29kZS1mcm9tLXNtcycpO1xyXG5jb25zdCBuZXdQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fbmV3LXBhc3N3b3JkJyk7XHJcbmNvbnN0IGNhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jYWxsYmFjaycpO1xyXG5jb25zdCBhc2tBUXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Fzay1hLXF1ZXN0aW9uJyk7XHJcbi8vZW5kXHJcblxyXG4vL2JlZ2luICAvL2Nsb3NlIG1vZGFsIHdpbmRvd3NcclxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuLy9lbmRcclxuXHJcbi8vYmVnaW4gLy9ldmVyeXRoaW5nIHJlbGF0ZWQgdG8gcHJpdmFjeSBwb2xpY3lcclxuY29uc3QgcG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcG9saXRpY3MnKTtcclxuY29uc3Qgb3BlblBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvVG9Qb2xpdGljcycpO1xyXG5jb25zdCBjbG9zZVBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXBvbGl0aWNzX19jbG9zZScpO1xyXG5jb25zdCBjbG9zZUJ0blBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvbGl0aWMtYnV0dG9uLWNsb3NlJyk7XHJcbi8vZW5kXHJcblxyXG4vL21vZGFsLnN0eWxlLmhlaWdodCA9IGAke21vZGFsLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDsvL2ZvciB0ZXh0YXJlYUdyb3cuanNcclxuXHJcblxyXG5cclxuXHJcbi8vY29uc3Qgb3Blbk1vZGFsUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtcmV3aWV3c19fbGVhdmUtZmVlZGJhY2snKTtcclxuLy9jb25zdCBtb2RhbFJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fcmV2aWV3Jyk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwsIGl0ZW0pIHsvL3BhcmFtZXRlciBtb2RhbCA9PSBvbiBsaW5lIDE1IC8gcGFyYW1ldGVyIGl0ZW0gPT0gbG9naW4gb3IgcmVnaXN0ciBhbmQgZXRjLiBvbiBsaW5lIDE2XHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSAhPSAtMSkgeyAvL2ZvciB0ZXh0YXJlYUdyb3cuanMgdG8gd29yayBpbiBGaXJlZm94IGJyb3dzZXJcclxuICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19hc2stYS1xdWVzdGlvbicpKXtcclxuICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnNldEF0dHJpYnV0ZShcIkNvbHNcIiwgYDI0YCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgfSBcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoZSkgey8vaWYgeW91IGNsaWNrIG9uIHNvbWV0aGluZyBvdGhlciB0aGFuIGEgbW9kYWwgd2luZG93LCBpdCB3aWxsIGNsb3NlIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICByZWdpc3RyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBjYWxsYmFjay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgbG9naW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGZvcmdvdFlvdXJQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY29kZUZyb21TbXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIG5ld1Bhc3N3b3JkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBhc2tBUXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIC8vbW9kYWxSZXZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT0gcG9saXRpY3MpIHtcclxuICAgICAgICBwb2xpdGljcy5jbGFzc0xpc3QuYWRkKCdoaWRlLXBvbGl0aWNzJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbG9zZWJ0bihlKSB7Ly9jbG9zZXMgbW9kYWwgd2luZG93IHdoZW4gY2xpY2tpbmcgb24gYnRuXHJcbiAgICBpZiAoZS50YXJnZXQgPT0gY2xvc2VQb2xpdGljcyB8fCBlLnRhcmdldCA9PSBjbG9zZUJ0blBvbGl0aWNzKSB7XHJcbiAgICAgICAgcG9saXRpY3MuY2xhc3NMaXN0LmFkZCgnaGlkZS1wb2xpdGljcycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgcmVnaXN0ci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgY2FsbGJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGxvZ2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBmb3Jnb3RZb3VyUGFzc3dvcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIGNvZGVGcm9tU21zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBuZXdQYXNzd29yZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgYXNrQVF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAvL21vZGFsUmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjbG9zZdChdXJyZW50T3BlbkxpbmsoY2xvc2UsIG9wZW4pIHsvL2Nsb3NlIG9uZSBtb2RhbCB3aW5kb3cgYW5kIG9wZW4gYW5vdGhlclxyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgb3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbG9zZdChdXJyZW50T3BlbmxvZ2luKGUpIHsvLyhlKSA9PSBvcGVuR29Ub0xvZ2luID09IGVsZW1lbnQgd2l0aCBjbGFzcyAuZ29Ub0xvZ2luLCBjbG9zZXN0KFwiLm1vZGFsX19ibG9ja1wiKSBpcyBzZXQgb24gdGhpcyBlbGVtZW50LlxyXG4gICAgZS50YXJnZXQuY2xvc2VzdChcIi5tb2RhbF9fYmxvY2tcIikuY2xhc3NMaXN0LmFkZCgnaGlkZScpOy8vd2hlbiBjbGlja2luZyBvbiBhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzIC5nb1RvTG9naW4sIFxyXG4gICAgbG9naW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpOyAgICAgICAgICAgICAgICAgICAgICAgICAvL2l0IHdpbGwgZ28gdGhyb3VnaCBhbGwgZWxlbWVudHMgaW5jbHVkaW5nIHBhcmVudHMgdXAgdG8gdGhlIHJvb3QgZWxlbWVudCB1bnRpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pdCBmaW5kcyBhbiBlbGVtZW50IHdpdGggdGhlIGNsYXNzIC5tb2RhbF9fYmxvY2ssIHN0b3AsIGFuZCBhZGQgdGhlIGNsYXNzIC5oaWRlIHRvIHRoaXMgZWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWxQb2xpdGljcygpIHtcclxuICAgIHBvbGl0aWNzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtcG9saXRpY3MnKTtcclxufVxyXG5cclxuXHJcbm9wZW5SZWdpc3RyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCByZWdpc3RyKSk7Ly9vbiBsaW5lIDQ3XHJcbm9wZW5DYWxsYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgY2FsbGJhY2spKTtcclxub3BlbkxvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKG1vZGFsLCBsb2dpbikpO1xyXG53aWRnZXRPcGVuTW9kYWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGNhbGxiYWNrKSk7XHJcbndpZGdldE9wZW5Nb2RhbFsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgYXNrQVF1ZXN0aW9uKSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuY2xvc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pIH0pOy8vb24gbGluZSA1OVxyXG5cclxub3BlbkdvVG9Mb2dpbi5mb3JFYWNoKChpdGVtKSA9PiB7IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZdChdXJyZW50T3BlbmxvZ2luKSB9KTtcclxuXHJcbm9wZW5Gb3Jnb3RZb3VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsobG9naW4sIGZvcmdvdFlvdXJQYXNzd29yZCkpOy8vb24gbGluZSA5M1xyXG5vcGVuR29Ub1JlZ2lzdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsobG9naW4sIHJlZ2lzdHIpKTtcclxub3BlbkNvZGVGcm9tU21zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGZvcmdvdFlvdXJQYXNzd29yZCwgY29kZUZyb21TbXMpKTtcclxub3Blbk5ld1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGNvZGVGcm9tU21zLCBuZXdQYXNzd29yZCkpO1xyXG5cclxub3BlblBvbGl0aWNzLmZvckVhY2goKGl0ZW0pID0+IHsvL29uIGxpbmUgMTA1XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsUG9saXRpY3MpO1xyXG59KTtcclxuY2xvc2VQb2xpdGljcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlYnRuKTsgICAvL29uIGxpbmUgNTlcclxuY2xvc2VCdG5Qb2xpdGljcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlYnRuKTsvL29uIGxpbmUgNTkgIFxyXG5cclxuXHJcbmlmKCBjb250YWN0T3Blbk1vZGFsUXVlc3Rpb24gKXtcclxuICAgIGNvbnRhY3RPcGVuTW9kYWxRdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgYXNrQVF1ZXN0aW9uKSk7XHJcbn07XHJcblxyXG4vL29wZW5Nb2RhbFJldmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Nb2RhbChtb2RhbCwgbW9kYWxSZXZpZXcpKTtcclxuXHJcblxyXG4iLCIvL2xldCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRlLXNob3ctcGFzc3dvcmQnKTsgLy8gZm9yIHZlci4gMVxyXG5sZXQgZXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV5ZScpO1xyXG5jb25zdCBidG5QYXNzQ2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQtY2hlY2snKTtcclxubGV0IG1lc3NhZ2VQYXNzTWlzbWF0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmRzLWRvLW5vdC1tYXRjaCcpO1xyXG5sZXQgdHdvSW5wdXRQYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhc3NDaGVjaycpO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb3BlbihlKSB7XHJcblxyXG4gICAgLy92ZXIuMSBUaGlzIHZlcnNpb24gb2YgdGhlIGNvZGUgaGlkL3Nob3dlZCB0aGUgcGFzc3dvcmQgZm9yIGFsbCBpbnB1dHMgd2hlbiBjbGlja2luZyBvbiB0aGUgZXllXHJcblxyXG4gICAgLypwYXNzd29yZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9ICd0ZXh0JztcclxuICAgICAgICAgICAgZXllLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1leWUnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLnR5cGUgPSAncGFzc3dvcmQnO1xyXG4gICAgICAgICAgICBleWUuZm9yRWFjaCgoZWxlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRlLWV5ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KSAgKi9cclxuXHJcbiAgICAvL05vdyBoaWRlcy9zaG93cyBvbmx5IHRoZSBpbnB1dCB0aGF0IHJlbGF0ZXMgdG8gdGhlIHByZXNzZWQgZXllXHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudHlwZSA9PSAncGFzc3dvcmQnKSB7Ly93aGVuIGNsaWNraW5nIG9uIHRoZSBleWUgaWYgdGhlIGlucHV0IGlzIG9mIHR5cGUgJ3Bhc3N3b3JkJ1xyXG4gICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudHlwZSA9ICd0ZXh0JzsgICAgICAgLy90aGVuIHJlcGxhY2Ugd2l0aCB0eXBlICd0ZXh0J1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZXllJykgICAgICAgICAgICAgICAgLy9vcGVuIGV5ZSB0aHJvdWdoIGNsYXNzIHJlbW92YWxcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID0gJ3Bhc3N3b3JkJzsvL290aGVyd2lzZSBhc3NpZ24gdGhlIHR5cGUgJ3Bhc3N3b3JkJyAocmVwbGFjZXMgc3ltYm9scyB3aXRoIGRvdHMpXHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZS1leWUnKTsgICAgICAgICAgICAgICAvL2FuZCB3aWxsIGNsb3NlIHRoZSBleWUgYXMgYSByZXN1bHQgb2YgYWRkaW5nIHRoZSBjbGFzc1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmV5ZS5mb3JFYWNoKChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbik7XHJcbn0pO1xyXG5cclxuXHJcbmJ0blBhc3NDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGlmICghKHR3b0lucHV0UGFzc1swXS52YWx1ZSA9PSB0d29JbnB1dFBhc3NbMV0udmFsdWUpKSB7IC8vaWYgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBmaWVsZCBkb2VzIG5vdCBtYXRjaCB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBmaWVsZFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGVuIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWRcclxuICAgICAgICBtZXNzYWdlUGFzc01pc21hdGNoLmlubmVySFRNTCA9ICfQndC10YHQvtCy0L/QsNC00LXQvdC40LUg0L/QsNGA0L7Qu9C10LknOy8vYW5kIHdpbGwgZGlzcGxheSBhIG1lc3NhZ2UgYWJvdXQgdGhlIHBhc3N3b3JkIG1pc21hdGNoXHJcbiAgICB9O1xyXG5cclxufSk7XHJcblxyXG50d29JbnB1dFBhc3MuZm9yRWFjaCgoaXRlbSkgPT4geyAgICAgICAgICAvL3dpdGggZWFjaCBuZXcgZW50cnkgaXQgd2lsbCBkZWxldGUgdGhlIG1lc3NhZ2UgYWJvdXQgcGFzc3dvcmQgbWlzbWF0Y2hcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VQYXNzTWlzbWF0Y2guaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTsiLCIvL2ZvciBmb3JQYXJ0bmVycy5odG1sLCBhY2NvdW50Lmh0bWwsIHBsYWNpbmdBbk9yZGVyLmh0bWwsXHJcbmNvbnN0IHJhZGlvUGVyc29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpZWxkc2V0X19pdGVtIGlucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG5jb25zdCBmb3JtSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdtYWluIC5mb3JtX19pdGVtJyk7XHJcbmNvbnN0IGRlbGl2ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWFpbiBbZGF0YS1oaWRlLWRlbGl2ZXJ5XScpOy8vZm9yIGRlbGl2ZXJ5IG1ldGhvZCBvbiBwYWdlIHBsYWNpbmdBbk9yZGVyLmh0bWxcclxuXHJcblxyXG5cclxuXHJcbnJhZGlvUGVyc29uLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW1mb3JtSXRlbXMgb2YgZm9ybUl0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtZm9ybUl0ZW1zLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7Ly9yZXZlYWxzIGFsbCBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgaXRlbWZvcm1JdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICAgICAgICAgIGFsaWduQm9keSgpLy9mb3Igc2NyaXB0L2FuaW1hdGlvbi5qcyAoc21vb3RoU2Nyb2xsKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PSBpdGVtZm9ybUl0ZW1zLmdldEF0dHJpYnV0ZSgnZGF0YS1oaWRlJykpIHsvL2lmIHRoZSByYWRpb1BlcnNvbiBpZCBtYXRjaGVzIHRoZSBkYXRhLWhpZGUgb2YgdGhlIGZvcm0gZWxlbWVudCwgaXQgd2lsbCBoaWRlIGl0XHJcbiAgICAgICAgICAgICAgICBpdGVtZm9ybUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgYWxpZ25Cb2R5KCkvL2ZvciBzY3JpcHQvYW5pbWF0aW9uLmpzIChzbW9vdGhTY3JvbGwpIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpID09ICdkZWxpdmVyeScpIHsvL3NpbWlsYXJseSwgc2VlIGFib3ZlXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW1kZWxpdmVyeSBvZiBkZWxpdmVyeSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbWRlbGl2ZXJ5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gaXRlbWRlbGl2ZXJ5LmdldEF0dHJpYnV0ZSgnZGF0YS1oaWRlLWRlbGl2ZXJ5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtZGVsaXZlcnkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxufSk7IiwiLy90byBnbyB0byB0aGUgcHJldmlvdXMgcGFnZSBieSBuYXZpZ2F0aW9uXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbmxldCBhbGxMaVNlY29uZE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWNvbmRhcnktbmF2IGxpJyk7XHJcblxyXG4vL3Rha2VzIHRoZSBsaW5rIGFkZHJlc3MgZnJvbSB0aGUgcHJldmlvdXMgZWxlbWVudCBhbmQgcHV0cyBpdCBpbnRvIHRoZSBhcnJvdyBsaW5rIG9mIHRoZSBsYXN0IGVsZW1lbnRcclxubGV0IGxpbmtBZHJlc3MgPSBhbGxMaVNlY29uZE5hdlsoYWxsTGlTZWNvbmROYXYubGVuZ3RoIC0gMildLmNoaWxkTm9kZXNbMF0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblxyXG5hbGxMaVNlY29uZE5hdlsoYWxsTGlTZWNvbmROYXYubGVuZ3RoIC0gMSldLmNoaWxkTm9kZXNbMV0uc2V0QXR0cmlidXRlKCdocmVmJywgbGlua0FkcmVzcyk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3QgbW9kYWxBc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Fzay1hLXF1ZXN0aW9uJyk7XHJcbmNvbnN0IGFza1RleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fzay1hLXF1ZXN0aW9uX19xdWVzdGlvbicpO1xyXG5jb25zdCBwYXJlbnRBc2tUZXh0YXJlYSA9IGFza1RleHRhcmVhLnBhcmVudEVsZW1lbnQ7XHJcbi8vY29uc29sZS5sb2cocGFyZW50QXNrVGV4dGFyZWEpO1xyXG5sZXQgaW5pdGlhbFdpZHRoQXNrVGV4dGFyZWEgPSArKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFza1RleHRhcmVhKS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIikuc2xpY2UoMCwgLTIpKTsvL3RoZSBpbml0aWFsIHdpZHRoIG9mIHRoZSB0ZXh0YXJlYSBpcyB0YWtlblxyXG4vL2NvbnNvbGUubG9nKGluaXRpYWxXaWR0aEFza1RleHRhcmVhKTtcclxuXHJcbi8vd2lkdGggYW5kIGhlaWdodCByZXN0cmljdGlvbnMgYXQgYXBwcm94aW1hdGVseSBsaW5lIDkzOChzY3NzKVxyXG5cclxuYXNrVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhhc2tUZXh0YXJlYS5zY3JvbGxIZWlnaHQpXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA1ODApIHtcclxuICAgICAgICBpZiAoZS5pbnB1dFR5cGUgPT0gJ2luc2VydFRleHQnICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA+IDI2ICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA8IDU0KSB7XHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7YXNrVGV4dGFyZWEuY2xpZW50V2lkdGggKz0gMTB9cHhgOyAvL2lmIHRoZSBudW1iZXIgb2YgZW50ZXJlZCBjaGFyYWN0ZXJzIG1hdGNoZXMgdGhlIGNvbmRpdGlvbnMgYWJvdmUsIHRoZSB0ZXh0YXJlYSB3aWxsIGdyb3cgaW4gd2lkdGggYnkgMTBweCBhZnRlciBlYWNoIGlucHV0XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmlucHV0VHlwZSA9PSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJyAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPiAyNiAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPCA1NCAmJiBhc2tUZXh0YXJlYS5jbGllbnRXaWR0aCA+IGluaXRpYWxXaWR0aEFza1RleHRhcmVhKSB7XHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7YXNrVGV4dGFyZWEuY2xpZW50V2lkdGggLT0gNX1weGA7Ly9pZiB0aGVyZSBpcyBhIGRlbGV0aW9uIG9mIGNoYXJhY3RlcnMsIHRoZSB0ZXh0YXJlYSB3aWxsIHNocmlua1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5pbnB1dFR5cGUgPT0gJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCcgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDw9IDI1KSB7XHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7aW5pdGlhbFdpZHRoQXNrVGV4dGFyZWF9cHhgOy8vYWRqdXN0IHRleHRhcmVhIHdpZHRoIHRvIGluaXRpYWwgdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuZGF0YSk7XHJcbiAgICAgICAgaWYgKGUuZGF0YSAhPSBudWxsICYmIGUuZGF0YS5sZW5ndGggPiAxKSB7Ly9pZiB0aGUgZW50aXJlIHJldmlldyBpcyBpbnNlcnRlZCAvIGUuZGF0YSAhPSBudWxsIC0+IG51bGwgPSB3aGVuIHByZXNzaW5nIGVudGVyIG9yIGJhY2tzcGFjZVxyXG4gICAgICAgICAgICBhc2tUZXh0YXJlYS5zdHlsZS53aWR0aCA9ICc1MDBweCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPCAxKSB7Ly9pZiBhbGwgdGV4dCBpcyBkZWxldGVkIGF0IG9uY2VcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSBgJHtpbml0aWFsV2lkdGhBc2tUZXh0YXJlYX1weGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoID4gMjYpIHsvL3JlYXJyYW5nZSBlbGVtZW50cyB3aGVuIHRleHRhcmVhIGdyb3dzXHJcbiAgICAgICAgICAgIHBhcmVudEFza1RleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ3RleHRhcmVhLWNvbHVtbicpXHJcbiAgICAgICAgICAgIG1vZGFsQXNrLmNsYXNzTGlzdC5hZGQoJ21vZGFsX19hc2stYS1xdWVzdGlvbi1iaWctYXNrJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJlbnRBc2tUZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0YXJlYS1jb2x1bW4nKVxyXG4gICAgICAgICAgICBtb2RhbEFzay5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fYXNrLWEtcXVlc3Rpb24tYmlnLWFzaycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFza1RleHRhcmVhLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiOyAgLy90ZXh0YXJlYSBoZWlnaHQgZ3Jvd3RoXHJcbiAgICBhc2tUZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBhc2tUZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyBcInB4XCI7Ly8gXHJcbn0pIiwiLy9mb3IgYWNjb3VudC5odG1sXHJcbmNvbnN0IG1hc3RlckNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZm9yLWNoYW5nZS1jb250ZW50PVwibWFzdGVyLWNoZWNrYm94XCJdJyk7XHJcbmNvbnN0IGFkZFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9yLWNoYW5nZS1jb250ZW50PVwiYWRkLXNlbGVjdGVkLXRvLXNob3BwaW5nLWNhcnRcIl0nKTtcclxuY29uc3QgZGVsZXRlU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mb3ItY2hhbmdlLWNvbnRlbnQ9XCJkZWxldGUtc2VsZWN0ZWRcIl0nKTtcclxuY29uc3QgY2xlYXJGYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mb3ItY2hhbmdlLWNvbnRlbnQ9XCJjbGVhci1mYXZvcml0ZXNcIl0nKTtcclxuY29uc3QgY2xlYXJCYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1mb3ItY2hhbmdlLWNvbnRlbnQ9XCJjbGVhci1iYXNrZXRcIl0nKTtcclxuY29uc3QgaW5wdXRzVW5kZXJNYXN0ZXJDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50X19jb250ZW50X19wcm9kdWN0IGlucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcbmNvbnN0IGlucHV0c1VuZGVyTWFzdGVyQ2hlY2tib3hGYXZvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50X19mYXZvcml0ZXMgLmFjY291bnRfX2NvbnRlbnRfX3Byb2R1Y3QgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuY29uc3QgaW5wdXRzVW5kZXJNYXN0ZXJDaGVja2JveEJhc2tldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvdW50X19iYXNrZXQgLmFjY291bnRfX2NvbnRlbnRfX3Byb2R1Y3QgaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcclxuY29uc3QgYmFza2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jhc2tldCcpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbm1hc3RlckNoZWNrYm94LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHsvL3doZW4gaXRlbSBmcm9tIGNvbGxlY3Rpb24gbWFzdGVyQ2hlY2tib3ggaXMgY2hlY2tlZCwgYWxsIG90aGVyIGNoZWNrYm94ZXMgYXJlIGNoZWNrZWQgdG9vXHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09ICdtYXN0ZXItY2hlY2tib3gtZmF2aXJpdGVzJykgey8vc28gdGhhdCBpdGVtIGZyb20gY29sbGVjdGlvbiBtYXN0ZXJDaGVja2JveCBjaGVja3Mgb25seSBpdHMgaW5wdXRzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGlucHV0c1VuZGVyTWFzdGVyQ2hlY2tib3hGYXZvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGlucHV0c1VuZGVyTWFzdGVyQ2hlY2tib3hCYXNrZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gJ21hc3Rlci1jaGVja2JveC1mYXZpcml0ZXMnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGlucHV0c1VuZGVyTWFzdGVyQ2hlY2tib3hGYXZvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpbnB1dHNVbmRlck1hc3RlckNoZWNrYm94QmFza2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuZGVsZXRlU2VsZWN0ZWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpbnB1dHNVbmRlck1hc3RlckNoZWNrYm94KSB7Ly9pdGVyYXRlcyBvdmVyIGFsbCBpbnB1dHMgZnJvbSB0aGUgaW5wdXRzVW5kZXJNYXN0ZXJDaGVja2JveCBjb2xsZWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHsgICAgICAgICAgICAgICAgICAgICAgLy9jaGVja3MgZm9yIGNoZWNrZWQgYW5kIGlmIHRydWUgcmVtb3ZlcyB0aGUgaW5wdXQncyBwYXJlbnRcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb3VudEFsbFByaWNlKCk7Ly9vbiBsaW5lIDg1XHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY2xlYXJGYXYuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7Ly93aWxsIHNpbXBseSByZW1vdmUgYWxsIGdvb2RzIGZyb20gZmF2b3JpdGVzXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBpbnB1dHNVbmRlck1hc3RlckNoZWNrYm94RmF2b3IpIHtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5jbGVhckJhcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsvL3dpbGwgc2ltcGx5IHJlbW92ZSBhbGwgZ29vZHMgZnJvbSBiYXNrZXRcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGlucHV0c1VuZGVyTWFzdGVyQ2hlY2tib3hCYXNrZXQpIHtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0b3RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykvL2NvdW50ZXItZ29vZHMuanMgbGluZSAxM1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmJhc2tldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsvL0ZpcnN0IG9uIHRoZSBhY2NvdW50Lmh0bWwgcGFnZSwgZm9ybSAtIHlvdXItZGV0YWlscyBpcyBkaXNwbGF5ZWQsIHdoZW4gY2xpY2tpbmcgaW5wdXQgKGlkID0gYmFza2V0KSBpdCB3aWxsIHN0YXJ0IGNhbGN1bGF0aW5nIHRoZSBwcmljZVxyXG4gICAgY291bnRBbGxQcmljZSgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNvdW50QWxsUHJpY2UoKSB7XHJcbiAgICBsZXQgYWxsR29vZHNCYXNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3VudF9fYmFza2V0IC5wcmljZS1yZWxhdGl2ZS1pbnB1dCcpO1xyXG5cclxuICAgIGlmIChhbGxHb29kc0Jhc2tldC5sZW5ndGggPT0gMCkgeyAvL2lmIHRoZSBwcm9kdWN0cyBhcmUgZGVsZXRlZCwgdGhlbiB0aGUgYmxvY2sgd2l0aCB0aGUgZmluYWwgcHJpY2UgaXMgYWxzbyBkZWxldGVkXHJcbiAgICAgICAgdG90YWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpLy9jb3VudGVyLWdvb2RzLmpzIGxpbmUgMTNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHN1bVByaWNlID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpdGVtYWxsR29vZHNCYXNrZXQgb2YgYWxsR29vZHNCYXNrZXQpIHsvL29ubHkgdGhlIHByaWNlIG9mIHRoZSBwcm9kdWN0IGlzIHRha2VuIChzdHJpbmcpLCBcclxuICAgICAgICAgICAgc3VtUHJpY2UgKz0gTnVtYmVyKGl0ZW1hbGxHb29kc0Jhc2tldC5pbm5lckhUTUwuc2xpY2UoMCwgLTIpKTsvL2lzIGNvbnZlcnRlZCB0byBhIG51bWJlciBhbmQgYWRkZWQgdG8gc3VtUHJpY2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdG90YWxQcmljZS5pbm5lckhUTUwgPSBzdW1QcmljZSArIFwiIOKCvVwiICAgICAgICAgLy90aGUgc3VtUHJpY2UgdmFsdWUgaXMgaW5zZXJ0ZWQgaW50byB0aGUgYmxvY2sgd2l0aCB0aGUgdG90YWwgYW1vdW50IG9mIGdvb2RzXHJcbiAgICAgICAgLy9jb3VudGVyLWdvb2RzLmpzIGxpbmUgMTRcclxuICAgIH1cclxuXHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9hbGxTY3JpcHRzL2FuaW1hdGlvbi5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2hlYWRlck5hdkJ1cmdlck9uTWVkaWFNYXgtd2lkdGgxMTIwcHguanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9oZWFkZXJOYXZCdXJnZXJPbk1lZGlhTWF4LXdpZHRoNzM1cHguanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9zZWNvbmRhcnlOYXZBcnJvd0xpbmtzMzIwLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvcmFkaW9QZXJzb24uanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9jYXRlZ29yaWVzUmFkaW8uanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9jb3VudGVyLWdvb2RzLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvd29ya2luZ1dpdGhGYXZvcml0ZXNDb250ZW50LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvV2lkZ2V0LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvbW9kYWwuanMnO1xyXG5pbXBvcnQgJy4vYWxsU2NyaXB0cy9wYXNzLWV5ZS5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL1Bob25lTWFzay5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL09UUC1JbnB1dC1maWVsZChzbXMpLmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvdGV4dGFyZWFHcm93LmpzJztcclxuaW1wb3J0ICcuL2FsbFNjcmlwdHMvYnV0dG9uRm9ybUNvbnNlbnRDaGVjay5qcyc7XHJcbmltcG9ydCAnLi9hbGxTY3JpcHRzL2FuaW1hdGVGb290ZXIuanMnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==