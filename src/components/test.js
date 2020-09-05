// burger menu animation
let $aboutMenuContainer =  document.getElementsByClassName("about-menu-container")
const open = () => {
    // document.getElementById("about-menu").style.width = "21vmin";
    document.getElementById("test").style.border = "1px solid"
};
const close = () => {
    // document.getElementById("about-menu").style.width = "0vmin";
    document.getElementById("test").style.border= "0";
};

module.exports = {open, close}