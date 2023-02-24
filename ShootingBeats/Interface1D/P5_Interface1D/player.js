
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
        if (this.position >= displaySize) {
            this.position = 0;
        } 
        else if(this.position <= 0){
            this.position = displaySize-1;
        }
         
    } 

    //Change player's color
    changecol(){
        this.playerColor = color(150, 0, 0);
    }
  }