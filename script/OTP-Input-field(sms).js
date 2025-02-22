//to correctly fill in the fields(inputs) in the modal window (element with class .modal__code-from-sms)
const inputs = document.getElementById("OTPinputs");

inputs.addEventListener("input", function(e) {//when the characters will be entered
    const target = e.target;                  //the field in which the symbol is currently entered
    const val = target.value;                 //the value of this field

    if (isNaN(val)) {        //when entering any character that is not a number, returns an empty string
        target.value = "";      // it won't let you enter anything except numbers
        return;
    }

    if (val != "") {             //if a number is entered, it goes to the next field(input)
        const next = target.nextElementSibling;
        if (next) {
            next.focus();       
        }
    }
});

inputs.addEventListener("keyup", function(e) {
    const target = e.target;                  
    const key = e.key.toLowerCase();        //the numbers you enter will always be in uppercase  

    if (key == "backspace" || key == "delete") {//when a character is deleted, it moves to the previous field
        target.value = "";                      
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});