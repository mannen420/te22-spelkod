import GameObject from "./GameObject"




export default class enemy extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game


    this.image = new Image()
    this.image.src = "./src/assets/AnimationSheet_Character.png"

    this.frameWidth = 32
    this.frameHeight = 32
    this.frameX = 0
    this.frameY = 0
    this.maxFrames = 7
    this.timer = 0
    this.fps = 8
    this.interval = 1000 / this.fps

    this.x = 0
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

      if (this.game.input.keys.has("ArrowLeft")) {
        this.x += this.maxSpeed
      }
      if (this.game.input.keys.has("ArrowRight")) {
        this.x -= this.maxSpeed
      }
      if (this.game.input.keys.has("ArrowUp")) {
        this.y += this.maxSpeed
      }
      if (this.game.input.keys.has("ArrowDown")) {
        this.y -= this.maxSpeed
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
