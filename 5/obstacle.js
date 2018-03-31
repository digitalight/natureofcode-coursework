function Obstacle(x, y, w_, h_) {
  this.location = createVector(x,y);
  this.w = w_;
  this.h = h_;

  this.display = function() {
    noStroke();
    fill(10,255,20);
    rect(this.location.x-5,this.location.y+8,50,20,20); // Shoulders
    fill(220,160,160);
    ellipseMode(CORNER);
    ellipse(this.location.x,this.location.y,this.w,this.h); // Face
    fill(160,120,80);
    ellipse(this.location.x,this.location.y,this.w,this.h-7); // Hair
  }

  this.contains = function(spot) {
    if (spot.x > this.location.x && spot.x < this.location.x + this.w && spot.y > this.location.y && spot.y < this.location.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
}
