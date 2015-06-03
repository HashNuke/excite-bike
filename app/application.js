"use strict";

var Game = require("game");

var App = {
  init: function init() {
    console.log('App initialized.');


    let startGame = function() {
      Game.init()
    }

    document.getElementById("start-game").addEventListener("click", startGame)

    let gameContainer = d3.select(".game-container")
    gameContainer.style({"background-color": "black", "height": "200px"});
  }
};

module.exports = App;
