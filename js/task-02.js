const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const list = document.querySelector('ul#ingredients');

const arr = [];

ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = ingredient;
    arr.push(li)
    console.log(arr);
})

list.append(...arr);

 


// const createLi = (ingrLength) => {
//     for (let i = 0; i < ingrLength; i += 1) {
//         const li = document.createElement('li');
//         li.classList.add('item');
//         li.textContent = ingredients[i];
//         list.append(li);
//     }
// }
// createLi(ingredients.length);