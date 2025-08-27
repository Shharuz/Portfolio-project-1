//export const itemsCategories = document.querySelectorAll('.forCategoryAllPages p'); //in the element with the class radio-category, all inputs of the radio type are taken
import { collectionOfElementsForhideShow } from './categoriesRadio.js';
export function countCategories(itemsCategories) {
    if (itemsCategories[0].childNodes[1]) { //check that this piece of code only works on the blog.html

        //counting all articles
        let count = 0;
        for (let itemCollect of collectionOfElementsForhideShow) {
            //console.log(itemCollect.childNodes);//NodeList format: text, div.blog-article-min; text, div.blog-article-min; etc. 
            //only div.blog-article-min need to be counted, That's why -> itemCollect.childNodes.length / 2
            //there is text at the end of the nodelist, the text needs to be removed, That's why -> itemCollect.childNodes.length - 1
            count += itemCollect.childNodes.length //throw into the count
        }
        itemsCategories[0].childNodes[1].innerHTML = count; //add counted articles to html

        //counting articles by category
        itemsCategories.forEach((item) => { // for each item from the collection itemsCategories
            for (let itemCollect of collectionOfElementsForhideShow) { //iterate over all elements with data-anchor attribute
                if (item.id == itemCollect.getAttribute('data-anchor')) { //if item.id matches the data-anchor attribute of an element from the collection collectionOfElementsForhideShow
                    item.childNodes[1].innerHTML = (itemCollect.childNodes.length); // then from the input go to the label, and in the label find the span and assign the value of the counted articles
                };
            }
        });
    };
}