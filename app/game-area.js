"use strict";

var GameArea = {

  init: function() {
    let gameContainer = d3.select("body")
          .insert("svg", ":first-child")
          .attr("class", "game-container")
          .attr("width", 480)
          .attr("height", 320);
    gameContainer.style("background-color", "black");
  }

}

module.exports = GameArea;
