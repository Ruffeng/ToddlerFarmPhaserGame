var game = new Phaser.Game(640,360, Phaser.AUTO);

// NEXT VAR NAME AND METHODS NAME ARE COMMON FROM PHASER
var GameState = {
  preload: function(){

  },
  create: function (){

  },
  update: function() {

  },
};

game.state.add('GameState', GameState);
game.state.start('GameState');
