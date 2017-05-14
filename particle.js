function Particle (x,y) {
  this.pos = createVector(x,y);
  this.prev = createVector(x,y);
  this.vel = createVector(); //p5.Vector.random2D();
  //this.vel.setMag(random(2,5));
  this.acc = createVector();
  
  this.attracted = function (target) {
    var force = p5.Vector.sub(target, this.pos);
    var dsquared = force.magSq();
    //var dsquared=100;
    dsquared = constrain(dsquared,400,500);
    
    var G = 6;
    var strength = G / dsquared;
    force.setMag(strength);
    this.acc.add(force);
  }
  
  this.update = function () {
    this.vel.add(this.acc);
    //this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.show = function () {
    stroke(255);
    strokeWeight(1);
    //point(this.pos.x,this.pos.y);
    line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
    //ellipse(this.pos.x,this.pos.y,10,10);
    
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }
}