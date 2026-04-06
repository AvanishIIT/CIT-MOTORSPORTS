const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const feedbackForm = document.querySelector(".feedback-form");
const brandLogo = document.querySelector(".brand-logo");
const brandLogoPlaceholder = document.querySelector(".brand-logo-placeholder");
const galleryTabs = document.querySelectorAll(".gallery-tab");
const galleryPanels = document.querySelectorAll(".gallery-panel");

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
  feedbackForm.addEventListener("submit", () => {
    const submitButton = feedbackForm.querySelector('button[type="submit"]');

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
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

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.galleryTarget;

    galleryTabs.forEach((button) => {
      button.classList.toggle("is-active", button === tab);
    });

    galleryPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.galleryPanel === target);
    });
  });
});
