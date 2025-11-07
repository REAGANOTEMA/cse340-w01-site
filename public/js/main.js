// public/js/main.js

// Example: Fade in elements on page load
document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");
  fadeIns.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 200 * index);
  });

  const slideUps = document.querySelectorAll(".slide-up");
  slideUps.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 200 * index);
  });

  const slideLefts = document.querySelectorAll(".slide-left");
  slideLefts.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateX(0)";
    }, 200 * index);
  });

  const slideRights = document.querySelectorAll(".slide-right");
  slideRights.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateX(0)";
    }, 200 * index);
  });
});
