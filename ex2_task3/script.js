let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

const nameDisplay = document.getElementById("name-display");
const generateBtn = document.getElementById("generate-btn");

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function chooseName(items) {
  const index = random(0, items.length);
  return items[index];
}

generateBtn.addEventListener("click", function () {
  const result = chooseName(names);
  nameDisplay.textContent = result;
});
