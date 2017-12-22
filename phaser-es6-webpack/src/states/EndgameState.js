import Phaser from 'phaser'
import BouncingGifts from '../sprites/BouncingGifts';
import MerryChristmas from '../sprites/MerryChristmas';
import SnowflakeSpawner from '../sprites/SnowflakeSpawner'

import Config from '../config'

export default class extends Phaser.State {
  init () {
    this.game = game
  }

  preload () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  create () {
    const background = new Phaser.Sprite(game, 0, 0, 'bg')
    this.game.add.existing(background)

    this.snowflakeSpawner = new SnowflakeSpawner(this.game, 100, 0.5);

    const livingroom = new Phaser.Sprite(game, 0, 0, 'livingroom')
    this.game.add.existing(livingroom)

    this.bouncingGifts = new BouncingGifts(this.game, Config.width / 2, 0);
    this.timer = game.time.create(false);
    this.timer.loop(1000, this.playbox , this);
    this.timer.start();
    this.box = game.add.audio('box')
    setTimeout(() => {
      this.merryChristmasCard = new MerryChristmas(this.game);
    }, 4000)
  }
  playbox() { this.box.play(); this.timer.stop(); }
  render () {}
}
