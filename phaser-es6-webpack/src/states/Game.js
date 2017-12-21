/* globals __DEV__ */
import Phaser from 'phaser'
import Gifts from '../sprites/Gifts'

export default class extends Phaser.State {
  init () {
    this.game = game;

    this.game.nextScene = new Phaser.Signal();
  }
  preload () {
    this.game.nextScene.add(() => {
      this.loadNextScene();
    })
  }

  create () {
    const background = new Phaser.Sprite(game, 0, 0, 'bg');
    this.game.add.existing(background);

    this.gifts = new Gifts(this.game, 640, 500, 640, 360)

    const house = new Phaser.Sprite(game, 0, 0, 'house')
    this.game.add.existing(house);
  }

  render () {
  }

  loadNextScene () {
    this.state.start('FallingState');
  }
}
