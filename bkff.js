document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Submitting your booking...";
  
  setTimeout(() => {
    status.textContent = "Thank you, your booking has been received!";
    this.reset(); // clear form
  }, 2000);
});
const userProfile = document.querySelector(".user-profile");
const dropdown = document.querySelector(".profile-dropdown");

userProfile.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});