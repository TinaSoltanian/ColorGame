var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colordisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons 
    modeButtonSetup();

    squaresSetUp();

  resetGame();
}

function squaresSetUp(){
	for(var i = 0; i< squares.length; i++){
	//add click listeners
		squares[i].addEventListener("click",function(){
	       var clickedColor = this.style.background;
	       if (clickedColor === pickedColor){
	         message.textContent = "Correct!";
	         reset.textContent = "Play Again?"
	         changeColors(clickedColor);
	         h1.style.background = clickedColor;
	       }
	       else{
	         this.style.background = "#232323";
			 message.textContent = "Try Again!"         
	       }
	});
  }
}

function modeButtonSetup(){
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			for (var j = 0; j < modeButtons.length; j++) {
				modeButtons[j].classList.toggle("selected");
			}

	        this.textContent === "Easy" ? 
	                   numOfSquares = 3: numOfSquares = 6;

			resetGame();
		});
	}
}
function resetGame(){
	colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
	colordisplay.textContent = pickedColor;

	message.textContent = "";
    reset.textContent = "New Colors";

    for(var i = 0; i< squares.length; i++){
	   if (colors[i]){
	     squares[i].style.display = "block";
	     squares[i].style.background = colors[i];
	   }
	   else{
	   	squares[i].style.display = "none";
	   }
	};

	h1.style.background = "steelblue";	
}


reset.addEventListener("click", function(){
	resetGame();
})


function changeColors(color){
  for(var i = 0; i< squares.length; i++){
	//add init colors;
	squares[i].style.background = color;
  }
}


function pickColor(){
   var rand = Math.floor( (Math.random() * colors.length) );
   return colors[rand];
}


function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i < num; i++) {
		//get random color and push into array
        arr[i] = randomColor();
	}

	return arr;
}


function randomColor(){
  //pick a red from 0 to 255
  //pick a green and blue from the same range!
  var r = Math.floor (Math.random() * 256);
  var g = Math.floor (Math.random() * 256);
  var b = Math.floor (Math.random() * 256);

  return "rgb(" + r +", " + g + ", " + b + ")";
}

