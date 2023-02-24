
// This is where your state machines and game logic lives


class Controller {

    // This is the state we start with.
    constructor() {
        this.gameState = "PLAY";
       
    }
    
    // This is called from draw() in sketch.js with every frame
    update() {

        // STATE MACHINE ////////////////////////////////////////////////
        // This is where your game logic lives
        /////////////////////////////////////////////////////////////////
        switch(this.gameState) {

            // This is the main game state, where the playing actually happens
            case "PLAY":

                // clear screen at frame rate so we always start fresh      
                display.clear();
            
                // show all players in the right place, by adding them to display buffer
                display.setPixel(playerOne.position, playerOne.playerColor);

                // now add the target and its tail
                display.setPixel(target.position, target.playerColor);
                display.setPixel(targettail.position, targettail.playerColor);
                display.setPixel(targettaill.position, targettaill.playerColor);

                for(let i=0;i<10;i++){
                    display.setPixel(ponding[i].position, ponding[i].playerColor);
                }

                //target 1 move in a loop
                target.move(1);
                targethead.position = target.position + 1;
                targetheadd.position = target.position + 2;
                targettail.position = target.position - 1;
                targettaill.position = target.position - 2;



                //change target color
                if(targethead.position > 40 && playerOne.boolean==1){
                    target.playerColor = color(50, 50, 50);
                    targettail.playerColor = color(20, 20, 20);
                    targettaill.playerColor = color(0, 0, 0);
                }
                else if(targethead.position < 40){
                    target.playerColor = color(230,230,255);
                    targettail.playerColor = color(110,110,200);
                    targettaill.playerColor = color(30,30,160);
                }


                if (ponding[0].position <= playerOne.position)  {
                    //play sound
                    losinggame.play();
                    this.gameState = "SCORE";   // go to COLLISION state
                }

                break;

            // This is the second stage of the game
            case "PLAY2":

                // clear screen at frame rate so we always start fresh      
                display.clear();
            
                // show all players in the right place, by adding them to display buffer
                display.setPixel(playerOne.position, playerOne.playerColor);

                // now add the target and its tail
                display.setPixel(target.position, target.playerColor);
                display.setPixel(targettail.position, targettail.playerColor);
                display.setPixel(targettaill.position, targettaill.playerColor);
                
                display.setPixel(target2.position, target2.playerColor);
                display.setPixel(target2tail.position, target2tail.playerColor);
                display.setPixel(target2taill.position, target2taill.playerColor);

                for(let i=0;i<10;i++){
                    display.setPixel(ponding[i].position, ponding[i].playerColor);
                }

                //target 1&2 move in a loop
                target.move(1);
                targethead.position = target.position + 1;
                targetheadd.position = target.position + 2;
                targettail.position = target.position - 1;
                targettaill.position = target.position - 2;

                target2.move(1);
                target2head.position = target2.position + 1;
                target2headd.position = target2.position + 2;
                target2tail.position = target2.position - 1;
                target2taill.position = target2.position - 2;



                //change target color
                if(targethead.position > 40 && playerOne.boolean==1){
                    target.playerColor = color(50, 50, 50);
                    targettail.playerColor = color(20, 20, 20);
                    targettaill.playerColor = color(0, 0, 0);
                }
                else if(targethead.position < 40){
                    target.playerColor = color(230,230,255);
                    targettail.playerColor = color(110,110,200);
                    targettaill.playerColor = color(30,30,160);
                }

                if(target2head.position > 40 && playerOne.boolean==1){
                    target2.playerColor = color(50, 50, 0);
                    target2tail.playerColor = color(20, 20, 0);
                    target2taill.playerColor = color(0, 0, 0);
                }
                else if(target2head.position < 40){
                    target2.playerColor = color(230,230,0);
                    target2tail.playerColor = color(110,110,0);
                    target2taill.playerColor = color(30,30,0);
                }

                if (ponding[0].position <= playerOne.position)  {
                    //play sound
                    losinggame.play();
                    this.gameState = "SCORE";   // go to COLLISION state
                }

                break;


            // Game is over. Show winner and clean everything up so we can start a new game.
            case "SCORE":       

                //light up w/ winner color by populating all pixels in buffer with their color
                display.setAllPixels(color(60,60,250));      
                

                break;

            // Not used, it's here just for code compliance
            default:
                break;
        }
    }
}



// This function gets called when the mouse is pressed
/*
function keyPressed(e) {
    
    if (e.keyCode == UP_ARROW) {
    playerOne.move(-1);
    }   
    
    if (e.keyCode == DOWN_ARROW) {
    playerOne.move(1);
    }    

}
*/
var p = 0;

function mousePressed(){
    if (mouseButton === LEFT){
        if(playerOne.position == target.position){
          playerOne.playerColor = color(0, 255, 0);
           playerOne.boolean = 1; // succeed in catching the pixel
           console.log("p=",p);
       }
       else if(playerOne.position == targettail.position || playerOne.position == targethead.position){
           playerOne.playerColor = color(90, 200, 90);
          playerOne.boolean = 1; // succeed in catching the pixel
           console.log("p=",p);
       }
       else if(playerOne.position == targettaill.position || playerOne.position == targetheadd.position){
          playerOne.playerColor = color(20, 120, 20);
          playerOne.boolean = 1; // fail to catch the pixel
          p = p+0.5;
          console.log("p=",p);
       }
       else{
          playerOne.playerColor = color(120, 120, 120);
         playerOne.boolean = 0; // fail to catch the pixel
         p = p+1;
         console.log("p=",p);
        }
        drumbeat.play();
    }
    else if(mouseButton === CENTER){
        if(playerOne.position == target2.position){
            playerOne.playerColor = color(0, 255, 0);
             playerOne.boolean = 1; // succeed in catching the pixel
             console.log("p=",p);
         }
         else if(playerOne.position == target2tail.position || playerOne.position == target2head.position){
             playerOne.playerColor = color(90, 200, 90);
            playerOne.boolean = 1; // succeed in catching the pixel
             console.log("p=",p);
         }
         else if(playerOne.position == target2taill.position || playerOne.position == target2headd.position){
            playerOne.playerColor = color(20, 120, 20);
            playerOne.boolean = 1; // fail to catch the pixel
            p = p+0.5;
            console.log("p=",p);
         }
         else{
            playerOne.playerColor = color(120, 120, 120);
           playerOne.boolean = 0; // fail to catch the pixel
           p = p+1;
           console.log("p=",p);
          }
        drumroll.play();
    }

    m++;
    console.log(print('m=', m));
    
}


function keyPressed() {
    // When you press the letter R, the game resets back to the play state
    if (key == 'R' || key == 'r') {
        for(let i=0; i<10; i++){
            ponding[i].position = 50+i}   // Initializing ponding array using the Player class
            
        controller.gameState = "PLAY2";
        }
    }