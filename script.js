const barsIcon = document.getElementById("bars-icon");
const multiplyIcon = document.getElementById("multiply-icon");
const navList = document.getElementById("nav-list");

barsIcon.addEventListener("click", () => {
  console.log("bars icon clicked");
  navList.classList.add("menu-active");
});

multiplyIcon.addEventListener("click", () => {
  navList.classList.remove("menu-active");
});
