
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
let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let specialCharacters = "`~!@#$%^&*()";
// set a variable for password and for valid characters

let validCharacters = "";
let password = "";

// set if statements
if (lowerCase) {
    validCharacters += lowerCase;
}
if (upperCase) {
    validCharacters += upperCase;
}
if (specialCharacters) {
    validCharacters += specialCharacters;
}
if (numbers) {
    validCharacters += numbers;
}

for (let i=0; i<passwordLength; i++) {
    let index = Math.floor(Math.random()*validCharacters.length);
    password += validCharacters[index];
}
console.log("Password", password);

// display using HTML
document.getElementById("passwordtextfield").innerHTML=password;

function copypassword() {
    let passwordText = document.querySelector("#passwordtextfield");
    passwordText.select()
    document.execCommand("copy")
    alert("Your password has been copied to clipboard!");
};