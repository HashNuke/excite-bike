"use strict";

var Game = require("game"),
    GameArea = require("game-area");

var App = {
  init: function init() {
    console.log('App initialized.');
    GameArea.init();
    d3.select("#start-game").on("click", Game.init);
  }
};

module.exports = App;
