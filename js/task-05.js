const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
  if (textInput.value !== "") {
    output.textContent = e.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
});
