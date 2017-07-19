function setup() {
    createCanvas(1000, 1000);
    background(225);
}

function mouseDragged() {
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, random(40), random(40));
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, random(40), random(40));
    fill(random(255), random(255), random(255));
    tri(mouseX, mouseY, random(40), random(40));
    fill(random(255), random(255), random(255));
    point(random(255), random(255), random(255));
    // prevent default
    return false;
}

