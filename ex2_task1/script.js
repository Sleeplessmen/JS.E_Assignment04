let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

const para = document.getElementById("name-display");

function chooseName() {
  const index = Math.floor(Math.random() * names.length);
  para.textContent = names[index];
}

chooseName();
