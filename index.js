"use strict";

console.log("hello world");

function counterPrinter(userInput){
    for (let i=0; i < userInput; i++){
        console.log(`My new favorite number is ${i}`)
    }
}

counterPrinter(parseInt(prompt("Please enter a whole number between 1 and 1,000🎇")))