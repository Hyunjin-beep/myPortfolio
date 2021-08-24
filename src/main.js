const navMenuItems = document.querySelectorAll(".page-menu-item");

navMenuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuItemName = menuItem.getAttribute("data-link");
    const el = document.getElementById(`${menuItemName}`);
    el.scrollIntoView({ behavior: "smooth" });
  });
});
