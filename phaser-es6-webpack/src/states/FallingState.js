import Phaser from 'phaser'
import Config from '../config'

export default class extends Phaser.State {
  init () {
    this.game = game;
  }
  preload () {}
  create () {
    const background = new Phaser.Sprite(game, 0, 0, 'chimney');
    this.game.add.existing(background);
    this.sprite = game.add.sprite(game.world.centerX, -200, 'present-1');
    this.sprite.anchor.set(0.5);
    game.add.tween(this.sprite).to({ y: Config.height - this.sprite.centerY }, 2000, null, true)
  }
  render () {}
}
