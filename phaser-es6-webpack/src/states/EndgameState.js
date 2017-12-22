import Phaser from 'phaser'
import BouncingGifts from '../sprites/BouncingGifts';
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

    this.bouncingGifts = new BouncingGifts(this.game, Config.width / 2, 0)


  }

  render () {}
}
