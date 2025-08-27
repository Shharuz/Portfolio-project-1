//For howToBuy.html, blog.html, account.html, questions.html

import { alignBody } from './animation.js';
import { bodyforSmoothScroll } from './animation.js';
//import { itemsCategories } from '../howToBuy.js';
//const itemsCategories = document.querySelectorAll('.forCategoryAllPages p'); //in the element with the class radio-category, all inputs of the radio type are taken
export const collectionOfElementsForhideShow = document.querySelectorAll('[data-anchor]') //collection of all elements with attribute data-anchor
const footer = document.querySelector('footer .footer-container');

/*itemsCategories.forEach((item) => {

    item.addEventListener('click', highlightedElement);
});*/

export function highlightedElement(eTarget, itemsCategories) {
    for (let item of itemsCategories) {
        item.classList.remove('highlighted') 
    }
    if (!eTarget.classList.contains('highlighted')) {
            eTarget.classList.add('highlighted')
        }

    for (let itemCollect of collectionOfElementsForhideShow) { //iterate over all elements with data-anchor attribute
        itemCollect.classList.add('hide'); //all elements with the data-anchor attribute are assigned the hide class


        if (eTarget.id == 'all-blog') { //for blog.html //if the value of the input id is 'all-blog', then all elements with the data-anchor attribute will have the hide class removed
            itemCollect.classList.remove('hide');
        } else if (eTarget.id == itemCollect.getAttribute('data-anchor')) { //there are: 1. input with change event 2. element (div or p) with data-anchor attribute
            itemCollect.classList.remove('hide'); // if input id matches element (div or p) data-anchor attribute, then remove class hide from element (div or p)
            //fix display footer on howToBuy.html (for animateFooter.js)
            footer.classList.add('footerVisible');
        }

    }
    if (collectionOfElementsForhideShow[0].classList.contains('questions__question-and-answer')) {
        alignBody(); //only for questions.html, so that smooth scrolling works
    } else if (collectionOfElementsForhideShow[0].classList.contains('blog__reviews')) {
        alignBody(); //only for blog.html, so that smooth scrolling works
    }
}

//only blog.html
let checkBlog = document.querySelector('.blog');
if (checkBlog != null) {

    document.addEventListener('DOMContentLoaded', changeCheckedRadioBlog);

    function changeCheckedRadioBlog() { //to go from the card.html page; section card-helpful-information -> card-helpful-information__articles
        let blogHref = window.location.href.split("?")[1];

        if (blogHref != undefined) {
            for (let item of itemsCategories) {
                if (item.classList.contains('highlighted')) {
                    item.classList.remove('highlighted')
                };
                if (item.id == blogHref) { //https://livebacteria.local/blog.html?video-broadcasts - will only take video-broadcasts
                    item.classList.add('highlighted'); //will set the checked state to the input whose id matches the link address
                    for (let itemCollect of collectionOfElementsForhideShow) {
                        itemCollect.classList.add('hide'); //all elements with the data-anchor attribute are assigned the hide class
                        if (itemCollect.getAttribute('data-anchor') == window.location.href.split("?")[1]) { //if the value of the data-anchor attribute matches the split link address (2nd part), 
                            itemCollect.classList.remove('hide'); // then the 'hide' class will be removed from this element
                        }
                    }
                    alignBody();
                }

            }
        }


    };
}