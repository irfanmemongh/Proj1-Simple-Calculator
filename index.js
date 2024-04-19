#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstanswer" },
    { message2: "Enter 2nd name", type: "number", name: "Secondanswer" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statements
if (answer.operator === "Addition") {
    console.log(answer.firstanswer + answer.Secondanswer);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstanswer * answer.Secondanswer);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstanswer - answer.Secondanswer);
}
else if (answer.operator === "Division") {
    console.log(answer.firstanswer / answer.Secondanswer);
}
else {
    console.log("Please select valid operators mentioned above");
}
//Project complete successfullu by grace of Almighty
