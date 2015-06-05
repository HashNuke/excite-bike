"use strict";

class Player {
  constructor(bindControls=false) {
    console.log("Init player");

    if(bindControls) {
      d3.select("body").on("keydown", () => {
        let action = this.getActionForKey(d3.event.which);
        console.log(action);
      });

      d3.select("body").on("keyup", ()=>{
        let action = this.getActionForKey(d3.event.which);
        console.log(action);
      });
    }
  }


  getActionForKey(key) {
    // up arrow or w
    if(key == 38 || key == 87) return "up";

    // down arrow or s
    if(key == 40 || key == 83) return "down";

    // left arrow or a
    if(key == 37 || key == 65) return "left";

    // right arrow or d
    if(key == 39 || key == 68) return "right";

    return null;
  }
}

module.exports = Player;
