"use strict";

class Player {

  constructor(humanPlayer=false) {
    console.log("Init player");

    this.humanPlayer = humanPlayer;
    this.dead = false;
    this.stopped = false;

    if(humanPlayer) {
      d3.select("body").on("keydown", this.actionForKeyDown.bind(this));
      d3.select("body").on("keyup", this.actionForKeyUp.bind(this));
    }
  }


  canMove() {
    return !this.dead && !this.stopped && this.onGround;
  }


  moveRight() {
    if(!this.canMove()) return false;
    return true;
  }


  moveUp() {
    if(!this.canMove()) return false;
    return true;
  }


  moveDown() {
    if(!this.canMove()) return false;
    return true;
  }


  actionForKeyDown() {
    let actionName = this.actionNameForKey(d3.event.which);

    if(actionName == "right") {
      this.moveRight();
      return;
    }

    if(actionName == "up") {
      this.moveUp();
      return;
    }

    if(actionName == "down") {
      this.moveDown();
      return;
    }
  }


  actionForKeyUp() {
    // TODO movement should slow down
    let actionName = this.actionNameForKey(d3.event.which);

    if(actionName == "right") {
      // this.moveRight();
      return;
    }

    if(actionName == "up") {
      // this.moveUp();
      return;
    }

    if(actionName == "down") {
      // this.moveDown();
      return;
    }
  }


  actionNameForKey(key) {
    // up arrow or w
    if(key == 38 || key == 87) return "up";

    // down arrow or s
    if(key == 40 || key == 83) return "down";

    // left arrow or a
    // if(key == 37 || key == 65) return "left";

    // right arrow or d
    if(key == 39 || key == 68) return "right";

    return null;
  }
}

module.exports = Player;
