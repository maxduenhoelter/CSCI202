let blackTriangleAngle = 0;
let rotating = false;
let rotationStartTime;
let grayIsBlack = false;

function setup() {
  createCanvas(553, 551);
  angleMode(DEGREES);
}

function draw() {
  background("black");

  // White border
  fill("white");
  rect(0, 0, 553, 551);
  noStroke();

  // Triangle points
  let center = createVector(276.5, 275.5);
  let topLeft = createVector(0, 0);
  let bottomLeft = createVector(0, 551);
  let topRight = createVector(553, 0);
  let bottomRight = createVector(553, 551);
  let midLeft = createVector(0, 275.5);
  let topCenter = createVector(276.5, 0);

  // -------- BLACK TRIANGLE (click to rotate) --------
  push();
  translate(center.x, center.y);
  if (rotating) {
    let elapsed = millis() - rotationStartTime;
    if (elapsed <= 1000) {
      blackTriangleAngle = map(elapsed, 0, 1000, 0, 360);
    } else {
      rotating = false;
      blackTriangleAngle = 0;
    }
  }
  rotate(blackTriangleAngle);
  fill(0);
  beginShape();
  vertex(topLeft.x - center.x, topLeft.y - center.y);
  vertex(0, 0);
  vertex(bottomLeft.x - center.x, bottomLeft.y - center.y);
  endShape(CLOSE);
  pop();

  // -------- RED TRIANGLE (hover turns yellow) --------
  const isHoveringRed = collidePointTriangle(
    mouseX, mouseY,
    center.x, center.y,
    topRight.x, topRight.y,
    bottomRight.x, bottomRight.y
  );
  fill(isHoveringRed ? 'yellow' : 'red');
  beginShape();
  vertex(center.x, center.y);
  vertex(topRight.x, topRight.y);
  vertex(bottomRight.x, bottomRight.y);
  endShape(CLOSE);

  // -------- YELLOW TRIANGLE --------
  fill(255, 255, 0);
  beginShape();
  vertex(bottomLeft.x, bottomLeft.y);
  vertex(center.x, center.y);
  vertex(midLeft.x, midLeft.y);
  endShape(CLOSE);

  // -------- GRAY TRIANGLE (turns black on spacebar) --------
  fill(grayIsBlack ? 0 : 169);
  beginShape();
  vertex(center.x, center.y);
  vertex(topRight.x, topRight.y);
  vertex(topCenter.x, topCenter.y);
  endShape(CLOSE);

  // -------- WHITE TRIANGLE --------
  fill(255);
  beginShape();
  vertex(center.x, center.y);
  vertex(topCenter.x, topCenter.y);
  vertex(topLeft.x, topLeft.y);
  endShape(CLOSE);
}

// Rotate black triangle on click
function mousePressed() {
  if (collidePointTriangle(
    mouseX, mouseY,
    0, 0,
    276.5, 275.5,
    0, 551
  )) {
    rotating = true;
    rotationStartTime = millis();
  }
}

// Turn gray triangle black on spacebar
function keyPressed() {
  if (key === ' ' || key === 'Spacebar') {
    grayIsBlack = !grayIsBlack;
  }
}
