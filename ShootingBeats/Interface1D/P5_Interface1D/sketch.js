/* /////////////////////////////////////

  4.043 / 4.044 Design Studio: Interaction Intelligence
  February  9, 2023
  Marcelo Coelho

  If you come from Processing, there is a Processing version here. 
  Keep in mind that there are some differences between both versions:
  https://github.com/marcelocoelho/Interface1D

*/ /////////////////////////////////////


let displaySize = 70;   // how many pixels are visible in the game
let pixelSize = 23;     // how big should they look on screen

let playerOne;    // Adding playerOne to the game
let bloodOne = 20; // The times that playOne can be hit by bullets
let target;       // and one target for players to catch.
let targettail;   // tail1 following the target.
let targettaill;  // tail2 following the target.
let tdirect =0;   // target 1 direction.  
let ttarget;      // the second bullet for playOne.
let ttargettail;  // tail1 following the second target.
let ttargettaill; // tail2 following the second target.
let ttdirect =0;   // second target 1 direction.
let force = 1;     // to what extend that a bullet from playerOne will hurt playerTwo
let num = 0;       // how many super bullets owned by playerOne
let sequence = []; // Store button sequence
let seqtimer = 0;  // Count time between presses
let lazer = [];    // Lazer emitted by playerOne
let lazertime = 0; // Count the lasting of lazer.

let playerTwo;     // Adding playerTwo to the game
let bloodTwo = 20; // The times that playOne can be hit by bullets
let target2;       // and aonther target for players to catch.
let target2tail;   // tail1 following the target2.
let target2taill;  // tail2 following the target2.
let t2direct =0;   // target 2 direction.  
let ttarget2;      // the second bullet for playTwo
let ttarget2tail;  // tail1 following the second target.
let ttarget2taill; // tail2 following the second target.
let tt2direct =0;   // target 2 direction.  
let force2 = 1;     // to what extend that a bullet from playerTwo will hurt playerOne
let num2 = 0;       // how many super bullets owned by playerTwo
let sequence2 = []; // Store button sequence
let seqtimer2 = 0;  // Count time between presses
let lazer2 = [];    // Lazer emitted by playerTwo
let lazertime2 = 0; // Count the lasting of lazer2.


let lazerlength = 20;  // lazer's length
let seqthreshold = 5;  // sequnce threshold
let remoteshot = 22;  // the distance from the remote-shot bullelt to the player
let kit;          // a kit that can enhance the attack of a player
let kit2;         // another kit that can enhance the attack of a player
let kit3;         // another kit that can enhance the attack of a player

let display;      // Aggregates our final visual output before showing it on the screen

let controller;   // This is where the state machine and game logic lives

let drumbeat;     // Sound that will play 

let drumroll;     // Sound that will play 

let wingame;      // Sound that will play in "SCORE" case

let bass;         // Sound that will play when a player is shot

let hit;          // Sound that will play when a player pick up a kit

let misfire;      // Sound that will play when the pixel drops

let timer=0;       // Count time to distribute kits


function preload(){
  drumbeat = loadSound('shooting.mp3');
  drumroll = loadSound('drumbeat.mp3');
  bass = loadSound('drumbeat.mp3');
  lazershoot = loadSound('lazershoot.mp3');
  canonshoot = loadSound('canon.mp3');
  wingame = loadSound('wingame.mp3');
  bonus = loadSound('bonus.mp3');
  misfire = loadSound('game-ball-tap.mp3');
}

function setup() {
  createCanvas((displaySize*pixelSize), pixelSize);     // dynamically sets canvas size

  display = new Display(displaySize, pixelSize);        //Initializing the display

  playerOne = new Player(color(255,130,40), parseInt(random(0,displaySize)), displaySize);   // Initializing players
  playerTwo = new Player(color(10,170,255), parseInt(random(0,displaySize)), displaySize);   // Initializing players

  target = new Player(color(220,220,140), -1, displaySize);    // Initializing target using the Player class  
  targettail = new Player(color(120,120,80), -1, displaySize);    // Initializing targettail using the Player class
  targettaill = new Player(color(50,50,20), -1, displaySize);    // Initializing targettail using the Player class

  ttarget = new Player(color(220,220,140), -1, displaySize);    // Initializing target using the Player class  
  ttargettail = new Player(color(120,120,80), -1, displaySize);    // Initializing targettail using the Player class
  ttargettaill = new Player(color(50,50,20), -1, displaySize);    // Initializing targettail using the Player class

  for(let i=0; i<lazerlength; i++){
    lazer.push(new Player(color(210-3*i,130-3*i,60-3*i), 100+i, displaySize));}   // Initializing lazer array emitted by playerOne

  target2 = new Player(color(120,210,210), -2, displaySize);    // Initializing target using the Player class
  target2tail = new Player(color(50,110,110), -2, displaySize);    // Initializing targettail using the Player class
  target2taill = new Player(color(5,60,60), -2, displaySize);    // Initializing targettail using the Player class

  ttarget2 = new Player(color(120,210,210), -2, displaySize);    // Initializing target using the Player class
  ttarget2tail = new Player(color(50,110,110), -2, displaySize);    // Initializing targettail using the Player class
  ttarget2taill = new Player(color(5,60,60), -2, displaySize);    // Initializing targettail using the Player class

  for(let i=0; i<lazerlength; i++){
    lazer2.push(new Player(color(60-3*i,120-3*i,190-3*i), 100+i, displaySize));}   // Initializing lazer array emitted by playerTwo

  kit = new Player(color(90,90,90), parseInt(random(0,displaySize)), displaySize);   // Initializing kits
  kit2 = new Player(color(90,90,90), parseInt(random(0,displaySize)), displaySize);   // Initializing kits
  kit3 = new Player(color(90,90,90), parseInt(random(0,displaySize)), displaySize);   // Initializing kits

  controller = new Controller();            // Initializing controller

  frameRate(20);

}

function draw() {

  // start with a blank screen
  background(10, 10, 10);    

  // Runs state machine at determined framerate
  controller.update();

  // After we've updated our states, we show the current one 
  display.show();


}

