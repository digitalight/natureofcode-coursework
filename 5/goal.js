// Also using this class for target location

function Goal(x, y, w_, h_) {
  this.location = createVector(x,y);
  this.w = w_;
  this.h = h_;

  this.display = function() {
    stroke(255);
    fill(255,180);
    strokeWeight(2);
    rectMode(CORNER);
    rect(this.location.x,this.location.y,this.w,this.h);
  }

  this.contains = function(spot) {
    if (spot.x > this.location.x && spot.x < this.location.x + this.w && spot.y > this.location.y && spot.y < this.location.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
}
