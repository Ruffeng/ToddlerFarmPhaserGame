var game = new Phaser.Game(640,360, Phaser.AUTO);

// NEXT VAR NAME AND METHODS NAME ARE COMMON FROM PHASER
var GameState = {
  preload: function(){
    // params ( key, path)
    this.load.image('background', 'assets/images/background.png');
    this.load.image('chicken', 'assets/images/chicken.png');
    this.load.image('horse', 'assets/images/horse.png');
    this.load.image('pig', 'assets/images/pig.png');
    this.load.image('sheep', 'assets/images/sheep3.png');
    this.load.image('arrow', 'assets/images/arrow.png');

  },
  create: function (){
    // Making the world responsible to the screen
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // centerint the world in the center as X as Y
    this.scale.pageAlignHoritzontally = true ;
    this.scale.pageAlignVertically = true ;

    // Creating instance var called background
    // we refer to the game variable and add a sprite
    // coords are(0 = X top, 0 = Y Left, the key of the image that we called background)
    this.background = this.game.add.sprite(0,0, 'background');

    // to center it we can use the world helper that it returns the world
    // of the game
    this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY,'chicken');
    // Problem, we put the image on the center, but starting from 0,0 ( top, left) of
    // the image. We want to put in the center, the center of the image
    // With anchor, we're specifing that we want to center the image taking the center
    // of the image itself.
    // coords are from 0 to 1. Its X / Y , but if you put just 1 param will
    // be applied on both
    // this.chicken.anchor.setTo(0.5,0.5);
     this.chicken.anchor.setTo(0.5);
    // Scaling an mage. Same concepts as ancor: (X,Y). 1 is the normal size
    this.chicken.scale.setTo(2, 1);
    this.horse = this.game.add.sprite(120, 10, 'horse');
    this.horse.scale.setTo(0.5);


    this.pig = this.game.add.sprite(500,300, 'pig');
    this.pig.anchor.setTo(0.5);
    // If You put a negative number, you are fliping the image
    this.pig.scale.setTo(-1,1);


    // Rotation
    this.sheep = this.game.add.sprite(100,250,'sheep');
    this.sheep.scale.setTo(0.5);
    this.sheep.anchor.setTo(0.5);
    // 0 by default. Positive number is clockwise. negative is counter clockwise
    this.sheep.angle = -45;


    // Basic input user
    this.rightArrow = this.game.add.sprite(500,this.game.world.centerY, 'arrow');
    this.rightArrow.anchor.setTo(0.5);
    // Adding custom params for my program
    this.rightArrow.customParams = { direction : 1 };
    this.rightArrow.inputEnabled = true;
    this.rightArrow.input.pixelPerfectClick = true;
    this.rightArrow.events.onInputDown.add(this.switchAnimal, this);




    this.leftArrow = this.game.add.sprite(60,this.game.world.centerY, 'arrow');
    this.leftArrow.anchor.setTo(0.5);
    this.leftArrow.scale.setTo(-1, 1);
    // Adding custom params for my program
    this.leftArrow.customParams = { direction : -1 };

    // Adding a custom listener
    this.leftArrow.inputEnabled = true;
    this.leftArrow.input.pixelPerfectClick = true;
    this.leftArrow.events.onInputDown.add(this.switchAnimal, this);
  },
  update: function() {
    this.sheep.angle += 0.5;
  },
  switchAnimal: function(sprite, event){
    console.log('pressed!');
  },
};

game.state.add('GameState', GameState);
game.state.start('GameState');
