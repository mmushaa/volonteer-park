// Функции для меню
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const menuButton = document.getElementById("menuButton");
  sidebar.classList.toggle("active");
  menuButton.classList.toggle("active");
}

function closeMenu() {
  const sidebar = document.getElementById("sidebar");
  const menuButton = document.getElementById("menuButton");
  sidebar.classList.remove("active");
  menuButton.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const sidebar = document.getElementById("sidebar");

  if (menuButton && sidebar) {
    menuButton.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    document.addEventListener("click", function (e) {
      if (
        sidebar.classList.contains("active") &&
        !sidebar.contains(e.target) &&
        !menuButton.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }
});
