import { alignBody } from './animation.js';

export function questionsDropDown(item) {
     if(!item.classList.contains('rotate-svg-questions')){
               item.classList.add('rotate-svg-questions')
               setTimeout(function() {
                   alignBody();
                }, 510);
               
           }else{
               item.classList.remove('rotate-svg-questions')
               setTimeout(function() {
                    alignBody();
                }, 510);
               
           }

           if(!item.nextElementSibling.classList.contains('open-question')){
                item.nextElementSibling.classList.add('open-question')
           }else{
                item.nextElementSibling.classList.remove('open-question')
           };
}

