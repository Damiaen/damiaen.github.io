var JohnDeere = JohnDeere || {};

//Loading Game Assets
JohnDeere.Preload = function(){};

JohnDeere.Preload.prototype = {
  preload: function() {
    show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.image('gameTiles', 'assets/images/tiles_spritesheet.png');
    this.load.image('player', 'assets/images/player.png');
    this.load.image('goldCoin', 'assets/images/goldCoin.png');
    this.load.audio('coin', ['assets/audio/coin.ogg', 'assets/audio/coin.mp3']);
  },
  create: function() {
    this.state.start('Game');
  }
};