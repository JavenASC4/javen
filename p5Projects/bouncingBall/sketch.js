var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(220, 220);
  background (25);

}

function draw() {
    background(25);
	//distance from center of the screen
	var d = dist(60, 60, 40, 40);

  	fill (200, 250, 200, 250, 200, 250);
  	ellipse (x, y, d, d);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > 220 || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > 220 || y < 0) {
	 	  yspeed = -yspeed;
  	}

}