const navMenuItems = document.querySelectorAll(".page-menu-item");
const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".page-menu");

// scroll to the content
navMenuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuItemName = menuItem.getAttribute("data-link");
    const el = document.getElementById(`${menuItemName}`);
    el.scrollIntoView({ behavior: "smooth" });
  });
});

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
