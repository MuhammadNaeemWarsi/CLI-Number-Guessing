#! /usr/bin/env node
import inquirer from "inquirer";
// Generate random number

// input number from user

// compare both inputs

const randomNumber = Math.floor(Math.random()* 6 + 1);


const answer = await inquirer.prompt([         
     {
         name:"userGuessedNumber",
         type: "number",
         message: "Please guess a number between 1-6:",
    },
]);

if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number");

} else {
    console.log("you guessed wrong number");
}
 