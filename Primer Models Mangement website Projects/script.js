let updateElements = document.querySelectorAll(".update");
let updateElementImages = document.querySelectorAll(".image-cate");
let mousePointer = document.querySelector(".cursor");

window.addEventListener("mousemove", function (ev) {
  mousePointer.style.transform = `translate(${ev.clientX}px,${ev.clientY}px )`;
});

updateElements.forEach(function (updateElem) {
  updateElem.addEventListener("mousemove", function (evt) {
    updateElementImages.forEach(function (image) {
      const rect = updateElem.getBoundingClientRect();
      const offsetX = evt.clientX - rect.left;
      const offsetY = evt.clientY - rect.top;
      image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
});

let flag = 0;
let topLine = document.querySelector(".top-line");
let centerLine = document.querySelector(".center-line");
let bottomLine = document.querySelector(".bottom-line");
function menuOpen() {
  if (flag == 0) {
    topLine.style.transform = `rotateZ(${44}deg)`;
    centerLine.style.opacity = 0;
    bottomLine.style.transform = `rotateZ(${-44}deg)`;

    document.querySelector(".mb-menu-container").classList.add('active');
    
    flag = 1;
  } else {
    topLine.style.transform = `rotateZ(${0}deg)`;
    centerLine.style.opacity = 1;
    bottomLine.style.transform = `rotateZ(${-0}deg)`;
    document.querySelector(".mb-menu-container").classList.remove('active');
    flag = 0;
  }
}
