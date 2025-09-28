(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["OTP-Input-field(sms)"],{

/***/ "./src/script/allScripts/OTP-Input-field(sms).js":
/*!*******************************************************!*\
  !*** ./src/script/allScripts/OTP-Input-field(sms).js ***!
  \*******************************************************/
/***/ (() => {

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT1RQLUlucHV0LWZpZWxkKHNtcykuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5QztBQUNBLDZCQUE2QjtBQUM3QixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL09UUC1JbnB1dC1maWVsZChzbXMpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vdG8gY29ycmVjdGx5IGZpbGwgaW4gdGhlIGZpZWxkcyhpbnB1dHMpIGluIHRoZSBtb2RhbCB3aW5kb3cgKGVsZW1lbnQgd2l0aCBjbGFzcyAubW9kYWxfX2NvZGUtZnJvbS1zbXMpXHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiT1RQaW5wdXRzXCIpO1xyXG5cclxuaW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbihlKSB7Ly93aGVuIHRoZSBjaGFyYWN0ZXJzIHdpbGwgYmUgZW50ZXJlZFxyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7ICAgICAgICAgICAgICAgICAgLy90aGUgZmllbGQgaW4gd2hpY2ggdGhlIHN5bWJvbCBpcyBjdXJyZW50bHkgZW50ZXJlZFxyXG4gICAgY29uc3QgdmFsID0gdGFyZ2V0LnZhbHVlOyAgICAgICAgICAgICAgICAgLy90aGUgdmFsdWUgb2YgdGhpcyBmaWVsZFxyXG5cclxuICAgIGlmIChpc05hTih2YWwpKSB7ICAgICAgICAvL3doZW4gZW50ZXJpbmcgYW55IGNoYXJhY3RlciB0aGF0IGlzIG5vdCBhIG51bWJlciwgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmdcclxuICAgICAgICB0YXJnZXQudmFsdWUgPSBcIlwiOyAgICAgIC8vIGl0IHdvbid0IGxldCB5b3UgZW50ZXIgYW55dGhpbmcgZXhjZXB0IG51bWJlcnNcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbCAhPSBcIlwiKSB7ICAgICAgICAgICAgIC8vaWYgYSBudW1iZXIgaXMgZW50ZXJlZCwgaXQgZ29lcyB0byB0aGUgbmV4dCBmaWVsZChpbnB1dClcclxuICAgICAgICBjb25zdCBuZXh0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICBuZXh0LmZvY3VzKCk7ICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5pbnB1dHMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0OyAgICAgICAgICAgICAgICAgIFxyXG4gICAgY29uc3Qga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTsgICAgICAgIC8vdGhlIG51bWJlcnMgeW91IGVudGVyIHdpbGwgYWx3YXlzIGJlIGluIHVwcGVyY2FzZSAgXHJcblxyXG4gICAgaWYgKGtleSA9PSBcImJhY2tzcGFjZVwiIHx8IGtleSA9PSBcImRlbGV0ZVwiKSB7Ly93aGVuIGEgY2hhcmFjdGVyIGlzIGRlbGV0ZWQsIGl0IG1vdmVzIHRvIHRoZSBwcmV2aW91cyBmaWVsZFxyXG4gICAgICAgIHRhcmdldC52YWx1ZSA9IFwiXCI7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByZXYgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAocHJldikge1xyXG4gICAgICAgICAgICBwcmV2LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9