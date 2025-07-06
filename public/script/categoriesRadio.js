//For howToBuy.html, blog.html, account.html, questions.html

const itemsCategories = document.querySelectorAll('.forCategoryAllPages p'); //in the element with the class radio-category, all inputs of the radio type are taken
const collectionOfElementsForhideShow = document.querySelectorAll('[data-anchor]') //collection of all elements with attribute data-anchor


itemsCategories.forEach((item) => {

    item.addEventListener('click', () => {

        for (let item of itemsCategories) {
            item.classList.remove('highlighted')
        }
        if (!item.classList.contains('highlighted')) {
            item.classList.add('highlighted')
        }
        for (let itemCollect of collectionOfElementsForhideShow) { //iterate over all elements with data-anchor attribute
            itemCollect.classList.add('hide'); //all elements with the data-anchor attribute are assigned the hide class
            console.log(itemCollect);

            if (item.id == 'all-blog') { //for blog.html //if the value of the input id is 'all-blog', then all elements with the data-anchor attribute will have the hide class removed
                itemCollect.classList.remove('hide');
            } else if (item.id == itemCollect.getAttribute('data-anchor')) { //there are: 1. input with change event 2. element (div or p) with data-anchor attribute
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
    });
});

//console.log(itemsCategories[0]);

//console.log(itemsCategories[0].childNodes[1].tagName);

//for blog.html //counting the number of all articles and by categories
if (itemsCategories[0].childNodes[1]) { //check that this piece of code only works on the blog.html

    //counting all articles
    let count = 0;
    for (let itemCollect of collectionOfElementsForhideShow) {
        //console.log(itemCollect.childNodes);//NodeList format: text, div.blog-article-min; text, div.blog-article-min; etc. 
        //only div.blog-article-min need to be counted, That's why -> itemCollect.childNodes.length / 2
        //there is text at the end of the nodelist, the text needs to be removed, That's why -> itemCollect.childNodes.length - 1
        count += (itemCollect.childNodes.length - 1) / 2 //throw into the count
    }
    itemsCategories[0].childNodes[1].innerHTML = count; //add counted articles to html

    //counting articles by category
    itemsCategories.forEach((item) => { // for each item from the collection itemsCategories
        for (let itemCollect of collectionOfElementsForhideShow) { //iterate over all elements with data-anchor attribute
            if (item.id == itemCollect.getAttribute('data-anchor')) { //if item.id matches the data-anchor attribute of an element from the collection collectionOfElementsForhideShow
                item.childNodes[1].innerHTML = (itemCollect.childNodes.length - 1) / 2; // then from the input go to the label, and in the label find the span and assign the value of the counted articles
            };
        }
    });
};

function changeCheckedRadioBlog() { //to go from the card.html page; section card-helpful-information -> card-helpful-information__articles

    for (let item of itemsCategories) {
        if (item.id == window.location.href.split("?")[1]) { //https://livebacteria.local/blog.html?video-broadcasts - will only take video-broadcasts
            item.setAttribute('checked', 'checked'); //will set the checked state to the input whose id matches the link address
            for (let itemCollect of collectionOfElementsForhideShow) {
                itemCollect.classList.add('hide'); //all elements with the data-anchor attribute are assigned the hide class
                if (itemCollect.getAttribute('data-anchor') == window.location.href.split("?")[1]) { //if the value of the data-anchor attribute matches the split link address (2nd part), 
                    itemCollect.classList.remove('hide'); // then the 'hide' class will be removed from this element
                }
            }
        }

    }

};