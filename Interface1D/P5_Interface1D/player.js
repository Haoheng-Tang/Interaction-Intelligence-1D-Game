
// This holds some player information, like color and position.
// It also has some player methods for managing how a player moves.


class Player {
  
    constructor(_color, _position, _displaySize) {
        this.playerColor = _color;
        this.position = _position;
        this.score = 0;
        this.displaySize = _displaySize;
    }

    // Move player based on keyboard input
    move(_direction) {

        // increments or decrements player position
        this.position = this.position + _direction;
      
        // if player hits the edge of display, loop around
        if (this.position == -1) {
            this.position = this.displaySize - 1;
        } else if (this.position == this.displaySize) {
            this.position = parseInt(random(-10,5));
        } else if(this.position == ponding[0].position-1){
            for (let i=0; i<10; i++){
                ponding[i].position = 50+i- parseInt(p) - missed;
            }
            n++;
            console.log(print('n=',n));

            missed = n-m;
        }
         
    } 

    //Change player's color
    changecol(){
        this.playerColor = color(150, 0, 0);
    }
  }