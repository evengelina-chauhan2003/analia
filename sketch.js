//The setup function only happens once
var sandy=6;
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
  background(255, 227, 246)
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(random(39, 255), 250, 31, 178); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY, width/20,height/20,100 ,100); // center of canvas, 20px dia
  fill(74, 35, 90)
  rect(mouseX,mouseY, 50, 50); //center of canvas, 20px
  fill(121, 49, 94)
  triangle(30, 75, 58, 20, 86, 75)

}
