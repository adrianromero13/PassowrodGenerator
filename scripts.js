// needs improvement


var length = parseInt( prompt("Enter password length"));
// first challenge
function password_generator( len ) {
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
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

// display using HTML
// document.getElementById("passwordtextfield").innerHTML=password;
    // with challenge1
document.getElementById("passwordtextfield").innerHTML=password_generator();

function copypassword() {
    let passwordText = document.querySelector("#passwordtextfield");
    passwordText.select()
    document.execCommand("copy")
    alert("Your password has been copied to clipboard!");
};