var Jumpgame = function() {};
Jumpgame.Play = function() {};

Jumpgame.Play.prototype = {

  preload: function() {
    this.load.spritesheet('hero', 'assets/img/player.png', 32, 48);
    this.load.image('pixel', 'assets/img/Pixel.png' );
    this.load.image('ground', 'assets/img/ground.png');
    this.load.image('background', 'assets/img/bg1.png');

    this.load.audio('bg_music', 'assets/audio/bg_audio.mp3');

    this.load.audio('scoresound', 'assets/audio/scoresound.wav');

    this.time.advancedTiming = true;
  },

  create: function() {
    //background
    this.background = game.add.tileSprite(0, 0, 600, 1000, 'background');
    this.stage.backgroundColor = '#1050AB';

    //start background music
    this.bg_music = this.game.add.audio('bg_music');
    this.bg_music.volume = 0.05;
    this.bg_music.loop = true;
    this.bg_music.play();

    //Coin pickup sound
    this.scoresound = this.game.add.audio('scoresound');
    this.scoresound.volume = 0.1;


    // scaling
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.maxWidth = this.game.width;
    this.scale.maxHeight = this.game.height;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize( true );

    // physics
    this.physics.startSystem( Phaser.Physics.ARCADE );

    this.cameraYMin = 99999;
    this.platformYMin = 99999;


    this.platformsCreate();

    //Score counter
    this.score = 0;  
    this.scoreText = game.add.text(20, 20, "0", { font: "28px Arial", fill: "#ffffff" });
    this.scoreText.fixedToCamera = true;


    this.heroCreate();
    this.hero.body.bounce.y = 0;
    this.hero.animations.add('left', [0, 1, 2, 3], 10, true);
    this.hero.animations.add('right', [5, 6, 7, 8], 10, true);

    // cursor controls
    this.cursor = this.input.keyboard.createCursorKeys();
  },

  update: function() {

    this.world.setBounds( 0, -this.hero.yChange, this.world.width, this.game.height + this.hero.yChange );

    this.cameraYMin = Math.min( this.cameraYMin, this.hero.y - this.game.height + 130 );
    this.camera.y = this.cameraYMin;

    // hero collisions and movement
    this.physics.arcade.collide( this.hero, this.platforms );
    this.heroMove();

    //platform spawn zooi
    this.platforms.forEachAlive( function( elem ) {
      this.platformYMin = Math.min( this.platformYMin, elem.y );
      if( elem.y > this.camera.y + this.game.height ) {
        elem.kill();
        this.score += 1;  
        this.scoreText.text = this.score; 
        this.scoresound.play(); 
        this.platformsCreateOne( this.rnd.integerInRange( 0, this.world.width - 50 ), this.platformYMin - 100, 50 );
      }
    }, this );
  },

  shutdown: function() { // reset everything
    this.bg_music.stop();
    this.world.setBounds( 0, 0, this.game.width, this.game.height );
    this.cursor = null;
    this.hero.destroy();
    this.hero = null;
    this.platforms.destroy();
    this.platforms = null;
  },

  platformsCreate: function() {
    // platform
    this.platforms = this.add.group();
    this.platforms.enableBody = true;
    this.platforms.createMultiple( 10, 'pixel' );

    //ground
    this.platformsCreateOne( -16, this.world.height - 16, this.world.width + 16 );
    //platforms
    for( var i = 0; i < 9; i++ ) {
      this.platformsCreateOne( this.rnd.integerInRange( 0, this.world.width - 50 ), this.world.height - 100 - 100 * i, 50 );
    }
  },

  platformsCreateOne: function( x, y, width ) {
    var platform = this.platforms.getFirstDead();
    platform.reset( x, y );
    platform.scale.x = width;
    platform.scale.y = 16;
    platform.body.immovable = true;
    return platform;
  },

  heroCreate: function() {
    // basic hero setup
    this.hero = game.add.sprite( this.world.centerX, this.world.height - 36, 'hero' );
    this.hero.anchor.set( 0.5 );
  
    this.hero.yOrig = this.hero.y;
    this.hero.yChange = 0;

    //collisions
    this.physics.arcade.enable( this.hero );
    this.hero.body.gravity.y = 500;
    this.hero.body.checkCollision.up = false;
    this.hero.body.checkCollision.left = false;
    this.hero.body.checkCollision.right = false;
  },

  heroMove: function() {
    if( this.cursor.left.isDown ) {
      this.hero.body.velocity.x = -200;
      this.hero.animations.play('left');

    } else if( this.cursor.right.isDown ) {
      this.hero.body.velocity.x = 200;
      this.hero.animations.play('right');

    } else {
      this.hero.body.velocity.x = 0;
      this.hero.animations.stop();
      this.hero.frame = 4;
    }

    if( this.cursor.up.isDown && this.hero.body.touching.down ) {
      this.hero.body.velocity.y = -380;
    } 
    
    this.hero.yChange = Math.max( this.hero.yChange, Math.abs( this.hero.y - this.hero.yOrig ) );
    
    //if dead reset game
    if( this.hero.y > this.cameraYMin + this.game.height && this.hero.alive ) {
      this.state.start( 'Play' );
    }
  }
};

var game = new Phaser.Game( 400, 600, Phaser.CANVAS, '' );
game.state.add( 'Play', Jumpgame.Play );
game.state.start( 'Play' );