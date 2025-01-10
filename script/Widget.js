const trigger = document.querySelector('.widget__trigger');
const list = document.querySelector('.widget__ul');
const widget = document.querySelector('.widget__trigger__main');
const cross = document.querySelector('.widget__trigger__cross');

let openWidget = function () {
        if( list.classList.contains('hide')){
            list.classList.remove('hide');
            widget.classList.add('hidetrigger');
            cross.classList.remove('hidetrigger');

        }else{
            list.classList.add('hide');
            widget.classList.remove('hidetrigger');
            cross.classList.add('hidetrigger');
        }
};



trigger.addEventListener('click', openWidget);