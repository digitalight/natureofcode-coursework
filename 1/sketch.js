// Nature of Code - Section 1 - Random Walker
// Mike Glover 08 April 2017

var c;

function setup() {
    createCanvas(innerWidth, innerHeight);    // full size of window
    c = new Creature();
}

function draw() {
    background(0, 120, 90, 20);  // Set a green background and have blurred effect
    c.update();   // update movement of creature
    c.display();  // display the creature

}

function Creature() {
    this.pos = createVector(width / 2, height / 2);  // start in the centre
    this.vel = createVector(0, 0);  // start with no speed

    this.update = function() {
      var mouse = createVector(mouseX, mouseY); // get location of the mouse
      this.acc = p5.Vector.sub(mouse, this.pos);   // acclerate towards the mouse
      this.acc.normalize();   // normalize the accleration
      this.acc.sub(random(-3,3),random(-1,1));  // add a random element to acceleration
      this.acc.mult(0.05);  // slow down things

      this.vel.add(this.acc);
      this.pos.add(this.vel);

    }

    this.display = function() {
        noStroke(); // remove outline
        fill(255, 255, 255);
        ellipse(this.pos.x, this.pos.y, 24, 24); // draw white dot
        fill(255, 90, 90);
        ellipse((this.pos.x + this.vel.x * 0.8), (this.pos.y + this.vel.y * 0.8), 12, 12); // red dot in the middle that is related to velocity
    }
}
