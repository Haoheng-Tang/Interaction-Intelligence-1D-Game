/* /////////////////////////////////////

  4.043 / 4.044 Design Studio: Interaction Intelligence
  February  9, 2023
  Marcelo Coelho

  If you come from Processing, there is a Processing version here. 
  Keep in mind that there are some differences between both versions:
  https://github.com/marcelocoelho/Interface1D

*/ /////////////////////////////////////


let displaySize = 80;   // how many pixels are visible in the game
let pixelSize = 17;     // how big should they look on screen

let playerOne;    // Adding playerOne to the game
let bloodOne = 4; // The times that playOne can be hit by bullets
let target;       // and one target for players to catch.
let targettail;   // tail1 following the target.
let targettaill;  // tail2 following the target.
let tdirect =0;   // target 1 direction.  

let playerTwo;     // Adding playerTwo to the game
let bloodTwo = 4;  // The times that playOne can be hit by bullets
let target2;       // and aonther target for players to catch.
let target2tail;   // tail1 following the target2.
let target2taill;  // tail2 following the target2.
let t2direct =0;   // target 2 direction.  

let display;      // Aggregates our final visual output before showing it on the screen

let controller;   // This is where the state machine and game logic lives

let drumbeat;     // Sound that will play when left clicked

let drumroll;     // Sound that will play when right clicked

let precipitation;  // Sound that will play when the pixel drops



function preload(){
  drumbeat = loadSound('drumbt.mp3');
  drumroll = loadSound('drumroll.mp3');
  losinggame = loadSound('losing.mp3');
  precipitation = loadSound('game-ball-tap.mp3');
}

function setup() {
  createCanvas((displaySize*pixelSize), pixelSize);     // dynamically sets canvas size

  display = new Display(displaySize, pixelSize);        //Initializing the display

  playerOne = new Player(color(255,140,40), parseInt(random(0,displaySize)), displaySize);   // Initializing players
  playerTwo = new Player(color(20,200,255), parseInt(random(0,displaySize)), displaySize);   // Initializing players

  target = new Player(color(240,240,160), -1, displaySize);    // Initializing target using the Player class  
  targettail = new Player(color(140,140,100), -1, displaySize);    // Initializing targettail using the Player class
  targettaill = new Player(color(70,70,40), -1, displaySize);    // Initializing targettail using the Player class

  target2 = new Player(color(140,255,255), -1, displaySize);    // Initializing target using the Player class
  target2tail = new Player(color(70,140,140), -1, displaySize);    // Initializing targettail using the Player class
  target2taill = new Player(color(10,90,90), -1, displaySize);    // Initializing targettail using the Player class

  controller = new Controller();            // Initializing controller

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

