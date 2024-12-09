
import GameObject from "./GameObject"
import Input from "./Input"
import Player from "./Player"
import enemy from "./enemy.js"
import Background from './Background.js'

export default class Game { // skapar klassen
  constructor(width, height) { // klassens constructor
    this.width = width
    this.height = height
    this.input = new Input(this)
    this.player = new Player(0, 0, 25, 25, "green", this)
    this.enemy = new enemy(0, 0, 30, 30, "green", this)
    console.log("Ny instans av game ", this.width)
    this.box = new GameObject(40, 100, 200, 200, "purple")


    this.background = new Background(this)
    this.speed = 1

  }

  update(deltaTime) {
    this.box.update(deltaTime)
   
    this.player.update(deltaTime)
    this.background.update(deltaTime)
    this.enemy.update(deltaTime)
  }

  draw(ctx) {
    this.box.draw(ctx)
    
    this.background.backgroundLayers[0].draw(ctx)
    this.background.draw(ctx)

    this.player.draw(ctx)
    this.enemy.draw(ctx)
  
    
  }
  }
 