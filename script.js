const checkBox = document.querySelectorAll(".checkbox");
const editMenu = document.querySelector(".edit-menu");

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    editMenu.style.display = "block";
  } else {
    editMenu.style.display = "none";
  }
});
