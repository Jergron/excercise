// Exercise: Write a basic HTML / JavaScript program that does the following

// - In HTML, have a single text input field
// - In HTML , have a button
// - In JavaScript, have a function divides a number by 10
// - In JavaScript, have a function that multiplies a number by 5
// - When the button is clicked, call a JavaScript function that checks if the user has entered in a value in the input field
// - If there is no value, put an appropriate message in an alert box telling the user to enter something
// - If there is a value, and its numeric value is greater than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that divides by 10.
// -If there is a value, and its numeric value is less than 10000, call a function that passes in the user-entered value as an argument, and the name of the function that multiplies by 5. Write the result of the calculation into the HTML document

var userInput = document.getElementById("insert");
var button = document.getElementById("click");
var userOutput = document.getElementById("answer");

function divide(a) {
  return a / 10;
}

function multiply(b) {
  return b * 5;
}

function noVal() {
  return alert("Give me your digits!")
}

function clearInput () {
	return userInput.value = "";
}
	
function checkVal() {
    if (userInput.value === "") {
    	noVal();
    	userOutput.innerHTML = "You better give me some REAL digits!"
    }
	else if (userInput.value > 10000) {
		userOutput.innerHTML = divide(userInput.value)
	}
	else if (userInput.value < 10000) {
		userOutput.innerHTML = multiply(userInput.value)
	}
	clearInput();
}

button.onclick = checkVal;














