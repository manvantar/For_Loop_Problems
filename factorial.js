const prompt = require('prompt-sync')();
let number = parseInt(prompt('Please enter the starting range number: '));
factorial = 1;

for (j = number; j > 0; j--) {
    factorial=factorial*j;
}   
console.log("factorial of "+number+" is "+factorial);