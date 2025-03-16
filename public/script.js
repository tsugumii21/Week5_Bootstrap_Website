document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const offcanvasNavbar = document.getElementById("offcanvasNavbar");

  toggleButton.addEventListener("click", function () {
    offcanvasNavbar.classList.toggle("show");
  });
});

function toggleHomeButton() {
  const toggleButton = document.getElementById("toggleButton");
  toggleButton.innerHTML = '<a href="index.html" class="text-white">Home</a>';
}
