// go to the previous page by navigation

//development
export function goToPreviousPage() {
    /*let allLiSecondNav = document.querySelectorAll('.secondary-nav li');
    //takes the link address from the previous element and puts it into the arrow link of the last element
    let linkAdress = allLiSecondNav[(allLiSecondNav.length - 2)].childNodes[0].getAttribute('href');
    //development
    allLiSecondNav[allLiSecondNav.length - 1].childNodes[1].setAttribute('href', linkAdress);
    /////////////
    //production
    //allLiSecondNav[allLiSecondNav.length - 1].childNodes[0].setAttribute('href', linkAdress);
    /////////////*/

    let allLiSecondNav = document.querySelectorAll('.secondary-nav li');
    //takes the link address from the previous element and puts it into the arrow link of the last element
    let linkAdress = allLiSecondNav[(allLiSecondNav.length - 2)].querySelector('a').getAttribute('href');
    allLiSecondNav[allLiSecondNav.length - 1].querySelector('a').setAttribute('href', linkAdress);
}