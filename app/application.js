"use strict";

var App = {
  init: function init() {
      console.log('App initialized.');

      var gameContainer = d3.select(".game-container")
      gameContainer.style({"background-color": "black", "height": "200px"});
  }
};

module.exports = App;
