// Based on Dans Shiffmans code.

// This example is inspired by Jer Thorp's Smart Rockets
// http://www.blprnt.com/smartrockets/

var lifetime;  // How long should each generation live
var population;  // Population
var lifeCounter;   // Timer for cycle of generation
var target;        // Target location
var info;
var recordtime;         // Fastest time to target
var players;  //an array list to keep track of all the players!

function setup() {
  createCanvas(640, 360);
  // The number of cycles we will allow a generation to live
  lifetime = height;

  // Initialize variables
  lifeCounter = 0;

  target = new Goal(width/2-48, 0, 96, 20);

  // Create a population with a mutation rate, and population max
  var mutationRate = 0.01;
  population = new Population(mutationRate, 10);


  // Text Part
  title = createP("The Rubbish Footballer Simulator!");
  title.position(220, 320);
  title.style("color", "white");
  infoG = createP("");
  infoG.position(540,320);
  infoG.style("color", "white");
  info = createP("");
  info.position(40,320);
  info.style("color", "white");

  description = createP("The attackers have 2 left feet. The defence won't move a muscle unless you pay them 3 million.<br>But there is a slim chance as the new manager that you could pull this off.<br>Your IT department have come up with the latest coaching tool.");
  description.position(30,380);

  recordtime = lifeCounter;

  // Create the obstacle course
  players = [];
  for (i = 0; i < 3; i++) {
    players.push(new Obstacle(random(150,480), random(100,height/2), 40, 40));  // The defence players
  }
    players.push(new Obstacle(300, 40, 40, 40));  // The Goalie


}

function draw() {
  background(30,80,20);  // Green grass for a football pitch
  whitelines();
  // Draw the start and target locations
  target.display();

  // If the generation hasn't ended yet
  if (lifeCounter < lifetime) {
    population.live(players);
    if ((population.targetReached()) && (lifeCounter < recordtime)) {
      recordtime = lifeCounter;
    }
    lifeCounter++;
    // Otherwise a new generation
  }
  else {
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }

 // Draw the players
  for (var i = 0; i < players.length; i++) {
    players[i].display();
    info.html("Attempt #: " + population.getGenerations());
    infoG.html("Goals: " + population.getGoals());
  }

}

function whitelines() {  // Draw the white lines around the pitch
  fill(255);
  rect(10,10,10,height);
  rect(10,10,260,10);
  rect(370,10,260,10);
  rect(width-20,10,10,height);
  noFill();
  stroke(255);
  strokeWeight(10);
  arc(170, -130, 300, 300, 0, PI);
}
