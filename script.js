// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Create a value for passwordText.value by using the generatePassword() function.
  passwordText.value = password;
}

function generatePassword() {
  let pwCriteria = [];
  gatherCriteria(pwCriteria);

  if (pwCriteria.length === 5) {
    alert(pwCriteria.join(", "));     // Test for array input.
  } /* else {
    alert("Not enough criteria to generate password.");
  } */
}

// Takes an empty "array" argument, then prompts the user to add criteria to the array.
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
}

function pwLength() {
  let answer = prompt("How long should the password be?", "Choose between 8 and 128 characters.");
  if (answer < 8 || answer > 128) {
    alert("That is not a valid password length. Please try again.");
    return false;
  } else {
    return answer;
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

/*     if (answer !== 'Y' || answer !== 'y' || answer !== 'N' || answer !== 'n') {
      alert("That is not a valid answer. Please try again.");
      return false;
    } else {
      return answer.toUpperCase();
    } */
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
