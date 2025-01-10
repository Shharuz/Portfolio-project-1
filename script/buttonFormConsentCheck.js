const consent = document.querySelectorAll('form .consent');

for( let item of consent){
    item.nextElementSibling.addEventListener('click', (e) => {
        
        if( !e.target.previousElementSibling.childNodes[1].checked ){
            e.preventDefault();
        }
        
    });
};
