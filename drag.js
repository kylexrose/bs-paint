let mousedown = false;
//toggle whether mouse is being held
document.addEventListener('mousedown', () => {
    mousedown = true;
    console.log(mousedown)
    document.addEventListener('mouseup', () => {
      mousedown = false;
      console.log(mousedown);
  })
})

canvas.addEventListener('mouseover', (e) =>{
    if(e.target.classList[0] === "square" && mousedown){
        changeColor(e.target.classList, brushColor[0])
    }
})