const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const feedbackForm = document.querySelector(".feedback-form");
const brandLogo = document.querySelector(".brand-logo");
const brandLogoPlaceholder = document.querySelector(".brand-logo-placeholder");

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

if (brandLogo && brandLogoPlaceholder) {
  const hidePlaceholder = () => {
    brandLogoPlaceholder.style.display = "none";
  };

  if (brandLogo.complete && brandLogo.naturalWidth > 0) {
    hidePlaceholder();
  } else {
    brandLogo.addEventListener("load", hidePlaceholder);
  }

  brandLogo.addEventListener("error", () => {
    brandLogoPlaceholder.style.display = "grid";
  });
}
