// Assignment Code
// var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
  "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialCharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":"
];
var userCharacterChoice = [];

var Characters = [uppercase, lowercase, numbers, specialCharacters]


var allSelectedCharacters = userCharacterChoice.concat(uppercase, lowercase, numbers, specialCharacters);

// ** DONE - Promt user to choose prefrence for a length of at least 8 characters and no more than 128 

// This will ask for and store the users character count selection

function getCharacterCount() {

  characterLength = window.prompt("You have a choice from anywhere between 8 to 128 characters. \n Password Length?");

  if (characterLength >= 8 && characterLength <= 128) {
    console.log(characterLength);
    getUppercase();


  } else if (!characterLength) {
    return;
  } else {
    window.alert("Whoops! \n The number must be anywhere from 8 - 128..\n \n Can you try again?");
    getCharacterCount();
  }
}

// ** DONE - Prompt user for character types to include in the password 
//        uppercase, lowercase, numbers, specialCharacters. 
//  TODO - input should be validated and at least one character type should be selected

function getUppercase() {
  var characterTypeUppercase = window.confirm("Now you have the choice of what kind of characters you want to include in your password. \n Do you want to include UPPERCASE CHARACTERS?");

  if (characterTypeUppercase == true) {
    userCharacterChoice.push(uppercase);
    // console.log(userCharacterChoice)
    getLowercase();
  } else {
    getLowercase();
  }
}

function getLowercase() {
  var characterTypeLowercase = window.confirm("how about lowercase?");

  if (characterTypeLowercase == true) {
    userCharacterChoice.push(lowercase);
    // console.log(userCharacterChoice)
    getNumericalCharacters();

  } else {
    getNumericalCharacters();
  }
}

function getNumericalCharacters() {
  var characterTypeNumbers = window.confirm("Maybe get crazy and add some numbers into the mix?!");

  if (characterTypeNumbers == true) {
    userCharacterChoice.push(numbers);
    // console.log(userCharacterChoice)
    getSpecialCharacters();

  } else {
    getSpecialCharacters();
  }
}

function getSpecialCharacters() {
  var characterTypeSpecial = window.confirm("The hackerz will never get you if you add some Special Characters.. \n  What do you say, want to never get hacked again??");

  if (characterTypeSpecial == true) {
    userCharacterChoice.push(specialCharacters);
    console.log(userCharacterChoice)
    console.log(allSelectedCharacters)
    return;
  } else {
    console.log(allSelectedCharacters)
  }
}


getCharacterCount()




// function generatePassword() {
//   var length = 8,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }

// }



// TODO - Write password to the #password input

// function writePassword() {
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// }

// TODO - add a function to wrap the loop in using - generatePassword(){
// }





// TODO - Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





// FINISHED_WHEN -  I click the button to generate a password
//                  and it is either displayed in an alert or written to the page