// Nature of Code Session 2 - Forces
// Mike Glover
// 09 April 2017

function galaxy() {

    this.system = [];
    this.pos;
    this.create = function(n) {
        for (var i = 0; i < n; i++) {
            this.pos = createVector(random(innerWidth), random(innerHeight));  // choose random vector in the window
            this.system.push(this.pos); // push it to the array
        }
    }

    this.display = function() {
        stroke(255);
        for (i = 0; i < this.system.length; i++) { // go through the array of systems
            point(this.system[i].x, this.system[i].y); // draw a point
        }
    }
}
