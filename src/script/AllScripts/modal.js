///////////////////////////////// //elements for opening modal windows
const openForgotYourPassword = document.querySelector('#GoToForgot-your-password');
const openGoToLogin = document.querySelectorAll('.goToLogin');
const openGoToRegistr = document.querySelector('#GoToRegistr');
const openCodeFromSms = document.querySelector('#GoToCodeFromSms');
const openNewPassword = document.querySelector('#GoToNewPassword');
const contactOpenModalQuestion = document.querySelector('.modalquestion');//for contacts.html
const openModalItems = document.querySelectorAll('[data-forOpenModal]');
////////////////////////////////////////////////////////

///////////////////////////////// //modal windows
export const modal = document.querySelector('.modal');
const login = document.querySelector('.modal__login');
const registr = document.querySelector('.modal__registr');
const forgotYourPassword = document.querySelector('.modal__forgot-your-password');
const codeFromSms = document.querySelector('.modal__code-from-sms');
const newPassword = document.querySelector('.modal__new-password');
const callback = document.querySelector('.modal__callback');
const askAQuestion = document.querySelector('.modal__ask-a-question');
export const allModal = [modal, login, registr, forgotYourPassword, codeFromSms, newPassword, callback, askAQuestion]
/////////////////////////////////////////////////////////

/////////////////////////////////  //close modal windows
export const close = document.querySelectorAll(".modal__close");
////////////////////////////////////////////////////////

//begin //everything related to privacy policy
export const politics = document.querySelector('.modal-politics');
export const openPolitics = document.querySelectorAll('.goToPolitics');
export const closePolitics = document.querySelector('.modal-politics__close');
export const closeBtnPolitics = document.querySelector('.politic-agreement-button-close');
////////////////////////////////////////////////////////

//modal.style.height = `${modal.parentElement.offsetHeight}px`;//for textareaGrow.js

//const openModalReview = document.querySelector('.card-rewiews__leave-feedback');
//const modalReview = document.querySelector('.modal__review');

export function openModal(modal, item) {//parameter modal == on line 15 / parameter item == login or registr and etc. on line 16
    if (navigator.userAgent.indexOf("Firefox") != -1) { //for textareaGrow.js to work in Firefox browser
         if(item.classList.contains('modal__ask-a-question')){
            item.querySelector('textarea').setAttribute("Cols", `24`); 
         }
     } 
     
    modal.classList.remove('hide');
    item.classList.remove('hide');
};

export function closeModal(e) {//if you click on something other than a modal window, it will close the modal window
    if (e.target == modal) {
        for( let modalItem of  allModal){
            if( !modalItem.classList.contains('hide') ){
                modalItem.classList.add('hide');
            }
        }
        //modalReview.classList.add('hide');
        
    } else if (e.target == politics) {
        politics.classList.add('hide-politics');
    }
};

export function closebtn(e) {//closes modal window when clicking on btn
    if (e.target == closePolitics || e.target == closeBtnPolitics) {
        politics.classList.add('hide-politics');
    } else {
        for( let modalItem of  allModal){
            if( !modalItem.classList.contains('hide') ){
                modalItem.classList.add('hide');
            }
        }
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

window.addEventListener('click', closeModal);
close.forEach((element) => { element.addEventListener('click', closebtn) });

openGoToLogin.forEach((item) => { item.addEventListener('click', closeСurrentOpenlogin) });

openForgotYourPassword.addEventListener('click', () => closeСurrentOpenLink(login, forgotYourPassword));//on line 93
openGoToRegistr.addEventListener('click', () => closeСurrentOpenLink(login, registr));
openCodeFromSms.addEventListener('click', () => closeСurrentOpenLink(forgotYourPassword, codeFromSms));
openNewPassword.addEventListener('click', () => closeСurrentOpenLink(codeFromSms, newPassword));

openPolitics.forEach((item) => {
    item.addEventListener('click', openModalPolitics);
});
closePolitics.addEventListener('click', closebtn);   
closeBtnPolitics.addEventListener('click', closebtn); 


if( contactOpenModalQuestion ){
    contactOpenModalQuestion.addEventListener('click', () => openModal(modal, askAQuestion));
};

//openModalReview.addEventListener('click', () => openModal(modal, modalReview));


