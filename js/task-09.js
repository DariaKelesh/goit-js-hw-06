
const buttonChangeColor = document.querySelector(".change-color");
const spanChangeColor = document.querySelector(".color");
const body = document.querySelector("body");



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const randomColor = getRandomHexColor();


// const handleClick = event => {
//     spanChangeColor.innerHTML = randomColor;
//     body.style.backgroundColor = randomColor;
// }
const handleClick = event => {
    spanChangeColor.innerHTML = getRandomHexColor();
    body.style.backgroundColor = getRandomHexColor();
}

buttonChangeColor.addEventListener("click", handleClick);

