"use strict";

console.log("hello world");

// function counterPrinter(userInput){
//     for (let i=0; i < userInput; i++){
//         console.log(`My new favorite number is ${i}`)
//     }
// }

// counterPrinter(parseInt(prompt("Please enter a whole number between 1 and 1,000🎇")))

function ageIsGreater(userInput) {
  if (userInput > 28) {
    return true;
  }
  return false;
}

let isAgeGreater = ageIsGreater(
  parseInt(
    prompt("Let's see if you are older than I am. \n Please enter your age.")
  )
);

if (isAgeGreater) {
    alert("Congrats")
} else {
    alert("you lose")
}
