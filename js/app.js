eventListeners = () => {
  const ui = new UI();
  window.addEventListener("load", () => {
    ui.hidePreloader();
  });

  // navBtn Event Listener
  document
    .querySelector(".navBtn")
    .addEventListener("click", () => ui.showNav());

  // Control the Video

  document
    .querySelector(".video__switch")
    .addEventListener("click", () => ui.videoControl());
};

eventListeners();

function UI() {}

UI.prototype.hidePreloader = () =>
  (document.querySelector(".preloader").style.display = "none");

UI.prototype.showNav = () =>
  document.querySelector(".nav").classList.toggle("nav-show");

//play and pause the video
UI.prototype.videoControl();
