//for card.html
export function zoomIncrease(e, item, preview, x, y) {
    preview.style.backgroundImage = "url(" + `${item.getAttribute('src')}` + ')'; //the div with class "zoom-preview" has a background similar to the adjacent image
    preview.style.backgroundSize = item.width * x +
        "px " + item.height * y + "px";

    let posX = e.offsetX; //cursor x coordinates
    let posY = e.offsetY; //cursor y coordinates

    preview.style.backgroundPosition = "-" +
        (posX * x) / 2.7 + "px -" + (posY * y) / 1.9 + "px";
    //value 2.7 - is responsible for the distance by which the enlarged image will be shifted horizontally
    //for example, with a value of 8, the image will hardly move, but with a value of 1, it will move too much, going beyond the block
    //value 1.9 - is responsible for the distance by which the enlarged image will be shifted vertically      
}

export function zoomDecrease(preview) {
    preview.style.backgroundImage = "none";
}