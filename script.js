//The JavaScript toggles the active class on the .container element to switch between sign-in and sign-up forms.

const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register_btn");
const loginBtn = document.querySelector(".login_btn");

// Add event listener to the Register button
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

// Add event listener to the Log In button
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
