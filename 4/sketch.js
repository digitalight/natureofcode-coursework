var angle;

function setup() {
    createCanvas(innerWidth, innerHeight);
    colorMode(HSB);


}

function pattern(size) {
    noStroke();
    rectMode(CENTER);
    rect(0, 0, size, size);  // draw rectangle
    translate(0, size); // move to the side
    fill(random(255), 128, 128);  // fill with a random color, first on stays same.
    size *= .706;

    if (size > 14) {  // recurive pattern that stops when size is less than 14 pixels
        push();
        rotate(angle);
        pattern(size);
        rotate(angle);
        pop();

        // Repeat going the other way
        push();
        rotate(-angle);
        pattern(size);
        pop();
    }
}

function draw() {
    angleMode(DEGREES);
    frameRate(.5);   // 2 second change in color
    angle = 45; // angle to rotate squares
    background(0);
    translate(width / 2, height / 2);  // move to center of screen
    var r = 0;   // set main rotate of pattern to 0
    for (i = 0; i < 4; i++) {  // loop 4 times for each side of the main square.
        push();
        rotate(r);  //rotate the whole pattern 90 degrees each time.
        pattern(100);
        pop();
        r += 90;  // add 90 degrees
    }
}
