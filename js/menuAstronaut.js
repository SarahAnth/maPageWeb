/* quand on clique sur burger, menu apparait */

/* va chercher mon icone burger dans html */
const menu = document.querySelector(".menu");

/* va chercher mon menu special burger dans html */
const menuElements = document.querySelector(".headerElements");

/* quand on clique sur l'icone burger, le menu special burger apparait */

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuElements.classList.toggle("active");
})