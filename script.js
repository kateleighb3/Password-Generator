// hit btn prompt how many characters

// if less than 8 or more than 128 alert

// if between 8 and 128 confirm lowercase
// confirm uppercase
// confirm numeric
// confirm special characters

// if yes add to array

// print password to screen

////////////////////////////////////////////////////

// NumArray = [0,1,2,3,4,5,6,7,8,9]
// const special = ["!", "#","$", "%", "&", "*", "?", "@", "^"]
// const tallLetter = capitalized letters
// const lowletter = lowercase letters

// prompts for password length, cap, lower, special, numbers

// if (passObj.count < 8 || passObj.count > 128) {
// alert ("That numver is not between 8 and 128. Please enter a correct
//  number.");

//function buildPassword() {

// if want caps then concat caps to password

// console log password to confirm caps have been added

// if want lower then concat lower to password

//else{
//passObj.upper = confirm("Tall Letters?");



// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Various arrays

const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", 
"J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V",
"W", "X", "Y", "Z"];
const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g",
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
"u", "v", "w", "x", "y", "z"];
const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialArray = ["!", "#","$", "%", "&", "*", "?", "@", "^"];

// Variable declaration
let confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSpecialChar;
let randomPW= [];

function buildPassword() {

  if(confirmUpperCase === false && confirmLowerCase === false && confirmNumber === false && confirmSpecialChar ===false)
  {alert("Come on, dude. You gotta choose at least one parameter");
  confirmUpperCase = confirm("Click OK if you would like to include upper case characters.");
  confirmLowerCase = confirm("Click OK if you would like to include lower case characters.");
  confirmNumber = confirm("Would you like to inlcude numbers?");
  confirmSpecialChar = confirm("Would you like to include special characters?");
  }

  // what to do
 var passwordChars = []

 if (confirmUpperCase) {
  passwordChars = passwordChars.concat(uppercaseArray);
 }

 console.log(passwordChars);

 if (confirmLowerCase) {
  passwordChars = passwordChars.concat(lowercaseArray);
 }

 console.log(passwordChars);

 if (confirmNumber) {
  passwordChars = passwordChars.concat(numberArray);
 }

 console.log(passwordChars);

 if (confirmSpecialChar) {
  passwordChars = passwordChars.concat(specialArray);
 }

 console.log(passwordChars);

 //Empty string to be filled based on for loop selecting random characters from the array

 randomPW = []  // creating a new array from a bunch of arrays

 console.log("randomPW: ", randomPW);

 for (var i = 0; i < confirmLength; i++) {
  console.log("Loop Started");
  randomPW.push(passwordChars[Math.floor(Math.random()* passwordChars.length)]);
  console.log("loop finished");
  console.log(randomPW);
}
return randomPW;
}

// Prompt to confirm how many characters the user would like in their password
function userPrompts() {
  confirmLength = (prompt("How many characters do you want your password to have?"));

  //Loop if answer is outside the parameters
  if (confirmLength < 8 || confirmLength > 128) {
    alert ("Password length must be between 8 and 128 characters. Please enter a correct number.");
    // confirmLength = (prompt("How many characters do you want your password to have?"));
    userPrompts();
  }

  else {
    confirmUpperCase = confirm("Click OK if you would like to include upper case characters.");
    confirmLowerCase = confirm("Click OK if you would like to include lower case characters.");
    confirmNumber = confirm("Would you like to inlcude numbers?");
    confirmSpecialChar = confirm("Would you like to include special characters?");
    buildPassword(); // function buildPassword has to be declared before function userPrompts because userPrompts 
    // relies on function buildPassword so buildPassword function has to be declared first before being called on here.
  }

}

  //Loop if answer is outside the parameters


// Write password to the #password input
function writePassword() {
  var password = userPrompts();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomPW;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
