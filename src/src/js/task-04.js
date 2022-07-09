let counterValue = document.querySelector("span#value");
counterValue = 0;

const counter = document.querySelector("div#counter")

const btnDecrement = document.querySelector("button[data-action=decrement]");

const btnIncrement = document.querySelector("button[data-action=increment]");

const onBtnDecrementClick = () => {
    console.log("Button -1 was clicked");
    // console.log(counterValue -= 1);
    // КАК counterValue вывести в HTML???
    
    // btnDecrement.insertAdjacentHTML("afterend", counterValue -= 1)
    

    counterValue.innerHTML = Number(counterValue -= 1);
    
};

btnDecrement.addEventListener("click", onBtnDecrementClick);


const onBtnIncrementClick = () => {
    console.log("Button +1 was clicked");
    // console.log(counterValue += 1);
    // КАК counterValue вывести в HTML???
    btnDecrement.insertAdjacentHTML("afterend", counterValue += 1)
};

btnIncrement.addEventListener("click", onBtnIncrementClick);


