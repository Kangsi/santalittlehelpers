/* globals __DEV__ */
import Phaser from 'phaser'
import Gifts from '../sprites/Gifts';
import SnowflakeSpawner from '../sprites/SnowflakeSpawner';
import Santa from '../sprites/Santa';
import Sleigh from '../sprites/Sleigh';
import Icicle from '../sprites/Icicle';
import Arrow from '../sprites/Arrow';
import Particles from '../sprites/Particles';

export default class extends Phaser.State {
  init () {
    this.game = game;

    this.game.nextScene = new Phaser.Signal();
    this.game.firstClick = new Phaser.Signal();
    this.game.doParticles = new Phaser.Signal();
  }
  preload () {
    this.game.nextScene.add(() => {
      this.loadNextScene();
    });
  }

  create () {

    const background = new Phaser.Sprite(game, 0, 0, 'bg');
    this.game.add.existing(background);

    this.snowflakeSpawner1 = new SnowflakeSpawner(this.game, 100, 0.25);

    this.sleigh = new Sleigh(this.game, 0, 80, 'sleigh');
    this.game.add.existing(this.sleigh);

    this.gifts = new Gifts(this.game, 640, 500, 640, 360)

    const house = new Phaser.Sprite(game, 0, 0, 'house')
    this.game.add.existing(house);

    this.icicle = new Icicle(this.game, 1100, 586, 'icicle', 1, 1);
    this.game.add.existing(this.icicle);

    this.icicle1 = new Icicle(this.game, 1230, 580, 'icicle', 1.3, -1);
    this.game.add.existing(this.icicle1);

    this.icicle2 = new Icicle(this.game, 1120, 570, 'icicle', 0.8, 1);
    this.game.add.existing(this.icicle2);

    this.icicle3 = new Icicle(this.game, 1205, 558, 'icicle', 1.1, -1);
    this.game.add.existing(this.icicle3);

    this.santa = new Santa(this.game, 1000, 550, 'santa')
    this.game.add.existing(this.santa)

    this.particles = new Particles(this.game);

    this.snowflakeSpawner2 = new SnowflakeSpawner(this.game, 100, 0.5);

    this.arrow = new Arrow(this.game, 300, 300, 'arrow');
    this.game.add.existing(this.arrow)
  }

  render () {
  }

  loadNextScene () {
    this.state.start('FallingState');
  }
}
