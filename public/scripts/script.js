// function menuToggle() {
//   document.querySelector(".side-nav ul").classList.add("slide");
//   document.querySelector(".t-close").classList.add("slide");
// }
// function tClose() {
//   document.querySelector(".side-nav ul").classList.remove("slide");
//   document.querySelector(".t-close").classList.remove("slide");
// }
// function sNavClose() {
//   if (document.querySelector(".side-nav ul").classList.contains("slide")) {
//     document.querySelector(".side-nav ul").classList.remove("slide");
//     document.querySelector(".t-close").classList.remove("slide");
//   }
// }

// // Smooth Scroll

// var prevScrollpos = window.scrollY;
// window.onscroll = function () {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".nav-fixed ul").style.top = "0";
//   } else {
//     document.querySelector(".nav-fixed ul").style.top = "-80px";
//   }
//   prevScrollpos = currentScrollPos;
// };

document.querySelectorAll(".faq").forEach((card) => {
  card.addEventListener("click", function () {
    console.log(card);
    card.classList.toggle("faq--expanded");
    if (!card.classList.contains("faq--expanded"))
      card.classList.toggle("faq--unexpanded");
    else if (
      card.classList.contains("faq--expanded") &&
      card.classList.contains("faq--unexpanded")
    )
      card.classList.toggle("faq--unexpanded");
  });
});
