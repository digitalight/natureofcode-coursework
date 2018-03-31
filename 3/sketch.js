// Session 3 Nature of Code
// Mike Glover
// 10 April 2017

// Cat and Mouse

var mouse;
var cat;
var cheeseimg; // the cheese image

function setup() {
  createCanvas(innerWidth, innerHeight);
  noCursor()
  mouse = new Vehicle(320, 180, 1, "mouse", 5);   // Mouse Object
  cat = new Vehicle(100,100, 10, "cat", 2);       // Cat Object
  cheeseimg = loadImage("img/cheese.png");
}

function draw() {
  background(51,0,0);
  var cheese = createVector(mouseX, mouseY);
  mouse.arrive(cheese);     // Mouse tracks the cheese and goes to it
  cat.arrive(mouse.pos);    // Cat follows the position of the Mouse

  mouse.update();           // Update position of mouse
  mouse.display();          // then display mouse
  cat.update();             // Update position of cat
  cat.display();            // then display Cat

  imageMode(CENTER);
  image(cheeseimg, mouseX, mouseY, 40, 40);
}
