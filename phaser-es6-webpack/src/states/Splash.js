import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('particle-star', 'assets/images/particle-star.png')
    this.load.image('particle-cloud', 'assets/images/particle-cloud.png')
    this.load.image('credits', 'assets/images/credits.png')
    this.load.image('icicle', 'assets/images/icicle.png')
    this.load.image('sleigh', 'assets/images/sleigh.png')
    this.load.image('arrow', 'assets/images/arrow.png')
    this.load.image('santa', 'assets/images/santa.png')
    this.load.image('santa-clicked', 'assets/images/santa-clicked.png')
    this.load.image('merry-christmas', 'assets/images/merry-christmas.png')
    this.load.image('shiny', 'assets/images/shiny.png')
    this.load.image('snowflake', 'assets/images/snowflake.png')
    this.load.image('bg', 'assets/images/background.jpg');
    this.load.image('fireplace', 'assets/images/fireplace.png');
    this.load.image('livingroom', 'assets/images/livingroom.png');
    this.load.image('present-1', 'assets/images/present-1.png');
    this.load.image('present-2', 'assets/images/present-2.png');
    this.load.image('present-3', 'assets/images/present-3.png');
    this.load.image('present-4', 'assets/images/present-4.png');
    this.load.image('present-5', 'assets/images/present-5.png');
    this.load.image('house', 'assets/images/house.png')
    this.load.image('chimney', 'assets/images/chimney.jpg')
    this.load.audio('falling', 'assets/audio/falling.ogg');
    this.load.audio('box', 'assets/audio/box.ogg');
    this.load.audio('santa', 'assets/audio/santa.ogg');
    this.load.audio('merryxmas', 'assets/audio/merryxmas.ogg');
    this.load.audio('squeeze', 'assets/audio/squeeze.ogg');

    this.load.onLoadComplete.add(() => {
      this.loadNextState();
    });
  }

  loadNextState () {
    this.state.start('Game')
    this.bgmusic = game.add.audio('bgmusic');
    this.bgmusic.volume = 0.5;
    this.bgmusic.loop = true;
    this.bgmusic.play();
  }
}
