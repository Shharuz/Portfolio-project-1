const arrowSvgManufactWeight = document.querySelectorAll('form svg');



function hideFilter(e) {//rotate Svg 
    if(e.currentTarget.classList.contains('rotateSvg')){
        e.currentTarget.classList.remove('rotateSvg')
    }else{
        e.currentTarget.classList.add('rotateSvg')
    };


   if(e.currentTarget.previousElementSibling.classList.contains('openFilter')){//form -> <fieldset id="manufacturer"> -> <div class="wrapperForHidden openFilter">
        e.currentTarget.previousElementSibling.classList.remove('openFilter')
   }else{
        e.currentTarget.previousElementSibling.classList.add('openFilter')
   };
    
    e.currentTarget.previousElementSibling.querySelectorAll('div').forEach( (item) =>{//<div class="wrapperForHidden openFilter"> --> all div(with input, label, span)
        if(item.classList.contains('openFilterItem')){
            item.classList.remove('openFilterItem')
        }else{
            item.classList.add('openFilterItem')
        }
    } );
    
};

arrowSvgManufactWeight.forEach( (item) =>{//starts hideFilter on click svg
    item.addEventListener('click', hideFilter)
} );
