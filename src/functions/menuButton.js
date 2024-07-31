export const menuToggle = () => {
  document.querySelector(".side-nav ul").classList.add("slide");
  document.querySelector(".t-close").classList.add("slide");
};

export const tClose = () => {
  document.querySelector(".side-nav ul").classList.remove("slide");
  document.querySelector(".t-close").classList.remove("slide");
};

export const sNavClose = () => {
  if (document.querySelector(".side-nav ul").classList.contains("slide")) {
    document.querySelector(".side-nav ul").classList.remove("slide");
    document.querySelector(".t-close").classList.remove("slide");
  }
};
