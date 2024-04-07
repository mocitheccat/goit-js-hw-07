function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const INITIAL_SIZES = 30;

const boxesRef = document.querySelector("#boxes");
const createBoxBtn = document.querySelector("button[data-create]");
const destroyBoxBtn = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector('input[type="number"]');

createBoxBtn.addEventListener("click", () => createBoxes(inputRef.value));

destroyBoxBtn.addEventListener("click", (e) => {
  boxesRef.innerHTML = "";
});

function createBoxes(amount) {
  if (isNaN(amount) || amount <= 0 || amount > 100) {
    alert("Please enter a positive number: 1 - 100");
    return;
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${INITIAL_SIZES + i * 10}px`;
    box.style.height = `${INITIAL_SIZES + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesRef.appendChild(fragment);
  inputRef.value = "";
}
