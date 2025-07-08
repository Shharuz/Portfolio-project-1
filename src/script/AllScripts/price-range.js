//there is element 1 (parent, in the form of a line with a gray background) (.price-range__slider),
//it contains element 2 with a green background (child .progress), element 1 in relative positioning, 
//element 2 in absolute positioning, in the browser it is visible that element 2 is superimposed on element 1 (thanks to positioning).
//If element 2 is given a left of 20%, and a right of 20%, then visually the width of element 2 will decrease.
const rangeInput = document.querySelectorAll(".price-range__range-input input"),//standard styles have been removed, only circles remain
    priceInput = document.querySelectorAll(".price-range__price-input input"),//just inputs of type text
    range = document.querySelector(".price-range__slider .progress");//described on line 1
reset = document.querySelector(".filter__form__reset-filter");
let priceGap = 30;//value so that in the future .price-range__range-input input do not overlap

rangeInput.forEach((input) => {//the values are set relative to the movement of the sliders
    input.addEventListener("input", (e) => {//any movement of the slider, in input by type range, an "input" event occurs
        //examples: parseInt(rangeInput[0].value) == 300, parseInt(rangeInput[1].value) == 1000 - by default
                    //1. parseInt(rangeInput[0].value) == 971 parseInt(rangeInput[1].value) == 1000 / rangeInput[0] moves
                    //2. parseInt(rangeInput[0].value) == 300 parseInt(rangeInput[1].value) == 329 / rangeInput[1] moves
                    //3. parseInt(rangeInput[0].value) == 400 parseInt(rangeInput[1].value) == 900 / rangeInput[0] and rangeInput[1] move without crossing each other / on line 26
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {//1.(1000 - 971 == 29) < 30 == true  / 2. (329 - 300 == 29) < 30 == true / 3. (900 - 400 == 500) < 30 == false
            if (e.target.className === "range-min") {//1.now e.target == rangeInput[0] - the class of this input is range-min(true)  / 2.now e.target == rangeInput[1] - the class of this input is range-max(false)
                rangeInput[0].value = maxVal - priceGap;//1.rangeInput[0].value = 1000 - 30 == 970, from here it follows that if the conditions (maxVal - minVal < priceGap) and (e.target.className === "range-min") are true, then rangeInput[0] won't move more than 970
            } else {                
                rangeInput[1].value = minVal + priceGap;//2.rangeInput[1].value = 300 + 30 == 330,from here it follows that if the conditions (maxVal - minVal < priceGap) == true and (e.target.className === "range-min") == false, then rangeInput[1] will not move less than 330
            }
        } else {//under rangeInput, there are priceInput of the text type
            priceInput[0].value = minVal;//-----| 
            priceInput[1].value = maxVal;//-----| -> priceInput is assigned the value of rangeInput
            //visually changes the width of an element from the range variable /on line 7, described on line 1, according to the rangeInput values
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";//3. (400 / 1300) * 100 == 30,76% - range will shift to the right by this value
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";//3. 100 - (900 / 1300) * 100 == 30,8% range will shift to the left by this value
            //3. visually the length of the range will decrease
        }

    });
});



priceInput.forEach((input) => { //values are set relative to the entered price
    input.addEventListener("input", (e) => {
        //examples as on line 13. Only parseInt(rangeInput[0].value) is replaced by parseInt(priceInput[0].value)
        //1. 2. - nothing will happen(maybe output value 'range too small'??)
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {//3. 500 >= 30 && 900 <= 1300 - true
            //parseInt(priceInput[0].value) == 300, parseInt(priceInput[1].value) == 1000 - by default
            if (e.target.className === "input-min") {//condition is true if input occurs at priceInput[0]
                rangeInput[0].value = minPrice;//rangeInput[0].value == 400
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";// (400 / 1300) * 100 = 30,76% - range will shift to the right by this value
            } else {                                 //condition is true if input occurs at priceInput[1]
                rangeInput[1].value = maxPrice;//rangeInput[1].value == 900
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%"; // 100 - (900 / 1300) * 100 = 30.8% range will shift to the left by this value
            }
            //3. visually the length of the range will decrease
        }
    });
});

reset.addEventListener("click", (event) => {//reset to default state
        let max = 1300,
            minPrice = parseInt(priceInput[0].getAttribute('value')),// 300
            maxPrice = parseInt(priceInput[1].getAttribute('value'));// 1000
        range.style.left = (minPrice / max) * 100 + "%";//on line 51
        range.style.right = 100 - (maxPrice / max) * 100 + "%";    //on line 54
});