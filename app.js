/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let btns = document.querySelectorAll(".wrapper i");
let slider = document.querySelector(".slider");
let cards = document.querySelectorAll(".card");

let firstCardWidth = cards[0].offsetWidth;

btns.forEach((btn) => {
  btn.onclick = () => {
    slider.scrollLeft += btn.id === "left" 
      ? -firstCardWidth : firstCardWidth;
  };
});

let isDragging = false,
  startX,
  startScrollLeft;

let dragStart = (e) => {
  isDragging = true;
  slider.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = slider.scrollLeft;
};
slider.addEventListener("mousedown", dragStart);

let dragging = (e) => {
  if (!isDragging) return;
  //getting new scroll position
  let newScrollLeft = startScrollLeft - (e.pageX - startX);
  //checking if the new scroll position exceeds the slider boundaries
  if (
    newScrollLeft <= 0 ||
    newScrollLeft >= slider.scrollWidth - slider.offsetWidth
  ) {
    isDragging = false;
    return;
  }
  slider.scrollLeft = newScrollLeft;
};
slider.addEventListener("mousemove", dragging);

let dragStop = () => {
  isDragging = false;
  slider.classList.remove("dragging");
};
document.addEventListener("mouseup", dragStop);
