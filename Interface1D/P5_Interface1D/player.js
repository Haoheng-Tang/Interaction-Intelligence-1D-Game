
// This holds some player information, like color and position.
// It also has some player methods for managing how a player moves.


class Player {
  
    constructor(_color, _position, _displaySize) {
        this.playerColor = _color;
        this.position = _position;
        this.boolean = 0;
        this.displaySize = _displaySize;
    }

    // Move player based on keyboard input
    move(_direction) {

        // increments or decrements player position
        this.position = this.position + _direction;
      
        // once the pixel drops to the ground, loop around
        if (this.position == this.displaySize) {
            this.position = parseInt(random(-10,5));
            // clear the negative point
            m=n;
            if(p>=1){
                p=0;
            }
        } 
        else if(this.position == ponding[0].position-1){
            n++;

            if(n>m){
                missed = n-m;
            }
            else{
                missed = 0;
            }

            console.log(print('missed=',missed));
            for (let i=0; i<10; i++){
                ponding[i].position = ponding[i].position- parseInt(p) - missed;
            }
            if(p>=1){
                precipitation.play();
            }
            if(playerOne.boolean == 0){
                precipitation.play();
            }
        }
         
    } 

    //Change player's color
    changecol(){
        this.playerColor = color(150, 0, 0);
    }
  }