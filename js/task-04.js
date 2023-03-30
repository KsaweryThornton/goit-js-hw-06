let counterValue = 0;

const showValue = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');

decrementBtn.addEventListener("click", (e) => {
  counterValue -= 1;
  showValue.textContent = counterValue;
});

const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener("click", (e) => {
  counterValue += 1;
  showValue.textContent = counterValue;
});
