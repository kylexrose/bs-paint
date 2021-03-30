
const gridWidth = 20;
let count = 0;
while (count < gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-8';
  canvas.appendChild(div);
  count++;
}

/*
let innerCanvas = "";
const width = 40;
const height = 40;
for (let row = 1; row <= height; row++){
    grid += "<div class=\"row\" id = \"row" + row + "\" >";
    for (let column = 1; column <= width; column++){
        grid += "<p class =\"row" + row + " column" + column + " square\" id=\"cell[" + row + ", " + column + "]\" ></p>";
    }
    grid += "</div>"
}
document.getElementById("grid").innerHTML = grid;
*/

const numOfColors = 8;
const colors = [];
for (let i = 1; i <= numOfColors; i++){
  colors.push(`color-${i}`);
}

const palette = document.querySelector(".palette");
const canvas = document.querySelector(".canvas");
let brushColor = document.querySelector('#current-brush').classList;

//palette handler
palette.addEventListener('mouseup', (e) => {
  changeColor(brushColor, e.target.classList[1])
})

//single click event
canvas.addEventListener('click', (e) => {
  changeColor(e.target.classList, brushColor[0]);
})

//function to change color of px
function changeColor(elementBeingColored, elementColoring){
    for(let color of colors){
      elementBeingColored.remove(color);
    }
    elementBeingColored.add(elementColoring);
}
