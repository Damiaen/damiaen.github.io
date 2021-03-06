var JohnDeere = JohnDeere || {};

JohnDeere.game = new Phaser.Game(760, 420, Phaser.AUTO, '');

JohnDeere.game.state.add('Boot', JohnDeere.Boot);
JohnDeere.game.state.add('Preload', JohnDeere.Preload);
JohnDeere.game.state.add('Game', JohnDeere.Game);

JohnDeere.game.state.start('Boot');