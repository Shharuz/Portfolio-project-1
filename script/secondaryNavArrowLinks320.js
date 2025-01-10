document.addEventListener("DOMContentLoaded", () => {

let allLiSecondNav = document.querySelectorAll('.secondary-nav li');

let linkAdress = allLiSecondNav[(allLiSecondNav.length - 2)].childNodes[0].getAttribute('href');

allLiSecondNav[(allLiSecondNav.length - 1)].childNodes[1].setAttribute('href', linkAdress);
//console.log(allLiSecondNav[2].childNodes[0].getAttribute('href'));

//console.log(allLiSecondNav[(allLiSecondNav.length - 1)].childNodes[1]);
});

/*let allLiSecondNav = document.querySelectorAll('.secondary-nav li');

let linkAdress = allLiSecondNav[2].childNodes[0].getAttribute('href');
allLiSecondNav[(allLiSecondNav.length - 1)].childNodes[1].setAttribute('href', linkAdress);
*/





