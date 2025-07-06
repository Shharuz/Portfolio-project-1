//to display the filter manufacturer weight and price on the page catalog Categories.html
//on screen resolution less than 1400px
const openFilter = document.querySelector(".bth-filter");
const filter = document.querySelector(".filter");
const closeFilter = document.querySelector(".filter__close");

function openFilterModal() {
        filter.classList.add('visible');
};

function closeFilterModal(e) {
        if(e.target == filter || e.target == closeFilter){
            filter.classList.remove('visible');
        }
        

};



openFilter.addEventListener("click", openFilterModal);  //open filter by clicking on element with class .bth-filter
closeFilter.addEventListener("click", closeFilterModal);//close filter by clicking on element with class .filter__close
filter.addEventListener("click", closeFilterModal);     //close the filter by clicking on any place on the screen except the filter