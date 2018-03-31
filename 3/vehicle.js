function Vehicle(x,y,m, img, max) {
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.mass = m;
  this.maxspeed = max;
  this.maxforce = 0.4;
  this.img = loadImage("img/" + img + ".png");

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    this.r = 9;
  }

  // Separation
  // Method checks for nearby vehicles and steers away
  this.separate = function(vehicles) {
    var desiredseparation = 100;
    var sum = createVector();
    var count = 0;
    // For every boid in the system, check if it's too close
    for (var i = 0; i < vehicles.length; i++) {
      var d = p5.Vector.dist(this.pos, vehicles[i].pos);
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        var diff = p5.Vector.sub(this.pos, vehicles[i].pos);
        diff.normalize();
        diff.div(d);        // Weight by distance
        sum.add(diff);
        count++;            // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      sum.div(count);
      // Our desired vector is the average scaled to maximum speed
      sum.normalize();
      sum.mult(this.maxspeed);
      // Implement Reynolds: Steering = Desired - Velocity
      sum.sub(this.vel);
      sum.limit(this.maxforce);
    }
    return sum;
  }

  this.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    //desired.setMag(this.maxspeed);
    var d = desired.mag();
    if (d < 200) {
      //Map the desired magnitude according to distance
      var m = map(d, 100, 200, 0, this.maxspeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxspeed);
    }

    var steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxforce);
    this.applyForce(steering);
  }

  this.display = function() {
    var theta = this.vel.heading() + PI / 2;
    // fill (127);
    // stroke(200);
    // strokeWeight(1);
    push();
    translate(this.pos.x, this.pos.y);
   rotate(theta);
    imageMode(CENTER);
    image(this.img, 0, 0, 100, 100);
    // beginShape();
      // vertex(0, -this.r * 2);
      // vertex(-this.r, this.r * 2);
      // vertex(this.r, this.r * 2);
    // endShape(CLOSE);
    pop();
  }
}
