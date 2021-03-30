
const gridWidth = 20;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-8';
  canvas.appendChild(div);
  count++;
}

const numOfColors = 8;
const colors = [];
for (let i = 1; i <= numOfColors; i++){
  colors.push(`color-${i}`);
}
const palette = document.querySelector(".palette");
const canvas = document.querySelector(".canvas");
let brushColor = document.querySelector('#current-brush').classList;

//palette handler
palette.addEventListener('click', (e) => {
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
