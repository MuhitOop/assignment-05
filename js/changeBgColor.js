const themeChangerBtn = document.getElementById("theme-changer");
const root = document.getElementById("root");

themeChangerBtn.addEventListener("click", function () {
    root.style.backgroundColor = getRGBCode();
});

function getRGBCode() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
