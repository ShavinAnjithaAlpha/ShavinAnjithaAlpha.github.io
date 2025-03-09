const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    document
      .getElementsByClassName("article-container")[0]
      .classList.remove("dark-article-container");
  } else {
    document.body.classList.toggle("dark-mode");
    document
      .getElementsByClassName("article-container")[0]
      .classList.add("dark-article-container");
  }
});

const socialIconsBar = document.querySelector(".social-icons");
const socialIconOffSetTop = socialIconsBar.offsetTop;

const blogHeader = document.querySelector(".blog-header");
const sticky = blogHeader.offsetTop;

// JavaScript for sticky blog-header
window.addEventListener("scroll", () => {
  if (window.pageYOffset > sticky) {
    blogHeader.classList.add("sticky");
  } else {
    blogHeader.classList.remove("sticky");
  }

  if (window.pageYOffset > socialIconOffSetTop) {
    socialIconsBar.classList.add("floating-social-icons");
  } else {
    socialIconsBar.classList.remove("floating-social-icons");
  }
});
