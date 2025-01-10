 const growTextarea = document.querySelectorAll('.ask textarea');
 const mainBlockAskAQues = document.querySelector('.modal__ask-a-question');

 /*every time textarea rows increase by 1, scrollHeight increases by 15px,
 let step = 15;
 but if rows="1" then scrollHeight = 33 (will interfere with calculations)
 rows="1" =33px  rows="2" =43px  rows="3" =58px  rows="4" =73px (output of actual scrollHeight for different rows values)
 so if you start with rows="4" = 73px and continue subtracting by 15px, then rows="1" will be equal to 28px (what you need)
 let heightFirstRow = 28;
 now to find out the required value for rows you need to take the actual scrollHeight -> ((scrollHeight - heightFirstRow)/step)+1 //((103-28)/15)+1 // +1?????
 this will automatically set the height of the textarea relative to the entered text
 the textarea will grow*/

//all ===================================================
 const heightStep = 24;
 const heightFirstRow = 37;

 const widthStep = 8.4;
 const widthFirstCol = 5;

 const maxInputSymbol = 91;
 const rangeMaxValue = 90;
 const rangeMinValue = 89;
 const maxCols = 99;
 const initialCols = 30;

//FF ===================================================
 const widthStepFF = 11.4;
 const widthFirstColFF = 10;

 const maxInputSymbolFF = 81;
 const rangeMaxValueFF = 80;
 const rangeMinValueFF = 79;
 const maxColsFF = 77;
 const initialColsFF = 25;


 function grow(e) {

     if (navigator.userAgent.indexOf("Firefox") != -1) {

         growHeight();

         if (e.target.scrollWidth > 293) {
             if (e.target.value.length <= 80) {
                 e.target.setAttribute("Cols", `25`);
                 let requiredColsValue = ((e.target.scrollWidth - widthFirstColFF) / widthStepFF) + 8;
                 e.target.setAttribute("Cols", `${Math.ceil(requiredColsValue)}`);
             }
         }

         limitTextareaWidthGrowth(maxInputSymbolFF, rangeMinValueFF, rangeMaxValueFF, maxColsFF, initialColsFF)

         moveElements(20);

     } else {

         growHeight();

         if (e.target.scrollWidth > 286) {


             if (e.target.value.length <= 90) {

                 e.target.setAttribute("Cols", `30`);
                 let requiredColsValue = ((e.target.scrollWidth - widthFirstCol) / widthStep) + 1;
                 e.target.setAttribute("Cols", `${requiredColsValue}`);
             }
         };

         limitTextareaWidthGrowth(maxInputSymbol, rangeMinValue, rangeMaxValue, maxCols, initialCols);

         moveElements(36);
     }

     function growHeight() {
         if (e.target.scrollHeight < 254) {
             e.target.setAttribute("rows", `6`);
             let requiredRowsValue = ((e.target.scrollHeight - heightFirstRow) / heightStep) + 1;
             e.target.setAttribute("rows", `${requiredRowsValue}`);
         }
     }

     function moveElements(par) {
         if (e.target.value.length > par) {
             e.target.parentElement.classList.add('textarea-column')
         } else {
             e.target.parentElement.classList.remove('textarea-column')
         }


         if (e.target.scrollHeight > 180) {
             mainBlockAskAQues.classList.add('ask-a-question-big-review')
         } else {
             e.target.parentElement.classList.remove('ask-a-question-big-review')
         }
     }

     function limitTextareaWidthGrowth(parA, parB, parC, ParD, ParE) {

         if (e.target.value.length >= parA) {
             e.target.setAttribute("wrap", `on`);
             e.target.setAttribute("Cols", `${ParD}`);
         }

         if (e.target.value.length > parB && e.target.value.length <= parC) {
             e.target.setAttribute("wrap", `off`);
             e.target.setAttribute("Cols", `${ParD}`);
         }



         if (e.target.value.length <= 1 || e.target.value.length < 20) {
             e.target.setAttribute("wrap", `off`);
             e.target.setAttribute("Cols", `${ParE}`);
         }
     }

 };


 growTextarea.forEach((item) => {
     item.addEventListener('input', grow)
 });