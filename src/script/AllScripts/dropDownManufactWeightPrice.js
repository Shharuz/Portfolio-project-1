function hideFilter(e) {//rotate Svg 
    
    if(e.target.childNodes[1].classList.contains('rotateSvg')){
        e.target.childNodes[1].classList.remove('rotateSvg')
    }else{
        e.target.childNodes[1].classList.add('rotateSvg')
    };


   if(e.target.previousElementSibling.classList.contains('openFilter')){//form -> <fieldset id="manufacturer"> -> <div class="wrapperForHidden openFilter">
        e.target.previousElementSibling.classList.remove('openFilter')
   }else{
        e.target.previousElementSibling.classList.add('openFilter')
   };
    
    e.target.previousElementSibling.querySelectorAll('div').forEach( (item) =>{//<div class="wrapperForHidden openFilter"> --> all div(with input, label, span)
        if(item.classList.contains('openFilterItem')){
            item.classList.remove('openFilterItem')
        }else{
            item.classList.add('openFilterItem')
        }
    } );
    
};

export { hideFilter }


