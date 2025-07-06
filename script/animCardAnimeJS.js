import { onScroll, stagger, utils, createTimeline, eases, createSpring, createScope, animate } from './AnimeJS/anime.esm.min.js';
const forSmoothScrollWrapper = document.querySelector('.forSmoothScroll__wrapper');
const body = document.querySelector('body');
document.addEventListener("DOMContentLoaded", (event) => {
    //SMOOTH SCROLL

    
    

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

    function smooth() {
        //We calculate our container position by linear interpolation method
        blockPosY = linear(blockPosY, scrPosY, speedAnim) //calculate forSmoothScrollWrapper position by linear interpolation method

        blockPosY = Math.floor(blockPosY * 100) / 100;


        forSmoothScrollWrapper.setAttribute('style', `transform: translate3d(0px, -${blockPosY}px, 0px)`);



        window.requestAnimationFrame(smooth);
    }

    function linear(arg1, arg2, arg3) {
        return (1 - arg3) * arg1 + arg3 * arg2;
    }

    ////////////////////////////////////////////////////////////////////////////

    //SPLIT TXT
    const h3 = document.querySelector('.card-product-description h3');
    //console.log(h3);
    const h2h4 = document.querySelectorAll('[data-splitTXT]');
    //console.log(h2h4);


    let stringH;
    let arrayLettersH = [];

    if (window.innerWidth > 1400) {
        creatingWrappers(h3, 2, 5, 5, 0, 0, 0);
    } else if (window.innerWidth <= 1400 && window.innerWidth > 1340) {
        creatingWrappers(h3, 3, 3, 5, 2, 0, 0);
    } else if (window.innerWidth <= 1340 && window.innerWidth > 1100) {
        creatingWrappers(h3, 3, 3, 4, 3, 0, 0);
    } else if (window.innerWidth <= 1100 && window.innerWidth > 650) {
        creatingWrappers(h3, 2, 5, 5, 0, 0, 0);
    } else if (window.innerWidth <= 650 && window.innerWidth > 380) {
        creatingWrappers(h3, 3, 3, 4, 3, 0, 0);
    } else {
        creatingWrappers(h3, 5, 2, 3, 2, 2, 1);
    }

    window.addEventListener('resize', () => {
        //console.log(window.innerWidth)
        if (window.innerWidth > 1400) {
            creatingWrappers(h3, 2, 5, 5, 0, 0, 0);
        } else if (window.innerWidth <= 1400 && window.innerWidth > 1340) {
            creatingWrappers(h3, 3, 3, 5, 2, 0, 0);
        } else if (window.innerWidth <= 1340 && window.innerWidth > 1100) {
            creatingWrappers(h3, 3, 3, 4, 3, 0, 0);
        } else if (window.innerWidth <= 1100 && window.innerWidth > 650) {
            creatingWrappers(h3, 2, 5, 5, 0, 0, 0);
        } else if (window.innerWidth <= 650 && window.innerWidth > 380) {
            creatingWrappers(h3, 3, 3, 4, 3, 0, 0);
        } else {
            creatingWrappers(h3, 5, 2, 3, 2, 2, 1);
        }
    })

    h2h4.forEach(item => {
        creatingWrappers(item, 1, 0, 0, 0, 0, 0)
    })
    //arg1 = h1 or h2[i]
    //arg2 = amount lines
    //arg3 = amount words in 1 line
    //arg4 = amount words in 2 line
    //arg5 = amount words in 3 line


    function creatingWrappers(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
        if (arg1.childNodes[1] != undefined) {
            let tmp = arg1.querySelectorAll('.wrapperForWord');
            let tmpArr = [];
            for (let i = 0; i < tmp.length; ++i) {
                let char = tmp[i].querySelectorAll('.wrapperSymbol');
                for (let y = 0; y < char.length; ++y) {
                    //console.log(char[y].innerHTML)   
                    tmpArr.push(char[y].innerHTML);
                    if (y == (char.length - 1)) {
                        tmpArr.push(' ');
                    }
                    //console.log(tmpArr)
                }
            }
            arg1.innerHTML = "";
            //arg1.innerHTML = tmpArr.join("");
            arg1.append(tmpArr.join(""))
        }

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

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    const cardProductDescription = document.querySelector('.card-product-description');
    animate(cardProductDescription, {
        opacity: { to: 1 },
    });

    //card-product-description slider appears
    const cardswiperNavImg = document.querySelectorAll('.card-product-description__wrapper-for-swiper__swiperNav .swiper-slide');
    //console.log(cardswiperNavImg)
    const cardswiperImg = document.querySelector('.card-product-description__wrapper-for-swiper__swiperImg');
    //console.log(cardswiperImg)

    animate(cardswiperNavImg, {
        x: { from: '-3rem' },
        y: { from: '3rem' },
        opacity: { from: 0 },
        scale: { from: stagger([1, .1]) },
        delay: stagger(30),

    });
    animate(cardswiperImg, {
        y: { from: '10rem' },
        opacity: { from: 0 },
    });

    ////////////////////////

    //card-product-description h3
    const cardH3chars = h3.querySelectorAll('.wrapperSymbol');

    animate(cardH3chars, {
        x: { from: '17rem' },
        rotate: { from: '45deg' },
        opacity: { from: 0 },
        scale: { from: stagger([1, .1]) },
        delay: stagger(20),
    });
    //////////////////////////////////////////////////////
    //card-product-description all headlines
    h2h4.forEach(headline => {
        let charsHeadlines = headline.querySelectorAll('.wrapperSymbol');
        animate(charsHeadlines, {
            x: { from: '-17rem' },
            opacity: { from: 0 },
            rotate: { from: '45deg' },
            opacity: { from: 0 },
            scale: { from: 0 },
            delay: stagger(20),
            autoplay: onScroll({
                target: headline,
                enter: 'bottom-=100 100',
                leave: 'center 100',
                sync: 0.25,
                //debug: true,
            })

        });
    })
    ///////////////////////////////////////////////////

    //1 variable card-product-description article stars 
    const cardProdDescArticleStars = cardProductDescription.querySelector('.allPageCard__raiting');
    const cardProdDescStars = cardProdDescArticleStars.querySelectorAll('.star')


    /////////////////////////////////////////////////////////////////////////
    //variable card-product-description  about-the-product buy
    //2 variable about-the-product
    const cardProdDescAboutMain = cardProductDescription.querySelectorAll('.card-product-description__about-the-product__main-text');
    const cardProdDescAboutFeatures = cardProductDescription.querySelectorAll('.card-product-description__about-the-product__features p');
    //3 variable buy
    const cardProdDescBuyPrice = cardProductDescription.querySelectorAll('.card-product-description__buy span, .card-product-description__buy sup');
    const cardProdDescBuyCounter = cardProductDescription.querySelectorAll('.card-product-description__buy .counter, .card-product-description__buy .buy__a, .card-product-description__buy .like');
    const cardProdDescBuyOnlineStore = cardProductDescription.querySelectorAll('.card-product-description__buy .links-online-store a');


    //console.log(cardProdDescBuyPrice);
    //console.log(cardProdDescBuyCounter);
    //console.log(cardProdDescBuyOnlineStore);
    //const tlAboutFeatures = createTimeline({ defaults: { duration: 1500 } });
    //mm
    createScope({
            mediaQueries: {
                isDesctop: '(min-width: 769px)',
                isMobile: '(max-width: 768px)',
                reduceMotion: '(prefers-reduced-motion)',
            }
        })
        .add(self => {

            const { isDesctop, isMobile, reduceMotion } = self.matches;

            //1animate card-product-description article stars 
            animate(cardProdDescArticleStars, {
                x: { from: '5rem' },
                opacity: { from: 0 },
                autoplay: isDesctop ? true : onScroll({
                    target: cardProdDescArticleStars,
                    enter: 'bottom-=100 100',
                    leave: 'center 100',
                    sync: 0.25,
                    //debug: true,
                })
            });

            const tlcardProdDescStars = createTimeline({
                autoplay: isDesctop ? true : onScroll({
                    target: cardProdDescArticleStars,
                    enter: 'bottom-=100 100',
                    leave: 'center 100',
                    sync: 0.25,
                    //debug: true,
                })
            });

            tlcardProdDescStars.add(cardProdDescStars, {
                    scale: { from: 0 },
                }, )
                .add(cardProdDescStars, {
                    rotate: { to: '40deg' },
                    duration: 300,
                }, )
                .add(cardProdDescStars, {
                    rotate: { to: '0deg' },
                    duration: 300,
                }, )

            ////////////////////////////////////////////////////
            //2animate about-the-product
            animate(cardProdDescAboutMain, {
                x: { from: '15rem' },
                opacity: { from: 0 },

                autoplay: isDesctop ? true : onScroll({

                    target: '.card-product-description__about-the-product__main-text',
                    enter: 'bottom-=100 100',
                    leave: 'center 100',
                    sync: 0.25,
                    // debug: true,
                })
            }, )
            animate(cardProdDescAboutFeatures, {

                ease: eases.outCubic,
                scale: { from: 0 },
                opacity: { to: 1 },
                autoplay: isDesctop ? true : onScroll({
                    target: '.card-product-description__about-the-product__features',
                    enter: 'bottom-=100 center',
                    leave: 'center top',
                    sync: 0.05,
                    // debug: true,
                })
            }, )

            ///////////////////////////////////////////////////////

            //3animate buy

            const tlAboutTheProductBuy = createTimeline({
                defaults: { duration: isDesctop ? 1500 : 1000 },
                autoplay: isDesctop ? true : onScroll({
                    target: cardProdDescBuyOnlineStore,
                    enter: 'bottom-=100 center',
                    leave: 'center top',
                    sync: 0.05,
                    //debug: true,
                })
            });

            tlAboutTheProductBuy.add(cardProdDescBuyPrice, {
                    delay: stagger(100),
                    x: { from: "-50rem" },
                    opacity: { to: 1 },
                }, 1)
                .add(cardProdDescBuyCounter, {
                    ease: eases.outBounce,
                    scale: { from: 0 },
                    opacity: { to: 1 },
                }, 1)
                .add(cardProdDescBuyOnlineStore, {
                    x: { from: '30rem' },
                    opacity: { to: 1 },
                    delay: stagger(100),
                }, 1)
            /////////////////////////////////////////////////////

        });

    //card-helpful-information
    //section
    let tmpHelpfulInformationAdaptiv;

    function helpfulInformationAdaptiv() {
        const cardHelpfulInformation = document.querySelector(".card-helpful-information")
        const articlesTitle = cardHelpfulInformation.querySelector('.card-helpful-information__articles h4')
        const articlesBlockItems = cardHelpfulInformation.querySelectorAll('.blog-article-min')
        const documentationTXT = cardHelpfulInformation.querySelectorAll('.card-documentation p');
        if (window.innerWidth > 1401) {
            if (tmpHelpfulInformationAdaptiv != 0) {
                tmpHelpfulInformationAdaptiv = 0;
                animate(cardHelpfulInformation, {
                    y: { from: '15rem' },
                    opacity: { from: 0 },
                    autoplay: onScroll({
                        target: cardHelpfulInformation,
                        enter: 'bottom-=100 100',
                        leave: 'center 100',
                        sync: 0.25,
                        //debug: true,
                    })
                });

                //articles
                //title


                animate(articlesTitle, {
                    width: { from: 0 },
                    autoplay: onScroll({
                        target: articlesTitle,
                        enter: 'bottom-=100 100',
                        leave: 'center 100',
                        sync: 0.25,
                        //debug: true,
                    })
                });
                //article

                animate(articlesBlockItems, {
                    y: { from: '15rem' },
                    opacity: { from: 0 },
                    delay: stagger(200),
                    autoplay: onScroll({
                        target: articlesBlockItems,
                        enter: 'bottom-=100 100',
                        leave: 'center 100',
                        sync: 0.3,
                        //debug: true,
                    })
                });

                //documentation
                documentationTXT.forEach(item => {
                    //console.log(window.innerWidth)

                    let tldocumentationTXT = createTimeline({
                        autoplay: onScroll({
                            target: item,
                            enter: 'bottom-=100 center',
                            leave: 'center top',
                            sync: 0.25,
                            // debug: true,
                        })
                    });

                    tldocumentationTXT.add(item, {

                            x: { from: '15rem' },
                            y: { from: '10rem' },
                        }, )
                        .add(item, {
                            width: { from: "40%" },
                            opacity: { from: 0 },
                        }, "<<")
                })

            }
        } else if (window.innerWidth <= 1400) {
            if (tmpHelpfulInformationAdaptiv != 1) {
                tmpHelpfulInformationAdaptiv = 1;
                utils.remove(cardHelpfulInformation);
                utils.remove(articlesTitle);
                utils.remove(articlesBlockItems);
                documentationTXT.forEach(item => {
                    utils.remove(item);
                })
            }

        }
    }
    helpfulInformationAdaptiv();
    window.addEventListener('resize', helpfulInformationAdaptiv)

    ////////////////////////////////////////////////////////////////////////////////////////

    //card-rewiews   
    //section
    const cardRewiews = document.querySelector('.card-rewiews');

    animate(cardRewiews, {
        x: { from: '10rem' },
        y: { from: '10rem' },
        opacity: { from: 0 },
        autoplay: onScroll({
            target: cardRewiews,
            enter: 'bottom-=100 100',
            leave: 'center 100',
            sync: 0.1,
        })
    })

    //card-rewiews__title
    const cardRewiewsTitleitems = cardRewiews.querySelectorAll('.card-rewiews__title span, .card-rewiews__title .stars, .card-rewiews__title p');

    const tlcardRewiewsTitleitems = createTimeline({
        duraion: 2000,
        autoplay: onScroll({
                target: cardRewiewsTitleitems[0],
                enter: 'bottom-=100 100',
                leave: 'center 100',
                sync: 'play play reverse reset',
            })
    });

    tlcardRewiewsTitleitems.add(cardRewiewsTitleitems[0], {
            y: { from: '5rem' },
            opacity: { to: 1 },
        })
        .add(cardRewiewsTitleitems[1], {
            scale: { from: 0 },
            opacity: { to: 1 },
            ease: 'outBack',
            
        }, 800)
        .add(cardRewiewsTitleitems[2], {
            x: { from: '5rem' },
            opacity: { to: 1 },
             
        }, 1000)

        //card-rewiews__item
        const cardRewiewItems = cardRewiews.querySelectorAll('.card-rewiews__item');

        animate(cardRewiewItems,{
            y: { from: '15rem' },
            opacity: { from: 0 },
            delay: stagger(200), 
            autoplay: onScroll({
                target: cardRewiewItems,
                enter: 'bottom-=100 100',
                leave: 'center 100',
                sync: 0.2,
            })
        })

        //btn
        const cardRewiewBtn = cardRewiews.querySelector('.card-rewiews__leave-feedback');
        animate(cardRewiewBtn,{
            scale: { from: 0 },
            opacity: { from: 0 },
            ease: 'outBack',

            autoplay: onScroll({
                target: cardRewiewBtn,
                enter: 'bottom-=100 100',
                leave: 'center 100',
                sync: 'play play reverse reset',
                //debug: true,
            })
        })

        //card-slider__swiper
        const cardSliderSwiperWrapper = document.querySelector('.card-slider__swiper .swiper-wrapper');
        const cardSliderSwiperSlides = cardSliderSwiperWrapper.querySelectorAll(':scope > .swiper-slide');
        console.log(cardSliderSwiperSlides)

         animate(cardSliderSwiperSlides,{
            x: { from: '30rem' },
            //scale: { from: 0 },
            rotateY: {from: '90deg'},
            delay: stagger(200),

            autoplay: onScroll({
                target: cardSliderSwiperSlides,
                enter: 'bottom-=100 100',
                leave: 'center 100',
                sync: 0.2,
                //debug: true,
            })
        })

})


//gives the height of the body so that scrolling occurs
let heightForScroll;

window.addEventListener("load", changeBodyStartEndAnimPrep);
window.addEventListener('resize', changeBodyStartEndAnimPrep)

function changeBodyStartEndAnimPrep() {
        heightForScroll = parseInt(window.getComputedStyle(forSmoothScrollWrapper).getPropertyValue('height'));
        body.setAttribute('style', `height:${heightForScroll}px`);
}


