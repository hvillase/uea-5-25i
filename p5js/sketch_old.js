function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    noStroke();
    fill(0, 0, 255, 128);
    rect(10, 0, 200, 200);
    
    fill(225, 90, 0, 127);
    circle(width/2, height/2, 200);
    
    fill(0, 255, 255, 127);
    triangle(20, 20, 300, 200, 100, 100);
  }