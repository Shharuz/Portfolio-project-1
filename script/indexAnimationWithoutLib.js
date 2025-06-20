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
const p_indexOnlineStore = indexOnlineStore.querySelector('p');
//console.log(p_indexOnlineStore);
const linksOnlineStore = indexOnlineStore.querySelectorAll('a');
//console.log(linksOnlineStore);
const progress = document.querySelector('.progress');

const sizewindow = document.querySelector('.sizewindow');
sizewindow.innerHTML = window.innerWidth;



let adjustmentProgressWidth;
let progressWidth;


//Preparing H1(adding wrappers) for animation
const h1 = document.querySelector('h1');
let stringH;
let arrayLettersH = [];

//Preparing first H2(adding wrappers) for animation
const h2 = document.querySelectorAll('h2');

creatingWrappers(h2[0], 'Каталог нашей продукции', 1, 0, 0, 0); //approximately on line 128

////Preparing indexOnlineStore-H3(adding wrappers) for animation
const h3 = indexOnlineStore.querySelector('h3');
creatingWrappers(h3, 'Мы на маркетплейсах', 1, 0, 0, 0); //approximately on line 128

window.addEventListener('resize', changeBodyStartEndAnimPrep); //approximately on line 58
window.addEventListener('DOMContentLoaded', changeBodyStartEndAnimPrep);

//variables so that rebuilding during resize works 1 time
let tmpForPrepH1Adaptiv;
let tmpForPrepSecondH2Adaptiv;
let tmpForPrepThirdH2Adaptiv;



//arg1 = h1 or h2[i]
//arg2 = content h1 or h2  ( string )
//arg3 = amount lines
//arg4 = amount words in 1 line
//arg5 = amount words in 2 line
//arg6 = amount words in 3 line
//arg7 = amount words

function changeBodyStartEndAnimPrep() {
    //gives the height of the body so that scrolling occurs
    heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));
    body.setAttribute('style', `height:${heightForScroll}px`);

    sizewindow.innerHTML = window.innerWidth;
    //Preparing H1(adding wrappers) for animation
    if (window.innerWidth > 736) {
        if (tmpForPrepH1Adaptiv != 0) {
            tmpForPrepH1Adaptiv = 0;
            creatingWrappers(h1, 'Живые Бактерии™ для людей, животных и растений', 2, 2, 5, 0); //approximately on line 128
        }
        //console.log(tmpForPrepH1Adaptiv);

    } else if (window.innerWidth <= 735) {

        if (tmpForPrepH1Adaptiv != 1) {
            tmpForPrepH1Adaptiv = 1;
            creatingWrappers(h1, 'Живые Бактерии™ для людей, животных и растений', 3, 2, 3, 2); //approximately on line 128
        }
        //console.log(tmpForPrepH1Adaptiv);
    }


    //Preparing second H2(adding wrappers) for animation(index-catalog)
    if (window.innerWidth > 1101) {
        if (tmpForPrepSecondH2Adaptiv != 0) {
            tmpForPrepSecondH2Adaptiv = 0;
            creatingWrappers(h2[1], 'Посмотрите самые популярные товары', 1, 0, 0, 0) //approximately on line 128
            console.log('rrrrr')
        }


    } else if (window.innerWidth <= 1100) {
        if (tmpForPrepSecondH2Adaptiv != 1) {
            tmpForPrepSecondH2Adaptiv = 1;
            creatingWrappers(h2[1], 'Посмотрите самые популярные товары', 2, 2, 2, 0) //approximately on line 128
        }

    }
    //Preparing third H2(adding wrappers) for animation(index-aboutUs)
    if (window.innerWidth > 361) {
        if (tmpForPrepThirdH2Adaptiv != 0) {
            tmpForPrepThirdH2Adaptiv = 0;
            creatingWrappers(h2[2], 'Мы гарантия качества', 1, 0, 0, 0) //approximately on line 128
        }

    } else {
        if (tmpForPrepThirdH2Adaptiv != 1) {
            tmpForPrepThirdH2Adaptiv = 1;
            creatingWrappers(h2[2], 'Мы гарантия качества', 2, 2, 2, 0) //approximately on line 128
        }

    }


}

//arg1 = h1 or h2[i]
//arg2 = content h1 or h2  ( string )
//arg3 = amount lines
//arg4 = amount words in 1 line
//arg5 = amount words in 2 line
//arg6 = amount words in 3 line
//arg7 = amount words


function creatingWrappers(arg1, arg2, arg3, arg4, arg5, arg6) {
    //arg1.innerHTML = '';
    arg1.innerHTML = arg2; //replaces the contents of an element
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

    if (arg3 == 1) { //if you need to make a line in 1 line
        let line = document.createElement("div"); //creating a line and adding it to an element (H1 or H2)
        line.classList.add('line');
        arg1.append(line);
        for (let i = 0; i < count; ++i) {
            creatingWrappersWordsSymbols(line); //approximately on line 176
        }

    } else if (arg3 > 1) { //if you need to make a line in 2 lines or more
        for (let y = 0; y < arg3; ++y) { // y < arg3(3) = make 3 lines 
            let line = document.createElement("div"); //creating a line and adding it to an element (H1 or H2)
            line.classList.add('line');
            arg1.append(line);
            if (y == 0) { //1ST LINE SETTINGS 
                for (let i = 0; i < arg4; ++i) { //  i < arg4(2) =  2 words in line
                    creatingWrappersWordsSymbols(line); //approximately on line 176
                }
            } else if (y == 1) { //2ND LINE SETTINGS 
                for (let i = 0; i < arg5; ++i) { // //  i < arg5(3) =  3 words in line 
                    creatingWrappersWordsSymbols(line) //approximately on line 176
                }
            } else if (y == 2) { //3ND LINE SETTINGS 
                for (let i = 0; i < arg6; ++i) { // //  i < arg6(2) =  2 words in  line 
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


//gives the height of the body so that scrolling occurs
let heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));
body.setAttribute('style', `height:${heightForScroll}px`);


let scrPosY = 0; //for scroll positions
let blockPosY = scrPosY; // for forSmoothScrollWrapper position
let speedAnim = 0.03; //if speedAnim > 0.07 (0.1) animation happens faster
//if speedAnim < 0.07 (0.02) animation is slower


window.addEventListener('scroll', getsScrollValue); //get scroll position
const forFixWidget = document.querySelector('.widget');

function getsScrollValue() {
    scrPosY = window.pageYOffset;
    //console.log(scrPosY);
    forFixWidget.setAttribute('style', `transform: translate3d(0px, ${scrPosY.toFixed(2)}px, 0px); right: 3vw; z-index: 5;`); //when scrolling the widget will be in the right place
}

let startAnimSection;
let endAnimSection;
let lengthAnimSection;
let prevSectionHeight;
let tilt;
let scrollBarHeight
let startAnimLetterWordH1;
let endAnimLetterWordH1;
let startAnimLetterWordH2;
let endAnimLetterWordH2;

window.requestAnimationFrame(smooth);

function smooth() {
    blockPosY = linear(blockPosY, scrPosY, speedAnim) //calculate forSmoothScrollWrapper position by linear interpolation method
    blockPosY = Math.floor(blockPosY * 100) / 100;

    //console.log(blockPosY,'blockPosY');
    //console.log(scrPosY);
    if (window.innerHeight <= 1440) {
        startAnimSection = 0;
        endAnimSection = 0;
        lengthAnimSection = 200;
        prevSectionHeight = 0;

        for (let i = 1; i < allSection.length; ++i) {
            //console.log(allSection.length) == 4
            if (i == 1) {
                if (window.innerHeight > 1081 && window.innerWidth > 1401) {
                    if (startAnimSection != 1) {
                        startAnimSection = 1;
                        endAnimSection = 151;
                    }

                } else if (window.innerHeight <= 1080 && window.innerWidth > 1401) {
                    if (startAnimSection != 300) {
                        startAnimSection = 300;
                        endAnimSection = 450;
                    }

                } else if (window.innerWidth <= 1400 && window.innerWidth > 1101) {
                    if (startAnimSection != 600) {
                        startAnimSection = 600;
                        endAnimSection = 750;
                    }

                } else if (window.innerWidth <= 1100 && window.innerWidth > 801) {
                    if (startAnimSection != 300) {
                        startAnimSection = 300;
                        endAnimSection = 450;
                    }

                } else if (window.innerWidth <= 800 && window.innerWidth > 581) {
                    if (startAnimSection != 400) {
                        startAnimSection = 400;
                        endAnimSection = 500;
                    }
                } else if (window.innerWidth <= 580 && window.innerWidth > 0) {
                    if (startAnimSection != 720) {
                        startAnimSection = 720;
                        endAnimSection = 790;
                    }
                }

                //animation indexOnlineStore
                if (window.innerWidth <= 1400) {
                    let startAnimindexOnlineStore = startAnimSection - 299;
                    let endAnimindexOnlineStore = endAnimSection - 299;
                    //comments see approximately line 303
                    let animindexOnlineStorePathLength = endAnimindexOnlineStore - startAnimindexOnlineStore;
                    if (blockPosY > startAnimindexOnlineStore && blockPosY < endAnimindexOnlineStore) {
                        let indexOnlineStoreTransY = (endAnimindexOnlineStore - blockPosY) * 100 / 100;
                        let indexOnlineStoreOpac = 0;

                        let stepindexOnlineStoreOpac = 100 / animindexOnlineStorePathLength // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                        if (indexOnlineStoreTransY > 0 && indexOnlineStoreTransY < animindexOnlineStorePathLength) {
                            indexOnlineStoreOpac = 1 - ((indexOnlineStoreTransY / 100 * stepindexOnlineStoreOpac * 100) / 100);
                        }

                        indexOnlineStore.setAttribute('style', `transform: translate3d(0px, ${indexOnlineStoreTransY.toFixed(2)}px, 0px); opacity: ${indexOnlineStoreOpac.toFixed(4)};`);

                    } else if (blockPosY > endAnimindexOnlineStore) {
                        indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                    } else if (blockPosY < startAnimindexOnlineStore) {
                        indexOnlineStore.setAttribute('style', `opacity: 0;`);
                    }

                    //animate indexOnlineStore h3
                    let collectline = h3.querySelectorAll('.line');

                    for (let i = 0; i < collectline.length; ++i) {
                        let h3Words = collectline[i].querySelectorAll('.wrapperForWord');
                        let h3AllLetters = [];
                        for (let word of h3Words) {
                            let h3Wordletters = word.querySelectorAll('.wrapperSymbol');
                            for (let letter of h3Wordletters) {
                                h3AllLetters.push(letter);
                            }
                        }

                        if (window.innerWidth > 801) {
                            startAnimLetterWordh3 = startAnimindexOnlineStore;
                            endAnimLetterWordh3 = endAnimindexOnlineStore - 120;
                        } else if (window.innerWidth <= 800 && window.innerWidth > 581) {
                            startAnimLetterWordh3 = startAnimindexOnlineStore;
                            endAnimLetterWordh3 = endAnimindexOnlineStore - 70;
                        } else if (window.innerWidth <= 580 && window.innerWidth > 0) {
                            startAnimLetterWordh3 = startAnimindexOnlineStore;
                            endAnimLetterWordh3 = endAnimindexOnlineStore - 50;
                        }




                        for (let i = 0; i < h3AllLetters.length; ++i) {
                            if (window.innerWidth >= 801) {
                                tilt = 0.5
                            } else if ((window.innerWidth <= 800)) {
                                tilt = 0.4
                            }
                            startAnimLetterWordh3 += i * tilt // how much each subsequent letter will 
                            endAnimLetterWordh3 += i * tilt // be lower than the previous one (the overall slope of the line) 0.2 weaker slope > 0.4 > 0.8 more tilt
                            //comments see approximately line 303
                            let animationh3WordLetterPathLength = endAnimLetterWordh3 - startAnimLetterWordh3;
                            if (blockPosY > startAnimLetterWordh3 && blockPosY < endAnimLetterWordh3) {
                                let h3WordsLetterTransY = (endAnimLetterWordh3 - blockPosY) * 100 / 100;
                                let h3WordsLetterOpac = 0;

                                let steph3WordsLetterOpac = 100 / animationh3WordLetterPathLength; // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                                if (h3WordsLetterTransY > 0 && h3WordsLetterTransY < animationh3WordLetterPathLength) {
                                    h3WordsLetterOpac = 1 - ((h3WordsLetterTransY / 100 * steph3WordsLetterOpac * 100) / 100);
                                }

                                h3AllLetters[i].setAttribute('style', `transform: translate3d(0px, ${h3WordsLetterTransY.toFixed(2)}px, 0px); opacity: ${h3WordsLetterOpac.toFixed(4)};`);
                            } else if (blockPosY > endAnimLetterWordh3) {
                                h3AllLetters[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                            } else if (blockPosY < startAnimLetterWordh3) {
                                h3AllLetters[i].setAttribute('style', `opacity: 0;`);
                            }
                        }
                    }

                    //animate indexOnlineStore p
                    let startAnimp_indexOnlineStore;
                    let endAnimp_indexOnlineStore;

                    if (window.innerWidth > 801) {
                        startAnimp_indexOnlineStore = startAnimindexOnlineStore;
                        endAnimp_indexOnlineStore = endAnimindexOnlineStore - 50;
                    } else if (window.innerWidth <= 800 && window.innerWidth > 581) {
                        startAnimp_indexOnlineStore = startAnimindexOnlineStore;
                        endAnimp_indexOnlineStore = endAnimindexOnlineStore - 30;
                    } else if (window.innerWidth <= 580 && window.innerWidth > 0) {
                        startAnimp_indexOnlineStore = startAnimindexOnlineStore;
                        endAnimp_indexOnlineStore = endAnimindexOnlineStore - 10;
                    }
                    
                    let animp_indexOnlineStorePathLength = endAnimp_indexOnlineStore - startAnimp_indexOnlineStore;
                    if (blockPosY > startAnimp_indexOnlineStore && blockPosY < endAnimp_indexOnlineStore) {
                        let p_indexOnlineStoreTransY = (endAnimp_indexOnlineStore - blockPosY) * 100 / 100;
                        let p_indexOnlineStoreOpac = 0;

                        let stepp_indexOnlineStoreOpac = 100 / animp_indexOnlineStorePathLength // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                        if (p_indexOnlineStoreTransY > 0 && p_indexOnlineStoreTransY < animp_indexOnlineStorePathLength) {
                            p_indexOnlineStoreOpac = 1 - ((p_indexOnlineStoreTransY / 100 * stepp_indexOnlineStoreOpac * 100) / 100);
                        }

                        p_indexOnlineStore.setAttribute('style', `transform: translate3d(0px, ${p_indexOnlineStoreTransY.toFixed(2)}px, 0px); opacity: ${p_indexOnlineStoreOpac.toFixed(4)};`);

                    } else if (blockPosY > endAnimp_indexOnlineStore) {
                        p_indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                    } else if (blockPosY < startAnimp_indexOnlineStore) {
                        p_indexOnlineStore.setAttribute('style', `opacity: 0;`);
                    }

                    //animate linksOnlineStore
                    let startAnimlinksOnlineStore;
                    let endAnimlinksOnlineStore;
                    if (window.innerWidth > 801) {
                        startAnimlinksOnlineStore = startAnimindexOnlineStore;
                        endAnimlinksOnlineStore = endAnimindexOnlineStore - 100;
                    } else if (window.innerWidth <= 800 && window.innerWidth > 581) {
                        startAnimlinksOnlineStore = startAnimindexOnlineStore;
                        endAnimlinksOnlineStore = endAnimindexOnlineStore - 70;
                    } else if (window.innerWidth <= 580 && window.innerWidth > 0) {
                        startAnimlinksOnlineStore = startAnimindexOnlineStore;
                        endAnimlinksOnlineStore = endAnimindexOnlineStore - 50;
                    }


                    for (let i = 0; i < linksOnlineStore.length; ++i) { //customize the appearance of elements

                        startAnimlinksOnlineStore += 30;
                        endAnimlinksOnlineStore += 30;

                        let animlinksOnlineStorePathLength = endAnimlinksOnlineStore - startAnimlinksOnlineStore;
                        if (blockPosY > startAnimlinksOnlineStore && blockPosY < endAnimlinksOnlineStore) {
                            let linksOnlineStoreTransY = (endAnimlinksOnlineStore - blockPosY) * 100 / 100;
                            let linksOnlineStoreOpac = 0;

                            let steplinksOnlineStoreOpac = 100 / animlinksOnlineStorePathLength // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                            if (linksOnlineStoreTransY > 0 && linksOnlineStoreTransY < animlinksOnlineStorePathLength) {
                                linksOnlineStoreOpac = 1 - ((linksOnlineStoreTransY / 100 * steplinksOnlineStoreOpac * 100) / 100);
                            }
                            if (window.innerWidth > 1100) {
                                linksOnlineStore[i].setAttribute('style', `transform: translate3d(${linksOnlineStoreTransY.toFixed(2)}px, 0px, 0px); opacity: ${linksOnlineStoreOpac.toFixed(4)};`);
                            } else {
                                linksOnlineStore[i].setAttribute('style', `transform: translate3d(0px, ${linksOnlineStoreTransY.toFixed(2)}px, 0px); opacity: ${linksOnlineStoreOpac.toFixed(4)};`);
                            }


                        } else if (blockPosY > endAnimlinksOnlineStore) {
                            linksOnlineStore[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                        } else if (blockPosY < startAnimlinksOnlineStore) {
                            linksOnlineStore[i].setAttribute('style', `opacity: 0;`);
                        }
                    }


                } else {
                    indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);

                    let h3Words = h3.querySelectorAll('.wrapperForWord');
                    let h3AllLetters = [];
                    for (let word of h3Words) {
                        let h3Wordletters = word.querySelectorAll('.wrapperSymbol');
                        for (let letter of h3Wordletters) {
                            h3AllLetters.push(letter);
                        }
                    }
                    for (let i = 0; i < h3AllLetters.length; ++i) {
                        h3AllLetters[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                    }

                    p_indexOnlineStore.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);

                    for (let i = 0; i < linksOnlineStore.length; ++i) {
                        linksOnlineStore[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                    }

                }

                //animation h1
                let collectline = allSection[i].querySelectorAll('.line');
                for (let line of collectline) {
                    let h1Words = line.querySelectorAll('.wrapperForWord');
                    let h1AllLetters = [];
                    for (let word of h1Words) {
                        let h1Wordletters = word.querySelectorAll('.wrapperSymbol');
                        for (let letter of h1Wordletters) { //all characters from a line/word are taken and put into an array
                            h1AllLetters.push(letter);
                        }
                    }
                    //start and end of animation H1 or H2, relative to section animation
                    //if startAnimSection + x -> then animation will start later than section animation
                    //if startAnimSection - x -> then animation will start earlier than section animation
                    //if startAnimSection is unchanged, and endAnimSection +/- x, then animation length will be adjusted
                    if (window.innerWidth > 801) {
                        startAnimLetterWordH1 = startAnimSection;
                        endAnimLetterWordH1 = endAnimSection - 130;
                    } else if (window.innerWidth <= 800 && window.innerWidth > 581) {
                        startAnimLetterWordH1 = startAnimSection;
                        endAnimLetterWordH1 = endAnimSection - 80;
                    } else if (window.innerWidth <= 580 && window.innerWidth > 0) {
                        startAnimLetterWordH1 = startAnimSection;
                        endAnimLetterWordH1 = endAnimSection - 50;
                    }


                    for (let i = 0; i < h1AllLetters.length; ++i) { //loop through all characters
                        if (window.innerWidth >= 801) {
                            tilt = 0.5
                        } else if ((window.innerWidth <= 800)) {
                            tilt = 0.3
                        }
                        startAnimLetterWordH1 += i * tilt // how much each subsequent letter will 
                        endAnimLetterWordH1 += i * tilt // be lower than the previous one (the overall slope of the line) 0.2 weaker slope > 0.4 > 0.8 more tilt
                        let animationH1WordLetterPathLength = endAnimLetterWordH1 - startAnimLetterWordH1; //length of animation
                        if (blockPosY > startAnimLetterWordH1 && blockPosY < endAnimLetterWordH1) { //start and end of animation H1 or H2 relative to scroll
                            let h1WordsLetterTransY = (endAnimLetterWordH1 - blockPosY) * 100 / 100; //symbol position relative to scroll
                            let h1WordsLetterOpac = 0;

                            let stepH1WordsLetterOpac = 100 / animationH1WordLetterPathLength; // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                            if (h1WordsLetterTransY > 0 && h1WordsLetterTransY < animationH1WordLetterPathLength) {
                                h1WordsLetterOpac = 1 - ((h1WordsLetterTransY / 100 * stepH1WordsLetterOpac * 100) / 100); //mathematical wizardry to make the opacity value equal to the animation length
                                // 18px == 100unit opacity, 9px == 50unit opacity etc.
                            }

                            //sets the symbol position
                            h1AllLetters[i].setAttribute('style', `transform: translate3d(0px, ${h1WordsLetterTransY.toFixed(2)}px, 0px); opacity: ${h1WordsLetterOpac.toFixed(4)};`);

                        } else if (blockPosY > endAnimLetterWordH1) { //correct display of the element when
                            //the scroll value went beyond the start and end of the animation, or the scroll happened too fast
                            h1AllLetters[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                        } else if (blockPosY < startAnimLetterWordH1) {
                            h1AllLetters[i].setAttribute('style', `opacity: 0;`);
                        }
                    }
                }

                //animation indexAdvantagesBlockItems + links

                let startAnimIndexAdvantagesBlockItem = startAnimSection;
                let endAnimIndexAdvantagesBlockItem = endAnimSection;

                for (let i = 0; i < indexAdvantagesBlockItems.length; ++i) { //customize the appearance of elements
                    if (window.innerWidth > 580) {
                        if (i == 0 || i == 2) { //after the 2nd element there will be - 1 and 3 elements
                            startAnimIndexAdvantagesBlockItem += 100;
                            endAnimIndexAdvantagesBlockItem += 100;
                        } else if (i == 3 || i == 4) {
                            startAnimIndexAdvantagesBlockItem += 30; //after 1 and 3 elements 4 and 5 elements will appear in a ladder
                            endAnimIndexAdvantagesBlockItem += 30;
                        } else {
                            startAnimIndexAdvantagesBlockItem = startAnimSection; //2 element will appear first
                            endAnimIndexAdvantagesBlockItem = endAnimSection;
                        }
                    } else if (window.innerWidth <= 580) {
                        if (i == 0 || i == 2) { //after the 2nd element there will be - 1 and 3 elements
                            startAnimIndexAdvantagesBlockItem += 50;
                            endAnimIndexAdvantagesBlockItem += 50;
                        } else if (i == 3 || i == 4) {
                            startAnimIndexAdvantagesBlockItem += 30; //after 1 and 3 elements 4 and 5 elements will appear in a ladder
                            endAnimIndexAdvantagesBlockItem += 30;
                        } else {
                            startAnimIndexAdvantagesBlockItem = startAnimSection; //2 element will appear first
                            endAnimIndexAdvantagesBlockItem = endAnimSection;
                        }
                    }

                    /*to remove the ladder you need
                    else if (i == 3 ) {
                        startAnimIndexAdvantagesBlockItem += 30;
                        endAnimIndexAdvantagesBlockItem += 30;
                    }else if (i == 4) {
                        startAnimIndexAdvantagesBlockItem ;
                        endAnimIndexAdvantagesBlockItem ;
                    } */

                    //comments see approximately line 303
                    let animIndexAdvantagesBlockItemPathLength = endAnimIndexAdvantagesBlockItem - startAnimIndexAdvantagesBlockItem;
                    if (blockPosY > startAnimIndexAdvantagesBlockItem && blockPosY < endAnimIndexAdvantagesBlockItem) {
                        let indexAdvantagesBlockItemTransY = (endAnimIndexAdvantagesBlockItem - blockPosY) * 100 / 100;
                        let indexAdvantagesBlockItemOpac = 0;

                        let stepindexAdvantagesBlockItemOpac = 100 / animIndexAdvantagesBlockItemPathLength // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                        if (indexAdvantagesBlockItemTransY > 0 && indexAdvantagesBlockItemTransY < animIndexAdvantagesBlockItemPathLength) {
                            indexAdvantagesBlockItemOpac = 1 - ((indexAdvantagesBlockItemTransY / 100 * stepindexAdvantagesBlockItemOpac * 100) / 100);
                        }
                        indexAdvantagesBlockItems[i].setAttribute('style', `transform: translate3d(0px, ${indexAdvantagesBlockItemTransY.toFixed(2)}px, 0px); opacity: ${indexAdvantagesBlockItemOpac.toFixed(4)};`);

                    } else if (blockPosY > endAnimIndexAdvantagesBlockItem) {
                        indexAdvantagesBlockItems[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                    } else if (blockPosY < startAnimIndexAdvantagesBlockItem) {
                        indexAdvantagesBlockItems[i].setAttribute('style', `opacity: 0;`);
                    }
                }

            } else if (i == 2) {
                if (window.innerHeight > 1081 && window.innerWidth > 1401) {
                    if (startAnimSection != 500) {
                        startAnimSection = 500;
                        endAnimSection = 700;
                    }

                } else if (window.innerHeight <= 1080 && window.innerWidth > 1401) {
                    if (startAnimSection != 800) {
                        startAnimSection = 800;
                        endAnimSection = 950;
                    }

                } else if (window.innerWidth <= 1400 && window.innerWidth > 1101) {
                    if (startAnimSection != 1100) {
                        startAnimSection = 1100;
                        endAnimSection = 1250;
                    }

                } else if (window.innerWidth <= 1100 && window.innerWidth > 801) {
                    if (startAnimSection != 1100) {
                        startAnimSection = 1100;
                        endAnimSection = 1250;
                    }

                } else if (window.innerWidth <= 800 && window.innerWidth > 581) {
                    if (startAnimSection != 1100) {
                        startAnimSection = 1100;
                        endAnimSection = 1200;
                    }
                } else if (window.innerWidth <= 580 && window.innerWidth > 0) {
                    if (startAnimSection != 900) {
                        startAnimSection = 900;
                        endAnimSection = 970;
                    }
                }

            } else if (i == 3) {
                if (window.innerHeight > 1081 && window.innerWidth > 1401) {
                    if (startAnimSection != 1800) {
                        startAnimSection = 1800;
                        endAnimSection = 2000;
                    }

                } else if (window.innerHeight <= 1080 && window.innerWidth > 1401) {
                    if (startAnimSection != 2200) {
                        startAnimSection = 2200;
                        endAnimSection = 2350;
                    }

                } else if (window.innerWidth <= 1400 && window.innerWidth > 1101) {
                    if (startAnimSection != 2600) {
                        startAnimSection = 2600;
                        endAnimSection = 2750;
                    }

                } else if (window.innerWidth <= 1100 && window.innerWidth > 801) {
                    if (startAnimSection != 2700) {
                        startAnimSection = 2700;
                        endAnimSection = 2850;
                    }

                } else if (window.innerWidth <= 800 && window.innerWidth > 581) {
                    if (startAnimSection != 2600) {
                        startAnimSection = 2600;
                        endAnimSection = 2700;
                    }
                } else if (window.innerWidth <= 580 && window.innerWidth > 0) {
                    if (startAnimSection != 1800) {
                        startAnimSection = 1800;
                        endAnimSection = 1870;
                    }
                }

            }

            //animation h2
            if (allSection[i].querySelector('h2')) {


                let collectH2 = allSection[i].querySelectorAll('h2');

                for (let y = 0; y < collectH2.length; ++y) {
                    let collectline = collectH2[y].querySelectorAll('.line');

                    for (let i = 0; i < collectline.length; ++i) {
                        let h2Words = collectline[i].querySelectorAll('.wrapperForWord');
                        let h2AllLetters = [];
                        for (let word of h2Words) {
                            let h2Wordletters = word.querySelectorAll('.wrapperSymbol');
                            for (let letter of h2Wordletters) {
                                h2AllLetters.push(letter);
                            }
                        }
                        if (y == 0) {
                            if (window.innerWidth > 801) {
                                startAnimLetterWordH2 = startAnimSection;
                                endAnimLetterWordH2 = endAnimSection - 130;
                            } else if (window.innerWidth <= 800 && window.innerWidth > 581) {
                                startAnimLetterWordH2 = startAnimSection;
                                endAnimLetterWordH2 = endAnimSection - 80;
                            } else if (window.innerWidth <= 580 && window.innerWidth > 0) {
                                startAnimLetterWordH2 = startAnimSection;
                                endAnimLetterWordH2 = endAnimSection - 50;
                            }
                        } else if (y == 1) {
                            if (window.innerWidth > 801) {
                                startAnimLetterWordH2 = startAnimSection + 200;
                                endAnimLetterWordH2 = (endAnimSection + 200) - 100;
                            } else if (window.innerWidth <= 800 && window.innerWidth > 581) {
                                startAnimLetterWordH2 = startAnimSection + 200;
                                endAnimLetterWordH2 = (endAnimSection + 200) - 80;
                            } else if (window.innerWidth <= 580 && window.innerWidth > 0) {
                                startAnimLetterWordH2 = startAnimSection + 200;
                                endAnimLetterWordH2 = (endAnimSection + 200) - 50;
                            }
                        }



                        for (let i = 0; i < h2AllLetters.length; ++i) {
                            if (window.innerWidth >= 801) {
                                tilt = 0.5
                            } else if ((window.innerWidth <= 800)) {
                                tilt = 0.4
                            }
                            startAnimLetterWordH2 += i * tilt // how much each subsequent letter will 
                            endAnimLetterWordH2 += i * tilt // be lower than the previous one (the overall slope of the line) 0.2 weaker slope > 0.4 > 0.8 more tilt
                            //comments see approximately line 303
                            let animationH2WordLetterPathLength = endAnimLetterWordH2 - startAnimLetterWordH2;
                            if (blockPosY > startAnimLetterWordH2 && blockPosY < endAnimLetterWordH2) {
                                let h2WordsLetterTransY = (endAnimLetterWordH2 - blockPosY) * 100 / 100;
                                let h2WordsLetterOpac = 0;

                                let stepH2WordsLetterOpac = 100 / animationH2WordLetterPathLength; // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                                if (h2WordsLetterTransY > 0 && h2WordsLetterTransY < animationH2WordLetterPathLength) {
                                    h2WordsLetterOpac = 1 - ((h2WordsLetterTransY / 100 * stepH2WordsLetterOpac * 100) / 100);
                                }

                                h2AllLetters[i].setAttribute('style', `transform: translate3d(0px, ${h2WordsLetterTransY.toFixed(2)}px, 0px); opacity: ${h2WordsLetterOpac.toFixed(4)};`);
                            } else if (blockPosY > endAnimLetterWordH2) {
                                h2AllLetters[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                            } else if (blockPosY < startAnimLetterWordH2) {
                                h2AllLetters[i].setAttribute('style', `opacity: 0;`);
                            }
                        }
                    }
                }

            }

            //animation linksIndexCatalog
            if (allSection[i].querySelector('.catalog-categories')) {
                let startAnimlinksIndexCatalog = startAnimSection + 30;
                let endAnimlinksIndexCatalog = endAnimSection + 30;

                for (let i = 0; i < linksIndexCatalog.length; ++i) {
                    let animlinksIndexCatalogPathLength = endAnimlinksIndexCatalog - startAnimlinksIndexCatalog;
                    if (window.innerWidth > 1100) {
                        movelinksIndexCatalog(i);
                        if (i == 2) {
                            startAnimlinksIndexCatalog += 30;
                            endAnimlinksIndexCatalog += 30;
                        }
                    } else if (window.innerWidth <= 1100) {
                        movelinksIndexCatalog(i);
                        if (i == 1 || i == 3 || i == 5) {
                            startAnimlinksIndexCatalog += 30;
                            endAnimlinksIndexCatalog += 30;
                        }
                    }


                    function movelinksIndexCatalog(arg1) {
                        //comments see approximately line 303
                        if (blockPosY > startAnimlinksIndexCatalog && blockPosY < endAnimlinksIndexCatalog) {
                            let linksIndexCatalogTransY = (endAnimlinksIndexCatalog - blockPosY) * 100 / 100;
                            let linksIndexCatalogOpac = 0;

                            let steplinksIndexCatalogOpac = 100 / animlinksIndexCatalogPathLength // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                            if (linksIndexCatalogTransY > 0 && linksIndexCatalogTransY < animlinksIndexCatalogPathLength) {
                                linksIndexCatalogOpac = 1 - ((linksIndexCatalogTransY / 100 * steplinksIndexCatalogOpac * 100) / 100);
                            }
                            if (window.innerWidth > 1100) {
                                //some of the elements will be from left to top, others from right to top
                                linksIndexCatalog[i].setAttribute('style', `transform: translate3d(-${linksIndexCatalogTransY.toFixed(2)}px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`);
                                if (arg1 == 1 || arg1 == 4) {
                                    linksIndexCatalog[i].setAttribute('style', `transform: translate3d(0px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`);
                                } else if (arg1 == 2 || arg1 == 5) {
                                    linksIndexCatalog[i].setAttribute('style', `transform: translate3d(${linksIndexCatalogTransY.toFixed(2)}px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`);
                                }
                            } else if (window.innerWidth <= 1100) {

                                linksIndexCatalog[i].setAttribute('style', `transform: translate3d(-${linksIndexCatalogTransY.toFixed(2)}px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`);
                                if (arg1 == 1 || arg1 == 3 || arg1 == 5) {
                                    linksIndexCatalog[i].setAttribute('style', `transform: translate3d(${linksIndexCatalogTransY.toFixed(2)}px, ${linksIndexCatalogTransY.toFixed(2)}px, 0px); opacity: ${linksIndexCatalogOpac.toFixed(4)};`);
                                }
                            }



                        } else if (blockPosY > endAnimlinksIndexCatalog) {
                            linksIndexCatalog[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                        } else if (blockPosY < startAnimlinksIndexCatalog) {
                            linksIndexCatalog[i].setAttribute('style', `opacity: 0;`);
                        }
                    }
                }

                //animation swiperCard
                let startAnimswiperCard = startAnimSection + 300;
                let endAnimswiperCard = endAnimSection + 300;
                //comments see approximately line 303
                let animswiperCardPathLength = endAnimswiperCard - startAnimswiperCard;
                if (blockPosY > startAnimswiperCard && blockPosY < endAnimswiperCard) {
                    let swiperCardTransY = (endAnimswiperCard - blockPosY) * 100 / 100;
                    let swiperCardOpac = 0;

                    let stepswiperCardOpac = 100 / animswiperCardPathLength // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                    if (swiperCardTransY > 0 && swiperCardTransY < animswiperCardPathLength) {
                        swiperCardOpac = 1 - ((swiperCardTransY / 100 * stepswiperCardOpac * 100) / 100);
                    }

                    swiperCard.setAttribute('style', `transform: translate3d(0px, ${swiperCardTransY.toFixed(2)}px, 0px); opacity: ${swiperCardOpac.toFixed(4)};`);

                } else if (blockPosY > endAnimswiperCard) {
                    swiperCard.setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                } else if (blockPosY < startAnimswiperCard) {
                    swiperCard.setAttribute('style', `opacity: 0;`);
                }

            }

            //animation elementsIndexAboutUS

            let startAnimelementsIndexAboutUS = startAnimSection;
            let endAnimelementsIndexAboutUS = endAnimSection;


            for (let i = 0; i < elementsIndexAboutUS.length; ++i) {
                let animelementsIndexAboutUSPathLength = endAnimelementsIndexAboutUS - startAnimelementsIndexAboutUS;
                if (window.innerWidth > 1401) {

                    moveelementsIndexAboutUS(i);
                    if (i == 2 || i == 3) {
                        startAnimelementsIndexAboutUS += 20
                        endAnimelementsIndexAboutUS += 20

                    }

                } else if (window.innerWidth <= 1400 && window.innerWidth > 581) {
                    startAnimelementsIndexAboutUS += 50
                    endAnimelementsIndexAboutUS += 50
                    moveelementsIndexAboutUS(i);
                } else if (window.innerWidth <= 580 && window.innerWidth > 0) {

                    startAnimelementsIndexAboutUS += 230
                    endAnimelementsIndexAboutUS += 230
                    if (i == 3) {
                        startAnimelementsIndexAboutUS -= 180
                        endAnimelementsIndexAboutUS -= 180

                    }
                    moveelementsIndexAboutUS(i);
                }


                function moveelementsIndexAboutUS(arg1) {
                    //comments see approximately line 303
                    if (blockPosY > startAnimelementsIndexAboutUS && blockPosY < endAnimelementsIndexAboutUS) {
                        let elementsIndexAboutUSTransY = (endAnimelementsIndexAboutUS - blockPosY) * 100 / 100;
                        let elementsIndexAboutUSOpac = 0;

                        let stepelementsIndexAboutUSOpac = 100 / animelementsIndexAboutUSPathLength // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                        if (elementsIndexAboutUSTransY > 0 && elementsIndexAboutUSTransY < animelementsIndexAboutUSPathLength) {
                            elementsIndexAboutUSOpac = 1 - ((elementsIndexAboutUSTransY / 100 * stepelementsIndexAboutUSOpac * 100) / 100);
                        }
                        if (window.innerWidth > 1400) {

                            elementsIndexAboutUS[i].setAttribute('style', `transform: translate3d(0px, ${elementsIndexAboutUSTransY.toFixed(2)}px, 0px); opacity: ${elementsIndexAboutUSOpac.toFixed(4)};`);
                            if (arg1 == 1) {
                                elementsIndexAboutUS[i].setAttribute('style', `transform: translate3d(${elementsIndexAboutUSTransY.toFixed(2)}px, 0px, 0px); opacity: ${elementsIndexAboutUSOpac.toFixed(4)};`);
                            }
                        } else if (window.innerWidth <= 1400) {

                            elementsIndexAboutUS[i].setAttribute('style', `transform: translate3d(0px, ${elementsIndexAboutUSTransY.toFixed(2)}px, 0px); opacity: ${elementsIndexAboutUSOpac.toFixed(4)};`);

                        }



                    } else if (blockPosY > endAnimelementsIndexAboutUS) {
                        elementsIndexAboutUS[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                    } else if (blockPosY < startAnimelementsIndexAboutUS) {
                        elementsIndexAboutUS[i].setAttribute('style', `opacity: 0;`);
                    }
                }
            }

            //animation allSection
            let animSectionPathLength = endAnimSection - startAnimSection;
            //comments see approximately line 303
            if (blockPosY > startAnimSection && blockPosY < endAnimSection) {
                let sectionTransY = (endAnimSection - blockPosY) * 100 / 100;
                let sectionOpac = 0;

                let stepSectionOpac = 100 / animSectionPathLength;
                if (sectionTransY > 0 && sectionTransY < animSectionPathLength) {
                    sectionOpac = 1 - ((sectionTransY / 100 * stepSectionOpac * 100) / 100);
                }
                allSection[i].setAttribute('style', `transform: translate3d(0px, ${sectionTransY.toFixed(2)}px, 0px); opacity: ${sectionOpac.toFixed(4)};`); //;
            } else if (blockPosY > endAnimSection) {
                allSection[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`); //

            } else if (blockPosY < startAnimSection) {
                allSection[i].setAttribute('style', `opacity: 0;`);

            }

        }


    } else {
        //section
        for (let i = 1; i < allSection.length; ++i) {
            allSection[i].setAttribute('style', `opacity: 1;`);
            //h1 and h2
            allSection[i].querySelectorAll('.wrapperSymbol').forEach((item) => {
                item.setAttribute('style', `opacity: 1;`);
            })
        }
        //indexAdvantagesBlockItems + links
        for (let i = 0; i < indexAdvantagesBlockItems.length; ++i) {
            indexAdvantagesBlockItems[i].setAttribute('style', `opacity: 1;`);
        }
        //linksIndexCatalog
        for (let i = 0; i < linksIndexCatalog.length; ++i) {
            linksIndexCatalog[i].setAttribute('style', `opacity: 1;`);
        }
        //swiperCard
        swiperCard.setAttribute('style', `opacity: 1;`);
        //animation elementsIndexAboutUS
        for (let i = 0; i < elementsIndexAboutUS.length; ++i) {
            elementsIndexAboutUS[i].setAttribute('style', `opacity: 1;`);
        }
    }

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


/*function linear(arg1, arg2, arg3) {
    return (1 - arg3) * arg1 + arg3 * arg2;
}*/

function linear(arg1, arg2, arg3) {
    return (1 - arg3) * arg1 + arg3 * arg2;
}

const swiperCardIndexSlides = swiperCard.querySelectorAll(".addAnimSwiperIndex");//start by selecting all the Slides
console.log()
function reveal() {
  

  for (let i = 0; i < swiperCardIndexSlides.length; i++) {
    const windowHeight = window.innerHeight;//windowHeight gets the height of the viewport (innerHeight)
    const elementTop = swiperCardIndexSlides[i].getBoundingClientRect().top; //calculates the distance from the top of the viewport to the top of the block
    const elementVisible = 150;//animation will start when the block is 150px away from the bottom of the viewport.



//If this condition is true, it means the block is within the viewport, and the class swiper-slideIndexVisible, 
//which has the style changes, is added. If the block is not within the defined 
//visibility area, the swiper-slideIndexVisible class is removed, reverting the animation.
    if (elementTop < windowHeight - elementVisible) {
      swiperCardIndexSlides[i].classList.add("swiper-slideIndexVisible");
 } else {
      swiperCardIndexSlides[i].classList.remove("swiper-slideIndexVisible");
 }
 }
}

window.addEventListener("scroll", reveal);