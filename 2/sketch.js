// Nature of Code Session 2 - Forces
// Mike Glover
// 09 April 2017

var planets = [];
var sun;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  ourGalaxy = new galaxy();  // create new galaxy object
  ourGalaxy.create(100);  // Create a stary background with n number of stars

  sun = new star(50);  // make sun object
  jupiter = new planet(innerWidth/2,120, .1, "jupiter", 60, 60);  //make jupiter planet
  saturn =  new planet(innerWidth/2,30, .3, "saturn", 90, 60);  //make saturn planet

  planets.push(jupiter);    // add jupiter to array
  planets.push(saturn);     // add saturn to array



}

function draw() {
  background(0);
  ourGalaxy.display();  // display stary background
  sun.display();
  for (i = 0; i < planets.length; i++) {      // loop through the planets array
    var force = sun.calcAttract(planets[i]);    // work out force
    planets[i].applyForce(force);     //apply the force
    planets[i].update();        // update planet
    planets[i].display();       // display planet
  }

}
