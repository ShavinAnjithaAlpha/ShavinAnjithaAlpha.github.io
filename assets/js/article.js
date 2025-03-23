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

// article share buttons on social platforms
document.getElementById("share-x").addEventListener("click", function () {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(document.title);
  window.open(`https://x.com/intent/tweet?url=${url}&text=${text}`, "_blank");
});

document
  .getElementById("share-linkedin")
  .addEventListener("click", function () {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const summary = encodeURIComponent(
      document.querySelector('meta[name="description"]').content
    );

    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}`,
      "_blank"
    );
  });

document
  .getElementById("share-facebook")
  .addEventListener("click", function () {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  });
