var attractors = [];
var particles = [];


function setup() {
  createCanvas(1200,1200);
  for (var i = 0; i < 100; i++){
    particles.push(new Particle(random(width),random(height)));
  }
  for (var i = 0; i < 0; i++){
    attractors.push(createVector(random(width),random(height)));
  }
    background(51);
}

function mousePressed () {
  attractors.push(createVector(mouseX,mouseY));
}

function draw() {


  stroke(0,255,0);
  strokeWeight(4);
  for (var i = 0; i < attractors.length; i++){
    point(attractors[i].x,attractors[i].y);
  }
  
  for(var i = 0;i<particles.length;i++) {
    for (var j = 0; j < attractors.length; j++){
      particles[i].attracted(attractors[j]);
    }
    particles[i].update();
    particles[i].show();
  }
}