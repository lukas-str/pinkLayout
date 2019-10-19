const menuItems = document.querySelectorAll(".nav-link");
let flag = false;

const activeMenu = id => {
  menuItems.forEach(item => item.classList.remove("active"));
  if (!flag) {
    // menuItems.forEach(item => item.classList.remove("active"));
    menuItems[id].classList.add("active");
    flag = !flag;
  } else {
    menuItems[id].classList.remove("active");
    flag = !flag;
  }
};

menuItems.forEach((item, id) =>
  item.addEventListener("click", () => activeMenu(id))
);
