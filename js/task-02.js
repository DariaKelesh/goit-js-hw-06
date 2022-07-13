const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];



const list = document.querySelector('ul#ingredients');

const createLi = (ingrLength) => {
    for (let i = 0; i < ingrLength; i += 1) {
        const li = document.createElement('li');
        li.classList.add('item');
        li.textContent = ingredients[i];
        list.append(li);
    }
}
createLi(ingredients.length);