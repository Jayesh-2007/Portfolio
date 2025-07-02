const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  // Icon toggle: hamburger ↔ close
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
    hamburger.setAttribute("aria-expanded", "true");
    navLinks.setAttribute("aria-hidden", "false");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
    hamburger.setAttribute("aria-expanded", "false");
    navLinks.setAttribute("aria-hidden", "true");
  }
});
