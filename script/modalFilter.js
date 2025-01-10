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



openFilter.addEventListener("click", openFilterModal);
closeFilter.addEventListener("click", closeFilterModal);
filter.addEventListener("click", closeFilterModal);