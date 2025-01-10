const slider = document.querySelector('.aboutUs-certificates__block');
const wrapper = document.querySelector('.aboutUs-certificates__block__wrapper');
const firstElem = document.querySelectorAll('.aboutUs-certificates__block__wrapper__item')[0];
console.log(firstElem);

let isDragstart = false;
let isDragging = false;
let prevPageX;
let prevScrollLeft;
let positionDiff;
let firstElemWidth = firstElem.clientWidth + 20;

const autoslide = () => {
    if (slider.scrollLeft == (slider.scrollWidth - slider.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstElemWidth = firstElem.clientWidth + 20;
    let valDifference = firstElemWidth - positionDiff;


    if (slider.scrollLeft > prevScrollLeft) {
        return slider.scrollLeft += positionDiff > firstElemWidth / 3 ? valDifference : -positionDiff;
    }
    slider.scrollLeft -= positionDiff > firstElemWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragstart = true;
    e.preventDefault();
    slider.classList.add('dragging')
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if (!isDragstart) return;
    e.preventDefault();
    isDragging = true;
    slider.classList.add('dragging')
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = (e) => {
    e.preventDefault();
    slider.classList.remove('dragging')
    isDragstart = false;

    if (!isDragging) return;
    isDragging = false;
    autoslide();
}

if (document.documentElement.clientWidth <= 580) {
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);

    slider.addEventListener('mousemove', dragging);
    slider.addEventListener('touchmove', dragging);

    slider.addEventListener('mouseup', dragStop);
    slider.addEventListener('touchend', dragStop);
    slider.addEventListener('mouseleave', dragStop);
}