/* globals __DEV__ */
import Phaser from 'phaser'
import Gifts from '../sprites/Gifts';
import SnowflakeSpawner from '../sprites/SnowflakeSpawner';
import Santa from '../sprites/Santa';
import Sleigh from '../sprites/Sleigh';

export default class extends Phaser.State {
  init () {
    this.game = game;

    this.game.nextScene = new Phaser.Signal();
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

    this.santa = new Santa(this.game, 1000, 600, 'santa')
    this.game.add.existing(this.santa)

    this.snowflakeSpawner2 = new SnowflakeSpawner(this.game, 100, 0.5);
  }

  render () {
  }

  loadNextScene () {
    this.state.start('FallingState');
  }
}
