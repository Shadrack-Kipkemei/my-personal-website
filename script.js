let menuIcon = document.querySelector("#menu-icon");
let topnav = document.querySelector(".topnav");
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    topnav.classLight.toggle("active")
}