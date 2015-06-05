"use strict";

var GameConfig = require("game-config"),
    Player = require("player");


var GameArea = {

  init: function() {
    let gameContainer = d3.select("body")
          .insert("svg", ":first-child")
          .attr("class", GameConfig.gameContainerSelector)
          .attr("width", GameConfig.getHeight())
          .attr("height", GameConfig.getWidth());
    gameContainer.style("background-color", "black");
    new Player();
  }

};

module.exports = GameArea;
