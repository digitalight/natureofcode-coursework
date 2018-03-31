// Nature of Code Session 2 - Forces
// Mike Glover
// 09 April 2017

function star(m) {
  this.pos = createVector(width/2, height/2);  // middle of window
  this.mass = m;  // mass of star
  this.G = 1;
  this.img = loadImage("img/sun.png");

  this.calcAttract = function(p) {
    var force = p5.Vector.sub(this.pos, p.pos);  // find direction of force
    var distance = force.mag(); // distance between star and planet
    distance = constrain(distance, 5, 50);
    force.normalize();
    var strenth = (this.G * this.mass * p.mass) / (distance * distance);
    force.mult(strenth);
    return force;
  }

  this.display = function() {
    imageMode(CENTER);
    image(this.img, this.pos.x, this.pos.y, 100, 100);
  }
}
