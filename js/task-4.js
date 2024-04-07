const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const emailEL = e.target.elements.email;
  const passwordEL = e.target.elements.password;

  if (!emailEL.value || !passwordEL.value) {
    alert("All form fields must be filled in");
    return;
  }
  console.log({
    [emailEL.name]: emailEL.value,
    [passwordEL.name]: passwordEL.value,
  });
  e.target.reset();
}
