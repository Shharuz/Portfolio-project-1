const body = document.querySelector('body');
const forSmoothScrollWrapper = document.querySelector('.forSmoothScroll__wrapper');
const allSection = document.querySelectorAll('section');
//console.log(allSection);
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
const progress = document.querySelector('.progress');

const sizewindow = document.querySelector('.sizewindow');
sizewindow.innerHTML = window.innerWidth;

let adjustmentProgressWidth;
let progressWidth;


//Preparing H1(adding wrappers) for animation
const h1 = document.querySelector('h1');
let stringh1;
let arrayLettersh1 = [];

//Preparing first H2(adding wrappers) for animation
const h2 = document.querySelectorAll('h2');
let stringh2;
let arrayLettersh2 = [];

stringh2 = h2[0].innerHTML;
h2[0].innerHTML = '';
arrayLettersh2 = []
for (let char of stringh2) {
    arrayLettersh2.push(char);
}

let count = 1;
for (let i = 0; i < arrayLettersh2.length; ++i) {
    if (arrayLettersh2[i] == " ") {
        count++
    }
}
let lenghtArr = arrayLettersh2.length;

const lineH2 = document.createElement("div");
lineH2.classList.add('lineh2');
h2[0].append(lineH2);
for (let i = 0; i < count; ++i) {
    const wrapperForWord = document.createElement("div");
    wrapperForWord.classList.add('wrapperForWordh2');

    for (let y = 0; y < lenghtArr; ++y) {
        if (arrayLettersh2[0] == " ") {
            arrayLettersh2.splice(0, 1);
            break;
        } else if (arrayLettersh2[0] == undefined) break;
        const divForSymbol = document.createElement("div");
        divForSymbol.classList.add('wrapperSymbol');
        divForSymbol.innerHTML = arrayLettersh2[0];
        wrapperForWord.append(divForSymbol);
        arrayLettersh2.splice(0, 1);
    }

    lineH2.append(wrapperForWord);
}

let heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));
body.setAttribute('style', `height:${heightForScroll}px`);


let scrPosY = 0; //for scroll positions
let blockPosY = scrPosY; // for forSmoothScrollWrapper position
let speedAnim = 0.04; //if speedAnim > 0.07 (0.1) animation happens faster
//if speedAnim < 0.07 (0.02) animation is slower


window.addEventListener('scroll', getsScrollValue); //get scroll position

//
const forFixWidget = document.querySelector('.widget');

function getsScrollValue() {
    scrPosY = window.pageYOffset;
    //console.log(scrPosY);
    forFixWidget.setAttribute('style', `transform: translate3d(0px, ${scrPosY.toFixed(2)}px, 0px); right: 3vw; z-index: 5;`);

}

window.requestAnimationFrame(smooth);
let startAnim = 300;
let endAnim = 500;
let startAnimSection;
let endAnimSection;

window.addEventListener('resize', changeBodyStartEndAnimPrep);
window.addEventListener('DOMContentLoaded', changeBodyStartEndAnimPrep);

let tmpForPrepH1Adaptiv;
let tmpForPrepSecondH2Adaptiv;
let tmpForPrepThirdH2Adaptiv;

function changeBodyStartEndAnimPrep() {
    //body
    heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));
    body.setAttribute('style', `height:${heightForScroll}px`);

    sizewindow.innerHTML = window.innerWidth;
    //Preparing H1(adding wrappers) for animation
    if (window.innerWidth > 736) {
        if (tmpForPrepH1Adaptiv != 0) {
            tmpForPrepH1Adaptiv = 0;
            h1.innerHTML = 'Живые Бактерии™ для людей, животных и растений';
            stringh1 = h1.innerHTML;
            h1.innerHTML = '';
            arrayLettersh1 = []
            for (let char of stringh1) {
                arrayLettersh1.push(char);
            }

            let count = 1;
            for (let i = 0; i < arrayLettersh1.length; ++i) {
                if (arrayLettersh1[i] == " ") {
                    count++
                }
            }
            let lenghtArr = arrayLettersh1.length;

            for (let y = 0; y < 2; ++y) { // y < 2 = make 2 lines 
                const lineh1 = document.createElement("div");
                lineh1.classList.add('lineh1');
                h1.append(lineh1);
                if (y == 0) { //1ST LINE SETTINGS (PUT ONLY 2 WORDS)
                    for (let i = 0; i < 2; ++i) { //  i < 2 =  2 words in each line
                        const wrapperForWord = document.createElement("div");
                        wrapperForWord.classList.add('wrapperForWordh1');

                        for (let y = 0; y < lenghtArr; ++y) {
                            if (arrayLettersh1[0] == " ") {
                                arrayLettersh1.splice(0, 1);
                                break;
                            } else if (arrayLettersh1[0] == undefined) break;
                            const divForSymbol = document.createElement("div");
                            divForSymbol.classList.add('wrapperSymbol');
                            divForSymbol.innerHTML = arrayLettersh1[0];
                            wrapperForWord.append(divForSymbol);
                            arrayLettersh1.splice(0, 1);
                        }

                        lineh1.append(wrapperForWord);
                    }
                } else if (y > 0) { //2ND LINE SETTINGS (WILL ONLY PUT 5 WORDS)
                    for (let i = 0; i < 5; ++i) { //  
                        const wrapperForWord = document.createElement("div");
                        wrapperForWord.classList.add('wrapperForWordh1');

                        for (let y = 0; y < lenghtArr; ++y) {
                            if (arrayLettersh1[0] == " ") {
                                arrayLettersh1.splice(0, 1);
                                break;
                            } else if (arrayLettersh1[0] == undefined) break;
                            const divForSymbol = document.createElement("div");
                            divForSymbol.classList.add('wrapperSymbol');
                            divForSymbol.innerHTML = arrayLettersh1[0];
                            wrapperForWord.append(divForSymbol);
                            arrayLettersh1.splice(0, 1);
                        }

                        lineh1.append(wrapperForWord);
                    }
                }

            }
        }
        //console.log(tmpForPrepH1Adaptiv);

    } else if (window.innerWidth <= 735) {
        if (tmpForPrepH1Adaptiv != 1) {
            tmpForPrepH1Adaptiv = 1;
            h1.innerHTML = 'Живые Бактерии™ для людей, животных и растений';
            stringh1 = h1.innerHTML;
            h1.innerHTML = '';
            arrayLettersh1 = []
            for (let char of stringh1) {
                arrayLettersh1.push(char);
            }

            let count = 1;
            for (let i = 0; i < arrayLettersh1.length; ++i) {
                if (arrayLettersh1[i] == " ") {
                    count++
                }
            }
            let lenghtArr = arrayLettersh1.length;

            for (let y = 0; y < 3; ++y) { // y < 2 = make 2 lines 
                const lineh1 = document.createElement("div");
                lineh1.classList.add('lineh1');
                h1.append(lineh1);
                if (y == 0) { //1ST LINE SETTINGS (PUT ONLY 2 WORDS)
                    for (let i = 0; i < 2; ++i) { //  i < 2 =  2 words in each line
                        const wrapperForWord = document.createElement("div");
                        wrapperForWord.classList.add('wrapperForWordh1');

                        for (let y = 0; y < lenghtArr; ++y) {
                            if (arrayLettersh1[0] == " ") {
                                arrayLettersh1.splice(0, 1);
                                break;
                            } else if (arrayLettersh1[0] == undefined) break;
                            const divForSymbol = document.createElement("div");
                            divForSymbol.classList.add('wrapperSymbol');
                            divForSymbol.innerHTML = arrayLettersh1[0];
                            wrapperForWord.append(divForSymbol);
                            arrayLettersh1.splice(0, 1);
                        }

                        lineh1.append(wrapperForWord);
                    }
                } else if (y == 1) { //2ND LINE SETTINGS (WILL ONLY PUT 3 WORDS)
                    for (let i = 0; i < 3; ++i) { // //  i < 3 =  3 words in each line 
                        const wrapperForWord = document.createElement("div");
                        wrapperForWord.classList.add('wrapperForWordh1');

                        for (let y = 0; y < lenghtArr; ++y) {
                            if (arrayLettersh1[0] == " ") {
                                arrayLettersh1.splice(0, 1);
                                break;
                            } else if (arrayLettersh1[0] == undefined) break;
                            const divForSymbol = document.createElement("div");
                            divForSymbol.classList.add('wrapperSymbol');
                            divForSymbol.innerHTML = arrayLettersh1[0];
                            wrapperForWord.append(divForSymbol);
                            arrayLettersh1.splice(0, 1);
                        }

                        lineh1.append(wrapperForWord);
                    }
                } else if (y == 2) { //3ND LINE SETTINGS (WILL ONLY PUT 2 WORDS)
                    for (let i = 0; i < 2; ++i) { // //  i < 2 =  2 words in each line 
                        const wrapperForWord = document.createElement("div");
                        wrapperForWord.classList.add('wrapperForWordh1');

                        for (let y = 0; y < lenghtArr; ++y) {
                            if (arrayLettersh1[0] == " ") {
                                arrayLettersh1.splice(0, 1);
                                break;
                            } else if (arrayLettersh1[0] == undefined) break;
                            const divForSymbol = document.createElement("div");
                            divForSymbol.classList.add('wrapperSymbol');
                            divForSymbol.innerHTML = arrayLettersh1[0];
                            wrapperForWord.append(divForSymbol);
                            arrayLettersh1.splice(0, 1);
                        }

                        lineh1.append(wrapperForWord);
                    }
                }

            }
        }
        //console.log(tmpForPrepH1Adaptiv);
    }


    //Preparing second H2(adding wrappers) for animation(index-catalog)
    if (window.innerWidth > 1101) {
        if (tmpForPrepSecondH2Adaptiv != 0) {
            tmpForPrepSecondH2Adaptiv = 0;
            h2[1].innerHTML = 'Посмотрите самые популярные товары';
            stringh2 = h2[1].innerHTML;
            h2[1].innerHTML = '';
            arrayLettersh2 = []
            for (let char of stringh2) {
                arrayLettersh2.push(char);
            }

            let count = 1;
            for (let i = 0; i < arrayLettersh2.length; ++i) {
                if (arrayLettersh2[i] == " ") {
                    count++
                }
            }
            let lenghtArr = arrayLettersh2.length;



            const lineH2 = document.createElement("div");
            lineH2.classList.add('lineh2');
            h2[1].append(lineH2);
            for (let i = 0; i < count; ++i) {
                const wrapperForWord = document.createElement("div");
                wrapperForWord.classList.add('wrapperForWordh2');

                for (let y = 0; y < lenghtArr; ++y) {
                    if (arrayLettersh2[0] == " ") {
                        arrayLettersh2.splice(0, 1);
                        break;
                    } else if (arrayLettersh2[0] == undefined) break;
                    const divForSymbol = document.createElement("div");
                    divForSymbol.classList.add('wrapperSymbol');
                    divForSymbol.innerHTML = arrayLettersh2[0];
                    wrapperForWord.append(divForSymbol);
                    arrayLettersh2.splice(0, 1);
                }

                lineH2.append(wrapperForWord);
            }
        }


    } else if (window.innerWidth <= 1100) {
        if (tmpForPrepSecondH2Adaptiv != 1) {
            tmpForPrepSecondH2Adaptiv = 1;
            h2[1].innerHTML = 'Посмотрите самые популярные товары';
            stringh2 = h2[1].innerHTML;
            h2[1].innerHTML = '';
            arrayLettersh2 = []
            for (let char of stringh2) {
                arrayLettersh2.push(char);
            }

            let count = 1;
            for (let i = 0; i < arrayLettersh2.length; ++i) {
                if (arrayLettersh2[i] == " ") {
                    count++
                }
            }
            let lenghtArr = arrayLettersh2.length;

            for (let y = 0; y < 2; ++y) { // y < 2 = make 2 lines 
                const lineH2 = document.createElement("div");
                lineH2.classList.add('lineh2');
                h2[1].append(lineH2);

                for (let i = 0; i < 2; ++i) { //  i < 2 =  2 words in each line
                    const wrapperForWord = document.createElement("div");
                    wrapperForWord.classList.add('wrapperForWordh2');

                    for (let y = 0; y < lenghtArr; ++y) {
                        if (arrayLettersh2[0] == " ") {
                            arrayLettersh2.splice(0, 1);
                            break;
                        } else if (arrayLettersh2[0] == undefined) break;
                        const divForSymbol = document.createElement("div");
                        divForSymbol.classList.add('wrapperSymbol');
                        divForSymbol.innerHTML = arrayLettersh2[0];
                        wrapperForWord.append(divForSymbol);
                        arrayLettersh2.splice(0, 1);
                    }

                    lineH2.append(wrapperForWord);
                }

            }
        }

    }
    //Preparing third H2(adding wrappers) for animation(index-aboutUs)
    if (window.innerWidth > 361) {
        if (tmpForPrepThirdH2Adaptiv != 0) {
            tmpForPrepThirdH2Adaptiv = 0;
            h2[2].innerHTML = 'Мы гарантия качества';
            stringh2 = h2[2].innerHTML;
            h2[2].innerHTML = '';
            arrayLettersh2 = []
            for (let char of stringh2) {
                arrayLettersh2.push(char);
            }

            let count = 1;
            for (let i = 0; i < arrayLettersh2.length; ++i) {
                if (arrayLettersh2[i] == " ") {
                    count++
                }
            }
            let lenghtArr = arrayLettersh2.length;



            const lineH2 = document.createElement("div");
            lineH2.classList.add('lineh2');
            h2[2].append(lineH2);
            for (let i = 0; i < count; ++i) {
                const wrapperForWord = document.createElement("div");
                wrapperForWord.classList.add('wrapperForWordh2');

                for (let y = 0; y < lenghtArr; ++y) {
                    if (arrayLettersh2[0] == " ") {
                        arrayLettersh2.splice(0, 1);
                        break;
                    } else if (arrayLettersh2[0] == undefined) break;
                    const divForSymbol = document.createElement("div");
                    divForSymbol.classList.add('wrapperSymbol');
                    divForSymbol.innerHTML = arrayLettersh2[0];
                    wrapperForWord.append(divForSymbol);
                    arrayLettersh2.splice(0, 1);
                }

                lineH2.append(wrapperForWord);
            }
        }

    } else {
        if (tmpForPrepThirdH2Adaptiv != 1) {
            tmpForPrepThirdH2Adaptiv = 1;
            h2[2].innerHTML = 'Мы гарантия качества';
            stringh2 = h2[2].innerHTML;
            h2[2].innerHTML = '';
            arrayLettersh2 = []
            for (let char of stringh2) {
                arrayLettersh2.push(char);
            }

            let count = 1;
            for (let i = 0; i < arrayLettersh2.length; ++i) {
                if (arrayLettersh2[i] == " ") {
                    count++
                }
            }
            let lenghtArr = arrayLettersh2.length;

            for (let y = 0; y < 2; ++y) { // y < 2 = make 2 lines 
                const lineH2 = document.createElement("div");
                lineH2.classList.add('lineh2');
                h2[2].append(lineH2);

                for (let i = 0; i < 2; ++i) { //  i < 2 =  2 words in each line
                    const wrapperForWord = document.createElement("div");
                    wrapperForWord.classList.add('wrapperForWordh2');

                    for (let y = 0; y < lenghtArr; ++y) {
                        if (arrayLettersh2[0] == " ") {
                            arrayLettersh2.splice(0, 1);
                            break;
                        } else if (arrayLettersh2[0] == undefined) break;
                        const divForSymbol = document.createElement("div");
                        divForSymbol.classList.add('wrapperSymbol');
                        divForSymbol.innerHTML = arrayLettersh2[0];
                        wrapperForWord.append(divForSymbol);
                        arrayLettersh2.splice(0, 1);
                    }

                    lineH2.append(wrapperForWord);
                }


            }
        }

    }

    //change Start End Anim Path

    if (window.innerWidth > 1401) {
        if (startAnim != 300) {
            startAnim = 300;
            endAnim = 500;
        }

    } else if (window.innerWidth <= 1400 & window.innerWidth >= 1101) {
        if (startAnim != 525) {
            startAnim = 525;
            endAnim = 725;
        }

    } else if (window.innerWidth <= 1100 & window.innerWidth >= 801) {
        if (startAnim != 400) {
            startAnim = 400;
            endAnim = 600;
        }

    } else if (window.innerWidth <= 800 & window.innerWidth >= 601) {
        if (startAnim != 300) {
            startAnim = 300;
            endAnim = 500;
        }

    } else if (window.innerWidth <= 600 & window.innerWidth >= 0) {
        if (startAnim != 400) {
            startAnim = 400;
            endAnim = 600;
        }

    }

}


function smooth() {
    blockPosY = linear(blockPosY, scrPosY, speedAnim) //calculate forSmoothScrollWrapper position by linear interpolation method
    blockPosY = Math.floor(blockPosY * 100) / 100;
    //console.log(blockPosY);
    //console.log(scrPosY);
    for (let i = 0; i < allSection.length; ++i) {

        if (i < 1) {
            continue;

        } else {
            if (i == 1) {
                startAnimSection = startAnim; //
                endAnimSection = endAnim;

                //animation H1
                let collectLineH1 = allSection[i].querySelectorAll('.lineh1');
                for (let line of collectLineH1) {
                    let h1Words = line.querySelectorAll('.wrapperForWordh1');
                    let h1AllLetters = [];
                    for (let word of h1Words) {
                        let h1Wordletters = word.querySelectorAll('.wrapperSymbol');
                        for (let letter of h1Wordletters) {
                            h1AllLetters.push(letter);
                        }
                    }
                    let startAnimLetterWordH1 = startAnimSection;
                    let endAnimLetterWordH1 = endAnimSection - 170;

                    for (let i = 0; i < h1AllLetters.length; ++i) {
                        startAnimLetterWordH1 += i * 0.5 // how much each subsequent letter will 
                        endAnimLetterWordH1 += i * 0.5 // be lower than the previous one (the overall slope of the line) 0.2 weaker slope > 0.4 > 0.8 more tilt
                        let animationH1WordLetterPathLength = endAnimLetterWordH1 - startAnimLetterWordH1;
                        if (blockPosY > startAnimLetterWordH1 && blockPosY < endAnimLetterWordH1) {
                            let h1WordsLetterTransY = (endAnimLetterWordH1 - blockPosY) * 100 / 100;
                            let h1WordsLetterOpac = 0;

                            let stepH1WordsLetterOpac = 100 / animationH1WordLetterPathLength; // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                            if (h1WordsLetterTransY > 0 && h1WordsLetterTransY < animationH1WordLetterPathLength) {
                                h1WordsLetterOpac = 1 - ((h1WordsLetterTransY / 100 * stepH1WordsLetterOpac * 100) / 100);
                            }

                            h1AllLetters[i].setAttribute('style', `transform: translate3d(0px, ${h1WordsLetterTransY.toFixed(2)}px, 0px); opacity: ${h1WordsLetterOpac.toFixed(4)};`);
                        } else if (blockPosY > endAnimLetterWordH1) {
                            h1AllLetters[i].setAttribute('style', `transform: translate3d(0px, 0px, 0px); opacity: 1;`);
                        } else if (blockPosY < startAnimLetterWordH1) {
                            h1AllLetters[i].setAttribute('style', `opacity: 0;`);
                        }
                    }
                }
                //animation indexAdvantagesBlockItems + links
                let startAnimIndexAdvantagesBlockItem = startAnimSection + 100;
                let endAnimIndexAdvantagesBlockItem = endAnimSection;

                for (let i = 0; i < indexAdvantagesBlockItems.length; ++i) {
                    if (i == 0) {
                        startAnimIndexAdvantagesBlockItem += 100;
                        endAnimIndexAdvantagesBlockItem += 100;
                    } else if (i == 2) {
                        startAnimIndexAdvantagesBlockItem += 100;
                        endAnimIndexAdvantagesBlockItem += 100;
                    } else if (i == 3 || i == 4) {
                        startAnimIndexAdvantagesBlockItem += 30;
                        endAnimIndexAdvantagesBlockItem += 30;
                    } else {
                        startAnimIndexAdvantagesBlockItem = startAnimSection + 100;
                        endAnimIndexAdvantagesBlockItem = endAnimSection;
                    }


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




            } else {
                let prevSectionHeight = allSection[i - 1].offsetHeight;
                startAnimSection += prevSectionHeight + 70;
                endAnimSection += prevSectionHeight + 70;
                /*let sectionHeight = allSection[i].offsetHeight;
                startAnimSection += sectionHeight + 70;
                endAnimSection += sectionHeight + 70;*/
                /*let prevSectionHeight = allSection[i - 1].offsetHeight;
                let sectionHeight = allSection[i].offsetHeight;
                sectionHeight *= 2;
                startAnimSection += prevSectionHeight;
                endAnimSection += sectionHeight / 2;*/
                    
            }
            //animation h2
            if (allSection[i].querySelector('h2')) {


                let collectH2 = allSection[i].querySelectorAll('h2');

                for (let y = 0; y < collectH2.length; ++y) {
                    let collectLineH2 = collectH2[y].querySelectorAll('.lineh2');

                    for (let i = 0; i < collectLineH2.length; ++i) {
                        let h2Words = collectLineH2[i].querySelectorAll('.wrapperForWordh2');
                        let h2AllLetters = [];
                        for (let word of h2Words) {
                            let h2Wordletters = word.querySelectorAll('.wrapperSymbol');
                            for (let letter of h2Wordletters) {
                                h2AllLetters.push(letter);
                            }
                        }
                        let startAnimLetterWordH2 = startAnimSection; //
                        let endAnimLetterWordH2 = endAnimSection - 130; //

                        if (y == 1) {
                            startAnimLetterWordH2 += 200; //
                            endAnimLetterWordH2 += 200; //
                        } else {
                            startAnimLetterWordH2 = startAnimSection; //
                            endAnimLetterWordH2 = endAnimSection - 130; //
                        }

                        for (let i = 0; i < h2AllLetters.length; ++i) {

                            startAnimLetterWordH2 += i * 0.5 // how much each subsequent letter will 
                            endAnimLetterWordH2 += i * 0.5 // be lower than the previous one (the overall slope of the line) 0.2 weaker slope > 0.4 > 0.8 more tilt

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
                        if (blockPosY > startAnimlinksIndexCatalog && blockPosY < endAnimlinksIndexCatalog) {
                            let linksIndexCatalogTransY = (endAnimlinksIndexCatalog - blockPosY) * 100 / 100;
                            let linksIndexCatalogOpac = 0;

                            let steplinksIndexCatalogOpac = 100 / animlinksIndexCatalogPathLength // if the length is 18px, opacity is 100unit, then 1px = 5.5unit (via the operation 100unit / 18px = 5.5unit)
                            if (linksIndexCatalogTransY > 0 && linksIndexCatalogTransY < animlinksIndexCatalogPathLength) {
                                linksIndexCatalogOpac = 1 - ((linksIndexCatalogTransY / 100 * steplinksIndexCatalogOpac * 100) / 100);
                            }
                            if (window.innerWidth > 1100) {

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
            if (i == allSection.length - 1) {
                let startAnimelementsIndexAboutUS = startAnimSection;
                let endAnimelementsIndexAboutUS = endAnimSection;

                for (let i = 0; i < elementsIndexAboutUS.length; ++i) {
                    let animelementsIndexAboutUSPathLength = endAnimelementsIndexAboutUS - startAnimelementsIndexAboutUS;
                    if (window.innerWidth > 1400) {

                        moveelementsIndexAboutUS(i);
                        if (i == 2 || i == 3) {
                            startAnimelementsIndexAboutUS += 20
                            endAnimelementsIndexAboutUS += 20

                        }

                    } else if (window.innerWidth <= 1400) {
                        startAnimelementsIndexAboutUS += 100
                        endAnimelementsIndexAboutUS += 100
                        moveelementsIndexAboutUS(i);
                    }


                    function moveelementsIndexAboutUS(arg1) {
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
            }

            


            //animation allSection
            let animSectionPathLength = endAnimSection - startAnimSection;

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


    }
    
    //animation progress
    //window.innerWidth
    //adjustmentProgressWidth = 1.436;
    if(window.innerWidth < 1401 && window.innerWidth > 734){
        adjustmentProgressWidth = 1.33;
    }else{
        adjustmentProgressWidth = 1.406;
    }
    let cat = 100 / (blockPosY / heightForScroll * 100)
    console.log(cat)
    progressWidth = (blockPosY / heightForScroll * 100) * adjustmentProgressWidth//scroll position bottom -> (blockPosY / heightForScroll * 100) = 70 -> 70 * 1.43 = 100.1
    progress.setAttribute('style', `width: ${progressWidth.toFixed(2)}%; z-index: 5;`);
    //console.log(blockPosY);
    //console.log(heightForScroll);
    
    //animation page
    forSmoothScrollWrapper.setAttribute('style', `transform: translate3d(0px, -${blockPosY}px, 0px)`);

    window.requestAnimationFrame(smooth);

}


function linear(arg1, arg2, arg3) {
    return (1 - arg3) * arg1 + arg3 * arg2;
}

