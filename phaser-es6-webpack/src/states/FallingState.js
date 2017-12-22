import Phaser from 'phaser';
import Config from '../config';
import Presents from '../sprites/Presents';

export default class extends Phaser.State {
  init () {
    this.game = game;
  }
  preload () {}
  create () {
    const background = new Phaser.Sprite(game, 0, 0, 'chimney');
    this.game.add.existing(background);

    var falling;
    falling = game.add.audio('falling');
    falling.volume = 0.1;
    
    falling.play();

    var Present1 = game.add.sprite(Config.width / 2 - 100, -200, Presents.names[0].name);
    var Present2 = game.add.sprite(Config.width / 2, -200, Presents.names[1].name);
    var Present3 = game.add.sprite(Config.width / 2 + 100, -200, Presents.names[2].name);
    var Present4 = game.add.sprite(Config.width / 2 + 150, -200, Presents.names[3].name);
    var Present5 = game.add.sprite(Config.width / 2 - 150, -200, Presents.names[4].name);
    Present1.anchor.set(0.5);
    Present2.anchor.set(0.5);
    Present3.anchor.set(0.5);
    Present4.anchor.set(0.5);
    Present5.anchor.set(0.5);
    game.add.tween(Present1).to({ y: Config.height - Present1.centerY, angle: Present1.angle + Math.random() * 360 }, Math.random() * 1000 + 1000, null, true, 0);
    game.add.tween(Present2).to({ y: Config.height - Present2.centerY, angle: Present1.angle + Math.random() * 360 }, Math.random() * 1000 + 1000, null, true, 400);
    game.add.tween(Present3).to({ y: Config.height - Present3.centerY, angle: Present1.angle + Math.random() * 360 }, Math.random() * 1000 + 1000, null, true, 800);
    game.add.tween(Present4).to({ y: Config.height - Present4.centerY, angle: Present1.angle + Math.random() * 360 }, Math.random() * 1000 + 1000, null, true, 600);
    game.add.tween(Present5).to({ y: Config.height - Present5.centerY, angle: Present1.angle + Math.random() * 360 }, Math.random() * 1000 + 1000, null, true, 200);

    setTimeout(this.loadNextScene.bind(this), 2500)
  }
  render () {}

  loadNextScene () {
    this.state.start('EndgameState');
  }
}
