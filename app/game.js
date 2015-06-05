"use strict";


var GameConfig = require("game-config"),
    Player = require("player");

class Game {
  constructor() {
    console.log("Init game");
    console.log(this);
    this.players = [new Player(true)];
    this.drawTrack();
  }

  container() {
    return d3.select(GameConfig.gameContainerSelector);
  }

  drawTrack() {

    let trackTopY = GameConfig.getHeight() * 0.4,
        trackHeight = GameConfig.getHeight() * 0.4;

    this.container().append("rect")
      .attr({
        x: 0,
        y: trackTopY,
        width: GameConfig.getWidth(),
        height: trackHeight
      })
      .attr("fill", "#D48E28");

    var xInts = [];
    var i = 0;

    let gameWidth = GameConfig.getWidth();
    for(var i = 0; i < gameWidth; i++) {
      if (i == 0 || (i % 16) == 0) {
        xInts.push(i);
        continue;
      }
    }

    this.container().selectAll(".grass1").data(xInts)
      .enter()
      .append("image")
      .attr("class", "grass1")
      .attr("xlink:href", "gray-tile.png")
      .attr("x", function(d) { return d; })
      .attr("y", trackTopY)
      .attr("width", 16)
      .attr("height", 16);

    this.container().selectAll(".grass2").data(xInts)
      .enter()
      .append("image")
      .attr("class", "grass2")
      .attr("xlink:href", "gray-tile-invert.png")
      .attr("x", function(d) { return d; })
      .attr("y", trackTopY + trackHeight)
      .attr("width", 16)
      .attr("height", 16);

  }

  drawBackground() {
  }
}

module.exports = Game;
