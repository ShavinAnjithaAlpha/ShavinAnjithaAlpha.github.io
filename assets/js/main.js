gsap.registerPlugin(ScrollTrigger);

// nav bar toggle
// nav bar animation and logics
const nav = document.querySelector("nav .nav-container");
const sections_ = [
  document.querySelector("#home"),
  document.querySelector("#services"),
  document.querySelector("#skills"),
  document.querySelector("#projects"),
  document.querySelector("#contact"),
];

// change the nav bar color on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }

  // change the color of the nav links
  const links = document.querySelectorAll("nav .nav-container a");
  sections_.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100;

    if (window.scrollY >= sectionTop) {
      links.forEach((link) => {
        link.classList.remove("active");
      });

      links[index].classList.add("active");
    }
  });
});

const navLinks = document.querySelectorAll("nav .nav-container a");

navLinks.forEach((link) => {
  // apply smooth scrolling for each link
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("link");
    const offsetTop = document.querySelector(href).offsetTop - 100;

    window.scrollTo({ top: offsetTop, behavior: "smooth" });

    // close the menu
    navLinksList.classList.remove("nav-links-active");
  });
});

const mainLogo = document.querySelector("nav .nav-container .logo");
mainLogo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// nav bar toggler logic
const navToggler = document.querySelector("nav .nav-toggler");
const navToggleIcon = document.querySelector("nav .nav-toggler svg");
const navLinksList = document.querySelector("nav .nav-links");

navToggler.addEventListener("click", () => {
  if (navLinksList.classList.contains("nav-links-active")) {
    navLinksList.classList.remove("nav-links-active");
    navToggleIcon.classList.remove("svg-clicked");
  } else {
    navLinksList.classList.add("nav-links-active");
    navToggleIcon.classList.add("svg-clicked");
  }
});

// skills section icons fading animations
const skillsIcons = document.querySelectorAll("#skills .skill-grid span");
gsap.from(skillsIcons, {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  stagger: 0.1,
});

// service card s animations
const serviceCards = document.querySelectorAll("#services .service-card");
serviceCards.forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
  });
});

// projetc cards animations
const projectCards = document.querySelectorAll("#projects .project-card");
projectCards.forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
  });
});

// for smoother scrolling experience
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
