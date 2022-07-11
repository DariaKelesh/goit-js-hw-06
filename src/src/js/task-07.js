
const inputSizeControl = document.querySelector("input#font-size-control");
const magicText = document.querySelector("#text");

inputSizeControl.addEventListener("input", () => {
    magicText.style.fontSize = "48px";
})