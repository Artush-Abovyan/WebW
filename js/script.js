function toggleMenu() {
    var navMenu = document.getElementById("nav-menu");
    var burgerMenu = document.getElementById("burger-menu");
    navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
    burgerMenu.classList.toggle("open");
  }
  
  document.querySelectorAll("#nav-menu a").forEach(item => {
    item.addEventListener("click", function() {
        document.getElementById("nav-menu").style.display = "none";
        document.getElementById("burger-menu").classList.remove("open");
    });
  });

const firstBlock = document.querySelector(".item1");
const secondBlock = document.querySelector(".item2");
const thirdBlock = document.querySelector(".item3");
const forthBlock = document.querySelector(".item4");

const firstImage = document.querySelector(".timeline-image-1");
const secondImage = document.querySelector(".timeline-image-2");
const thirdImage = document.querySelector(".timeline-image-3");
const forthImage = document.querySelector(".timeline-image-4");

const clearActive = () => {
  firstImage.style.opacity = "0";
  secondImage.style.opacity = "0";
  thirdImage.style.opacity = "0";
  forthImage.style.opacity = "0";
}

const isScrolledIntoView = (el) => {
  const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

  const {
      height,
      left,
      right,
      top,
      bottom,
      width,
      x,
      y,
  } = el.getBoundingClientRect();
 

  let isPartiallyVisible = viewportHeight - top > 0 && bottom > 300;
  let isFullyVisible = bottom > 0 && bottom <= viewportHeight && top >= 0;

  return {
      isPartiallyVisible,
      isFullyVisible
  }
}

const handleScroll = () => {
  clearActive();
  if (isScrolledIntoView(firstBlock).isPartiallyVisible) {
      firstImage.style.opacity = "1";
  } else if (isScrolledIntoView(secondBlock).isPartiallyVisible) {
      secondImage.style.opacity = "1";
  } else if (isScrolledIntoView(thirdBlock).isPartiallyVisible) {
      thirdImage.style.opacity = "1";
  } else if (isScrolledIntoView(forthBlock).isPartiallyVisible) {
      forthImage.style.opacity = "1";
  }
}

window.addEventListener("scroll", () => {
  handleScroll();
});


