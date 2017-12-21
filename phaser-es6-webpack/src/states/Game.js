/* globals __DEV__ */
import Phaser from 'phaser'
import Gifts from '../sprites/Gifts'

export default class extends Phaser.State {
  init () {
    this.game = game;
  }
  preload () {

  }

  create () {
    const background = new Phaser.Sprite(game, 0, 0, 'bg');
    this.game.add.existing(background);

    this.gifts = new Gifts(this.game)
  }

  render () {
  }
}
