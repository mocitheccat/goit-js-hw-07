const changeColorBtn = document.querySelector(".change-color");
const textOfColor = document.querySelector(".color");
changeColorBtn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  textOfColor.textContent = randomColor;
}
