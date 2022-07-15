
const buttonChangeColor = document.querySelector(".change-color");
const spanChangeColor = document.querySelector(".color");
const body = document.querySelector("body");



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




const handleClick = event => {
    const randomColor = getRandomHexColor();
    spanChangeColor.innerHTML = randomColor;
    body.style.backgroundColor = randomColor;
}


buttonChangeColor.addEventListener("click", handleClick);

