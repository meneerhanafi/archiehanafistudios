const navToggle = document.querySelector('#nav-toggle');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

/*FADE IN WHILE SCROLLING*/
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.25,
  rootMargin: "0px 0px -100px 0px"
};

