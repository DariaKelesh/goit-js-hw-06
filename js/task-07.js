
const inputSizeControl = document.querySelector("input#font-size-control");
const magicText = document.querySelector("#text");

inputSizeControl.addEventListener("input", (event) => {
    magicText.style.fontSize = event.target.value + "px";
})