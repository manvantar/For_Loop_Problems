const prompt = require('prompt-sync')();
let startNumber = parseInt(prompt('Please enter the starting range number: '));
let endNumber = parseInt(prompt('Please enter the ending range number: '));
let primeNumber="";

for (i = startNumber; i <= endNumber; i++) {
    var Prime_flag = 0;
    for (j = 2; Prime_flag != 1 && j <= i / 2; j++) {
        if (i % j == 0) {
            Prime_flag = 1;
        }   
    }
    if (Prime_flag==0){
        primeNumber+=" "+i;
    }
}
console.log(primeNumber);