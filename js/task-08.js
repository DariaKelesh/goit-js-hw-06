

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
         } = event.currentTarget

    if (email.value === "" || password.value === "") {
        alert("Все поля должны быть заполнены");
        return
    }

    console.log(`Email: ${email.value}, password: ${password.value}`);

    event.currentTarget.reset();
}


   

