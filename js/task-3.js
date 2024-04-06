const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
const origNameRef = outputRef.textContent;

inputRef.addEventListener("input", (e) => {
  const clearedValue = e.target.value.trim();
  clearedValue !== "" && clearedValue !== " "
    ? (outputRef.textContent = clearedValue)
    : (outputRef.textContent = origNameRef);
});
