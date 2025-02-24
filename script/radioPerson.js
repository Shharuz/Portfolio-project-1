//for forPartners.html, account.html, placingAnOrder.html,
const radioPerson = document.querySelectorAll('.fieldset__item input[type="radio"]');
const formItems = document.querySelectorAll('main .form__item');
const delivery = document.querySelectorAll('main [data-hide-delivery]');//for delivery method on page placingAnOrder.html




radioPerson.forEach((item) => {
    item.addEventListener('change', () => {
        for (let itemformItems of formItems) {
            if (itemformItems.classList.contains('hide')) {//reveals all elements
                itemformItems.classList.remove('hide')
            }

            if (item.id == itemformItems.getAttribute('data-hide')) {//if the radioPerson id matches the data-hide of the form element, it will hide it
                itemformItems.classList.add('hide')
            }
        }
        if (item.getAttribute('name') == 'delivery') {//similarly, see above
            for (let itemdelivery of delivery) {
                itemdelivery.classList.add('hide')
                if (item.id == itemdelivery.getAttribute('data-hide-delivery')) {
                    itemdelivery.classList.remove('hide')
                }
            }
        }



    });
});