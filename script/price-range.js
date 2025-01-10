const rangeInput = document.querySelectorAll(".price-range__range-input input"),
    priceInput = document.querySelectorAll(".price-range__price-input input"),
    range = document.querySelector(".price-range__slider .progress");
reset = document.querySelector(".filter__form__reset-filter");
let priceGap = 30;

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }

    });
});



priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

reset.addEventListener("click", (event) => {
        let max = 1300,
            minPrice = parseInt(priceInput[0].getAttribute('value')),
            maxPrice = parseInt(priceInput[1].getAttribute('value'));
        range.style.left = (minPrice / max) * 100 + "%";
        range.style.right = 100 - (maxPrice / max) * 100 + "%";    
});