let isAnimating = false;

function navbarResponsive() {
  let navbar = document.getElementById("navbar");
  if (!navbar.classList.contains("header-navbar-responsive")) {
    navbar.classList.add("header-navbar-responsive");
  } else {
    navbar.classList.remove("header-navbar-responsive");
  }
}


// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user clicks on the button, scroll to the bottom of the document
function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function scrollLeftAnimate(elem, unit) {
  //if element not found / if animating, do not execute slide
  if (!elem || isAnimating) {
    return;
  }

  let time = 300; // animation duration in MS, the smaller the faster.
  let from = elem.scrollLeft; // to continue the frame posistion
  let aframe = 10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
  isAnimating = true; //if animating prevent double trigger animation

  let start = new Date().getTime(),
    timer = setInterval(function () {
      let step = Math.min(1, (new Date().getTime() - start) / time);
      elem.scrollLeft = step * unit + from;
      if (step === 1) {
        clearInterval(timer);
        isAnimating = false;
      }
    }, aframe);
}

function initDealCarrousel(dealCarrouselID) {
  let target = document.querySelector(
    "#" + dealCarrouselID + " .footer-cards-container"
  );
  let cardOutterWidth, maxCarrouselScroll;

  function updateUpaCarrouselInfo() {
    cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .footer-card").offsetWidth;
    maxCarrouselScroll =
      document.querySelectorAll("#" + dealCarrouselID + " .footer-card").length *
      cardOutterWidth -
      document.querySelector("#" + dealCarrouselID + " .footer-cards-container").clientWidth;
  }

  document
    .querySelector("#" + dealCarrouselID + " .footer-slider__previous")
    .addEventListener("click", function () {
      updateUpaCarrouselInfo(); //in case window resized, will get new info
      if (target.scrollLeft > 0) {
        scrollLeftAnimate(target, -cardOutterWidth * 2);
      }
    });

  document
    .querySelector("#" + dealCarrouselID + " .footer-slider__next")
    .addEventListener("click", function () {
      updateUpaCarrouselInfo(); //in case window resized, will get new info
      if (target.scrollLeft < maxCarrouselScroll) {
        scrollLeftAnimate(target, cardOutterWidth * 2);
      }
    });
}
// Initiate the container with ID
initDealCarrousel("va_container"); //carrousel ID
