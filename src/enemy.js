import GameObject from "./GameObject"
import enemyimage from "./assets/AnimationSheet_Character.png"



export default class enemy extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game


    this.image = new Image()
    this.image.src = enemyimage

    this.frameWidth = 32
    this.frameHeight = 32
    this.frameX = 0
    this.frameY = 0
    this.maxFrames = 7
    this.timer = 0
    this.fps = 8
    this.interval = 1000 / this.fps

    this.x = Math. random() 
    this.y = 0
    this.Speed = 3
    this.maxSpeed = 10
    this.color = "255, 0, 0"
   
  }
  update(deltaTime) {

       if (this.timer > this.interval) {
       this.frameX++
       this.timer = 0
     } else {
       this.timer += deltaTime
     }

     if (this.frameX >= this.maxFrames) {
       this.frameX = 0
    }
this.frameY = 3
this.maxFrames = 7
     
    if(this.x < 831){
        this.x += this.Speed
    }
    if(this.x > 831){
        this.x -= this.Speed
    }
    if(this.y < 411){
        this.y += this.Speed
    }
    if(this.y > 411){
        this.y -= this.Speed
    }

      if (this.game.input.keys.has("a")) {
        this.x += this.maxSpeed
      }
      if (this.game.input.keys.has("d")) {
        this.x -= this.maxSpeed
      }
      if (this.game.input.keys.has("w")) {
        this.y += this.maxSpeed
      }
      if (this.game.input.keys.has("s")) {
        this.y -= this.maxSpeed
      }

    if (this.x + 32 > 831 && this.y + 32 > 411 && this.x < 831 + 32 && this.y < 411 + 32){
      this.framex = 0
      this.frameY = 8
      this.maxFrames = 8

    }
     
}

  draw(ctx) {
    // ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.image,
      this.frameWidth * this.frameX,
      this.frameHeight * this.frameY,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.width * 3,
      this.height * 3,
    ) // source x, y, w, h, destination x, y, w, h
  }
}
