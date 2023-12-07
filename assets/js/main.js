// cursor animation
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

document.addEventListener("click", (e) => {
  cursor.style.cssText =
    "left: " +
    e.clientX +
    "px; top: " +
    e.clientY +
    "px;" +
    "border: none;   animation: clickedColor 0.3s;";
});

requestAnimationFrame(raf);

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

gsap.fromTo(
  ".text-wrapper-2",
  {
    opacity: 0,
    scale: 0,
    y: -100,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    rotationX: 0,
    transformOrigin: "0% 50% -50",
    ease: "back",
  }
);

gsap.fromTo(
  ".text-wrapper-3",
  {
    opacity: 0,
    scale: 0,
    y: -100,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    rotationX: 0,
    transformOrigin: "0% 50% -50",
    ease: "back",
  }
);

gsap.fromTo(
  ".i-m-shavin-anjitha",
  {
    opacity: 0,
    scale: 0,
    y: -100,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    rotationX: 0,
    transformOrigin: "0% 50% -50",
    ease: "back",
  }
);

gsap.fromTo(
  ".hero__profile",
  { x: -500, scale: 0, opacity: 0 },
  {
    x: 0,
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  }
);

gsap.fromTo(
  ".about-me__content",
  { x: -1000 },
  {
    scrollTrigger: {
      trigger: ".about-me__content",
      start: "top bottom",
      end: "bottom bottom",
      markers: false,
      scrub: 1,
      pin: false,
    },
    x: 0,
    opacity: 1,
  }
);

// horiozontal scroll animation for services section
const slider = document.querySelector(".slider");
const sections = gsap.utils.toArray(".slider section");

// create a timeline for all our sections and then add it to the scrollTrigger
let t1 = gsap.timeline({
  defaults: {
    ease: "none",
  },

  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 2,
    start: "top top",
    end: () => "+=" + slider.offsetWidth,
  },
});

// animate the container one way...
t1.to(
  sections,
  {
    xPercent: -300,
  },
  "<"
);

// animate the content in the text section of each service section
sections.forEach((stop, index) => {
  t1.from(stop.querySelector(".col .content"), {
    yPercent: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: stop.querySelector(".col .content"),
      start: "top center",
      end: "bottom center",
      scrub: 2,
      containerAnimation: t1,
    },
  }).from(
    stop.querySelector("img"),
    {
      xPercent: 40,
      yPercent: -100,
      opacity: 0,
      ease: "elastic.out(1, 0.4)",
      scrollTrigger: {
        trigger: stop.querySelector("img"),
        scrub: 2,
        containerAnimation: t1,
      },
    },
    "<"
  );
});

// service section title parallelX animation
// select the title element
const heading = document.querySelector(".services__title h1");
// split the heading into characters
const headingSplit = new SplitType(heading);

const letters = heading.querySelectorAll(".char");

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// animate the letters
letters.forEach((letter, index) => {
  const randomYPercent = getRandom(70, 1100);
  const randomXPercent = getRandom(-1100, 1100);

  gsap.fromTo(
    letter,
    {
      yPercent: -randomYPercent,
      xPercent: -randomXPercent,
      opacity: 0,
    },
    {
      yPercent: 0,
      xPercent: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: heading,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    }
  );
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
