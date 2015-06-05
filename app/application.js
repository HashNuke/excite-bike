"use strict";

var Game = require("game"),
    GameArea = require("game-area");

class App {
  constructor() {
    console.log('App initialized.');
    new GameArea();

    // TODO remove this later
    new Game();

    d3.select("#start-game").on("click", () => new Game());
  }
}

module.exports = App;
