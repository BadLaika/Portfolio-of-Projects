
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode")

for(var i = 0; i < modeButton.length; i++){
	modeButton[i].addEventListener("click", function() {
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		//figure out how many squares
		//pick new colors
		//picked new picked colors

		//update page to reflect chanegs
		reset();
	});
}


//establishes first color
var pickedColor = pickColor(); 
//changes the title to display what color they should pick
colorDisplay.textContent = pickedColor;


//new game button event listener
resetButton.addEventListener("click", function(){
	reset();
});






//loops through to add colors to squares
for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click event listener
	squares[i].addEventListener("click", function(){
	//get color from clicked square
	var clickedColor = this.style.backgroundColor;
	
	//compare picked color to clicked color
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again?"
	}
	else{		
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
		}
	})
}


function changeColors(color){
//loop through all squares
for(var i = 0; i < squares.length; i++){
	//change each to a the winning color
	squares[i].style.backgroundColor = color;
	}
}



function pickColor(){
	var random =  Math.floor(Math.random() * colors.length);
	return colors[random];
}


//randomly generates a r g and b value to make a color
function randomColor(){
	//makes random color
	//picks red
	var r = Math.floor(Math.random() * 256);
	//picks green
	var g = Math.floor(Math.random() * 256);
	//picks blue
	var b = Math.floor(Math.random() * 256);

	return ("rgb(" + r + ", " + g + ", " + b + ")");
}




//uses randomColor() to fill an array with colors
function generateRandomColors(num){
	//make an array
	var arr = [];

	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}





function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);

	//need to pick new random color
	pickedColor = pickColor();

	//change color display
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//need to change color of squares
	
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
		h1.style.backgroundColor = "steelblue";

}