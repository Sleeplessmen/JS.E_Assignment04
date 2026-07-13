let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let index = 0;

const nameDisplay = document.getElementById("name-display");
const generateBtn = document.getElementById("generate-btn");

function displayRandomName() {
  index = Math.floor(Math.random() * names.length);
  nameDisplay.textContent = names[index];
}

generateBtn.addEventListener("click", displayRandomName);
