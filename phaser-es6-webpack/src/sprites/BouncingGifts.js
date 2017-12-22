import Phaser from 'phaser';import Presents from '../sprites/Presents';export default class BouncingGifts extends Phaser.Group {  constructor (game, x, y) {    super(game);    this.x = x;    this.y = y;    game.physics.arcade.gravity.y = 200;    this.game = game;    this.gifts = [];    this.giftsAtFront = [];    this.buildFloor()    this.buildGifts();    this.buildChimney();  }  buildGifts () {    let y = 0    for (let i = 0; i < 5; i += 1) {      const gift = new Phaser.Sprite(this.game, 0, y, Presents.names[i].name);      this.game.physics.arcade.enable(gift);      gift.id = i;      gift.anchor.setTo(0.5, 0.5);      gift.angle = Math.random() * 360      gift.body.velocity.y = 200;      gift.scale.setTo(0.3);      gift.body.bounce.set(0.45, 0.45);      gift.body.allowGravity = true;      gift.body.collideWorldBounds = true;      this.add(gift);      this.gifts.push(gift);      y += Math.random() * 50 + 50;    }    this.arrayCheck = []    for (let i = 0; i < this.gifts.length; i += 1) {      this.arrayCheck.push(0)    }  }  update () {    this.game.physics.arcade.collide(this.floor1, this.gifts[0], this.doAnimation, null, this);    this.game.physics.arcade.collide(this.floor2, this.gifts[1], this.doAnimation, null, this);    this.game.physics.arcade.collide(this.floor3, this.gifts[2], this.doAnimation, null, this);    this.game.physics.arcade.collide(this.floor4, this.gifts[3], this.doAnimation, null, this);    this.game.physics.arcade.collide(this.floor, this.gifts[4], this.doAnimation, null, this);  }  doAnimation (obj1, obj2) {    if (this.arrayCheck[obj2.id] <= 2) {      const factor = Math.pow(2, this.arrayCheck[obj2.id])      this.game.add.tween(obj2.scale)        .to({ x: obj2.scale.x + 0.2 / factor,          y: obj2.scale.y + 0.2 / factor,        }, 1000 / factor, null, true)    }    if (this.arrayCheck[obj2.id] === 0) {      this.game.add.tween(obj2)        .to({          angle: Math.random() > 0.5 ? 360 : -360        }, 2500, Phaser.Easing.Circular.Out, true)      this.game.add.tween(obj2)        .to({          x: obj2.x - (Math.random() - 0.5) * 300,          angle: Math.random() > 0.5 ? 360 : -360        }, 2500, null, true)      this.bringToTop(obj2)      this.bringGiftsToFront();      this.giftsAtFront.push(obj2);      switch (obj2.id) {        case 0:          this.floor2.y += 130;          break;        case 1:          this.floor1.y += 130;          break;        case 2:          this.floor3.y += 130;          break;        case 3:          this.floor4.y += 130;          break;        case 4:          this.floor.y += 130;          break;      }    }    this.arrayCheck[obj2.id] += 1;  }  buildFloor () {    this.floor = new Phaser.Sprite(this.game, -this.x, 550, 'chimney');    this.game.physics.arcade.enable(this.floor);    this.floor.body.allowGravity = false;    this.floor.body.immovable = true;    this.floor.body.moves = false;    this.floor.alpha = 0;    this.add(this.floor)    this.floor1 = new Phaser.Sprite(this.game, -this.x, 470, 'chimney');    this.game.physics.arcade.enable(this.floor1);    this.floor1.body.allowGravity = false;    this.floor1.body.immovable = true;    this.floor1.body.moves = false;    this.floor1.alpha = 0;    this.add(this.floor1)    this.floor2 = new Phaser.Sprite(this.game, -this.x, 500, 'chimney');    this.game.physics.arcade.enable(this.floor2);    this.floor2.body.allowGravity = false;    this.floor2.body.immovable = true;    this.floor2.body.moves = false;    this.floor2.alpha = 0;    this.add(this.floor2)    this.floor3 = new Phaser.Sprite(this.game, -this.x, 510, 'chimney');    this.game.physics.arcade.enable(this.floor3);    this.floor3.body.allowGravity = false;    this.floor3.body.immovable = true;    this.floor3.body.moves = false;    this.floor3.alpha = 0;    this.add(this.floor3)    this.floor4 = new Phaser.Sprite(this.game, -this.x, 550, 'chimney');    this.game.physics.arcade.enable(this.floor4);    this.floor4.body.allowGravity = false;    this.floor4.body.immovable = true;    this.floor4.body.moves = false;    this.floor4.alpha = 0;    this.add(this.floor4)  }  buildChimney () {    const fireplace = new Phaser.Sprite(game, -this.x, 0, 'fireplace')    this.add(fireplace);  }  bringGiftsToFront () {    for (let i = this.giftsAtFront.length - 1; i >= 0; i -= 1) {      this.bringToTop(this.giftsAtFront[i])    }  }}