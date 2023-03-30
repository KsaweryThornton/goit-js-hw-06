const validationInput = document.querySelector("#validation-input");
const textInputLength = Number(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length === textInputLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
