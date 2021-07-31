// menu show y hidden
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);
/*==================== Accordion skills c1 ====================*/
const skillsHeader = document.querySelectorAll(".skills__header");
const skillsContent = document.querySelectorAll(".skills__content");
skillsHeader.forEach((n) => {
  n.addEventListener("click", () => {
    for (i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = "skills__content skills__close";
    }
    if (n.parentNode.className === "skills__content skills__close") {
      n.parentNode.className = "skills__content skills__open";
    }
  });
});
/*==================== Accordion skills  c2====================*/

// const skillsContent = document.getElementsByClassName("skills__content");
// const skillsHeader = document.querySelectorAll(".skills__header");
// function toggleSkills() {
//   let itemClass = this.parentNode.className;
//   for (i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = "skills__content skills__close";
//   }
//   if (itemClass === "skills__content skills__close") {
//     this.parentNode.className = "skills__content skills__open";
//   }
// }
// skillsHeader.forEach((el) => {
//   el.addEventListener("click", toggleSkills);
// });
