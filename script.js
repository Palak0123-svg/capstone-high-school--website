// ===== FORM ELEMENTS =====
const formBox = document.getElementById("form-box");
const thankBox = document.getElementById("thank-you-box");
// ===== FORM SUBMISSION HANDLER =====

document.getElementById("admission-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission

  const name = this.querySelector("input[type='text']").value.trim();
  const phone = this.querySelector("input[type='tel']").value.trim();
  const email = this.querySelector("input[type='email']").value.trim();
  const grade = this.querySelector("select").value;

  // Basic validation
  if (!name || !phone || !email || !grade) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Success message
formBox.classList.remove("active");
thankBox.classList.add("active");

  // Optional: Clear form
  this.reset();
});


// ===== DOWNLOAD BROCHURE BUTTON =====
document.querySelector(".btn-download")?.addEventListener("click", function () {
  alert("The brochure download will start soon...");
  window.open("files/Capstone_Brochure_2023.pdf", "_blank");
});


// ===== SCHEDULE A CAMPUS VISIT BUTTON =====
document.querySelector(".hero-left .btn-red").addEventListener("click", function () {
  alert("Redirecting to schedule a campus visit form...");
  // Example: simulate redirect
  window.location.href = "#contact"; // or an actual contact form
});


// ===== SCROLL TO TOP BUTTON (OPTIONAL FEATURE) =====
// Create button dynamically
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 12px";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.backgroundColor = "#e9443d";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";

document.body.appendChild(scrollBtn);

// Show button on scroll
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Scroll to top when clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


