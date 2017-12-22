import Phaser from 'phaser'
import BouncingGifts from '../sprites/BouncingGifts';
import MerryChristmas from '../sprites/MerryChristmas';

import Config from '../config'

export default class extends Phaser.State {
  init () {
    this.game = game
  }

  preload () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
  }

  create () {
    const background = new Phaser.Sprite(game, 0, 0, 'livingroom')
    this.game.add.existing(background)

    this.bouncingGifts = new BouncingGifts(this.game, Config.width / 2, 0);
    this.timer = game.time.create(false);
    this.timer.loop(1000, this.playbox , this);
    this.timer.start();
    this.box = game.add.audio('box')
    setTimeout(() => {
      this.merryChristmasCard = new MerryChristmas(this.game);
    }, 6000)
  }
  playbox() { this.box.play(); this.timer.stop(); }
  render () {}
}
