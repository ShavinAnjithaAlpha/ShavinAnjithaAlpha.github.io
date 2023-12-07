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

const slider = document.querySelector(".slider");
const sections = gsap.utils.toArray(".slider section");

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

t1.to(
  sections,
  {
    xPercent: -300,
  },
  "<"
);

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

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
