var bugs = [];


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  // Create object
  for (i = 0; i < 40; i++) {
    var bug = new Jitter();
    bugs.push(bug);
  };
}

function draw() {
  background(50, 89, 100);
  for (i = 0; i < 40; i++) {
    bugs[i].move();
    bugs[i].display();
  };
}

// Node class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 2;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
