const list = document.querySelector('.widget__ul');
//const trigger = document.querySelector('.widget__trigger');
const triggerImg = document.querySelector('.widget__trigger__img');
const cross = document.querySelector('.widget__trigger__cross');

export const openWidget = () => {
        if( !list.classList.contains('visibleWidgetlist') ){//scss on line 4349
            list.classList.add('visibleWidgetlist')//the list drops to the top
            triggerImg.classList.add('hidetrigger')   //changes the widget icon to a cross
            cross.classList.remove('hidetrigger')
        }else{
            list.classList.remove('visibleWidgetlist')//the list comes back
            triggerImg.classList.remove('hidetrigger')   
            cross.classList.add('hidetrigger')
        }
};
//openWidget();
//trigger.addEventListener('click', openWidget);