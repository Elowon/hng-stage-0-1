/*let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
} 
  */

const menuList = document.getElementById("menuList");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");

function toggleMenu() {
  const isClosed =
    menuList.style.maxHeight === "0px" || !menuList.style.maxHeight;

  if (isClosed) {
    menuList.style.maxHeight = "300px";
    openIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
  } else {
    menuList.style.maxHeight = "0px";
    openIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
  }
}
