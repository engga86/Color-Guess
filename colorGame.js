const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay")
const messageDispaly = document.querySelector("#message")
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset")
const modeButtons = document.querySelectorAll(".mode")

let numSquares = 6;
//set colors in RGB
let colors = [];
//random colors
let pickedColor;

init();

function init() {
  setupModeBtn();
  setupSquares();

  reset();
}

function setupModeBtn() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares =6;
      reset();
    });
  }
}

function setupSquares() {
  //loop the squares and assign colors
  for (var i = 0; i < squares.length; i++) {
    //add click listners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      let clickedColor = (this.style.backgroundColor)
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDispaly.textContent = "Correct!"
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor
      }else{
        this.style.background = "#232323";
        messageDispaly.textContent = "Try Again"
      }
    });
  }
}



function reset() {
  colors = getRandomColors(numSquares);
  //pick new random Colors
  pickedColor = pickColor();
  //change color display to match picked colors
  colorDisplay.textContent = pickedColor;
  //change colors of squears
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  messageDispaly.textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors"
}

resetButton.addEventListener("click",function() {
  reset();
})

function changeColors(color) {
  //loop through all squeares
  for (var i = 0; i < colors.length; i++) {
    //chage each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random];
}


function getRandomColors(num) {
  //make an array
  let arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor())
  }
  //return array
  return arr;
}

function randomColor() {
  //red
  let r = Math.floor(Math.random() * 256)
  //greed
  let g = Math.floor(Math.random() * 256)
  //blue
  let b = Math.floor(Math.random() * 256)
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
