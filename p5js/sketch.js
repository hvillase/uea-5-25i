// Click and drag the mouse to view the scene from different angles.

let shape;

// Load the file and create a p5.Geometry object.
// Normalize the geometry's size to fit the canvas.
function preload() {
  shape = loadModel('assets/monkey.obj', true);
}

function setup() {
  createCanvas(640, 480, WEBGL);

  describe('A white teapot drawn against a gray background.');
}

function draw() {
  background(200);

  // Enable orbiting with the mouse.
  orbitControl();

  // Draw the shape.
  model(shape);
}