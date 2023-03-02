// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var pwdLength = prompt('How many characters would you like the password to be?')
    console.log(pwdLength);
  var pwdLowerCase = prompt('Would you like to include lowercase letters?')
    console.log(pwdLowerCase);
  var pwdUpperCase = prompt('Would you like to include uppercase letters?')
    console.log(pwdUpperCase);
  var pwdNumeric = prompt('Would you like to include numeric characters?')
    console.log(pwdNumeric);
  var pwdSpecial = prompt('Would you like to include special characters?')
    console.log(pwdSpecial);
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
