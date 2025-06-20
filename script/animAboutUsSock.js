document.addEventListener("DOMContentLoaded", (event) => {

    document.fonts.ready.then(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, MorphSVGPlugin, GSDevTools);

        ScrollSmoother.create({
            smooth: 1.5,
            effects: true,
            smoothTouch: 0.1,
        });

        //AboutUs: preload variables
        const preload = document.querySelector('.preload');
        const preloadOpen = preload.querySelector('.preload__open');
        const preloadOpenTxt = preloadOpen.querySelector('.preload__open__txt');
        const preloadCell = preload.querySelectorAll('.preload__cell');
        let tlpreload = gsap.timeline({ repeat: -1, repeatDelay: 1, });
        let tlClosePreload = gsap.timeline();
        //for prevent scroll on mmAboutUsWho.add("(min-width: 768px)",{})
        const abounUsHtml = document.querySelector('html');
        //console.log(abounUsHtml);
        gsap.set(abounUsHtml, { overflow: "hidden" });

        //AboutUs: header, secondary-nav, aboutUs-who, variables
        const headerAboutUs = document.querySelector('header');
        headerAboutUs.classList.remove('headerAboutUs');
        const secondaryNav = document.querySelector('.secondary-nav');
        const aboutUsWhoH2 = document.querySelector('.aboutUs-who__description h2');
        const aboutUsWhoTxt = document.querySelectorAll('.aboutUs-who__description p');
        const aboutUsWhoBtn = document.querySelectorAll('.aboutUs-who__description a');
        //create split img for anim
        const conteinerImg = document.querySelector('.aboutUs-who__conteinerImg');
        const img = conteinerImg.querySelector('.aboutUs-who__conteinerImg__testTube');
        const containerForAnim = conteinerImg.querySelector('.aboutUs-who__conteinerImg__containerForAnim');
        let cellColumn = 10;
        let cellRow = 10;
        let cellImg;

        function createImgForAnim() {
            //when resizing, removes cells
            let varForDeleteCell = containerForAnim.querySelectorAll('span');
            varForDeleteCell.forEach(item => {
                item.remove()
            });

            for (let i = 0; i < cellRow; ++i) {
                for (let y = 0; y < cellColumn; ++y) {
                    let cell = document.createElement('span');
                    let widthCell = (img.width / cellColumn);
                    let heightCell = (img.height / cellRow);
                    cell.style.width = widthCell + 'px';
                    cell.style.height = heightCell + 'px';
                    //console.log(cell.clientWidth);
                    containerForAnim.appendChild(cell);
                    cell.style.backgroundSize = img.width + 'px ' + img.height + "px"; //each cell adds a full-size image as a background
                    cell.style.backgroundPosition = -y * widthCell + "px " + -i * heightCell + "px, center";//shifts the background to the desired position

                }
            }

            cellImg = containerForAnim.querySelectorAll("span");//creates a collection of variables for future animations
        }
        createImgForAnim();
        window.addEventListener('resize', () => {
            createImgForAnim();
        })

        //AboutUs: preload animated
        tlpreload.to(preloadOpenTxt, {// txt 'click' animated
                scale: 1.5,
                duration: 1,
            })
            .to(preloadOpenTxt, {
                scale: 1,
                duration: 0.1,
            })
            .to(preloadCell, {  // cell animated
                scale: 0.9,
                stagger: {
                    each: 0.1,
                    from: 'center',
                    grid: 'auto',
                    ease: 'none',
                }
            })
            .to(preloadCell, {
                scale: 1,
                stagger: {
                    each: 0.1,
                    from: 'center',
                    grid: 'auto',
                    ease: 'none',
                }
            }, "-=1")

        function closePreload() {
            //let mmAboutUsWho = gsap.matchMedia();
            /*
                        //anim img without scroll

                        mmAboutUsWho.add("(1280px <= width <= 1920px) and  (602px <= height <= 1080px)", () => {
                            let tlAboutUsWho = gsap.timeline();
                            let splitAboutUsH2 = SplitText.create(aboutUsWhoH2, { type: "words, chars" });
                            tlAboutUsWho.set(preloadOpenTxt, {
                                    scale: 1,
                                })
                                .to(preloadOpen, {
                                    scale: 0.5,
                                    autoAlpha: 0,
                                })
                                .to(preloadCell, {
                                    scale: 0.9,
                                    stagger: {
                                        each: 0.1,
                                        from: 'center',
                                        grid: 'auto',
                                        ease: 'none',
                                    }
                                }, "-=1")
                                .to(preloadCell, {
                                    scale: 1,
                                    stagger: {
                                        each: 0.1,
                                        from: 'center',
                                        grid: 'auto',
                                        ease: 'none',
                                    }
                                }, "-=1")
                                .to(preloadCell, {
                                    autoAlpha: 0,
                                    stagger: {
                                        each: 0.1,
                                        from: 'center',
                                        grid: 'auto',
                                        ease: 'none',
                                    }
                                }, "-=1")
                                .set(preload, {
                                    autoAlpha: 0,
                                })
                                .from(headerAboutUs, { y: -200, autoAlpha: 0, ease: "expo.out", duration: 1.5, })
                                .from(secondaryNav, { x: -200, autoAlpha: 0, ease: "expo.out", duration: 1.5 }, "-=1.5")
                                .from(splitAboutUsH2.chars, {
                                    y: 50, // animate from 100px below
                                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                                    stagger: 0.05,
                                }, 2)
                                .from(aboutUsWhoTxt, {
                                    y: 50,
                                    x: -200,
                                    autoAlpha: 0,
                                    stagger: {
                                        each: 0.1,
                                    }
                                }, "-=1")
                                .fromTo(aboutUsWhoBtn, { ease: "back.out(1.7)", scale: 0, stagger: 0.2, }, { ease: "back.out(1.7)", scale: 1, stagger: 0.2, }, "-=0.5")
                                .from(cellImg, {

                                    scale: 0.5,
                                    skewX: '60deg',
                                    y: "random([-150, 150])",
                                    x: "random([-150, 150])",
                                    autoAlpha: 0,
                                    stagger: {
                                        each: 0.1,
                                        grid: 'auto',
                                        from: "center",
                                        ease: "power1.out",
                                    }
                                }, 2.2);

                            //GSDevTools.create({animation: tlAboutUsWho});
                        });

                        //anim img with scroll

                        mmAboutUsWho.add("(344px <= width <= 667px ) and  (430px <= height <= 1023px)", () => {
                            let tlAboutUsWho = gsap.timeline();
                            let splitAboutUsH2 = SplitText.create(aboutUsWhoH2, { type: "words, chars" });
                            tlAboutUsWho.set(preloadOpenTxt, {
                                    scale: 1,
                                })
                                .to(preloadOpen, {
                                    scale: 0.5,
                                    autoAlpha: 0,
                                })
                                .to(preloadCell, {
                                    scale: 0.9,
                                    stagger: {
                                        each: 0.1,
                                        from: 'center',
                                        grid: 'auto',
                                        ease: 'none',
                                    }
                                }, "-=1")
                                .to(preloadCell, {
                                    scale: 1,
                                    stagger: {
                                        each: 0.1,
                                        from: 'center',
                                        grid: 'auto',
                                        ease: 'none',
                                    }
                                }, "-=1")
                                .to(preloadCell, {
                                    autoAlpha: 0,
                                    stagger: {
                                        each: 0.1,
                                        from: 'center',
                                        grid: 'auto',
                                        ease: 'none',
                                    }
                                }, "-=1")
                                .set(preload, {
                                    autoAlpha: 0,
                                })
                                .from(headerAboutUs, { y: -200, autoAlpha: 0, ease: "expo.out", duration: 1.5, })
                                .from(secondaryNav, { x: -200, autoAlpha: 0, ease: "expo.out", duration: 1.5 }, "-=1.5")
                                .from(splitAboutUsH2.chars, {
                                    y: 50, // animate from 100px below
                                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                                    stagger: 0.05,
                                }, 2)
                                .from(aboutUsWhoTxt, {
                                    y: 50,
                                    x: -200,
                                    autoAlpha: 0,
                                    stagger: {
                                        each: 0.1,
                                    }
                                }, "-=1")
                                .fromTo(aboutUsWhoBtn, { ease: "back.out(1.7)", scale: 0, stagger: 0.2, }, { ease: "back.out(1.7)", scale: 1, stagger: 0.2, }, "-=0.5")
                                .from(cellImg, {
                                    scrollTrigger: {
                                        trigger: containerForAnim,
                                        scrub: 1.5,
                                        start: "top bottom-=100",
                                        end: "bottom-=100 bottom-=200",
                                        markers: true
                                    },

                                    scale: 0.5,
                                    skewX: '60deg',
                                    yPercent: "random([-150, 150])",
                                    xPercent: "random([-150, 150])",
                                    autoAlpha: 0,
                                    stagger: {
                                        each: 0.1,
                                        grid: 'auto',
                                        from: "center",
                                        ease: "power1.out",
                                    }
                                })
                        });

                        //for nest hub
                        mmAboutUsWho.add("(width: 1024px) and (height: 600px)", () => {
                            let tlAboutUsWho = gsap.timeline();
                            let splitAboutUsH2 = SplitText.create(aboutUsWhoH2, { type: "words, chars" });
                            tlAboutUsWho.set(preloadOpenTxt, {
                                    scale: 1,
                                })
                                .to(preloadOpen, {
                                    scale: 0.5,
                                    autoAlpha: 0,
                                })
                                .to(preloadCell, {
                                    scale: 0.9,
                                    stagger: {
                                        each: 0.1,
                                        from: 'center',
                                        grid: 'auto',
                                        ease: 'none',
                                    }
                                }, "-=1")
                                .to(preloadCell, {
                                    scale: 1,
                                    stagger: {
                                        each: 0.1,
                                        from: 'center',
                                        grid: 'auto',
                                        ease: 'none',
                                    }
                                }, "-=1")
                                .to(preloadCell, {
                                    autoAlpha: 0,
                                    stagger: {
                                        each: 0.1,
                                        from: 'center',
                                        grid: 'auto',
                                        ease: 'none',
                                    }
                                }, "-=1")
                                .set(preload, {
                                    autoAlpha: 0,
                                })
                                .from(headerAboutUs, { y: -200, autoAlpha: 0, ease: "expo.out", duration: 1.5, })
                                .from(secondaryNav, { x: -200, autoAlpha: 0, ease: "expo.out", duration: 1.5 }, "-=1.5")
                                .from(splitAboutUsH2.chars, {
                                    y: 50, // animate from 100px below
                                    autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                                    stagger: 0.05,
                                }, 2)
                                .from(aboutUsWhoTxt, {
                                    y: 50,
                                    x: -200,
                                    autoAlpha: 0,
                                    stagger: {
                                        each: 0.1,
                                    }
                                }, "-=1")
                                .fromTo(aboutUsWhoBtn, { ease: "back.out(1.7)", scale: 0, stagger: 0.2, }, { ease: "back.out(1.7)", scale: 1, stagger: 0.2, }, "-=0.5")
                                .from(cellImg, {
                                    scrollTrigger: {
                                        trigger: containerForAnim,
                                        scrub: 1.5,
                                        start: "top bottom-=100",
                                        end: "center bottom-=200",
                                        markers: true
                                    },

                                    scale: 0.5,
                                    skewX: '60deg',
                                    yPercent: "random([-150, 150])",
                                    xPercent: "random([-150, 150])",
                                    autoAlpha: 0,
                                    stagger: {
                                        each: 0.1,
                                        grid: 'auto',
                                        from: "center",
                                        ease: "power1.out",
                                    }
                                })
                        });
            */

            let mmAboutUsWho = gsap.matchMedia(),
                breakPointAboutUsWho = 768;

            mmAboutUsWho.add({
                    // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
                    isDesktop: `(min-width: ${breakPointAboutUsWho}px)`,
                    isMobile: `(max-width: ${breakPointAboutUsWho - 1}px)`,
                    reduceMotion: "(prefers-reduced-motion: reduce)",
                },
                (context) => {
                    // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
                    let { isDesktop, isMobile, reduceMotion } = context.conditions;

                    let tlAboutUsWho = gsap.timeline();
                    let splitAboutUsH2 = SplitText.create(aboutUsWhoH2, { type: "words, chars" });
                    tlpreload.kill();
                    tlAboutUsWho.set(preloadOpenTxt, {//'stop' previous animation txt "click"
                            scale: 1,
                        })
                        .to(preloadOpen, { //btn disappearance
                            scale: 0.5,
                            autoAlpha: 0,
                        })
                        .to(preloadCell, {//last wave
                            scale: 0.9,
                            stagger: {
                                each: 0.1,
                                from: 'center',
                                grid: 'auto',
                                ease: 'none',
                            }
                        }, "-=1")
                        .to(preloadCell, {
                            scale: 1,
                            stagger: {
                                each: 0.1,
                                from: 'center',
                                grid: 'auto',
                                ease: 'none',
                            }
                        }, "-=1")
                        .to(preloadCell, {//cell disappearance (wave)
                            autoAlpha: 0,
                            stagger: {
                                each: 0.1,
                                from: 'center',
                                grid: 'auto',
                                ease: 'none',
                            }
                        }, "-=1")
                        .set(preload, {//container for cell - disappearance
                            autoAlpha: 0,
                            zIndex: 0,
                        })
                        .set(abounUsHtml, { overflow: "auto" })
                        .from(headerAboutUs, { y: -200, autoAlpha: 0, ease: "expo.out", duration: 1.5, })
                        .from(secondaryNav, { x: -200, autoAlpha: 0, ease: "expo.out", duration: 1.5 }, "-=1.5")
                        .from(splitAboutUsH2.chars, {
                            y: 50, // animate from 100px below
                            autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
                            stagger: 0.05,
                        }, 2)
                        .from(aboutUsWhoTxt, {
                            y: 50,
                            x: -200,
                            autoAlpha: 0,
                            stagger: {
                                each: 0.1,
                            }
                        }, "-=1")
                        .fromTo(aboutUsWhoBtn, { ease: "back.out(1.7)", scale: 0, stagger: 0.2, }, { ease: "back.out(1.7)", scale: 1, stagger: 0.2, }, "-=0.5")
                        .from(cellImg, {

                            scrollTrigger: isDesktop ? false : { //on desktop it animates immediately, but on mobile it animates relative to the scroll
                                trigger: containerForAnim,
                                scrub: 1.5,
                                start: "top bottom-=100",
                                end: "bottom-=100 bottom-=200",
                                //markers: true
                            },

                            scale: 0.5,
                            skewX: '60deg',
                            y: "random([-150, 150])",
                            x: "random([-150, 150])",
                            autoAlpha: 0,
                            stagger: {
                                each: 0.1,
                                grid: 'auto',
                                from: "center",
                                ease: "power1.out",
                            }
                        }, 2.2);
                    //console.log(tlAboutUsWho);

                    //GSDevTools.create({animation: tlAboutUsWho});


                }
            );

        }

        preloadOpen.addEventListener('click', closePreload)

        gsap.to('.progressAboutUs', {
            value: 100,
            ease: 'none',
            //y: 500,
            scrollTrigger: { scrub: 0.3 }
        });
        //h2
        const h2About = document.querySelectorAll('section:not(.aboutUs-who) h2');
        h2About.forEach(h2 => {
            SplitText.create(h2, {
                type: "words, chars",
                onSplit(self) {
                    let change = gsap.to(self.chars, {
                        duration: 2,
                        color: "#73C167",
                        stagger: {
                            each: 0.1,
                            from: "center",
                            repeat: -1,
                            repeatDelay: 5,
                            yoyo: true,
                        }
                    });
                    gsap.from(self.chars, {
                        y: 30,
                        autoAlpha: 0,
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: h2,
                            scrub: 1.5,
                            start: "top center+=110",
                            end: "bottom center-=100",
                            //markers: true
                        },
                        onComplete: () => {//after the animation of h2 chars appearing, it starts the color change animation
                            change.play();
                        },
                        onUpdate: () => {//when h2 chars are animating, it resets the color change animation and pauses it
                            change.progress(0)
                            change.pause();
                        },


                    })
                }
            });
        });

        //aboutUs-about-production__more-details__item and svg
        const aboutUsAboutProduction__moreDetails__item = document.querySelectorAll('.aboutUs-about-production__more-details__item');
        //console.log(aboutUsAboutProduction__moreDetails__item[0])
        const aboutUsAboutProductionSVG = document.querySelectorAll('.aboutUs-about-production svg');
        let flaskCircle = document.querySelector('#flaskCircle');
        let flaskOtherPath = document.querySelectorAll('.flaskOtherpath');
        //console.log(flaskOtherPath);
        let microscopeCircle = document.querySelector('#microscopeCircle');
        let petriDishesCircle = document.querySelector('#petriDishesCircle');
        let petriDishesCircleOtherPath = document.querySelectorAll('.petriDishesCircleOtherPath');

        let tmMorphSVGFlask = gsap.timeline();
        tmMorphSVGFlask.to(flaskCircle, { morphSVG: { shape: "#flask", shapeIndex: -5 } }, )
            .from(flaskOtherPath, { scale: 0, ease: "bounce.out" }, "<");

        let morphSVGMicroscope = gsap.to(microscopeCircle, { morphSVG: { shape: "#microscope", shapeIndex: 1 } }, );

        let tmMorphSVGPetriDishes = gsap.timeline();
        tmMorphSVGPetriDishes.to(petriDishesCircle, { morphSVG: { shape: "#petriDishes", shapeIndex: 1 } }, 0)
            .from(petriDishesCircleOtherPath, { scale: 0, ease: "bounce.out" }, "<");

        let mmAboutUsAboutProduction = gsap.matchMedia();
        let breakPointAboutUsAboutProduction = 1400;

        mmAboutUsAboutProduction.add({
                // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
                isDesktop: `(min-width: ${breakPointAboutUsAboutProduction}px)`,
                isMobile: `(max-width: ${breakPointAboutUsAboutProduction - 1}px)`,
                reduceMotion: "(prefers-reduced-motion: reduce)",
            },
            (context) => {
                // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
                let { isDesktop, isMobile, reduceMotion } = context.conditions;
                //animation is set on each element without a cycle to more accurately control the morph of the svg
                gsap.from(aboutUsAboutProduction__moreDetails__item[0], {
                    y: isDesktop ? 130 : 80,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: aboutUsAboutProduction__moreDetails__item[0],
                        scrub: 0.1,
                        start: isDesktop ? "top-=200 center+=110" : "top-=100 center+=110",
                        end: isDesktop ? "top-=150 center-=100" : "top-=50 center",
                        //markers:true,
                    },

                    onComplete: () => {
                        tmMorphSVGFlask.play();
                    },
                    onUpdate: () => {
                        tmMorphSVGFlask.progress(0);
                        tmMorphSVGFlask.pause();
                    },
                });


                gsap.from(aboutUsAboutProduction__moreDetails__item[1], {
                    y: isDesktop ? 100 : 80,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: aboutUsAboutProduction__moreDetails__item[1],
                        scrub: 0.1,
                        start: isDesktop ? "top-=200 center+=110" : "top-=220 center+=110",
                        end: isDesktop ? "top-=130 center-=100" : "top-=120 center",
                        //markers:true,
                    },

                    onComplete: () => {
                        morphSVGMicroscope.play();
                    },
                    onUpdate: () => {
                        morphSVGMicroscope.progress(0);
                        morphSVGMicroscope.pause();
                    },
                });



                gsap.from(aboutUsAboutProduction__moreDetails__item[2], {
                    y: isDesktop ? 130 : 80,
                    autoAlpha: 0,
                    scrollTrigger: {
                        trigger: aboutUsAboutProduction__moreDetails__item[2],
                        scrub: 0.1,
                        start: isDesktop ? "top-=200 center+=110" : "top-=270 center+=110",
                        end: isDesktop ? "top-=150 center-=100" : "top-=150 center",
                        //markers:true,
                    },

                    onComplete: () => {
                        tmMorphSVGPetriDishes.play();
                    },
                    onUpdate: () => {
                        tmMorphSVGPetriDishes.progress(0);
                        tmMorphSVGPetriDishes.pause();
                    },
                })


            }
        );

        //aboutUs-advantages
        const aboutUsAdvantagesImg = document.querySelector('.aboutUs-advantages .aboutUs-advantages__petriDishes');
        const aboutUsAdvantages__differenceFromOthers = document.querySelector('.aboutUs-advantages .aboutUs-advantages__difference-from-others');
        const listDifferenceFromOthers = aboutUsAdvantages__differenceFromOthers.querySelectorAll('li');
        const btnDifferenceFromOthers = aboutUsAdvantages__differenceFromOthers.querySelector('a');
        let tlContentDifferenceFromOthers = gsap.timeline();
        tlContentDifferenceFromOthers.from(listDifferenceFromOthers, {
                stagger: {
                    each: 0.1,
                },
                ease: "back.out(1.7)",
                autoAlpha: 0,
                x: 40,
                y: 10
            }, "<")
            .fromTo(btnDifferenceFromOthers, { ease: "back.out(1.7)", scale: 0 }, { ease: "back.out(1.7)", scale: 1 })

        let tlAboutUsAdvantages = gsap.timeline();

        let mmAboutUsAdvantages = gsap.matchMedia();
        let breakPointAboutUsAdvantages = 1400;

        mmAboutUsAdvantages.add({
                // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
                isDesktop: `(min-width: ${breakPointAboutUsAdvantages}px)`,
                isMobile: `(max-width: ${breakPointAboutUsAdvantages - 1}px)`,
                reduceMotion: "(prefers-reduced-motion: reduce)",
            },
            (context) => {
                // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
                let { isDesktop, isMobile, reduceMotion } = context.conditions;

                tlAboutUsAdvantages.from(aboutUsAdvantagesImg, {
                        scrollTrigger: {
                            trigger: aboutUsAdvantagesImg,
                            scrub: 1.5,
                            start: isDesktop ? "top+=100 bottom" : "top bottom",
                            end: isDesktop ? "bottom-=200 bottom-=300" : "bottom bottom-=100",
                            //markers: true
                        },
                        autoAlpha: 0,
                        x: isDesktop ? -500 : -300
                    })

                    .from(aboutUsAdvantages__differenceFromOthers, {
                        scrollTrigger: {
                            trigger: isDesktop ? aboutUsAdvantagesImg : aboutUsAdvantages__differenceFromOthers,
                            scrub: isDesktop ? 0.4 : 0.5,
                            start: isDesktop ? "top center+=300" : "top bottom",
                            end: isDesktop ? "center-=10 center+=100" : "bottom-=100 bottom-=100",
                            //markers: true
                        },
                        autoAlpha: 0,
                        x: 500,
                        onComplete: () => {
                            tlContentDifferenceFromOthers.play();
                        },
                        onUpdate: () => {
                            tlContentDifferenceFromOthers.progress(0);
                            tlContentDifferenceFromOthers.pause();
                        },
                    });


            }
        );

        //aboutUs-certificates
        const txtAboutUscertificates = document.querySelector('.aboutUs-certificates p');
        SplitText.create(txtAboutUscertificates, {
            type: "lines",
            onSplit(self) {
                for (let i = 0; i < self.lines.length; ++i) {
                    if ((i + 1) % 2 != 0) {//animated odd
                        gsap.from(self.lines[i], {
                            x: -70,
                            y: (i + 1) * 10,
                            autoAlpha: 0,
                            scrollTrigger: {
                                trigger: txtAboutUscertificates,
                                scrub: 1.5,
                                start: "top+=50px center+=200",
                                end: "bottom+=50px center+=100",
                                //markers: true
                            },
                        });
                    } else {//animated even
                        gsap.from(self.lines[i], {

                            x: 70,
                            y: (i + 1) * 10,
                            autoAlpha: 0,
                            scrollTrigger: {
                                trigger: txtAboutUscertificates,
                                scrub: 1.5,
                                start: "top+=50px center+=200",
                                end: "bottom+=50px center+=100",
                                //markers: true
                            },
                        });
                    }

                }


            }
        });

        const certificatesAboutUs = document.querySelectorAll('.aboutUs-certificates__block__wrapper__item');
        gsap.from(certificatesAboutUs, {
            stagger: {
                each: 0.5,
            },

            scrollTrigger: {
                trigger: '.aboutUs-certificates__block__wrapper',
                scrub: 1.5,
                start: "top center+=200",
                end: "bottom-=400 center",
                //markers: true
            },

            x: 100,
            autoAlpha: 0,
        })

        //aboutUs-requisites-map
        const aboutUsRequisitesMap = document.querySelectorAll('.aboutUs-requisites-map__requisites, .aboutUs-requisites-map__map')

        let tlaboutUsRequisitesMap = gsap.timeline();
        let mmaboutUsRequisitesMap = gsap.matchMedia()
        let breakPointAboutUsRequisitesMap = 1101;
        mmaboutUsRequisitesMap.add({
                // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
                isDesktop: `(min-width: ${breakPointAboutUsRequisitesMap}px)`,
                isMobile: `(max-width: ${breakPointAboutUsRequisitesMap - 1}px)`,
                reduceMotion: "(prefers-reduced-motion: reduce)",
            },
            (context) => {
                // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
                let { isDesktop, isMobile, reduceMotion } = context.conditions;


                tlaboutUsRequisitesMap.set(aboutUsRequisitesMap, {
                        clipPath: isDesktop ? "inset(35% round 24px)" : "inset(10% 35% 67% 35% round 24px)",
                    })
                    .from(aboutUsRequisitesMap[0], {
                        scrollTrigger: {
                            trigger: aboutUsRequisitesMap[0],
                            scrub: 1.5,
                            start: isDesktop ? "center-=100 bottom" : "top bottom",
                            end: isDesktop ? "center bottom-=100" : "top+=100 bottom-=100",
                            //markers: true
                        },
                        y: isDesktop ? 80 : 10,
                        autoAlpha: 0
                    })
                    .from(aboutUsRequisitesMap[0], {

                        scrollTrigger: {
                            trigger: aboutUsRequisitesMap[0],
                            scrub: 1.5,
                            start: isDesktop ? "center bottom-=100" : "top+=120 bottom-=100",
                            end: isDesktop ? "center+=50 bottom-=200" : "top+=220 bottom-=200",
                            //markers: true
                        },

                        clipPath: isDesktop ? "inset(35% round 24px)" : "inset(10% 35% 67% 35% round 24px)"
                    })
                    .from(aboutUsRequisitesMap[1], {
                        scrollTrigger: {
                            trigger: aboutUsRequisitesMap[1],
                            scrub: 1.5,
                            start: isDesktop ? "center-=100 bottom" : "top bottom",
                            end: isDesktop ? "center bottom-=100" : "top+=200 bottom-=100",
                            //markers: true
                        },
                        y: 80,
                        autoAlpha: 0
                    })
                    .from(aboutUsRequisitesMap[1], {

                        scrollTrigger: {
                            trigger: aboutUsRequisitesMap[1],
                            scrub: 1.5,
                            start: "center bottom-=100",
                            end: "center+=100 bottom-=200",
                            //markers: true
                        },

                        clipPath: isDesktop ? "inset(35% round 24px)" : "inset(10% 35% 67% 35% round 24px)"
                    })

            }
        );


    });

});