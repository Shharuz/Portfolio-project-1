const slider = document.querySelector('.aboutUs-certificates__block');
const wrapper = document.querySelector('.aboutUs-certificates__block__wrapper');
const firstElem = document.querySelectorAll('.aboutUs-certificates__block__wrapper__item')[0];
//console.log(firstElem);

let isDragstart = false;
let isDragging = false;
let prevPageX;
let prevScrollLeft;
let positionDiff;
let firstElemWidth = firstElem.clientWidth + 20;

const autoslide = () => {//the slider automatically reaches the desired position
    //slider.scrollLeft - value in px how much is scrolled relative to the left edge
    //slider.scrollWidth - width of the element, including the part that is hidden
    //slider.clientWidth - internal width with padding (if there is)
    if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) return;//will stop auto aligning the slide when it reaches the end (right edge)

    positionDiff = Math.abs(positionDiff);//always returns a positive number
    let firstElemWidth = firstElem.clientWidth + 20;
    let valDifference = firstElemWidth - positionDiff;


    if (slider.scrollLeft > prevScrollLeft) {//aligns when you drag a slide from right to left
        return slider.scrollLeft += positionDiff > firstElemWidth / 3 ? valDifference : -positionDiff;//while dragging a slide if true, then there will be a value of valDifference and transition to the next slide
    }                                                                                                 //while dragging a slide if false, then the value will be -positionDiff and the slide will return to its original position
    slider.scrollLeft -= positionDiff > firstElemWidth / 3 ? valDifference : -positionDiff;//aligns when you drag a slide from left to right
    //while dragging a slide, if true, then there will be a value of valDifference and transition to the next slide
    //while dragging a slide, if false, then the value will be -positionDiff and the slide will return to its original position
}

const dragStart = (e) => {
    isDragstart = true;
    e.preventDefault();
    slider.classList.add('dragging')//for css styles(style.scss on line 8122)
    prevPageX = e.pageX || e.touches[0].pageX;//e.pageX - cursor(touches) coordinates relative to the left edge of the entire document
    //console.log(e.pageX);
    prevScrollLeft = slider.scrollLeft;//slider.scrollLeft -(receives or sets) the number of pixels by which the element's content is scrolled from the left edge
    //console.log(slider.scrollLeft);
}

const dragging = (e) => {
    if (!isDragstart) return;//the dragging() function is only triggered when a mousedown event occurs on the slider
    e.preventDefault();
    isDragging = true;
    slider.classList.add('dragging')//for css styles(style.scss on line 8122)
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;//current cursor coordinates (counting from the left edge) subtract previous cursor coordinates (counting from the left edge)
    slider.scrollLeft = prevScrollLeft - positionDiff;
    //In general, the cursor coordinates are recalculated and assigned to the Element.scrollLeft property
    console.log(slider.scrollLeft);
}

const dragStop = (e) => {
    e.preventDefault();
    slider.classList.remove('dragging')//for css styles(style.scss on line 8122)
    isDragstart = false;

    if (!isDragging) return;//I need autoslide() to only trigger when mouseup occurs on a slide
    isDragging = false;
    autoslide();//on line 13
}


    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);

    slider.addEventListener('mousemove', dragging);
    slider.addEventListener('touchmove', dragging);

    slider.addEventListener('mouseup', dragStop);
    slider.addEventListener('touchend', dragStop);
    slider.addEventListener('mouseleave', dragStop);
