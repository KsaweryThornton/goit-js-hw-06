const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredientsList = ingredients
  .map((elem) => `<li class="list-item">${elem}</li>`)
  .join("");

list.innerHTML = ingredientsList;

console.log(list);
