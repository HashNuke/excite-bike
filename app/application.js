"use strict";

var Game = require("game"),
    GameArea = require("game-area");

var App = {
  init: function init() {
    console.log('App initialized.');
    GameArea.init();

    let startGame = function() {
      Game.init();
    };

    document.getElementById("start-game").addEventListener("click", startGame);
  }
};

module.exports = App;
