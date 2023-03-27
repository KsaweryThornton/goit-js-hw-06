let counterValue = 0;

const showValue = document.querySelector("#value");

showValue.textContent = counterValue;

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const decrementBtnClick = () => {
  return (counterValue -= 1), console.log(counterValue);
};

decrementBtn.addEventListener("click", decrementBtnClick);

const incrementBtn = document.querySelector('button[data-action="increment"]');

const incrementBtnClick = () => {
  return (counterValue += 1), console.log(counterValue);
};

incrementBtn.addEventListener("click", incrementBtnClick);
