"use strict";

var GameConfig = require("game-config");


class GameArea {

  constructor() {
    let gameContainer = d3.select("body")
          .insert("svg", ":first-child")
          .attr("class", GameConfig.gameContainerSelector)
          .attr("width", GameConfig.getHeight())
          .attr("height", GameConfig.getWidth());
    gameContainer.style("background-color", "black");
  }

};

module.exports = GameArea;
