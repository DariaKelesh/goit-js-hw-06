const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const imgAttributes1 = images[0];
// console.log(imgAttributes1);

// const createImgFromArr = (array) =>
//     array.map((element) => `<img> ${imgAttributes1} </img>`);

// console.log(createImgFromArr(images));

const arrUrl = [];
const arrAlt = [];

for (const image of images) {
    arrUrl.push(image.url);
    arrAlt.push(image.alt)
}
// console.log(arrUrl);
// console.log(arrAlt);

const imgCollection = `<li><img src = "${arrUrl[0]}" alt = "${arrAlt[0]}"></img></li> <li><img src = "${arrUrl[1]}" alt = "${arrAlt[1]}"></img></li> <li><img src = "${arrUrl[2]}" alt = "${arrAlt[2]}"></img></li>` ;
// console.log(imgCollection);

const body = document.querySelector("body");

body.insertAdjacentHTML("beforeend", imgCollection);

