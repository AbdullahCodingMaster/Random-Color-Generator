const contentsElements = document.querySelector(".contents");

for (let i = 0; i < 300; i++) {
  const contentElement = document.createElement("div");
  contentElement.classList.add("content");
  //   console.log(contentElement);
  contentsElements.appendChild(contentElement);
  //   console.log(contentsElements);
}
const contentElements = document.querySelectorAll(".content");

generateRandomColor();
function generateRandomColor() {
  contentElements.forEach((contentElement) => {
    const newRandamcolor = randomColor();
    // console.log(newRandamcolor);
    contentElement.style.backgroundColor = "#" + newRandamcolor;
    contentElement.innerHTML = "#" + newRandamcolor;
  });
}

function randomColor() {
  const characters = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomColor = Math.floor(Math.random() * characters.length);
    colorCode += characters.substring(randomColor, randomColor + 1);
  }
  return colorCode;
}
