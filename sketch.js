function setup() {
	//create a place to draw
	createCanvas(640, 360);
}

function draw() {

if (mouseIsPressed) {
  //draw the background
background(random(0, 100), random(0, 100), random(0, 100));

  //draw the ground
fill(random(40, 60), random(80, 100), random(50, 70));
noStroke();
rect(0, 260, 800, 400);

  //draw the trees
	fill(22, 44, 31);
	triangle(-60, 260, 0, 160, 60, 260);
	triangle(0, 260, 60, 160, 120, 260);
	triangle(60, 260, 120, 160, 180, 260);
	triangle(120, 260, 180, 160, 240, 260);
	triangle(180, 260, 240, 160, 300, 260);
	triangle(240, 260, 300, 160, 360, 260);
	triangle(300, 260, 360, 160, 420, 260);
	triangle(360, 260, 420, 160, 480, 260);
	triangle(420, 260, 480, 160, 540, 260);
	triangle(480, 260, 540, 160, 600, 260);
	triangle(540, 260, 600, 160, 660, 260);
	triangle(600, 260, 660, 160, 720, 260);

  //draw the ufo
fill (150, 150, 150);
ellipse(mouseX, mouseY - 40, 100, 50);
ellipse(mouseX, mouseY - 60, 50, 60)
fill(100, 100, 100);
  //draw the lights on the ufo
fill(random(0, 250), random(0, 250), random(0, 250))
ellipse(mouseX, mouseY - 40, 10, 10)
ellipse(mouseX - 25, mouseY - 40, 10, 10)
ellipse(mouseX - 50, mouseY - 40, 10, 10)
ellipse(mouseX + 25, mouseY - 40, 10, 10)
ellipse(mouseX + 50, mouseY - 40, 10, 10)
ellipse(mouseX, mouseY - 20, 30, 5)
  //draw the spotlight
// { if mouseY > 260
ellipse(mouseX, 300, 80, 20)
// // } else {
// fill(45, 82, 54);
// 	ellipse()}


 } else {

  //draw the background
background(0, 0, 53);

	//draw the ground
fill(45, 82, 54);
noStroke();
rect(0, 260, 800, 400);

  //draw the trees
fill(22, 44, 31);
triangle(-60, 260, 0, 160, 60, 260);
triangle(0, 260, 60, 160, 120, 260);
triangle(60, 260, 120, 160, 180, 260);
triangle(120, 260, 180, 160, 240, 260);
triangle(180, 260, 240, 160, 300, 260);
triangle(240, 260, 300, 160, 360, 260);
triangle(300, 260, 360, 160, 420, 260);
triangle(360, 260, 420, 160, 480, 260);
triangle(420, 260, 480, 160, 540, 260);
triangle(480, 260, 540, 160, 600, 260);
triangle(540, 260, 600, 160, 660, 260);
triangle(600, 260, 660, 160, 720, 260);


  //draw the ufo
fill (150, 150, 150);
ellipse(mouseX, mouseY - 40, 100, 50);
ellipse(mouseX, mouseY - 60, 50, 60)
fill(100, 100, 100);
  //draw the lights on the ufo
ellipse(mouseX, mouseY - 40, 10, 10)
ellipse(mouseX - 25, mouseY - 40, 10, 10)
ellipse(mouseX - 50, mouseY - 40, 10, 10)
ellipse(mouseX + 25, mouseY - 40, 10, 10)
ellipse(mouseX + 50, mouseY - 40, 10, 10)

}








}
