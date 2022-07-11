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


const arrUrl = [];
const arrAlt = [];

for (const image of images) {
    arrUrl.push(image.url);
    arrAlt.push(image.alt)
}


const imgCollection = `<li class = "collection-item"><img src = "${arrUrl[0]}" alt = "${arrAlt[0]}" width = "320"></img></li> <li class = "collection-item"><img src = "${arrUrl[1]}" alt = "${arrAlt[1]}" width = "320"></img></li> <li class = "collection-item"><img src = "${arrUrl[2]}" alt = "${arrAlt[2]}" width = "320"></img></li>` ;

// const item = document.querySelector("li")
// item.style.display = "flex";
// item.style.alignItems = "centre";
// item.style.justifyContent = "centre";
// item.style.marginBottom = "20px";

const body = document.querySelector("body");

body.insertAdjacentHTML("beforeend", imgCollection);

