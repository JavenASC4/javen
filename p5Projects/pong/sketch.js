var x = 180;
var y = 180;
var xspeed = 6;
var yspeed = 12;


function setup() {
    createCanvas(350, 350);
    background(165);

}

function draw() {
    background(165);
    //distance from center of the screen
    var d = dist(60, 60, 40, 40);

    fill(200, 250, 200, 250, 200, 250);
    ellipse(x, y, d, d);

    //bouncing horizontally
    x = x + xspeed;

    if (x > 350 || x < 0) {
        xspeed = -xspeed;
    }

    //bouncing veritcally
    y = y + yspeed;

    if (y > 350 || y < 0) {
        yspeed = -yspeed;
        rect(mouseX, 390, 120, 20);
    }

}