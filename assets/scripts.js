

// prompts user to submit length of password...it should be a number, parseInt attempts to make the string into a number
let length = parseInt( prompt("Enter password length"));
console.log(length);
// password generator function
function password_generator( len ) {
    let string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    let numeric = '0123456789';
    let punctuation = "!@#$%^&*";
    let password = "";
    let character = "";
    let crunch = true;
    while( password.length < length ) {
        entity1 = Math.floor(string.length * Math.random()*Math.random());
        entity2 = Math.floor(numeric.length * Math.random()*Math.random());
        entity3 = Math.floor(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password;
}

console.log(password_generator());





/*
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
let specialCharacters = "`~!@#$%^&*";
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
// console.log("Password", password);
*/


// this grabs thee value of the id in the HTML and sets it a new value to the value of the function password_generator()
document.getElementById("passwordtextfield").innerHTML=password_generator();

// function to copy whatever is on the query selector to be copied to local memory (clipboard)
function copypassword() {
    let passwordText = document.querySelector("#passwordtextfield");
    passwordText.select()
    document.execCommand("copy")
    alert("Your password has been copied to clipboard!");
};