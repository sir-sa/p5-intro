// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220, 0, 200);
  
//   rectMode(CENTER);
//   fill(0, 255, 2);
//   stroke(0,100,100);
//   rect(200, 150, 150, 150, 20);
// }

let circleX =100;
function setup() {
  createCanvas(400, 400);
   
}

function draw() {
  background(0);

  fill(0, 255, 2);
  stroke(0,100,100);
  circle(circleX, 150, 75, 75);
  
  circleX ++;
}
