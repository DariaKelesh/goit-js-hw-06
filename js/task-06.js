

const input = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length]')


input.addEventListener("blur", (event) => {

    if (input.value.length === Number(dataLength.dataset.length)) {

        input.classList.add('valid');
        input.classList.remove('invalid')
      
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
   
    }
})