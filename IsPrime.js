const prompt = require('prompt-sync')();
console.log('Please enter the number');
let number = parseInt(prompt());
Prime_flag=0
for (i=2 ;Prime_flag!=1 && i<=number/2;  i++)
{
    if (number%i == 0 ){
        Prime_flag=1;
    }
    
}
if(Prime_flag==1){
    console.log(number+" is not a prime number");
}
else{
    console.log(number+" is a prime number");
}
