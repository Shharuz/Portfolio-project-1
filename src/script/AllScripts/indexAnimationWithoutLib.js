const body = document.querySelector('body');
const forSmoothScrollWrapper = document.querySelector('.forSmoothScroll__wrapper');
const header = document.querySelector('header');
const allSection = document.querySelectorAll('section');
//console.log(allSection);
//console.log(allSection.length);
const indexAdvantagesBlockItems = document.querySelectorAll('.index-advantages__block__item, .index-advantages__wrapper-links a'); // + links
//const indexAdvantageslinks = document.querySelectorAll('.index-advantages__wrapper-links a');
//console.log(advantagesBlockItems);
//console.log(Array.isArray(advantagesBlockItems));
//console.log(indexAdvantageslinks);
//console.log(Array.isArray(indexAdvantageslinks));
const linksIndexCatalog = document.querySelectorAll('.catalog-categories a');
//console.log(linksIndexCatalog);
const swiperCard = document.querySelector('.swiper-card');
//console.log(swiperCard);
const elementsIndexAboutUS = document.querySelectorAll('.index-aboutUs aside p, .index-aboutUs__wrapper-forswiper, .index-aboutUs__more-details-reviews a');
//console.log(elementsIndexAboutUS);
const indexOnlineStore = document.querySelector('.index-offer__online-store');
//console.log(indexOnlineStore);

const progress = document.querySelector('.progress');

const sizewindow = document.querySelector('.sizewindow');
sizewindow.innerHTML = window.innerWidth;

let adjustmentProgressWidth;
let progressWidth;



const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const h3 = indexOnlineStore.querySelector('h3');


window.addEventListener('resize', headingPrep); 
window.addEventListener('DOMContentLoaded', headingPrep);

//variables so that rebuilding during resize works 1 time
let tmpForPrepH1Adaptiv;
let tmpForPrepSecondH2Adaptiv;
let tmpForPrepThirdH2Adaptiv;

//Setting up header construction
function headingPrep() {
    
    //console.log(forSmoothScrollWrapper);
    //console.log(forSmoothScrollWrapper.scrollHeight);
    //console.log(forSmoothScrollWrapper.offsetHeight);
    //console.log(forSmoothScrollWrapper.clientHeight);
    sizewindow.innerHTML = window.innerWidth;

    //arg1 = h1 or h2[i]
    //arg2 = amount lines
    //arg3 = amount words in 1 line
    //arg4 = amount words in 2 line
    //arg5 = amount words in 3 line

    //Preparing H1(adding wrappers) for animation

    if (window.innerWidth > 736) {
        if (tmpForPrepH1Adaptiv != 0) {
            tmpForPrepH1Adaptiv = 0;
            creatingWrappers(h1, 2, 2, 5, 0, 0); 
        }
        //console.log(tmpForPrepH1Adaptiv);

    } else if (window.innerWidth <= 735) {

        if (tmpForPrepH1Adaptiv != 1) {
            tmpForPrepH1Adaptiv = 1;
            creatingWrappers(h1, 3, 2, 3, 2, 0); 
        }
        //console.log(tmpForPrepH1Adaptiv);
    }
    //Preparing first H2(adding wrappers) for animation(index-catalog)
    creatingWrappers(h2[0], 1, 0, 0, 0, 0);
    //Preparing second H2(adding wrappers) for animation(index-catalog)
    if (window.innerWidth > 1101) {
        if (tmpForPrepSecondH2Adaptiv != 0) {
            tmpForPrepSecondH2Adaptiv = 0;
            creatingWrappers(h2[1], 1, 0, 0, 0, 0) //approximately on line 128
            //console.log('rrrrr')
        }
    } else if (window.innerWidth <= 1100) {
        if (tmpForPrepSecondH2Adaptiv != 1) {
            tmpForPrepSecondH2Adaptiv = 1;
            creatingWrappers(h2[1], 2, 2, 2, 0, 0) //approximately on line 128
        }
    }
    //Preparing third H2(adding wrappers) for animation(index-aboutUs)
    if (window.innerWidth > 361) {
        if (tmpForPrepThirdH2Adaptiv != 0) {
            tmpForPrepThirdH2Adaptiv = 0;
            creatingWrappers(h2[2], 1, 0, 0, 0, 0) //approximately on line 128
        }
    } else {
        if (tmpForPrepThirdH2Adaptiv != 1) {
            tmpForPrepThirdH2Adaptiv = 1;
            creatingWrappers(h2[2], 2, 2, 1, 0, 0) //approximately on line 128
        }
    }
    //Preparing H3(adding wrappers) for animation(index-offer__online-store__wrapper)
    creatingWrappers(h3, 1, 0, 0, 0, 0); 
}

//arg1 = h1 or h2[i]
//arg2 = amount lines
//arg3 = amount words in 1 line
//arg4 = amount words in 2 line
//arg5 = amount words in 3 line

//An array of letters is taken and N lines (2) are created. For example, the first line should contain two words. The entire array of letters is iterated over, 
//each letter is placed in a letter wrapper and removed from the array, then placed in a word wrapper. The iteration continues, and if a space is encountered, 
//the loop breaks (the array of letters has become smaller). According to the parameter, the array of letters is iterated over again, but starting with the next word.

function creatingWrappers(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    //console.log(arg1);
    //console.log(arg1.childNodes.length);
    //console.log(arg1.childNodes[0]);
    //console.log(arg1.childNodes[0].nodeName)
    /*for (let item of arg1.childNodes) {
        console.log(item)
    }*/
    //clears header from wrappers 
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
        arg1.innerHTML = tmpArr.join(""); // array.join("") - so that there are no commas after the letters
        //arg1.append(tmpArr.join(""));
    }
    /*if(arg1.childNodes[0].classList.contains('line')){
             console.log('rrrrrrrr')
    }*/

    stringH = arg1.innerHTML; //the content of the element (string) is put into a variable
    //console.log(stringH)
    arg1.innerHTML = ''; //zeroing content to add wrappers with content
    arrayLettersH = [] //array zeroing ??? 
    for (let char of stringH) { //the string is split into characters and added to the array
        arrayLettersH.push(char);
        //console.log(char)
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
            creatingWrappersWordsSymbols(line); 
        }

    } else if (arg2 > 1) { //if you need to make a line in 2 lines or more
        for (let y = 0; y < arg2; ++y) { // y < arg2(3) = make 3 lines 
            let line = document.createElement("div"); //creating a line and adding it to an element (H1 or H2)
            line.classList.add('line');
            arg1.append(line);
            if (y == 0) { //1ST LINE SETTINGS 
                for (let i = 0; i < arg3; ++i) { //  i < arg3(2) =  2 words in line
                    creatingWrappersWordsSymbols(line); 
                }
            } else if (y == 1) { //2ND LINE SETTINGS 
                for (let i = 0; i < arg4; ++i) { //  i < arg4(3) =  3 words in line 
                    creatingWrappersWordsSymbols(line) 
                }
            } else if (y == 2) { //3ND LINE SETTINGS 
                for (let i = 0; i < arg5; ++i) { //  i < arg5(2) =  2 words in  line 
                    creatingWrappersWordsSymbols(line); 
                }
            } else if (y == 3) { //4ND LINE SETTINGS 
                for (let i = 0; i < arg6; ++i) { //  i < arg6(2) =  2 words in  line 
                    creatingWrappersWordsSymbols(line); 
                }
            } else if (y == 4) { //5ND LINE SETTINGS 
                for (let i = 0; i < arg7; ++i) { //  i < arg7(2) =  2 words in  line 
                    creatingWrappersWordsSymbols(line); 
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

        arg1.append(wrapperForWord); //adding a word with symbols to the created line
    }
}

let scrPosY = 0; //for scroll positions
let blockPosY = scrPosY; // for forSmoothScrollWrapper position
let speedAnim = 0.02; //if speedAnim > 0.07 (0.1) animation happens faster
//if speedAnim < 0.07 (0.02) animation is slower


window.addEventListener('scroll', getsScrollValue); //get scroll position
const scrPosYContainer = document.querySelector('.scrPosY')//green square in the upper right corner of the page

function getsScrollValue() {
    scrPosY = window.pageYOffset;
    //console.log(scrPosY);
    scrPosYContainer.innerHTML = scrPosY;
}

//variables for animation start and length
let startWindow; // window innerHeight
//index-offer__online-store
let startIndexOnlineStore;
//index-offer__online-store h3
let animH3SymbolPathLength;
let startAnimH3;
let startAnimH3Symbol;
//****************************************
//index-offer__online-store p
const p_indexOnlineStore = indexOnlineStore.querySelector('p');
let animPindexOnlineStorePathLength;
let startAnimPindexOnlineStore;
//****************************************
//index-offer__online-store linksOnlineStore
const linksOnlineStore = indexOnlineStore.querySelectorAll('a');
let animlinksOnlineStorePathLength = [];
let startlinksOnlineStore = [];

//****************************************
////////////////////////////////////////////////////////////////////////

//section index-advantages index-catalog index-aboutUs
let animSectionPathLength;
let animLastSectionPathLength;
let startAnimSections = [];
////////////////////////////////////////////////////////////////////////

// h1, h2
const allHeading = document.querySelectorAll('h1, h2');
let animHeadingSymbolPathLength;
let tilt;
let startAnimHeading = [];
let startAnimHeadingSymbol;
////////////////////////////////////////////////////////////////////////

//indexAdvantagesBlockItems + links
let animIndexAdvantagesBlockItemsPathLength = [];
let startAnimIndexAdvantagesBlockItem = [];
////////////////////////////////////////////////////////////////////////

//linksIndexCatalog
let animlinksIndexCatalogPathLength = [];
let startAnimlinksIndexCatalog = [];
////////////////////////////////////////////////////////////////////////

//elementsIndexAboutUS
let animElementsIndexAboutUSPathLength = [];
let startAnimElementsIndexAboutUS = [];
////////////////////////////////////////////////////////////////////////

//let scrollBarHeight
//getting animation start and length values
//The animation length is calculated relative to the window height.
//the start of the animation is calculated relative to the height of the window (start at the bottom of the window, in the middle of the window, etc.)
function getstartAnim(e) {
    startWindow = window.innerHeight;
    //console.log(e.type)
    tilt = startWindow * 0.8 / 100; // for Heading

    //index-offer__online-store
    startIndexOnlineStore = indexOnlineStore.offsetTop - startWindow;
    //console.log(indexOnlineStore.offsetTop, "indexOnlineStore")
    //index-offer__online-store h3
    animH3SymbolPathLength = (startWindow * 3) / 100; //3%;
    startAnimH3 = h3.offsetTop - (startWindow * 75) / 100 + indexOnlineStore.offsetTop;

    // During the resize event, offsetTop was calculated from the parent element, and not from forSmoothScroll, for some unknown reason.
    /*if (e.type == 'load') {
        startAnimH3 = h3IndexOnlineStore.offsetTop - (startWindow * 80) / 100;
    } else if (e.type == 'resize') {
        startAnimH3 = h3IndexOnlineStore.offsetTop - (startWindow * 80) / 100 + indexOnlineStore.offsetTop;
    }*/
    //console.log(h3IndexOnlineStore.offsetTop, 'H3')
    //****************************************
    //index-offer__online-store p
    animPindexOnlineStorePathLength = (startWindow * 8) / 100; //10%
    startAnimPindexOnlineStore = p_indexOnlineStore.offsetTop - (startWindow * 75) / 100 + indexOnlineStore.offsetTop;
    /*if (e.type == 'load') {
        startAnimPindexOnlineStore = p_indexOnlineStore.offsetTop - (startWindow * 80) / 100;
    } else if (e.type == 'resize') {
        startAnimPindexOnlineStore = p_indexOnlineStore.offsetTop - (startWindow * 80) / 100 + indexOnlineStore.offsetTop;
    }*/

    //console.log(p_indexOnlineStore.offsetTop, 'P')
    //console.log(p_indexOnlineStore.offsetTop)
    //****************************************
    //index-offer__online-store linksOnlineStore
    animlinksOnlineStorePathLength = [];
    startlinksOnlineStore = [];
    for (let i = 0; i < linksOnlineStore.length; ++i) {
        startlinksOnlineStore.push(linksOnlineStore[i].offsetTop - (startWindow * 80) / 100 + indexOnlineStore.offsetTop);
        
        if (i == 0 || i == 2) {
            animlinksOnlineStorePathLength.push((startWindow * 10) / 100);
        } else {
            animlinksOnlineStorePathLength.push((startWindow * 6) / 100);
        }
        /* if (e.type == 'load') {
             if (i == 0 || i == 2) {
                 startlinksOnlineStore.push(linksOnlineStore[i].offsetTop - (startWindow * 75) / 100); 
             } else {
                 startlinksOnlineStore.push(linksOnlineStore[i].offsetTop - (startWindow * 80) / 100); 
             }
         } else if (e.type == 'resize') {
             if (i == 0 || i == 2) {
                 startlinksOnlineStore.push(linksOnlineStore[i].offsetTop - (startWindow * 75) / 100 + indexOnlineStore.offsetTop); 
             } else {
                 startlinksOnlineStore.push(linksOnlineStore[i].offsetTop - (startWindow * 80) / 100 + indexOnlineStore.offsetTop); 
             }
         }*/

    }
    //console.log(startlinksOnlineStore, 'linksOnlineStore')
    //****************************************
    ////////////////////////////////////////////////////////////////////////

    //section index-advantages index-catalog index-aboutUs
    for (let i = 1; i < allSection.length; ++i) {
        allSection[i].setAttribute('style', `opacity: 1;`);
    }

    animSectionPathLength = (startWindow * 40) / 100; //40%
    animLastSectionPathLength = (startWindow * 50) / 100; //50%
    startAnimSections = [];
    for (let i = 0; i < allSection.length; ++i) {
        startAnimSections.push(allSection[i].offsetTop - startWindow);
    }
    ////////////////////////////////////////////////////////////////////////

    // h1, h2
    animHeadingSymbolPathLength = (startWindow * 3) / 100; //3%;
    startAnimHeading = [];
    for (let i = 0; i < allHeading.length; ++i) {
        startAnimHeading.push(allHeading[i].offsetTop - (startWindow * 80) / 100);
        startAnimHeadingSymbol = 0;
        /*console.log(allHeading[i].offsetTop, "top", allHeading[i])
        console.log((startWindow * 80 / 100) , "window")
        console.log(allHeading[i].offsetTop - (startWindow * 80 / 100), "top - window")*/
    }
    ////////////////////////////////////////////////////////////////////////

    //indexAdvantagesBlockItems + links
    animIndexAdvantagesBlockItemsPathLength = [];
    startAnimIndexAdvantagesBlockItem = [];

    for (let i = 0; i < indexAdvantagesBlockItems.length; ++i) {
        if (window.innerWidth > 1100) {
            animIndexAdvantagesBlockItemsPathLength.push((startWindow * 10) / 100);
            if (i == 0 || i == 2) {
                startAnimIndexAdvantagesBlockItem.push(indexAdvantagesBlockItems[i].offsetTop - (startWindow * 75) / 100);
            } else if (i == 3) {
                startAnimIndexAdvantagesBlockItem.push(indexAdvantagesBlockItems[i].offsetTop - (startWindow * 90) / 100);
                animIndexAdvantagesBlockItemsPathLength.push((startWindow * 7) / 100);
            } else if (i == 4) {
                startAnimIndexAdvantagesBlockItem.push(indexAdvantagesBlockItems[i].offsetTop - (startWindow * 85) / 100);
                animIndexAdvantagesBlockItemsPathLength.push((startWindow * 7) / 100);
            } else {
                startAnimIndexAdvantagesBlockItem.push(indexAdvantagesBlockItems[i].offsetTop - (startWindow * 85) / 100);
            }

        } else if (window.innerWidth <= 1100 && window.innerWidth > 581) {
            animIndexAdvantagesBlockItemsPathLength.push((startWindow * 8) / 100);
            if (i == 3) {
                startAnimIndexAdvantagesBlockItem.push(indexAdvantagesBlockItems[i].offsetTop - (startWindow * 90) / 100);
                animIndexAdvantagesBlockItemsPathLength.push((startWindow * 7) / 100);
            } else if (i == 4) {
                startAnimIndexAdvantagesBlockItem.push(indexAdvantagesBlockItems[i].offsetTop - (startWindow * 85) / 100);
                animIndexAdvantagesBlockItemsPathLength.push((startWindow * 7) / 100);
            } else {
                startAnimIndexAdvantagesBlockItem.push(indexAdvantagesBlockItems[i].offsetTop - (startWindow * 90) / 100);
            }

        } else if (window.innerWidth <= 580) {
            animIndexAdvantagesBlockItemsPathLength.push((startWindow * 8) / 100);
            if (i == 3 || i == 4) {
                startAnimIndexAdvantagesBlockItem.push(indexAdvantagesBlockItems[i].offsetTop - (startWindow * 95) / 100);
            } else {
                startAnimIndexAdvantagesBlockItem.push(indexAdvantagesBlockItems[i].offsetTop - (startWindow * 90) / 100);
            }

        }
    }
    //console.log(startAnimIndexAdvantagesBlockItem)
    ////////////////////////////////////////////////////////////////////////

    //linksIndexCatalog
    animlinksIndexCatalogPathLength = [];
    startAnimlinksIndexCatalog = [];

    for (let i = 0; i < linksIndexCatalog.length; ++i) {
        animlinksIndexCatalogPathLength.push((startWindow * 8) / 100);
        //console.log(linksIndexCatalog[i].offsetTop)
        //startAnimlinksIndexCatalog.push(linksIndexCatalog[i].offsetTop - (startWindow * 80) / 100);
        if (window.innerWidth > 1100) {
            if (i == 0 || i == 2 || i == 3 || i == 5) {
                startAnimlinksIndexCatalog.push(linksIndexCatalog[i].offsetTop - (startWindow * 80) / 100);
            } else {
                startAnimlinksIndexCatalog.push(linksIndexCatalog[i].offsetTop - (startWindow * 85) / 100);
            }

        } else if (window.innerWidth <= 1100 && window.innerWidth > 580) {
            startAnimlinksIndexCatalog.push(linksIndexCatalog[i].offsetTop - (startWindow * 80) / 100);
        } else if (window.innerWidth <= 580) {
            if (i == linksIndexCatalog.length - 1) {
                animlinksIndexCatalogPathLength.push((startWindow * 7) / 100);
                startAnimlinksIndexCatalog.push(linksIndexCatalog[i].offsetTop - (startWindow * 90) / 100);
            }

        }

    }
    //console.log(startAnimlinksIndexCatalog)
    ////////////////////////////////////////////////////////////////////////

    //elementsIndexAboutUS
    animElementsIndexAboutUSPathLength = [];
    startAnimElementsIndexAboutUS = [];
    for (let i = 0; i < elementsIndexAboutUS.length; ++i) {
        if (i == 2) {
            animElementsIndexAboutUSPathLength.push((startWindow * 7) / 100);
            startAnimElementsIndexAboutUS.push(elementsIndexAboutUS[i].offsetTop - (startWindow * 90) / 100);
        } else if (i == 3) {
            animElementsIndexAboutUSPathLength.push((startWindow * 7) / 100);
            startAnimElementsIndexAboutUS.push(elementsIndexAboutUS[i].offsetTop - (startWindow * 85) / 100);
        } else {
            animElementsIndexAboutUSPathLength.push((startWindow * 15) / 100);
            startAnimElementsIndexAboutUS.push(elementsIndexAboutUS[i].offsetTop - (startWindow * 80) / 100);
        }
    }
    ////////////////////////////////////////////////////////////////////////
}
window.addEventListener('load', getstartAnim)
window.addEventListener('resize', getstartAnim);



/*let topSectionTwo = +allSection[1].getBoundingClientRect().top.toFixed(2);
let startAnimSectionTwo = topSectionTwo - startWindow;
let topSectionThree = +allSection[2].getBoundingClientRect().top.toFixed(2);
let startAnimSectionThree = topSectionThree - startWindow;
let topSectionFour = +allSection[3].getBoundingClientRect().top.toFixed(2);
let startAnimSectionFour = topSectionFour - startWindow;*/


//console.log(animSectionPathLength)
window.requestAnimationFrame(smooth);

function smooth() {
    blockPosY = linear(blockPosY, scrPosY, speedAnim) //calculate forSmoothScrollWrapper position by linear interpolation method
    blockPosY = Math.floor(blockPosY * 100) / 100;
    //console.log(blockPosY)

    //When the blockPosY value enters the element's animation range, the blockPosY value is subtracted from the final value of the range. 
    //This increases the blockPosY value, and decreases the element's translate3d value, resulting in the element moving from bottom to top.

    //Opacity. The element's animation path length is taken, some mathematical magic is performed, and the opacity value is set relative to the element's animation path length.
    //range 0 - 150px. If translate3d is 150px(100%), then opacity is 0. If translate3d is 45px(30%), then opacity is 0.7, etc.

    //index-offer__online-store
    //h3
    let collectlineH3 = h3.querySelectorAll('.line');
    //***********************************************************
    if (window.innerWidth <= 1400) {
        // anim index-offer__online-store
        if (blockPosY > startIndexOnlineStore && blockPosY < (startIndexOnlineStore + animSectionPathLength)) {
            let indexOnlineStoreTransY = ((startIndexOnlineStore + animSectionPathLength) - blockPosY) * 100 / 100;
            let sectionOpac = 0;
            let stepSectionOpac = 100 / animSectionPathLength;
            if (indexOnlineStoreTransY > 0 && indexOnlineStoreTransY < animSectionPathLength) {
                sectionOpac = 1 - ((indexOnlineStoreTransY / 100 * stepSectionOpac * 100) / 100);
            }
            indexOnlineStore.setAttribute('style', `transform: translate3d(0px, ${indexOnlineStoreTransY.toFixed(2)}px, 0px); opacity: ${sectionOpac.toFixed(4)};`); //;
        } else if (blockPosY > startIndexOnlineStore + animSectionPathLength) {
            indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
        } else if (blockPosY < startIndexOnlineStore) {
            indexOnlineStore.setAttribute('style', `opacity: 0;`);
        }
        //****************************************
        //index-offer__online-store h3

        for (let lineH3 = 0; lineH3 < collectlineH3.length; ++lineH3) {
            let h3AllLetters = collectlineH3[lineH3].querySelectorAll('.wrapperSymbol');
            //console.log(hAllLetters)
            for (let y = 0; y < h3AllLetters.length; ++y) {
                startAnimH3Symbol = startAnimH3;
                startAnimH3Symbol += y * tilt
                endAnimH3Symbol = startAnimH3Symbol + animH3SymbolPathLength
                // be lower than the previous one (the overall slope of the line) 0.2 weaker slope > 0.4 > 0.8 more tilt
                if (blockPosY > startAnimH3 && blockPosY < endAnimH3Symbol) {
                    let h3LetterTransY = endAnimH3Symbol - blockPosY;
                    //console.log(startAnimSections[i])

                    let h3LetterOpac = 0;
                    let stepH3LetterOpac = 100 / animH3SymbolPathLength; // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                    if (h3LetterTransY > 0 && h3LetterTransY < endAnimH3Symbol) {
                        h3LetterOpac = 1 - ((h3LetterTransY / 100 * stepH3LetterOpac * 100) / 100); //mathematical wizardry to make the opacity value equal to the animation length
                        //if 18px == 100unit opacity, 9px == 50unit opacity etc.
                    }


                    h3AllLetters[y].setAttribute('style', `transform: translate3d(0px, ${h3LetterTransY.toFixed(2)}px, 0px); opacity: ${h3LetterOpac.toFixed(4)};`); //opacity: ${hWordsLetterOpac.toFixed(4)};
                } else if (blockPosY > startAnimH3 + animH3SymbolPathLength) {
                    h3AllLetters[y].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //

                } else if (blockPosY < startAnimH3) {
                    h3AllLetters[y].setAttribute('style', `opacity: 0;`);

                }
            }
        }
        //****************************************
        //index-offer__online-store p
        if (blockPosY > startAnimPindexOnlineStore && blockPosY < (startAnimPindexOnlineStore + animPindexOnlineStorePathLength)) {
            let p_indexOnlineStoreTransY = ((startAnimPindexOnlineStore + animPindexOnlineStorePathLength) - blockPosY);
            //console.log(startAnimSections[i])

            let p_indexOnlineStoreOpac = 0;
            let stepp_indexOnlineStoreOpac = 100 / animPindexOnlineStorePathLength;
            if (p_indexOnlineStoreTransY > 0 && p_indexOnlineStoreTransY < animPindexOnlineStorePathLength) {
                p_indexOnlineStoreOpac = 1 - ((p_indexOnlineStoreTransY / 100 * stepp_indexOnlineStoreOpac * 100) / 100);
            }
            p_indexOnlineStore.setAttribute('style', `transform: translate3d(0px, ${p_indexOnlineStoreTransY.toFixed(2)}px, 0px); opacity: ${p_indexOnlineStoreOpac.toFixed(4)};`); //;
        } else if (blockPosY > (startAnimPindexOnlineStore + animPindexOnlineStorePathLength)) {
            p_indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //

        } else if (blockPosY < startAnimPindexOnlineStore) {
            p_indexOnlineStore.setAttribute('style', `opacity: 0;`);
        }
        //****************************************
        //index-offer__online-store linksOnlineStore
        for (let i = 0; i < linksOnlineStore.length; ++i) {
            if (blockPosY > startlinksOnlineStore[i] && blockPosY < (startlinksOnlineStore[i] + animlinksOnlineStorePathLength[i])) {
                let linksOnlineStoreTransY = ((startlinksOnlineStore[i] + animlinksOnlineStorePathLength[i]) - blockPosY);
                //console.log(startAnimSections[i])

                let linksOnlineStoreOpac = 0;
                let steplinksOnlineStoreOpac = 100 / animlinksOnlineStorePathLength[i];
                if (linksOnlineStoreTransY > 0 && linksOnlineStoreTransY < animlinksOnlineStorePathLength[i]) {
                    linksOnlineStoreOpac = 1 - ((linksOnlineStoreTransY / 100 * steplinksOnlineStoreOpac * 100) / 100);
                }

                linksOnlineStore[i].setAttribute('style', `transform: translate3d(0px, ${linksOnlineStoreTransY.toFixed(2)}px, 0px); opacity: ${linksOnlineStoreOpac.toFixed(4)};`); //;
            } else if (blockPosY > (startlinksOnlineStore[i] + animlinksOnlineStorePathLength[i])) {
                linksOnlineStore[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //
            } else if (blockPosY < startlinksOnlineStore[i]) {
                linksOnlineStore[i].setAttribute('style', `opacity: 0;`);
            }
        }
        //****************************************

    } else {
        window.addEventListener('load', () => {
            indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
            /*for (let lineH3 = 0; lineH3 < collectlineH3.length; ++lineH3){
                let h3AllLetters = collectlineH3[lineH3].querySelectorAll('.wrapperSymbol');
                for (let y = 0; y < h3AllLetters.length; ++y){
                    h3AllLetters[y].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                }
            }
            p_indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
            for (let i = 0; i < linksOnlineStore.length; ++i){
                linksOnlineStore[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
            }*/
        })
        window.addEventListener('resize', () => {
            indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
            p_indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
            for (let i = 0; i < linksOnlineStore.length; ++i) {
                linksOnlineStore[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
            }
        })
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
            }
        });
    }


    ////////////////////////////////////////////////////////////////////////

    //anim section index-advantages index-catalog index-aboutUs
    for (let i = 1; i < allSection.length; ++i) {

        if (i < allSection.length - 1) {
            if (blockPosY > startAnimSections[i] && blockPosY < (startAnimSections[i] + animSectionPathLength)) {
                let sectionTransY = ((startAnimSections[i] + animSectionPathLength) - blockPosY);
                //console.log(startAnimSections[i])

                let sectionOpac = 0;
                let stepSectionOpac = 100 / animSectionPathLength;
                if (sectionTransY > 0 && sectionTransY < animSectionPathLength) {
                    sectionOpac = 1 - ((sectionTransY / 100 * stepSectionOpac * 100) / 100);
                }
                allSection[i].setAttribute('style', `transform: translate3d(0px, ${sectionTransY.toFixed(2)}px, 0px); opacity: ${sectionOpac.toFixed(4)};`); //;
            } else if (blockPosY > (startAnimSections[i] + animSectionPathLength)) {
                allSection[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //

            } else if (blockPosY < startAnimSections[i]) {
                allSection[i].setAttribute('style', `opacity: 0;`);

            }
        } else {
            if (blockPosY > startAnimSections[i] && blockPosY < (startAnimSections[i] + animLastSectionPathLength)) {
                let sectionTransY = ((startAnimSections[i] + animLastSectionPathLength) - blockPosY) * 100 / 100;


                let sectionOpac = 0;
                let stepSectionOpac = 100 / animLastSectionPathLength;
                if (sectionTransY > 0 && sectionTransY < animLastSectionPathLength) {
                    sectionOpac = 1 - ((sectionTransY / 100 * stepSectionOpac * 100) / 100);
                }
                allSection[i].setAttribute('style', `transform: translate3d(0px, ${sectionTransY.toFixed(2)}px, 0px); opacity: ${sectionOpac.toFixed(4)};`); //;
            } else if (blockPosY > (startAnimSections[i] + animSectionPathLength)) {
                allSection[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //

            } else if (blockPosY < startAnimSections[i]) {
                allSection[i].setAttribute('style', `opacity: 0;`);

            }
        }


    }
    ////////////////////////////////////////////////////////////////////////

    //animation h1, h2
    for (let i = 0; i < allHeading.length; ++i) {
        let collectline = allHeading[i].querySelectorAll('.line');
        for (let line = 0; line < collectline.length; ++line) {
            let hAllLetters = collectline[line].querySelectorAll('.wrapperSymbol');
            //console.log(hAllLetters)
            for (let y = 0; y < hAllLetters.length; ++y) {

                /*if (line > 0) {
                    startAnimHeadingSymbol = startAnimHeading[i] + collectline[line - 1].offsetHeight;
                    startAnimHeadingSymbol += y * tilt
                    endAnimLetterWordH = startAnimHeadingSymbol + animHeadingSymbolPathLength
                } else {
                    startAnimHeadingSymbol = startAnimHeading[i];
                    startAnimHeadingSymbol += y * tilt
                    endAnimLetterWordH = startAnimHeadingSymbol + animHeadingSymbolPathLength
                }*/
                startAnimHeadingSymbol = startAnimHeading[i];
                startAnimHeadingSymbol += y * tilt
                endAnimHeadingSymbol = startAnimHeadingSymbol + animHeadingSymbolPathLength
                // be lower than the previous one (the overall slope of the line) 0.2 weaker slope > 0.4 > 0.8 more tilt
                if (blockPosY > startAnimHeading[i] && blockPosY < endAnimHeadingSymbol) {
                    let hWordsLetterTransY = endAnimHeadingSymbol - blockPosY;
                    //console.log(startAnimSections[i])

                    let hWordsLetterOpac = 0;
                    let stepHWordsLetterOpac = 100 / animHeadingSymbolPathLength; // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                    if (hWordsLetterTransY > 0 && hWordsLetterTransY < endAnimHeadingSymbol) {
                        hWordsLetterOpac = 1 - ((hWordsLetterTransY / 100 * stepHWordsLetterOpac * 100) / 100); //mathematical wizardry to make the opacity value equal to the animation length
                        //if 18px == 100unit opacity, 9px == 50unit opacity etc.
                    }


                    hAllLetters[y].setAttribute('style', `transform: translate3d(0px, ${hWordsLetterTransY.toFixed(2)}px, 0px); opacity: ${hWordsLetterOpac.toFixed(4)};`); //opacity: ${hWordsLetterOpac.toFixed(4)};
                } else if (blockPosY > startAnimHeading[i] + animHeadingSymbolPathLength) {
                    hAllLetters[y].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //

                } else if (blockPosY < startAnimHeading[i]) {
                    hAllLetters[y].setAttribute('style', `opacity: 0;`);

                }
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////

    //animation indexAdvantagesBlockItems + links
    for (let i = 0; i < indexAdvantagesBlockItems.length; ++i) {
        if (blockPosY > startAnimIndexAdvantagesBlockItem[i] && blockPosY < (startAnimIndexAdvantagesBlockItem[i] + animIndexAdvantagesBlockItemsPathLength[i])) {
            let indexAdvantagesBlockItemTransY = ((startAnimIndexAdvantagesBlockItem[i] + animIndexAdvantagesBlockItemsPathLength[i]) - blockPosY);
            //console.log(startAnimSections[i])

            let advantagesBlockItemOpac = 0;
            let stepAdvantagesBlockItemOpac = 100 / animIndexAdvantagesBlockItemsPathLength[i];
            if (indexAdvantagesBlockItemTransY > 0 && indexAdvantagesBlockItemTransY < animIndexAdvantagesBlockItemsPathLength[i]) {
                advantagesBlockItemOpac = 1 - ((indexAdvantagesBlockItemTransY / 100 * stepAdvantagesBlockItemOpac * 100) / 100);
            }
            indexAdvantagesBlockItems[i].setAttribute('style', `transform: translate3d(0px, ${indexAdvantagesBlockItemTransY.toFixed(2)}px, 0px); opacity: ${advantagesBlockItemOpac.toFixed(4)};`); //;
        } else if (blockPosY > (startAnimIndexAdvantagesBlockItem[i] + animIndexAdvantagesBlockItemsPathLength[i])) {
            indexAdvantagesBlockItems[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //

        } else if (blockPosY < startAnimIndexAdvantagesBlockItem[i]) {
            indexAdvantagesBlockItems[i].setAttribute('style', `opacity: 0;`);

        }
    }
    ////////////////////////////////////////////////////////////////////////

    //animation linksIndexCatalog
    for (let i = 0; i < linksIndexCatalog.length; ++i) {

        if (window.innerWidth > 580) {
            if (blockPosY > startAnimlinksIndexCatalog[i] && blockPosY < (startAnimlinksIndexCatalog[i] + animlinksIndexCatalogPathLength[i])) {
                let linksIndexCatalogTransY = ((startAnimlinksIndexCatalog[i] + animlinksIndexCatalogPathLength[i]) - blockPosY);
                //console.log(startAnimSections[i])

                let linksIndexCatalogOpac = 0;
                let steplinksIndexCatalogOpac = 100 / animlinksIndexCatalogPathLength[i];
                if (linksIndexCatalogTransY > 0 && linksIndexCatalogTransY < animlinksIndexCatalogPathLength[i]) {
                    linksIndexCatalogOpac = 1 - ((linksIndexCatalogTransY / 100 * steplinksIndexCatalogOpac * 100) / 100);
                }

                if (window.innerWidth > 1100) {
                    if (i == 0 || i == 3) {
                        linksIndexCatalog[i].setAttribute('style', `transform: translate3d(-${linksIndexCatalogTransY.toFixed(2)}px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`); //;
                    } else if (i == 2 || i == 5) {
                        linksIndexCatalog[i].setAttribute('style', `transform: translate3d(${linksIndexCatalogTransY.toFixed(2)}px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`); //;
                    } else {
                        linksIndexCatalog[i].setAttribute('style', `transform: translate3d(0px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`); //; 
                    }
                } else if (window.innerWidth <= 1100 && window.innerWidth > 580) {
                    if (i == 0 || i == 2 || i == 4) {
                        linksIndexCatalog[i].setAttribute('style', `transform: translate3d(-${linksIndexCatalogTransY.toFixed(2)}px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`); //;
                    } else if (i == 1 || i == 3 || i == 5) {
                        linksIndexCatalog[i].setAttribute('style', `transform: translate3d(${linksIndexCatalogTransY.toFixed(2)}px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`); //;
                    } else {
                        linksIndexCatalog[i].setAttribute('style', `transform: translate3d(0px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`); //; 
                    }
                }
                //linksIndexCatalog[i].setAttribute('style', `transform: translate3d(0px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`); //;
            } else if (blockPosY > (startAnimlinksIndexCatalog[i] + animlinksIndexCatalogPathLength[i])) {
                linksIndexCatalog[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //
            } else if (blockPosY < startAnimlinksIndexCatalog[i]) {
                linksIndexCatalog[i].setAttribute('style', `opacity: 0;`);
            }
        } else if (window.innerWidth <= 580) {

            if (i == linksIndexCatalog.length - 1) {

                if (blockPosY > startAnimlinksIndexCatalog[0] && blockPosY < (startAnimlinksIndexCatalog[0] + animlinksIndexCatalogPathLength[0])) {
                    let linksIndexCatalogTransY = ((startAnimlinksIndexCatalog[0] + animlinksIndexCatalogPathLength[0]) - blockPosY);
                    //console.log(startAnimSections[i])

                    let linksIndexCatalogOpac = 0;
                    let steplinksIndexCatalogOpac = 100 / animlinksIndexCatalogPathLength[0];
                    if (linksIndexCatalogTransY > 0 && linksIndexCatalogTransY < animlinksIndexCatalogPathLength[0]) {
                        linksIndexCatalogOpac = 1 - ((linksIndexCatalogTransY / 100 * steplinksIndexCatalogOpac * 100) / 100);
                    }


                    linksIndexCatalog[i].setAttribute('style', `transform: translate3d(0px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`); //;
                } else if (blockPosY > (startAnimlinksIndexCatalog[0] + animlinksIndexCatalogPathLength[0])) {
                    linksIndexCatalog[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //
                } else if (blockPosY < startAnimlinksIndexCatalog[0]) {
                    linksIndexCatalog[i].setAttribute('style', `opacity: 0;`);
                }
            }

        }

    }
    ////////////////////////////////////////////////////////////////////////

    //animation elementsIndexAboutUS
    for (let i = 0; i < elementsIndexAboutUS.length; ++i) {
        if (blockPosY > startAnimElementsIndexAboutUS[i] && blockPosY < (startAnimElementsIndexAboutUS[i] + animElementsIndexAboutUSPathLength[i])) {
            let elementsIndexAboutUSTransY = ((startAnimElementsIndexAboutUS[i] + animElementsIndexAboutUSPathLength[i]) - blockPosY);
            //console.log(startAnimSections[i])

            let elementsIndexAboutUSOpac = 0;
            let stepElementsIndexAboutUSOpac = 100 / animElementsIndexAboutUSPathLength[i];
            if (elementsIndexAboutUSTransY > 0 && elementsIndexAboutUSTransY < animElementsIndexAboutUSPathLength[i]) {
                elementsIndexAboutUSOpac = 1 - ((elementsIndexAboutUSTransY / 100 * stepElementsIndexAboutUSOpac * 100) / 100);
            }
            elementsIndexAboutUS[i].setAttribute('style', `transform: translate3d(0px, ${elementsIndexAboutUSTransY.toFixed(2)}px, 0px); opacity: ${elementsIndexAboutUSOpac.toFixed(4)};`); //;
        } else if (blockPosY > (startAnimElementsIndexAboutUS[i] + animElementsIndexAboutUSPathLength[i])) {
            elementsIndexAboutUS[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //

        } else if (blockPosY < startAnimElementsIndexAboutUS[i]) {
            elementsIndexAboutUS[i].setAttribute('style', `opacity: 0;`);

        }
    }
    ////////////////////////////////////////////////////////////////////////

    /*
    //allSection[1] / index-advantages
    if (blockPosY > startAnimSectionTwo && blockPosY < (startAnimSectionTwo + animSectionPathLength)) {
        let sectionTransY = ((startAnimSectionTwo + animSectionPathLength) - blockPosY) * 100 / 100;


        let sectionOpac = 0;
        let stepSectionOpac = 100 / animSectionPathLength;
        if (sectionTransY > 0 && sectionTransY < animSectionPathLength) {
            sectionOpac = 1 - ((sectionTransY / 100 * stepSectionOpac * 100) / 100);
        }
        allSection[1].setAttribute('style', `transform: translate3d(0px, ${sectionTransY.toFixed(2)}px, 0px); opacity: ${sectionOpac.toFixed(4)};`); //;
    }
    ////////////////////////////////////////////////////////////////////////
    //allSection[2] / index-catalog
    if (blockPosY > startAnimSectionThree && blockPosY < (startAnimSectionThree + animSectionPathLength)) {
        let sectionTransY = ((startAnimSectionThree + animSectionPathLength) - blockPosY) * 100 / 100;


        let sectionOpac = 0;
        let stepSectionOpac = 100 / animSectionPathLength;
        if (sectionTransY > 0 && sectionTransY < animSectionPathLength) {
            sectionOpac = 1 - ((sectionTransY / 100 * stepSectionOpac * 100) / 100);
        }
        allSection[2].setAttribute('style', `transform: translate3d(0px, ${sectionTransY.toFixed(2)}px, 0px); opacity: ${sectionOpac.toFixed(4)};`); //;
    }
    ////////////////////////////////////////////////////////////////////////
    //allSection[3] / index-aboutUs
    if (blockPosY > startAnimSectionFour && blockPosY < (startAnimSectionFour + animLastSectionPathLength)) {
        let sectionTransY = ((startAnimSectionFour + animLastSectionPathLength) - blockPosY) * 100 / 100;


        let sectionOpac = 0;
        let stepSectionOpac = 100 / animLastSectionPathLength;
        if (sectionTransY > 0 && sectionTransY < animLastSectionPathLength) {
            sectionOpac = 1 - ((sectionTransY / 100 * stepSectionOpac * 100) / 100);
        }
        allSection[3].setAttribute('style', `transform: translate3d(0px, ${sectionTransY.toFixed(2)}px, 0px); opacity: ${sectionOpac.toFixed(4)};`); //;
    }
    ////////////////////////////////////////////////////////////////////////
*/


    //animation progress
    /*The progress bar width is set in %.
    You need to subtract the window height(window.innerHeight) from the height of the entire page(heightForScroll) - 
    from here I find out the maximum value - window.pageYOffset - scroll position.
    Then the percentage is calculated.(blockPosY / (heightForScroll - window.innerHeight) * 100)*/

    progressWidth = (blockPosY / (heightForScroll - window.innerHeight) * 100)
    progress.setAttribute('style', `width: ${progressWidth.toFixed(2)}%; z-index: 5; border-radius: 0px 50px 50px 0px;`);

    //console.log(window.innerHeight, 'window.innerHeight');
    //console.log(blockPosY, 'blockPosY');
    //console.log(heightForScroll, 'heightForScroll')



    //animation page
    forSmoothScrollWrapper.setAttribute('style', `transform: translate3d(0px, -${blockPosY}px, 0px)`);

    window.requestAnimationFrame(smooth);

}

function linear(arg1, arg2, arg3) {
    //linear(blockPosY, scrPosY, speedAnim)
    //return  (1 - arg3) * arg1 + arg3 * arg2;
    return arg2 + (arg1 - arg2) * (1 - arg3) // start_value + (end_value - start_value) * f(t) /easeOut

}

const swiperCardIndexSlides = swiperCard.querySelectorAll(".addAnimSwiperIndex"); //start by selecting all the Slides


function reveal() {


    for (let i = 0; i < swiperCardIndexSlides.length; i++) {
        const windowHeight = window.innerHeight; //windowHeight gets the height of the viewport (innerHeight)
        const elementTop = swiperCardIndexSlides[i].getBoundingClientRect().top; //calculates the distance from the top of the viewport to the top of the block
        const elementVisible = 150; //animation will start when the block is 150px away from the bottom of the viewport.


        //console.log(windowHeight + " windowHeight")
        //console.log(elementTop + " elementTop")
        //If this condition is true, it means the block is within the viewport, and the class swiper-slideIndexVisible, 
        //which has the style changes, is added. If the block is not within the defined 
        //visibility area, the swiper-slideIndexVisible class is removed, reverting the animation.
        if (elementTop < windowHeight) {
            swiperCardIndexSlides[i].classList.add("swiper-slideIndexVisible");

        } else {
            swiperCardIndexSlides[i].classList.remove("swiper-slideIndexVisible");
        }
    }
}

window.addEventListener("scroll", reveal);

//gives the height of the body so that scrolling occurs
let heightForScroll;

window.addEventListener("load", changeBodyStartEndAnimPrep);
window.addEventListener('resize', changeBodyStartEndAnimPrep)

function changeBodyStartEndAnimPrep() {
    heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));
    body.setAttribute('style', `height:${heightForScroll}px`);
}