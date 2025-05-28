const title = document.querySelector("#welcome h1");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;

  // Clamp the background offset to a max of 100
  const offset = Math.min(scrollY / 3, 100); // max 100%
  title.style.backgroundPosition = `${offset}% ${offset}%`;
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = [
    {el: document.querySelector("#page > :nth-child(1)"), triggerAt: 300},
    {el: document.querySelector("#page > :nth-child(2)"), triggerAt: 600},
    {el: document.querySelector("#page > :nth-child(3)"), triggerAt: 900},
  ];

  let fadedIn = new Set();

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;

    elements.forEach(({el, triggerAt}) => {
      if (!fadedIn.has(el) && scrollY >= triggerAt) {
        el.classList.add("visible");
        fadedIn.add(el);
      }
    });
  });
});

