var game = new Phaser.Game(640,360, Phaser.AUTO);

// NEXT VAR NAME AND METHODS NAME ARE COMMON FROM PHASER
var GameState = {
  preload: function(){
    // params ( key, path)
    this.load.image('background', 'assets/images/background.png');
    this.load.image('chicken', 'assets/images/chicken.png');
  },
  create: function (){
    // Creating instance var called background
    // we refer to the game variable and add a sprite
    // coords are(0 = X top, 0 = Y Left, the key of the image that we called background)
    this.background = this.game.add.sprite(0,0, 'background');
    // to center it we can use the world helper that it returns the world
    // of the game
    this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY,'chicken');
  },
  update: function() {

  },
};

game.state.add('GameState', GameState);
game.state.start('GameState');
