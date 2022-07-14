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


// const arrUrl = [];
// const arrAlt = [];

// for (const image of images) {
//     arrUrl.push(image.url);
//     arrAlt.push(image.alt)
// }



// const imgCollection = `<li><img src = "${arrUrl[0]}" alt = "${arrAlt[0]}" width = "320"></img></li> <li><img src = "${arrUrl[1]}" alt = "${arrAlt[1]}" width = "320"></img></li> <li><img src = "${arrUrl[2]}" alt = "${arrAlt[2]}" width = "320"></img></li>` ;
// const body = document.querySelector("body");

// body.insertAdjacentHTML("beforeend", imgCollection);



// const item = document.querySelectorAll("li");

// for (let i = 0; i < item.length; i += 1) {
// item[i].style.display = "flex";
// item[i].style.alignItems = "center"
// item[i].style.justifyContent = "center";
// item[i].style.marginBottom = "20px";
// item[i].style.listStyle = "none";

// }


const gallery = document.querySelector(".gallery");

images.map((image) => {
    gallery.insertAdjacentHTML("beforeend", `<li><img src = "${image.url}", alt = "${image.alt}" width = "320"></img></li>`);
})

const items = document.querySelectorAll("li");
items.forEach(item => {
    item.style.display = "flex";
    item.style.alignItems = "center"
    item.style.justifyContent = "center";
    item.style.marginBottom = "20px";
    item.style.listStyle = "none";
    // item.style.width = "320px";
})