const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const form = document.getElementById("rectangle-form");

function drawRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const x = Number.parseInt(document.getElementById("x").value, 10);
  const y = Number.parseInt(document.getElementById("y").value, 10);
  const width = Number.parseInt(document.getElementById("width").value, 10);
  const height = Number.parseInt(document.getElementById("height").value, 10);
  const color = document.getElementById("color").value;

  if (
    Number.isNaN(x) ||
    Number.isNaN(y) ||
    Number.isNaN(width) ||
    Number.isNaN(height)
  ) {
    alert("Please enter valid numbers.");
    return;
  }

  if (width <= 0 || height <= 0 || width > 400 || height > 400) {
    alert("Width and height must be between 1 and 400.");
    return;
  }

  if (x < 0 || y < 0 || x > 400 - width || y > 400 - height) {
    alert("X and Y must keep the rectangle inside the 400x400 canvas.");
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRect(x, y, width, height, color);
});
