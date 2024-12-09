export default class Layer {
    constructor(game, width, height, speed, image) {
      this.game = game
      this.width = width
      this.height = height
      this.speed = speed
      this.image = image
      this.x = 0
      this.y = 0
      this.speedX = 0
      this.maxSpeed = 10
      this.speedY = 0
      
    
    }
  
    update(deltaTime) {
      if (this.x <= -this.width) {
        this.x = 0
        this.x -= this.game.speed * this.speed
      }
      if (this.x >= +this.width) {
        this.x = 0
        this.x += this.game.speed * this.speed
      }
      if (this.y <= -this.height) {
        this.y = 0
        this.y -= this.game.speed * this.speed
      }
      if (this.y >= +this.height) {
        this.y = 0
        this.y += this.game.speed * this.speed
      }

      if (this.game.input.keys.has("ArrowLeft")) {
        this.speedX = +this.maxSpeed
      }
      if (this.game.input.keys.has("ArrowRight")) {
        this.speedX = -this.maxSpeed
      }
      if (
        this.game.input.keys.has("ArrowRight") &&
        this.game.input.keys.has("ArrowLeft")
      ) {
        this.speedX = 0
      }
      if (
        !this.game.input.keys.has("ArrowRight") &&
        !this.game.input.keys.has("ArrowLeft")
      ) {
        this.speedX = 0
      }
  
      if (this.game.input.keys.has("ArrowUp")) {
        this.speedY = +this.maxSpeed
      }
      if (this.game.input.keys.has("ArrowDown")) {
        this.speedY = -this.maxSpeed
      }
  
      if (
        !this.game.input.keys.has("ArrowUp") &&
        !this.game.input.keys.has("ArrowDown")
      ) {
        this.speedY = 0
      }
      this.x += this.speedX
      this.y += this.speedY

      // console.log(this.speedY)
      // console.log(this.speedX)
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
      ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
      ctx.drawImage(this.image, this.x - this.width, this.y, this.width, this.height)
      ctx.drawImage(this.image, this.x , this.y - this.height, this.width, this.height)
      ctx.drawImage(this.image, this.x , this.y + this.height, this.width, this.height)
      ctx.drawImage(this.image, this.x - this.width , this.y + this.height, this.width, this.height)
      ctx.drawImage(this.image, this.x + this.width , this.y + this.height, this.width, this.height)
      ctx.drawImage(this.image, this.x - this.width , this.y - this.height, this.width, this.height)
      ctx.drawImage(this.image, this.x + this.width , this.y - this.height, this.width, this.height)
    
    
    
    }
  }