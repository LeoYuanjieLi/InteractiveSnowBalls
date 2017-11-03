var bugs = [];
    edges = [];
    numOfNode = 150;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // Create object
  for (i = 0; i < numOfNode; i++) {
    var bug = new Jitter();
    bugs.push(bug);
  };
  for (i = 0; i < numOfNode-1; i++) {
    for (j = 1; j<numOfNode; j++){
      var pointA = bugs[i];
      var pointB = bugs[j];
      var edge = new Edge(pointA, pointB)
      edges.push(edge)
    }
  }
}

function draw() {
  background(50, 89, 100);
  for (i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  };
  for (i = 0; i < edges.length; i++) {
    edges[i].display();
  }
}

// Node class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10,15);
  this.speed = 2;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};

//Edge class
function Edge(pointA, pointB) {
  this.a = pointA;
  this.b = pointB;
  this.display = function (){if(dist(this.a.x, this.a.y, this.b.x, this.b.y) < 150){
    line(this.a.x, this.a.y, this.b.x, this.b.y)
    stroke(255,255,255)
    }

  }

}
