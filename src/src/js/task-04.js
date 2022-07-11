const spanValue = document.querySelector("span#value");
let counterValue = 0;


const btnDecrement = document.querySelector("button[data-action=decrement]");
const btnIncrement = document.querySelector("button[data-action=increment]");

btnDecrement.addEventListener("click", handleDecrementClick);
btnIncrement.addEventListener("click", handleIncrementClick);

function handleDecrementClick(value) {
    value = counterValue -= 1;
    spanValue.innerHTML = counterValue;
}

function handleIncrementClick(value) {
    value = counterValue += 1;
    spanValue.innerHTML = counterValue;
}

