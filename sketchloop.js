let angle = 0; // Rotation angle for animation

function setup() {
  createCanvas(553, 551);
}

function draw() {
  background("black");

  // Draw the white border
  fill("white");
  rect(0, 0, 553, 551);

  noStroke();

  // Animated rotation around the center
  push();
  translate(276.5, 275.5); // Move the origin to the center
  rotate(radians(angle)); // Apply rotation
  angle += 1; // Increment angle for continuous rotation

  // Black triangle (rotates)
  fill(0);
  beginShape();
  vertex(-276.5, -275.5);
  vertex(0, 0);
  vertex(-276.5, 275.5);
  endShape(CLOSE);

  // Red triangle (rotates)
  fill(255, 0, 0);
  beginShape();
  vertex(0, 0);
  vertex(276.5, -275.5);
  vertex(276.5, 275.5);
  endShape(CLOSE);

  // Yellow triangle (rotates)
  fill(255, 255, 0);
  beginShape();
  vertex(-276.5, 275.5);
  vertex(0, 0);
  vertex(-276.5, 0);
  endShape(CLOSE);

  // Gray triangle (rotates)
  fill(169, 169, 169);
  beginShape();
  vertex(0, 0);
  vertex(276.5, -275.5);
  vertex(0, -275.5);
  endShape(CLOSE);

  // White triangle (rotates)
  fill(255);
  beginShape();
  vertex(0, 0);
  vertex(0, -275.5);
  vertex(-276.5, -275.5);
  endShape(CLOSE);

  pop();

  // Optional: Add pulsating effect to the triangles
}
