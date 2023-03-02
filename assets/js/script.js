// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for characters, special charcaters, & numbers.
var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '+', '?']

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function getPrompts() {
  var pwdLength = prompt('How many characters would you like the password to be?(Between 8 - 128)');
  var pwdLowercase = confirm('Would you like to include lowercase letters?');
  var pwdUppercase = confirm('Would you like to include uppercase letters?');
  var pwdNumeric = confirm('Would you like to include numeric characters?');
  var pwdSpecial = confirm('Would you like to include special characters?');
};


// Write password to the #password input
function writePassword() {
  var password = getPrompts();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
