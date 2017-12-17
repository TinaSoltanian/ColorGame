var numOfSquares = 6;

var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colordisplay");
colordisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colordisplay.textContent = pickedColor;

   for(var i = 0; i< squares.length; i++){
	//add init colors;
		if (colors[i]){
		   squares[i].style.background = colors[i];
		}
		else{
			 squares[i].style.display = "none";
		}
   }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colordisplay.textContent = pickedColor;

   for(var i = 0; i< squares.length; i++){
       squares[i].style.background = colors[i];
	   squares[i].style.display = "block";
   }
});


reset.addEventListener("click", function(){
	colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
	colordisplay.textContent = pickedColor;
    for(var i = 0; i< squares.length; i++){
	//add init colors;
	   squares[i].style.background = colors[i];
	};

	h1.style.background = "#232323";
})

for(var i = 0; i< squares.length; i++){
	//add init colors;
	squares[i].style.background = colors[i];
	//add click listeners
	squares[i].addEventListener("click",function(){
       var clickedColor = this.style.background;
       if (clickedColor === pickedColor){
         message.textContent = "Correct!";
         reset.textContent = "Try Again?"
         changeColors(clickedColor);
         h1.style.background = clickedColor;
       }
       else{
         this.style.background = "#232323";
		 message.textContent = "Try Again!"         
       }
	});
}

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

