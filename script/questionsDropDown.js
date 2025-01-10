const svgDropDown = document.querySelectorAll('.questions__question-and-answer__item svg');

svgDropDown.forEach( (item) =>{
    item.addEventListener('click', () =>{
           if(!item.nextElementSibling.classList.contains('open-question')){
                item.nextElementSibling.classList.add('open-question')
           }else{
                item.nextElementSibling.classList.remove('open-question')
           };
    } );
} );