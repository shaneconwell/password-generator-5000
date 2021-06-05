// Assignment Code
var generateBtn = document.querySelector("#generate");


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

var userCharacterChoice = "";

var passwordLength = [];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generatePassword = function () {

  var characterLength = window.prompt("How long do you want the password to be? \n Enter a number from 8 to 128, then click OK."); {
    if (!characterLength) {
      return;
    }
    if (characterLength >= 8 && characterLength <= 128) {
      passwordLength.push(characterLength)
      // characterSurvey();
    } else if (characterLength === "") {
      window.alert("Please enter a number between 8 and 128.");
      getCharacterCount();
      // } else if (!characterLength) {
      //   generatePassword();
    } else {
      window.alert("Whoops! \n The number must be anywhere from 8 - 128..\n \n Can you try again?");
      generatePassword();
    }
    console.log(characterLength);


    var userCharacterChoice = [];



    function getUppercase(yesUppercase) {
      var characterTypeUppercase = window.confirm("Now you have the choice of what kind of characters you want to include in your password. \n Do you want to include uppercase characters?");

      if (characterTypeUppercase == true) {

        userCharacterChoice.push(uppercase);
        console.log(userCharacterChoice)
        return yesUppercase;

      }

    }

    function getLowercase(yesLowercase) {
      var characterTypeLowercase = window.confirm("Would you like to include lowercase?");

      if (characterTypeLowercase == true) {

        userCharacterChoice.push(lowercase);
        console.log(userCharacterChoice)
        return yesLowercase;

      }

    }

    function getNumericalCharacters(yesNumericalCharacters) {
      var characterTypeNumbers = window.confirm("Would you like to include numbers?");

      if (characterTypeNumbers == true) {
        userCharacterChoice.push(numbers);
        console.log(userCharacterChoice)
        return yesNumericalCharacters;
      }
    }

    function getSpecialCharacters(yesSpecialCharacters) {
      var characterTypeSpecial = window.confirm("Would you like to include Special Characters?");

      if (characterTypeSpecial == true) {
        userCharacterChoice.push(specialCharacters);
        console.log(userCharacterChoice)
        return yesSpecialCharacters;
      }

    }


    getUppercase();
    getLowercase();
    getNumericalCharacters();
    getSpecialCharacters();

    var characterCollection = userCharacterChoice[0].concat(userCharacterChoice[1], userCharacterChoice[2], userCharacterChoice[3])
    shuffledCharacters = characterCollection.sort(function () {
      return 0.5 - Math.random()
    }).join('');


    return shuffledCharacters;
  }
}

generateBtn.addEventListener("click", writePassword);