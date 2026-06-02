
const colourchange = function () {
    const hex = "0123456789ABCDEF";
    let colour = "#";

    for (let i = 0; i < 6; i++) {
        colour += hex[Math.floor(Math.random() * 16)];
    }

    return colour;
};

let intervalId = null;

const startchangecolour = function () {

    if (!intervalId) {

        intervalId = setInterval(function () {
            document.body.style.backgroundColor = colourchange();
        }, 1000);

    }
};

const stopchangecolour = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startchangecolour);
document.querySelector('#stop').addEventListener('click', stopchangecolour);
