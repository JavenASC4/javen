var typed = ("")
var sentence =["hello world", "this will help your typing", "lets try another one"];

function setup() {
    createCanvas(500, 300);
    background(50);
    fill("white");
    textSize(16);
    text("Please type in the sentence below.", 50, 50);
    text(random(sentence), 50, 100);
}
function keyTyped(){
    console.log(typed)
    typed = typed + key;
    if(typed == sentence){
        alert(" You win!");
    }
}


