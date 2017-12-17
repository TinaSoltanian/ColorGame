var colors = generateRandomColors();

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colordisplay");
colordisplay.textContent = pickedColor;
var message = document.querySelector("#message");

for(var i = 0; i< squares.length; i++){
	//add init colors;
	squares[i].style.background = colors[i];
	//add click listeners
	squares[i].addEventListener("click",function(){
       var clickedColor = this.style.background;
       if (clickedColor === pickedColor){
         message.textContent = "Correct!";
         changeColors(clickedColor);
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


