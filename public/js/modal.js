"use strict";
(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["modal"],{

/***/ "./src/script/allScripts/modal.js":
/*!****************************************!*\
  !*** ./src/script/allScripts/modal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allModal: () => (/* binding */ allModal),
/* harmony export */   close: () => (/* binding */ close),
/* harmony export */   closeBtnPolitics: () => (/* binding */ closeBtnPolitics),
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   closePolitics: () => (/* binding */ closePolitics),
/* harmony export */   closebtn: () => (/* binding */ closebtn),
/* harmony export */   modal: () => (/* binding */ modal),
/* harmony export */   openModal: () => (/* binding */ openModal),
/* harmony export */   openPolitics: () => (/* binding */ openPolitics),
/* harmony export */   politics: () => (/* binding */ politics)
/* harmony export */ });
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
const modal = document.querySelector('.modal');
const login = document.querySelector('.modal__login');
const registr = document.querySelector('.modal__registr');
const forgotYourPassword = document.querySelector('.modal__forgot-your-password');
const codeFromSms = document.querySelector('.modal__code-from-sms');
const newPassword = document.querySelector('.modal__new-password');
const callback = document.querySelector('.modal__callback');
const askAQuestion = document.querySelector('.modal__ask-a-question');
const allModal = [modal, login, registr, forgotYourPassword, codeFromSms, newPassword, callback, askAQuestion]
/////////////////////////////////////////////////////////

/////////////////////////////////  //close modal windows
const close = document.querySelectorAll(".modal__close");
////////////////////////////////////////////////////////

//begin //everything related to privacy policy
const politics = document.querySelector('.modal-politics');
const openPolitics = document.querySelectorAll('.goToPolitics');
const closePolitics = document.querySelector('.modal-politics__close');
const closeBtnPolitics = document.querySelector('.politic-agreement-button-close');
////////////////////////////////////////////////////////

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

function closebtn(e) {//closes modal window when clicking on btn
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0EsMEJBQTBCLGlDQUFpQyxJQUFJO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUNBQWlDO0FBQ3hDLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyx3QkFBd0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNPLHNCQUFzQjtBQUM3QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsNERBQTREO0FBQzVELDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZDQUE2QztBQUMxRTtBQUNBLGtDQUFrQyx1REFBdUQ7QUFDekY7QUFDQSx3R0FBd0c7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlYmFjdGVyaWEubG9jYWwvLi9zcmMvc2NyaXB0L2FsbFNjcmlwdHMvbW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIC8vZWxlbWVudHMgZm9yIG9wZW5pbmcgbW9kYWwgd2luZG93c1xyXG5jb25zdCBvcGVuRm9yZ290WW91clBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9Gb3Jnb3QteW91ci1wYXNzd29yZCcpO1xyXG5jb25zdCBvcGVuR29Ub0xvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvVG9Mb2dpbicpO1xyXG5jb25zdCBvcGVuR29Ub1JlZ2lzdHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub1JlZ2lzdHInKTtcclxuY29uc3Qgb3BlbkNvZGVGcm9tU21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0dvVG9Db2RlRnJvbVNtcycpO1xyXG5jb25zdCBvcGVuTmV3UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjR29Ub05ld1Bhc3N3b3JkJyk7XHJcbmNvbnN0IGNvbnRhY3RPcGVuTW9kYWxRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbHF1ZXN0aW9uJyk7Ly9mb3IgY29udGFjdHMuaHRtbFxyXG5jb25zdCBvcGVuTW9kYWxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZvck9wZW5Nb2RhbF0nKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAvL21vZGFsIHdpbmRvd3NcclxuZXhwb3J0IGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbmNvbnN0IGxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19sb2dpbicpO1xyXG5jb25zdCByZWdpc3RyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19yZWdpc3RyJyk7XHJcbmNvbnN0IGZvcmdvdFlvdXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fZm9yZ290LXlvdXItcGFzc3dvcmQnKTtcclxuY29uc3QgY29kZUZyb21TbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvZGUtZnJvbS1zbXMnKTtcclxuY29uc3QgbmV3UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX25ldy1wYXNzd29yZCcpO1xyXG5jb25zdCBjYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2FsbGJhY2snKTtcclxuY29uc3QgYXNrQVF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hc2stYS1xdWVzdGlvbicpO1xyXG5leHBvcnQgY29uc3QgYWxsTW9kYWwgPSBbbW9kYWwsIGxvZ2luLCByZWdpc3RyLCBmb3Jnb3RZb3VyUGFzc3dvcmQsIGNvZGVGcm9tU21zLCBuZXdQYXNzd29yZCwgY2FsbGJhY2ssIGFza0FRdWVzdGlvbl1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gIC8vY2xvc2UgbW9kYWwgd2luZG93c1xyXG5leHBvcnQgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vYmVnaW4gLy9ldmVyeXRoaW5nIHJlbGF0ZWQgdG8gcHJpdmFjeSBwb2xpY3lcclxuZXhwb3J0IGNvbnN0IHBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXBvbGl0aWNzJyk7XHJcbmV4cG9ydCBjb25zdCBvcGVuUG9saXRpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ29Ub1BvbGl0aWNzJyk7XHJcbmV4cG9ydCBjb25zdCBjbG9zZVBvbGl0aWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXBvbGl0aWNzX19jbG9zZScpO1xyXG5leHBvcnQgY29uc3QgY2xvc2VCdG5Qb2xpdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2xpdGljLWFncmVlbWVudC1idXR0b24tY2xvc2UnKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vbW9kYWwuc3R5bGUuaGVpZ2h0ID0gYCR7bW9kYWwucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgOy8vZm9yIHRleHRhcmVhR3Jvdy5qc1xyXG5cclxuLy9jb25zdCBvcGVuTW9kYWxSZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1yZXdpZXdzX19sZWF2ZS1mZWVkYmFjaycpO1xyXG4vL2NvbnN0IG1vZGFsUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19yZXZpZXcnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwsIGl0ZW0pIHsvL3BhcmFtZXRlciBtb2RhbCA9PSBvbiBsaW5lIDE1IC8gcGFyYW1ldGVyIGl0ZW0gPT0gbG9naW4gb3IgcmVnaXN0ciBhbmQgZXRjLiBvbiBsaW5lIDE2XHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRmlyZWZveFwiKSAhPSAtMSkgeyAvL2ZvciB0ZXh0YXJlYUdyb3cuanMgdG8gd29yayBpbiBGaXJlZm94IGJyb3dzZXJcclxuICAgICAgICAgaWYoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19hc2stYS1xdWVzdGlvbicpKXtcclxuICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnNldEF0dHJpYnV0ZShcIkNvbHNcIiwgYDI0YCk7IFxyXG4gICAgICAgICB9XHJcbiAgICAgfSBcclxuICAgICBcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoZSkgey8vaWYgeW91IGNsaWNrIG9uIHNvbWV0aGluZyBvdGhlciB0aGFuIGEgbW9kYWwgd2luZG93LCBpdCB3aWxsIGNsb3NlIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xyXG4gICAgICAgIGZvciggbGV0IG1vZGFsSXRlbSBvZiAgYWxsTW9kYWwpe1xyXG4gICAgICAgICAgICBpZiggIW1vZGFsSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSApe1xyXG4gICAgICAgICAgICAgICAgbW9kYWxJdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL21vZGFsUmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICBcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT0gcG9saXRpY3MpIHtcclxuICAgICAgICBwb2xpdGljcy5jbGFzc0xpc3QuYWRkKCdoaWRlLXBvbGl0aWNzJyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VidG4oZSkgey8vY2xvc2VzIG1vZGFsIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIGJ0blxyXG4gICAgaWYgKGUudGFyZ2V0ID09IGNsb3NlUG9saXRpY3MgfHwgZS50YXJnZXQgPT0gY2xvc2VCdG5Qb2xpdGljcykge1xyXG4gICAgICAgIHBvbGl0aWNzLmNsYXNzTGlzdC5hZGQoJ2hpZGUtcG9saXRpY3MnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yKCBsZXQgbW9kYWxJdGVtIG9mICBhbGxNb2RhbCl7XHJcbiAgICAgICAgICAgIGlmKCAhbW9kYWxJdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpICl7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vbW9kYWxSZXZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNsb3Nl0KF1cnJlbnRPcGVuTGluayhjbG9zZSwgb3Blbikgey8vY2xvc2Ugb25lIG1vZGFsIHdpbmRvdyBhbmQgb3BlbiBhbm90aGVyXHJcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICBvcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsb3Nl0KF1cnJlbnRPcGVubG9naW4oZSkgey8vKGUpID09IG9wZW5Hb1RvTG9naW4gPT0gZWxlbWVudCB3aXRoIGNsYXNzIC5nb1RvTG9naW4sIGNsb3Nlc3QoXCIubW9kYWxfX2Jsb2NrXCIpIGlzIHNldCBvbiB0aGlzIGVsZW1lbnQuXHJcbiAgICBlLnRhcmdldC5jbG9zZXN0KFwiLm1vZGFsX19ibG9ja1wiKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7Ly93aGVuIGNsaWNraW5nIG9uIGFuIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgLmdvVG9Mb2dpbiwgXHJcbiAgICBsb2dpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vaXQgd2lsbCBnbyB0aHJvdWdoIGFsbCBlbGVtZW50cyBpbmNsdWRpbmcgcGFyZW50cyB1cCB0byB0aGUgcm9vdCBlbGVtZW50IHVudGlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2l0IGZpbmRzIGFuIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgLm1vZGFsX19ibG9jaywgc3RvcCwgYW5kIGFkZCB0aGUgY2xhc3MgLmhpZGUgdG8gdGhpcyBlbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbFBvbGl0aWNzKCkge1xyXG4gICAgcG9saXRpY3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1wb2xpdGljcycpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuY2xvc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4geyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pIH0pO1xyXG5cclxub3BlbkdvVG9Mb2dpbi5mb3JFYWNoKChpdGVtKSA9PiB7IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZdChdXJyZW50T3BlbmxvZ2luKSB9KTtcclxuXHJcbm9wZW5Gb3Jnb3RZb3VyUGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsobG9naW4sIGZvcmdvdFlvdXJQYXNzd29yZCkpOy8vb24gbGluZSA5M1xyXG5vcGVuR29Ub1JlZ2lzdHIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZdChdXJyZW50T3BlbkxpbmsobG9naW4sIHJlZ2lzdHIpKTtcclxub3BlbkNvZGVGcm9tU21zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGZvcmdvdFlvdXJQYXNzd29yZCwgY29kZUZyb21TbXMpKTtcclxub3Blbk5ld1Bhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2XQoXVycmVudE9wZW5MaW5rKGNvZGVGcm9tU21zLCBuZXdQYXNzd29yZCkpO1xyXG5cclxub3BlblBvbGl0aWNzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWxQb2xpdGljcyk7XHJcbn0pO1xyXG5jbG9zZVBvbGl0aWNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pOyAgIFxyXG5jbG9zZUJ0blBvbGl0aWNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VidG4pOyBcclxuXHJcblxyXG5pZiggY29udGFjdE9wZW5Nb2RhbFF1ZXN0aW9uICl7XHJcbiAgICBjb250YWN0T3Blbk1vZGFsUXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIGFza0FRdWVzdGlvbikpO1xyXG59O1xyXG5cclxuLy9vcGVuTW9kYWxSZXZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwobW9kYWwsIG1vZGFsUmV2aWV3KSk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9