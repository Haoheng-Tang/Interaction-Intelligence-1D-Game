
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

                // display kits
                display.setPixel(kit.position, kit.playerColor);
                display.setPixel(kit2.position, kit2.playerColor);
                display.setPixel(kit3.position, kit3.playerColor);
                display.setPixel(kit4.position, kit4.playerColor);
                display.setPixel(kit5.position, kit5.playerColor);
                display.setPixel(kit6.position, kit4.playerColor);
                display.setPixel(kit7.position, kit5.playerColor);

                // now add the lasers
                for(let i=0;i<laserlength;i++){
                    display.setPixel(laser[i].position, laser[i].playerColor);
                }    
                for(let i=0;i<laserlength;i++){
                    display.setPixel(laser2[i].position, laser2[i].playerColor);
                }  

                // add explosion array
                for(let i=0;i<displaySize;i++){
                    display.setPixel(explosion[i].position, explosion[i].playerColor);
                }
                for(let i=displaySize;i<2*displaySize;i++){
                    display.setPixel(explosion[i].position, explosion[i].playerColor);
                }

                for(let i=0;i<displaySize;i++){
                    display.setPixel(explosion2[i].position, explosion2[i].playerColor);
                }
                for(let i=displaySize;i<2*displaySize;i++){
                    display.setPixel(explosion2[i].position, explosion2[i].playerColor);
                }

                // the targets and their tails
                display.setPixel(targettaill.position, targettaill.playerColor);             
                display.setPixel(ttargettaill.position, ttargettaill.playerColor);

                display.setPixel(ttargettail.position, ttargettail.playerColor);
                display.setPixel(targettail.position, targettail.playerColor);

                display.setPixel(target.position, target.playerColor);
                display.setPixel(ttarget.position, ttarget.playerColor);
          

                display.setPixel(target2taill.position, target2taill.playerColor);
                display.setPixel(ttarget2taill.position, ttarget2taill.playerColor);

                display.setPixel(target2tail.position, target2tail.playerColor);
                display.setPixel(ttarget2tail.position, ttarget2tail.playerColor);

                display.setPixel(target2.position, target2.playerColor);
                display.setPixel(ttarget2.position, ttarget2.playerColor);

                // show all players in the right place, by adding them to display buffer
                display.setPixel(playerOne.position, playerOne.playerColor);
                display.setPixel(playerTwo.position, playerTwo.playerColor);

                //move function
                //playerOne: a&d
                if(keyIsDown(65) && seqtimer%2 == 0 && seqtimer>0){
                    playerOne.move(-1);
                }
                if(keyIsDown(68) && seqtimer%2 == 0 && seqtimer>0){
                    playerOne.move(1);
                }
                //playerTwo: b&m
                if(keyIsDown(66) && seqtimer2%2 == 0 && seqtimer2>0){
                    playerTwo.move(-1);
                }
                if(keyIsDown(77) && seqtimer2%2 == 0 && seqtimer2>0){
                    playerTwo.move(1);
                }


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
                if(target.position == playerTwo.position || (target.position +1 == playerTwo.position && tdirect < 0) || (target.position-1 == playerTwo.position && tdirect > 0)){
                    bloodTwo = bloodTwo - force;
                    target.position =-1;
                    targettail.position = -1;
                    targettaill.position = -1;
                    playerTwo.playerColor = color(20,200-70*(life-bloodTwo)/life,255-98*(life-bloodTwo)/life);
                    bass.play();
                    if (playerTwo.position >= playerOne.position- 3 && playerTwo.position <= playerOne.position){
                        playerTwo.move(-18);
                    }
                    else if (playerTwo.position <= playerOne.position+ 3 && playerTwo.position >= playerOne.position){
                        playerTwo.move(18);
                    }
                    else{
                        playerTwo.move(tdirect);
                    }
                    tdirect =0;

                }
                if(ttarget.position == playerTwo.position  || (ttarget.position +1 == playerTwo.position && ttdirect < 0) || (ttarget.position-1 == playerTwo.position && ttdirect > 0)){
                    bloodTwo = bloodTwo- force;
                    ttarget.position =-1;
                    ttargettail.position = -1;
                    ttargettaill.position = -1;
                    playerTwo.playerColor = color(20,200-70*(life-bloodTwo)/life,255-98*(life-bloodTwo)/life);
                    bass.play();
                    if (playerTwo.position >= playerOne.position- 3 && playerTwo.position <= playerOne.position){
                        playerTwo.move(-18);
                    }
                    else if (playerTwo.position <= playerOne.position+ 3 && playerTwo.position >= playerOne.position){
                        playerTwo.move(18);
                    }
                    else{
                        playerTwo.move(ttdirect);
                    }
                    ttdirect =0;
                }
                for (let i=0; i<laserlength; i++){
                    if(laser[i].position == playerTwo.position && laserhurt == true){
                        bloodTwo = bloodTwo- force;
                        laserhurt = false;
                        playerTwo.playerColor = color(20,200-70*(life-bloodTwo)/life,255-98*(life-bloodTwo)/life);
                        bass.play();
                        if (playerTwo.position > playerOne.position){
                            playerTwo.move(35);
                        }
                        if (playerTwo.position < playerOne.position){
                            playerTwo.move(-35);
                        }
                        sequence = [];
                        setTimeout(function(){
                            laserhurt = true;
                        },2000)
                    }
                }
                for (let i=0; i<2*displaySize; i++){
                    if(explosion[i].position == playerTwo.position && explhurt == true){
                        bloodTwo = bloodTwo- 8;
                        explhurt = false;
                        playerTwo.playerColor = color(250, 10, 10);
                        sequence = [];
                        num = num-2;
                        target.position = -1;
                        targettail.position = -1;
                        targettaill.position = -1;
                        ttarget.position = -1;
                        ttargettail.position = -1;
                        ttargettaill.position = -1;
                        tdirect = 0;
                        ttdirect = 0;
                        setTimeout(function(){
                            for(let i=0; i<displaySize; i++){
                                explosion[i].position = 100+i}
                            for(let i=displaySize; i<2*displaySize; i++){ 
                                explosion[i].position = -100-i}
                            explhurt = true;
                        playerTwo.playerColor = color(20,200-70*(life-bloodTwo)/life,255-98*(life-bloodTwo)/life);
                        },1000)
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

                if(target2.position == playerOne.position || (target2.position+1 == playerOne.position && t2direct < 0) || (target2.position-1 == playerOne.position && t2direct > 0)){
                    bloodOne = bloodOne- force2;
                    playerOne.playerColor = color(255-98*(life-bloodOne)/life,150-40*(life-bloodOne)/life,50);
                    target2.position =-2;
                    target2tail.position = -2;
                    target2taill.position = -2;
                    bass.play();
                    if (playerOne.position >= playerTwo.position- 4 && playerOne.position <= playerTwo.position){
                        playerOne.move(-18);
                    }
                    else if (playerOne.position <= playerTwo.position+ 4 && playerOne.position >= playerTwo.position){
                        playerOne.move(18);
                    }
                    else{
                        playerOne.move(t2direct);
                    }
                    t2direct = 0;
                }
                if(ttarget2.position == playerOne.position || (ttarget2.position +1 == playerOne.position && tt2direct <0)|| (ttarget2.position-1 == playerOne.position && tt2direct >0)){
                    bloodOne = bloodOne- force2;
                    ttarget2.position =-2;
                    ttarget2tail.position = -2;
                    ttarget2taill.position = -2;
                    playerOne.playerColor = color(255-98*(life-bloodOne)/life,150-40*(life-bloodOne)/life,50);
                    bass.play();
                    if (playerOne.position >= playerTwo.position- 3 && playerOne.position <= playerTwo.position){
                        playerOne.move(-18);
                    }
                    else if (playerOne.position <= playerTwo.position+ 3 && playerOne.position >= playerTwo.position){
                        playerOne.move(18);
                    }
                    else{
                        playerOne.move(tt2direct);
                    }
                    tt2direct = 0;
                }
                for (let i=0; i<laserlength; i++){
                    if(laser2[i].position == playerOne.position && laserhurt2 == true){
                        bloodOne = bloodOne- force2;
                        laserhurt2 = false;
                        playerOne.playerColor = color(255-98*(life-bloodOne)/life,150-40*(life-bloodOne)/life,50);

                        bass.play();
                        if (playerOne.position > playerTwo.position){
                            playerOne.move(35);
                        }
                        if (playerOne.position < playerTwo.position){
                            playerOne.move(-35);
                        }
                        sequence2 = [];
                        setTimeout(function(){
                            laserhurt2 = true;
                        },2000)
                    }
                }
                for (let i=0; i<2*displaySize; i++){
                    if(explosion2[i].position == playerOne.position && explhurt2 == true){
                        bloodOne = bloodOne- 8;
                        playerOne.playerColor = color(250,10,10);
                        explhurt2 = false;
                        sequence2 = [];
                        num2 = num2-2;
                        target2.position = -1;
                        target2tail.position = -1;
                        target2taill.position = -1;
                        ttarget2.position = -1;
                        ttarget2tail.position = -1;
                        ttarget2taill.position = -1;
                        t2direct = 0;
                        tt2direct = 0;
                        setTimeout(function(){
                            for(let i=0; i<displaySize; i++){
                                explosion2[i].position = 100+i}
                            for(let i=displaySize; i<2*displaySize; i++){ 
                                explosion2[i].position = -100-i}
                            explhurt2 = true;
                            playerOne.playerColor = color(255-98*(life-bloodOne)/life,150-40*(life-bloodOne)/life,50);
                        },1000)
                    }
                }




                if(target.position == target2.position || target.position == target2tail.position || target.position == target2taill.position || target2.position == targettail.position || target2.position == targettaill.position){
                    if(target.playerColor.levels[0] == 167 && target2.playerColor.levels[0] != 140){
                        target2.position =-2;
                        target2tail.position = -2;
                        target2taill.position = -2;
                        t2direct = 0;
                    }
                    else if(target.playerColor.levels[0] != 167 && target2.playerColor.levels[0] == 140){
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
                    if(target.playerColor.levels[0] == 167 && ttarget2.playerColor.levels[0] != 140){
                        ttarget2.position =-2;
                        ttarget2tail.position = -2;
                        ttarget2taill.position = -2;
                        tt2direct = 0;
                    }
                    else if(target.playerColor.levels[0] != 167 && ttarget2.playerColor.levels[0] == 140){
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
                    if(ttarget.playerColor.levels[0] != 167 && target2.playerColor.levels[0] == 140){
                        ttarget.position =-1;
                        ttargettail.position = -1;
                        ttargettaill.position = -1;
                        ttdirect =0;
                    }
                    else if(ttarget.playerColor.levels[0] == 167 && target2.playerColor.levels[0] != 140){
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
                    if(ttarget.playerColor.levels[0] == 167 && ttarget2.playerColor.levels[0] != 140){
                        ttarget2.position =-2;
                        ttarget2tail.position = -2;
                        ttarget2taill.position = -2;
                        tt2direct = 0;
                    }
                    else if(ttarget.playerColor.levels[0] != 167 && ttarget2.playerColor.levels[0] == 140){
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
                if(playerOne.position == kit4.position){
                    bonus.play();
                    kit4.position = -10;
                    num++;
                }
                if(playerOne.position == kit5.position){
                    bonus.play();
                    kit5.position = -10;
                    num++;
                }
                if(playerOne.position == kit6.position){
                    bonus.play();
                    kit6.position = -10;
                    num++;
                }
                if(playerOne.position == kit7.position){
                    bonus.play();
                    kit7.position = -10;
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
                if(playerTwo.position == kit4.position){
                    bonus.play();
                    kit4.position = -10;
                    num2++;
                }
                if(playerTwo.position == kit5.position){
                    bonus.play();
                    kit5.position = -10;
                    num2++;
                }
                if(playerTwo.position == kit6.position){
                    bonus.play();
                    kit6.position = -10;
                    num2++;
                }
                if(playerTwo.position == kit7.position){
                    bonus.play();
                    kit7.position = -10;
                    num2++;
                }


                if(bloodOne <= 0 || bloodTwo <= 0){
                    wingame.play();
                    this.gameState = "SCORE";   // go to SCORE state
                }


                // All the time-related thing

                timer++;

                if(timer == 250 || timer == 500){
                    if(kit.position == -10){
                        kit.position = parseInt(random(0,displaySize));
                    }
                    if(kit2.position == -10){
                        kit2.position = parseInt(random(0,displaySize));
                    }
                    if(kit3.position == -10){
                        kit3.position = parseInt(random(0,displaySize));
                    }
                    if(kit4.position == -10){
                        kit4.position = parseInt(random(0,displaySize));
                    }
                    if(kit5.position == -10){
                        kit5.position = parseInt(random(0,displaySize));
                    }
                    if(kit6.position == -10){
                        kit6.position = parseInt(random(0,displaySize));
                    }
                    if(kit7.position == -10){
                        kit7.position = parseInt(random(0,displaySize));
                    }
                }

                if(timer == 500){
                    timer = 0;
                }

                if(timer >= lasertime + 15){
                    for(let i=0;i<laserlength;i++){
                        laser[i].position = 100+i;
                    }
                    lasertime=1000;     
                }
                if(timer >= lasertime2 + 15){
                    for(let i=0;i<laserlength;i++){
                        laser2[i].position = 100+i;
                    }
                    lasertime2=1000;     
                }

                if(timer >= expltime + 15){
                    for(let i=0; i<displaySize; i++){
                        explosion[i].position = 100+i}
                    for(let i=displaySize; i<2*displaySize; i++){ 
                        explosion[i].position = -100-i}
                    expltime = 1000;
                }
                if(timer >= expltime2 + 15){
                    for(let i=0; i<displaySize; i++){
                        explosion2[i].position = 100+i}
                    for(let i=displaySize; i<2*displaySize; i++){ 
                        explosion2[i].position = -100-i}  
                    expltime2 = 1000;
                }

                seqtimer++;
                seqtimer2++;

                break;


            // Game is over. Show winner and clean everything up so we can start a new game.
            case "SCORE":       

                //light up winner's color by populating all pixels in buffer with their color
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



function laseratck(seq, lasr, key1, key2, user, direct){
    if (seq[seq.length-1] == key1 && seq[seq.length-2] == key2 && seq[seq.length-3] == key1){
        for(let i=0; i<laserlength; i++){
            lasr[i].position = user.position+i*direct;
        }
        lasershoot.play();
    }
}


function explode(seq, exp, key1, key2, user){
    if (seq[seq.length-1] == key2 && seq[seq.length-2] == key1){
        for(let i=0; i<displaySize; i++){
            exp[i].position = user.position+i;
        }
        for(let i=displaySize; i<2*displaySize; i++){
            exp[i].position = user.position-(i-displaySize);
        }
        laserexpl.play();
    }
}

function keyPressed() {
    // for playerOne
    if (key == 'A' || key == 'a') {
        playerOne.move(-1);
        if (seqtimer<seqthreshold){
            sequence.push('A')
        }
        else{
            sequence=[];
            sequence[0]='A';
        }
        seqtimer = 0;
    }

    if (key == 'D' || key == 'd') {
        playerOne.move(1);
        if (seqtimer<seqthreshold){
            sequence.push('D')
        }
        else{
            sequence=[];
            sequence[0]='D';
        }
        seqtimer = 0;
    }   

    if (key == 'F' || key == 'f') {
        if (seqtimer< seqthreshold){
            sequence.push('F');

            laseratck(sequence, laser, "F", "A", playerOne, -1);
            if(timer < 485){
                lasertime = timer;
            }else{
                lasertime = timer-500;
            }
        }
        else{
            sequence=[];
            sequence[0]='F';
        }

            if(target.position == -1){
                tdirect=-1;

                if(sequence[sequence.length-1]=="F" && sequence[sequence.length-2] == "A"){
                    target.position = playerOne.position - remotedist;
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
                    target.playerColor = color(213,213,127);
                    targettail.playerColor = color(113,113,53);
                    targettaill.playerColor = color(33,33,13);
                    drumbeat.play();
                }
                if(num > 0){
                    force = 2;
                    target.playerColor = color(167, 53, 27);
                    targettail.playerColor = color(113, 40, 13);
                    targettaill.playerColor = color(113, 27, 3);
                    num--;
                    canonshoot.play();
                }

            }

            else if(ttarget.position == -1){
                ttdirect=-1;

                if(sequence[sequence.length-1]=="F" && sequence[sequence.length-2] == "A"){
                    ttarget.position = playerOne.position - remotedist;
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
                    ttarget.playerColor = color(213,213,127);
                    ttargettail.playerColor = color(113,113,53);
                    ttargettaill.playerColor = color(33,33,13);
                    drumbeat.play();
                }
                if(num > 0){
                    force = 2;
                    ttarget.playerColor = color(167, 53, 27);
                    ttargettail.playerColor = color(113, 40, 13);
                    ttargettaill.playerColor = color(113, 27, 3);
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
            laseratck(sequence, laser, "G", "D", playerOne, 1);
                if(timer < 485){
                    lasertime = timer;
                }else{
                    lasertime = timer-500;
                }
        }
        else{
            sequence=[];
            sequence[0]='G';
        }   

            if(target.position == -1){
                tdirect=1;

                if(sequence[sequence.length-1]=="G" && sequence[sequence.length-2] == "D"){
                    target.position = playerOne.position + remotedist;
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
                    target.playerColor = color(213,213,127);
                    targettail.playerColor = color(113,113,53);
                    targettaill.playerColor = color(33,33,13);
                    drumbeat.play();
                }
                if(num > 0){
                    if(num >= 2){
                        explode(sequence, explosion, "A", "G", playerOne);
                        sequence = [];
                        if(timer < 485){
                            expltime = timer;
                        }else{
                            expltime = timer-500;
                        }
                    }
                    else{
                        force = 2;
                        target.playerColor = color(167, 53, 27);
                        targettail.playerColor = color(113, 40, 13);
                        targettaill.playerColor = color(113, 27, 3);
                        num--;
                        canonshoot.play();
                    }

                }
                seqtimer = 0;
            }
            else if(ttarget.position == -1){
                ttdirect=1;

                if(sequence[sequence.length-1]=="G" && sequence[sequence.length-2] == "D"){
                    ttarget.position = playerOne.position + remotedist;
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
                    ttarget.playerColor = color(213,213,127);
                    ttargettail.playerColor = color(113,113,53);
                    ttargettaill.playerColor = color(33,33,13);
                    drumbeat.play();
                }
                if(num > 0){
                    force = 2;
                    ttarget.playerColor = color(167, 53, 27);
                    ttargettail.playerColor = color(113, 40, 13);
                    ttargettaill.playerColor = color(113, 27, 3);
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
    if (key == 'B' || key == 'b') {
        playerTwo.move(-1);
        if (seqtimer2 < seqthreshold){
            sequence2.push('B')
        }
        else{
            sequence2=[];
            sequence2[0]='B';
        }
        seqtimer2 = 0;
    }

    if (key == 'M' || key == 'm') {
        playerTwo.move(1);
        if (seqtimer2 < seqthreshold){
            sequence2.push('M')
        }
        else{
            sequence2=[];
            sequence2[0]='M';
        }
        seqtimer2 = 0;
    }   

    if (keyCode == '188') {  // key: <
        if (seqtimer2< seqthreshold){
            sequence2.push('188')
            laseratck(sequence2, laser2, "188", 'B', playerTwo, -1);
            if(timer < 485){
                lasertime2 = timer;
            }else{
                lasertime2 = timer-500;
            }
        }
        else{
            sequence2=[];
            sequence2[0]='188';
        }    

            if(target2.position == -2){
                t2direct=-1;

                if(sequence2[sequence2.length-1]=="188" && sequence2[sequence2.length-2] == 'B'){
                    target2.position = playerTwo.position - remotedist;
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
                    target2.playerColor = color(113,140,140);
                    target2tail.playerColor = color(33,73,73);
                    target2taill.playerColor = color(3,40,40);
                    drumbeat.play();
                }
                if(num2 > 0){
                    force2 = 2;
                    target2.playerColor = color(140, 40, 153);
                    target2tail.playerColor = color(133, 27, 133);
                    target2taill.playerColor = color(67, 13, 67);
                    num2--;
                    canonshoot.play();
                }
            }
            else if(ttarget2.position == -2){
                tt2direct=-1;

                if(sequence2[sequence2.length-1]=="188" && sequence2[sequence2.length-2] == 'B'){
                    tttarget2.position = playerTwo.position - remotedist;
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
                    ttarget2.playerColor = color(113,140,140);
                    ttarget2tail.playerColor = color(33,73,73);
                    ttarget2taill.playerColor = color(3,40,40);
                    drumbeat.play();
                }
                if(num2 > 0){
                    force2 = 2;
                    ttarget2.playerColor = color(140, 40, 153);
                    ttarget2tail.playerColor = color(133, 27, 133);
                    ttarget2taill.playerColor = color(67, 13, 67);
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
            laseratck(sequence2, laser2, "190", "M", playerTwo, 1);
            if(timer < 485){
                lasertime2 = timer;
            }else{
                lasertime2 = timer-500;
            }
        }
        else{
            sequence2=[];
            sequence2[0]='190';
        }  

            if(target2.position == -2){
                t2direct = 1;

                if(sequence2[sequence2.length-1]=="190" && sequence2[sequence2.length-2] == "M"){
                    target2.position = playerTwo.position + remotedist;
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
                    target2.playerColor = color(113,140,140);
                    target2tail.playerColor = color(33,73,73);
                    target2taill.playerColor = color(3,40,40);
                    drumbeat.play();
                }
                if(num2 > 0){
                    if(num2 >= 2){
                        explode(sequence2, explosion2, 'B', "190", playerTwo);
                        sequence2 = [];
                        if(timer < 485){
                            expltime2 = timer;
                        }else{
                            expltime2 = timer-500;
                        }
                    }
                    else{
                        force2 = 2;
                        target2.playerColor = color(140, 40, 153);
                        target2tail.playerColor = color(133, 27, 133);
                        target2taill.playerColor = color(67, 13, 67);
                        num2--;
                        canonshoot.play();
                    }
                }
            }

            else if(ttarget2.position == -2){
                tt2direct = 1;

                if(sequence2[sequence2.length-1]=="190" && sequence2[sequence2.length-2] == "M"){
                    ttarget2.position = playerTwo.position + remotedist;
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
                    ttarget2.playerColor = color(113,140,140);
                    ttarget2tail.playerColor = color(33,73,73);
                    ttarget2taill.playerColor = color(3,40,40);
                    drumbeat.play();
                }
                if(num2 > 0){
                    force2 = 2;
                    ttarget2.playerColor = color(140, 40, 153);
                    ttarget2tail.playerColor = color(133, 27, 133);
                    ttarget2taill.playerColor = color(67, 13, 67);
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
        bloodOne = life;
        bloodTwo = life;

        playerOne.position = parseInt(random(0,displaySize));
        playerOne.playerColor = color(255-98*(life-bloodOne)/life,150-40*(life-bloodOne)/life,50);
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
        for(let i=0; i<laserlength; i++){
            laser[i].position = 100+i;
        }
        for(let i=0; i<displaySize; i++){
            explosion[i].position = 100+i}
        for(let i=displaySize; i<2*displaySize; i++){ 
            explosion[i].position = -100-i}

        playerTwo.position = parseInt(random(0,displaySize));
        playerTwo.playerColor = color(20,200-70*(life-bloodTwo)/life,255-98*(life-bloodTwo)/life);
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
        for(let i=0; i<laserlength; i++){
            laser2[i].position = 100+i;
        }
        for(let i=0; i<displaySize; i++){
            explosion2[i].position = 100+i}
        for(let i=displaySize; i<2*displaySize; i++){ 
            explosion2[i].position = -100-i}

        kit.position = parseInt(random(0,displaySize));
        kit2.position = parseInt(random(0,displaySize));
        kit3.position = parseInt(random(0,displaySize));
        kit4.position = parseInt(random(0,displaySize));
        kit5.position = parseInt(random(0,displaySize));
        kit6.position = parseInt(random(0,displaySize));
        kit7.position = parseInt(random(0,displaySize));

        controller.gameState = "PLAY";
    }
}