const prompt = require('prompt-sync')();

let name = prompt("Enter your name: ");
console.log("Hello " + name);

let age = Number(prompt("Enter your age: "));
console.log("You are " + age + " years old");