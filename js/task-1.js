const numOfCats = document.querySelectorAll("li.item");

console.log(`Number of categories: ${numOfCats.length}`);

numOfCats.forEach((elem) => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.log(`Elements: ${elem.querySelectorAll("li").length}`);
});
