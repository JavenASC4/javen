//Task
//Create a rand() fucntion
//Takes a number
//Returns a random integer number between 0 and that number

//Pseudocode
//multiply Math.random() by the given number 
//remove the decimal part
//return the remaining integer

function rand(num) {
    //Returns a random integer between 0 and num 
    var x = num * Math.random();
    var result = Math.floor(x);
    return result;
}

console.log(rand(6));
console.log(rand(1000));
