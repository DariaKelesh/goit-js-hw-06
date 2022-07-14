// Задание 1
// В HTML есть список категорий ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const ulCategories = document.querySelector("ul#categories");
// console.log("Number of categories:", ulCategories.children.length);


// const category = document.querySelectorAll('h2');
// const arrCategory = [...category];

// const allUl = document.querySelectorAll("ul");
// const ulElements = [...allUl];

// console.log("Category:", arrCategory[0].outerText);
// console.log("Elements:",  ulElements[1].children.length);

// console.log("Category:", arrCategory[1].outerText);
// console.log("Elements:", ulElements[2].children.length);

// console.log("Category:", arrCategory[2].outerText);
// console.log("Elements:", ulElements[3].children.length);

const items = document.querySelectorAll("li.item");

const ulCategories = document.querySelector("ul#categories");
console.log("Number of categories:", ulCategories.children.length);

items.forEach(item => {
    
    console.log(
        `Category: ${item.firstElementChild.textContent}
         Elements: ${item.querySelectorAll("li").length}`);
})