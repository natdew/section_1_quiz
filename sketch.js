function setup() {
	// create a place to draw
	createCanvas(640, 360);
}


function draw() {
	// clear the background
	background(0, 0, 53);


//random(background )
//background(0, 53, 0)
//background(53, 0, 0));

//else()
	// draw the ground
fill(45, 82, 54);
noStroke();
rect(0, 260, 800, 400);

  // draw the trees
fill(23, 45, 31);
noStroke();
rect(0, 180, 800, 100)

fill(120, 100, 100);
//triangle(75, 30, 20, 60, 75, 90);
//triangle(200, 50, 60, 70, 200, 80)

  // draw the ufo
fill (200, 200, 200);
ellipse(mouseX, mouseY, 100, 50);
ellipse(mouseX, mouseY - 30, 50, 50)
fill(100, 100, 100);
ellipse(mouseX, mouseY, 10, 10)










}
