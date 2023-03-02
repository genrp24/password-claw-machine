// Variables for characters, special charcaters, & numbers.
var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = characters.map(letter => letter.toUpperCase());

var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '+', '?'];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//The function that will prompt a user to confirm password length and whether or not they would like to use lowercase, uppercase, special charcaters, and/or numbers.
function getCriteria() {
  var pwdLength = prompt('How many characters would you like the password to be?(Between 8 - 128)');
//Checks if password length user entered meets the length requirements set by the prompt.
  if(pwdLength < 8 || pwdLength > 128) {
   alert('Please choose a length between 8 & 128 characters!');
   return;
  }
  var pwdLowercase = confirm('Would you like to include lowercase letters?');
  var pwdUppercase = confirm('Would you like to include uppercase letters?');
  var pwdNumeric = confirm('Would you like to include numeric characters?');
  var pwdSpecial = confirm('Would you like to include special characters?');
  var temp = "";
//Runs the loop for the length of the password entered by the user.
  for(i = 0; i < pwdLength; i++) {
//If statements that take criteria confirmed by user and return the final random password.   
    if (pwdLowercase && temp.length < pwdLength) {
    var randomIndex = Math.floor(Math.random() * 26)
    temp = temp + characters[randomIndex]
  }

  if (pwdUppercase && temp.length < pwdLength) {
    var randomIndex = Math.floor(Math.random() * 26)
    temp = temp + uppercase[randomIndex]
  }

  if (pwdNumeric && temp.length < pwdLength) {
    var randomIndex = Math.floor(Math.random() * 10)
    temp = temp + numbers[randomIndex]
  }

  if (pwdSpecial && temp.length < pwdLength) {
    var randomIndex = Math.floor(Math.random() * specialCharacters.length)
    temp = temp + specialCharacters[randomIndex]
  }
}

  return temp;
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = getCriteria();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
