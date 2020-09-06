// burger menu animation
const open = () => {
    let aboutMenuContainer = document.getElementById("main-container");
    let openButton = document.getElementById("open-button");

    openButton.style.display = "none";
    aboutMenuContainer.style.display = "flex";
    aboutMenuContainer.style.width = "100%";
    aboutMenuContainer.style.height = "auto";
    aboutMenuContainer.style.flexDirection = "column";
};
const close = () => {
    let aboutMenuContainer = document.getElementById("main-container");
    let openButton = document.getElementById("open-button");

    openButton.style.display = "block";
    aboutMenuContainer.style.display = "none";
};

module.exports = { open, close };
