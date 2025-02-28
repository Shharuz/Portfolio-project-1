//for card.html
let imgs = document.querySelectorAll(".card-product-description__wrapper-for-swiper__swiperImg img");


imgs.forEach((item) => {

    let preview = item.nextElementSibling;// div with class "zoom-preview"
    let x = preview.offsetWidth / 300; //element width + padding + border
    let y = preview.offsetHeight / 300;// division by 300 is responsible for image zoom
    //if for example you divide by 100, the picture will be enlarged more
    //if for example you divide by 400, the picture will be less enlarged

   item.addEventListener("mousemove", (e) => {
        preview.style.backgroundImage = "url(" + `${item.getAttribute('src')}` + ')';//the div with class "zoom-preview" has a background similar to the adjacent image
        preview.style.backgroundSize = item.width * x +
            "px " + item.height * y + "px";

        let posX = e.offsetX;//cursor x coordinates
        let posY = e.offsetY;//cursor y coordinates

        preview.style.backgroundPosition = "-" +
            (posX * x) / 2.7 + "px -" + (posY * y) / 1.9 + "px";
             //value 2.7 - is responsible for the distance by which the enlarged image will be shifted horizontally
             //for example, with a value of 8, the image will hardly move, but with a value of 1, it will move too much, going beyond the block
              //value 1.9 - is responsible for the distance by which the enlarged image will be shifted vertically                                                
    });

    item.addEventListener("mouseout", () => {
        preview.style.backgroundImage = "none";
    });


})