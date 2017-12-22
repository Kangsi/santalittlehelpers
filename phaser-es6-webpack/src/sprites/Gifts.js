import Phaser from 'phaser';import Presents from '../sprites/Presents';const array = [  { x: 0, y: 0 },  { x: 20, y: -50 },  { x: -30, y: -120 },  { x: 40, y: -160 },  { x: -30, y: -80 },];const maxSteps = 2;export default class Gifts extends Phaser.Group {  constructor (game, targetX, targetY, x, y) {    super(game)    this.x = x;    this.y = y;    this.game = game;    this.targetX = targetX;    this.targetY = targetY;    this.steps = 0;    this.isMoving = false;    this.buildGifts();    this.game.time.events.loop(Phaser.Timer.SECOND * 2, this.shake, this);  }  buildGifts () {    this.container = new Phaser.Group(this.game, 0, 0);    this.add(this.container);    for (let i = 0; i < Presents.names.length; i += 1) {      const sprite = new Phaser.Sprite(this.game, array[i].x, array[i].y, Presents.names[i].name)      sprite.inputEnabled = true;      sprite.anchor.setTo(0.5);      sprite.angle = (Math.random() - 0.5) * 180;      sprite.scale.setTo(1);      this.container.add(sprite);      sprite.events.onInputDown.add(() => {        if (!this.isMoving) {          if (this.steps >= maxSteps) {            this.isMoving = true;            this.moveToEnd();          } else {            this.isMoving = true;            this.moveToTarget();          }          this.steps += 1;        }      });    }  }  moveToTarget () {    for (let i = 0; i < this.container.children.length; i += 1) {      const deltaX = this.container.children[i].x + this.x > this.targetX ? -Math.random() * 20 - 20 : Math.random() * 20 + 20;      const deltaY = this.container.children[i].y + this.y > this.targetY ? -Math.random() * 40 - 40 : Math.random() * 40 + 40;      const angle = (Math.random() - 0.5) * 50 + this.container.children[i].angle;      var move = this.game.add.tween(this.container.children[i])        .to({x: this.container.children[i].x + deltaX, y: this.container.children[i].y + deltaY, angle}, 500)      move.onComplete.add(() => {        this.isMoving = false;      })      move.start();      this.game.add.tween(this.container.children[i].scale)        .to({ x: this.container.children[i].scale.x - 0.15, y: this.container.children[i].scale.y - 0.15 }, 500, null, true)    }  }  moveToEnd () {    for (let i = 0; i < this.container.children.length; i += 1) {      const angle = (Math.random() - 0.5) * 50 + this.container.children[i].angle;      var move = this.game.add.tween(this.container.children[i])        .to({x: this.container.children[i].x + this.targetX - this.x, y: this.container.children[i].y + this.targetY - this.y, angle}, 500)      move.onComplete.add(() => {        this.isMoving = false;      })      move.start();    }    setTimeout(() => { this.game.nextScene.dispatch() }, 1500);  }  shake () {    if (this.isMoving) {      return;    }    const randomIndex = Math.floor(Math.random() * this.container.children.length);    const tween1 = this.game.add.tween(this.container.children[randomIndex])      .to({ angle: this.container.children[randomIndex].angle - 10 }, 100)    const tween2 = this.game.add.tween(this.container.children[randomIndex])      .to({ angle: this.container.children[randomIndex].angle + 10 }, 100)    const tween3 = this.game.add.tween(this.container.children[randomIndex])      .to({ angle: this.container.children[randomIndex].angle - 10 }, 100)    const tween4 = this.game.add.tween(this.container.children[randomIndex])      .to({ angle: this.container.children[randomIndex].angle + 10 }, 100)    tween1.chain(tween2);    tween2.chain(tween3);    tween3.chain(tween4);    tween1.start();  }}