const list = document.querySelector('.widget__ul');
const trigger = document.querySelector('.widget__trigger');
const widget = document.querySelector('.widget__trigger__main');
const cross = document.querySelector('.widget__trigger__cross');

let openWidget = function () {
        if( !list.classList.contains('visibleWidgetlist') ){//scss on line 4349
            list.classList.add('visibleWidgetlist')//the list drops to the top
            widget.classList.add('hidetrigger')   //changes the widget icon to a cross
            cross.classList.remove('hidetrigger')
        }else{
            list.classList.remove('visibleWidgetlist')//the list comes back
            widget.classList.remove('hidetrigger')   
            cross.classList.add('hidetrigger')
        }
};



trigger.addEventListener('click', openWidget);