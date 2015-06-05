"use strict";

var Player = require("player");

class Game {
  constructor() {
    console.log("Init game");
    console.log(this);
    this.players = [new Player(true)];
  }

  drawTrack() {
  }

  drawBackground() {
  }
}

module.exports = Game;
