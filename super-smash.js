function rand(num) {
    //Returns a random integer between 0 and num 
    var x = num * Math.random();
    var result = Math.floor(x);
    return result;
}

var prompt = require('prompt-sync')();
var mashArray = ["Sector Z", "Hyrule Castle", "Peach's Castle", "Saffron City"];
var firstQuestion = [1, 2];
var secondQuestion = ["Mario", "Luigi"];
var answerOne = prompt("How many times do you want to fight?");
firstQuestion.push(answerOne);

var answerTwo = prompt("Who do you want to fight?");
secondQuestion.push(answerTwo);

function x() {
    var result = ("You fought " + secondQuestion[rand(secondQuestion.length)] + " in the " + mashArray[rand(mashArray.length)] + " and hit them " + firstQuestion[rand(firstQuestion.length)]);
    console.log(result);
}

x();

