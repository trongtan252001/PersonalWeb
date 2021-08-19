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

/*==================== QUALIFICATION TABS====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // const target = document.querySelector(tab.dataset.target);
    const target = document.querySelector(tab.getAttribute("data-target"));

    tabContents.forEach((tc) => {
      tc.classList.remove("qualification__active");
    });

    target.classList.add("qualification__active");

    tabs.forEach((el) => {
      el.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
/*==================== SERVICE MODAL====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modalViews[i].classList.add("active-modal");
  });
});
modalCloses.forEach((modalClose, i) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((element) => {
      element.classList.remove("active-modal");
    });
  });
});
modalViews.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.currentTarget + "  " + e.target);
    if (e.target !== e.currentTarget) return;
    element.classList.remove("active-modal");
  });
});

/*==================== PORTFOLIO SWIPER ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*==================== TESTIMONIAL SWIPER ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination-testimonial",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic

if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
