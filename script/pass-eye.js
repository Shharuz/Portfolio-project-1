//let password = document.querySelectorAll('.hide-show-password'); // for ver. 1
let eye = document.querySelectorAll('.eye');
const btnPassCheck = document.querySelector('#password-check');
let messagePassMismatch = document.querySelector('.passwords-do-not-match');
let twoInputPass = document.querySelectorAll('.passCheck');




function open(e) {

    //ver.1 This version of the code hid/showed the password for all inputs when clicking on the eye

    /*password.forEach((item) => {
        if (item.type == 'password') {
            item.type = 'text';
            eye.forEach((elem) => {
                elem.classList.remove('hide-eye')
            });
        } else {
            item.type = 'password';
            eye.forEach((elem) => {
                elem.classList.add('hide-eye');
            });
        }
    })  */

    //Now hides/shows only the input that relates to the pressed eye

    if (e.target.previousElementSibling.type == 'password') {//when clicking on the eye if the input is of type 'password'
        e.target.previousElementSibling.type = 'text';       //then replace with type 'text'
        e.target.classList.remove('hide-eye')                //open eye through class removal
    } else {
        e.target.previousElementSibling.type = 'password';//otherwise assign the type 'password' (replaces symbols with dots)
        e.target.classList.add('hide-eye');               //and will close the eye as a result of adding the class
    }

};

eye.forEach((elem) => {
    elem.addEventListener('click', open);
});


btnPassCheck.addEventListener('click', function(e) {
    if (!(twoInputPass[0].value == twoInputPass[1].value)) { //if the value of the first field does not match the value of the second field
        e.preventDefault();                                  //then prevent the form from being submitted
        messagePassMismatch.innerHTML = 'Несовпадение паролей';//and will display a message about the password mismatch
    };

});

twoInputPass.forEach((item) => {          //with each new entry it will delete the message about password mismatch
    item.addEventListener('input', () => {
        if (messagePassMismatch.innerHTML) {
            messagePassMismatch.innerHTML = '';
        };
    });
});