import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.game = game;
  }
  preload () {}
  create () {
    const background = new Phaser.Sprite(game, 0, 0, 'bg');
    this.game.add.existing(background);
    this.sprite = game.add.sprite(game.world.centerX, -200, 'present-1');
    this.sprite.anchor.set(0.5);
    game.add.tween(this.sprite).to({ y: game.world.centerY }, 4000, null, true)
  }
  render () {}
}
