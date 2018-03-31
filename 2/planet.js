// Nature of Code Session 2 - Forces
// Mike Glover
// 09 April 2017

function planet(x, y, m, img, ix, iy) {     // img is filename, ix iy are image size
  this.pos = createVector(x, y);
  this.vel = createVector(2.4, 0);
  this.acc = createVector(0, 0);
  this.mass = m;
  this.img = loadImage("img/" + img + ".png");  // load the planet image

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }

  this.display = function() {
    imageMode(CENTER);  //center the image
    image(this.img, this.pos.x, this.pos.y, ix, iy);  // display image for the planet

  }
}
