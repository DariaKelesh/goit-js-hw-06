

const input = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length]')

console.dir(dataLength.dataset.length);
console.log(input.value.length);
console.dir(input.textContent.length);
console.log(input.textContent.length === dataLength.dataset.length);

console.log(Number(dataLength.dataset.length));

input.addEventListener("blur", (event) => {
    event.preventDefault();
   
    console.log(dataLength.dataset);
    
    if (input.value.length === Number(dataLength.dataset.length)) {

        input.classList.add('valid');
        console.log(input.classList);
    } else {
        input.classList.add('invalid')
        console.log(input.classList);
    }
})