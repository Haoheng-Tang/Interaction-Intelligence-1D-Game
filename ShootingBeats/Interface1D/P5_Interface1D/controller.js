
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
                display.setPixel(playerTwo.position, playerTwo.playerColor);

                // now add the target and its tail
                display.setPixel(target.position, target.playerColor);
                display.setPixel(targettail.position, targettail.playerColor);
                display.setPixel(targettaill.position, targettaill.playerColor);
                display.setPixel(target2.position, target2.playerColor);
                display.setPixel(target2tail.position, target2tail.playerColor);
                display.setPixel(target2taill.position, target2taill.playerColor);

                if (tdirect == -1){
                    target.move(-1);
                    targettail.move(-1);
                    targettaill.move(-1);
                }
                else if(tdirect == 1){
                    target.move(1);
                    targettail.move(1);
                    targettaill.move(1);
                }
                if(target.position == playerTwo.position){
                    bloodTwo --;
                    target.position =-1;
                    targettail.position = -1;
                    targettaill.position = -1;
                    tdirect =0;
                }


                if (t2direct == -1){
                    target2.move(-1);
                    target2tail.move(-1);
                    target2taill.move(-1);
                }
                else if(t2direct == 1){
                    target2.move(1);
                    target2tail.move(1);
                    target2taill.move(1);
                }
                if(target2.position == playerOne.position){
                    bloodOne --;
                    target2.position =-1;
                    target2tail.position = -1;
                    target2taill.position = -1;
                    t2direct = 0;
                }

                if(target.position == target2.position || target.position == target2tail.position || target.position == target2taill.position || target2.position == targettail.position || target2.position == targettaill.position){
                    target.position =-1;
                    targettail.position = -1;
                    targettaill.position = -1;
                    tdirect =0;
                    target2.position =-2;
                    target2tail.position = -2;
                    target2taill.position = -2;
                    t2direct = 0;

                    drumroll.play();
                }

                if(bloodOne <= 0 || bloodTwo <= 0){
                    this.gameState = "SCORE";   // go to SCORE state
                }


                break;


            // Game is over. Show winner and clean everything up so we can start a new game.
            case "SCORE":       

                //light up w/ winner color by populating all pixels in buffer with their color
                if (bloodOne <= 0){
                    display.setAllPixels(color(20,200,255));
                }
                else if(bloodTwo <= 0){
                    display.setAllPixels(color(255,140,40));   
                }
                   
                

                break;

            // Not used, it's here just for code compliance
            default:
                break;
        }
    }
}



function keyPressed() {
    // for playerOne
    if (key == 'A' || key == 'a') {
        playerOne.move(-1);
    }

    if (key == 'D' || key == 'd') {
        playerOne.move(1);
    }   

    if (key == 'F' || key == 'f') {
        target.position = playerOne.position;
        targettail.position = target.position+1;
        targettaill.position = target.position+2

        tdirect=-1;
        drumbeat.play();
    }   

    if (key == 'G' || key == 'g') {
        target.position = playerOne.position;
        targettail.position = target.position-1;
        targettaill.position = target.position-2
        
        tdirect = 1;
        drumbeat.play();
    }   

    //For playerTwo
    if (keyCode == '37') {
        playerTwo.move(-1);
    }

    if (keyCode == '39') {
        playerTwo.move(1);
    }   

    if (keyCode == '188') {
        target2.position = playerTwo.position;
        target2tail.position = target2.position+1;
        target2taill.position = target2.position+2

        t2direct=-1;
        drumbeat.play();
    }   

    if (keyCode == '190') {
        target2.position = playerTwo.position;
        target2tail.position = target2.position-1;
        target2taill.position = target2.position-2
        
        t2direct = 1;
        drumbeat.play();
    }   


    // When you press the letter R, the game resets back to the play state
    if (key == 'R' || key == 'r') {
        bloodOne = 5;
        bloodTwo = 5;    
        controller.gameState = "PLAY";
    }
}