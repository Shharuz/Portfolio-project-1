let scrollPercent;
const body = document.querySelector('body');

if (body.classList.contains('scroll-container')) {//for card.html

    function getScrollPercent() {
        scrollPercent = +((window.scrollY / (document.querySelector('.scroll-container__scroll-content').offsetHeight - window.innerHeight) * 100).toFixed(2));
        //console.log(scrollPercent)
        if (scrollPercent > 50) {
            import( /* webpackChunkName: "animateFooter" */ './animateFooter.js').then(module => {
                const footerVisibleScroll = module.footerVisibleScroll;
                footerVisibleScroll(scrollPercent);
            });
        }
    };
    window.addEventListener('scroll', getScrollPercent);

} else {                                        //for all
    function getScrollPercent() {
        scrollPercent = +((window.scrollY / (body.offsetHeight - window.innerHeight) * 100).toFixed(2));
        //console.log(scrollPercent)
        if (scrollPercent > 50) {
            import( /* webpackChunkName: "animateFooter" */ './animateFooter.js').then(module => {
                const footerVisibleScroll = module.footerVisibleScroll;
                footerVisibleScroll(scrollPercent);
            });
        }
    };
    window.addEventListener('scroll', getScrollPercent);

    window.addEventListener('load', () => {
        if ((body.offsetHeight - window.innerHeight) == 0) {
            //console.log((document.querySelector('body').offsetHeight - window.innerHeight))
            import( /* webpackChunkName: "animateFooter" */ './animateFooter.js').then(module => {
                const footerVisibleWithoutScroll = module.footerVisibleWithoutScroll;
                footerVisibleWithoutScroll();
            })
        }
    })


    window.addEventListener("resize", e => import( /* webpackChunkName: "animateFooter" */ './animateFooter.js').then(module => {

        const footerVisibleWithoutScroll = module.footerVisibleWithoutScroll;
        footerVisibleWithoutScroll();
    }))
}