
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
                //display.setPixel(targethead.position, targethead.playerColor);
                //display.setPixel(targetheadd.position, targetheadd.playerColor);
                for(let i=0;i<10;i++){
                    display.setPixel(ponding[i].position, ponding[i].playerColor);
                }

                target.move(1);
                targethead.position = target.position + 1;
                targetheadd.position = target.position + 2;
                targettail.position = target.position - 1;
                targettaill.position = target.position - 2;

                //change target color
                if(targettaill.position > 40){
                    target.playerColor = color(30, 30, 30);
                    targettail.playerColor = color(10, 10, 10);
                    targettaill.playerColor = color(0, 0, 0);
                }
                else if(targetheadd.position < 40){
                    target.playerColor = color(230,230,255);
                    targettail.playerColor = color(110,110,200);
                    targettaill.playerColor = color(30,30,160);
                }

                if (ponding[0].position <= playerOne.position)  {
                    //play sound
                    losinggame.play();
                    this.gameState = "COLLISION";   // go to COLLISION state
                }
                
                break;


            // This state is used to play an animation, after a target has been caught by a player 
            case "COLLISION":


                // play explosion animation one frame at a time.
                // first figure out what frame to show
                let frameToShow = collisionAnimation.currentFrame();    // this grabs number of current frame and increments it 
                
                // then grab every pixel of frame and put it into the display buffer
                for(let i = 0; i < collisionAnimation.pixels; i++) {
                    display.setPixel(i,collisionAnimation.animation[frameToShow][i]);                    
                }

                //check if animation is done and we should move on to another state
                if (frameToShow == collisionAnimation.animation.length-1)  {
                    
                    // We've hit score max, this player wins
                    if (playerOne.score >= score.max) {
                        score.winner = playerOne.playerColor;   // store winning color in score.winner
                        this.gameState = "SCORE";               // go to state that displays score

                        // We haven't hit the max score yet, keep playing    
                    } else {
                        target.position = 0;  // move the target to a new random position
                        this.gameState = "PLAY";    // back to play state
                    }
                } 

                break;


            // Game is over. Show winner and clean everything up so we can start a new game.
            case "SCORE":       
            
                // reset everyone's score
                playerOne.score = 0;

                // put the target somewhere else, so we don't restart the game with player and target in the same place
                target.position = parseInt(random(1,displaySize));

                //light up w/ winner color by populating all pixels in buffer with their color
                display.setAllPixels(score.winner);      
                

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
    if(playerOne.position == target.position){
        playerOne.playerColor = color(0, 255, 0);
        console.log(p);
    }
    else if(playerOne.position == targettail.position || playerOne.position == targethead.position){
        playerOne.playerColor = color(60, 255, 60);
        p = p+0.25;
        console.log(p);
    }
    else if(playerOne.position == targettaill.position || playerOne.position == targetheadd.position){
        playerOne.playerColor = color(160, 255, 160);
        p = p+0.5;
        console.log(p);
    }
    else{
        playerOne.playerColor = color(240, 255, 240);
        p = p+1;
        console.log(p);
    }

    if (mouseButton === LEFT){
        drumbeat.play();
    }
    else if(mouseButton === CENTER){
        drumroll.play();
    }

    m++;
    console.log(print('m=', m));
    
}

/*
function mousePressed(){
    drumbeat.stop();
}
*/