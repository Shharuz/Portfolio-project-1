const consent = document.querySelectorAll('form .consent'); //take all elements with class .consent
const modalPoliticBtn = document.querySelector('.politic-agreement-button-close');
const consentCheckBox = document.querySelectorAll('.consent input[type="checkbox"]');

//there is a div with class concent. In consent there are 2 elements input and label
//the next element after the consent is the button element

for( let item of consent){                                   //collection enumeration
    item.nextElementSibling.addEventListener('click', (e) => { //add click event to each next item(button) from the collection
        
        if( !e.target.previousElementSibling.querySelector('input').checked ){ //if the label is not in the checked state
            e.preventDefault();                                       // then the button does not work
        }                                                             //This is necessary for the user to agree to the 
                                                                      //terms of personal data processing 
    });
};

modalPoliticBtn.addEventListener('click', () => {
        consentCheckBox.forEach( item => {
            item.setAttribute('checked', 'checked')
        } )
})


