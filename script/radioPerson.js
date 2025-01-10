const radioPerson = document.querySelectorAll('.fieldset__item input[type="radio"]');
const formItems = document.querySelectorAll('main .form__item');
const delivery = document.querySelectorAll('main [data-hide-delivery]');




radioPerson.forEach((item) => {
    item.addEventListener('change', () => {
        for (let itemformItems of formItems) {
            if (itemformItems.classList.contains('hide')) {
                itemformItems.classList.remove('hide')
            }

            if (item.id == itemformItems.getAttribute('data-hide')) {
                itemformItems.classList.add('hide')
            }
        }
        if (item.getAttribute('name') == 'delivery') {
            for (let itemdelivery of delivery) {
                itemdelivery.classList.add('hide')
                if (item.id == itemdelivery.getAttribute('data-hide-delivery')) {
                    itemdelivery.classList.remove('hide')
                }
            }
        }



    });
});