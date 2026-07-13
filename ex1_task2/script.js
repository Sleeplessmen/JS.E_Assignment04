const images = ["resources/1.png", "resources/2.png", "resources/3.png"];
let index = 0;

const imageContainer = document.getElementById("image-container");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

function renderImage() {
  imageContainer.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}" />`;
}

addEventListener("DOMContentLoaded", () => {
  renderImage();
});
