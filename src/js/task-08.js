const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", loginFunction);

function loginFunction(e) {
  e.preventDefault;
  const {
    elements: { email, password }
  } = e.currentTarget;
  
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}