"use strict";

const nOfCategories = document.querySelectorAll("#categories .item h2").length;
const nOfCategoriesMsg = `Number of categories: ${nOfCategories}`;
console.log(nOfCategoriesMsg);

const allLists = document.querySelector("#categories");
const categories = allLists.querySelectorAll(".item");

categories.forEach((elem) => {
  const categoriesNames = elem.querySelector("h2");
  console.log(`Category: ${categoriesNames.textContent}`);
  const categoriesItems = elem.querySelectorAll("li");
  console.log(`Elements: ${categoriesItems.length}`);
});
