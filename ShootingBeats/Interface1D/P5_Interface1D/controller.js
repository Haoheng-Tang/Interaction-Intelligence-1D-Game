
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

                // now add the target and its tail
                display.setPixel(target.position, target.playerColor);
                display.setPixel(targettail.position, targettail.playerColor);
                display.setPixel(targettaill.position, targettaill.playerColor);
                display.setPixel(ttarget.position, ttarget.playerColor);
                display.setPixel(ttargettail.position, ttargettail.playerColor);
                display.setPixel(ttargettaill.position, ttargettaill.playerColor);
                for(let i=0;i<lazerlength;i++){
                    display.setPixel(lazer[i].position, lazer[i].playerColor);
                }               
                
                display.setPixel(target2.position, target2.playerColor);
                display.setPixel(target2tail.position, target2tail.playerColor);
                display.setPixel(target2taill.position, target2taill.playerColor);
                display.setPixel(ttarget2.position, ttarget2.playerColor);
                display.setPixel(ttarget2tail.position, ttarget2tail.playerColor);
                display.setPixel(ttarget2taill.position, ttarget2taill.playerColor);
                for(let i=0;i<lazerlength;i++){
                    display.setPixel(lazer2[i].position, lazer2[i].playerColor);
                }       

                display.setPixel(kit.position, kit.playerColor);
                display.setPixel(kit2.position, kit2.playerColor);
                display.setPixel(kit3.position, kit2.playerColor);

                // show all players in the right place, by adding them to display buffer
                display.setPixel(playerOne.position, playerOne.playerColor);
                display.setPixel(playerTwo.position, playerTwo.playerColor);


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
                    bloodTwo = bloodTwo - force;
                    target.position =-1;
                    targettail.position = -1;
                    targettaill.position = -1;
                    tdirect =0;
                    //playerTwo.playerColor = color(20*bloodTwo/10,200*bloodTwo/10,255*bloodTwo/10);
                    bass.play();
                    if (playerTwo.position >= playerOne.position- 3 && playerTwo.position <= playerOne.position){
                        playerTwo.move(-18);
                    }
                    if (playerTwo.position <= playerOne.position+ 3 && playerTwo.position >= playerOne.position){
                        playerTwo.move(18);
                    }
                }
                if(ttarget.position == playerTwo.position){
                    bloodTwo = bloodTwo- force;
                    ttarget.position =-1;
                    ttargettail.position = -1;
                    ttargettaill.position = -1;
                    ttdirect =0;
                    //playerTwo.playerColor = color(20*bloodTwo/10,200*bloodTwo/10,255*bloodTwo/10);
                    bass.play();
                    if (playerTwo.position >= playerOne.position- 3 && playerTwo.position <= playerOne.position){
                        playerTwo.move(-18);
                    }
                    if (playerTwo.position <= playerOne.position+ 3 && playerTwo.position >= playerOne.position){
                        playerTwo.move(18);
                    }
                }
                for (let i=0; i<lazerlength; i++){
                    if(lazer[i].position == playerTwo.position){
                        bloodTwo = bloodTwo- force;
                        bass.play();
                        if (playerTwo.position > playerOne.position){
                            playerTwo.move(35);
                        }
                        if (playerTwo.position < playerOne.position){
                            playerTwo.move(-35);
                        }
                    }
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
                    bloodOne = bloodOne- force2;
                    target2.position =-2;
                    target2tail.position = -2;
                    target2taill.position = -2;
                    t2direct = 0;
                    //playerOne.playerColor = color(255*bloodOne/10,140*bloodOne/10,40*bloodOne/10);
                    bass.play();
                    if (playerOne.position >= playerTwo.position- 4 && playerOne.position <= playerTwo.position){
                        playerOne.move(-18);
                    }
                    if (playerOne.position <= playerTwo.position+ 4 && playerOne.position >= playerTwo.position){
                        playerOne.move(18);
                    }
                }
                if(ttarget2.position == playerOne.position){
                    bloodOne = bloodOne- force2;
                    ttarget2.position =-2;
                    ttarget2tail.position = -2;
                    ttarget2taill.position = -2;
                    tt2direct = 0;
                    //playerOne.playerColor = color(255*bloodOne/10,140*bloodOne/10,40*bloodOne/10);
                    bass.play();
                    if (playerOne.position >= playerTwo.position- 3 && playerOne.position <= playerTwo.position){
                        playerOne.move(-18);
                    }
                    if (playerOne.position <= playerTwo.position+ 3 && playerOne.position >= playerTwo.position){
                        playerOne.move(18);
                    }
                }
                for (let i=0; i<lazerlength; i++){
                    if(lazer2[i].position == playerOne.position){
                        bloodOne = bloodOne- force2;
                        bass.play();
                        if (playerOne.position > playerTwo.position){
                            playerOne.move(35);
                        }
                        if (playerOne.position < playerTwo.position){
                            playerOne.move(-35);
                        }
                    }
                }



                if(target.position == target2.position || target.position == target2tail.position || target.position == target2taill.position || target2.position == targettail.position || target2.position == targettaill.position){
                    if(target.playerColor.levels[0] == 250 && target2.playerColor.levels[0] != 210){
                        target2.position =-2;
                        target2tail.position = -2;
                        target2taill.position = -2;
                        t2direct = 0;
                    }
                    else if(target.playerColor.levels[0] != 250 && target2.playerColor.levels[0] == 210){
                        target.position =-1;
                        targettail.position = -1;
                        targettaill.position = -1;
                        tdirect =0;
                    }
                    else{
                        target.position =-1;
                        targettail.position = -1;
                        targettaill.position = -1;
                        tdirect =0;
                        target2.position =-2;
                        target2tail.position = -2;
                        target2taill.position = -2;
                        t2direct = 0;
                    }

                    drumroll.play();
                }

                if(target.position == ttarget2.position || target.position == ttarget2tail.position || target.position == ttarget2taill.position || ttarget2.position == targettail.position || ttarget2.position == targettaill.position){
                    if(target.playerColor.levels[0] == 250 && ttarget2.playerColor.levels[0] != 210){
                        ttarget2.position =-2;
                        ttarget2tail.position = -2;
                        ttarget2taill.position = -2;
                        tt2direct = 0;
                    }
                    else if(target.playerColor.levels[0] != 250 && ttarget2.playerColor.levels[0] == 210){
                        target.position =-1;
                        targettail.position = -1;
                        targettaill.position = -1;
                        tdirect =0;
                    }
                    else{
                        target.position =-1;
                        targettail.position = -1;
                        targettaill.position = -1;
                        tdirect =0;
                        ttarget2.position =-2;
                        ttarget2tail.position = -2;
                        ttarget2taill.position = -2;
                        tt2direct = 0;
                    }
                    drumroll.play();
                }
                
                if(ttarget.position == target2.position || ttarget.position == target2tail.position || ttarget.position == target2taill.position || target2.position == ttargettail.position || target2.position == ttargettaill.position){
                    if(ttarget.playerColor.levels[0] != 250 && target2.playerColor.levels[0] == 210){
                        ttarget.position =-1;
                        ttargettail.position = -1;
                        ttargettaill.position = -1;
                        ttdirect =0;
                    }
                    else if(ttarget.playerColor.levels[0] == 250 && target2.playerColor.levels[0] != 210){
                        target2.position =-2;
                        target2tail.position = -2;
                        target2taill.position = -2;
                        t2direct = 0;
                    }
                    else{
                        ttarget.position =-1;
                        ttargettail.position = -1;
                        ttargettaill.position = -1;
                        ttdirect =0;
                        target2.position =-2;
                        target2tail.position = -2;
                        target2taill.position = -2;
                        t2direct = 0;
                    }
                    drumroll.play();
                }

                if(ttarget.position == ttarget2.position || ttarget.position == ttarget2tail.position || ttarget.position == ttarget2taill.position || ttarget2.position == ttargettail.position || ttarget2.position == ttargettaill.position){
                    if(ttarget.playerColor.levels[0] == 250 && ttarget2.playerColor.levels[0] != 210){
                        ttarget2.position =-2;
                        ttarget2tail.position = -2;
                        ttarget2taill.position = -2;
                        tt2direct = 0;
                    }
                    else if(ttarget.playerColor.levels[0] != 250 && ttarget2.playerColor.levels[0] == 210){
                        ttarget.position =-1;
                        ttargettail.position = -1;
                        ttargettaill.position = -1;
                        ttdirect =0;
                    }
                    else{
                        ttarget.position =-1;
                        ttargettail.position = -1;
                        ttargettaill.position = -1;
                        ttdirect =0;
                        ttarget2.position =-2;
                        ttarget2tail.position = -2;
                        ttarget2taill.position = -2;
                        tt2direct = 0;
                    }
                    drumroll.play();
                }



                if(playerOne.position == kit.position){
                    bonus.play();
                    kit.position = -10;
                    num++;
                }
                if(playerOne.position == kit2.position){
                    bonus.play();
                    kit2.position = -10;
                    num++;
                }
                if(playerOne.position == kit3.position){
                    bonus.play();
                    kit3.position = -10;
                    num++;
                }

                if(playerTwo.position == kit.position){
                    bonus.play();
                    kit.position = -10;
                    num2++;
                }
                if(playerTwo.position == kit2.position){
                    bonus.play();
                    kit2.position = -10;
                    num2++;
                }
                if(playerTwo.position == kit3.position){
                    bonus.play();
                    kit3.position = -10;
                    num2++;
                }


                if(bloodOne <= 0 || bloodTwo <= 0){
                    wingame.play();
                    this.gameState = "SCORE";   // go to SCORE state
                }

                timer++;

                if(timer == 500){
                    if(kit.position == -10){
                        kit.position = parseInt(random(0,displaySize));
                    }
                    if(kit2.position == -10){
                        kit2.position = parseInt(random(0,displaySize));
                    }
                    if(kit3.position == -10){
                        kit3.position = parseInt(random(0,displaySize));
                    }
                    timer = 0;
                }

                if(timer >= lazertime + 15){
                    for(let i=0;i<lazerlength;i++){
                        lazer[i].position = 100+i;
                    }     
                }
                if(timer >= lazertime2 + 15){
                    for(let i=0;i<lazerlength;i++){
                        lazer2[i].position = 100+i;
                    }     
                }

                seqtimer++;
                seqtimer2++;

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



function lazeratck(seq, lazr, key1, key2, user, direct){
    if (seq[seq.length-1] == key1 && seq[seq.length-2] == key2 && seq[seq.length-3] == key1 && seq[seq.length-4] == key1){
        for(let i=0; i<lazerlength; i++){
            lazr[i].position = user.position+i*direct;
        }
        seq = [];
        lazershoot.play();
    }
}

function keyPressed() {
    // for playerOne
    if (key == 'A' || key == 'a') {
        playerOne.move(-1);
        if (seqtimer<seqthreshold){
            sequence.push('A')
        }
        seqtimer = 0;
    }

    if (key == 'D' || key == 'd') {
        playerOne.move(1);
        if (seqtimer<seqthreshold){
            sequence.push('D')
        }
        seqtimer = 0;
    }   

    if (key == 'F' || key == 'f') {
        if (seqtimer< seqthreshold){
            sequence.push('F');

            lazeratck(sequence, lazer, "F", "A", playerOne, -1);
            if(timer < 485){
                lazertime = timer;
            }else{
                lazertime = timer-500;
            }
        }      

            if(target.position == -1){
                tdirect=-1;

                if(sequence[sequence.length-1]=="F" && sequence[sequence.length-2] == "A"){
                    target.position = playerOne.position - 8;
                    targettail.position = target.position+1;
                    targettaill.position = target.position+2;
                    sequence = [];
                }
                else{
                    target.position = playerOne.position;
                    targettail.position = target.position+1;
                    targettaill.position = target.position+2;
                }

                if(num == 0){
                    force = 1;
                    target.playerColor = color(220,220,140);
                    targettail.playerColor = color(120,120,80);
                    targettaill.playerColor = color(50,50,20);
                    drumbeat.play();
                }
                if(num > 0){
                    force = 2;
                    target.playerColor = color(250, 80, 40);
                    targettail.playerColor = color(170, 60, 20);
                    targettaill.playerColor = color(120, 40, 5);
                    num--;
                    canonshoot.play();
                }
            }

            else if(ttarget.position == -1){
                ttdirect=-1;

                if(sequence[sequence.length-1]=="F" && sequence[sequence.length-2] == "A"){
                    ttarget.position = playerOne.position - 8;
                    ttargettail.position = target.position+1;
                    ttargettaill.position = target.position+2;
                    sequence = [];
                }
                else{
                    ttarget.position = playerOne.position;
                    ttargettail.position = ttarget.position+1;
                    ttargettaill.position = ttarget.position+2;
                }

                if(num == 0){
                    force = 1;
                    ttarget.playerColor = color(220,220,140);
                    ttargettail.playerColor = color(120,120,80);
                    ttargettaill.playerColor = color(50,50,20);
                    drumbeat.play();
                }
                if(num > 0){
                    force = 2;
                    ttarget.playerColor = color(250, 80, 40);
                    ttargettail.playerColor = color(170, 60, 20);
                    ttargettaill.playerColor = color(120, 40, 5);
                    num--;
                    canonshoot.play();
                }
            }
            else{
                misfire.play();
            }

        seqtimer = 0;
    }   

    if (key == 'G' || key == 'g') {
        if (seqtimer< seqthreshold){
            sequence.push('G');
            lazeratck(sequence, lazer, "G", "D", playerOne, 1);
                if(timer < 485){
                    lazertime = timer;
                }else{
                    lazertime = timer-500;
                }
        }      

            if(target.position == -1){
                tdirect=1;

                if(sequence[sequence.length-1]=="G" && sequence[sequence.length-2] == "D"){
                    target.position = playerOne.position + 8;
                    targettail.position = target.position-1;
                    targettaill.position = target.position-2;
                    sequence = [];
                }
                else{                
                    target.position = playerOne.position;
                    targettail.position = target.position-1;
                    targettaill.position = target.position-2;
                }

                if(num == 0){
                    force = 1;
                    target.playerColor = color(220,220,140);
                    targettail.playerColor = color(120,120,80);
                    targettaill.playerColor = color(50,50,20);
                    drumbeat.play();
                }
                if(num > 0){
                    force = 2;
                    target.playerColor = color(250, 80, 40);
                    targettail.playerColor = color(170, 60, 20);
                    targettaill.playerColor = color(120, 40, 5);
                    num--;
                    canonshoot.play();
                }
                seqtimer = 0;
            }
            else if(ttarget.position == -1){
                ttdirect=1;

                if(sequence[sequence.length-1]=="G" && sequence[sequence.length-2] == "D"){
                    ttarget.position = playerOne.position + 8;
                    ttargettail.position = ttarget.position-1;
                    ttargettaill.position = ttarget.position-2;
                    sequence = [];
                }
                else{  
                    ttarget.position = playerOne.position;
                    ttargettail.position = ttarget.position-1;
                    ttargettaill.position = ttarget.position-2;
                }

                if(num == 0){
                    force = 1;
                    ttarget.playerColor = color(220,220,140);
                    ttargettail.playerColor = color(120,120,80);
                    ttargettaill.playerColor = color(50,50,20);
                    drumbeat.play();
                }
                if(num > 0){
                    force = 2;
                    ttarget.playerColor = color(250, 80, 40);
                    ttargettail.playerColor = color(170, 60, 20);
                    ttargettaill.playerColor = color(120, 40, 5);
                    num--;
                    canonshoot.play();
                }

            }
            else{
                misfire.play();
            }

        seqtimer = 0;
    }   

    //For playerTwo
    if (keyCode == '37') {   //Left arrow
        playerTwo.move(-1);
        if (seqtimer2 < seqthreshold){
            sequence2.push('37')
        }
    }
    seqtimer2 = 0;

    if (keyCode == '39') {   //Right arrow
        playerTwo.move(1);
        if (seqtimer2 < seqthreshold){
            sequence2.push('39')
        }
        seqtimer2 = 0;
    }   

    if (keyCode == '188') {  // key: <
        if (seqtimer2< seqthreshold){
            sequence2.push('188')
            if (sequence2[sequence2.length-1] == "188" && sequence2[sequence2.length-2] == "37" && sequence2[sequence2.length-3] == "188" && sequence2[sequence2.length-4] == "188"){
                for(let i=0; i<lazerlength; i++){
                    lazer2[i].position = playerTwo.position-i;
                }
                if(timer < 485){
                    lazertime2 = timer;
                }else{
                    lazertime2 = timer-500;
                }
                sequence2 = [];
                lazershoot.play();
            }
        }      

            if(target2.position == -2){
                t2direct=-1;

                if(sequence2[sequence2.length-1]=="188" && sequence2[sequence2.length-2] == "37"){
                    target2.position = playerTwo.position - 8;
                    target2tail.position = target2.position+1;
                    target2taill.position = target2.position+2;
                    sequence2 = [];
                }
                else{
                    target2.position = playerTwo.position;
                    target2tail.position = target2.position+1;
                    target2taill.position = target2.position+2
                }

                if(num2 == 0){
                    force2 = 1;
                    target2.playerColor = color(120,210,210);
                    target2tail.playerColor = color(50,110,110);
                    target2taill.playerColor = color(5,60,60);
                    drumbeat.play();
                }
                if(num2 > 0){
                    force2 = 2;
                    target2.playerColor = color(210, 60, 230);
                    target2tail.playerColor = color(150, 40, 150);
                    target2taill.playerColor = color(100, 20, 100);
                    num2--;
                    canonshoot.play();
                }
            }
            else if(ttarget2.position == -2){
                tt2direct=-1;

                if(sequence2[sequence2.length-1]=="188" && sequence2[sequence2.length-2] == "37"){
                    tttarget2.position = playerTwo.position - 8;
                    ttarget2tail.position = ttarget2.position+1;
                    ttarget2taill.position = ttarget2.position+2;
                    sequence2 = [];
                }
                else{
                    ttarget2.position = playerTwo.position;
                    ttarget2tail.position = ttarget2.position+1;
                    ttarget2taill.position = ttarget2.position+2
                }
                if(num2 == 0){
                    force2 = 1;
                    ttarget2.playerColor = color(120,210,210);
                    ttarget2tail.playerColor = color(50,110,110);
                    ttarget2taill.playerColor = color(5,60,60);
                    drumbeat.play();
                }
                if(num2 > 0){
                    force2 = 2;
                    ttarget2.playerColor = color(210, 60, 230);
                    ttarget2tail.playerColor = color(150, 40, 150);
                    ttarget2taill.playerColor = color(100, 20, 100);
                    num2--;
                    canonshoot.play();
                }
                force2 = 1;
            }
            else{
                misfire.play();
            }

        seqtimer2 = 0;
    }   

    if (keyCode == '190') {  //key: >
        if (seqtimer2< seqthreshold){
            sequence2.push('190')
            if (sequence2[sequence2.length-1] == "190" && sequence2[sequence2.length-2] == "39" && sequence2[sequence2.length-3] == "190" && sequence2[sequence2.length-4] == "190"){
                for(let i=0; i<lazerlength; i++){
                    lazer2[i].position = playerTwo.position+i;
                }
                if(timer < 485){
                    lazertime2 = timer;
                }else{
                    lazertime2 = timer-500;
                }
                sequence2 = [];
                lazershoot.play();
            }
        }      

            if(target2.position == -2){
                t2direct = 1;

                if(sequence2[sequence2.length-1]=="190" && sequence2[sequence2.length-2] == "39"){
                    target2.position = playerTwo.position + 8;
                    target2tail.position = target2.position-1;
                    target2taill.position = target2.position-2;
                    sequence2 = [];
                }
                else{
                    target2.position = playerTwo.position;
                    target2tail.position = target2.position-1;
                    target2taill.position = target2.position-2
                }

                if(num2 == 0){
                    force2 = 1;
                    target2.playerColor = color(120,210,210);
                    target2tail.playerColor = color(50,110,110);
                    target2taill.playerColor = color(5,60,60);
                    drumbeat.play();
                }
                if(num2 > 0){
                    force2 = 2;
                    target2.playerColor = color(210, 60, 230);
                    target2tail.playerColor = color(150, 40, 150);
                    target2taill.playerColor = color(100, 20, 100);
                    num2--;
                    canonshoot.play();
                }
            }

            else if(ttarget2.position == -2){
                tt2direct = 1;

                if(sequence2[sequence2.length-1]=="190" && sequence2[sequence2.length-2] == "39"){
                    ttarget2.position = playerTwo.position + 8;
                    ttarget2tail.position = ttarget2.position-1;
                    ttarget2taill.position = ttarget2.position-2;
                    sequence2 = [];
                }
                else{
                    ttarget2.position = playerTwo.position;
                    ttarget2tail.position = ttarget2.position-1;
                    ttarget2taill.position = ttarget2.position-2
                }

                if(num2 == 0){
                    force2 = 1;
                    ttarget2.playerColor = color(120,210,210);
                    ttarget2tail.playerColor = color(50,110,110);
                    ttarget2taill.playerColor = color(5,60,60);
                    drumbeat.play();
                }
                if(num2 > 0){
                    force2 = 2;
                    ttarget2.playerColor = color(210, 60, 230);
                    ttarget2tail.playerColor = color(150, 40, 150);
                    ttarget2taill.playerColor = color(100, 20, 100);
                    num2--;
                    canonshoot.play();
                }
            }
            else{
                misfire.play();
            }
            seqtimer2 = 0;

    }

    // When you press the letter R, the game resets back to the play state
    if (key == 'R' || key == 'r') {
        bloodOne = 20;
        bloodTwo = 20;

        playerOne.position = parseInt(random(0,displaySize));
        //playerOne.playerColor = color(255*bloodOne/10,140*bloodOne/10,40*bloodOne/10);
        target.position =-1;
        targettail.position = -1;
        targettaill.position = -1;
        tdirect =0;
        target2.position =-2;
        target2tail.position = -2;
        target2taill.position = -2;
        t2direct = 0;
        force = 1;
        num = 0;
        sequence = [];
        for(let i=0; i<lazerlength; i++){
            lazer[i].position = 100+i;
        }

        playerTwo.position = parseInt(random(0,displaySize));
        //playerTwo.playerColor = color(20*bloodTwo/10,200*bloodTwo/10,255*bloodTwo/10);
        ttarget.position =-1;
        ttargettail.position = -1;
        ttargettaill.position = -1;
        ttdirect =0;
        ttarget2.position =-2;
        ttarget2tail.position = -2;
        ttarget2taill.position = -2;
        tt2direct = 0;
        force2 = 1;
        num2 = 0;
        sequence2 = [];
        for(let i=0; i<lazerlength; i++){
            lazer2[i].position = 100+i;
        }

        kit.position = parseInt(random(0,displaySize));
        kit2.position = parseInt(random(0,displaySize));
        kit3.position = parseInt(random(0,displaySize));

        controller.gameState = "PLAY";
    }
}