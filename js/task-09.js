function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgColor = document.querySelector(".widget");
const changeColorBtn = document.querySelector(".change-color");
const bgColorName = document.querySelector(".color");

changeColorBtn.addEventListener("click", (e) => {
  const random = getRandomHexColor();
  bgColor.style.backgroundColor = random;
  bgColorName.textContent = random;
});
