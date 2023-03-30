const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    (image) =>
      `<li class="gallery-item new"><img url="${image.url}" alt="${image.alt}"/></li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

const htmlString = `<style>
.gallery {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}

.gallery-item {
  height: 80%;
  margin: 20px;
}
</style>`;

galleryList.innerHTML += htmlString;

console.log(galleryList);
