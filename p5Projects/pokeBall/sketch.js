function setup() {
    createCanvas(300, 300);
    background(225);

    //Stroke() sets the color of the stroke (the outline).
    stroke("black");
    //strokeWeight() sets the width of the stroke in pixels.
    strokeWeight(6);
    // arc is an ellipse with a starting and enpoint, with 0 being the rightmot point on the circle and PI being half a circle.
    //CHORD connets the ends of the ar.
    //Bottom half of the pokeball.
    fill("white");
    arc(width / 2, height / 2, 200, 200, 0, PI, CHORD);
    //Top hlaf of the pokeball.
    fill("red");
    arc(width / 2, height / 2, 200, 200, PI, 0, CHORD);   

    fill("white");
    ellipse(width / 2, height / 2, 50, 50);

    fill("black");
    ellipse(width / 2, height / 2, 25, 25);
}