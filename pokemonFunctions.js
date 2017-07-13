function randLetter(){
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[rand(alphabet.lenghth)];
}

function randWord(){
    var word = " ";
    //Use a for loop to pick 5 random letters 
    for (var i = 0; i < 16; i++){
        //Pick a letter
        word = word + randLetter(); 
    }
    return word;
}

function randSentence(){
    var sentence = "";
    for (var i = 0; i < 5; i++){
        senence = sentence + randWord() + " ";
    
    }
    return sencence; 
}

