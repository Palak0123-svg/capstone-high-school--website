const form = document.getElementById("admission-form");
const formBox = document.getElementById("form-box");
const thankBox = document.getElementById("thank-you-box");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  formBox.classList.remove("active");
  thankBox.classList.add("active");
  form.reset();
});
