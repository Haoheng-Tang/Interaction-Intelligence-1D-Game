/* /////////////////////////////////////

  4.043 / 4.044 Design Studio: Interaction Intelligence
  February  9, 2023
  Marcelo Coelho

  If you come from Processing, there is a Processing version here. 
  Keep in mind that there are some differences between both versions:
  https://github.com/marcelocoelho/Interface1D

*/ /////////////////////////////////////


let displaySize = 50;   // how many pixels are visible in the game
let pixelSize = 17;     // how big should they look on screen

let playerOne;    // Adding 3 players to the game

let target;       // and one target for players to catch.

let targethead;   // head in front of the target.

let targetheadd;  // head2 in front of the target.

let targettail;   // tail1 following the target.

let targettaill;  // tail2 following the target.

let ponding = [];

let n = 0;        // how many times rain drops.

let m = 0;        // how many times the player click the mouse.

let missed = 0;   // how many times the player misses a raindrop.

let display;      // Aggregates our final visual output before showing it on the screen

let controller;   // This is where the state machine and game logic lives

let collisionAnimation;   // Where we store and manage the collision animation

let score;        // Where we keep track of score and winner

let drumbeat;     // Sound that will play when left clicked

let drumroll;     // Sound that will play when right clicked

let startpt;      // Defining the startpoint of the target (outside the frame)


function preload(){
  drumbeat = loadSound('drumbeat.mp3');
  drumroll = loadSound('drumroll.mp3');
  losinggame = loadSound('losing.mp3');
}

function setup() {

  createCanvas(pixelSize, (displaySize*pixelSize));     // dynamically sets canvas size

  display = new Display(displaySize, pixelSize);        //Initializing the display

  playerOne = new Player(color(180, 255, 180), 40, displaySize);   // Initializing players

  startpt = parseInt(random(-10,5));

  target = new Player(color(230,230,255), startpt-2, displaySize);    // Initializing target using the Player class

  targettail = new Player(color(110,110,200), startpt-1, displaySize);    // Initializing targettail using the Player class

  targettaill = new Player(color(30,30,160), startpt, displaySize);    // Initializing targettail using the Player class

  targethead = new Player(color(110,110,140), startpt+1, displaySize);    // Initializing targethead using the Player class

  targetheadd = new Player(color(30,30,60), startpt+2, displaySize);    // Initializing targetheadd using the Player class

  for(let i=0; i<10; i++){
    ponding.push(new Player(color(60,60,250), 50+i, displaySize));}   // Initializing ponding array using the Player class

  controller = new Controller();            // Initializing controller

  score = {max:5, winner:color(0,0,0)};     // score stores max number of points, and color 

  frameRate(40);

}

function draw() {

  // start with a blank screen
  background(10, 10, 10);    

  // Runs state machine at determined framerate
  controller.update();

  // After we've updated our states, we show the current one 
  display.show();


}

