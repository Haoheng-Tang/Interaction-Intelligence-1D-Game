
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
                display.setPixel(ttarget.position, ttarget.playerColor);
                display.setPixel(ttargettail.position, ttargettail.playerColor);
                display.setPixel(ttargettaill.position, ttargettaill.playerColor);                
                
                display.setPixel(target2.position, target2.playerColor);
                display.setPixel(target2tail.position, target2tail.playerColor);
                display.setPixel(target2taill.position, target2taill.playerColor);
                display.setPixel(ttarget2.position, ttarget2.playerColor);
                display.setPixel(ttarget2tail.position, ttarget2tail.playerColor);
                display.setPixel(ttarget2taill.position, ttarget2taill.playerColor);

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
                if (ttdirect == -1){
                    ttarget.move(-1);
                    ttargettail.move(-1);
                    ttargettaill.move(-1);
                }
                else if(ttdirect == 1){
                    ttarget.move(1);
                    ttargettail.move(1);
                    ttargettaill.move(1);
                }
                if(target.position == playerTwo.position){
                    bloodTwo --;
                    target.position =-1;
                    targettail.position = -1;
                    targettaill.position = -1;
                    tdirect =0;
                    playerTwo.playerColor = color(20*10/bloodTwo,200*10/bloodTwo,255*10/bloodTwo);
                }
                if(ttarget.position == playerTwo.position){
                    bloodTwo --;
                    ttarget.position =-1;
                    ttargettail.position = -1;
                    ttargettaill.position = -1;
                    ttdirect =0;
                    playerTwo.playerColor = color(20*10/bloodTwo,200*10/bloodTwo,255*10/bloodTwo);
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
                if (tt2direct == -1){
                    ttarget2.move(-1);
                    ttarget2tail.move(-1);
                    ttarget2taill.move(-1);
                }
                else if(tt2direct == 1){
                    ttarget2.move(1);
                    ttarget2tail.move(1);
                    ttarget2taill.move(1);
                }
                if(target2.position == playerOne.position){
                    bloodOne --;
                    target2.position =-2;
                    target2tail.position = -2;
                    target2taill.position = -2;
                    t2direct = 0;
                    playerOne.playerColor = color(255*10/bloodOne,140*10/bloodOne,40*10/bloodOne);
                }
                if(ttarget2.position == playerOne.position){
                    bloodOne --;
                    ttarget2.position =-2;
                    ttarget2tail.position = -2;
                    ttarget2taill.position = -2;
                    tt2direct = 0;
                    playerOne.playerColor = color(255*10/bloodOne,140*10/bloodOne,40*10/bloodOne);
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
                if(target.position == ttarget2.position || target.position == ttarget2tail.position || target.position == ttarget2taill.position || ttarget2.position == targettail.position || ttarget2.position == targettaill.position){
                    target.position =-1;
                    targettail.position = -1;
                    targettaill.position = -1;
                    tdirect =0;
                    ttarget2.position =-2;
                    ttarget2tail.position = -2;
                    ttarget2taill.position = -2;
                    tt2direct = 0;
                    drumroll.play();
                }
                if(ttarget.position == target2.position || ttarget.position == target2tail.position || ttarget.position == target2taill.position || target2.position == ttargettail.position || target2.position == ttargettaill.position){
                    ttarget.position =-1;
                    ttargettail.position = -1;
                    ttargettaill.position = -1;
                    ttdirect =0;
                    target2.position =-2;
                    target2tail.position = -2;
                    target2taill.position = -2;
                    t2direct = 0;
                    drumroll.play();
                }
                if(ttarget.position == ttarget2.position || ttarget.position == ttarget2tail.position || ttarget.position == ttarget2taill.position || ttarget2.position == ttargettail.position || ttarget2.position == ttargettaill.position){
                    ttarget.position =-1;
                    ttargettail.position = -1;
                    ttargettaill.position = -1;
                    ttdirect =0;
                    ttarget2.position =-2;
                    ttarget2tail.position = -2;
                    ttarget2taill.position = -2;
                    tt2direct = 0;
                    drumroll.play();
                }


                if(bloodOne <= 0 || bloodTwo <= 0){
                    losinggame.play();
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
        if(target.position == -1){
            target.position = playerOne.position;
            targettail.position = target.position+1;
            targettaill.position = target.position+2;
            tdirect=-1;
            drumbeat.play();
        }
        else if(ttarget.position == -1){
            ttarget.position = playerOne.position;
            ttargettail.position = ttarget.position+1;
            ttargettaill.position = ttarget.position+2;
            ttdirect=-1;
            drumbeat.play();
        }
        else{
            misfire.play();
        }
    }   

    if (key == 'G' || key == 'g') {
        if(target.position == -1){
            target.position = playerOne.position;
            targettail.position = target.position-1;
            targettaill.position = target.position-2;
            tdirect=1;
            drumbeat.play();
        }
        else if(ttarget.position == -1){
            ttarget.position = playerOne.position;
            ttargettail.position = ttarget.position-1;
            ttargettaill.position = ttarget.position-2;
            ttdirect=1;
            drumbeat.play();
        }
        else{
            misfire.play();
        }

    }   

    //For playerTwo
    if (keyCode == '37') {
        playerTwo.move(-1);
    }

    if (keyCode == '39') {
        playerTwo.move(1);
    }   

    if (keyCode == '188') {
        if(target2.position == -2){
            target2.position = playerTwo.position;
            target2tail.position = target2.position+1;
            target2taill.position = target2.position+2
            t2direct=-1;
            drumbeat.play();
        }
        else if(ttarget2.position == -2){
            ttarget2.position = playerTwo.position;
            ttarget2tail.position = ttarget2.position+1;
            ttarget2taill.position = ttarget2.position+2
            tt2direct=-1;
            drumbeat.play();
        }
        misfire.play();
    }   

    if (keyCode == '190') {
        if(target2.position == -2){
            target2.position = playerTwo.position;
            target2tail.position = target2.position-1;
            target2taill.position = target2.position-2
            t2direct = 1;
            drumbeat.play();
        }
        else if(ttarget2.position == -2){
            ttarget2.position = playerTwo.position;
            ttarget2tail.position = ttarget2.position-1;
            ttarget2taill.position = ttarget2.position-2
            tt2direct = 1;
            drumbeat.play();
        }
        else{
            misfire.play();
        }
    }   


    // When you press the letter R, the game resets back to the play state
    if (key == 'R' || key == 'r') {
        bloodOne = 10;
        bloodTwo = 10;

        playerOne.playerColor = color(255*10/bloodOne,140*10/bloodOne,40*10/bloodOne);
        target.position =-1;
        targettail.position = -1;
        targettaill.position = -1;
        tdirect =0;
        target2.position =-2;
        target2tail.position = -2;
        target2taill.position = -2;
        t2direct = 0;
        
        playerTwo.playerColor = color(20*10/bloodTwo,200*10/bloodTwo,255*10/bloodTwo);
        ttarget.position =-1;
        ttargettail.position = -1;
        ttargettaill.position = -1;
        ttdirect =0;
        ttarget2.position =-2;
        ttarget2tail.position = -2;
        ttarget2taill.position = -2;
        tt2direct = 0;
        controller.gameState = "PLAY";
    }
}