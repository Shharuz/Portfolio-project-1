const widgetTrigger = document.querySelector(".widget__trigger");
widgetTrigger.onclick = e => import( /* webpackChunkName: "widget" */ './allScripts/widget.js').then(module => {
    const openWidget = module.openWidget;
    openWidget();
});

const btnBurgerheader = document.querySelector(".header__nav__burger-wrapper-for-line");
btnBurgerheader.onclick = eventbtnBurgerheader => import( /* webpackChunkName: "headerNavBurgerViewPortWidth1100px" */ './allScripts/headerNavBurgerViewPortWidth1100px.js').then(module => {
    const headerNavListDown = module.headerNavListDown;
    headerNavListDown(eventbtnBurgerheader);
});

const headerNavArrowsOpenList = document.querySelectorAll('.arrow-rigth-wrapper');
headerNavArrowsOpenList.forEach(arrow => {
    arrow.onclick = e => import( /* webpackChunkName: "headerArrowOpenSubListViewPortWidth735px" */ './allScripts/headerArrowOpenSubListViewPortWidth735px.js').then(module => {
        const headerNavListOpenSubList = module.headerNavListOpenSubList;
        headerNavListOpenSubList(arrow);
    });
});

///////////////////modal/////////////////////////
const openModalItems = document.querySelectorAll('[data-forOpenModal]');
//console.log(openModalItems[0].getAttribute('data-forOpenModal'));
openModalItems.forEach(openModalItem => {
    openModalItem.addEventListener('click', e => import( /* webpackChunkName: "modal" */ './allScripts/modal.js').then(module => {
        const openModal = module.openModal;
        for (let modalWindow of module.allModal) {
            if (openModalItem.getAttribute('data-forOpenModal') == modalWindow.id) {//if the opening element has a data-forOpenModal attribute that matches the modal window's id, then remove the 'hide' class from that modal window
                //console.log(modalWindow)
                openModal(module.modal, modalWindow);
            }
        }

    }))
});

///////////////////////////pass-eye///////////////////////////////
const eyes = document.querySelectorAll('.eye');
eyes.forEach(eye => {
    eye.onclick = eventEye => import( /* webpackChunkName: "pass-eye" */ './allScripts/pass-eye.js').then(module => {
        const openCloseEye = module.openCloseEye;
        openCloseEye(eventEye);
    });
});
///////////////////////////PhoneMask////////////////////////
/*
const phoneMaskLoaderBtns = [openRegistr, openLogin, openCallback, widgetOpenModal];
phoneMaskLoaderBtns.forEach(loaderBtn => {

    if (loaderBtn.length != undefined) {
        loaderBtn.forEach(item => {
            item.addEventListener('click', e => import(  webpackChunkName: "PhoneMask"  './allScripts/PhoneMask.js').then(module => {
                const phoneMask = module.phoneMask;
                phoneMask();
            }));
        })
    } else {
        loaderBtn.addEventListener('click', e => import(  webpackChunkName: "PhoneMask"  './allScripts/PhoneMask.js').then(module => {
            const phoneMask = module.phoneMask;
            phoneMask();
        }));
    }


});*/
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(phoneInput => {
    phoneInput.onfocus = e => import( /* webpackChunkName: "PhoneMask" */ './allScripts/PhoneMask.js').then(module => {
        const phoneMask = module.phoneMask;
        phoneMask();
    });
});
///////////////////////OTP-Input-field(sms)////////////////////////////////
const openCodeFromSms = document.querySelector('#GoToCodeFromSms');
openCodeFromSms.onfocus = e => import( /* webpackChunkName: "OTP-Input-field(sms)" */ './allScripts/OTP-Input-field(sms).js').then(module => {

});

/////////////////////////////////textareaGrow.js////////////////////////////////////////////////
const askAQuestionTextArea = document.querySelector('#ask-a-question__question');
askAQuestionTextArea.onfocus = e => import( /* webpackChunkName: "textareaGrow" */ './allScripts/textareaGrow.js').then(module => {

});

/////////////////////////////animateFooter///////////////////////////////////////
import './allScripts/getScrollPercent.js';