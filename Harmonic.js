const prompt = require('prompt-sync')();
console.log('Please enter the number');
let number = parseInt(prompt());
let str="";
for ( i=1 ; i<=number ; i++){2

    if(i==1){
        str+=("Hn= ");
    }
    
    str+=("1/"+i+" +");
}
console.log(str)