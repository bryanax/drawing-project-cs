var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Bryana"); // enter your name here!
}

 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

// Write all your code inside the draw() function below!
function draw() {
  // Example. You can remove when you're ready!
  background(79, 30, 30); // try changing this to a blue background
  fill(100, 111, 229);    // Always call fill() before the shape you want to fill in.
  rect(30, 20, 55, 55); // Draw a 30x20 pixel rectangle at coordinate (55,55)
}

function draw() {
background (79,30,30);
fill(232,153,188);
line(0,0,100,100);
    
fill(232, 153, 188);
ellipse(100,100,100,100);
ellipse(150,150,100,100);
ellipse(200,200,100,100);

    drawTriangle();
}

function drawThreePinkCircles() {
    fill("yellow");
    ellipse(100,100,100,100);
    ellipse(150,150,100,100);
    ellipse(200,200,100,100);
    
}

function drawTriangle(){
    triangle(100, 300, 500, 100, 500, 500);
    fill("brown")
}


