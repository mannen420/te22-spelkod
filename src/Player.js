import GameObject from "./GameObject"

export default class Player extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game
    this.grounded = false

    this.image = new Image()
    this.image.src = "./src/assets/gongus.png"

    this.frameWidth = 129
    this.frameHeight = 129
    this.frameX = 0
    this.frameY = 0
    this.maxFrames = 3
    this.timer = 0
    this.fps = 8
    this.interval = 1000 / this.fps

    this.speed = 0
    this.x = 831
    this.y = 411
    this.maxSpeed = 0.1
    this.color = "255, 0, 0"
}

  update(deltaTime) {
    if (this.game.input.keys.has("a")) {
      this.speed += this.maxSpeed
    }
     if (this.game.input.keys.has("d")) {
      this.speed += this.maxSpeed
     }

    if (this.game.input.keys.has("w")) {
       this.speed -= this.maxSpeed
     }
     if (this.game.input.keys.has("s")) {
       this.speed += this.maxSpeed
     }

     if (
       !this.game.input.keys.has("w") &&
       !this.game.input.keys.has("s") &&
       !this.game.input.keys.has("a") &&
       !this.game.input.keys.has("d")
     ) {
      this.speed = 0
     }
 

    

    if (this.speed != 0) {
       this.frameY = 0
       this.maxFrames = 4
     }else{
       this.frameY = 0
       this.maxFrames = 0
     }

     if (this.speed != 0) {
      this.frameY = 0
      this.maxFrames = 4
    }else{
      this.frameY = 0
      this.maxFrames = 0
    }

  

    if (this.timer > this.interval) {
       this.frameX++
       this.timer = 0
     } else {
       this.timer += deltaTime
     }

     if (this.frameX >= this.maxFrames) {
       this.frameX = 0
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