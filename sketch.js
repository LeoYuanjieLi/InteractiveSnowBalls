var bugs = [];
    edges = [];
    numOfNode = 50;
var movingBugs = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // Create nodes
  for (i = 0; i < numOfNode; i++) {
    var bug = new Jitter();
    bugs.push(bug);
  };
  // Creating Edges
  for (i = 0; i < numOfNode-1; i++) {
    for (j = 1; j<numOfNode; j++){
      var pointA = bugs[i];
      var pointB = bugs[j];
      var edge = new Edge(pointA, pointB)
      edges.push(edge)
    };
  };

  // Creating moving nodes
  for (i = 0; i < 70; i++){
        x = random(width);
        y = random(height);
        speedX = random(0,5);
        speedY = random(3,7);
        var movingBug = new movingJitter(x,y,speedX, speedY);
        movingBugs.push(movingBug);
  }

}

function draw() {
  background(255,255,255);
  for (i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  };
  for (i = 0; i < edges.length; i++) {
    edges[i].display();
  };
  ellipse(mouseX, mouseY, 20, 20);

  for (i = 0; i < bugs.length; i++) {
    if (dist(mouseX, mouseY, bugs[i].x, bugs[i].y)<150){
      line(mouseX, mouseY,bugs[i].x, bugs[i].y);
    };
  };

  for (i = 0; i < movingBugs.length; i++){
    movingBugs[i].move();
    movingBugs[i].display();
    for (j = 0; j < bugs.length; j++){
      if (dist(movingBugs[i].x, movingBugs[i].y, bugs[j].x, bugs[j].y)<150){
        line(movingBugs[i].x, movingBugs[i].y, bugs[j].x, bugs[j].y);
      };
    };
  };
};

// Node class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(20,25);
  this.speed = 2;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
//Moving Jitters
function movingJitter(x,y,speedX, speedY) {
  this.x = x;
  this.y = y;
  this.diameter = random(10,15);
  this.speedX = speedX;
  this.speedY = speedY;

  this.move = function() {
    this.x = this.x + this.speedX;
    this.y = this.y - this.speedY;
    if (this.y < 0 || this. y > height) {
      this.speedY = -this.speedY;
    }
    else if (this.x < 0 || this. x > width) {
      this.speedX = -this.speedX;
    };
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(200,200,200)
  }
};

//Edge class
function Edge(pointA, pointB) {
  this.a = pointA;
  this.b = pointB;
  this.display = function (){if(dist(this.a.x, this.a.y, this.b.x, this.b.y) < 150){
    line(this.a.x, this.a.y, this.b.x, this.b.y)
    stroke(200,200,200)
    }

  }

};
