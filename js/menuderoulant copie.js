document.getElementById("menu").addEventListener("click", function () {
  if (this.classList.contains("toggle-menu--active")) {
    this.classList.remove("toggle-menu--active");
  } else {
    this.classList.add("toggle-menu--active");
  }
});
