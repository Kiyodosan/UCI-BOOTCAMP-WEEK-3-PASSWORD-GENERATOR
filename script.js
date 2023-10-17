// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes a password to the #password id.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Adds event listener to generate button.
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let pwCriteria = [];
  gatherCriteria(pwCriteria);

/*   if (pwCriteria.length === 5) {     // Test for array input.
    alert(pwCriteria.join(", "));
  } */

  // Iterates through array to make decisions for password criteria.
  let pwGen = makeRandomPw(pwCriteria);
  return pwGen;
}

// Takes an array of 5 criteria elements to determine how to generate a random password.
function makeRandomPw(arr) {
  let criteria = [];
  let randomCriteria = 5;   // Starts as '5' to check for errors.
  let randomASCII = -1;     // Starts as '-1' to check for errors.
  // Make a new array for special characters
  let specialCharList = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 125, 126];
  let newPw = [];

  // Checks which criteria have been selected.
  if (arr[1] === 'Y') {
    criteria.push("lowercase");
  }
  if (arr[2] === 'Y') {
    criteria.push("uppercase");
  }
  if (arr[3] === 'Y') {
    criteria.push("numeric");
  }
  if (arr[4] === 'Y') {
    criteria.push("special");
  }
  // console.log(arr[0]);     // Testing if arr length is correct.

  // Selects a random criteria, then selects a random character from that ASCII group.
  for (let i = 0; i < arr[0]; i++) {
    randomCriteria = Math.floor(Math.random() * criteria.length);
    switch (criteria[randomCriteria]) {
      case "lowercase": 
        randomASCII = Math.floor((Math.random() * 26 + 97));
        newPw.push(randomASCII);
        break;
      case "uppercase":
        randomASCII = Math.floor((Math.random() * 26 + 65));
        newPw.push(randomASCII);
        break;
      case "numeric":
        randomASCII = Math.floor((Math.random() * 10 + 48));
        newPw.push(randomASCII);
        break;
      case "special":
        randomASCII = Math.floor((Math.random() * specialCharList.length));
        newPw.push(specialCharList[randomASCII]);
        break;
    }
  }
  // alert(newPw.join(", "));     // Test for unicode numbers.

  // Converts integers from an array into ASCII characters for each element.
  newPw = String.fromCharCode.apply(null, newPw);
  // alert(newPw);     // Test for ASCII characters.

  return newPw;
}

// Takes an empty array as an argument, then prompts the user to add criteria to the array.
function gatherCriteria(arr) {
  let promptLength;
  let promptLowerCase;
  let promptUpperCase;
  let promptNumeric;
  let promptSpecialChar;

  promptLength = pwLength();
  if (promptLength) {
    arr.push(promptLength);
    promptLowerCase = includeLowerCase();
    if (promptLowerCase) {
      arr.push(promptLowerCase);
      promptUpperCase = includeUpperCase();
      if (promptUpperCase) {
        arr.push(promptUpperCase);
        promptNumeric = includeNumeric();
        if (promptNumeric) {
          arr.push(promptNumeric);
          promptSpecialChar = includeSpecialChar();
          if (promptSpecialChar) {
            arr.push(promptSpecialChar);
          } else {
            return;
          }
        } else {
          return;
        }
      } else {
        return;
      }
    } else {
      return;
    }
  } else {
    return;
  }

  // Checks to see if at least one prompt has been selected.
  let hasCriteria = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 'Y') {
      hasCriteria = true;
      break;
    }
  }
  if (!hasCriteria) {
    alert("Please select at least one criteria.");
    arr = [];
  }
}

function pwLength() {
  let answer = prompt("How long should the password be?", "Choose between 8 and 128 characters.");
  if (answer >= 8 && answer <= 128) {
    return answer;
  } else {
    alert("That is not a valid password length. Please try again.");
    return false;
  }
}

function includeLowerCase() {
  let answer = prompt("Do you want to include lowercase letters?", "Enter 'Y' to confirm or 'N' to refuse.");
  if (answer === 'Y' || answer === 'y' || answer === 'N' || answer === 'n') {
    return answer.toUpperCase();
  } else {
    alert("That is not a valid answer. Please try again.");
    return false;
  }
}

function includeUpperCase() { 
  let answer = prompt("Do you want to include uppercase letters?", "Enter 'Y' to confirm or 'N' to refuse.");
  if (answer === 'Y' || answer === 'y' || answer === 'N' || answer === 'n') {
    return answer.toUpperCase();
  } else {
    alert("That is not a valid answer. Please try again.");
    return false;
  }
}

function includeNumeric() { 
  let answer = prompt("Do you want to include numbers?", "Enter 'Y' to confirm or 'N' to refuse.");
  if (answer === 'Y' || answer === 'y' || answer === 'N' || answer === 'n') {
    return answer.toUpperCase();
  } else {
    alert("That is not a valid answer. Please try again.");
    return false;
  }
}

function includeSpecialChar() { 
  let answer = prompt("Do you want to include special characters?", "Enter 'Y' to confirm or 'N' to refuse.");
  if (answer === 'Y' || answer === 'y' || answer === 'N' || answer === 'n') {
    return answer.toUpperCase();
  } else {
    alert("That is not a valid answer. Please try again.");
    return false;
  }
}