"use strict";
// ======================================================================
// type unknown - better choice than ANY type as it checks errors
// ======================================================================
// we don't know what the user will enter, is it a number or a string
//we can store any value in here without us getting errors
// Option 1--------------------------------------------------------------
let userInput;
userInput = 5;
console.log(userInput);
// Option 2--------------------------------------------------------------
//lets you assign an unkonwn value to a type
let userInput2;
let userName;
userInput2 = 5;
if (typeof userInput2 === "string") {
    userName = userInput2;
}
console.log(userInput2);
