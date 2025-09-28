(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["textareaGrow"],{

/***/ "./src/script/allScripts/textareaGrow.js":
/*!***********************************************!*\
  !*** ./src/script/allScripts/textareaGrow.js ***!
  \***********************************************/
/***/ (() => {

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
            
        //console.log(e.data);
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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWFHcm93LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2R0FBNkc7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw4QkFBOEIsS0FBSztBQUM1RSxVQUFVO0FBQ1YseUNBQXlDLDZCQUE2QixJQUFJO0FBQzFFLFVBQVU7QUFDVix5Q0FBeUMsd0JBQXdCLElBQUk7QUFDckU7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0EsVUFBVSx3Q0FBd0M7QUFDbEQseUNBQXlDLHdCQUF3QjtBQUNqRTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrREFBK0Q7QUFDL0QsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl2ZWJhY3RlcmlhLmxvY2FsLy4vc3JjL3NjcmlwdC9hbGxTY3JpcHRzL3RleHRhcmVhR3Jvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb2RhbEFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYXNrLWEtcXVlc3Rpb24nKTtcclxuY29uc3QgYXNrVGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXNrLWEtcXVlc3Rpb25fX3F1ZXN0aW9uJyk7XHJcbmNvbnN0IHBhcmVudEFza1RleHRhcmVhID0gYXNrVGV4dGFyZWEucGFyZW50RWxlbWVudDtcclxuLy9jb25zb2xlLmxvZyhwYXJlbnRBc2tUZXh0YXJlYSk7XHJcbmxldCBpbml0aWFsV2lkdGhBc2tUZXh0YXJlYSA9ICsod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXNrVGV4dGFyZWEpLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKS5zbGljZSgwLCAtMikpOy8vdGhlIGluaXRpYWwgd2lkdGggb2YgdGhlIHRleHRhcmVhIGlzIHRha2VuXHJcbi8vY29uc29sZS5sb2coaW5pdGlhbFdpZHRoQXNrVGV4dGFyZWEpO1xyXG5cclxuLy93aWR0aCBhbmQgaGVpZ2h0IHJlc3RyaWN0aW9ucyBhdCBhcHByb3hpbWF0ZWx5IGxpbmUgOTM4KHNjc3MpXHJcblxyXG5hc2tUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFza1RleHRhcmVhLnNjcm9sbEhlaWdodClcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDU4MCkge1xyXG4gICAgICAgIGlmIChlLmlucHV0VHlwZSA9PSAnaW5zZXJ0VGV4dCcgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoID4gMjYgJiYgYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDwgNTQpIHtcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSBgJHthc2tUZXh0YXJlYS5jbGllbnRXaWR0aCArPSAxMH1weGA7IC8vaWYgdGhlIG51bWJlciBvZiBlbnRlcmVkIGNoYXJhY3RlcnMgbWF0Y2hlcyB0aGUgY29uZGl0aW9ucyBhYm92ZSwgdGhlIHRleHRhcmVhIHdpbGwgZ3JvdyBpbiB3aWR0aCBieSAxMHB4IGFmdGVyIGVhY2ggaW5wdXRcclxuICAgICAgICB9IGVsc2UgaWYgKGUuaW5wdXRUeXBlID09ICdkZWxldGVDb250ZW50QmFja3dhcmQnICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA+IDI2ICYmIGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA8IDU0ICYmIGFza1RleHRhcmVhLmNsaWVudFdpZHRoID4gaW5pdGlhbFdpZHRoQXNrVGV4dGFyZWEpIHtcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSBgJHthc2tUZXh0YXJlYS5jbGllbnRXaWR0aCAtPSA1fXB4YDsvL2lmIHRoZXJlIGlzIGEgZGVsZXRpb24gb2YgY2hhcmFjdGVycywgdGhlIHRleHRhcmVhIHdpbGwgc2hyaW5rXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmlucHV0VHlwZSA9PSAnZGVsZXRlQ29udGVudEJhY2t3YXJkJyAmJiBhc2tUZXh0YXJlYS52YWx1ZS5sZW5ndGggPD0gMjUpIHtcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSBgJHtpbml0aWFsV2lkdGhBc2tUZXh0YXJlYX1weGA7Ly9hZGp1c3QgdGV4dGFyZWEgd2lkdGggdG8gaW5pdGlhbCB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLmRhdGEpO1xyXG4gICAgICAgIGlmIChlLmRhdGEgIT0gbnVsbCAmJiBlLmRhdGEubGVuZ3RoID4gMSkgey8vaWYgdGhlIGVudGlyZSByZXZpZXcgaXMgaW5zZXJ0ZWQgLyBlLmRhdGEgIT0gbnVsbCAtPiBudWxsID0gd2hlbiBwcmVzc2luZyBlbnRlciBvciBiYWNrc3BhY2VcclxuICAgICAgICAgICAgYXNrVGV4dGFyZWEuc3R5bGUud2lkdGggPSAnNTAwcHgnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXNrVGV4dGFyZWEudmFsdWUubGVuZ3RoIDwgMSkgey8vaWYgYWxsIHRleHQgaXMgZGVsZXRlZCBhdCBvbmNlXHJcbiAgICAgICAgICAgIGFza1RleHRhcmVhLnN0eWxlLndpZHRoID0gYCR7aW5pdGlhbFdpZHRoQXNrVGV4dGFyZWF9cHhgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFza1RleHRhcmVhLnZhbHVlLmxlbmd0aCA+IDI2KSB7Ly9yZWFycmFuZ2UgZWxlbWVudHMgd2hlbiB0ZXh0YXJlYSBncm93c1xyXG4gICAgICAgICAgICBwYXJlbnRBc2tUZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCd0ZXh0YXJlYS1jb2x1bW4nKVxyXG4gICAgICAgICAgICBtb2RhbEFzay5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYXNrLWEtcXVlc3Rpb24tYmlnLWFzaycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50QXNrVGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgndGV4dGFyZWEtY29sdW1uJylcclxuICAgICAgICAgICAgbW9kYWxBc2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2Fzay1hLXF1ZXN0aW9uLWJpZy1hc2snKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc2tUZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjsgIC8vdGV4dGFyZWEgaGVpZ2h0IGdyb3d0aFxyXG4gICAgYXNrVGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYXNrVGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiOy8vIFxyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9