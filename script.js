const navList = document.querySelector(".list");
const menuBtn = document.querySelector(".burger-btn");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});


// menuBtn.addEventListener("click", () => {
//   navList.classList.toggle("show");
// });