const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const feedbackForm = document.querySelector(".feedback-form");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks?.classList.remove("open");
  });
});

if (feedbackForm) {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.alert("Feedback form UI is ready. Connect it to a backend or form service to collect responses.");
  });
}
