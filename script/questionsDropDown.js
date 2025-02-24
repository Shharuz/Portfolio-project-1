const svgDropDown = document.querySelectorAll('.questions__question-and-answer__item svg');

svgDropDown.forEach( (item) =>{
    item.addEventListener('click', () =>{         //opens and closes the answer to the question, on adding/removing a class
           if(!item.nextElementSibling.classList.contains('open-question')){
                item.nextElementSibling.classList.add('open-question')
           }else{
                item.nextElementSibling.classList.remove('open-question')
           };
    } );
} );