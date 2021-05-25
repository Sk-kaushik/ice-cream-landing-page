window.addEventListener("load", () => {
  var menu = document.querySelector(".menu");
  var navDrawer = document.querySelector(".navBar");
  menu.addEventListener("click", () => {
    menu.classList.toggle("rotate");
    navDrawer.classList.toggle("openNav");
  });
});
