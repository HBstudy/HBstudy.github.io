const body = document.querySelector("body");

const IMG_NUMBER = 3;

const chosenImage = Math.floor(Math.random() * IMG_NUMBER);
const image = document.createElement("img");
image.src = `img/${chosenImage}.jpeg`;
image.classList.add("bgstyle");
body.appendChild(image);