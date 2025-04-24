function setup() {
  // Creates a canvas matching the dimensions of the painting
  createCanvas(553, 551);
}

function draw() {
  // Black background
  background("black");

  // Draw the white border
  fill("white");
  rect(0, 0, 553, 551);

  // Start placing the shapes (triangles)
  noStroke();

  // Black triangle (top left)
  fill(0); // Black color
  beginShape();
  vertex(0, 0);
  vertex(276.5, 275.5); // Center of canvas
  vertex(0, 551); // Bottom-left corner
  endShape(CLOSE);

  // Red triangle (bottom right)
  fill(255, 0, 0); // Red color
  beginShape();
  vertex(276.5, 275.5); // Center
  vertex(553, 0); // Top-right corner
  vertex(553, 551); // Bottom-right corner
  endShape(CLOSE);

  // Yellow triangle (bottom left)
  fill(255, 255, 0); // Yellow color
  beginShape();
  vertex(0, 551); // Bottom-left
  vertex(276.5, 275.5); // Center
  vertex(0, 275.5); // Middle left edge
  endShape(CLOSE);

  // Gray triangle (top center-right)
  fill(169, 169, 169); // Gray color
  beginShape();
  vertex(276.5, 275.5); // Center
  vertex(553, 0); // Top-right corner
  vertex(276.5, 0); // Top-center edge
  endShape(CLOSE);

  // White triangle (top center-left)
  fill(255); // White color
  beginShape();
  vertex(276.5, 275.5); // Center
  vertex(276.5, 0); // Top-center edge
  vertex(0, 0); // Top-left corner
  endShape(CLOSE);
}
