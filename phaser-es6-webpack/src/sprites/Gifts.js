import Phaser from 'phaser'export default class Gifts extends Phaser.Group {  constructor (game) {    super(game);    this.game = game;    this.buildGifts();  }  buildGifts () {    for (let i = 0; i < 10; i += 1) {      const x = Math.random() * 100;      const y = Math.random() * 100;      const sprite = new Phaser.Sprite(this.game, x, y, 'mushroom');      this.add(sprite);    }  }}