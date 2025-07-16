// Booking form submission
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Submitting your booking...";

  setTimeout(() => {
    status.textContent = "Thank you, your booking has been received!";
    this.reset(); // clear form
  }, 2000);
});

// Profile dropdown toggle
const userProfile = document.querySelector(".user-profile");
const dropdown = document.querySelector(".profile-dropdown");

userProfile.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// ✅ Fixed menu toggle function
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  if (nav) {
    nav.classList.toggle("active");
  } else {
    console.error("Could not find element with ID 'nav-links'");
  }
}
const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");
const closeToggle = document.getElementById("close-toggle");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

closeToggle.addEventListener("click", () => {
  links.classList.remove("active");
});