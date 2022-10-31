// Assignment code here


function generatePassword() {

  var passwordSpec = {

    passwordLength: 12,
    isLowerCaseIncluded: true,
    isUpperCaseIncluded: true,
    isNumericIncluded: true,
    isSpecialCharIncluded: true,
    passwordType: "valid",
    

    creatingPassword: function() {
      
      var StringSet = ""
      if (this.isLowerCaseIncluded == true) {
        StringSet += 'abcdefghijklmnopqrstuvwxyz'
      }
      if (this.isUpperCaseIncluded== true) {
        StringSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      } 
      if (this.isNumericIncluded == true) {
        StringSet += '0123456789'
      }
      if (this.isSpecialCharIncluded == true) {
        StringSet += '!@#$%^&*()'
      }      

      console.log(StringSet)

      var res = ''
      for (var i = 0; i <= this.passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * StringSet.length);
        res += StringSet.substring(randomNumber, randomNumber +1);
      }
      this.actualPassword = res 
    }

  }

  
  function userInputCharType() {

      var lowerCaseResponse = undefined
      while ( !['yes', 'no'].includes(lowerCaseResponse) ) {
        if (lowerCaseResponse != undefined) {alert("only yes or no allowed in response")}
        lowerCaseResponse = window.prompt("Do you want to include lower case letters? (yes/no)")
      }
      passwordSpec.isLowerCaseIncluded = (lowerCaseResponse == 'yes' ? true : false)
  
  
      var upperCaseResponse = undefined
      while ( !['yes', 'no'].includes(upperCaseResponse) ) {
        if (upperCaseResponse != undefined) {alert("only yes or no allowed in response")}
        upperCaseResponse = window.prompt("Do you want to include upper case letters? (yes/no)")
      }
      passwordSpec.isUpperCaseIncluded = (upperCaseResponse == 'yes' ? true : false)
  
      var numericResponse = undefined
      while ( !['yes', 'no'].includes(numericResponse) ) {
        if (numericResponse != undefined) {alert("only yes or no allowed in response")}
        numericResponse = window.prompt("Do you want to include numeric strings? (yes/no)")
      }
      passwordSpec.isNumericIncluded = (numericResponse == 'yes' ? true : false)
  
  
      var specialCharResponse = undefined
      while ( !['yes', 'no'].includes(specialCharResponse) ) {
        if (specialCharResponse != undefined) {alert("only yes or no allowed in response")}
        specialCharResponse = window.prompt("Do you want to include special characters ? (yes/no)")
      }
      passwordSpec.isSpecialCharIncluded = (specialCharResponse == 'yes' ? true : false)
  }


  function userInputPasswordLength() {

    var x = Number(window.prompt("what is the length of the password?(intergers only)"))

    while ( isNaN(x)  ) {
      alert("only numbers allowed")
      var x = Number(window.prompt("what is the length of the password?(intergers only)"))
    }

    while (x<=0) {
      alert("the length has be bigger than 0")
      var x = Number(window.prompt("what is the length of the password?(intergers only)"))
    }

    passwordSpec.passwordLength = x

  }
  
  
  var isUserProvidingSpec = window.prompt("Do you want to provide your own password spec? If not, we will use default spec")

  while (!['yes', 'no'].includes(isUserProvidingSpec)) {
    alert("only yes or no allowed in response")
    var isUserProvidingSpec = window.prompt("Do you want to provide your own password spec? If not, we will use default value")
  }

  if(isUserProvidingSpec == 'yes') {
    userInputPasswordLength()
    userInputCharType()
  }

  while  ((passwordSpec.isLowerCaseIncluded==false) && (passwordSpec.isUpperCaseIncluded==false) && (passwordSpec.isNumericIncluded==false) && (passwordSpec.isSpecialCharIncluded==false)) {
    alert("you have to include at least one type of characters!")
    userInputCharType()
  }

  passwordSpec.creatingPassword()

  return passwordSpec.actualPassword
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("your password is " + password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
