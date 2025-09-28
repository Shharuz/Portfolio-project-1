(self["webpackChunklivebacteria_local"] = self["webpackChunklivebacteria_local"] || []).push([["price-range"],{

/***/ "./src/script/allScripts/price-range.js":
/*!**********************************************!*\
  !*** ./src/script/allScripts/price-range.js ***!
  \**********************************************/
/***/ (() => {

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UtcmFuZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSwrQkFBK0I7QUFDL0IsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHFEQUFxRDtBQUNyRCx3REFBd0Q7QUFDeEQsY0FBYztBQUNkLHdEQUF3RDtBQUN4RDtBQUNBLFVBQVUsTUFBTTtBQUNoQix5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDO0FBQ0Esd0VBQXdFO0FBQ3hFLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQSxxREFBcUQ7QUFDckQsK0NBQStDO0FBQy9DLDhFQUE4RTtBQUM5RSxjQUFjLHVDQUF1QztBQUNyRCwrQ0FBK0M7QUFDL0Msc0ZBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRSx3REFBd0Q7QUFDeEQsbUVBQW1FO0FBQ25FLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdmViYWN0ZXJpYS5sb2NhbC8uL3NyYy9zY3JpcHQvYWxsU2NyaXB0cy9wcmljZS1yYW5nZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RoZXJlIGlzIGVsZW1lbnQgMSAocGFyZW50LCBpbiB0aGUgZm9ybSBvZiBhIGxpbmUgd2l0aCBhIGdyYXkgYmFja2dyb3VuZCkgKC5wcmljZS1yYW5nZV9fc2xpZGVyKSxcclxuLy9pdCBjb250YWlucyBlbGVtZW50IDIgd2l0aCBhIGdyZWVuIGJhY2tncm91bmQgKGNoaWxkIC5wcm9ncmVzcyksIGVsZW1lbnQgMSBpbiByZWxhdGl2ZSBwb3NpdGlvbmluZywgXHJcbi8vZWxlbWVudCAyIGluIGFic29sdXRlIHBvc2l0aW9uaW5nLCBpbiB0aGUgYnJvd3NlciBpdCBpcyB2aXNpYmxlIHRoYXQgZWxlbWVudCAyIGlzIHN1cGVyaW1wb3NlZCBvbiBlbGVtZW50IDEgKHRoYW5rcyB0byBwb3NpdGlvbmluZykuXHJcbi8vSWYgZWxlbWVudCAyIGlzIGdpdmVuIGEgbGVmdCBvZiAyMCUsIGFuZCBhIHJpZ2h0IG9mIDIwJSwgdGhlbiB2aXN1YWxseSB0aGUgd2lkdGggb2YgZWxlbWVudCAyIHdpbGwgZGVjcmVhc2UuXHJcbmNvbnN0IHJhbmdlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaWNlLXJhbmdlX19yYW5nZS1pbnB1dCBpbnB1dFwiKSwvL3N0YW5kYXJkIHN0eWxlcyBoYXZlIGJlZW4gcmVtb3ZlZCwgb25seSBjaXJjbGVzIHJlbWFpblxyXG4gICAgcHJpY2VJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpY2UtcmFuZ2VfX3ByaWNlLWlucHV0IGlucHV0XCIpLC8vanVzdCBpbnB1dHMgb2YgdHlwZSB0ZXh0XHJcbiAgICByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpY2UtcmFuZ2VfX3NsaWRlciAucHJvZ3Jlc3NcIik7Ly9kZXNjcmliZWQgb24gbGluZSAxXHJcbnJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2Zvcm1fX3Jlc2V0LWZpbHRlclwiKTtcclxubGV0IHByaWNlR2FwID0gMzA7Ly92YWx1ZSBzbyB0aGF0IGluIHRoZSBmdXR1cmUgLnByaWNlLXJhbmdlX19yYW5nZS1pbnB1dCBpbnB1dCBkbyBub3Qgb3ZlcmxhcFxyXG5cclxucmFuZ2VJbnB1dC5mb3JFYWNoKChpbnB1dCkgPT4gey8vdGhlIHZhbHVlcyBhcmUgc2V0IHJlbGF0aXZlIHRvIHRoZSBtb3ZlbWVudCBvZiB0aGUgc2xpZGVyc1xyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7Ly9hbnkgbW92ZW1lbnQgb2YgdGhlIHNsaWRlciwgaW4gaW5wdXQgYnkgdHlwZSByYW5nZSwgYW4gXCJpbnB1dFwiIGV2ZW50IG9jY3Vyc1xyXG4gICAgICAgIC8vZXhhbXBsZXM6IHBhcnNlSW50KHJhbmdlSW5wdXRbMF0udmFsdWUpID09IDMwMCwgcGFyc2VJbnQocmFuZ2VJbnB1dFsxXS52YWx1ZSkgPT0gMTAwMCAtIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAvLzEuIHBhcnNlSW50KHJhbmdlSW5wdXRbMF0udmFsdWUpID09IDk3MSBwYXJzZUludChyYW5nZUlucHV0WzFdLnZhbHVlKSA9PSAxMDAwIC8gcmFuZ2VJbnB1dFswXSBtb3Zlc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vMi4gcGFyc2VJbnQocmFuZ2VJbnB1dFswXS52YWx1ZSkgPT0gMzAwIHBhcnNlSW50KHJhbmdlSW5wdXRbMV0udmFsdWUpID09IDMyOSAvIHJhbmdlSW5wdXRbMV0gbW92ZXNcclxuICAgICAgICAgICAgICAgICAgICAvLzMuIHBhcnNlSW50KHJhbmdlSW5wdXRbMF0udmFsdWUpID09IDQwMCBwYXJzZUludChyYW5nZUlucHV0WzFdLnZhbHVlKSA9PSA5MDAgLyByYW5nZUlucHV0WzBdIGFuZCByYW5nZUlucHV0WzFdIG1vdmUgd2l0aG91dCBjcm9zc2luZyBlYWNoIG90aGVyIC8gb24gbGluZSAyNlxyXG4gICAgICAgIGxldCBtaW5WYWwgPSBwYXJzZUludChyYW5nZUlucHV0WzBdLnZhbHVlKSxcclxuICAgICAgICAgICAgbWF4VmFsID0gcGFyc2VJbnQocmFuZ2VJbnB1dFsxXS52YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChtYXhWYWwgLSBtaW5WYWwgPCBwcmljZUdhcCkgey8vMS4oMTAwMCAtIDk3MSA9PSAyOSkgPCAzMCA9PSB0cnVlICAvIDIuICgzMjkgLSAzMDAgPT0gMjkpIDwgMzAgPT0gdHJ1ZSAvIDMuICg5MDAgLSA0MDAgPT0gNTAwKSA8IDMwID09IGZhbHNlXHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwicmFuZ2UtbWluXCIpIHsvLzEubm93IGUudGFyZ2V0ID09IHJhbmdlSW5wdXRbMF0gLSB0aGUgY2xhc3Mgb2YgdGhpcyBpbnB1dCBpcyByYW5nZS1taW4odHJ1ZSkgIC8gMi5ub3cgZS50YXJnZXQgPT0gcmFuZ2VJbnB1dFsxXSAtIHRoZSBjbGFzcyBvZiB0aGlzIGlucHV0IGlzIHJhbmdlLW1heChmYWxzZSlcclxuICAgICAgICAgICAgICAgIHJhbmdlSW5wdXRbMF0udmFsdWUgPSBtYXhWYWwgLSBwcmljZUdhcDsvLzEucmFuZ2VJbnB1dFswXS52YWx1ZSA9IDEwMDAgLSAzMCA9PSA5NzAsIGZyb20gaGVyZSBpdCBmb2xsb3dzIHRoYXQgaWYgdGhlIGNvbmRpdGlvbnMgKG1heFZhbCAtIG1pblZhbCA8IHByaWNlR2FwKSBhbmQgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJyYW5nZS1taW5cIikgYXJlIHRydWUsIHRoZW4gcmFuZ2VJbnB1dFswXSB3b24ndCBtb3ZlIG1vcmUgdGhhbiA5NzBcclxuICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByYW5nZUlucHV0WzFdLnZhbHVlID0gbWluVmFsICsgcHJpY2VHYXA7Ly8yLnJhbmdlSW5wdXRbMV0udmFsdWUgPSAzMDAgKyAzMCA9PSAzMzAsZnJvbSBoZXJlIGl0IGZvbGxvd3MgdGhhdCBpZiB0aGUgY29uZGl0aW9ucyAobWF4VmFsIC0gbWluVmFsIDwgcHJpY2VHYXApID09IHRydWUgYW5kIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwicmFuZ2UtbWluXCIpID09IGZhbHNlLCB0aGVuIHJhbmdlSW5wdXRbMV0gd2lsbCBub3QgbW92ZSBsZXNzIHRoYW4gMzMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Ugey8vdW5kZXIgcmFuZ2VJbnB1dCwgdGhlcmUgYXJlIHByaWNlSW5wdXQgb2YgdGhlIHRleHQgdHlwZVxyXG4gICAgICAgICAgICBwcmljZUlucHV0WzBdLnZhbHVlID0gbWluVmFsOy8vLS0tLS18IFxyXG4gICAgICAgICAgICBwcmljZUlucHV0WzFdLnZhbHVlID0gbWF4VmFsOy8vLS0tLS18IC0+IHByaWNlSW5wdXQgaXMgYXNzaWduZWQgdGhlIHZhbHVlIG9mIHJhbmdlSW5wdXRcclxuICAgICAgICAgICAgLy92aXN1YWxseSBjaGFuZ2VzIHRoZSB3aWR0aCBvZiBhbiBlbGVtZW50IGZyb20gdGhlIHJhbmdlIHZhcmlhYmxlIC9vbiBsaW5lIDcsIGRlc2NyaWJlZCBvbiBsaW5lIDEsIGFjY29yZGluZyB0byB0aGUgcmFuZ2VJbnB1dCB2YWx1ZXNcclxuICAgICAgICAgICAgcmFuZ2Uuc3R5bGUubGVmdCA9IChtaW5WYWwgLyByYW5nZUlucHV0WzBdLm1heCkgKiAxMDAgKyBcIiVcIjsvLzMuICg0MDAgLyAxMzAwKSAqIDEwMCA9PSAzMCw3NiUgLSByYW5nZSB3aWxsIHNoaWZ0IHRvIHRoZSByaWdodCBieSB0aGlzIHZhbHVlXHJcbiAgICAgICAgICAgIHJhbmdlLnN0eWxlLnJpZ2h0ID0gMTAwIC0gKG1heFZhbCAvIHJhbmdlSW5wdXRbMV0ubWF4KSAqIDEwMCArIFwiJVwiOy8vMy4gMTAwIC0gKDkwMCAvIDEzMDApICogMTAwID09IDMwLDglIHJhbmdlIHdpbGwgc2hpZnQgdG8gdGhlIGxlZnQgYnkgdGhpcyB2YWx1ZVxyXG4gICAgICAgICAgICAvLzMuIHZpc3VhbGx5IHRoZSBsZW5ndGggb2YgdGhlIHJhbmdlIHdpbGwgZGVjcmVhc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5wcmljZUlucHV0LmZvckVhY2goKGlucHV0KSA9PiB7IC8vdmFsdWVzIGFyZSBzZXQgcmVsYXRpdmUgdG8gdGhlIGVudGVyZWQgcHJpY2VcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vZXhhbXBsZXMgYXMgb24gbGluZSAxMy4gT25seSBwYXJzZUludChyYW5nZUlucHV0WzBdLnZhbHVlKSBpcyByZXBsYWNlZCBieSBwYXJzZUludChwcmljZUlucHV0WzBdLnZhbHVlKVxyXG4gICAgICAgIC8vMS4gMi4gLSBub3RoaW5nIHdpbGwgaGFwcGVuKG1heWJlIG91dHB1dCB2YWx1ZSAncmFuZ2UgdG9vIHNtYWxsJz8/KVxyXG4gICAgICAgIGxldCBtaW5QcmljZSA9IHBhcnNlSW50KHByaWNlSW5wdXRbMF0udmFsdWUpLFxyXG4gICAgICAgICAgICBtYXhQcmljZSA9IHBhcnNlSW50KHByaWNlSW5wdXRbMV0udmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAobWF4UHJpY2UgLSBtaW5QcmljZSA+PSBwcmljZUdhcCAmJiBtYXhQcmljZSA8PSByYW5nZUlucHV0WzFdLm1heCkgey8vMy4gNTAwID49IDMwICYmIDkwMCA8PSAxMzAwIC0gdHJ1ZVxyXG4gICAgICAgICAgICAvL3BhcnNlSW50KHByaWNlSW5wdXRbMF0udmFsdWUpID09IDMwMCwgcGFyc2VJbnQocHJpY2VJbnB1dFsxXS52YWx1ZSkgPT0gMTAwMCAtIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJpbnB1dC1taW5cIikgey8vY29uZGl0aW9uIGlzIHRydWUgaWYgaW5wdXQgb2NjdXJzIGF0IHByaWNlSW5wdXRbMF1cclxuICAgICAgICAgICAgICAgIHJhbmdlSW5wdXRbMF0udmFsdWUgPSBtaW5QcmljZTsvL3JhbmdlSW5wdXRbMF0udmFsdWUgPT0gNDAwXHJcbiAgICAgICAgICAgICAgICByYW5nZS5zdHlsZS5sZWZ0ID0gKG1pblByaWNlIC8gcmFuZ2VJbnB1dFswXS5tYXgpICogMTAwICsgXCIlXCI7Ly8gKDQwMCAvIDEzMDApICogMTAwID0gMzAsNzYlIC0gcmFuZ2Ugd2lsbCBzaGlmdCB0byB0aGUgcmlnaHQgYnkgdGhpcyB2YWx1ZVxyXG4gICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uZGl0aW9uIGlzIHRydWUgaWYgaW5wdXQgb2NjdXJzIGF0IHByaWNlSW5wdXRbMV1cclxuICAgICAgICAgICAgICAgIHJhbmdlSW5wdXRbMV0udmFsdWUgPSBtYXhQcmljZTsvL3JhbmdlSW5wdXRbMV0udmFsdWUgPT0gOTAwXHJcbiAgICAgICAgICAgICAgICByYW5nZS5zdHlsZS5yaWdodCA9IDEwMCAtIChtYXhQcmljZSAvIHJhbmdlSW5wdXRbMV0ubWF4KSAqIDEwMCArIFwiJVwiOyAvLyAxMDAgLSAoOTAwIC8gMTMwMCkgKiAxMDAgPSAzMC44JSByYW5nZSB3aWxsIHNoaWZ0IHRvIHRoZSBsZWZ0IGJ5IHRoaXMgdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLzMuIHZpc3VhbGx5IHRoZSBsZW5ndGggb2YgdGhlIHJhbmdlIHdpbGwgZGVjcmVhc2VcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5yZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7Ly9yZXNldCB0byBkZWZhdWx0IHN0YXRlXHJcbiAgICAgICAgbGV0IG1heCA9IDEzMDAsXHJcbiAgICAgICAgICAgIG1pblByaWNlID0gcGFyc2VJbnQocHJpY2VJbnB1dFswXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpLC8vIDMwMFxyXG4gICAgICAgICAgICBtYXhQcmljZSA9IHBhcnNlSW50KHByaWNlSW5wdXRbMV0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTsvLyAxMDAwXHJcbiAgICAgICAgcmFuZ2Uuc3R5bGUubGVmdCA9IChtaW5QcmljZSAvIG1heCkgKiAxMDAgKyBcIiVcIjsvL29uIGxpbmUgNTFcclxuICAgICAgICByYW5nZS5zdHlsZS5yaWdodCA9IDEwMCAtIChtYXhQcmljZSAvIG1heCkgKiAxMDAgKyBcIiVcIjsgICAgLy9vbiBsaW5lIDU0XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==