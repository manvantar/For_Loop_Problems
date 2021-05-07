const prompt = require('prompt-sync')();
console.log('Please enter the power for value 2');
let number = parseInt(prompt());
let power=1;
console.log("2^0 =1");

for(i=1;i<=number;i++){
    power=power*2;
    console.log("2^"+i+" ="+power);
}