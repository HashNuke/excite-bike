"use strict";

var GameConfig = require("game-config");


class GameArea {

  constructor() {
    let gameContainer = d3.select("body")
          .insert("svg", ":first-child")
          .attr("class", GameConfig.gameContainerClass)
          .attr("width", GameConfig.getWidth())
          .attr("height", GameConfig.getHeight());
    gameContainer.style("background-color", "black");
  }

};

module.exports = GameArea;
