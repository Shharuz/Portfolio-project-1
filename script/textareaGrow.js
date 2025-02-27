 const growTextarea = document.querySelector('#ask-a-question__question');
 const mainBlockAskAQues = document.querySelector('.modal__ask-a-question');

 const heightStep = 24;
 const heightFirstRow = 37;

 let prevLength = 25;//previous for e.target.value.length


 function grow(e) {

     if (navigator.userAgent.indexOf("Firefox") != -1) {

         growHeight();
         growWidth(15, 1.07, 0.9, `100`, `24`);

         moveElements(20);

     } else {

         growHeight();
         growWidth(0, 1.3, 1.05, `114`, `30`)// on line 36

         moveElements(36);
     } 

     function growHeight() {
         //console.log(e.target.scrollHeight);
         if (e.target.scrollHeight < 254) { //limit textarea growth horizontally
             e.target.setAttribute("rows", `6`); //This is necessary so that when deleting text, the height of the textarea decreases
             let requiredRowsValue = ((e.target.scrollHeight - heightFirstRow) / heightStep) + 1; //calculates the number of rows relative to scrollHeight
             e.target.setAttribute("rows", `${requiredRowsValue}`); //and as the attribute(rows) value increases, it increases the height of the textarea
         }
     }

     function growWidth(par1, par2, par3, par4, par5) {//par1 - needed mainly for Firefox, 
        //par2 - adjust textarea width increase when typing text, par3 - adjust textarea width decrease when typing text, 
        //par4, par5 - amount "cols";
         if (e.target.value.length > 25 && e.target.value.length <= 90) {
             e.target.setAttribute("wrap", `off`);
             if (e.target.value.length - prevLength >= 2) {//for correct text insertion, when e.target.value.length > 25 && e.target.value.length <= 90
                 e.target.setAttribute("cols", `${ e.target.value.length - par1 }`)//textarea width adjusts to text after it is inserted
             }
             if (e.target.value.length > prevLength) {//every time you enter a character
                 let currentCols = +e.target.getAttribute("cols");
                 e.target.setAttribute("cols", `${ currentCols + par2}`);//increase attribute "cols"
                 prevLength = e.target.value.length;//current length becomes previous

             } else if (e.target.value.length < prevLength) {//every time a character is deleted
                 let currentCols = +e.target.getAttribute("cols");
                 e.target.setAttribute("cols", `${ currentCols - par3}`);//decrease attribute "cols"
                 prevLength = e.target.value.length;//current length becomes previous
             }

         } else if (e.target.value.length > 90) {//stop increasing taxetarea width
             e.target.setAttribute("wrap", `on`);//wrap text to next line
             e.target.setAttribute("cols", par4);//set constant width taxetarea
         } else {                                //when all text is deleted at once
             e.target.setAttribute("wrap", `off`);//Undo wrapping text to a new line
             e.target.setAttribute("cols", par5);//set constant width taxetarea
             prevLength = 25;//return to default
         }
     }

     function moveElements(par) {

         if (e.target.value.length > par) {//label and textarea are arranged horizontally, 
            //after entering a certain number of characters - they are centered and arranged vertically
             e.target.parentElement.classList.add('textarea-column')
         } else {
             e.target.parentElement.classList.remove('textarea-column')
         }
         if (e.target.value.length > par) {//after increasing 'rows'(textarea), will move .modal__ask-a-question up, by decreasing the top margin
             mainBlockAskAQues.classList.add('ask-a-question-big-review')
         } else {
             mainBlockAskAQues.classList.remove('ask-a-question-big-review')
         }
     }



 };

 growTextarea.addEventListener('input', grow);