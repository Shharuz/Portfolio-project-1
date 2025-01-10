let imgs = document.querySelectorAll(".card-product-description__wrapper-for-swiper__swiperImg img");


imgs.forEach((item) => {

    let preview = item.nextElementSibling;
    let x = preview.offsetWidth / 300;
    let y = preview.offsetHeight / 300;

   item.addEventListener("mousemove", (e) => {
        preview.style.backgroundImage = "url(" + `${item.getAttribute('src')}` + ')';
        preview.style.backgroundSize = item.width * x +
            "px " + item.height * y + "px";

        let posX = e.offsetX;
        let posY = e.offsetY;

        preview.style.backgroundPosition = "-" +
            (posX * x) / 2.7 + "px -" + (posY * y) / 1.9 + "px";
    });

    item.addEventListener("mouseout", () => {
        preview.style.backgroundImage = "none";
    });


})