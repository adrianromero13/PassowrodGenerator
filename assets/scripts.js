
// generates a password using prompt answers
function generateNew() {

    // request length
    let passwordLength = parseInt( prompt("Enter password length"));
    // lowercase?
    let lowerCase = confirm("Would you like lowercase characters?");
    // uppercase?
    let upperCase = confirm("Would you like uppercase characters?");
    // special characters?
    let specialChar = confirm("Would you like special characters?");
    // numbers?
    let numeric = confirm("Would you like numbers?");
    
    // password arrays
    let littleLetter = "abcdefghijklmnopqrstuvwxyz";
    let biggerLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let specialCharacter = "`~!@#$%^&*";
    // set a variable for password and for valid characters
    
    let validCharacters = "";
    let password = "";

    // set if statements
    if (lowerCase) {
        validCharacters += littleLetter;
    }
    if (upperCase) {
        validCharacters += biggerLetter;
    }
    if (specialChar) {
        validCharacters += specialCharacter;
    }
    if (numeric) {
        validCharacters += numbers;
    }
    
    for (let i=0; i<passwordLength; i++) {
        let index = Math.floor(Math.random()*validCharacters.length);
        password += validCharacters[index];
        return password;
    }
    
    
    
    
    console.log("password: " + password);
    // this grabs thee value of the id in the HTML and sets it a new value to the value of the function password_generator()
    // document.getElementById("#passwordtextfield").innerHTML=password;
};

// function to copy whatever is on the query selector to be copied to local memory (clipboard)
function copyPassword() {
    let passwordText = document.querySelector("#passwordtextfield");
    passwordText.select()
    document.execCommand("copy")
    alert("Your password has been copied to clipboard!");
};
