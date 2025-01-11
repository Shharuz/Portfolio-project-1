const openRegistr = document.querySelector('.header__items__shopping-card');
const openCallback = document.querySelector('.header__items__call');
const openLogin = document.querySelector('.header__items__authorization')
const openForgotYourPassword = document.querySelector('#GoToForgot-your-password');
const openGoToLogin = document.querySelectorAll('.goToLogin');
const openGoToRegistr = document.querySelector('#GoToRegistr')
const openCodeFromSms = document.querySelector('#GoToCodeFromSms')
const openNewPassword = document.querySelector('#GoToNewPassword')
const modal = document.querySelector('.modal');
const close = document.querySelectorAll(".modal__close");
const registr = document.querySelector('.modal__registr');
const callback = document.querySelector('.modal__callback');
const login = document.querySelector('.modal__login');
const forgotYourPassword = document.querySelector('.modal__forgot-your-password');
const codeFromSms = document.querySelector('.modal__code-from-sms');
const newPassword = document.querySelector('.modal__new-password');
const openPolitics = document.querySelectorAll('.goToPolitics');
const politics = document.querySelector('.modal-politics');
const closePolitics = document.querySelector('.modal-politics__close');
const closeBtnPolitics = document.querySelector('.politic-button-close');
const widgetOpenModal = document.querySelectorAll('.widget-open-modal');
const askAQuestion = document.querySelector('.modal__ask-a-question');
const contactOpenModalQuestion = document.querySelector('.modalquestion');
//const openModalReview = document.querySelector('.card-rewiews__leave-feedback');
//const modalReview = document.querySelector('.modal__review');




function openModal(modal, item) {
    if (navigator.userAgent.indexOf("Firefox") != -1) {
         if(item.classList.contains('modal__ask-a-question')){
            item.querySelector('textarea').setAttribute("Cols", `25`);
            
         }
     } 
    modal.classList.remove('hide');
    item.classList.remove('hide');

};

function closeModal(e) {
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

function closebtn(e) {
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

function closeСurrentOpenLink(close, open) {
    close.classList.add('hide');
    open.classList.remove('hide');
}


function closeСurrentOpenlogin(e) {
    e.target.closest(".modal__block").classList.add('hide');
    login.classList.remove('hide');

}

function openModalPolitics() {
    politics.classList.remove('hide-politics');
}

function closeModalPolitics() {
    if (e.target == politics) {
        politics.classList.add('hide-politics');
    }
}

openRegistr.addEventListener('click', () => openModal(modal, registr));
openCallback.addEventListener('click', () => openModal(modal, callback));
openLogin.addEventListener('click', () => openModal(modal, login));
window.addEventListener('click', closeModal);
close.forEach((element) => { element.addEventListener('click', closebtn) });

openGoToLogin.forEach((item) => { item.addEventListener('click', closeСurrentOpenlogin) });

openForgotYourPassword.addEventListener('click', () => closeСurrentOpenLink(login, forgotYourPassword));
openGoToRegistr.addEventListener('click', () => closeСurrentOpenLink(login, registr));
openCodeFromSms.addEventListener('click', () => closeСurrentOpenLink(forgotYourPassword, codeFromSms));
openNewPassword.addEventListener('click', () => closeСurrentOpenLink(codeFromSms, newPassword));

openPolitics.forEach((item) => {
    item.addEventListener('click', openModalPolitics);
});
closePolitics.addEventListener('click', closebtn);
closeBtnPolitics.addEventListener('click', closebtn);

widgetOpenModal[0].addEventListener('click', () => openModal(modal, callback));
widgetOpenModal[1].addEventListener('click', () => openModal(modal, askAQuestion));
if( contactOpenModalQuestion ){
    contactOpenModalQuestion.addEventListener('click', () => openModal(modal, askAQuestion));
};

//openModalReview.addEventListener('click', () => openModal(modal, modalReview));


