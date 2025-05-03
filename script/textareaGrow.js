const modalAsk = document.querySelector('.modal__ask-a-question');
const askTextarea = document.querySelector('#ask-a-question__question');
const parentAskTextarea = askTextarea.parentElement;
//console.log(parentAskTextarea);
let initialWidthAskTextarea = +(window.getComputedStyle(askTextarea).getPropertyValue("width").slice(0, -2));//the initial width of the textarea is taken
//console.log(initialWidthAskTextarea);

//width and height restrictions at approximately line 938(scss)

askTextarea.addEventListener('input', (e) => {
    //console.log(askTextarea.scrollHeight)
    if (window.innerWidth > 580) {
        if (e.inputType == 'insertText' && askTextarea.value.length > 26 && askTextarea.value.length < 54) {
            askTextarea.style.width = `${askTextarea.clientWidth += 10}px`; //if the number of entered characters matches the conditions above, the textarea will grow in width by 10px after each input
        } else if (e.inputType == 'deleteContentBackward' && askTextarea.value.length > 26 && askTextarea.value.length < 54 && askTextarea.clientWidth > initialWidthAskTextarea) {
            askTextarea.style.width = `${askTextarea.clientWidth -= 5}px`;//if there is a deletion of characters, the textarea will shrink
        } else if (e.inputType == 'deleteContentBackward' && askTextarea.value.length <= 25) {
            askTextarea.style.width = `${initialWidthAskTextarea}px`;//adjust textarea width to initial value
        }
            
        console.log(e.data);
        if (e.data != null && e.data.length > 1) {//if the entire review is inserted / e.data != null -> null = when pressing enter or backspace
            askTextarea.style.width = '500px';
        } else if (askTextarea.value.length < 1) {//if all text is deleted at once
            askTextarea.style.width = `${initialWidthAskTextarea}px`;
        }

        if (askTextarea.value.length > 26) {//rearrange elements when textarea grows
            parentAskTextarea.classList.add('textarea-column')
            modalAsk.classList.add('modal__ask-a-question-big-ask')
        } else {
            parentAskTextarea.classList.remove('textarea-column')
            modalAsk.classList.remove('modal__ask-a-question-big-ask')
        }
    }

    askTextarea.style.height = "auto";  //textarea height growth
    askTextarea.style.height = askTextarea.scrollHeight + "px";// 
})