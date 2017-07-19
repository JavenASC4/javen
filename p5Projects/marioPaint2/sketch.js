var col = "black";

function setup() {
    createCanvas(1000, 1000);
    background(225);
    fill("green");
    rect(0, 0, 1000, 30);
    fill("blue");
    rect(0, 30, 1000, 30);
    fill("yellow");
    rect(0, 60, 1000, 30);

}

function mousePressed() {
    if (mouseY < 31) {
        col = "green";
    }
    else if (mouseY > 31 && mouseY < 61) {
        col = "blue";
    }
    else if (mouseY > 61 && mouseY < 91) {
        col = "yellow";
    }
}

function mouseDragged() {
    fill(col)
    rect(mouseX, mouseY, random(40), random(40));
    ellipse(mouseX, mouseY, random(40), random(40));
    tri(mouseX, mouseY, random(40), random(40));
    // prevent default
    return false;
}


