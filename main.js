const logo = document.getElementById("logo");
const button = document.getElementById("button");

const red = document.getElementsByClassName("redLink");
const redClick = () => {
  logo.style = "background-color: #da3121; color: white;";
  button.style = "background-color: #da3121; color: white;";
}
for (let i = 0; i < red.length; i++) {
  red[i].addEventListener("click", redClick);
}

const yellow = document.getElementsByClassName("yellowLink");
const yellowClick = () => {
  logo.style = "background-color: yellow; color: black;";
  button.style = "background-color: yellow; color: black;";
}
for (let i = 0; i < yellow.length; i++) {
  yellow[i].addEventListener("click", yellowClick);
}

const blue = document.getElementsByClassName("blueLink");
const blueClick = () => {
  logo.style = "background-color: blue; color: white;";
  button.style = "background-color: blue; color: white;";
}
for (let i = 0; i < blue.length; i++) {
  blue[i].addEventListener("click", blueClick);
}

const green = document.getElementsByClassName("greenLink");
const greenClick = () => {
  logo.style = "background-color: green; color: white;";
  button.style = "background-color: green; color: white;";
}
for (let i = 0; i < green.length; i++) {
  green[i].addEventListener("click", greenClick);
}