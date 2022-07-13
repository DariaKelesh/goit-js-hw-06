// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const input = document.querySelector("input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

console.log(input.value);

// function onCreateBtnClick() {
//  event.preventDefault();

// input.addEventListener("input", (event) => {
//   amount.textContent = event.currentTarget.value;
// });
//     if (amount === "") {
//         return
//     }
// }

// function createBoxes(amount) {
   
    // РАБОТАЕТ, НО СДЕЛАТЬ ЦИКЛ!
//     const box1 = document.createElement("div");
//     box1.style.width = "30px";
//     box1.style.height = "30px";
//     box1.style.backgroundColor = "tomato";

//     boxes.append(box1);
//     console.log(boxes);
    
// }


function onCreateBtnClick(number) {
    input.addEventListener("input", (event) =>
    {
        if (event.currentTarget.value === "") {
            return
        }
        number = event.currentTarget.value
    }
        
    )
    console.log(number);
}

function onDestroyBtnClick() {

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
